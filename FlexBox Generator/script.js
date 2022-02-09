function getValue(id) {
  return document.getElementById(id).value;
}
function changeFlex() {
  var flexContainer = document.getElementById("main");
  var display = getValue("display");
  var alignContent = getValue("align-content");
  var alignItems = getValue("align-items");
  var flexDirection = getValue("flex-direction");
  var flexWrap = getValue("flex-wrap");
  var cssDisplay = getValue("display-css-code");
  var justifyContent = getValue("justify-content");
  flexContainer.style = `display:${display};flex-direction:${flexDirection};flex-wrap:${flexWrap};justify-content:${justifyContent};align-items:${alignItems};align-content:${alignContent}`;
  var item1 = document.getValue("flex-div1");
  var item1Style = getValue("item1-style");
  item1.style = `align-self:${item1Style}`;
  var item2 = document.getElementById("flex-div2");
  var item2Style = getValue("item2-style");
  item2.style = `align-self:${item2Style}`;
  var item3 = document.getElementById("flex-div3");
  var item3Style = getValue("item3-style");
  item3.style = `align-self:${item3Style}`;
  cssDisplay.innerHTML = `.flex-container{</br>
      display:${display};</br>
      flex-direction:${flexDirection};</br>
      flex-wrap:${flexWrap};</br>
      justify-content:${justifyContent};</br>
      align-items:${alignItems};</br>
      align-content:${alignContent};</br>
}   </br></br>.box1{</br>
      align-self:${item1Style};</br>
}</br>
</br>.box2{</br>
      align-self:${item2Style};</br>
}</br>
</br>.box3{</br>
      align-self:${item3Style};</br>
};`;
}
changeFlex();
