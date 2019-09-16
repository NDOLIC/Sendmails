const students = require('./students');
var nodemail = require('./node_modules/nodemailer');

var transporter = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'tblaguese1@gmail.com',
        pass:'',
    }
});
const mailOptions = (student)=> {
    return {
        from: 'tblaguese1@gmail.com',
        to: student.email,
        subject: 'Remainder',
        text: `Hi ${student.Student}, 
        
        To give you an update on how you are doing in class. Please continue reading to understand why this is, and how you can improve.
        As you know, Moringa School looks at 3 major aspects of your learning in considering whether you proceed to the next module:
        Attendance and punctuality.
        Completion and quality of your IPs.
        Positive contributions to the classroom environment; are you working well with others, and interpersonal skills.
       As it stands:

Your Attendance:
        -Attendance: ${student.Attendance}%.

As for your IPs:
        -IP1: ${student.IP1}/31
        -IP2: ${student.IP1}/22
        -IP3: ${student.IP3}/22
        -IP4: ${student.IP4}/28

As Reasons:
        -reason (first recommendation): ${student.reason1}
        -reason (final recommendation): ${student.reason2}
As Recommendations:
        -First recommendation: ${student.Firstrecommendation}
        -Final recommentation: ${students.Finalrecommendation}
As the Decisions:
        -Firstrecommendation: ${student.Firstrecommendation}
        -Finalrecommendation: ${student.Finalrecommendation}
       
        Follow up with your TM if you have any questions
        
        Best,

        Classroom Team.`
    }
};
students.forEach(student => {
    transporter.sendMail(mailOptions(student), function(error, info){
        if (error) {
            console.log(error);
        }else{
            console.log('Email sent' + info.response);
    
        }
    }); 
});