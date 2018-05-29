<template>
  <div class="invest-now">
    <div class="row_1">
        <h2>Welcome to Invest Now</h2>
        <p>Follow the four steps below to invest with us.</p>
        <ul class="steps">
            <li>
                <div class="number_arrow_div">
                    <span>1</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Choose your unit trust(s)</div>
            </li>
            <li>
                <div class="number_arrow_div">
                    <span>2</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Fill in your details</div>
            </li>
            <li>
                <div class="number_arrow_div">
                    <span>3</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Submit your investment</div>
            </li>
            <li>
                <div class="number_arrow_div">
                    <span>4</span>
                    <div class="arrow_div"></div>
                </div>
                <div class="text">Print, sign & send us your documents</div>
            </li>
        </ul>
        <div class="content_0 content 1">
            <div class="button_div">
                <button class="next_btn"></button>
            </div>
            <p>AD Wealth is not authorized to and does not provide financial advice. However, we believe in the merits of independent impartial investment advice for those who lack the knowledge and skill to make their own investment decisions unaided. Please only consult with licensed financial adviser. </p>
        </div>
        <div class="content_1 content 2">
            <div class="introduction">
                <p>Please select your unit trust(s) below and enter the amounts you would like to invest.<br/>You can choose to invest:</p>
                <ul>
                    <li>A minimum monthly amount of USD1,000</li>
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
                            <th>Lump sum Investment</th>
                            <th>Monthly Investment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Checkbox v-model="checkbox1"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal1 = true">Equity Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td">
                                    <div>USD&nbsp;<input><span></span></div>
                                    <div>USD&nbsp;<input><span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Checkbox v-model="checkbox2"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal2 = true">Balanced Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td">
                                    <div>USD&nbsp;<input><span></span></div>
                                    <div>USD&nbsp;<input><span></span></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><Checkbox v-model="checkbox3"></Checkbox></td>
                            <td><a href="javascript:void(0)" @click="modal3 = true">Stable Fund</a></td>
                            <td colspan="2">
                                <div class="slide_td">
                                    <div>USD&nbsp;<input><span></span></div>
                                    <div>USD&nbsp;<input><span></span></div>
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
                                    <div>USD&nbsp;<input><span></span></div>
                                    <div>USD&nbsp;<input><span></span></div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <p>Note: Please read the latest factsheets (minimum disclosure documents), which offer a detailed explanation of the nature of the unit trusts and their fee structures.</p>
            <div class="button_div">
                <button class="back_btn"></button>
                <button class="next_btn disabled" disabled></button>
            </div>
        </div>
        <div class="content_2 content 3-1">
            <p>Please fill in your details below:</p>
            <div class="radio_div">
                <div><input id="investor" name="radio1" type="radio"><label for="investor">I am an individual investor</label></div>
                <div><input id="entity" name="radio1" type="radio"><label for="entity">I am acting on behalf of a legal entity</label></div>
            </div>
            <h3>Investor Details</h3>
            <Row>
                <Col span="12" class="table_div">
                   <table>
                       <tbody>
                           <tr>
                               <td>Title</td>
                               <td>
                                   <select>
                                       <option>select1</option>
                                       <option>select2</option>
                                   </select>
                               </td>
                           </tr>
                           <tr>
                               <td>First Name</td>
                               <td><input></td>
                           </tr>
                           <tr>
                               <td>Surname</td>
                               <td><input></td>
                           </tr>
                           <tr>
                               <td>Identification/Passport Number</td>
                               <td><input></td>
                           </tr>
                           <tr>
                               <td>Date of birth</td>
                               <!-- <td><DatePicker size="small" type="date" placeholder="Select date" style="width: 200px"></DatePicker></td> -->
                               <td class="birth_td"><div><input> / <input> / <input></div></td>
                           </tr>
                       </tbody>
                   </table>
                </Col>
                <Col span="12" class="table_div">
                   <table>
                       <tbody>
                           <tr>
                               <td>Nationality</td>
                               <td>
                                   <select>
                                       <option>select1</option>
                                       <option>select2</option>
                                   </select>
                               </td>
                           </tr>
                           <tr>
                               <td>Email address</td>
                               <td><input></td>
                           </tr>
                           <tr>
                               <td>Mobile phone number</td>
                               <td><input></td>
                           </tr>
                           <tr>
                               <td>Residential address</td>
                               <td><textarea></textarea></td>
                           </tr>
                       </tbody>
                   </table>
                </Col>
            </Row>
            <p>Compulsory information</p>
            <div class="button_div">
                <button class="back_btn"></button>
                <button class="next_btn disabled" disabled></button>
            </div>
        </div>
        <div class="content_3 content 3-2">
            <h3>Tax information</h3>
            <div class="table_div">
                <table class="table_tax1">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <span>Dividend and Interest Withholding Tax</span>
                                <a class="info" title="Depending on where you are resident for tax purposes, you may be required to pay Dividend Withholding Tax (DWT) and/or Interest Withholding Tax (IWT).">&nbsp;</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>Are you a tax resident in South Africa?</label>
                            </td>
                            <td>
                                <span><input type="radio"><label>Yes</label><input type="radio"><label>No</label></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Country of residence for tax purposes</label><a title="You may qualify for a reduced rate if there is a Double Taxation Agreement (DTA) in place between South Africa and your country of residence. Distributions from a Real Estate Investment Trust (REIT) are exempt from South African income tax, but are subject to DWT at the rate applicable to the investor." >&nbsp;</a>
                            </td>
                            <td>
                            <select>
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
                            <option value="BONAIRE, SINT EUSTATIUS &amp; SABA">BONAIRE, SINT EUSTATIUS &amp; SABA</option>
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
                                <div class="notice">Regardless of whether you have a tax identification number or physically reside in South Africa, your tax residence is the country in which you are liable for tax (even if you are currently not paying any tax to that country).</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table_tax2">
                    <tbody>
                    <tr>
                        <td colspan="4">Please complete your Tax Identification Number (TIN), or its functional equivalent, below.  Please provide a reason if you are not able to provide a TIN. </td>
                    </tr>
                    <tr>
                        <td>Tax identification number</td>
                        <td>
                            <input type="text"><a title="Please enter a valid tax identification number, or indicate a reason for not providing a tax identification number.">&nbsp;</a>
                        </td>
                        <td>Reason</td>
                        <td>
                            <select>
                                <option value=""></option>
                                <option value="Not registered">I have never registered with my tax authority</option>
                                <option value="Not specified">I do not know this, but will take steps to submit this to Allan Gray</option>
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
                            <td>Do you have any additional tax information?</td>
                            <td><span><input type="radio"><label>Yes</label><input type="radio"><label>No</label></span></td>
                        </tr>
                        <tr>
                            <td colspan="2">If you have any tax information for countries in addition to the country indicated for DWT/IWT above, please specify the additional countries and your associated Tax Identification Number, or your country's equivalent, below.</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>
                                <select name="country">
                                    <option value=""></option>
                                    <option value="SOUTH AFRICA">SOUTH AFRICA</option>
                                    <option value="AFGHANISTAN" style="display: block;">AFGHANISTAN</option>
                                    <option value="ÅLAND ISLANDS">ÅLAND ISLANDS</option>
                                    <option value="ALBANIA">ALBANIA</option>
                                    <option value="ALGERIA">ALGERIA</option>
                                    <option value="AMERICAN SAMOA">AMERICAN SAMOA</option>
                                    <option value="ANDORRA">ANDORRA</option>
                                    <option value="ANGOLA">ANGOLA</option>
                                    <option value="ANGUILLA">ANGUILLA</option>
                                    <option value="ANTARCTICA">ANTARCTICA</option>
                                    <option value="ANTIGUA AND BARBUDA">ANTIGUA AND BARBUDA</option>
                                    <option value="ARGENTINA" style="display: none;">ARGENTINA</option>
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
                                    <option value="BONAIRE, SINT EUSTATIUS &amp; SABA">BONAIRE, SINT EUSTATIUS &amp; SABA</option>
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
                            <td><input type="text"><a class="error" title="Please enter a valid tax identification number, or indicate a reason for not providing a tax identification number">&nbsp;</a></td>
                        </tr>
                        <tr>
                            <td>Reason</td>
                            <td>
                                <select>
                                    <option value=""></option>
                                    <option value="Not registered">I have never registered with my tax authority</option>
                                    <option value="Not specified">I do not know this, but will take steps to submit this to Allan Gray</option>
                                    <option>Jurisdiction does not issue TINs</option>
                                    <option>Unable to obtain a TIN</option>                            
                                    <option>TIN disclosure not required</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="background:#efefef;"><input type="button" value="Add more tax information" style="padding:0px 10px;"></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="notice"><b>Important note</b><br/>The country/countries listed above will not have an impact on the DWT/IWT rates applied to your investment, but Allan Gray may be required to report the information to the South African Revenue Services (SARS) who may share it with foreign tax authorities to adhere to the Foreign Account Tax Compliance Act (FATCA) and the Common Reporting Standard (CRS).</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table_tax4">
                    <thead>
                        <tr>
                            <th colspan="2">U.S. status certification <a class="info" title="This is required in terms of the Financial Intelligence Centre Act, 38 of 2001 (FICA), which provides a legal framework for combatting money laundering.">&nbsp;</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Are you a "U.S. Person"?</td>
                            <td><span><input type="radio"><label>Yes</label><input type="radio"><label>No</label></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table_div">
                <h3>USA TAX LIABILITY DECLARATION</h3>
                <table class="table_tax4_child">
                    <tbody>
                        <tr>
                            <td>I am liable to declare my income and assets to the US IRS. </td>
                            <td><span><input type="radio"><label>Yes</label><input type="radio"><label>No</label></span></td>
                        </tr>
                        <tr>
                            <td colspan="2"><div class="notice">If Allan Gray identifies, through the information provided on this application form, that you fall into the definition of a U.S person, you may be required to submit further documents. For more information, please see www.allangray.co.za.</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Compulsory information</p>
            <div class="button_div">
                <button class="back_btn"></button>
                <button class="next_btn disabled" disabled></button>
            </div>
        </div>
        <div class="content_4 content 3-3">
            <div class="table_div">
                <h3>YOUR INVESTMENT DETAILS</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Where is the money coming from ?<a class="info" title="This is required in terms of the Financial Intelligence Centre Act, 38 of 2001 (FICA), which provides a legal framework for combatting money laundering.">&nbsp;</a></td>
                        </tr>
                        <tr>
                            <td><span><input type="radio"><label>Your salary or bonus</label><input type="radio"><label>An existing Allan Gray investment</label><input type="radio"><label>Inheritance</label><input type="radio"><label> Savings in a bank account</label><input type="radio"><label>Other</label></span></td>
                        </tr>
                        <tr>
                            <td>Specify<input type="text"></td>
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
                                <select>
                                    <option value=""></option>
                                    <option value="0">Cheque deposit</option>
                                    <option value="1">Electronic / Internet transfer</option>
                                    <option value="2">Electronic collection</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><div class="notice"><b>We need proof that you have made the deposit into our bank account </b><br/>Our bank details will be displayed on the confirmation screen. Please make the deposit once you have completed your details. We will finalise your investment after receiving your proof. </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>DISTRIBUTION DETAILS</h3>
            <div class="table_div">
                <table>
                    <tbody>
                    <tr>
                        <td><span><input type="radio"><label>Distributions to be reinvested </label><br/><input type="radio"><label>Distributions to be paid directly into bank account (We will only make payments into the registered investor's bank account and not into the bank account of a third party.)</label></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h3>FINANCIAL ADVISER DETAILS</h3>
            <div class="table_div">
                <table>
                    <tbody>
                    <tr>
                        <td>Do you have a financial adviser on this investment?<span><input type="radio"><label>Yes</label><input type="radio"><label>No</label></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p>Compulsory information</p>
            <div class="button_div">
                <button class="back_btn"></button>
                <button class="next_btn disabled" disabled></button>
            </div>
        </div>
        <div class="content_5 content 4-1">
            <div class="introduction">
                <p>Please do the following:</p>
                <ul>
                    <li>Check all your details below. To make changes, click the “Back” button at the bottom of this page until you get to the page where you first entered the information.</li>
                    <li>Read the “Investment Overview” and “Terms and Conditions” at the bottom of this page.</li>
                    <li>Click “Submit” when you are satisfied that all information is correct.</li>
                </ul>
            </div>
            <h3>FUNDS</h3>
            <div class="table_div">
                <table>
                    <thead>
                        <tr>
                            <th>Fund</th>
                            <th>Lump sum contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Allan Gray Equity Fund</td>
                            <td>USD 50000</td>
                        </tr>
                        <tr>
                            <td>Total investment amount</td>
                            <td>USD 50000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>INVESTOR DETAILS</h3>
            <div class="table_div">
                <table>
                    <tbody>
                        <tr>
                            <td>Title:</td>
                            <td>Mr</td>
                        </tr>
                        <tr>
                            <td>First name:</td>
                            <td>Andy</td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>Mr</td>
                        </tr>
                        <tr>
                            <td>First name:</td>
                            <td>Andy</td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>Mr</td>
                        </tr>
                        <tr>
                            <td>First name:</td>
                            <td>Andy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    <Modal  class="modal1" v-model="modal1"  title="Equity Fund">
        <p>Invest in listed shares for long-term capital growth and are comfortable with significant stock market movement. Accept the possibility of losing capital and have at least five years to invest, but preferably longer.</p>
    </Modal>
    <Modal class="modal2" v-model="modal2" title="Balanced Fund">
        <p>Investment for steady, long-term capital growth and are comfortable with taking on some risk of market fluctuation and potential capital loss. Ideally investing for at least three years.</p>
    </Modal>
    <Modal class="modal3" v-model="modal3" title="Stable Fund">
        <p>Capital preservation is the primary goal and are comfortable with lower potential return over time than you might earn in a unit trust that takes on more risk. Ideally investing for at least two years.</p>
    </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invest-now',
  data () {
    return {
      checkbox1:false,
      checkbox2:true,
      checkbox3:false,
      modal1:false,
      modal2:false,
      modal3:false
    }
  },
  mounted () {
    document.title = 'AD Wealth | Invest now'
  }
}
</script>
<style scoped>
.row_1{
    max-width:900px;
    margin:0 auto;
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
/* 内容块 */
.content{
    border-top:1px solid red;
}
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
.content_0 p{
    border-top: solid 1px #ccc;
    margin-top:30px;
    padding-top:5px;
    /* padding-left:20px; */
    /* padding-right:20px; */
    text-align:left;
}
.content_1{}
.content_1 .introduction,.content_5 .introduction{}
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
    height:38px;
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
.content_1 .slide_td:after{
    clear:both;
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
.table_div table td span label{
    margin-left:5px;
}
.table_tax1 td div.notice,.table_tax3 td div.notice,.content_4 .table_div td div.notice{
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
</style>