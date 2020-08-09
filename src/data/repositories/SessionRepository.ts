import { MongodbRepository } from '@nindoo/mongodb-data-layer'
import { Session } from '../../domain/Session'
import { Db } from 'mongodb'

export class SessionRepository extends MongodbRepository<Session> {
  constructor (db: Db) {
    super(db.collection('sessions'))
  }

  async saveSession (session: Session) {
    const exists = await this.existsById(session._id)
    if (!exists) return this.create(session)

    await this.collection.deleteOne({ _id: session._id })
    await this.create(session)
    return session
  }

  async findByTelegramId (telegramId: number) {
    return this.findOneBy({ telegramId })
  }
}

export default { SessionRepository }
