<template>
   <div class="client-complaint-process">
       <div class="header clearfix">
        <div>
            <h2>AD Wealth</h2>
        </div>
     </div>
     <div class="row_1">
        <h3>Client Compliant Process</h3>
        <p class="tips">* Please note that this process applies to AD Wealth Inc. and all its subsidiary companies (“AD Wealth”).</p>
        <p class="content_1">WHAT CAN I COMPLAIN ABOUT TO AD WEALTH?<br/>Any dissatisfaction with a service provided by AD Wealth.</p>
        <p class="content_1">HOW SHOULD I GO ABOUT COMPLAINING TO AD WEALTH?
            <ol>
                <li>Please lodge a complaint by sending email to compliance@ad-wealth.com.</li>
                <li>The complaint must contain the following:
                    <ul>
                        <li>client details,</li>
                        <li>details of the complaint,</li>
                        <li>any documentary proof, where applicable.</li>
                    </ul>
                </li>
                <li>Upon receipt by AD Wealth of the above mentioned information, your complaint will be acknowledged by the AD Wealth staff member that will assist in the resolution of your complaint.</li>
                <li>Where possible, AD Wealth endeavors to resolve your complaint within five business days of receipt of your complaint, taking into account the nature of the complaint and the product type.</li>
                <li>A full record of each complaint received and all subsequent correspondence will be kept on record by AD Wealth for such periods as prescribed by relevant legislation.</li>
            </ol>
        </p>
        <p class="content_1">WHAT HAPPENS NEXT IF YOU ARE STILL UNHAPPY?<br/>AD Wealth should always be given the opportunity to resolve the complaint. However, should you be dissatisfied with the response from AD Wealth, you may refer your complaint to the Ombudsman or Adjudicator depending on the nature of the complaint, as set out below in more detail.<br/>1.Complaints relating to intermediary services provided by AD Wealth<br/>Only complaints relating to intermediary services provided by AD Wealth, as an authorized financial services provider, may be directed to the International Financial Services Commission.<br/>Please note that AD Wealth does not give advice and any complaints relating to advice will not apply to AD Wealth. In complaints before the International Financial Services Commission the complainant and any other party to the complaint are expected to give their fullest co-operation so as to dispose of the complaint within a reasonable time. For these purposes a complainant includes the complainant’s lawful successor in title or a person nominated as beneficiary in terms of the financial product that is the subject of the relevant complaint.</p>
        <p class="content_1">Contact details for the International Financial Services Commission:</p>
        <p class="content_1">Physical address:  Sir Edney Cain Building, 2nd Floor, Belmopan, Belize, C. A.<br/>Tel:  + 501-822-2974<br/>Fax:  + 501-822-3810<br/>Email:  complaints@ifsc.gov.bz</p>
      </div>
      <div class="footer"><p>© Copyright 2018 AD Wealth Inc. All rights reserved.</p></div>
   </div>
</template>

<script>
export default {
  name: 'client-complaint-process',
  data () {
    return {
      
    }
  },
  mounted () {
    document.title = 'AD Wealth | Client Complaint Process 180605'
  }
}
</script>

<style scoped>
.row_1{
    max-width: 1180px;
    min-height: 800px;
    margin: 0 auto;
}
.row_1 h3{
    font-size:30px;
    margin:30px 0px;
}
.row_1 p{
    text-align:left;
    font-size:16px;
    margin-bottom:30px;
}
.row_1 p.title_1{
   font-weight:bold;
}
.row_1 p.content_1{
   
}
.row_1 p.content_1 ul{}
.row_1 p.content_1 ul li{
    list-style-position:inside;
}
.row_1 p.content_1 ol li{
    list-style-position:inside;
}
.row_1 p.content_1 ol li table{
    border-collapse:collapse;
    text-align:center;
}
.row_1 p.content_1 ol li table tr td{
    border:1px solid #000;
    padding:10px;
    font-size:14px;
}
.row_1 p.content_1 ol li ul{
    padding-left:20px;
    list-style-type:square;
}
.row_1 p.title_2{
    
}
.row_1 p.content_2{
    
}
/* 头部，底部 */
.header{
    background:rgb(26,38,50);
}
.header div{
    max-width:1000px;
    margin:0 auto;
}
.header h2{
    float:left;
    width:100%;
    margin-right:-300px;
    line-height:95px;
    text-align:left;
    font-size:45px;
    color:#fff;
    font-weight:normal;
}
.footer{
    background:rgb(26,38,50);
}
.footer p{
    font-size:20px;
    color:#fff;
    line-height:30px;
    padding:15px 0px;
}
</style>