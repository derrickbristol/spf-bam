import React  from 'react'
import Moment from 'moment'

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}



function getLastWorkingDayMessage(dateString) 
{
    var today = new Date();
    var endDate = new Date(dateString);
    var msg = "was on"
    if (endDate>=today)
    {
        msg="will be on"
    }

    return msg;
}


function getLastWorking(dateString) 
{
    var today = new Date();
    var endDate = new Date(dateString);
    var msg = " was working"
    if (endDate>=today)
    {
        msg=" currently working"
    }

    return msg;
}

export default function content({data}) {
   
    var age = getAge(Moment(data?.BIRTHDATE).format("DD-MMMM-YYYY"))
    
    var workmsg = getLastWorkingDayMessage(Moment(data?.LASTWorkingDate).format("DD-MMMM-YYYY"))

    var lastWorking = getLastWorking(Moment(data?.LASTWorkingDate).format("DD-MMMM-YYYY"))
 
    
  return (
    <>
   
     <section className='text-justify'>
                    <p >
                        I {data?.ONAMES}{data?.SURNAME} of {data?.MEMADDR}, I am {age} years old and 
                        {lastWorking} as a {data.POSTTITLE}. My last date of employment {workmsg} the {(Moment(data?.LASTWorkingDate).format("DD-MMMM-YYYY"))} and I would like to submit 
                        my application for retirement with your office.
                    </p>
                    <p>This is because I will no longer be doing my normal or habitual level of 
                        occupational activity which I am presantly undertaking after I started to receive my pension,
                        and therefore no longer making contributions to my account with SPF.
                    </p>
                    <p>
                        Please find attached all the relevant documents needed in support of my application to start
                        the procedures for my pension.
                    </p>
                    <p>Thanking you in advance</p>
                    <p>Yours faithfully,</p>
            </section>
    </>
  )
}
