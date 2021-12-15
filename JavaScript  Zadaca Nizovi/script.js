var str1 = "Hello World ";
var str2 = "From JavaScript";

var str3 = str1.concat(str2);

for (var i = 0; i < str3.length; i++) {
  if (i % 2 === 0) {
    document.write(`<span style="color:red;">${str3[i]}</span>`);
  } else {
    document.write(`<span style="color:black;">${str3[i]}</span>`);
  }
}
