import { FC } from 'react'; //, useState
import Select from 'react-select';

import { places } from './mocks';

export const Location: FC = () => {
  // const [city, setCity] = useState(null);
  return (
    <div className='location'>
      <form className='form'>
        <div className='form__item'>
          <div className='form__label'>Город</div>
          <div className='form__input'>
            <Select
              // value={city}
              placeholder='Выберите город'
              defaultMenuIsOpen={true}
              // onChange={(selectedCity) => setCity(selectedCity)}
              options={places.map((place) => ({
                value: place.city,
                label: place.city
              }))}
            />
          </div>
        </div>
        <div className='form__item'>
          <div className='form__label'>Пункт выдачи</div>
          <div className='form__input'></div>
        </div>
      </form>
    </div>
  )
}