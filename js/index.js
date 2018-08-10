/*
* @Author: Administrator
* @Date:   2018-08-05 15:13:28
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-09 19:05:08
*/
window.onload=function(){
	let header=document.querySelector('header')
	let jies1=document.querySelector('.jies1')
	let header1=document.querySelector('.header1')
	let jies2=document.querySelector('.jies2')
	let header3=document.querySelector('.header3')
	let jies3=document.querySelector('.jies3')
	let header4=document.querySelector('.header4')
	let jies4=document.querySelector('.jies4')
	let header5=document.querySelector('.header5')
	let jies5=document.querySelector('.jies5')
	let tiaoz=document.querySelector('.tiaoz')
	let llqh=innerHeight
	let arr=[]
	let floor1=header.offsetTop
	let floor2=header1.offsetTop
	let floor3=header3.offsetTop
	let floor4=header4.offsetTop
	let floor5=header5.offsetTop
	arr.push(floor1)
	arr.push(floor2)
	arr.push(floor3)
	arr.push(floor4)
	arr.push(floor5)
	

	/*header1.style.right=0;
	jies2.style.left=0;
	header3.style.left=0;
	jies3.style.right=0;
	header4.style.right=0;
	jies4.style.left=0;
	header5.style.left=0;
	jies5.style.right=0;*/

	window.onscroll=function(){
		h=document.documentElement.scrollTop
		// console.log(h)
		if(llqh+h>arr[1]){
			header1.style.right=0;
			jies2.style.left=0;
		}
		if(llqh+h>arr[2]){
			header3.style.left=0;
			jies3.style.right=0;
		}
		if(llqh+h>arr[3]){
			header4.style.right=0;
			jies4.style.left=0;
		}
		if(llqh+h>arr[4]){
			header5.style.left=0;
			jies5.style.right=0;
		}


		tiaoz.onclick=function(){
			console.log(h)
			document.documentElement.scrollTop=3500
		}

	}
}