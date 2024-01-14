function check(){
    let arrayError = new Array();
    let myname = document.getElementById("myname").value
    if(myname.length>0){
        
    } 
    else{
        arrayError[0] = 0;
    }       

    var lastname = document.getElementById("lastname").value
    if(lastname.length>0){
       
    }
    else{
        arrayError[1] = 1;
    }

    var numbers = /^[0-9]+$/;    
    let Number = document.getElementById("number").value
    if(Number.match(numbers) && Number.length==10){
        
    } 
    else{
       arrayError[2] = 2;
    }

    let Date = document.getElementById("date").value
    if(Date.length>0){
        
    }
    else{
        arrayError[3] = 3;
    }


    let Education = document.getElementById("education").value
    if(Education == "--"){
        arrayError[4] = 4;
    }
    else{
        
    }
    
    let Teacher = document.getElementById("teacher").value
    if(Teacher.length>0){
        
    } 
    else{
        arrayError[5] = 5;
    }       

    let Address = document.getElementById("address").value
    if(Address.length>0){

    }
    else{
        arrayError[6]=6;
    }
    
    
    let Address2 = document.getElementById("address2").value
    if(Address2.length>0){
        console.log(Address2)
    } 
    else{
        arrayError[7] = 7;
    } 
    

    let Address3 = document.getElementById("address3").value
    if(Address3.length>0){
        console.log(Address3)
    } 
    else{
        arrayError[8] = 8;
    }

    let Address4 = document.getElementById("address4").value
    if(Address4.length>0){
        console.log(Address4)
    } 
    else{
        arrayError[9] = 9;
    }

    let Address5 = document.getElementById("address5").value
    if(Address5.length>0){
        console.log(Address5)
    } 
    else{
        arrayError[10] = 10;
    }  

    let Pose = document.getElementById("pose").value
    if(Pose.match(numbers) && Pose.length==5){
        console.log(Pose)
    }
    else{
        arrayError[11] = 11;
    }

    let Phone = document.getElementById("phone").value
    let FirstNumber = String(Phone)[0]
    if(Phone.match(numbers) && Phone.length==10 && FirstNumber=='0'){
        console.log(Phone)
    }
    else{
        arrayError[12] = 12;
    }   
    
    let PhoneH = document.getElementById("phoneh").value
    let FirstNumberHome = String(PhoneH)[0]
    let SecondNumberHome = String(PhoneH)[1]
    if(PhoneH.match(numbers) && PhoneH.length==10 && FirstNumberHome=='0'&& SecondNumberHome=='1'){
        console.log(PhoneH)
    }
    else if(PhoneH.length==0){ 
        
    }
    else if(PhoneH.length>0) {
        arrayError[13] = 13;
    }  

    let Subject = document.getElementById("sub").value
    if(Subject == "โปรดระบุ"){
        arrayError[14] = 14;
    }
    else{
        console.log(Subject)
    }

    if(arrayError.length==0){
        
        swal("ระบุครบถ้วน", "ส่งข้อมูลสำเร็จ", "success");
        window.location.href="formTable.html";
    }
    else if(arrayError[0] == 0){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกชื่อให้ถูกต้อง", "error");
    }
    else if(arrayError[1] == 1){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกนามสกุลให้ถูกต้อง", "error");
    }
    else if(arrayError[2] == 2){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกเลขประจำตัวให้ครบ", "error");
    }
    else if(arrayError[3] == 3){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกวันเดือนปีให้ถูกต้อง", "error");
    }
    
    else if(arrayError[4] == 4){
        swal("ระบุไม่ครบครบถ้วน", "กรุณาระบุชั้นปีที่ศึกษา", "error");
    }
    else if(arrayError[5] == 5){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกอาจารย์ที่ปรึกษา", "error");
    }
    else if(arrayError[6] == 6){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกบ้านเลขที่", "error");
    }
    else if(arrayError[7] == 7){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกหมู่ที่", "error");
    }
    else if(arrayError[8] == 8){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกตำบล", "error");
    }
    else if(arrayError[9] == 9){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกอำเภอ", "error");
    }
    else if(arrayError[10] == 10){
        swal("ระบุไม่ครบครบถ้วน", "กรุณกรอกจังหวัด", "error");
    }
    else if(arrayError[11] == 11){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง", "error");
    }
    else if(arrayError[12] == 12){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง", "error");
    }
    else if(arrayError[13] == 13){
        swal("ระบุไม่ครบครบถ้วน", "กรุณากรอกเบอร์โทรศัพท์บ้านให้ถูกต้อง", "error");
    }
    else if(arrayError[14] == 14){
        swal("ระบุไม่ครบครบถ้วน", "กรุณาระบุสาขาวิชา", "error");
    }
}  
function checkTable(){
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
          intable.setAttribute('data-content', rowCnt +'.');

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


}    












    
