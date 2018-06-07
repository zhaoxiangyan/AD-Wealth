<template>
  <div class="invest-now">
    <div class="header clearfix" v-show="tabNum !== 7">
        <div>
            <h2>AD Wealth</h2>
            <router-link to="/log-in" class="login">LOG IN</router-link>
        </div>
    </div>
    <div class="row_1">    
        <h2 v-show="tabNum == 0">Welcome to Invest Now</h2>
        <p v-show="tabNum == 0">Follow the four steps below to invest with us.</p>
        <ul class="steps" v-show="tabNum !== 7">
            <li :class="tabNum == 1?'active':''">
                <div class="number_arrow_div">
                    <span>1</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Choose your unit trust(s)</div>
            </li>
            <li :class="tabNum >= 2&& tabNum < 5?'active':''">
                <div class="number_arrow_div">
                    <span>2</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Fill in your details</div>
            </li>
            <li :class="tabNum == 5?'active':''">
                <div class="number_arrow_div">
                    <span>3</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Submit your investment</div>
            </li>
            <li :class="tabNum >= 6?'active':''">
                <div class="number_arrow_div">
                    <span>4</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Print, sign & send us your documents</div>
            </li>
        </ul>
        <div class="content_0 content" v-show="tabNum == 0">
            <div class="button_div">
                <button class="next_btn" @click="next"></button>
            </div>
            <p>AD Wealth is not authorized to and does not provide financial advice. However, we believe in the merits of independent impartial investment advice for those who lack the knowledge and skill to make their own investment decisions unaided. Please only consult with licensed financial adviser. </p>
        </div>
        <div class="content_1 content" v-show="tabNum == 1">
            <div class="introduction">
                <p>Please select your unit trust(s) below and enter the amounts you would like to invest.<br/>You can choose to invest:</p>
                <ul>
                    <li>A minimum monthly amount of USD2,000</li>
                    <li>A minimum lump sum of USD20,000</li>
                    <li>Both of the above</li>
                </ul>
            </div>
            <div class="table_div">
                <table>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Unit trust</th>
                            <th>Lump sum investment</th>
                            <th>Monthly investment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Checkbox v-model="checkbox1"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal1 = true">Equity Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td clearfix">
                                    <div>USD&nbsp;<input v-model.number="equity1" type="number" :readonly="!checkbox1"><span :style="{'display':equity1_error?'block':'none'}">Minimum USD20,000</span></div>
                                    <div>USD&nbsp;<input v-model.number="equity2" type="number" :readonly="!checkbox1"><span :style="{'display':equity2_error?'block':'none'}">Minimum USD20,00</span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Checkbox v-model="checkbox2"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal2 = true">Balanced Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td clearfix">
                                    <div>USD&nbsp;<input  v-model.number="balanced1" type="number" :readonly="!checkbox2"><span :style="{'display':balanced1_error?'block':'none'}">Minimum USD20,000</span></div>
                                    <div>USD&nbsp;<input  v-model.number="balanced2" type="number" :readonly="!checkbox2"><span :style="{'display':balanced2_error?'block':'none'}">Minimum USD20,00</span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Checkbox v-model="checkbox3"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal3 = true">Stable Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td clearfix">
                                    <div>USD&nbsp;<input  v-model.number="stable1" type="number" :readonly="!checkbox3"><span :style="{'display':stable1_error?'block':'none'}">Minimum USD20,000</span></div>
                                    <div>USD&nbsp;<input  v-model.number="stable2" type="number" :readonly="!checkbox3"><span :style="{'display':stable2_error?'block':'none'}">Minimum USD20,00</span></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td colspan="2">
                                <div class="slide_td">
                                    <div>USD&nbsp;<input :value='total_fund1' readonly><span></span></div>
                                    <div>USD&nbsp;<input :value='total_fund2' readonly><span></span></div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <p>Note: Please read the latest factsheets (minimum disclosure documents), which offer a detailed explanation of the nature of the unit trusts and their fee structures.</p>
            <div class="button_div">
                <button @click="back" class="back_btn"></button>
                <button @click="next1" class="next_btn" :class="tabNum== 1&&checkbox_fund?'':'disabled'" :disabled="!(tabNum== 1&&checkbox_fund)"></button>
            </div>
        </div>
        <div class="content_2 content" v-show="tabNum == 2">
            <p>Please fill in your details below:</p>
            <div class="radio_div">
                <div><input v-model="radio1" value="investor" id="investor" name="radio1" type="radio" readonly><label for="investor">I am an individual investor</label></div>
                <!-- <div><input v-model="radio1" value="entity" id="entity" name="radio1" type="radio"><label for="entity">I am acting on behalf of a legal entity</label></div> -->
            </div>
            <h3>Investor Details</h3>
            <Row>
                <Col span="12" class="table_div">
                   <table>
                       <tbody>
                           <tr>
                               <td class="red_star">Title</td>
                               <td>
                                   <select v-model="title">
                                       <option value=""></option>
                                       <option value="Ms.">Ms.</option>
                                       <option value="Mr.">Mr.</option>
                                       <option value="Mrs.">Mrs.</option>
                                   </select>
                               </td>
                           </tr>
                           <tr>
                               <td class="red_star">First Name</td>
                               <td><input type="text" v-model="firstname"></td>
                           </tr>
                           <tr>
                               <td class="red_star">Surname</td>
                               <td><input type="text" v-model="surname"></td>
                           </tr>
                           <tr>
                               <td class="red_star">Identification/Passport Number</td>
                               <td><input type="text" v-model="passport"></td>
                           </tr>
                           <tr>
                               <td class="red_star">Date of birth<em>(MM/DD/YYYY)</em></td>
                               <!-- <td class="birth_td"><div><DatePicker class="birth_div" type="date" size="small" v-model="birth" @on-change="birth=$event"  placeholder="Select date" style="width: 150px"></DatePicker></div></td> -->
                               <td class="birth_td"><div><DatePicker class="birth_div" type="date" size="small" format="MM/dd/yyyy" v-model="birth" placeholder="Select date" style="width: 150px"></DatePicker></div></td>
                           </tr>
                       </tbody>
                   </table>
                </Col>
                <Col span="12" class="table_div">
                   <table>
                       <tbody>
                           <tr>
                               <td class="red_star">Nationality</td>
                               <td>
                                   <select v-model="nation">
                                        <option value=""></option>
                                        <option value="AFGHANISTAN">AFGHANISTAN</option>
                                        <option value="ÅLAND ISLANDS">ÅLAND ISLANDS</option>
                                        <option value="ALBANIA">ALBANIA</option>
                                        <option value="ALGERIA">ALGERIA</option>
                                        <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                                        <option value="ANDORRA">ANDORRA</option>
                                        <option value="ANGOLA">ANGOLA</option>
                                        <option value="ANGUILLA">ANGUILLA</option>
                                        <option value="ANTARCTICA">ANTARCTICA</option>
                                        <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
                                        <option value="ARGENTINA">ARGENTINA</option>
                                        <option value="ARMENIA">ARMENIA</option>
                                        <option value="ARUBA">ARUBA</option>
                                        <option value="AUSTRALIA">AUSTRALIA</option>
                                        <option value="AUSTRIA">AUSTRIA</option>
                                        <option value="AZERBAIJAN">AZERBAIJAN</option>
                                        <option value="BAHAMAS">BAHAMAS</option>
                                        <option value="BAHRAIN">BAHRAIN</option>
                                        <option value="BANGLADESH">BANGLADESH</option>
                                        <option value="BARBADOS">BARBADOS</option>
                                        <option value="BELARUS">BELARUS</option>
                                        <option value="BELGIUM">BELGIUM</option>
                                        <option value="BELIZE">BELIZE</option>
                                        <option value="BENIN">BENIN</option>
                                        <option value="BERMUDA">BERMUDA</option>
                                        <option value="BHUTAN">BHUTAN</option>
                                        <option value="BOLIVIA">BOLIVIA</option>
                                        <option value="BONAIRE, SINT EUSTATIUS & SABA">BONAIRE, SINT EUSTATIUS & SABA</option>
                                        <option value="BOSNIA AND HERZEGOVINA">BOSNIA AND HERZEGOVINA</option>
                                        <option value="BOTSWANA">BOTSWANA</option>
                                        <option value="BOUVET ISLAND">BOUVET ISLAND</option>
                                        <option value="BRAZIL">BRAZIL</option>
                                        <option value="BRITISH INDIAN OCEAN TERRITORY">BRITISH INDIAN OCEAN TERRITORY</option>
                                        <option value="BRUNEI DARUSSALAM">BRUNEI DARUSSALAM</option>
                                        <option value="BULGARIA">BULGARIA</option>
                                        <option value="BURKINA FASO">BURKINA FASO</option>
                                        <option value="BURUNDI">BURUNDI</option>
                                        <option value="CAMBODIA">CAMBODIA</option>
                                        <option value="CAMEROON">CAMEROON</option>
                                        <option value="CANADA">CANADA</option>
                                        <option value="CAPE VERDE">CAPE VERDE</option>
                                        <option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
                                        <option value="CENTRAL AFRICAN REPUBLIC">CENTRAL AFRICAN REPUBLIC</option>
                                        <option value="CHAD">CHAD</option>
                                        <option value="CHILE">CHILE</option>
                                        <option value="CHINA">CHINA</option>
                                        <option value="CHRISTMAS ISLAND">CHRISTMAS ISLAND</option>
                                        <option value="COCOS (KEELING) ISLANDS">COCOS (KEELING) ISLANDS</option>
                                        <option value="COLOMBIA">COLOMBIA</option>
                                        <option value="COMOROS">COMOROS</option>
                                        <option value="CONGO">CONGO</option>
                                        <option value="COOK ISLANDS">COOK ISLANDS</option>
                                        <option value="COSTA RICA">COSTA RICA</option>
                                        <option value="CÔTE D IVOIRE">CÔTE D IVOIRE</option>
                                        <option value="CROATIA">CROATIA</option>
                                        <option value="CUBA">CUBA</option>
                                        <option value="CURAÇAO">CURAÇAO</option>
                                        <option value="CYPRUS">CYPRUS</option>
                                        <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
                                        <option value="DEMOCRATIC PEOPLES REP- KOREA">DEMOCRATIC PEOPLES REP- KOREA</option>
                                        <option value="DEMOCRATIC REPUBLIC OF CONGO">DEMOCRATIC REPUBLIC OF CONGO</option>
                                        <option value="DENMARK">DENMARK</option>
                                        <option value="DJIBOUTI">DJIBOUTI</option>
                                        <option value="DOMINICA">DOMINICA</option>
                                        <option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
                                        <option value="ECUADOR">ECUADOR</option>
                                        <option value="EGYPT">EGYPT</option>
                                        <option value="EL SALVADOR">EL SALVADOR</option>
                                        <option value="EQUATORIAL GUINEA">EQUATORIAL GUINEA</option>
                                        <option value="ERITREA">ERITREA</option>
                                        <option value="ESTONIA">ESTONIA</option>
                                        <option value="ETHIOPIA">ETHIOPIA</option>
                                        <option value="FALKLAND ISLANDS (MALVINAS)">FALKLAND ISLANDS (MALVINAS)</option>
                                        <option value="FAROE ISLANDS">FAROE ISLANDS</option>
                                        <option value="FIJI">FIJI</option>
                                        <option value="FINLAND">FINLAND</option>
                                        <option value="FORMER YUGOSLAV REP MACEDONIA">FORMER YUGOSLAV REP MACEDONIA</option>
                                        <option value="FRANCE">FRANCE</option>
                                        <option value="FRENCH GUIANA">FRENCH GUIANA</option>
                                        <option value="FRENCH POLYNESIA">FRENCH POLYNESIA</option>
                                        <option value="FRENCH SOUTHERN TERRITORIES">FRENCH SOUTHERN TERRITORIES</option>
                                        <option value="GABON">GABON</option>
                                        <option value="GAMBIA">GAMBIA</option>
                                        <option value="GEORGIA">GEORGIA</option>
                                        <option value="GERMANY">GERMANY</option>
                                        <option value="GHANA">GHANA</option>
                                        <option value="GIBRALTAR">GIBRALTAR</option>
                                        <option value="GREECE">GREECE</option>
                                        <option value="GREENLAND">GREENLAND</option>
                                        <option value="GRENADA">GRENADA</option>
                                        <option value="GUADELOUPE">GUADELOUPE</option>
                                        <option value="GUAM">GUAM</option>
                                        <option value="GUATEMALA">GUATEMALA</option>
                                        <option value="GUERNSEY">GUERNSEY</option>
                                        <option value="GUINEA">GUINEA</option>
                                        <option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
                                        <option value="GUYANA">GUYANA</option>
                                        <option value="HAITI">HAITI</option>
                                        <option value="HEARD AND MCDONALD ISLANDS">HEARD AND MCDONALD ISLANDS</option>
                                        <option value="HOLY SEE (VATICAN CITY STATE)">HOLY SEE (VATICAN CITY STATE)</option>
                                        <option value="HONDURAS">HONDURAS</option>
                                        <option value="HONG KONG SPECIAL REG CHINA">HONG KONG SPECIAL REG CHINA</option>
                                        <option value="HUNGARY">HUNGARY</option>
                                        <option value="ICELAND">ICELAND</option>
                                        <option value="INDIA">INDIA</option>
                                        <option value="INDONESIA">INDONESIA</option>
                                        <option value="IRAN (ISLAMIC REPUBLIC OF)">IRAN (ISLAMIC REPUBLIC OF)</option>
                                        <option value="IRAQ">IRAQ</option>
                                        <option value="IRELAND">IRELAND</option>
                                        <option value="ISLE OF MAN">ISLE OF MAN</option>
                                        <option value="ISRAEL">ISRAEL</option>
                                        <option value="ITALY">ITALY</option>
                                        <option value="JAMAICA">JAMAICA</option>
                                        <option value="JAPAN">JAPAN</option>
                                        <option value="JERSEY">JERSEY</option>
                                        <option value="JORDAN">JORDAN</option>
                                        <option value="KAZAKHSTAN">KAZAKHSTAN</option>
                                        <option value="KENYA">KENYA</option>
                                        <option value="KIRIBATI">KIRIBATI</option>
                                        <option value="KOREA (REPUBLIC OF)">KOREA (REPUBLIC OF)</option>
                                        <option value="KUWAIT">KUWAIT</option>
                                        <option value="KYRGYZSTAN">KYRGYZSTAN</option>
                                        <option value="LAO PEOPLES DEMOCRATIC REP">LAO PEOPLES DEMOCRATIC REP</option>
                                        <option value="LATVIA">LATVIA</option>
                                        <option value="LEBANON">LEBANON</option>
                                        <option value="LESOTHO">LESOTHO</option>
                                        <option value="LIBERIA">LIBERIA</option>
                                        <option value="LIBYA">LIBYA</option>
                                        <option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
                                        <option value="LITHUANIA">LITHUANIA</option>
                                        <option value="LUXEMBOURG">LUXEMBOURG</option>
                                        <option value="MACAO SPECIAL ADMIN REG CHINA">MACAO SPECIAL ADMIN REG CHINA</option>
                                        <option value="MADAGASCAR">MADAGASCAR</option>
                                        <option value="MALAWI">MALAWI</option>
                                        <option value="MALAYSIA">MALAYSIA</option>
                                        <option value="MALDIVES">MALDIVES</option>
                                        <option value="MALI">MALI</option>
                                        <option value="MALTA">MALTA</option>
                                        <option value="MARSHALL ISLANDS">MARSHALL ISLANDS</option>
                                        <option value="MARTINIQUE">MARTINIQUE</option>
                                        <option value="MAURITANIA">MAURITANIA</option>
                                        <option value="MAURITIUS">MAURITIUS</option>
                                        <option value="MAYOTTE">MAYOTTE</option>
                                        <option value="MEXICO">MEXICO</option>
                                        <option value="MICRONESIA FEDERATED STATES OF">MICRONESIA FEDERATED STATES OF</option>
                                        <option value="MOLDOVA (REPUBLIC OF)">MOLDOVA (REPUBLIC OF)</option>
                                        <option value="MONACO">MONACO</option>
                                        <option value="MONGOLIA">MONGOLIA</option>
                                        <option value="MONTENEGRO">MONTENEGRO</option>
                                        <option value="MONTSERRAT">MONTSERRAT</option>
                                        <option value="MOROCCO">MOROCCO</option>
                                        <option value="MOZAMBIQUE">MOZAMBIQUE</option>
                                        <option value="MYANMAR">MYANMAR</option>
                                        <option value="NAMIBIA">NAMIBIA</option>
                                        <option value="NAURU">NAURU</option>
                                        <option value="NEPAL">NEPAL</option>
                                        <option value="NETHERLANDS">NETHERLANDS</option>
                                        <option value="NEW CALEDONIA">NEW CALEDONIA</option>
                                        <option value="NEW ZEALAND">NEW ZEALAND</option>
                                        <option value="NICARAGUA">NICARAGUA</option>
                                        <option value="NIGER">NIGER</option>
                                        <option value="NIGERIA">NIGERIA</option>
                                        <option value="NIUE">NIUE</option>
                                        <option value="NORFOLK ISLAND">NORFOLK ISLAND</option>
                                        <option value="NORTHERN MARIANA ISLANDS">NORTHERN MARIANA ISLANDS</option>
                                        <option value="NORWAY">NORWAY</option>
                                        <option value="OMAN">OMAN</option>
                                        <option value="PAKISTAN">PAKISTAN</option>
                                        <option value="PALAU">PALAU</option>
                                        <option value="PALESTINE (STATE OF)">PALESTINE (STATE OF)</option>
                                        <option value="PANAMA">PANAMA</option>
                                        <option value="PAPUA NEW GUINEA">PAPUA NEW GUINEA</option>
                                        <option value="PARAGUAY">PARAGUAY</option>
                                        <option value="PERU">PERU</option>
                                        <option value="PHILIPPINES">PHILIPPINES</option>
                                        <option value="PITCAIRN">PITCAIRN</option>
                                        <option value="POLAND">POLAND</option>
                                        <option value="PORTUGAL">PORTUGAL</option>
                                        <option value="PUERTO RICO">PUERTO RICO</option>
                                        <option value="QATAR">QATAR</option>
                                        <option value="RÉUNION">RÉUNION</option>
                                        <option value="ROMANIA">ROMANIA</option>
                                        <option value="RUSSIAN FEDERATION">RUSSIAN FEDERATION</option>
                                        <option value="RWANDA">RWANDA</option>
                                        <option value="SAINT BARTHÉLEMY">SAINT BARTHÉLEMY</option>
                                        <option value="SAINT HELENA">SAINT HELENA</option>
                                        <option value="SAINT KITTS AND NEVIS">SAINT KITTS AND NEVIS</option>
                                        <option value="SAINT LUCIA">SAINT LUCIA</option>
                                        <option value="SAINT MARTIN (FRENCH PART)">SAINT MARTIN (FRENCH PART)</option>
                                        <option value="SAINT PIERRE AND MIQUELON">SAINT PIERRE AND MIQUELON</option>
                                        <option value="SAMOA">SAMOA</option>
                                        <option value="SAN MARINO">SAN MARINO</option>
                                        <option value="SAO TOME AND PRINCIPE">SAO TOME AND PRINCIPE</option>
                                        <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                                        <option value="SENEGAL">SENEGAL</option>
                                        <option value="SERBIA">SERBIA</option>
                                        <option value="SEYCHELLES">SEYCHELLES</option>
                                        <option value="SIERRA LEONE">SIERRA LEONE</option>
                                        <option value="SINGAPORE">SINGAPORE</option>
                                        <option value="SINT MAARTEN (DUTCH PART)">SINT MAARTEN (DUTCH PART)</option>
                                        <option value="SLOVAKIA">SLOVAKIA</option>
                                        <option value="SLOVENIA">SLOVENIA</option>
                                        <option value="SOLOMON ISLANDS">SOLOMON ISLANDS</option>
                                        <option value="SOMALIA">SOMALIA</option>
                                        <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                                        <option value="SOUTH GEORGIA SOUTH SANDWICH">SOUTH GEORGIA SOUTH SANDWICH</option>
                                        <option value="SOUTH SUDAN">SOUTH SUDAN</option>
                                        <option value="SPAIN">SPAIN</option>
                                        <option value="SRI LANKA">SRI LANKA</option>
                                        <option value="ST VINCENT AND THE GRENADINES">ST VINCENT AND THE GRENADINES</option>
                                        <option value="SUDAN">SUDAN</option>
                                        <option value="SURINAME">SURINAME</option>
                                        <option value="SVALBARD AND JAN MAYEN">SVALBARD AND JAN MAYEN</option>
                                        <option value="SWAZILAND">SWAZILAND</option>
                                        <option value="SWEDEN">SWEDEN</option>
                                        <option value="SWITZERLAND">SWITZERLAND</option>
                                        <option value="SYRIAN ARAB REPUBLIC">SYRIAN ARAB REPUBLIC</option>
                                        <option value="TAIWAN (PROVINCE OF CHINA)">TAIWAN (PROVINCE OF CHINA)</option>
                                        <option value="TAJIKISTAN">TAJIKISTAN</option>
                                        <option value="TANZANIA (UNITED REPUBLIC OF)">TANZANIA (UNITED REPUBLIC OF)</option>
                                        <option value="THAILAND">THAILAND</option>
                                        <option value="TIMOR-LESTE">TIMOR-LESTE</option>
                                        <option value="TOGO">TOGO</option>
                                        <option value="TOKELAU">TOKELAU</option>
                                        <option value="TONGA">TONGA</option>
                                        <option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
                                        <option value="TUNISIA">TUNISIA</option>
                                        <option value="TURKEY">TURKEY</option>
                                        <option value="TURKMENISTAN">TURKMENISTAN</option>
                                        <option value="TURKS AND CAICOS ISLANDS">TURKS AND CAICOS ISLANDS</option>
                                        <option value="TUVALU">TUVALU</option>
                                        <option value="UGANDA">UGANDA</option>
                                        <option value="UKRAINE">UKRAINE</option>
                                        <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
                                        <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                                        <option value="UNITED KINGDOM (SUBJECT)">UNITED KINGDOM (SUBJECT)</option>
                                        <option value="UNITED STATES">UNITED STATES</option>
                                        <option value="URUGUAY">URUGUAY</option>
                                        <option value="US MINOR OUTLYING ISLANDS">US MINOR OUTLYING ISLANDS</option>
                                        <option value="UZBEKISTAN">UZBEKISTAN</option>
                                        <option value="VANUATU">VANUATU</option>
                                        <option value="VENEZUELA">VENEZUELA</option>
                                        <option value="VIET NAM">VIET NAM</option>
                                        <option value="VIRGIN ISLANDS (BRITISH)">VIRGIN ISLANDS (BRITISH)</option>
                                        <option value="VIRGIN ISLANDS (U.S.)">VIRGIN ISLANDS (U.S.)</option>
                                        <option value="WALLIS AND FUTUNA">WALLIS AND FUTUNA</option>
                                        <option value="WESTERN SAHARA">WESTERN SAHARA</option>
                                        <option value="YEMEN">YEMEN</option>
                                        <option value="ZAMBIA">ZAMBIA</option>
                                        <option value="ZIMBABWE">ZIMBABWE</option>
                                   </select>
                               </td>
                           </tr>
                           <tr>
                               <td class="red_star">Email address</td>
                               <td><input type="text" v-model="email"></td>
                           </tr>
                           <tr>
                               <td class="red_star">Mobile phone number</td>
                               <td>
                                   <select>
                                       <option value=""></option>
                                       <option value="1">code1</option>
                                       <option value="2">code2</option>
                                   </select>
                                   <input type="text" v-model="mobile">
                               </td>
                           </tr>
                           <tr>
                               <td class="red_star">Residential address</td>
                               <td><textarea v-model="address"></textarea></td>
                           </tr>
                       </tbody>
                   </table>
                </Col>
            </Row>
            <p class="red_star">Compulsory information</p>
            <div class="button_div">
                <button @click="back" class="back_btn"></button>
                <button @click="next" class="next_btn" :class="tabNum == 2&&investor_next?'':'disabled'" :disabled="!(tabNum == 2&&investor_next)"></button>
            </div>
        </div>
        <div class="content_3 content" v-show="tabNum == 3">
            <h3>Tax Information</h3>
            <div class="table_div">
                <table class="table_tax1">
                    <thead>
                        <tr>
                            <th colspan="2">Dividend and Interest Withholding Tax<em class="red">*</em>
                                <Tooltip placement="right-start" transfer>
                                   <span class="info"></span>
                                   <div slot="content" style="white-space:normal;">Depending on where you are resident for tax purposes, you may be required to pay Dividend Withholding Tax (DWT) and/or Interest Withholding Tax (IWT).</div>
                                </Tooltip>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>Are you a tax resident in Belize?</label>
                            </td>
                            <td>
                                <span><input v-model="radio2" value="yes" type="radio" name="AreyouBelize"><label>Yes</label><input v-model="radio2" value="no" type="radio" name="AreyouBelize"><label>No</label></span>
                            </td>
                        </tr>
                        <tr v-show="radio2 == 'no'">
                            <td>
                                <label>Country of residence for tax purposes</label>
                                <!-- <a class="error" title="You may qualify for a reduced rate if there is a Double Taxation Agreement (DTA) in place between South Africa and your country of residence. Distributions from a Real Estate Investment Trust (REIT) are exempt from South African income tax, but are subject to DWT at the rate applicable to the investor." >&nbsp;</a> -->
                            </td>
                            <td>
                                <select v-model="residence">
                                    <option value=""></option>
                                    <option value="AFGHANISTAN">AFGHANISTAN</option>
                                    <option value="ÅLAND ISLANDS">ÅLAND ISLANDS</option>
                                    <option value="ALBANIA">ALBANIA</option>
                                    <option value="ALGERIA">ALGERIA</option>
                                    <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                                    <option value="ANDORRA">ANDORRA</option>
                                    <option value="ANGOLA">ANGOLA</option>
                                    <option value="ANGUILLA">ANGUILLA</option>
                                    <option value="ANTARCTICA">ANTARCTICA</option>
                                    <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
                                    <option value="ARGENTINA">ARGENTINA</option>
                                    <option value="ARMENIA">ARMENIA</option>
                                    <option value="ARUBA">ARUBA</option>
                                    <option value="AUSTRALIA">AUSTRALIA</option>
                                    <option value="AUSTRIA">AUSTRIA</option>
                                    <option value="AZERBAIJAN">AZERBAIJAN</option>
                                    <option value="BAHAMAS">BAHAMAS</option>
                                    <option value="BAHRAIN">BAHRAIN</option>
                                    <option value="BANGLADESH">BANGLADESH</option>
                                    <option value="BARBADOS">BARBADOS</option>
                                    <option value="BELARUS">BELARUS</option>
                                    <option value="BELGIUM">BELGIUM</option>
                                    <option value="BELIZE">BELIZE</option>
                                    <option value="BENIN">BENIN</option>
                                    <option value="BERMUDA">BERMUDA</option>
                                    <option value="BHUTAN">BHUTAN</option>
                                    <option value="BOLIVIA">BOLIVIA</option>
                                    <option value="BONAIRE, SINT EUSTATIUS & SABA">BONAIRE, SINT EUSTATIUS & SABA</option>
                                    <option value="BOSNIA AND HERZEGOVINA">BOSNIA AND HERZEGOVINA</option>
                                    <option value="BOTSWANA">BOTSWANA</option>
                                    <option value="BOUVET ISLAND">BOUVET ISLAND</option>
                                    <option value="BRAZIL">BRAZIL</option>
                                    <option value="BRITISH INDIAN OCEAN TERRITORY">BRITISH INDIAN OCEAN TERRITORY</option>
                                    <option value="BRUNEI DARUSSALAM">BRUNEI DARUSSALAM</option>
                                    <option value="BULGARIA">BULGARIA</option>
                                    <option value="BURKINA FASO">BURKINA FASO</option>
                                    <option value="BURUNDI">BURUNDI</option>
                                    <option value="CAMBODIA">CAMBODIA</option>
                                    <option value="CAMEROON">CAMEROON</option>
                                    <option value="CANADA">CANADA</option>
                                    <option value="CAPE VERDE">CAPE VERDE</option>
                                    <option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
                                    <option value="CENTRAL AFRICAN REPUBLIC">CENTRAL AFRICAN REPUBLIC</option>
                                    <option value="CHAD">CHAD</option>
                                    <option value="CHILE">CHILE</option>
                                    <option value="CHINA">CHINA</option>
                                    <option value="CHRISTMAS ISLAND">CHRISTMAS ISLAND</option>
                                    <option value="COCOS (KEELING) ISLANDS">COCOS (KEELING) ISLANDS</option>
                                    <option value="COLOMBIA">COLOMBIA</option>
                                    <option value="COMOROS">COMOROS</option>
                                    <option value="CONGO">CONGO</option>
                                    <option value="COOK ISLANDS">COOK ISLANDS</option>
                                    <option value="COSTA RICA">COSTA RICA</option>
                                    <option value="CÔTE D IVOIRE">CÔTE D IVOIRE</option>
                                    <option value="CROATIA">CROATIA</option>
                                    <option value="CUBA">CUBA</option>
                                    <option value="CURAÇAO">CURAÇAO</option>
                                    <option value="CYPRUS">CYPRUS</option>
                                    <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
                                    <option value="DEMOCRATIC PEOPLES REP- KOREA">DEMOCRATIC PEOPLES REP- KOREA</option>
                                    <option value="DEMOCRATIC REPUBLIC OF CONGO">DEMOCRATIC REPUBLIC OF CONGO</option>
                                    <option value="DENMARK">DENMARK</option>
                                    <option value="DJIBOUTI">DJIBOUTI</option>
                                    <option value="DOMINICA">DOMINICA</option>
                                    <option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
                                    <option value="ECUADOR">ECUADOR</option>
                                    <option value="EGYPT">EGYPT</option>
                                    <option value="EL SALVADOR">EL SALVADOR</option>
                                    <option value="EQUATORIAL GUINEA">EQUATORIAL GUINEA</option>
                                    <option value="ERITREA">ERITREA</option>
                                    <option value="ESTONIA">ESTONIA</option>
                                    <option value="ETHIOPIA">ETHIOPIA</option>
                                    <option value="FALKLAND ISLANDS (MALVINAS)">FALKLAND ISLANDS (MALVINAS)</option>
                                    <option value="FAROE ISLANDS">FAROE ISLANDS</option>
                                    <option value="FIJI">FIJI</option>
                                    <option value="FINLAND">FINLAND</option>
                                    <option value="FORMER YUGOSLAV REP MACEDONIA">FORMER YUGOSLAV REP MACEDONIA</option>
                                    <option value="FRANCE">FRANCE</option>
                                    <option value="FRENCH GUIANA">FRENCH GUIANA</option>
                                    <option value="FRENCH POLYNESIA">FRENCH POLYNESIA</option>
                                    <option value="FRENCH SOUTHERN TERRITORIES">FRENCH SOUTHERN TERRITORIES</option>
                                    <option value="GABON">GABON</option>
                                    <option value="GAMBIA">GAMBIA</option>
                                    <option value="GEORGIA">GEORGIA</option>
                                    <option value="GERMANY">GERMANY</option>
                                    <option value="GHANA">GHANA</option>
                                    <option value="GIBRALTAR">GIBRALTAR</option>
                                    <option value="GREECE">GREECE</option>
                                    <option value="GREENLAND">GREENLAND</option>
                                    <option value="GRENADA">GRENADA</option>
                                    <option value="GUADELOUPE">GUADELOUPE</option>
                                    <option value="GUAM">GUAM</option>
                                    <option value="GUATEMALA">GUATEMALA</option>
                                    <option value="GUERNSEY">GUERNSEY</option>
                                    <option value="GUINEA">GUINEA</option>
                                    <option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
                                    <option value="GUYANA">GUYANA</option>
                                    <option value="HAITI">HAITI</option>
                                    <option value="HEARD AND MCDONALD ISLANDS">HEARD AND MCDONALD ISLANDS</option>
                                    <option value="HOLY SEE (VATICAN CITY STATE)">HOLY SEE (VATICAN CITY STATE)</option>
                                    <option value="HONDURAS">HONDURAS</option>
                                    <option value="HONG KONG SPECIAL REG CHINA">HONG KONG SPECIAL REG CHINA</option>
                                    <option value="HUNGARY">HUNGARY</option>
                                    <option value="ICELAND">ICELAND</option>
                                    <option value="INDIA">INDIA</option>
                                    <option value="INDONESIA">INDONESIA</option>
                                    <option value="IRAN (ISLAMIC REPUBLIC OF)">IRAN (ISLAMIC REPUBLIC OF)</option>
                                    <option value="IRAQ">IRAQ</option>
                                    <option value="IRELAND">IRELAND</option>
                                    <option value="ISLE OF MAN">ISLE OF MAN</option>
                                    <option value="ISRAEL">ISRAEL</option>
                                    <option value="ITALY">ITALY</option>
                                    <option value="JAMAICA">JAMAICA</option>
                                    <option value="JAPAN">JAPAN</option>
                                    <option value="JERSEY">JERSEY</option>
                                    <option value="JORDAN">JORDAN</option>
                                    <option value="KAZAKHSTAN">KAZAKHSTAN</option>
                                    <option value="KENYA">KENYA</option>
                                    <option value="KIRIBATI">KIRIBATI</option>
                                    <option value="KOREA (REPUBLIC OF)">KOREA (REPUBLIC OF)</option>
                                    <option value="KUWAIT">KUWAIT</option>
                                    <option value="KYRGYZSTAN">KYRGYZSTAN</option>
                                    <option value="LAO PEOPLES DEMOCRATIC REP">LAO PEOPLES DEMOCRATIC REP</option>
                                    <option value="LATVIA">LATVIA</option>
                                    <option value="LEBANON">LEBANON</option>
                                    <option value="LESOTHO">LESOTHO</option>
                                    <option value="LIBERIA">LIBERIA</option>
                                    <option value="LIBYA">LIBYA</option>
                                    <option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
                                    <option value="LITHUANIA">LITHUANIA</option>
                                    <option value="LUXEMBOURG">LUXEMBOURG</option>
                                    <option value="MACAO SPECIAL ADMIN REG CHINA">MACAO SPECIAL ADMIN REG CHINA</option>
                                    <option value="MADAGASCAR">MADAGASCAR</option>
                                    <option value="MALAWI">MALAWI</option>
                                    <option value="MALAYSIA">MALAYSIA</option>
                                    <option value="MALDIVES">MALDIVES</option>
                                    <option value="MALI">MALI</option>
                                    <option value="MALTA">MALTA</option>
                                    <option value="MARSHALL ISLANDS">MARSHALL ISLANDS</option>
                                    <option value="MARTINIQUE">MARTINIQUE</option>
                                    <option value="MAURITANIA">MAURITANIA</option>
                                    <option value="MAURITIUS">MAURITIUS</option>
                                    <option value="MAYOTTE">MAYOTTE</option>
                                    <option value="MEXICO">MEXICO</option>
                                    <option value="MICRONESIA FEDERATED STATES OF">MICRONESIA FEDERATED STATES OF</option>
                                    <option value="MOLDOVA (REPUBLIC OF)">MOLDOVA (REPUBLIC OF)</option>
                                    <option value="MONACO">MONACO</option>
                                    <option value="MONGOLIA">MONGOLIA</option>
                                    <option value="MONTENEGRO">MONTENEGRO</option>
                                    <option value="MONTSERRAT">MONTSERRAT</option>
                                    <option value="MOROCCO">MOROCCO</option>
                                    <option value="MOZAMBIQUE">MOZAMBIQUE</option>
                                    <option value="MYANMAR">MYANMAR</option>
                                    <option value="NAMIBIA">NAMIBIA</option>
                                    <option value="NAURU">NAURU</option>
                                    <option value="NEPAL">NEPAL</option>
                                    <option value="NETHERLANDS">NETHERLANDS</option>
                                    <option value="NEW CALEDONIA">NEW CALEDONIA</option>
                                    <option value="NEW ZEALAND">NEW ZEALAND</option>
                                    <option value="NICARAGUA">NICARAGUA</option>
                                    <option value="NIGER">NIGER</option>
                                    <option value="NIGERIA">NIGERIA</option>
                                    <option value="NIUE">NIUE</option>
                                    <option value="NORFOLK ISLAND">NORFOLK ISLAND</option>
                                    <option value="NORTHERN MARIANA ISLANDS">NORTHERN MARIANA ISLANDS</option>
                                    <option value="NORWAY">NORWAY</option>
                                    <option value="OMAN">OMAN</option>
                                    <option value="PAKISTAN">PAKISTAN</option>
                                    <option value="PALAU">PALAU</option>
                                    <option value="PALESTINE (STATE OF)">PALESTINE (STATE OF)</option>
                                    <option value="PANAMA">PANAMA</option>
                                    <option value="PAPUA NEW GUINEA">PAPUA NEW GUINEA</option>
                                    <option value="PARAGUAY">PARAGUAY</option>
                                    <option value="PERU">PERU</option>
                                    <option value="PHILIPPINES">PHILIPPINES</option>
                                    <option value="PITCAIRN">PITCAIRN</option>
                                    <option value="POLAND">POLAND</option>
                                    <option value="PORTUGAL">PORTUGAL</option>
                                    <option value="PUERTO RICO">PUERTO RICO</option>
                                    <option value="QATAR">QATAR</option>
                                    <option value="RÉUNION">RÉUNION</option>
                                    <option value="ROMANIA">ROMANIA</option>
                                    <option value="RUSSIAN FEDERATION">RUSSIAN FEDERATION</option>
                                    <option value="RWANDA">RWANDA</option>
                                    <option value="SAINT BARTHÉLEMY">SAINT BARTHÉLEMY</option>
                                    <option value="SAINT HELENA">SAINT HELENA</option>
                                    <option value="SAINT KITTS AND NEVIS">SAINT KITTS AND NEVIS</option>
                                    <option value="SAINT LUCIA">SAINT LUCIA</option>
                                    <option value="SAINT MARTIN (FRENCH PART)">SAINT MARTIN (FRENCH PART)</option>
                                    <option value="SAINT PIERRE AND MIQUELON">SAINT PIERRE AND MIQUELON</option>
                                    <option value="SAMOA">SAMOA</option>
                                    <option value="SAN MARINO">SAN MARINO</option>
                                    <option value="SAO TOME AND PRINCIPE">SAO TOME AND PRINCIPE</option>
                                    <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                                    <option value="SENEGAL">SENEGAL</option>
                                    <option value="SERBIA">SERBIA</option>
                                    <option value="SEYCHELLES">SEYCHELLES</option>
                                    <option value="SIERRA LEONE">SIERRA LEONE</option>
                                    <option value="SINGAPORE">SINGAPORE</option>
                                    <option value="SINT MAARTEN (DUTCH PART)">SINT MAARTEN (DUTCH PART)</option>
                                    <option value="SLOVAKIA">SLOVAKIA</option>
                                    <option value="SLOVENIA">SLOVENIA</option>
                                    <option value="SOLOMON ISLANDS">SOLOMON ISLANDS</option>
                                    <option value="SOMALIA">SOMALIA</option>
                                    <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                                    <option value="SOUTH GEORGIA SOUTH SANDWICH">SOUTH GEORGIA SOUTH SANDWICH</option>
                                    <option value="SOUTH SUDAN">SOUTH SUDAN</option>
                                    <option value="SPAIN">SPAIN</option>
                                    <option value="SRI LANKA">SRI LANKA</option>
                                    <option value="ST VINCENT AND THE GRENADINES">ST VINCENT AND THE GRENADINES</option>
                                    <option value="SUDAN">SUDAN</option>
                                    <option value="SURINAME">SURINAME</option>
                                    <option value="SVALBARD AND JAN MAYEN">SVALBARD AND JAN MAYEN</option>
                                    <option value="SWAZILAND">SWAZILAND</option>
                                    <option value="SWEDEN">SWEDEN</option>
                                    <option value="SWITZERLAND">SWITZERLAND</option>
                                    <option value="SYRIAN ARAB REPUBLIC">SYRIAN ARAB REPUBLIC</option>
                                    <option value="TAIWAN (PROVINCE OF CHINA)">TAIWAN (PROVINCE OF CHINA)</option>
                                    <option value="TAJIKISTAN">TAJIKISTAN</option>
                                    <option value="TANZANIA (UNITED REPUBLIC OF)">TANZANIA (UNITED REPUBLIC OF)</option>
                                    <option value="THAILAND">THAILAND</option>
                                    <option value="TIMOR-LESTE">TIMOR-LESTE</option>
                                    <option value="TOGO">TOGO</option>
                                    <option value="TOKELAU">TOKELAU</option>
                                    <option value="TONGA">TONGA</option>
                                    <option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
                                    <option value="TUNISIA">TUNISIA</option>
                                    <option value="TURKEY">TURKEY</option>
                                    <option value="TURKMENISTAN">TURKMENISTAN</option>
                                    <option value="TURKS AND CAICOS ISLANDS">TURKS AND CAICOS ISLANDS</option>
                                    <option value="TUVALU">TUVALU</option>
                                    <option value="UGANDA">UGANDA</option>
                                    <option value="UKRAINE">UKRAINE</option>
                                    <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
                                    <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                                    <option value="UNITED KINGDOM (SUBJECT)">UNITED KINGDOM (SUBJECT)</option>
                                    <option value="UNITED STATES">UNITED STATES</option>
                                    <option value="URUGUAY">URUGUAY</option>
                                    <option value="US MINOR OUTLYING ISLANDS">US MINOR OUTLYING ISLANDS</option>
                                    <option value="UZBEKISTAN">UZBEKISTAN</option>
                                    <option value="VANUATU">VANUATU</option>
                                    <option value="VENEZUELA">VENEZUELA</option>
                                    <option value="VIET NAM">VIET NAM</option>
                                    <option value="VIRGIN ISLANDS (BRITISH)">VIRGIN ISLANDS (BRITISH)</option>
                                    <option value="VIRGIN ISLANDS (U.S.)">VIRGIN ISLANDS (U.S.)</option>
                                    <option value="WALLIS AND FUTUNA">WALLIS AND FUTUNA</option>
                                    <option value="WESTERN SAHARA">WESTERN SAHARA</option>
                                    <option value="YEMEN">YEMEN</option>
                                    <option value="ZAMBIA">ZAMBIA</option>
                                    <option value="ZIMBABWE">ZIMBABWE</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="notice">Regardless of whether you have a tax identification number or physically reside in Belize, your tax residence is the country in which you are liable for tax (even if you are currently not paying any tax to that country).</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table_tax2">
                    <tbody>
                    <tr>
                        <td colspan="4">Please complete your Tax Identification Number (TIN), or its functional equivalent, below. Please provide a reason if you are not able to provide a TIN. </td>
                    </tr>
                    <tr>
                        <td>Tax identification number</td>
                        <td>
                            <input type="text" v-model="tax_number" @blur.once="tax_number_error = true">
                            <Tooltip placement="right-start" transfer :style="{'visibility':tax_number_error&&tax_number_result?'visible':'hidden'}">
                                <span class="error"></span>
                                <div slot="content" style="white-space:normal;">Please enter a valid tax identification number, or indicate a reason for not providing a tax identification number.</div>
                            </Tooltip>
                        </td>
                        <td>Reason</td>
                        <td>
                            <select v-model="tax_number_reason" @change.once="tax_number_error = true">
                                <option value=""></option>
                                <option value="I have never registered with my tax authority">I have never registered with my tax authority</option>
                                <option value="I do not know this, but will take steps to submit to AD Wealth">I do not know this, but will take steps to submit to AD Wealth</option>
                                <option value="Jurisdiction does not issue TINs">Jurisdiction does not issue TINs</option>
                                <option value="Unable to obtain a TIN">Unable to obtain a TIN</option>
                                <option value="TIN disclosure not required">TIN disclosure not required</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table class="table_tax3">
                    <thead>
                        <tr>
                            <th colspan="2">Additional tax information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Do you have any additional tax information?
                                <Tooltip placement="right-start" transfer>
                                      <span class="info"></span>
                                      <div slot="content" style="white-space:normal;">Please note that you are required to give us all of your tax information to adhere to legislation. You may be held liable by your tax authority if you do not complete all relevant information.</div>
                                </Tooltip>
                            </td>
                            <td><span><input v-model="radio3" value="yes" type="radio"><label>Yes</label><input v-model="radio3"  value="no" type="radio"><label>No</label></span></td>
                        </tr>
                        <template v-if="radio3 == 'yes'" v-for="(item, index) in templateDate">
                        <tr style="background:#f3f3f3;" :style="{'display':index>0?'table-row':'none'}">
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="2">If you have any tax information for countries in addition to the country indicated for DWT/IWT above, please specify the additional countries and your associated Tax Identification Number, or your country's equivalent, below.</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>
                                <select v-model="item.select1" name="country">
                                    <option value=""></option>
                                    <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                                    <option value="AFGHANISTAN">AFGHANISTAN</option>
                                    <option value="ÅLAND ISLANDS">ÅLAND ISLANDS</option>
                                    <option value="ALBANIA">ALBANIA</option>
                                    <option value="ALGERIA">ALGERIA</option>
                                    <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                                    <option value="ANDORRA">ANDORRA</option>
                                    <option value="ANGOLA">ANGOLA</option>
                                    <option value="ANGUILLA">ANGUILLA</option>
                                    <option value="ANTARCTICA">ANTARCTICA</option>
                                    <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
                                    <option value="ARGENTINA">ARGENTINA</option>
                                    <option value="ARMENIA">ARMENIA</option>
                                    <option value="ARUBA">ARUBA</option>
                                    <option value="AUSTRALIA">AUSTRALIA</option>
                                    <option value="AUSTRIA">AUSTRIA</option>
                                    <option value="AZERBAIJAN">AZERBAIJAN</option>
                                    <option value="BAHAMAS">BAHAMAS</option>
                                    <option value="BAHRAIN">BAHRAIN</option>
                                    <option value="BANGLADESH">BANGLADESH</option>
                                    <option value="BARBADOS">BARBADOS</option>
                                    <option value="BELARUS">BELARUS</option>
                                    <option value="BELGIUM">BELGIUM</option>
                                    <option value="BELIZE">BELIZE</option>
                                    <option value="BENIN">BENIN</option>
                                    <option value="BERMUDA">BERMUDA</option>
                                    <option value="BHUTAN">BHUTAN</option>
                                    <option value="BOLIVIA">BOLIVIA</option>
                                    <option value="BONAIRE, SINT EUSTATIUS & SABA">BONAIRE, SINT EUSTATIUS & SABA</option>
                                    <option value="BOSNIA AND HERZEGOVINA">BOSNIA AND HERZEGOVINA</option>
                                    <option value="BOTSWANA">BOTSWANA</option>
                                    <option value="BOUVET ISLAND">BOUVET ISLAND</option>
                                    <option value="BRAZIL">BRAZIL</option>
                                    <option value="BRITISH INDIAN OCEAN TERRITORY">BRITISH INDIAN OCEAN TERRITORY</option>
                                    <option value="BRUNEI DARUSSALAM">BRUNEI DARUSSALAM</option>
                                    <option value="BULGARIA">BULGARIA</option>
                                    <option value="BURKINA FASO">BURKINA FASO</option>
                                    <option value="BURUNDI">BURUNDI</option>
                                    <option value="CAMBODIA">CAMBODIA</option>
                                    <option value="CAMEROON">CAMEROON</option>
                                    <option value="CANADA">CANADA</option>
                                    <option value="CAPE VERDE">CAPE VERDE</option>
                                    <option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
                                    <option value="CENTRAL AFRICAN REPUBLIC">CENTRAL AFRICAN REPUBLIC</option>
                                    <option value="CHAD">CHAD</option>
                                    <option value="CHILE">CHILE</option>
                                    <option value="CHINA">CHINA</option>
                                    <option value="CHRISTMAS ISLAND">CHRISTMAS ISLAND</option>
                                    <option value="COCOS (KEELING) ISLANDS">COCOS (KEELING) ISLANDS</option>
                                    <option value="COLOMBIA">COLOMBIA</option>
                                    <option value="COMOROS">COMOROS</option>
                                    <option value="CONGO">CONGO</option>
                                    <option value="COOK ISLANDS">COOK ISLANDS</option>
                                    <option value="COSTA RICA">COSTA RICA</option>
                                    <option value="CÔTE D IVOIRE">CÔTE D IVOIRE</option>
                                    <option value="CROATIA">CROATIA</option>
                                    <option value="CUBA">CUBA</option>
                                    <option value="CURAÇAO">CURAÇAO</option>
                                    <option value="CYPRUS">CYPRUS</option>
                                    <option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
                                    <option value="DEMOCRATIC PEOPLES REP- KOREA">DEMOCRATIC PEOPLES REP- KOREA</option>
                                    <option value="DEMOCRATIC REPUBLIC OF CONGO">DEMOCRATIC REPUBLIC OF CONGO</option>
                                    <option value="DENMARK">DENMARK</option>
                                    <option value="DJIBOUTI">DJIBOUTI</option>
                                    <option value="DOMINICA">DOMINICA</option>
                                    <option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
                                    <option value="ECUADOR">ECUADOR</option>
                                    <option value="EGYPT">EGYPT</option>
                                    <option value="EL SALVADOR">EL SALVADOR</option>
                                    <option value="EQUATORIAL GUINEA">EQUATORIAL GUINEA</option>
                                    <option value="ERITREA">ERITREA</option>
                                    <option value="ESTONIA">ESTONIA</option>
                                    <option value="ETHIOPIA">ETHIOPIA</option>
                                    <option value="FALKLAND ISLANDS (MALVINAS)">FALKLAND ISLANDS (MALVINAS)</option>
                                    <option value="FAROE ISLANDS">FAROE ISLANDS</option>
                                    <option value="FIJI">FIJI</option>
                                    <option value="FINLAND">FINLAND</option>
                                    <option value="FORMER YUGOSLAV REP MACEDONIA">FORMER YUGOSLAV REP MACEDONIA</option>
                                    <option value="FRANCE">FRANCE</option>
                                    <option value="FRENCH GUIANA">FRENCH GUIANA</option>
                                    <option value="FRENCH POLYNESIA">FRENCH POLYNESIA</option>
                                    <option value="FRENCH SOUTHERN TERRITORIES">FRENCH SOUTHERN TERRITORIES</option>
                                    <option value="GABON">GABON</option>
                                    <option value="GAMBIA">GAMBIA</option>
                                    <option value="GEORGIA">GEORGIA</option>
                                    <option value="GERMANY">GERMANY</option>
                                    <option value="GHANA">GHANA</option>
                                    <option value="GIBRALTAR">GIBRALTAR</option>
                                    <option value="GREECE">GREECE</option>
                                    <option value="GREENLAND">GREENLAND</option>
                                    <option value="GRENADA">GRENADA</option>
                                    <option value="GUADELOUPE">GUADELOUPE</option>
                                    <option value="GUAM">GUAM</option>
                                    <option value="GUATEMALA">GUATEMALA</option>
                                    <option value="GUERNSEY">GUERNSEY</option>
                                    <option value="GUINEA">GUINEA</option>
                                    <option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
                                    <option value="GUYANA">GUYANA</option>
                                    <option value="HAITI">HAITI</option>
                                    <option value="HEARD AND MCDONALD ISLANDS">HEARD AND MCDONALD ISLANDS</option>
                                    <option value="HOLY SEE (VATICAN CITY STATE)">HOLY SEE (VATICAN CITY STATE)</option>
                                    <option value="HONDURAS">HONDURAS</option>
                                    <option value="HONG KONG SPECIAL REG CHINA">HONG KONG SPECIAL REG CHINA</option>
                                    <option value="HUNGARY">HUNGARY</option>
                                    <option value="ICELAND">ICELAND</option>
                                    <option value="INDIA">INDIA</option>
                                    <option value="INDONESIA">INDONESIA</option>
                                    <option value="IRAN (ISLAMIC REPUBLIC OF)">IRAN (ISLAMIC REPUBLIC OF)</option>
                                    <option value="IRAQ">IRAQ</option>
                                    <option value="IRELAND">IRELAND</option>
                                    <option value="ISLE OF MAN">ISLE OF MAN</option>
                                    <option value="ISRAEL">ISRAEL</option>
                                    <option value="ITALY">ITALY</option>
                                    <option value="JAMAICA">JAMAICA</option>
                                    <option value="JAPAN">JAPAN</option>
                                    <option value="JERSEY">JERSEY</option>
                                    <option value="JORDAN">JORDAN</option>
                                    <option value="KAZAKHSTAN">KAZAKHSTAN</option>
                                    <option value="KENYA">KENYA</option>
                                    <option value="KIRIBATI">KIRIBATI</option>
                                    <option value="KOREA (REPUBLIC OF)">KOREA (REPUBLIC OF)</option>
                                    <option value="KUWAIT">KUWAIT</option>
                                    <option value="KYRGYZSTAN">KYRGYZSTAN</option>
                                    <option value="LAO PEOPLES DEMOCRATIC REP">LAO PEOPLES DEMOCRATIC REP</option>
                                    <option value="LATVIA">LATVIA</option>
                                    <option value="LEBANON">LEBANON</option>
                                    <option value="LESOTHO">LESOTHO</option>
                                    <option value="LIBERIA">LIBERIA</option>
                                    <option value="LIBYA">LIBYA</option>
                                    <option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
                                    <option value="LITHUANIA">LITHUANIA</option>
                                    <option value="LUXEMBOURG">LUXEMBOURG</option>
                                    <option value="MACAO SPECIAL ADMIN REG CHINA">MACAO SPECIAL ADMIN REG CHINA</option>
                                    <option value="MADAGASCAR">MADAGASCAR</option>
                                    <option value="MALAWI">MALAWI</option>
                                    <option value="MALAYSIA">MALAYSIA</option>
                                    <option value="MALDIVES">MALDIVES</option>
                                    <option value="MALI">MALI</option>
                                    <option value="MALTA">MALTA</option>
                                    <option value="MARSHALL ISLANDS">MARSHALL ISLANDS</option>
                                    <option value="MARTINIQUE">MARTINIQUE</option>
                                    <option value="MAURITANIA">MAURITANIA</option>
                                    <option value="MAURITIUS">MAURITIUS</option>
                                    <option value="MAYOTTE">MAYOTTE</option>
                                    <option value="MEXICO">MEXICO</option>
                                    <option value="MICRONESIA FEDERATED STATES OF">MICRONESIA FEDERATED STATES OF</option>
                                    <option value="MOLDOVA (REPUBLIC OF)">MOLDOVA (REPUBLIC OF)</option>
                                    <option value="MONACO">MONACO</option>
                                    <option value="MONGOLIA">MONGOLIA</option>
                                    <option value="MONTENEGRO">MONTENEGRO</option>
                                    <option value="MONTSERRAT">MONTSERRAT</option>
                                    <option value="MOROCCO">MOROCCO</option>
                                    <option value="MOZAMBIQUE">MOZAMBIQUE</option>
                                    <option value="MYANMAR">MYANMAR</option>
                                    <option value="NAMIBIA">NAMIBIA</option>
                                    <option value="NAURU">NAURU</option>
                                    <option value="NEPAL">NEPAL</option>
                                    <option value="NETHERLANDS">NETHERLANDS</option>
                                    <option value="NEW CALEDONIA">NEW CALEDONIA</option>
                                    <option value="NEW ZEALAND">NEW ZEALAND</option>
                                    <option value="NICARAGUA">NICARAGUA</option>
                                    <option value="NIGER">NIGER</option>
                                    <option value="NIGERIA">NIGERIA</option>
                                    <option value="NIUE">NIUE</option>
                                    <option value="NORFOLK ISLAND">NORFOLK ISLAND</option>
                                    <option value="NORTHERN MARIANA ISLANDS">NORTHERN MARIANA ISLANDS</option>
                                    <option value="NORWAY">NORWAY</option>
                                    <option value="OMAN">OMAN</option>
                                    <option value="PAKISTAN">PAKISTAN</option>
                                    <option value="PALAU">PALAU</option>
                                    <option value="PALESTINE (STATE OF)">PALESTINE (STATE OF)</option>
                                    <option value="PANAMA">PANAMA</option>
                                    <option value="PAPUA NEW GUINEA">PAPUA NEW GUINEA</option>
                                    <option value="PARAGUAY">PARAGUAY</option>
                                    <option value="PERU">PERU</option>
                                    <option value="PHILIPPINES">PHILIPPINES</option>
                                    <option value="PITCAIRN">PITCAIRN</option>
                                    <option value="POLAND">POLAND</option>
                                    <option value="PORTUGAL">PORTUGAL</option>
                                    <option value="PUERTO RICO">PUERTO RICO</option>
                                    <option value="QATAR">QATAR</option>
                                    <option value="RÉUNION">RÉUNION</option>
                                    <option value="ROMANIA">ROMANIA</option>
                                    <option value="RUSSIAN FEDERATION">RUSSIAN FEDERATION</option>
                                    <option value="RWANDA">RWANDA</option>
                                    <option value="SAINT BARTHÉLEMY">SAINT BARTHÉLEMY</option>
                                    <option value="SAINT HELENA">SAINT HELENA</option>
                                    <option value="SAINT KITTS AND NEVIS">SAINT KITTS AND NEVIS</option>
                                    <option value="SAINT LUCIA">SAINT LUCIA</option>
                                    <option value="SAINT MARTIN (FRENCH PART)">SAINT MARTIN (FRENCH PART)</option>
                                    <option value="SAINT PIERRE AND MIQUELON">SAINT PIERRE AND MIQUELON</option>
                                    <option value="SAMOA">SAMOA</option>
                                    <option value="SAN MARINO">SAN MARINO</option>
                                    <option value="SAO TOME AND PRINCIPE">SAO TOME AND PRINCIPE</option>
                                    <option value="SAUDI ARABIA">SAUDI ARABIA</option>
                                    <option value="SENEGAL">SENEGAL</option>
                                    <option value="SERBIA">SERBIA</option>
                                    <option value="SEYCHELLES">SEYCHELLES</option>
                                    <option value="SIERRA LEONE">SIERRA LEONE</option>
                                    <option value="SINGAPORE">SINGAPORE</option>
                                    <option value="SINT MAARTEN (DUTCH PART)">SINT MAARTEN (DUTCH PART)</option>
                                    <option value="SLOVAKIA">SLOVAKIA</option>
                                    <option value="SLOVENIA">SLOVENIA</option>
                                    <option value="SOLOMON ISLANDS">SOLOMON ISLANDS</option>
                                    <option value="SOMALIA">SOMALIA</option>
                                    <option value="SOUTH GEORGIA SOUTH SANDWICH">SOUTH GEORGIA SOUTH SANDWICH</option>
                                    <option value="SOUTH SUDAN">SOUTH SUDAN</option>
                                    <option value="SPAIN">SPAIN</option>
                                    <option value="SRI LANKA">SRI LANKA</option>
                                    <option value="ST VINCENT AND THE GRENADINES">ST VINCENT AND THE GRENADINES</option>
                                    <option value="SUDAN">SUDAN</option>
                                    <option value="SURINAME">SURINAME</option>
                                    <option value="SVALBARD AND JAN MAYEN">SVALBARD AND JAN MAYEN</option>
                                    <option value="SWAZILAND">SWAZILAND</option>
                                    <option value="SWEDEN">SWEDEN</option>
                                    <option value="SWITZERLAND">SWITZERLAND</option>
                                    <option value="SYRIAN ARAB REPUBLIC">SYRIAN ARAB REPUBLIC</option>
                                    <option value="TAIWAN (PROVINCE OF CHINA)">TAIWAN (PROVINCE OF CHINA)</option>
                                    <option value="TAJIKISTAN">TAJIKISTAN</option>
                                    <option value="TANZANIA (UNITED REPUBLIC OF)">TANZANIA (UNITED REPUBLIC OF)</option>
                                    <option value="THAILAND">THAILAND</option>
                                    <option value="TIMOR-LESTE">TIMOR-LESTE</option>
                                    <option value="TOGO">TOGO</option>
                                    <option value="TOKELAU">TOKELAU</option>
                                    <option value="TONGA">TONGA</option>
                                    <option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
                                    <option value="TUNISIA">TUNISIA</option>
                                    <option value="TURKEY">TURKEY</option>
                                    <option value="TURKMENISTAN">TURKMENISTAN</option>
                                    <option value="TURKS AND CAICOS ISLANDS">TURKS AND CAICOS ISLANDS</option>
                                    <option value="TUVALU">TUVALU</option>
                                    <option value="UGANDA">UGANDA</option>
                                    <option value="UKRAINE">UKRAINE</option>
                                    <option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
                                    <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                                    <option value="UNITED KINGDOM (SUBJECT)">UNITED KINGDOM (SUBJECT)</option>
                                    <option value="UNITED STATES">UNITED STATES</option>
                                    <option value="URUGUAY">URUGUAY</option>
                                    <option value="US MINOR OUTLYING ISLANDS">US MINOR OUTLYING ISLANDS</option>
                                    <option value="UZBEKISTAN">UZBEKISTAN</option>
                                    <option value="VANUATU">VANUATU</option>
                                    <option value="VENEZUELA">VENEZUELA</option>
                                    <option value="VIET NAM">VIET NAM</option>
                                    <option value="VIRGIN ISLANDS (BRITISH)">VIRGIN ISLANDS (BRITISH)</option>
                                    <option value="VIRGIN ISLANDS (U.S.)">VIRGIN ISLANDS (U.S.)</option>
                                    <option value="WALLIS AND FUTUNA">WALLIS AND FUTUNA</option>
                                    <option value="WESTERN SAHARA">WESTERN SAHARA</option>
                                    <option value="YEMEN">YEMEN</option>
                                    <option value="ZAMBIA">ZAMBIA</option>
                                    <option value="ZIMBABWE">ZIMBABWE</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Tax identification number</td>
                            <td>
                                <input type="text" v-model="item.text" @blur.once="item.error = true"><span class="error" :style="{'visibility':item.error&&item_result(index)?'visible':'hidden'}"></span>
                                <!-- <a class="error" title="Please enter a valid tax identification number, or indicate a reason for not providing a tax identification number">&nbsp;</a> -->
                            </td>
                        </tr>
                        <tr>
                            <td>Reason</td>
                            <td>
                                <select v-model="item.select2" @change.once="item.error = true">
                                    <option value=""></option>
                                    <option value="Not registered">I have never registered with my tax authority</option>
                                    <option value="Not specified">I do not know this, but will take steps to submit this to AD Wealth</option>
                                    <option>Jurisdiction does not issue TINs</option>
                                    <option>Unable to obtain a TIN</option>                            
                                    <option>TIN disclosure not required</option>
                                </select>
                            </td>
                        </tr>
                        </template>
                        <tr v-show="radio3 == 'yes'">
                            <td colspan="2" style="background:#efefef;"><input type="button" value="Add more tax information" @click="addMore" style="padding:0px 10px;"><input type="button" @click="removeMore"  value="Remove" style="padding:0px 10px;margin-left:20px;" :style="{'display':templateDate.length>1?'inline-block':'none'}"></td>
                        </tr>
                        <tr v-show="radio3 == 'yes'">
                            <td colspan="2">
                                <div class="notice"><b>Important note</b><br/>The country/countries listed above will not have an impact on the DWT/IWT rates applied to your investment, but AD Wealth may be required to report the information to the Belize Revenue Services who may share it with foreign tax authorities to adhere to the Foreign Account Tax Compliance Act (FATCA) and the Common Reporting Standard (CRS).</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table_tax4">
                    <thead>
                        <tr>
                            <th colspan="2">U.S. status certification 
                                <Tooltip placement="right-start" transfer>
                                      <span class="info"></span>
                                      <div slot="content" style="white-space:normal;">A “Specified U.S. Person” means an individual that is:<ul><li>A U.S. citizen </li><li>An individual who was born in the United States</li><li>An individual who is resident in the United States</li><li>An individual with a tax reporting obligation to the United States</li></ul></div>
                                </Tooltip>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Are you a "U.S. Person"?</td>
                            <td><span><input v-model="radio4" value="yes" type="radio"><label>Yes</label><input v-model="radio4" value="no" type="radio"><label>No</label></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table_div" v-show="radio4 == 'yes'">
                <h3>United States Tax Liability Declaration</h3>
                <table class="table_tax4_child">
                    <tbody>
                        <tr>
                            <td>I am liable to declare my income and assets to the US IRS. </td>
                            <td><span><input v-model="radio5" value="yes" type="radio"><label>Yes</label><input v-model="radio5" value="no" type="radio"><label>No</label></span></td>
                        </tr>
                        <tr>
                            <td colspan="2"><div class="notice">If AD Wealth identifies, through the information provided on this application form, that you fall into the definition of a U.S person, you may be required to submit further documents.</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="red_star">Compulsory information</p>
            <div class="button_div">
                <button @click="back" class="back_btn"></button>
                <button @click="next3" class="next_btn" :class="tabNum == 3?'':'disabled'" :disabled="tabNum !== 3"></button>
            </div>
        </div>
        <div class="content_4 content" v-show="tabNum == 4">
            <div class="table_div">
                <h3>Your Investment Details</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Where is the money coming from ?
                                <!-- <a class="info" title="This is required in terms of the Financial Intelligence Centre Act, 38 of 2001 (FICA), which provides a legal framework for combatting money laundering.">&nbsp;</a> -->
                            </td>
                        </tr>
                        <tr>
                            <td><span><input v-model="radio6" value="Your salary or bonus" type="radio"><label>Your salary or bonus</label><input v-model="radio6" value="An existing AD Wealth investment" type="radio"><label>An existing AD Wealth investment</label><input v-model="radio6" value="Inheritance" type="radio"><label>Inheritance</label><input v-model="radio6" value="Savings in a bank account" type="radio"><label>Savings in a bank account</label><input v-model="radio6" value="0" type="radio"><label>Other</label></span></td>
                        </tr>
                        <tr v-show="radio6 == '0'">
                            <td>Specify&nbsp;<input type="text" v-model="other_text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table_div">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Lump sum contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>How do you want to invest?</td>
                            <td>
                                <select v-model="select1">
                                    <option value=""></option>
                                    <option value="Cheque deposit">Cheque deposit</option>
                                    <option value="Bank Telegraphic Transfer">Bank Telegraphic Transfer</option>
                                </select>
                            </td>
                        </tr>
                        <tr v-show="select1 !== ''">
                            <td colspan="2"><div class="notice"><b>We need proof that you have made the deposit into our bank account </b><br/>Our bank details will be displayed on the confirmation screen. Please make the deposit once you have completed your details. We will finalize your investment after receiving your funds into our bank account. </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Distribution Details</h3>
            <div class="table_div clearinput">
                <table>
                    <tbody>
                    <tr>
                        <td><span><input v-model="radio7" value="1" type="radio"><label>Distributions to be reinvested </label><br/><input v-model="radio7" value="2" type="radio"><label>Distributions to be paid directly into bank account (We will only make payments into the registered investor's bank account and not into the bank account of a third party.)</label></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h3>Financial Adviser Details</h3>
            <div class="table_div">
                <table>
                    <tbody>
                    <tr>
                        <td>Do you have a financial adviser on this investment?<span><input v-model="radio8" value="yes" type="radio"><label>Yes</label><input v-model="radio8" value="no" type="radio"><label>No</label></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="red_star">Compulsory information</p>
            <div class="button_div">
                <button @click="back" class="back_btn"></button>
                <button @click="next" class="next_btn" :class="tabNum == 4?'':'disabled'" :disabled="tabNum !== 4"></button>
            </div>
        </div>
        <div class="content_7 content" v-show="tabNum == 7">
            <p><b>AD Wealth</b></p>
            <div class="clearfix"><h3>Summary - Ref.No.{{reference_number}}</h3><button class="print_btn" @click="print"></button></div>
        </div>
        <div class="content_5 content" v-show="tabNum == 5||tabNum == 7">
            <div class="introduction" v-show="tabNum == 5">
                <p>Please do the following:</p>
                <ul>
                    <li>Check all your details below. To make changes, click the “Back” button at the bottom of this page until you get to the page where you first entered the information.</li>
                    <li>Read the “Investment Overview” and “Terms and Conditions” at the bottom of this page.</li>
                    <li>Click “Submit” when you are satisfied that all information is correct.</li>
                </ul>
            </div>
            <h3>Funds</h3>
            <div class="table_div">
                <table>
                    <thead>
                        <tr>
                            <th>Fund</th>
                            <th align="right" v-show="total_fund1>0">Lump sum contribution</th>
                            <th align="right" v-show="total_fund2>0">Monthly contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="checkbox1">
                            <td>Equity Fund</td>
                            <td align="right" v-show="equity1>0||balanced1>0||stable1>0">USD {{equity1|filterFun}}</td>
                            <td align="right" v-show="equity2>0||balanced2>0||stable2>0">USD {{equity2|filterFun}}</td>
                        </tr>
                        <tr v-show="checkbox2">
                            <td>Balanced Fund</td>
                            <td align="right" v-show="equity1>0||balanced1>0||stable1>0">USD {{balanced1|filterFun}}</td>
                            <td align="right" v-show="equity2>0||balanced2>0||stable2>0">USD {{balanced2|filterFun}}</td>
                        </tr>
                        <tr v-show="checkbox3">
                            <td>Stable Fund</td>
                            <td align="right" v-show="equity1>0||balanced1>0||stable1>0">USD {{stable1|filterFun}}</td>
                            <td align="right" v-show="equity2>0||balanced2>0||stable2>0">USD {{stable2|filterFun}}</td>
                        </tr>
                        <tr>
                            <td>Total investment amount</td>
                            <td align="right" v-show="total_fund1>0">USD {{total_fund1|filterFun}}</td>
                            <td align="right" v-show="total_fund2>0">USD {{total_fund2|filterFun}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Investor Details</h3>
            <div class="table_div">
                <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>{{title}}</td>
                        </tr>
                        <tr>
                            <td>First name:</td>
                            <td>{{firstname}}</td>
                        </tr>
                        <tr>
                            <td>Surname:</td>
                            <td>{{surname}}</td>
                        </tr>
                        <tr>
                            <td>Identification/Passport Number:</td>
                            <td>{{passport}}</td>
                        </tr>
                        <tr>
                            <td>Date of birth:</td>
                            <td>{{birth|birthMoment}}</td>
                        </tr>
                        <tr>
                            <td>Nationality:</td>
                            <td>{{nation}}</td>
                        </tr>
                        <tr>
                            <td>Email address:</td>
                            <td>{{email}}</td>
                        </tr>
                        <tr>
                            <td>Mobile phone number:</td>
                            <td>{{mobile}}</td>
                        </tr>
                        <tr>
                            <td>Residential address:</td>
                            <td>{{address}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Tax Information For The Investor</h3>
            <div class="table_div">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Dividend and Interest Withholding Tax</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" v-if="radio2 == 'yes'">The investor is registered in Belize for fax purposes.</td>
                            <td colspan="2" v-else>The investor is not registered in Belize for fax purposes.</td>
                        </tr>
                        <tr v-show="radio2 == 'no'">
                            <td>Country of residence for tax purposes:</td>
                            <td>{{residence}}</td>
                        </tr>
                        <tr>
                            <td>Tax identification number:</td>
                            <td v-if="tax_number_reason !== ''">{{tax_number_reason}}</td>
                            <td v-else>{{tax_number}}</td>
                        </tr>
                        <tr v-if="radio3 == 'no'">
                            <td colspan="2">I don't have any additional tax information?</td>
                        </tr>
                        <template v-else v-for="(item, index) in templateDate">
                            <tr>
                                <td>Country</td>
                                <td>{{item.select1}}</td>
                            </tr>
                            <tr>
                                <td>Tax identification number</td>
                                <td>{{item.text}}</td>
                            </tr>
                            <tr>
                                <td>Reason</td>
                                <td>{{item.select2}}</td>
                            </tr>
                        </template>
                        <tr v-show="radio4 == 'no'">
                            <td colspan="2">The investor is not a Specified U.S.Person.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 v-show="radio4 == 'yes'">United States Tax Liability Declaration</h3>
            <div class="table_div" v-show="radio4 == 'yes'">
                <table>
                    <tbody>
                        <tr>
                            <td v-if="radio5 == 'yes'">I am liable to declare my income and assets to the US IRS.</td>
                            <td v-else>I am not liable to declare my income and assets to the US IRS.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 v-show="radio6 !== ''&&select1 !==''">Investment Details</h3>
            <div class="table_div" v-show="radio6 !== ''&&select1 !==''">
                <table>
                    <tbody>
                        <tr v-show="radio6 !== ''">
                            <td>Source of funds:</td>
                            <td v-if="radio6 == '0'">Other:{{other_text}}</td>
                            <td v-else>{{radio6}}</td>
                        </tr>
                        <tr v-show="select1 !== ''">
                            <td>Method of payment:</td>
                            <td>{{select1}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 v-show="radio7 !== ''">Distribution Details</h3>
            <div class="table_div" v-show="radio7 !== ''">
                <table>
                    <tbody>
                        <tr>
                            <td>Distributions:</td>
                            <td v-if="radio7 == '1'">Reinvested</td>
                            <td v-else>Paid directly into bank account</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 v-show="radio8 !== ''">Financial Adviser Details</h3>
            <div class="table_div" v-show="radio8 !== ''">
                <table>
                    <tbody>
                        <tr>
                            <td>Financial Adviser:</td>
                            <td v-if="radio8 == 'yes'">Yes</td>
                            <td v-else>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul v-show="tabNum == 5">
                <b>Please read the documents below.</b>
                <li><input type="checkbox" v-model="read1">I have read and understood the relevant fund factsheet (minimum disclosure document) of the unit trusts I wish to invest.</li>
                <li><input type="checkbox" v-model="read2">I have read and understood the AD Wealth Unit Trust Investment Overview, which set out the fees, fund selection and an explanation of how the product works. I will need this information to complete my confirmation instruction.</li>
                <li><input type="checkbox" v-model="read3">I have read, understood and agree to the <router-link to="/AD-Wealth-Unit-Trust-T&C-180607" target="_blank">Terms and Conditions</router-link> that apply to this investment.</li>
                <li><input type="checkbox" v-model="read4">I have read, understood and agree to the <router-link to="/AD-Wealth-Online-T&C-180605" target="_blank">Terms and Conditions</router-link> that govern the use of the AD Wealth website. </li>
                <li><input type="checkbox" v-model="read5">All parties associated with this investment have read, understood and agree to the FATCA/CRS <a href="javascript:void(0)">Terms and Conditions</a> that relate to AD Wealth’s tax reporting obligations.</li>
            </ul>
            <div class="button_div" v-show="tabNum == 5">
                <button @click="back" class="back_btn"></button>
                <button @click="next" class="submit_btn" :class="tabNum == 5&&read_submit?'':'disabled'" :disabled="!(tabNum == 5&&read_submit)"></button>
            </div>
        </div>
        <div class="content_6 content" v-show="tabNum == 6||tabNum == 7">
            <p v-show="tabNum == 6">Thank you for submitting your investment online. Your reference number is {{reference_number}}.</p>
            <p v-show="tabNum == 6">Your supporting documents have been emailed to you. We will process your investment once we have received a signed copy of these documents.</p>
            <button class="print_btn" @click="next" v-show="tabNum == 6"></button>
            <p style="margin-top:45px;">Cheque / Electronic Transfers and internet transfers should be made in favor of the bank account below, also see the correct reference number to use for the Administrator to identify your money. Please email the proof of deposit and supporting documents to cs@ad-wealth.com.</p>
            <table class="print_table">
                <thead>
                    <tr>
                        <th colspan="2">AD Wealth bank details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Account Name:</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Bank:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Account Number:</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>SWIFT Code:</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="footer" v-show="tabNum !== 7"><p>© Copyright 2018 AD Wealth Inc. All rights reserved.</p></div>
    <Modal  class="modal1" v-model="modal1"  title="Equity Fund" class-name="vertical-center-modal">
        <p>Invest in listed shares for long-term capital growth and are comfortable with significant stock market movement. Accept the possibility of losing capital and have at least five years to invest, but preferably longer.</p>
    </Modal>
    <Modal class="modal2" v-model="modal2" title="Balanced Fund" class-name="vertical-center-modal">
        <p>Investment for steady, long-term capital growth and are comfortable with taking on some risk of market fluctuation and potential capital loss. Ideally investing for at least three years.</p>
    </Modal>
    <Modal class="modal3" v-model="modal3" title="Stable Fund" class-name="vertical-center-modal">
        <p>Capital preservation is the primary goal and are comfortable with lower potential return over time than you might earn in a unit trust that takes on more risk. Ideally investing for at least two years.</p>
    </Modal>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'invest-now',
  data () {
    return {
      tabNum:5,
      //   1
      checkbox1:false,
      checkbox2:false,
      checkbox3:false,
      equity1:'',
      equity2:'',
      equity1_error:false,
      equity2_error:false,
      balanced1:'',
      balanced2:'',
      balanced1_error:false,
      balanced2_error:false,
      stable1:'',
      stable2:'',
      stable1_error:false,
      stable2_error:false,
      modal1:false,
      modal2:false,
      modal3:false,
      // 2 
      radio1:'investor',
      title:'',
      firstname:'',
      surname:'',
      passport:'',
      birth:'',
      nation:'',
      email:'',
      mobile:'',
      address:'',
      //   3
      radio2:'',
      residence:'',
      tax_number:'',
      tax_number_error:false,
      tax_number_reason:'',
      radio3:'',
      templateNumber:1,
      templateDate:[{select1:'',text:'',select2:'',error:false}],
      radio4:'',
      radio5:'',
      //   4
      radio6:'',
      other_text:'',
      select1:'',
      radio7:'',
      radio8:'',
      //   5
      total:50000,
      read1:false,
      read2:false,
      read3:false,
      read4:false,
      read5:false,
      //   6,7
      reference_number:'1517982'
    }
  },
  mounted () {
    document.title = 'AD Wealth | Invest now'
  },
  computed:{
      checkbox_fund:function(){
          return this.checkbox1||this.checkbox2||this.checkbox3;
      },
      total_fund1:function(){
          return (this.checkbox1?(this.equity1 == ''?0:this.equity1):0)+(this.checkbox2?(this.balanced1 == ''?0:this.balanced1):0)+(this.checkbox3?(this.stable1 == ''?0:this.stable1):0);
      },
      total_fund2:function(){
          return (this.checkbox1?(this.equity2 == ''?0:this.equity2):0)+(this.checkbox2?(this.balanced2 == ''?0:this.balanced2):0)+(this.checkbox3?(this.stable2 == ''?0:this.stable2):0);
      },
      investor_next:function(){
          if(this.title == ''||this.firstname == ''||this.surname == ''||this.passport == ''||this.birth == ''||this.nation == ''||this.email == ''||this.mobile == ''||this.address == ''){
              return false;
          }else{
              return true;
          }
      },
      tax_number_result:function(){
        if(this.tax_number == ''&&this.tax_number_reason == ''){
            return true;
        }else{
            return false;
        }
      },
      read_submit:function(){
          if(this.read1&&this.read2&&this.read3&&this.read4&&this.read5){
              return true;
          }else{
              return false;
          }
      }
  },
  filters: {
        filterFun: function(value){
            var s =  Math.round(value).toFixed(2);
            if(/[^0-9\.]/.test(s)) return "invalid value";
            s=s.replace(/^(\d*)$/,"$1.");
            s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
            s=s.replace(".",",");
            var re=/(\d)(\d{3},)/;
            while(re.test(s))
                    s=s.replace(re,"$1,$2");
            s=s.replace(/,(\d\d)$/,".$1");
            return s.replace(/^\./,"0.")
        },
        birthMoment:function(el){
            return moment(el).format('L');
        }
  },
  methods: {
      tab(index){
          this.tabNum = index;
      },
      next(){
          this.tabNum ++;
      },
      back(){
          this.tabNum --;
      },
      next1(){
          var self = this;
          self.equity1_error = false;
          self.equity2_error = false;
          self.balanced1_error = false;
          self.balanced2_error = false;
          self.stable1_error = false;
          self.stable2_error = false;
        //   if(self.checkbox1&& ( (20000>self.equity1&&self.equity1>0)||!(self.equity1>=20000) ) ){
          if(self.checkbox1&& ( !(20000<=self.equity1)&&!((self.equity1 == 0||self.equity1 == '')&&(self.equity2>0)) ) ){
            self.equity1_error = true;
            return false;
          }else if(self.checkbox1&& ( !(2000<=self.equity2)&&!((self.equity2 == 0||self.equity2 == '')&&(self.equity1>0)) ) ){
            self.equity2_error = true;
            return false;
          }else if(self.checkbox2&& ( !(20000<=self.balanced1)&&!((self.balanced1 == 0||self.balanced1 == '')&&(self.balanced2>0)) ) ){
            self.balanced1_error = true;
            return false;
          }else if(self.checkbox2&& ( !(2000<=self.balanced2)&&!((self.balanced2 == 0||self.balanced2 == '')&&(self.balanced1>0)) ) ){
            self.balanced2_error = true;
            return false;
          }else if(self.checkbox3&& ( !(20000<=self.stable1)&&!((self.stable1 == 0||self.stable1 == '')&&(self.stable2>0)) ) ){
            self.stable1_error = true;
            return false;
          }else if(self.checkbox3&& ( !(2000<=self.stable2)&&!((self.stable2 == 0||self.stable2 == '')&&(self.stable1>0)) ) ){
            self.stable2_error = true;
            return false;
          }
          self.next();
      },
      next3(){
          var self = this;
          if(self.tax_number == ''&& self.tax_number_reason == ''){
              self.tax_number_error = true;
              return false;
          }
          for(let i=0;i<self.templateDate.length;i++){
              if(self.templateDate[i].text == ''&&self.templateDate[i].select2 ==''){
                  self.templateDate[i].error = true;
                  return false;
              }
          }
          self.next();
      },
      print(){
          window.print();
          window.location.reload();
      },
      addMore(){
          if(this.templateNumber>9){
              return false;
          }
          this.templateNumber++;
          this.templateDate.push({
              select1:'',
              text:'',
              select2:'',
              error:false
          })
      },
      removeMore() {
        if(this.templateNumber<2){
            return false;
        }
        this.templateNumber--;
        // var index = this.templateDate.indexOf(item)
        // if (index !== -1) {
        //   this.templateDate.splice(index, 1)
        // }
        this.templateDate.pop();
      },
      item_result(index){
          if(this.templateDate[index].text == ''&&this.templateDate[index].select2 == ''){
              return true;
          }else{
              return false;
          }
      }
  }
}
</script>
<style scoped>
.row_1{
    max-width:900px;
    margin:0 auto;
    min-height:800px;
}
.row_1>h2{
    text-align:left;
    padding:20px 0px 15px;
}
.row_1>p{
    text-align:left;
    margin-bottom:10px;
}
.steps{
    margin-top:50px;
    margin-bottom:40px;
    display:flex;
    padding-bottom:20px;
    border-bottom:2px solid #d4d4d4;
}
.steps li{
    flex-basis:25%;
    flex-shrink:1;
    position: relative;
    display:inline-block;
    white-space:nowrap;
}
.steps li div.number_arrow_div{
    position: relative;
    width:100%;
}
.number_arrow_div span{
    position: relative;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-size: 18px;
    box-sizing: border-box;
    background: #fff;
    transition: .15s ease-out;
    border-radius: 50%;
    border: 2px solid;
    border-color: inherit;
}
li.active .number_arrow_div span{
    background:#c3344a;
    color:#fff;
}
.number_arrow_div .arrow_div{
    position:absolute;
    left: 50%;
    right: -50%;
}
.steps li:last-of-type .number_arrow_div .arrow_div{
    display:none;
}
.number_arrow_div .arrow_div:after,.number_arrow_div .arrow_div:before{
    content: "";
    display: inline-block;
    position: absolute;
    height: 15px;
    width: 1px;
    background: #c0c4cc;
}
.number_arrow_div .arrow_div:before{
    transform: rotate(-45deg) translateY(-4px);
    transform-origin: 0 0;
}
.number_arrow_div .arrow_div:after{
    transform: rotate(45deg) translateY(4px);
    transform-origin: 100% 100%;
}
.steps li div.text{
    text-align:center;
    white-space:normal;
    margin-top:10px;
    font-size:17px;
    padding:0px 30px;
}
.steps li.active div.text{
    color:#c3344a;
}
/* 内容块 */
.content .button_div{
    text-align:right;
}
.button_div button.back_btn{
    background-image: url('../assets/img/button_back.gif');
    width: 95px;
    height: 49px;
    border: none;
}
.button_div button.back_btn:hover{
    background-position:-95px 0;
}
.button_div button.back_btn:active{
    background-position:-190px 0;
}
.button_div button.next_btn{
    background-image: url('../assets/img/button_next.gif');
    width: 95px;
    height: 49px;
    border: none;
}
.button_div button.next_btn.disabled{
    background-position:-285px 0px;
}
.button_div button.next_btn:not(.disabled):hover{
    background-position:-95px 0;
}
.button_div button.next_btn:not(.disabled):active{
    background-position:-190px 0;
}
.button_div button.submit_btn{
    background-image: url('../assets/img/button_submit.gif');
    width: 95px;
    height: 49px;
    border: none;
}
.button_div button.submit_btn.disabled{
    background-position:-285px 0px;
}
.button_div button.submit_btn:not(.disabled):hover{
    background-position:-95px 0;
}
.button_div button.submit_btn:not(.disabled):active{
    background-position:-190px 0;
}
button.print_btn{
    background-image: url('../assets/img/button_print.png');
    width: 197px;
    height: 49px;
    border: none;
    margin:25px 0px 0px;
}
.content_0{
    padding-top:40px;
}
.content_0 p{
    border-top: solid 1px #ccc;
    margin-top:30px;
    padding-top:5px;
    /* padding-left:20px; */
    /* padding-right:20px; */
    text-align:left;
}
.content_1 .introduction p,.content_5 .introduction p{
    margin-bottom:10px;
    text-align:left;
}
.content_1 .introduction ul,.content_5 .introduction ul{
    padding-bottom:8px;
    clear:both;
}
.content_1 .introduction ul li,.content_5 .introduction ul li{
    background: transparent url('../assets/img/bullet_body_red.gif') no-repeat scroll left top;
    list-style-type: none;
    padding-left: 10px;
    margin: 4px 0 0 20px;
    text-align: left;
}
.table_div{
    padding: 2px;
    border: solid 3px #f3f3f3;
}
.content_1 .table_div{
    margin-top:20px;
}
.table_div table{
    width:100%;
    border-collapse: collapse;
}
.table_div table tr td,.content_1 .table_div table tr th{
    padding:5px;
}
.table_div table tr td{
    border-width: 1px;
    border: solid 1px #dfdfdf;
    white-space: normal;
}
.table_div table thead tr th,.content_1 .table_div table tfoot tr td{
    background-color: #efefef;
    border: solid 1px #c1c1c1;
    padding: 8px;
}
.content_1 .table_div table tr th:nth-child(2),.content_1 .table_div table tr td:nth-child(2){
    text-align:left;
}
.content_1 .table_div .slide_td{
    /* height:38px; */
    padding-top:8px;
}
.content_1 .table_div table tfoot .slide_td{
    height: 25px;
    padding-top:0px;
}
.content_1 .slide_td div{
    float: left;
    width:50%;
}
.content_1 .slide_td div input{
    text-align:right;
}
/* .content_1 .slide_td.error_border div input{
    border-color:red;
} */
.content_1 .slide_td:after{
    clear:both;
}
.content_1 .slide_td div span{
    display:block;
    color:red;
}
.content_1>p,.content_2>p,.content_3>p,.content_4>p{
    text-align:left;
    margin:10px 0px 15px;
}

.content_2 .radio_div{
    text-align:left;
}
.content_2 .radio_div div{
    display:inline-block;
    width:230px;
    padding:5px 0px 5px 5px;
    background:#fafafa;
    border:1px solid #dfdfdf;
}
.content_2 .radio_div input{
    vertical-align:middle;
}.content_2 .radio_div label{
    margin-left:5px;
}
.content_2 h3,.content_3 h3,.content_4 h3,.content_5 h3{
    background-color: #efefef;
    border: solid 1px #c1c1c1;
    padding: 8px;
    text-align:left;
    margin-bottom:2px;
    color:#ff373f;
}
.content_2>h3,.content_3>h3,.content_4>h3,.content_5>h3{
    margin-top:15px;
}
.content_2 .table_div table tr td{
    width:50%;
    text-align:left;
}
.content_2 .table_div table tr td em{
    font-style:normal;
    font-size:10px;
}
.content_2 .birth_td div input{
    width:27%;
}
.content_2 textarea{
    width:100%;
    min-height:50px;
}


.content_3 .table_div{
    text-align:left;
}
.content_3 .table_div:nth-child(3){
    margin-top:15px;
}
.table_div table td span input{
    vertical-align:middle;
    margin-left:5px;
}
.table_div.clearinput table td span input{
    margin-left:0px;
}
.table_div table td span label{
    margin-left:5px;
}
.content_3 .table_div td div.notice,.content_4 .table_div td div.notice{
    background: none repeat scroll 0 0 #EEEEEE;
    border-left: 3px solid red;
    font-family: arial;
    font-size: 11px;
    padding: 8px;
    color: #000 !important;
}
.table_tax2{
    margin-top:10px;
}
.table_tax3,.table_tax4{
    margin-top:20px;
}


.content_4 .table_div{
    text-align:left;
}
.content_4 .table_div:nth-child(1),.content_4 .table_div:nth-child(2){
    margin-top:15px;
}


.content_5 .table_div{
    text-align:left;
}
.content_5>ul{
    margin-top:40px;
    border-top:1px solid rgb(198,198,198);
    text-align:left;
}
.content_5>ul b{
    display:block;
    margin:10px 0px;
}
.content_5>ul li{
    list-style:none;
    line-height:18px;
    margin-bottom:20px;
    padding-left:20px;
    position:relative;
}
.content_5>ul li input{
    position:absolute;
    top:3px;
    left:0px;
    vertical-align:middle;
}
.content_6{
    text-align:left;
}
.content_6>p{
    margin-bottom:10px;
}
.content_7{}
.content_7 p{
    font-size:16px;
    text-align:left;
}
.content_7 div h3{
    font-size:21px;
    height:49px;
    line-height:70px;
    float:left;
}
.content_7 button.print_btn{
    margin:0px;
    float:right;
}
/* 头部，底部 */
.header{
    background:#b49401; 
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
.header a{
    padding:0 20px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border: 2px solid #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 2px;
    background: #3b7ddb;
    float:right;
    margin-top:27px;
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


/* 样式 */
.info{
    background: url('../assets/img/info_tooltip.gif') no-repeat 0px -2px;
    padding-left: 16px;
    padding-bottom: 2px;
    font-weight: bold;
    margin-left: 3px;
}
.ivu-tooltip-inner div ul li{
    list-style-position:inside;
}
.error{
    background: url('../assets/img/unchecked.gif') no-repeat 0px -2px;
    padding-left: 16px;
    padding-bottom: 2px;
    font-weight: bold;
    margin-left: 3px;
    color: #EA5200;
}


.content table tr td.red_star:after{
    content:'*';
    display:inline-block;
    color:red;
}
.content>p.red_star:before{
    content:'*';
    display:inline-block;
    color:red;
}
em.red{
    font-style:normal;
    color:red;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
}
</style>