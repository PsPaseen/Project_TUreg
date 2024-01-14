var temp;
var count = 1;

var arr_top = new Array();
arr_top = ['ลำดับ', 'รหัสวิชา', 'ชื่อวิชา', 'section', 'วัน/เวลา', 'หน่วยกิต', 'ชื่อผู้สอน' ,'ผู้สอนอนุญาต'];
function addRows(table_id){ 
  var Tab = document.getElementById(table_id);

  var rowCnt = Tab.rows.length;   
  var tr = Tab.insertRow(rowCnt);

  for (var c = 0; c < arr_top.length; c++) {
      var td = document.createElement('td');
      td = tr.insertCell(c);
     if(rowCnt<=10){
      if (c == 0) { 
          var intable = document.createElement('p');

          // set input attributes.
          intable.setAttribute('id', 'description');
          intable.setAttribute('data-content', rowCnt);

          td.appendChild(intable);
      }
      else if (c == 5){
          var intable = document.createElement('input');
          intable.setAttribute('type', 'number');
          intable.setAttribute('value', '0');

          td.appendChild(intable);
      }
      else if (c == 7){
          var intable = document.createElement('input');
          intable.setAttribute('type', 'checkbox');
          intable.setAttribute('value', 'on');

          td.appendChild(intable);
      }
      else{
          var intable = document.createElement('input');
          intable.setAttribute('type', 'text');
          intable.setAttribute('value', '');

          td.appendChild(intable);
      }
  }

}
}

function deleteRows(table_id){
  var table = document.getElementById(table_id);
  var rowCount = table.rows.length;
  if(rowCount >= '2'){
    var row = table.deleteRow(rowCount-1);
    rowCount--;
  }
  else{
    alert("ตารางต้องมีอย่างน้อย 1 ช่อง\n");
  }
}

function table_to_array(table_id) {
  var Tab = document.getElementById(table_id);
  var arr_values = [];

  for (row = 1; row < Tab.rows.length; row++) {
    var info_Array = {};
    var count = 0;
      for (c = 0; c < Tab.rows[row].cells.length; c++) {  
            var element = Tab.rows.item(row).cells[c];
            if(element.childNodes[0].value == '' || element.childNodes[0].value < 1)
            {
              count -= 1;
            }
            if(c==1)
            {
              info_Array["subjectCode"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 2)
            {
              info_Array["subjectName"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 3)
            {
              info_Array["subjectSection"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 4)
            {
              info_Array["subjectDate"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 5)
            {
              info_Array["subjectCredit"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 6)
            {
              info_Array["subjectTeacher"] = element.childNodes[0].value;
              count++;
            }
            else if(c == 7)
            {
              if(element.childNodes[0].value == "on")
              {
                info_Array["subjectTeacherCheck"] = false;
              }
              else
              {
                info_Array["subjectTeacherCheck"] = true;
              }
            }
        }
    if(count == 6)
    {
      arr_values.push(info_Array);
    }
    else
    {
      if(table_id == 'add_subject')
      {
        window.alert("กรุณากรอกข้อมูลในตารางเพิ่มรายวิชาให้ครบถ้วนและถูกต้อง\n");
        return false;
      }
      else if(table_id == 'del_subject')
      {
        window.alert("กรุณากรอกข้อมูลในตารางถอนรายวิชาให้ครบถ้วนและถูกต้อง\n");
        return false;
      }
    }
  }
  if(table_id == 'add_subject')
  {
    info["addSubjectList"] = arr_values;
  }
  else if(table_id == 'del_subject')
  {
    info["dropSubjectList"] =  arr_values;
  }

}