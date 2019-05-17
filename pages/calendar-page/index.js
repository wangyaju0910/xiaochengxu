import calendar from '../../component/calendar/main.js';
const conf = {
  onShow:function(){
    calendar({
      multi: true,//是否开启多选
    });
  }
}
Page(
  conf
)