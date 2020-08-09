import { ObjectId } from 'mongodb'

export type Session = {
  _id: ObjectId
  telegramId: number
  name: string
  age: number
  catCount: number
}
