function GetRawHtmlAndDescriptionAndResult() {
    return GetRawHtml() + "©" + GetValueString("#Description") + "©" + GetValueString("#Result") + "©" + GetInputValueForSavingToDatabase();
  }
  
  function GetRawHtml() {
    UpdateFooterReport();
    SetValueAsDefaultForHTML();
    return document.documentElement.innerHTML;
  }
  
  function UpdateFooterReport() {
    var datetime = new Date();
  
    //update footer
    var patientFooter = document.getElementById("patient-code-footer");
  
    if (patientFooter != null) {
      patientFooter.innerHTML = $("#patientCode").attr("jsbarcode-value") + ' - ' + $("#INPD103").val() + ' - Ngày TH: ' + ("0" + datetime.getDate()).slice(-2) + "/" + ("0" + (datetime.getMonth() + 1)).slice(-2) + "/" + datetime.getFullYear() + ' - ' + $("#locationRoom").text();
    }
  }
  function UpdateDateTimeReport() {
    var element = document.getElementById("DateTimePrint");
    var datetime = new Date();
    if (element == null) return;
    if (element.innerText == '') {
      element.innerHTML = "Ngày " + ("0" + datetime.getDate()).slice(-2) + " tháng " + ("0" + (datetime.getMonth() + 1)).slice(-2) + " năm " + datetime.getFullYear();
    }
  }
  
  function UpdateDescriptionString(description, id, property) {
    for (let i = 1; ; i++) {
      var inputElementID = id + i;
      var element = document.getElementById(inputElementID);
      if (element != null) {
        if (description.includes(inputElementID + "/")) {
          if (property == "value") {
            description = description.replace(inputElementID + "/", element.value);
          } else {
            if (element.checked) {
              description = description.replace(inputElementID + "/", element.value);
            } else {
              description = description.replace(inputElementID + "/", "");
            }
          }
        }
      } else {
        while (description.includes(", , ")) {
          description = description.replace(", , ", ", ");
        }
        return description;
      }
    }
  }
  
  function SetValueAsDefaultForHTML() {
    $("input, textarea, select").each(function (index) {
      var input = $(this);
  
      if (input.is("select")) {
        input.children("option").each(function () {
          var option = $(this);
          if (option[0].selected) {
            option.attr("selected", "selected");
            // console.log(option);
          } else {
            option.removeAttr("selected");
          }
        });
      } else if (input[0].type == "checkbox" || input[0].type == "radio") {
        if (input[0].checked) {
          input.attr("checked", "true");
        } else {
          input.removeAttr("checked");
        }
      } else if (input.is("textarea")) {
        input.text(input.val());
      } else {
        input.attr("value", input.val());
      }
    });
    return document.documentElement.innerHTML;
  }
  
  function GetInputValueForSavingToDatabase() {
    var result = "";
    $("#Description input,#Description textarea,#Description select, #Result textarea").each(function () {
      var input = $(this);
      var key = input[0].id;
      if (input.is("select")) {
        input.children("option").each(function () {
          var option = $(this);
          if (option[0].selected && option.val().trim() != "") {
            result += key + "|";
            result += option.val();
            result += ";\n";
          }
        });
      }
      else if (input[0].type == "checkbox" || input[0].type == "radio") {
        result += key + "|";
        if (input[0].checked) {
          result += "true"
        } else {
          result += 'false';
        }
        result += ";\n";
      }
      else if (input.val().trim() != "") {
        result += key + "|";
        result += input.val().replace(/[&\/\\#$~;|<>{}]/g, '').trim();
        result += ";\n";
      }
    });
    // console.log(result);
    return result;
  }
  
  function GetValueString(elementID) {
    var result = "";
  
    var inputElementID = elementID + " input";
    var spanElementID = elementID + " span";
    var h5Element = elementID + " h5";
    var h6Element = elementID + " h6";
    var h4Element = elementID + " h4";
    var pElementID = elementID + " p";
    //20200914 TVN bỏ thẻ li khỏi danh sách lấy value
    // var liElementID = elementID + " li";
    var textareaElementID = elementID + " textarea";
  
    //20200915 TVN thêm script để đọc option tag
    var optionElement = elementID + " option:selected";
  
    $(inputElementID + ", " + spanElementID + ", " + h5Element + ", " + h6Element + ", " + h4Element + ", " + pElementID + ", " + textareaElementID + ", " + optionElement).each(function (index) {
      var input = $(this);
      // console.log("input", input[0].id)
      if (input[0].id == 'STim') {
        result += input.val() + '/' + $("#LN").val() + '=' + $("#STimLN").val() + "\n";
        return true;
      } else if (input[0].id == 'LN' || input[0].id == 'STimLN') {
        return true;
      }
      //20200904 TVN: fix issue can not get textarea in Description and Result
      if (input.is("textarea")) {
        result += input.text().trim() + "\n";
      } else if (input[0].tagName != "INPUT") {
        result += input.html().trim() + "\n";
      } else if (input[0].type == "checkbox") {
        if (input.hasClass("need-yes-no")) {
          if (input[0].checked) {
            result += input.val() + ": có. ";
            result += " \n";
          } else {
            result += input.val() + ": không. ";
            result += " \n";
          }
        } else {
          if (input[0].checked) {
            result += input.val();
            result += ". \n";
          }
        }
      } else if (input[0].type == "radio") {
        if (input[0].checked) {
          result += input.val();
          result += " \n";
        }
      } else if (input[0].type == "text" || input[0].type == "date" || input[0].type == "datetime-local") {
        if (input.val() != "") {
          result += input.attr("placeholder") + input.val();
          result += ". \n";
        }
        //fix issue can not get number in Description and Result
      } else if (input[0].type == "number") {
        // console.log(input.val());
        if (input.val() != "") {
          result += input.val();
          result += " ";
        }
      } else if (input.is("option")) {
        result += input.text() + ". ";
      }
    });
    // console.log(result);
    return result.replace(/<[^>]*>/g, '').replace("&lt;", "<");
  }
  
  function fillDataToTemplate(json) {
  
    autosize.destroy($('textarea'));
    var myJson = JSON.parse(json);
    // console.log(myJson["IsSurgery"]);
  
    for (var key in myJson) {
      var element = $("#" + key);
      if (key == 'patientCode') {
        element.attr("jsbarcode-value", myJson[key]);
      }
      if (element.is("input")) {
        var type = element.attr("type");
        if (type == 'checkbox') {
          // console.log(type)
          element.prop('checked', myJson[key]);
        } else {
          element.val(myJson[key]);
        }
      } else {
        element.text(myJson[key]);
      }
    }
  
    if (!myJson["IsSurgery"]) {
      $("#procedure-container").show();
      JsBarcode(".patient-barcode").init();
  
    } else {
      $("#surgery-container").show();
  
    }
    autosize($('textarea'));
    UpdateDateTimeReport();
  }
  function fillToDieuTri(json) {
  
    var yLenhClass = $(".y-lenhs");
    for (let index = 0; index < yLenhClass.length - 1; index++) {
      yLenhClass[index].remove();
    }
    var myJson = JSON.parse(json);
  
    for (var key in myJson) {
      if (typeof myJson[key] === 'object' && key == 'YLenhs') {
        var ylenhs = myJson[key];
        var numYLenh = ylenhs.length;
        var divYLenID = "#y-lenhs";
        var divYlenhToFill = $(divYLenID);
        for (var i = 0; i < numYLenh; i++) {
  
          var yLenhElement = divYlenhToFill;
  
          fillDaTaToElement(yLenhElement, ylenhs[i]);
          if (numYLenh - i > 1) {
            divYlenhToFill = yLenhElement.clone().appendTo("main");
            divYlenhToFill.id = divYLenID + i;
          }
  
        }
      } else {
        var element = $("#" + key);
        if (key == 'patientCode') {
          element.attr("jsbarcode-value", myJson[key]);
        } else if (element.is("input")) {
          element.val(myJson[key]);
        } else {
          element.text(myJson[key]);
        }
      }
    }
    JsBarcode(".patient-barcode").init();
  
  }
  function fillDaTaToElement(parentsElement, json) {
  
    for (var key in json) {
      var element = parentsElement.find("#" + key);
  
      if (element.is("input")) {
        element.val(json[key]);
      } else {
        if (json[key] == '') {
          element.hide();
        } else {
          var i = 1;
          var content = json[key];
          if (content != null) {
            while (i < 21) {
              var num = 9311 + i;
  
              content = content.replace(i + ". ", '<span style="font-size: 1.5em;"> &#' + num + '; </span>');
              i++;
            }
            // while (i < 36) {
            //   var num = 12860 + i;
  
            //   content = content.replace(i + ". ", '<span style="font-size: 1em;"> &#' + num + '; </span>');
            //   i++;
            // }
          }
  
  
          element.html(content);
          element.show();
        }
      }
    }
    // if (!$('#XamLanCanThiep').html())
    //   $('#xam-lan').hide();
    // else $('#xam-lan').show();
  
    // if (!$('#DichTruyen').html())
    //   $('#dich-truyen').hide();
    // else $('#dich-truyen').show();
  
    // if (!$('#ThuocUong').html())
    //   $('#thuoc').hide();
    // else $('#thuoc').show();
  
    // if (!$('#TheoDoi').html())
    //   $('#theo-doi').hide();
    // else $('#theo-doi').show();
  
    // if (!$('#DichVu').html())
    //   $('#dich-vu').hide();
    // else $('#dich-vu').show();
  
    // if (!$('#XetNghiem').html())
    //   $('#xet-nghiem').hide();
    // else $('#xet-nghiem').show();
  
    // if (!$('#HinhAnh').html())
    //   $('#hinh-anh').hide();
    // else $('#hinh-anh').show();
  
    var x = document.getElementById("ChanDoanPhanBiet");
    if (x.style.display == "none")
      $('#chan-doan-phan-biet').hide();
    else $('#chan-doan-phan-biet').show();
  
  }
  function fillMedicalItemsToTemplate(json) {
    var myJson = JSON.parse(json);
    autosize.destroy($('textarea'));
  
    for (var key in myJson) {
      var element = $("#" + key);
      element.val(myJson[key]);
    }
    autosize($('textarea'));
    $("#medical-items").show();
  }
  
  function hideMedicalItems() {
    $("#medical-items").hide();
  }
  
  function generateBarcode(barcode) {
    if (barcode != "") {
      $("#patientCode").css("display", "block");
      JsBarcode("#patientCode", barcode, {
        width: 2,
        height: 40,
        fontSize: 18,
        displayValue: true
      });
    }
  }
  
  function applyEnterKeyToGoNextElement() {
    $("#Description input,#Description textarea,#Description select, #Result textarea").each(function () {
      var input = $(this);
      if (input.is("select")) {
        input.change(function (e) {
          var tabIndex = this.tabIndex;
          setTimeout(function () {
            e.preventDefault();
            var next = $('[tabindex="' + (tabIndex + 1) + '"]');
            if (next.length)
              next.focus()
            else
              $('[tabindex="13"]').focus();
          }, 200);
        });
      } else {
        input.keyup(function (e) {
          e.preventDefault();
          if (e.keyCode == 13) {
  
            var element = $('[tabindex="' + (this.tabIndex) + '"]');
            if (element.is("textarea")) {
              return;
            }
            var next = $('[tabindex="' + (this.tabIndex + 1) + '"]');
            if (next.length)
              next.focus()
            else
              $('[tabindex="13"]').focus();
          }
        });
      }
  
    });
  }
  
  function applyEnterKeyToGoNextElement1() {
    $("#Description input,#Description textarea,#Description select, #Result textarea").each(function () {
      var input = $(this);
      if (input.is("select")) {
        input.change(function (e) {
          var tabIndex = this.tabIndex;
          setTimeout(function () {
            e.preventDefault();
            var next = $('[tabindex="' + (tabIndex + 1) + '"]');
            if (next.length)
              next.focus()
            else
              $('[tabindex="13"]').focus();
          }, 200);
        });
      } else {
        input.keyup(function (e) {
          e.preventDefault();
          if (e.keyCode == 13) {
            var element = $('[tabindex="' + (this.tabIndex) + '"]');
            if (element.is("textarea")) {
              return;
            }
            var next = $('[tabindex="' + (this.tabIndex + 1) + '"]');
            if (input.is("#V_DOPPLER_Mitral_Mr")) {
              var Mr = $("#V_DOPPLER_Mitral_Mr");
              for (var i = 0; i < Mr.length; i++) {
                if (!Mr[i].checked) {
                  next = $('[tabindex="' + (this.tabIndex + 6) + '"]');
                  break;
                }
                else {
                  next = $('[tabindex="' + (this.tabIndex + 2) + '"]');
                }
              }
            }
            if (input.is("#V_DOPPLER_Aortic_Ar")) {
              var Ar = $("#V_DOPPLER_Aortic_Ar");
              for (var i = 0; i < Ar.length; i++) {
                if (!Ar[i].checked) {
                  next = $('[tabindex="' + (this.tabIndex + 7) + '"]');
                  break;
                }
                else {
                  next = $('[tabindex="' + (this.tabIndex + 2) + '"]');
                }
              }
            }
            if (input.is("#V_DOPPLER_Pulmonary_Pr")) {
              var Pr = $("#V_DOPPLER_Pulmonary_Pr");
              for (var i = 0; i < Pr.length; i++) {
                if (!Pr[i].checked) {
                  next = $('[tabindex="' + (this.tabIndex + 8) + '"]');
                  break;
                }
                else {
                  next = $('[tabindex="' + (this.tabIndex + 2) + '"]');
                }
              }
            }
            if (next.length)
              next.focus()
            else
              $('[tabindex="13"]').focus();
          }
        });
      }
  
    });
  }
  
  function runScriptForSieuAmTimThai() {
  
    autosize($('textarea'));
    JsBarcode(".patient-barcode").init();
    applyEnterKeyToGoNextElement();
    if ($("#thongliennhilotienphat").val() == "Không") {
      $("#thongliennhilotienphat1").hide();
    }
    $("#thongliennhilotienphat").change(function (e) {
      e.preventDefault();
      if (this.value == "Có") {
        $("#thongliennhilotienphat1").show().focus();
      } else {
        $("#thongliennhilotienphat1").hide();
      }
  
    });
    if ($("#thonglienthat").val() == "Không") {
      $("#thonglienthat1").hide();
    }
    $("#thonglienthat").change(function (e) {
      e.preventDefault();
      if (this.value == "Có") {
        $("#thonglienthat1").show().focus();
      } else {
        $("#thonglienthat1").hide();
      }
  
    });
    if ($("#trandichngoaimang").val() == "Không") {
      $("#trandichngoaimang1").hide();
    }
    $("#trandichngoaimang").change(function (e) {
      e.preventDefault();
      if (this.value == "Có") {
        $("#trandichngoaimang1").show().focus();
      } else {
        $("#trandichngoaimang1").hide();
      }
  
    });
    calculationSTimLN();
    calculationDTCT();
    calculationGDMax();
  }
  function calculationGDMax() {
    $("#2laVMax").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var value = $("#2laVMax").val();
  
        $("#2laGDMax").val((4 * Math.pow(value * 0.01, 2)).toFixed(2));
      });
    })
    $("#3laVMax").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var value = $("#3laVMax").val();
  
        $("#3laGDMax").val((4 * Math.pow(value * 0.01, 2)).toFixed(2));
      });
    })
    $("#DMCVMax").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var value = $("#DMCVMax").val();
  
        $("#DMCGDMax").val((4 * Math.pow(value * 0.01, 2)).toFixed(2));
      });
    })
    $("#DMPVMax").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var value = $("#DMPVMax").val();
  
        $("#DMPGDMax").val((4 * Math.pow(value * 0.01, 2)).toFixed(2));
      });
    })
  }
  function runScriptForECHOCARDIOGRAPHY() {
    autosize($('textarea'));
    JsBarcode(".patient-barcode").init();
    applyEnterKeyToGoNextElement1();
    $("#Description .input-group-text,#Description span,#Description label").css("font-weight", "500");
    calculationDTCT();
    calculationEA();
    calculationEE();
    showHide(".show-hide-mr", "#V_DOPPLER_Mitral_Mr", "#RADD106");
    showHide(".show-hide-ar", "#V_DOPPLER_Aortic_Ar", "#RADD108");
    showHide(".show-hide-pr", "#V_DOPPLER_Pulmonary_Pr", "#RADD112");
  }
  
  // Ẩn hiện các trường theo tick radio
  function showHide(showhide, show, hide) {
  
    for (var i = 0; i < $(hide).length; i++) {
      if ($(hide)[i].type == 'radio' && $(hide)[i].checked) {
        $(showhide).hide();
        // alert($(hide)[i])
      }
    }
  
    $(show).change(function (e) {
      e.preventDefault();
      $(showhide).show();
      // alert("hiện")
    });
  
    $(hide).change(function (e) {
      e.preventDefault();
      $(showhide).hide();
      // alert("ẩn")
    });
  }
  // Tính toán E/A
  function calculationEA() {
    $("#DOPPLER_E, #DOPPLER_A").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var E = $("#DOPPLER_E");
        var A = $("#DOPPLER_A");
  
        if (e.keyCode == 13 && (this.id == 'DOPPLER_E')) {
          A.focus();
        } else if (e.keyCode == 13 && (this.id == 'DOPPLER_A')) {
          $("#DOPPLER_Mitral_DT").focus();
        }
        if (E.val() != '' && A.val() != '') {
          $("#DOPPLER_EA").val((E.val() / A.val()).toFixed(2));
        } else {
          $("#DOPPLER_EA").val('');
        }
      });
    });
  }
  // Tính toán E/E'
  function calculationEE() {
    $("#DOPPLER_E_vach, #DOPPLER_E_ben, #DOPPLER_E").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var E1 = $("#DOPPLER_E_vach");
        var E2 = $("#DOPPLER_E_ben");
        var E = $("#DOPPLER_E");
        if (e.keyCode == 13 && (this.id == 'DOPPLER_E_vach')) {
          E2.focus();
        } else if (e.keyCode == 13 && (this.id == 'DOPPLER_E_ben')) {
          $("#DOPPLER_Mitral_Sm").focus();
        }
        if (E1.val() != '' && E2.val() != '' && E.val() != '') {
          $("#DOPPLER_Average_EE").val((2 * E.val() / (parseInt(E1.val()) + parseInt(E2.val()))).toFixed(2));
        } else {
          $("#DOPPLER_Average_EE").val('');
        }
      });
    });
  }
  
  function calculationDTCT() {
    $("#INPD106, #INPD107").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var heightElement = $("#INPD106");
        var weightElement = $("#INPD107")
        var height = heightElement.val();
        var weight = weightElement.val();
  
        if (e.keyCode == 13 && (this.tabIndex == heightElement[0].tabIndex)) {
          weightElement.focus();
        } else if (e.keyCode == 13 && (this.tabIndex == weightElement[0].tabIndex)) {
          $("#INPD111").focus();
        }
  
        $("#INPD108").val(Math.sqrt(height * weight / 3600).toFixed(2));
      });
    })
  }
  function calculationSTimLN() {
    $("#STim, #LN").each(function () {
      $(this).keyup(function (e) {
        e.preventDefault();
        var Stim = $("#STim");
        var LN = $("#LN");
  
        if (e.keyCode == 13 && (this.id == 'STim')) {
          LN.focus();
        } else if (e.keyCode == 13 && (this.id == 'LN')) {
          $("#tructimthai").focus();
        }
        if (Stim.val() != '' && LN.val() != '') {
          $("#STimLN").val((Stim.val() / LN.val()).toFixed(2));
        } else {
          $("#STimLN").val('');
        }
      });
    })
  }
  function setBase64Image(json) {
    var obj = JSON.parse(json);
    var i = 0;
    $("img").sort(function (a, b) {
      return parseInt(a.id.replace(/^\D+/g, '')) - parseInt(b.id.replace(/^\D+/g, ''));
    }).each(function (index, element) {
      if (index > 0) {
        var element = $(this);
          var DTT = $("#DTT");
        if (i < obj.length) {
          if(this.id == 'DTT'){
            element.attr("src", obj[i++])
            element.attr("style", "height: 600px; width: 900px; margin-bottom: 5px;")
          } else {
            element.attr("src", obj[i++])
            element.attr("style", "height: 200px; width: 300px; margin-bottom: 5px;")
          }
          // element.attr("src", obj[i++])
          // element.attr("style", "height: 200px; width: 300px; margin-bottom: 5px;")
        } else {
          element.removeAttr("src"); element.removeAttr("style");
        }
      }
    })
  }
  function fillDataToTemplateSieuAm(json) {
    autosize.destroy($('textarea'));
    var myJson = JSON.parse(json);
  
    for (var key in myJson) {
      var element = $("#" + key);
      if (key == 'patientCode') {
        element.attr("jsbarcode-value", myJson[key]);
      }
      if (element.is("input")) {
        var type = element.attr("type");
        if (type == 'checkbox') {
          console.log(type)
          element.prop('checked', myJson[key]);
        } else {
          element.val(myJson[key]);
        }
      } else {
        element.text(myJson[key]);
      }
    }
    JsBarcode(".patient-barcode").init();
    autosize($('textarea'));
    UpdateDateTimeReport();
  }