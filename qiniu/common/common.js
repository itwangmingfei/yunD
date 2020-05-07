var BLOCK_SIZE = 4 * 1024 * 1024;

function addUploadBoard(file, config, key, type) {
  var count = Math.ceil(file.size / BLOCK_SIZE);
  var board = widget.add("tr", {
    data: { num: count, name: key, size: file.size },
    node: $("#fsUploadProgress" + type)
  });
  if (file.size > 100 * 1024 * 1024) {
    $(board).html("本实例最大上传文件100M");
    return "";
  }
  count > 1 && type != "3"
    ? ""
    : $(board)
      .find(".resume")
      .addClass("hide");
  return board;
}

function createXHR() {
  var xmlhttp = {};
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xmlhttp;
}

function getBoardWidth(board) {
  var total_width = $(board)
    .find("#totalBar")
    .outerWidth();
  $(board)
    .find(".fragment-group")
    .removeClass("hide");
  var child_width = $(board)
    .find(".fragment-group li")
    .children("#childBar")
    .outerWidth();
  $(board)
    .find(".fragment-group")
    .addClass("hide");
  return { totalWidth: total_width, childWidth: child_width };
}

function controlTabDisplay(type) {
  switch (type) {
    case "sdk":
      document.getElementById("box2").className = "";
      document.getElementById("box").className = "hide";
      break;

  }
}

var getRotate = function (url) {
  if (!url) {
    return 0;
  }
  var arr = url.split("/");
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === "rotate") {
      return parseInt(arr[i + 1], 10);
    }
  }
  return 0;
};