const questions={
	'hello':`Hi,how may I help you? please reply with numbers to the corresponding questions:
			 	<br/>1.Gereral LP queries
				<br/>2.LP1 related queries. 
				<br/>3.LP2 related queries. 
				<br/>4.LP3 related queries. 
				<br/>5.workgroup related queries.
				<br/>6.Live projects.
				<br/>7.Internship 
				<br/>8.Bitrix24 account
				<br/>9.Other Questions`,
	'LP':{
		'1a: Is it necessary to attend LP1 for other domains as well if we want to take its training.?':'LP1 training is common across all the technologies',
		'1b: What to do after completing LP1/ LP2/ LP3?':'Mark your task as finished and wait for the next instructions.',
		'1c: Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college?': 'Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.',
		'1d:Can we skip any training if we are already clear with the basics?':'No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.',
		'1e:Resource links not working. What to do? Should we skip?':'Please do not skip any piece of training, in case you`re not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same.',
		'1f:Do I need to pass with the certificate in training.?':'No, but please ensure you complete the training.',
		'1g:I have complete one training, I didn`t find any options to continue my training.?':'Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.'
	},
	'LP1':{
	'2a:I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do? Tokens not working?':'For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.',
	'2b:I did follow the instructions given in the video, but still, I`m not able to log in for the LP1 task?':'Ensure you`re using the right token',
	'2c:What do I do after completing the quiz? how to complete the entire lp1?':'There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.',
	'2d:Do I need to register every time I do different tasks of lp1?':'There are codes in the LP1 assignment, and each time you have to register also, please check your task description.',
	'2e:I am not getting results of the training.?':'They are just for your practice and not for our record, so you don`t need the results of LP1 and LP2 training.',
	'2f:I had press finished button of LP1 task but want to resume the task, how to do that?':'You can go back to that task and then click on "More" and then "resume" to restart that task.',
	'2g:Can you help me by telling how can I get to know about my progress of LP 1s?':'There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.'
	},
	'LP2':{
	'3a:Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?':'Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you`ll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.',
	'3b:Are LP1/ LP2/ LP3 a part of the Live Project?':'LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.',
	'3c:Why only this training for LP2?':'They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.',
	'3d:The videos of LP2 are taking too much time to load.?':'We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more depending on your computer`s RAM and internet connection.'
	},
	'LP3':{
	'4a:will these training be enough for us to complete the LP3 and Live Project.?':'The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.',
	'4b:What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?':'LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.',
	'4c:What to do after LP3?':'You`ll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.',
	'4d:What to do when our university exams start?':'We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.',
	'4e:Live Project/ LP3 has to be submitted individually or it will be a group project?':'All the LP3/  Live Projects are on an individual scale.',
	'4f:Will I get LP3 and Live project of technology other than what I am selected for?':'No, you will receive LP3 and Live Projects of your respective technology.',
	'4g:Where do we push the code in LP3?':'Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.'
	},
	'workgroup':{
		'5a:How many workgroups will an intern be a part of?/ How many workgroups should I be in?':'Every intern should be a part of 2 workgroups.202003-IP This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.202003-IP-Technology This is a technology-specific workgroup. You will be added to the technology you had enrolled for. For example "202003-IP-Python" for students who enrolled for python.If anyone has not been added to any of these workgroups, kindly message "Cloud Counselage HR " regarding the same over bitrix24 platform.',
		'5b:Not able to see the task as not part of the IP workgroup.?':'Please message ‘Cloud Counselage HR’ in Bitrix24 ',
		'5c:I have a query with respect to LP3, what should I do and whom should I ask?':'As mentioned in the "202003-IP" workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message.',
		'5d:For some reason, I`m unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?':'Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check.',
		'5e:I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page?':'Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page.'
	},
	'Live project':{
		'6a:Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?':'It`s preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesn`t mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).',
		'6b:What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?':'Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.',
		'6c:What to do after Live Projects? Are we getting an offer letter/Stipend?':'Submit your project and once it`s reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you`re interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.'
	},
	'Internship':{
		'7a:I just joined the group and I am not understanding what to do further.\n How do I start my internship?\n':'Please go through the mail from which you have accepted the invite and check the task section as well.',
		'7b:I have opted for a blockchain internship,\n can I also learn about AI and do an internship in both? ':'You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.',
		'7c:Is it okay to mention this internship as ongoing for college records?':'Yes, well provide every intern a joining letter as soon as all interns are inducted. ',
		'7d:Can we do another internship with IP?':'Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP.',
	 	'7e:When will we get an internship completion letter?':'This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project.',
    	'7f:Can we extend this internship?':'Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.',
		'7g:If we are working on more than one technology, are those technologies added to the certificate? ':'You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for.',
		'7h:I forgot to clock in for a few days, will this affect my internship?':' This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now' ,
		'7i:What is the job profile? Will we be able to work only in the tech we have chosen for the internship?':'Your job profile is Technology - Intern if you are in cloud computing technology to update in your LinkedIn or resume, you can write as Cloud Computing - Intern. Yes, you all only work in the technology you sare selected for but you can take the training of other technologies.'
	},
	'Bitrix24 account':{
		'8a:I m not able to access my Bitrix24 account?':'Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, Enter the phone number or email, type in your email id that you have registered with Cloud Counselage and Click Forgot Password. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in',
		'8b:How can we check our weekly hours? ':'In the menu select time and reports worktime and then you could see your worktime or click on this link once you are logged in to Bitrix24 https://cloudcounselage24.bitrix24.com/timeman/timeman.php',
	    '8c:By when will we receive access to Bitrix24?':'If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access.',
   },
   'Other Questions':{
   	'9a:I am not able to see my tasks.?':'Please remove the default "In Progress" from your filter of the task section and try.',
   	'9b:What do we do in the work report?':'As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on "send to supervisor".',
   	'9c:Unable to access the quiz?':'Please retry after some time in an incognito window',
   	'9d:Which Browser I should use?':'Google Chrome is recommended.',
   	'9e:The web pages on mobile are not showing properly.?':'They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the "show as desktop" mode of your browser.',
   	'9f:When will we get a joining letter?':'Joining letter to all the interns will be provided on or before the 31st of March 2020.',
   	'9g:Is the induction online or offline?':'As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online.',
   	'9h:I am trying to complete social media tasks. I completed that day and clicked finish but it didn`t show finished in the task menu. What should I do?':'Our team will verify and then only your task shall be accepted as completed. Please wait till the verification`s complete.',
   	'9i:Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I`m not interested in.?':'You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now.',
   	'9j:My Efficiency is 0% what should I do?':'Ensure that you have clicked "Start" when you resume a task, the "Finish" button gets active only after the task is started. Once you complete the task you can then click on "Finish" and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.'
   }
	
}; 

module.exports=questions; 
