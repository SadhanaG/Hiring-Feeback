var express = require('express');
var app = express();
var path = require('path');
// Required extra middleware layer as a body-parser to handle the POST request
var bodyParser = require('body-parser');
//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded( {extended: false}));

app.use(express.static(__dirname + '/public/components'));
app.use(express.static(__dirname + '/public/assets/'));
app.get('/' , function(req, res){
  res.sendFile(path.join('index.html'))
});



//POST the request to server and get the response
app.post("/data",function(req, res){
  var cDate =  req.body.txt_date;
  var cName =  req.body.c_name;
  var cPosition = req.body.c_position;
  var cTechSkill = req.body.c_tech_skill;
  var round = req.body.round;
  var roundText = req.body.txt_round;
  var panel = req.body.panel;
  var panelText = req.body.txt_panel;
  var comSkill = req.body.com_skill;
  var comSkillText = req.body.txt_com_skill;
  var intSkill = req.body.int_skill;
  var intSkillText = req.body.txt_int_skill;
  var leadSkill = req.body.lead_skill;
  var leadSkillText = req.body.txt_lead_skill;
  var teamMang = req.body.team_mang;
  var teamMangText = req.body.txt_team_mang;
  var logicSkill = req.body.logic_skill;
  var logicSkillText = req.body.txt_logic_skill;
  var aptiSkill = req.body.apti_skill;
  var aptiSkillText = req.body.txt_apti_skill;
  var proSkill = req.body.pro_skill;
  var proSkillText = req.body.txt_pro_skill;
  var techOneText = req.body.skill_one;
  var techOne = req.body.sel_skill_one;
  var techOneRemark = req.body.txt_skill_one;
  var techTwoText = req.body.skill_two;
  var techTwo = req.body.sel_skill_two;
  var techTwoRemark = req.body.txt_skill_two;
  var techThreeText = req.body.skill_three;
  var techThree = req.body.sel_skill_three;
  var techThreeRemark = req.body.txt_skill_three;
  var techFourText = req.body.skill_four;
  var techFour = req.body.sel_skill_four;
  var techFourRemark = req.body.txt_skill_four;
  var rate = req.body.sel_rate;
  var overAllRemark = req.body.txt_rate;
  var rRadio = req.body.r_radio;

  var sendValues =  '                                                   Date:  '+ cDate + '\n'+ '\n' +
                    '                         Interview Assessment Sheet                     '+ '\n' +'\n' +

                    'Candidate Name                 :     ' + cName + '\n' +
                    'Position appiled for           :     ' + cPosition + '\n' +
                    'Technical Skill                :     ' + cTechSkill + '\n' +
                    'Round                          :     ' + round + '     ' + 'Remark      :     ' + roundText + '\n'+
                    'Panel                          :     ' + panel + '     ' + 'Remark      :     ' + panelText + '\n'+
                    '------------------------------------------------------------------------'+ '\n' +
                    'Assessment Parameters' + '\n' +
                    '------------------------------------------------------------------------'+ '\n' +
                    'Communication Skills           :     ' + comSkill + '      ' + comSkillText + '\n' +
                    'Interpersonal Skills           :     ' + intSkill + '      ' + intSkillText + '\n' +
                    'Leadership Skills              :     ' + leadSkill + '     ' + leadSkillText + '\n' +
                    'Team Management                :     ' + teamMang  + '     ' + teamMangText + '\n' +
                    'Logic and Reasonin Skills      :     ' + logicSkill  + '     ' + logicSkillText + '\n' +
                    'Attitude/Aptitude and Culture  :     ' + aptiSkill  + '     ' + aptiSkillText + '\n' +
                    'Program Solving Skills    :     ' + proSkill  + '     ' + proSkillText + '\n' +
                    '-------------------------------------------------------------------------'+ '\n' +
                    'Technical Skills' + '\n' +
                    '-------------------------------------------------------------------------'+ '\n' +
                    +'1. '+ techOneText +    '        ' + techOne +  '        '  + techOneRemark + '\n' +
                    +'2. '+ techTwoText +    '        '  + techTwo +  '        '  + techTwoRemark + '\n' +
                    +'3. '+ techThreeText +  '        '  + techThree +  '        '  + techTwoRemark + '\n' +
                    +'4. '+ techFourText +   '        '  + techFour +  '          '  + techFourRemark + '\n' +
                    '-------------------------------------------------------------------------'+ '\n' +
                    'Overall Rating          :    ' + rate +  '       '  + overAllRemark + '\n' +
                    '-------------------------------------------------------------------------'+ '\n' +
                    'Recommendation                  Round II	              ' + rRadio + '\n' +
                    '-------------------------------------------------------------------------' + '\n' ;

        var dataSubmit ="<div style='width:70%; margin:auto;'>"+
                        "<form action='/pdfGenerate'>"+
                        "<table width='100%' cellpadding='5px' style='background-color:#f4f4f4; border:1px solid #000;'>"+
                        "<tr>"+"<td colspan='12'>"+ "Date: " +  cDate +  "</td>" + "</tr>"+ "<br>"+
                        "<tr>"+"<td colspan='12'>"+ "<b>"+"Interview Assessment Sheet"+ "</b>" +"</td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Candidate Name"+"</td>"+"<td colspan='8'>"+cName+"</td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Position appiled for"+"</td>"+"<td colspan='8'>"+cPosition+"</td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Technical Skill"+"</td>"+"<td colspan='8'>"+cTechSkill+"</td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Round"+"</td>"+"<td colspan='4'>"+round+"</td>"+"<td colspan='4'>"+roundText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Panel"+"</td>"+"<td colspan='4'>"+panel+"</td>"+"<td colspan='4'>"+panelText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='12'>"+"<b>"+"Assessment Parameters"+"</b>"+"</td>"+"<tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Communication Skills"+"</td>"+"<td colspan='4'>"+comSkill+"</td>"+"<td colspan='4'>"+comSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Interpersonal Skills"+"</td>"+"<td colspan='4'>"+intSkill+"</td>"+"<td colspan='4'>"+intSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Leadership Skills"+"</td>"+"<td colspan='4'>"+leadSkill+"</td>"+"<td colspan='4'>"+leadSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Team Management"+"</td>"+"<td colspan='4'>"+teamMang+"</td>"+"<td colspan='4'>"+teamMangText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Logic and Reasonind Skills"+"</td>"+"<td colspan='4'>"+logicSkill+"</td>"+"<td colspan='4'>"+logicSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Attitude/Aptitude and Culture"+"</td>"+"<td colspan='4'>"+aptiSkill+"</td>"+"<td colspan='4'>"+aptiSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='4'>"+"Program Solving Skills"+"</td>"+"<td colspan='4'>"+proSkill+"</td>"+"<td colspan='4'>"+proSkillText+"<td>"+"</tr>"+
                        "<tr>"+ "<td colspan='12'>"+"<b>"+"Technical Skills"+"</b>"+"</td>"+"<tr>"+
                        "<tr>"+"<td colspan='4'>"+"1. "+ techOneText +"</td>"+"<td colspan='4'>"+techOne +"</td>"+"<td colspan='4'>"+techOneRemark +"</td>"+"</tr>"+
                        "<tr>"+"<td colspan='4'>"+"2. "+ techTwoText +"</td>"+"<td colspan='4'>"+techTwo +"</td>"+"<td colspan='4'>"+techTwoRemark +"</td>"+"</tr>"+
                        "<tr>"+"<td colspan='4'>"+"3. "+ techThreeText +"</td>"+"<td colspan='4'>"+techThree +"</td>"+"<td colspan='4'>"+techThreeRemark +"</td>"+"</tr>"+
                        "<tr>"+"<td colspan='4'>"+"4. "+ techFourText +"</td>"+"<td colspan='4'>"+techFour +"</td>"+"<td colspan='4'>"+techFourRemark +"</td>"+"</tr>"+
                        "<tr>"+"<td colspan='4'>"+"1. "+ "Overall Rating" +"</td>"+"<td colspan='4'>"+rate +"</td>"+"<td colspan='4'>"+overAllRemark +"</td>"+"</tr>"+
                        "<tr>"+"<td colspan='4'>"+"1. "+ "Recommendation" +"</td>"+"<td colspan='4'>"+"Round II" +"</td>"+"<td colspan='4'>"+rRadio +"</td>"+"</tr>"+
                        "</table>"+"<br><br>"+
                        "<label><h4>Generate the form into .doc file            </label><input type='submit' value='Submit' style='right:10px;'></h4>"+"</form>"+"</div>"+"<br><br>";
        res.send(dataSubmit);

        app.get('/pdfGenerate', function(req, res){
            res.send(cName + ' - Interview Assessment Result Generated');
            //Create new file
            fs = require('fs');
            fs.writeFile( 'CandidateFeedbackResult/'+cName+'_'+cPosition+'.doc', sendValues , function (err) {
              if (err) return console.log(err);
              console.log( sendValues >cName+'_'+cPosition+'.doc');
            });
        });
        /*
        //including the pdfkit module
        var PDF = require('pdfkit');
        var fs = require('fs');
        //creating a new PDF object
        doc = new PDF();
        //to write the content on the file system
        doc.pipe(fs.createWriteStream('CandidateFeedbackResult/'+cName+'_'+cPosition+'.pdf'));
        //adding the text to be written,
        doc.text(sendValues, 100, 100);
        //we end the document writing.
        doc.end(); */
  });


//Start the server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});
