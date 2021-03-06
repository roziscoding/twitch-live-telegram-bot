import id from './id'
import cat from './cat'
import raw from './raw'
import echo from './echo'

const commands = [
  id,
  cat,
  raw,
  echo
]

export const commandNames = commands.map(({ name }) => name)

export default commands
