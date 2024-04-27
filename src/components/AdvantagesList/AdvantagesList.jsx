import svg from 'assets/icons/symbol-defs.svg';
import { AdvantageItem, AdvantagesListWrapper } from './AdvantagesList.styled';

const AdvantagesList = ({ van }) => {
  const {
    adults = '',
    transmission = '',
    engine = '',
    details: {
      tv = '',
      airConditioner = '',
      kitchen = '',
      beds = '',
      CD = '',
      radio = '',
      hob = '',
      toilet = '',
      shower = '',
      freezer = '',
      gas = '',
      water = '',
      microwave = '',
    } = {},
  } = van;

  return (
    <AdvantagesListWrapper>
      {[
        { label: 'Adults', value: adults, svgpath: `${svg}#icon-users` },
        {
          label: '',
          value: transmission,
          svgpath: `${svg}#icon-conect`,
        },
        { label: 'AC', value: airConditioner, svgpath: `${svg}#icon-wind` },
        { label: 'CD', value: CD, svgpath: `${svg}#icon-musik` },
        { label: 'engine', value: engine, svgpath: `${svg}#icon-gasstation` },
        { label: 'TV', value: tv, svgpath: `${svg}#icon-tv` },
        { label: 'Kitchen', value: kitchen, svgpath: `${svg}#icon-fork` },
        { label: 'Beds', value: beds, svgpath: `${svg}#icon-bed` },
        { label: 'Radio', value: radio, svgpath: `${svg}#icon-radio` },
        { label: 'Hob', value: hob, svgpath: `${svg}#icon-cook` },
        { label: 'Toilet', value: toilet, svgpath: `${svg}#icon-toilet` },
        { label: 'Shower', value: shower, svgpath: `${svg}#icon-shower` },
        { label: 'Freezer', value: freezer, svgpath: `${svg}#icon-freezer` },
        { label: '', value: water, svgpath: `${svg}#icon-water` },
        {
          label: 'Microwave',
          value: microwave,
          svgpath: `${svg}#icon-microwave`,
        },
        { label: '', value: gas, svgpath: `${svg}#icon-gas` },
      ].map(
        ({ label, value, svgpath }) =>
          value !== 0 &&
          value !== '' && (
            <AdvantageItem key={label}>
              <svg>
                <use href={svgpath}></use>
              </svg>
              {value.length <= 1 ? null : value} {label}
            </AdvantageItem>
          )
      )}
    </AdvantagesListWrapper>
  );
};

export default AdvantagesList;
