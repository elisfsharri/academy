import { Select } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Language() {

  return (
    <Select
      native
      color='secondary'
      IconComponent={ExpandMoreIcon}
    >
      <option value='en'>
        english
      </option>
      <option value='it'>
        italian
      </option>
    </Select>
  )

}

export default Language
