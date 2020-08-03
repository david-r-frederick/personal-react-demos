import mostlySunnyImg from '../../img/partlysunny.png';
import rainyImg from '../../img/rainy.png';
import snowyImg from '../../img/snowy.png';
import stormyImg from '../../img/stormy.png';
import sunnyImg from '../../img/sunny.png';
import cloudyImg from '../../img/cloudy.png';
import questionMarkImg from '../../img/questionMark.png';

const images = Array(7).fill(questionMarkImg);

const imagesObj = {
  'Clear': sunnyImg,
  'Clouds': cloudyImg,
  'Rain': rainyImg,
  'Snow': snowyImg,
  'Storm': stormyImg
}

const initialState = {
    dayImages: images,
    hourImages: images,
    highTemps: ['', '', '', '', '', '', ''],
    lowTemps: ['', '', '', '', '', '', ''],
    hourTemps: ['', '', '', '', '', '', ''],
    weatherDescs: ['', '', '', '', '', '', ''],
    currentData: null,
    currentImage: sunnyImg
};

const reducer = (state = initialState, action) => {
  if(action.type === 'FETCH_WEATHER'){
    return {
      ...state,
      highTemps: action.resData.daily.map(el => {
        return Math.round(el.temp.max);
      }),
      lowTemps: action.resData.daily.map(el => {
        return Math.round(el.temp.min);
      }),
      hourTemps: action.resData.hourly.slice(0, 7).map(el => {
        return Math.round(el.temp).toFixed(0);
      }),
      dayImages: action.resData.daily.map(el => {
        if(imagesObj[el.weather[0].main]){
          return imagesObj[el.weather[0].main];
        } else {
          return sunnyImg;
        }
      }),
      hourImages: action.resData.hourly.map(el => {
        if(imagesObj[el.weather[0].main]){
          return imagesObj[el.weather[0].main];
        } else {
          return sunnyImg;
        }
      }),
      currentImage: imagesObj[action.resData.current.weather[0].main],
      currentData: action.resData.current,
    }
  }
  return state;
};

export default reducer;
