export const templateHtml = `
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=11;IE=10;IE=9;IE=8;IE=7;IE=edge">
    <title>SIÊU ÂM TIM</title>
  
    <link rel="stylesheet" type="text/css" href="http://192.168.0.25/bootstrapcss/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://192.168.0.25/bootstrapcss/style-new.css">
  
    <script type="text/javascript" src="http://192.168.0.25/bootstrapjs/jquery.min.js"></script>
    <script type="text/javascript" src="http://192.168.0.25/bootstrapjs/bootstrap.min.js"></script>
    <script type="text/javascript" src="http://192.168.0.25/bootstrapjs/template.script.js"></script>
    <script type="text/javascript" src="http://192.168.0.25/bootstrapjs/JsBarcode.all.min.js"></script>
    <script src="http://192.168.0.25/bootstrapjs/autosize.min.js"></script>
  
  </head>
  
  <body>
    <div class="container">
      <header>
        <div class="row" style="justify-content: space-between">
          <div class="col-8">
            <div class="row col">
              <div class="col-2">
                <img class="no-break" src="http://192.168.0.25/Images/logoVienTim.png" height="80px" alt="">
              </div>
              <div class="col">
                <h7>Phòng Khám Bản Việt Thảo Điền<br>64A Quốc Hương, P.Thảo Điền, TP.Hồ Chí Minh<br>ĐT: (028)
                  35357373 - 0911595414<br>Email: info@banvietclinic.vn</h7>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="khoa-soHs">
              <div class="row no-break" style="flex-wrap: unset">
                <div class="input-group">
                  <div class="input-group-prepend ">
                    <span class="input-group-text prepend-1" id="inputGroupPrepend">Số HS</span>
                  </div>
                  <input tabindex="2" type="text" class="form-control" id="INPD101" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="">
                </div>
              </div>
              <div class="row" style="justify-content: flex-end;">
                <svg id="patientCode" class="patient-barcode" jsbarcode-format="auto" jsbarcode-value="PK0025014001461" jsbarcode-textmargin="0" jsbarcode-fontoptions="bold" jsbarcode-height="35" width="310px" height="75px" x="0px" y="0px" viewbox="0 0 310 75" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="310" height="75" style="fill:#ffffff;"></rect><g transform="translate(10, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="35"></rect><rect x="6" y="0" width="2" height="35"></rect><rect x="12" y="0" width="2" height="35"></rect><rect x="22" y="0" width="6" height="35"></rect><rect x="30" y="0" width="6" height="35"></rect><rect x="38" y="0" width="4" height="35"></rect><rect x="44" y="0" width="2" height="35"></rect><rect x="48" y="0" width="4" height="35"></rect><rect x="58" y="0" width="6" height="35"></rect><rect x="66" y="0" width="2" height="35"></rect><rect x="72" y="0" width="6" height="35"></rect><rect x="80" y="0" width="4" height="35"></rect><rect x="88" y="0" width="2" height="35"></rect><rect x="92" y="0" width="6" height="35"></rect><rect x="100" y="0" width="8" height="35"></rect><rect x="110" y="0" width="4" height="35"></rect><rect x="118" y="0" width="4" height="35"></rect><rect x="126" y="0" width="4" height="35"></rect><rect x="132" y="0" width="4" height="35"></rect><rect x="142" y="0" width="2" height="35"></rect><rect x="146" y="0" width="6" height="35"></rect><rect x="154" y="0" width="2" height="35"></rect><rect x="160" y="0" width="4" height="35"></rect><rect x="168" y="0" width="6" height="35"></rect><rect x="176" y="0" width="4" height="35"></rect><rect x="182" y="0" width="4" height="35"></rect><rect x="190" y="0" width="4" height="35"></rect><rect x="198" y="0" width="2" height="35"></rect><rect x="204" y="0" width="4" height="35"></rect><rect x="212" y="0" width="6" height="35"></rect><rect x="220" y="0" width="4" height="35"></rect><rect x="228" y="0" width="2" height="35"></rect><rect x="238" y="0" width="2" height="35"></rect><rect x="242" y="0" width="4" height="35"></rect><rect x="254" y="0" width="2" height="35"></rect><rect x="260" y="0" width="2" height="35"></rect><rect x="264" y="0" width="4" height="35"></rect><rect x="274" y="0" width="6" height="35"></rect><rect x="282" y="0" width="2" height="35"></rect><rect x="286" y="0" width="4" height="35"></rect><text style="font:bold 20px monospace" text-anchor="middle" x="145" y="55">PK0025014001461</text></g></svg>
              </div>
  
            </div>
          </div>
        </div>
        <div class="row title">KẾT QUẢ SIÊU ÂM DOPPLER TIM</div>
        <div class="row">
          <div class="col-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Họ tên</span>
              </div>
              <input tabindex="4" type="text" class="form-control" id="INPD103" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="TRẦN KIM HÀ">
            </div>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Tuổi</span>
              </div>
              <input tabindex="5" type="text" class="form-control" id="INPD104" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="38">
            </div>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Giới tính</span>
              </div>
              <input tabindex="6" type="text" class="form-control" id="INPD105" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="Nữ">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Địa chỉ</span>
              </div>
              <input tabindex="10" type="text" class="form-control" id="INPD109" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="Kg, Phường Vĩnh Hiệp, Rạch Giá, Kiên Giang">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Chiều cao</span>
              </div>
              <input tabindex="7" type="number" class="form-control" id="INPD106" placeholder="" aria-describedby="inputGroupPrepend" required="" value="0" min="0" max="999">
              <!-- <div class="input-group-append">
                <span class="input-group-text">cm</span>
              </div> -->
            </div>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Cân nặng</span>
              </div>
              <input tabindex="8" type="number" class="form-control" id="INPD107" placeholder="" aria-describedby="inputGroupPrepend" required="" value="0" min="0" maxlength="999">
              <!-- <span class="input-group-text">kg</span> -->
            </div>
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">BSA</span>
              </div>
              <input tabindex="9" type="text" class="form-control" id="INPD108" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="">
              <span class="input-group-text">m²</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Điện thoại</span>
              </div>
              <input tabindex="5" type="text" class="form-control" id="PhoneNumber" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" readonly="">
            </div>
          </div>
          <div class="col-6">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Email</span>
              </div>
              <input tabindex="10" type="text" class="form-control" id="" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Chẩn đoán</span>
              </div>
  
              <textarea tabindex="12" rows="1" class="form-control custom-textarea" id="INPD111" aria-label="With textarea" value="Chưa xác định" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;">Chưa xác định</textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">Bác sĩ chỉ định</span>
              </div>
              <input tabindex="11" type="text" class="form-control" id="INPD110" placeholder="" readonly="" aria-describedby="inputGroupPrepend" required="" value="">
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="Description">
          <hr>
          <div id="TM">
            <h5>TM:</h5>
            <div class="row">
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">IVSd:</span>
                  </div>
                  <input tabindex="13" type="number" class="form-control" id="TM_Vlt_Ttr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LVd:</span>
                  </div>
                  <input tabindex="19" type="number" class="form-control" id="TM_Pxcr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LVPWd:</span>
                  </div>
                  <input tabindex="15" type="number" class="form-control" id="TM_Tstt_Ttr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">IVSs:</span>
                  </div>
                  <input tabindex="15" type="number" class="form-control" id="TM_Tstt_Ttr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LVs:</span>
                  </div>
                  <input tabindex="17" type="number" class="form-control" id="TM_Dktt_Tt" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;"> LVPWs:</span>
                  </div>
                  <input tabindex="18" type="number" class="form-control" id="TM_Tstt_Tt" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">TAPSE:</span>
                  </div>
                  <input tabindex="22" type="number" class="form-control" id="TM_TAPSE" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">SF:</span>
                  </div>
                  <input tabindex="14" type="number" class="form-control" id="TM_Dktt_Ttr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">%</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">EF:</span>
                  </div>
                  <input tabindex="20" type="number" class="form-control" id="TM_Pxtm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">%</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LVMI:</span>
                  </div>
                  <input tabindex="21" type="number" class="form-control" id="TM_LVMI" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">g/m²</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">RVd:</span>
                  </div>
                  <input tabindex="20" type="number" class="form-control" id="TM_Pxtm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Ao:</span>
                  </div>
                  <input tabindex="23" type="number" class="form-control" id="TM_Ao" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LA:</span>
                  </div>
                  <input tabindex="24" type="number" class="form-control" id="TM_La" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
              <div class="col-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">AVO:</span>
                  </div>
                  <input tabindex="24" type="number" class="form-control" id="TM_La" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div id="2D">
            <div class="row">
              <div class="col-2">
                <h5>2D</h5>
              </div>
              <div class="col-5">
                <div class="form-inline">
                  <div class="form-group">
                    <label for="inputPassword6" style="font-weight: 500;">Situs:</label>
                    <select class="custom-select mr-sm-2" tabindex="25" id="L2D_Situs">
                      <option selected="selected"></option>
                      <option value="29000">Solitus</option>
                      <option value="29001">Inversus</option>
                      <option value="29002">Ambiguous</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <div class="form-inline">
                  <div class="form-group">
                    <label for="inputPassword6" style="font-weight: 500;">Apex:</label>
                    <select class="custom-select mr-sm-2" tabindex="26" id="L2D_MomTim">
                      <option selected="selected"></option>
                      <option value="29100">Levocardia</option>
                      <option value="29101">Dextrocardia</option>
                      <option value="29102">Mesocardia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <h6>Veins:</h6>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">IVC:</span>
                      </div>
                      <input tabindex="27" type="text" class="form-control" id="TwoD_Ivc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="-->RA" min="0" maxlength="999">
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">RSVC:</span>
                      </div>
                      <input tabindex="28" type="text" class="form-control" id="TwoD_Svc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="-->RA" min="0" maxlength="999">
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">BCV:</span>
                      </div>
                      <input tabindex="28" type="text" class="form-control" id="TwoD_Svc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LSVC:</span>
                      </div>
                      <input tabindex="28" type="text" class="form-control" id="TwoD_Svc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">The PV:</span>
                      </div>
                      <input tabindex="32" type="text" class="form-control" id="TwoD_Pv" placeholder="" aria-describedby="inputGroupPrepend" required="" value="-->LA" min="0" maxlength="999">
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">TVI:</span>
                      </div>
                      <input tabindex="29" type="text" class="form-control" id="TwoD_Tvi" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    </div>
                  </div>
                  <div class="col-4">
                    <span style="font-weight: 500;">Azygos:</span>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="TwoD_Azygos" placeholder="TwoD_Azygos" tabindex="33" value="true" name="customRadioInline2" class="custom-control-input">
                      <label class="custom-control-label" for="TwoD_Azygos" style="font-weight: 500;">(+)</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="RADD104" placeholder="TwoD_Azygos" tabindex="34" value="false" name="customRadioInline2" class="custom-control-input" checked="checked">
                      <label class="custom-control-label" for="RADD104" style="font-weight: 500;">(-)</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <h6>Atrium:</h6>
              </div>
              <div class="col">
                <div class="row">
                  <textarea tabindex="59" rows="1" class="form-control custom-textarea" id="TwoD_Others" aria-label="With textarea" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-5">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">LA area:</span>
                      </div>
                      <input tabindex="35" type="number" class="form-control" id="TwoD_Atria" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">cm²</span>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">RA area:</span>
                      </div>
                      <input tabindex="36" type="number" class="form-control" id="TwoD_Atria" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">cm²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-5">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LAVI:</span>
                      </div>
                      <input tabindex="37" type="number" class="form-control" id="TwoD_Lavi" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">ml/m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <h6>Valves:</h6>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">AML:</span>
                      </div>
                      <input tabindex="38" type="number" class="form-control" id="TwoD_Cd" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">M.Ann:</span>
                      </div>
                      <input tabindex="39" type="number" class="form-control" id="TwoD_Ma" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">MVA:</span>
                      </div>
                      <input tabindex="40" type="number" class="form-control" id="TwoD_MitralArea" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">cm²</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">T.Ann:</span>
                      </div>
                      <input tabindex="41" type="number" class="form-control" id="TwoD_Ta" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col">
                <div class="row">
                  <textarea tabindex="59" rows="1" class="form-control custom-textarea" id="TwoD_Others" aria-label="With textarea" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <h6>Ventricles:</h6>
              </div>
              <!-- <div class="col-1 form-inline">
                <h6>RV:</h6>
              </div> -->
              <div class="col-10">
                <div class="row">
                  <div class="col">
                    <textarea tabindex="59" rows="1" class="form-control custom-textarea" id="TwoD_Others" aria-label="With textarea" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <!-- <div class="col-1">
                <h6>LV:</h6>
              </div> -->
              <div class="col-9">
                <div class="form-inline">
                  <div class="form-group">
                    <label for="inputPassword6" style="font-weight: 500;">FE(simpson):</label>
                    <select class="custom-select mr-sm-2" tabindex="42" id="L2D_simpson">
                      <option selected="selected"></option>
                      <option value="29200">Biplane</option>
                      <option value="29201">4 chambers</option>
                    </select>
                    <input tabindex="43" type="number" class="form-control" id="TwoD_FE" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <!-- <div class="col-1 form-inline">
                <h6>RV:</h6>
              </div> -->
              <div class="col">
                <div class="row">
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">RV-Base:</span>
                      </div>
                      <input tabindex="44" type="number" class="form-control" id="TwoD_Bot" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">RV-Mid:</span>
                      </div>
                      <input tabindex="45" type="number" class="form-control" id="TwoD_Mid" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <!-- <div class="col-1 form-inline">
                <h6>RV:</h6>
              </div> -->
              <div class="col">
                <div class="row">
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">RV-Length:</span>
                      </div>
                      <input tabindex="46" type="number" class="form-control" id="TwoD_Length" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">FAC:</span>
                      </div>
                      <input tabindex="47" type="number" class="form-control" id="TwoD_FAC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
                <h6>Aorta:</h6>
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">AVA:</span>
                      </div>
                      <input tabindex="53" type="number" class="form-control" id="TwoD_D2" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">cm²</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">Ann:</span>
                      </div>
                      <input tabindex="48" type="number" class="form-control" id="TwoD_Asc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">D2:</span>
                      </div>
                      <input tabindex="53" type="number" class="form-control" id="TwoD_D2" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">Asc:</span>
                      </div>
                      <input tabindex="48" type="number" class="form-control" id="TwoD_Asc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">Tr:</span>
                      </div>
                      <input tabindex="49" type="number" class="form-control" id="TwoD_Cr" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">Isthmus:</span>
                      </div>
                      <input tabindex="50" type="number" class="form-control" id="TwoD_Is" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Desc:</span>
                      </div>
                      <input tabindex="51" type="number" class="form-control" id="TwoD_Desc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Thoracic:</span>
                      </div>
                      <input tabindex="51" type="number" class="form-control" id="TwoD_Desc" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text " id="inputGroupPrepend" style="font-weight: 500;">Abdo:</span>
                      </div>
                      <input tabindex="52" type="number" class="form-control" id="TwoD_Abd" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <h6>Pulmonary arteries:</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Ann:</span>
                      </div>
                      <input tabindex="54" type="number" class="form-control" id="TwoD_Ann" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">PT:</span>
                      </div>
                      <input tabindex="55" type="number" class="form-control" id="TwoD_Tap" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">RPA:</span>
                      </div>
                      <input tabindex="56" type="number" class="form-control" id="TwoD_Rpa" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">LPA:</span>
                      </div>
                      <input tabindex="57" type="number" class="form-control" id="TwoD_Lpa" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                      <span class="input-group-text" style="font-weight: 500;">mm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <h6>Pericardium:</h6>
              </div>
              <div class="col">
                <input tabindex="58" type="text" class="form-control" id="TwoD_Pericarde" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <h6>Misc:</h6>
              </div>
              <div class="col">
                <textarea tabindex="59" rows="1" class="form-control custom-textarea" id="TwoD_Others" aria-label="With textarea" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea>
              </div>
            </div>
          </div>
          <div id="Doppler1">
            <div id="dong2la no-break" class="no-break">
              <div class="row">
                <div class="col">
                  <h5>DOPPLER:</h5>
                  <h6 style="font-weight: 800;">Mitral Flow:</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id=" inputGroupPrepend" style="font-weight: 500;">Vel.Max:</span>
                    </div>
                    <input tabindex="60" type="number" class="form-control" id="DOPPLER_Mitral_VelMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">m/s</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id=" inputGroupPrepend" style="font-weight: 500;">Max.TMG:</span>
                    </div>
                    <input tabindex="61" type="number" class="form-control" id="DOPPLER_Mitral_GdMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id=" inputGroupPrepend" style="font-weight: 500;">MeanTMG:</span>
                    </div>
                    <input tabindex="62" type="number" class="form-control" id="DOPPLER_Mitral_Moy" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">E:</span>
                    </div>
                    <input tabindex="63" type="number" class="form-control" id="DOPPLER_E" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm/s</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">A:</span>
                    </div>
                    <input tabindex="64" type="number" class="form-control" id="DOPPLER_A" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm/s</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">E/A:</span>
                    </div>
                    <input tabindex="" type="number" class="form-control" id="DOPPLER_EA" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">DT:</span>
                    </div>
                    <input tabindex="65" type="number" class="form-control" id="DOPPLER_Mitral_DT" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">m/s</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">E' sept.</span>
                    </div>
                    <input tabindex="66" type="number" class="form-control" id="DOPPLER_E_vach" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm/s</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">E' lat.</span>
                    </div>
                    <input tabindex="67" type="number" class="form-control" id="DOPPLER_E_ben" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm/s</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">Average E/E':</span>
                    </div>
                    <input tabindex="" type="number" class="form-control" id="DOPPLER_Average_EE" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
                <div class="col-3">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">MS:</span>
                    </div>
                    <input tabindex="" type="text" class="form-control" id="" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">MVA:</span>
                    </div>
                    <input tabindex="68" type="number" class="form-control" id="DOPPLER_Mitral_Sm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm²</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">MR:</span>
                    </div>
                    <input tabindex="68" type="text" class="form-control" id="DOPPLER_Mitral_Sm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Type:</span>
                    </div>
                    <input tabindex="68" type="text" class="form-control" id="DOPPLER_Mitral_Sm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3 show-hide-mr">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">IVRT:</span>
                    </div>
                    <input tabindex="72" type="number" class="form-control" id="DOPPLER_Mitral_VC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">ms</span>
                  </div>
                </div>
                <div class="col-3 show-hide-mr">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">VC:</span>
                    </div>
                    <input tabindex="72" type="number" class="form-control" id="DOPPLER_Mitral_VC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mm</span>
                  </div>
                </div>
                <div class="col-3 show-hide-mr">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">EROA:</span>
                    </div>
                    <input tabindex="73" type="number" class="form-control" id="DOPPLER_Mitral_EROA" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm²</span>
                  </div>
                </div>
                <div class="col-3 show-hide-mr">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id=" inputGroupPrepend" style="font-weight: 500;">VR:</span>
                    </div>
                    <input tabindex="74" type="number" class="form-control" id="DOPPLER_Mitral_VR" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">ml/b</span>
                  </div>
                </div>
              </div>
            </div>
            <div class=" no-break">
              <div class="row">
                <div class="col">
                  <h6 style="font-weight: 800;">Aortic Flow:</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Vel.Max:</span>
                    </div>
                    <input tabindex="75" type="number" class="form-control" id="DOPPLER_Aortic_VelMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">m/s</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Max.TAoG:</span>
                    </div>
                    <input tabindex="76" type="number" class="form-control" id="DOPPLER_Aortic_GdMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">MeanTAoG:</span>
                    </div>
                    <input tabindex="77" type="number" class="form-control" id="DOPPLER_Aortic_Moy" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">AS:</span>
                    </div>
                    <input tabindex="78" type="text" class="form-control" id="DOPPLER_Aortic_As" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">AVA:</span>
                    </div>
                    <input tabindex="79" type="number" class="form-control" id="DOPPLER_Aortic_SAo" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm²</span>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">AR:</span>
                    </div>
                    <input tabindex="68" type="text" class="form-control" id="DOPPLER_Mitral_Sm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
                <div class="col-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend" id="inputGroupPrepend" style="font-weight: 500;">Type:</span>
                    </div>
                    <input tabindex="68" type="text" class="form-control" id="DOPPLER_Mitral_Sm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-6 show-hide-ar">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">PHT:</span>
                    </div>
                    <input tabindex="83" type="number" class="form-control" id="DOPPLER_Aortic_PHT" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">ms</span>
                  </div>
                </div>
                <div class="col-6 show-hide-ar">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">VC:</span>
                    </div>
                    <input tabindex="84" type="number" class="form-control" id="DOPPLER_Aortic_VC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">mm</span>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-6 show-hide-ar">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">EDTD:</span>
                    </div>
                    <input tabindex="85" type="number" class="form-control" id="DOPPLER_Aortic_Edtd" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                    <span class="input-group-text" style="font-weight: 500;">cm/s</span>
                  </div>
                </div>
                <div class="col-6 show-hide-ar">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Extention:</span>
                    </div>
                    <input tabindex="86" type="text" class="form-control" id="DOPPLER_Aortic_ExtSpat" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Doppler2" class="no-break">
            <div class="row">
              <div class="col">
                <h6 style="font-weight: 800;">Tricuspid Flow:</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-1" id="inputGroupPrepend" style="font-weight: 500;">TR:</span>
                  </div>
                  <input tabindex="88" type="text" class="form-control" id="DOPPLER_Tricuspid_VC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-1" id="inputGroupPrepend" style="font-weight: 500;">VC:</span>
                  </div>
                  <input tabindex="88" type="number" class="form-control" id="DOPPLER_Tricuspid_VC" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mm</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Vel.Max:</span>
                  </div>
                  <input tabindex="89" type="number" class="form-control" id="DOPPLER_Tricuspid_VelMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">m/s</span>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-1" id="inputGroupPrepend" style="font-weight: 500;">PAPs:</span>
                  </div>
                  <input tabindex="90" type="number" class="form-control" id="DOPPLER_Tricuspid_sRVP" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend" style="font-weight: 500;">Max.TTrG:</span>
                  </div>
                  <input tabindex="91" type="number" class="form-control" id="DOPPLER_Tricuspid_GdMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend" style="font-weight: 500;">MeanTTrG:</span>
                  </div>
                  <input tabindex="92" type="number" class="form-control" id="DOPPLER_Tricuspid_Moy" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h6 style="font-weight: 800;">Pulmonary Flow:</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Vel.Max:</span>
                  </div>
                  <input tabindex="93" type="number" class="form-control" id="DOPPLER_Pulmonary_VelMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">m/s</span>
                </div>
              </div>
              <div class="col-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">Max.TPG:</span>
                  </div>
                  <input tabindex="94" type="number" class="form-control" id="DOPPLER_Pulmonary_GdMax" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
              <div class="col-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">MeanTPG:</span>
                  </div>
                  <input tabindex="95" type="number" class="form-control" id="DOPPLER_Pulmonary_Moy" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <span style="font-weight: 500;">PR:</span>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="V_DOPPLER_Pulmonary_Pr" placeholder="V_DOPPLER_Pulmonary_Pr" tabindex="96" value="true" name="customRadioInline6" class="custom-control-input">
                  <label class="custom-control-label" for="V_DOPPLER_Pulmonary_Pr" style="font-weight: 500;">(+)</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="RADD112" tabindex="97" placeholder="V_DOPPLER_Pulmonary_Pr" value="false" name="customRadioInline6" class="custom-control-input" checked="checked">
                  <label class="custom-control-label" for="RADD112" style="font-weight: 500;">(-)</label>
                </div>
              </div>
              <div class="col-6 show-hide-pr" style="display: none;">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" for="LDOPPLER_Pulmonary_Grade" style="font-weight: 500;">Grade:</span>
                  </div>
                  <select class="custom-select" tabindex="98" id="LDOPPLER_Pulmonary_Grade">
                    <option selected="selected"></option>
                    <option value="1">Mild</option>
                    <option value="2">Moderate</option>
                    <option value="3">Severe</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4 show-hide-pr" style="display: none;">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">PHT:</span>
                  </div>
                  <input tabindex="99" type="number" class="form-control" id="DOPPLER_Pulmonary_PHT" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">m/s</span>
                </div>
              </div>
              <div class="col-4 show-hide-pr" style="display: none;">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-6" id="inputGroupPrepend" style="font-weight: 500;">PR jet/Pulm.Ann:</span>
                  </div>
                  <input tabindex="100" type="number" class="form-control" id="DOPPLER_Pulmonary_Ann" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                </div>
              </div>
              <div class="col-4 show-hide-pr" style="display: none;">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">PR index:</span>
                  </div>
                  <input tabindex="101" type="number" class="form-control" id="DOPPLER_Pulmonary_PRindex" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 show-hide-pr" style="display: none;">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text prepend-4" id="inputGroupPrepend" style="font-weight: 500;">PAPm:</span>
                  </div>
                  <input tabindex="102" type="number" class="form-control" id="DOPPLER_Pulmonary_Papm" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
              <div class="col-6 show-hide-pr" style="display: none;">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend" style="font-weight: 500;">PAPd:</span>
                  </div>
                  <input tabindex="103" type="number" class="form-control" id="DOPPLER_Pulmonary_Papd" placeholder="" aria-describedby="inputGroupPrepend" required="" value="" min="0" maxlength="999">
                  <span class="input-group-text" style="font-weight: 500;">mmHg</span>
                </div>
              </div>
            </div>
            <div class="row no-break">
              <h6 style="font-weight: 800;">Misc:</h6>
              <div class="col">
                <div class="input-group">
                  <textarea tabindex="104" class="form-control custom-textarea" id="DOPPLER_Pulmonary_Orthers" rows="1" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 30px;"></textarea>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
        <div id="Result">
          <div class="row">
            <div class="col-4">
              <h5>CONCLUSION</h5>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <textarea tabindex="105" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 72px;" class="form-control" id="Conclusion" aria-label="With textarea"></textarea>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="row no-break" style=" align-items: flex-start;">
          <div class="col" style="display: flex;
      flex-direction: column;
      align-items: center;">
            <img id="image01" alt="" src="http://192.168.0.25/Images/220905/PK0025014001461-220905135705-851135f5-b7e6-48f4-ad7b-8ae32cd1683d.jpg" style="height: 200px; width: 300px; margin-bottom: 5px;">
            <img id="image04" alt="" src="http://192.168.0.25/Images/220905/PK0025014001461-220905135705-f1d97535-7eb0-48e1-a253-102592d6510c.jpg" style="height: 200px; width: 300px; margin-bottom: 5px;">
            <img id="image07" alt="" style="" src="">
            <img id="image10" alt="" style="" src="">
            <img id="image13" alt="" style="" src="">
            <!-- <img id="image16" alt="" />
            <img id="image19" alt="" />
            <img id="image22" alt="" />
            <img id="image25" alt="" />
            <img id="image28" alt="" /> -->
          </div>
          <div class="col" style="display: flex;
      flex-direction: column;
      align-items: center;">
            <img id="image02" alt="" src="http://192.168.0.25/Images/220905/PK0025014001461-220905135705-237f3f34-cefe-4196-8052-d880afb09f4e.jpg" style="height: 200px; width: 300px; margin-bottom: 5px;">
            <img id="image05" alt="" src="http://192.168.0.25/Images/220905/PK0025014001461-220905135705-38cf05f5-2967-4ab6-bdb3-60e2ac4f519a.jpg" style="height: 200px; width: 300px; margin-bottom: 5px;">
            <img id="image08" alt="" style="" src="">
            <img id="image11" alt="" style="" src="">
            <img id="image14" alt="" style="" src="">
            <!-- <img id="image17" alt="" />
            <img id="image20" alt="" />
            <img id="image23" alt="" />
            <img id="image26" alt="" />
            <img id="image29" alt="" /> -->
          </div>
          <div class="col" style="display: flex;
      flex-direction: column;
      align-items: center;">
            <img id="image03" alt="" src="http://192.168.0.25/Images/220905/PK0025014001461-220905135705-b776d807-115a-4320-82f6-ecee28b856cc.jpg" style="height: 200px; width: 300px; margin-bottom: 5px;">
            <img id="image06" alt="" style="" src="">
            <img id="image09" alt="" style="" src="">
            <img id="image12" alt="" style="" src="">
            <img id="image15" alt="" style="" src="">
            <!-- <img id="image18" alt="" />
            <img id="image21" alt="" />
            <img id="image24" alt="" />
            <img id="image27" alt="" />
            <img id="image30" alt="" /> -->
          </div>
        </div>
        <div class="row no-break" style=" align-items: flex-start;">
          <div class="col-8" style="display: flex; flex-direction: column;
          align-items: center;">
          </div>
          <div class="col-4" style="display: flex; flex-direction: column;
          align-items: center;">
            <div class="row" contenteditable="true" id="DateTimePrint" style="justify-content: center" value="Ngày 5 tháng 9 năm 2022">Ngày 5 tháng 9 năm 2022</div>
            <div class="row" style="font-size: 18px; font-weight: 700; justify-content: center">Bác Sĩ Siêu Âm</div>
            <!-- <div class="row" style="font-style: italic; justify-content: center">(kí tên, ghi rõ họ tên)</div> -->
            <div class="row" style="height: 120px"></div>
            <div class="row" id="doctorName" style="justify-content: center">BS. Châu Thị Tố Quyên</div>
          </div>
        </div>
      </footer>
      <div class="footer-on-every-page">
        <div id="locationRoom" class="hide" value="Phòng Tiêm Khớp">Phòng Tiêm Khớp</div>
        <div id="patient-code-footer">PK0025014001461 - TRẦN KIM HÀ - Ngày TH: 05/09/2022 - Phòng Tiêm Khớp</div>
      </div>
    </div>
  
  <script>
    runScriptForECHOCARDIOGRAPHY();

    window.addEventListener('message', function (e) {
      GetRawHtmlAndDescriptionAndResult()
      window.parent.postMessage("excuteSave", '*');
  });

  </script>
  
  </body>


`;
