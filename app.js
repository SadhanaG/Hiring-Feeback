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
  var aptiSkill = req.body.apti_skil;
  var aptiSkillText = req.body.txt_apti_skill;
  var proSkill = req.body.pro_Skill;
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
                    'Aptitude Skills           :     ' + aptiSkill  + '     ' + aptiSkillText + '\n' +
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

        res.send('Susscessfully submit the hiring feedback form');
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

        //Create new file
        fs = require('fs');
        fs.writeFile( 'CandidateFeedbackResult/'+cName+'_'+cPosition+'.doc', sendValues , function (err) {
          if (err) return console.log(err);
          console.log( sendValues >cName+'_'+cPosition+'.doc');
        });
  });
//Start the server
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});
