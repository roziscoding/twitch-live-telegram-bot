import { SessionRepository } from '../data/repositories/SessionRepository'
import { ObjectId } from 'mongodb'
import { Session } from '../domain/Session'

export type NewOrExistingSession = Omit<Session, '_id'> & { _id?: ObjectId }

export const save = (repository: SessionRepository) =>
  async (sessionParams: NewOrExistingSession) => {
    const id = sessionParams._id ?? new ObjectId()

    const { telegramId, name, age, catCount, ...otherProps } = sessionParams

    if (!telegramId) return null

    const session: Session = {
      _id: id,
      telegramId,
      name,
      age,
      catCount,
      ...otherProps
    }

    await repository.saveSession(session)

    return session
  }

export const findByTelegramId = (repository: SessionRepository) =>
  (telegramId: number) => repository.findByTelegramId(telegramId)

export const factory = (repository: SessionRepository) => ({
  save: save(repository),
  findByTelegramId: findByTelegramId(repository)
})

export type SessionService = ReturnType<typeof factory>

export default { factory }
