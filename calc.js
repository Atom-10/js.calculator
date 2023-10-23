function clickButton(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML;

  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "/" && result.innerHTML == "0") {
      result.innerHTML = "0";
  } else if (target_value == "*" && result.innerHTML == "0") {
      result.innerHTML = "0";
  } else if (target_value == "00" && result.innerHTML == "0") {
      target_value = "0";
  } else if (
      (result.innerHTML.endsWith("/") && target_value == "/") ||
      (result.innerHTML.endsWith("/") && target_value == "*") ||
      (result.innerHTML.endsWith("/") && target_value == "-") ||
      (result.innerHTML.endsWith("/") && target_value == "+") ||
      (result.innerHTML.endsWith("/") && target_value == ".") ||
      (result.innerHTML.endsWith("/") && target_value == "00")
  ) {
  } else if (
      (result.innerHTML.endsWith("*") && target_value == "/") ||
      (result.innerHTML.endsWith("*") && target_value == "*") ||
      (result.innerHTML.endsWith("*") && target_value == "-") ||
      (result.innerHTML.endsWith("*") && target_value == "+") ||
      (result.innerHTML.endsWith("*") && target_value == ".") ||
      (result.innerHTML.endsWith("*") && target_value == "00")
  ) {
  } else if (
      (result.innerHTML.endsWith("-") && target_value == "/") ||
      (result.innerHTML.endsWith("-") && target_value == "*") ||
      (result.innerHTML.endsWith("-") && target_value == "-") ||
      (result.innerHTML.endsWith("-") && target_value == "+") ||
      (result.innerHTML.endsWith("-") && target_value == ".") ||
      (result.innerHTML.endsWith("-") && target_value == "00")
  ) {
  } else if (
      (result.innerHTML.endsWith("+") && target_value == "/") ||
      (result.innerHTML.endsWith("+") && target_value == "*") ||
      (result.innerHTML.endsWith("+") && target_value == "-") ||
      (result.innerHTML.endsWith("+") && target_value == "+") ||
      (result.innerHTML.endsWith("+") && target_value == ".") ||
      (result.innerHTML.endsWith("+") && target_value == "00")
  ) {
  } else if (
      (result.innerHTML.endsWith(".") && target_value == "/") ||
      (result.innerHTML.endsWith(".") && target_value == "*") ||
      (result.innerHTML.endsWith(".") && target_value == "-") ||
      (result.innerHTML.endsWith(".") && target_value == "+") ||
      (result.innerHTML.endsWith(".") && target_value == ".")
  ) {
  } else if (
    (result.innerHTML.endsWith("/0") && target_value == "0") ||
    (result.innerHTML.endsWith("/0") && target_value == "00") || 
    (result.innerHTML.endsWith("/0") && target_value == "=")
  ) {
  } else if (
      (result.innerHTML.endsWith("*0") && target_value == "0") ||
      (result.innerHTML.endsWith("*0") && target_value == "00")
  ) {
  } else if (
    (result.innerHTML.endsWith("-0") && target_value == "0") ||
    (result.innerHTML.endsWith("-0") && target_value == "00")
  ) {
  } else if ((result.innerHTML.endsWith("+0") && target_value == "0") ||
    (result.innerHTML.endsWith("+0") && target_value == "00")
  ) {
  } else if (target_value == ".") {
    result.innerHTML += target_value;
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else if (result.innerHTML.endsWith("/0") || target_value == ".") {
    } else if (result.innerHTML.endsWith("*0") || target_value == ".") {
    } else if (result.innerHTML.endsWith("-0") || target_value == ".") {
    } else if (result.innerHTML.endsWith("+0") || target_value == ".") {
    } else {
      result.innerHTML += target_value;
    }
  }
}
