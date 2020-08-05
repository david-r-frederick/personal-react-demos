import rainyImg from '../../assets/rainy.png';
import snowyImg from '../../assets/snowy.png';
import stormyImg from '../../assets/stormy.png';
import sunnyImg from '../../assets/sunny.png';
import cloudyImg from '../../assets/cloudy.png';
import questionMarkImg from '../../assets/questionMark.png';

const images = Array(7).fill(questionMarkImg);

const imagesObj = {
  'Clear': sunnyImg,
  'Clouds': cloudyImg,
  'Rain': rainyImg,
  'Snow': snowyImg,
  'Storm': stormyImg,
  'Haze': cloudyImg
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