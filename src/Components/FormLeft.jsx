import React from 'react'
import PrathamQues from './PrathamQues'
import Exapleq from './Exapleq'
const FormLeft = () => {
  return (
    
<div className='Common_Low_Section pl-16 '>
<h2 className="text-blue-700 text-xl font-bold common ">Common Law Aptitute Test</h2>
<hr className='w-[20%] h-1 bg-orange-400' />
 
{/* para relted to Common_Low_Section pl-16 */}
<h3>The Common Law Admission Test (CLAT) is a national level entrance exam for admissions to undergraduate (UG) and postgraduate (PG) law programmes offered by 22 National Law Universities around the country. </h3>
<h2 className='font-bold'>Elegibility:</h2>

<ol type='1 '>
    <li className='pl-4'>1.There will be <strong>no upper age limit</strong> for UG Programme in CLAT 2023.</li>
    <li className='pl-4'>2.<strong>Minimum percentage</strong> of marks in 10+2 or an equivalent examination:</li>

    <ul className="list-[circle] pl-12" >
        <li>Forty five percent (45%) marks or equivalent grade of candidates belonging to General / OBC / PWD / NRI / PIO / OCI</li>
        <li>
        Forty Percent (40%) marks or equivalent in case of candidates belonging to SC/ST categories.
        </li>
    </ul>    
</ol>
<h3><strong>CLAT Pattern</strong></h3>
<ul class="list-disc ml-12" >
        <li>Duration:2 hours</li>
        <li>Mode: Offline</li>
        <li>Total Question :120</li>
    </ul>   
{/* table */}
<div className='mt-5 mb-5 mr-2'>
    <table className=" w-full " >
      <thead>
		<tr className=' bg-blue-800'>
		  <th className="px-10 py-2">Section</th>
		  <th className='px-10 py-2'>Number of Question(roughly)</th>
		</tr>
		</thead>
		<tbody className=' [&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-white'>
		<tr>
		  <td className="px-10 py-2">English Language </td>
		  <td className='px-10 py-2'>22-25</td>
		</tr>
		<tr>
		  <td className="px-10 py-2">Current Affairs and GK</td>
		  <td className='px-10 py-2'>22-25</td>
		</tr>
		<tr>
		  <td className="px-10 py-2">Legal Reasoning</td>
		  <td className='px-10 py-2'>28-32</td>
		</tr>
		<tr>
		  <td className="px-10 py-2">Leogical Reasoning</td>
		  <td className='px-10 py-2'>28-32</td>
		</tr>
		<tr>
		  <td className="px-10 py-2">Quantitative Techniques</td>
		  <td className='px-10 py-2'>10-12</td>
		</tr>
		</tbody>
    </table>
  

</div>
{/* Eligibility table test */}
<ul class="list-disc" >
        <li>Marking Scheme:Correct Answer +1 marks, Wrong Answer -0.25 marks.</li>
        <li>Total Seats: 2598</li>  
    </ul>

{/* College Seates Table */}
<h2 className="text-blue-700">Colleges and Total Seats</h2>
<hr className='w-[10%] h-1 bg-orange-400' />
<table className="mt-5 mb-5 collegeList">
				  <thead>
					<tr className=' bg-blue-800'>
					  <th className='px-10 py-2'>22 Colleges Under CLAT</th>
					  <th className='px-10 py-2'>Seats</th>
					</tr>
				  </thead>
				  <tbody className='[&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-white'>
					
					<tr>
					  <th>National Law School Of India University, Bengaluru</th>
					  <th>180</th>
					</tr>
					
					<tr>
					  <th>NALSAR University of Law, Hyderabad </th>
					  <th>132</th>
					</tr>
					
					<tr>
					  <th>The West Bengal National University Of Juridical Science, Kolkata </th>
					  <th>132</th>
					</tr>
					
					<tr>
					  <th>National Law University, Jodhpur </th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>Gujarat national Law University, Gandhinagar </th>
					  <th>205</th>
					</tr>
					
					<tr>
					  <th>National Law Institute University, Bhopal </th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>Rajiv Gandhi National University Of Law, Patiala </th>
					  <th>180</th>
					</tr>
					
					<tr>
					  <th>Hidayatullah National Law University, Raipur </th>
					  <th>180</th>
					</tr>
					
					<tr>
					  <th>Dr. Ram Manohar Lohia National Law University, Lucknow</th>
					  <th>187</th>
					</tr>
					
					<tr>
					  <th>National Law University, Odisha  </th>
					  <th>180</th>
					</tr>
					
					<tr>
					  <th>Maharashtra National Law University, Mumbai </th>
					  <th>150</th>
					</tr>
					
					<tr>
					  <th>National University of Study and Research in Law, Ranchi</th>
					  <th>140</th>
					</tr>
					
					<tr>
					  <th>National University of Advanced Legal Studies, Kochi </th>
					  <th>60</th>
					</tr>
					<tr>
					  <th>Chanakya National Law University, Patna </th>
					  <th>145</th>
					</tr>
					
					<tr>
					  <th>Maharashtra National Law University, Nagpur </th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>DamodaramSanjivayya National Law University, Vishakhapatnam </th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>National Law School and Judicial Academy, Assam</th>
					  <th>60</th>
					</tr>
					
					<tr>
					  <th>Tamil Nadu National Law School, Tiruchirappalli</th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>Himachal Pradesh National Law University, Shimla</th>
					  <th>60</th>
					</tr>
					
					<tr>
					  <th>Dhramashastra National Law, Jabalpur</th>
					  <th>120</th>
					</tr>
					
					<tr>
					  <th>Maharashtra National Law University, Aurangabad</th>
					  <th>60</th>
					</tr>
					
					<tr>
					  <th>Dr. B.R. Ambedkar National Law University, Sonipat </th>
					  <th>120</th>
					</tr>
					
					
				  </tbody>
				</table>

<h3  className="text-blue-700"> CLAT 2024 DeadLines</h3>
<hr className='w-[20%] h-1 bg-orange-400' />
<table className="mt-5  mb-5">
  
					  <tbody className='[&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-white'>
						<tr>
						  <th>Application Open</th>
						  <th>1 July, 2023</th>
						</tr>
						<tr>
						  <th>Release of First Sample Question Set</th>
						  <th>August, 2023</th>
						</tr>
						<tr>
						  <th>Release of Second Sample Question Set</th>
						  <th>September,2023</th>
						</tr>
						<tr>
						  <th>Release of Third Sample Question Set</th>
						  <th>October, 2023(Tentative)</th>
						</tr>
						<tr>
						  <th>Last Date for receiving applications</th>
						  <th>November, 2023</th>
						</tr>
						<tr>
						  <th>CLAT 2023 Exam Date</th>
						  <th>03 December, 2023</th>
						</tr>
					  </tbody>
					</table>

                    <h2 className="text-blue-700 pt-5">Why Pratham</h2>
					<hr className='w-[20%] h-1 bg-orange-400' />

                    <h3>
                        You can consider PRATHAM TEST PREP because of the faculty team, ready to travel the distance to get you a seat in the top tier National Law Universities. With mentors from Nalsar Hyderabad, NLU Jodhpur, NLIU Bhopal, RGNUL Patiala, NLU Assam you will get just the right guidance to crack an extremely competitive examination like CLAT.
                        
                        Additionally, it offers a vast set of preparation material namely Knowledge Primers along with Class Assignments, Home Assignments and Special Handouts for every topic. You will get chapter-wise question bank and a mock test series to help you strategize for the exam. You will have access to an online portal where you can find E-lectures from the best faculty, exam analysis videos, and strategy sessions along with regular online/offline (as you opt) classes on the weekends so you are able to balance your boards and CLAT preparation.
                        
                        You can also book mentor slots to speak to a mentor exclusively to address your problems and curate a study plan.
                    </h3>

<h2 className='py-5 text-blue-700'>FREQUENTLY ASKED QUESTIONS</h2>
<hr className='w-[20%] h-1 bg-orange-400' />
<Exapleq/>
<h2 className='text-blue-700 py-5'>Clat Enterance Preparation For </h2>

<div className='Clat Prepation 3 Logo flex justify-between'>
<div><img src="https://www.prathamonline.com/images/popularcourses/clat-logo.jpg" alt="" /></div>
<div><img src="https://www.prathamonline.com/images/popularcourses/symbiosis-logo.jpg" alt="" /></div>
<div><img src="https://www.prathamonline.com/images/popularcourses/nlu-logo.jpg" alt="" /></div>

</div>

</div>


 
  )
}

export default FormLeft