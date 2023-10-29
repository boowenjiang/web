(function() {
  let students = [
    {name: '张三', gender: '男', attendance: 90, grade: 80, feedback: '听课认真，但是作业有些马虎。'},
    {name: '李四', gender: '女', attendance: 85, grade: 90, feedback: '成绩不错，但是上课总是玩手机。'},
    {name: '王五', gender: '男', attendance: 80, grade: 70, feedback: '学习态度不够认真，需要改进。'},
    {name: '赵六', gender: '女', attendance: 95, grade: 85, feedback: '有困难及时向老师求助，但缺乏独立解决问题的能力。'},
    {name: '钱七', gender: '男', attendance: 75, grade: 65, feedback: '学习缺乏规划，需要更加主动。'},
    {name: '孙八', gender: '女', attendance: 100, grade: 95, feedback: '表现优秀，但需要注意保持良好状态。'}
  ]
  let total = students.length;
  let male = students.filter(s => s.gender === '男').length;
  let female = students.filter(s => s.gender === '女').length;
  let maleRatio = (male / total * 100).toFixed(2) + '%';
  let femaleRatio = (female / total * 100).toFixed(2) + '%';

//将数据显示在网页上
  document.querySelector('#total-number').textContent = total;
  document.querySelector('#male-ratio').textContent = maleRatio;
  document.querySelector('#female-ratio').textContent = femaleRatio
})();
(function() {
  var attendanceData = [85, 90, 92, 88, 70, 75, 86, 83, 62, 98, 83, 98];
// 画布相关变量
  var canvas = document.querySelector("#chuqin-canvas");
  var ctx = canvas.getContext("2d");
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
// 绘制坐标轴和标签
  ctx.beginPath();
  ctx.moveTo(50, 20);
  ctx.lineTo(50, canvasHeight - 50);
  ctx.lineTo(canvasWidth - 20, canvasHeight - 50);
  ctx.stroke();
  ctx.font = "16px Arial";
  ctx.fillText("月份", canvasWidth - 50, canvasHeight - 20);
  ctx.fillText("出勤率", 20, 20);
// 绘制折线图
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  for (var i = 0; i < attendanceData.length; i++) {
    var x = 50 + (canvasWidth - 70) / (attendanceData.length - 1) * i;
    var y = canvasHeight - 50 - (canvasHeight - 70) * attendanceData[i] / 100;
    if (i == 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
})();
(function() {
  var canvas = document.querySelector('#chengji-canvas');
  var ctx = canvas.getContext('2d');

  // 定义数据
  var data = [
    { name: '语文', score: 80 },
    { name: '数学', score: 90 },
    { name: '英语', score: 85 },
    { name: '物理', score: 70 },
    { name: '化学', score: 75 },
    { name: '生物', score: 80 }
  ];

  // 定义画布尺寸和边距
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var margin = 50;
  var graphWidth = canvasWidth - margin * 2;
  var graphHeight = canvasHeight - margin * 2;

  // 定义坐标轴原点和单位长度
  var originX = margin;
  var originY = canvasHeight - margin;
  var unitX = graphWidth / (data.length - 1);
  var unitY = graphHeight / 100;

  // 绘制坐标轴
  ctx.beginPath();
  ctx.moveTo(originX, originY);
  ctx.lineTo(originX + graphWidth, originY);
  ctx.moveTo(originX, originY);
  ctx.lineTo(originX, margin);
  ctx.stroke();

  // 绘制坐标轴刻度
  for (var i = 0; i < data.length; i++) {
    var x = originX + i * unitX;
    var y = originY + 10;
    ctx.moveTo(x, originY);
    ctx.lineTo(x, y);
    ctx.fillText(data[i].name, x - 20, originY + 20);
  }
  for (var i = 0; i <= 100; i += 10) {
    var x = originX - 10;
    var y = originY - i * unitY;
    ctx.moveTo(originX, y);
    ctx.lineTo(x, y);
    ctx.fillText(i, x - 20, y + 5);
  }
  ctx.stroke();

  // 绘制折线
  ctx.beginPath();
  ctx.moveTo(originX, originY - data[0].score * unitY);
  for (var i = 1; i < data.length; i++) {
    var x = originX + i * unitX;
    var y = originY - data[i].score * unitY;
    ctx.lineTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2);
  }
  ctx.stroke();
})();

