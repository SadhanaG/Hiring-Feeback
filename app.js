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
  var techOneText = req.body.txt_tech_one;
  var techOne = req.body.tech_one;
  var techOneRemark = req.body.tech_one_remark;
  var techTwoText = req.body.txt_tech_two;
  var techTwo = req.body.tech_two;
  var techTwoRemark = req.body.tech_two_remark;
  var techThreeText = req.body.txt_tech_three;
  var techThree = req.body.tech_three;
  var techThreeRemark = req.body.tech_three_remark;
  var techFourText = req.body.txt_tech_four;
  var techFour = req.body.tech_four;
  var techFourRemark = req.body.tech_four_remark;
  var rate = req.body.rate;
  var overAllRemark = req.body.overAll_remark;
  var rRadio = req.body.r_radio;

  var sendValues =  '                                                   Date:  '+ cDate + '\n'+ '\n' +
                    '                         Interview Assessment Sheet                     '+ '\n' +'\n' +

                    'Candidate Name            :     ' + cName + '\n' +
                    'Position appiled for      :     ' + cPosition + '\n' +
                    'Technical Skill           :     ' + cTechSkill + '\n' +
                    'Round                     :     ' + round + '     ' + 'Remark      :     ' + roundText + '\n'+
                    'Panel                     :     ' + panel + '     ' + 'Remark      :     ' + panelText + '\n'+
                    '------------------------------------------------------------------------'+ '\n' +
                    'Assessment Parameters' + '\n' +
                    '------------------------------------------------------------------------'+ '\n' +
                    'Communication Skills      :     ' + comSkill + '      ' + comSkillText + '\n' +
                    'Interpersonal Skills      :     ' + intSkill + '      ' + intSkillText + '\n' +
                    'Leadership Skills         :     ' + leadSkill + '     ' + leadSkillText + '\n' +
                    'Team Management           :     ' + teamMang  + '     ' + teamMangText + '\n' +
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

  });
//Start the server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});
