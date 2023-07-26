let that = null; // that接收组件的this

const sendThis = (a) => {
  that = a;
  window.console.log(that);
};

export default sendThis;