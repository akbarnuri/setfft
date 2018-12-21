'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[-] Botlike v1 [-]",
        "[-] Botlike v2 [-]",
        "[-] Delete All Media [-]",
        "[-] Unfollow All Following [-]",
        "[-] Unfollow Not Followback [-]",
        "[-] Follow Followers Target DAN DM [-]",
        "[-] Follow Followers Target [-]",
        "[-] Follow Account By Media [-]",
        "[-] Follow Account By Hastag [-]",
        "[-] Follow Account By Location [-]",
        "[-] Follow Followers Target No Like [-]",
	"[-] Follow Followers Target No Comment & Like [-]",
        "[-] Bom Like Post Target [-]",
	"[-] Bom Komen Post Target [-]",
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[-] Botlike v1 [-]":
        const botlike = require('./botlike.js');
        await botlike();
        break;

      case "[-] Botlike v2 [-]":
        const botlike2 = require('./botlike2.js');
        await botlike2();
        break;

      case "[-] Delete All Media [-]":
        const dellallphoto = require('./dellallphoto.js');
        await dellallphoto();
        break;

      case "[-] Unfollow All Following [-]":
        const unfollall = require('./unfollall.js');
        await unfollall();
        break;

      case "[-] Unfollow Not Followback [-]":
        const unfollnotfollback = require('./unfollnotfollback.js');
        await unfollnotfollback();
        break;
        
     case "[-] Follow Followers Target DAN DM [-]":
        const fftdm = require('./fftdm.js');
        await fftdm();
        break;

      case "[-] Follow Followers Target [-]":
        const fftauto = require('./fftauto.js');
        await fftauto();
        break;

      case "[-] Follow Account By Media [-]":
        const flmauto = require('./flmauto.js');
        await flmauto();
        break;

      case "[-] Follow Account By Hastag [-]":
        const fah = require('./fah.js');
        await fah();
        break;

      case "[-] Follow Account By Location [-]":
        const flaauto = require('./flaauto.js');
        await flaauto();
        break;
		
	   case "[-] Follow Followers Target No Like [-]":
        const fft = require('./fft.js');
        await fft();
        break;

	   case "[-] Follow Followers Target No Comment & Like [-]":
        const fftold = require('./fftold.js');
        await fftold();
        break;
        
	   case "[-] Bom Like Post Target [-]":
        const bomlike = require('./bomlike.js');
        await bomlike();
        break;
	 case "[-] Bom Komen Post Target [-]":
        const bomkomen = require('./bomkomen.js');
        await bomkomen();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2018
   ║ │ ││ ││  └─┐   SGBTeam
   ║ │ ││ ││    |   SETProject
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
      `);

main()
