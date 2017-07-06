import { Component, Inject, Input, Output, ElementRef } from '@angular/core';

import * as $ from 'jquery';

export class KendoBaseDirective {
  $element: any;
  widget: any;

  static get parameters() {
    return [[ElementRef]];
  }

  constructor(elementRef: ElementRef, private widgetName: string) {
    this.$element = $(elementRef.nativeElement);

    if (!widgetName) {
      console.error('widgetName is required for KendoComponent');
    }
  }

  init(options: any) {
    this.widget = this.$element[this.widgetName](options).data(this.widgetName);
  }

  apply(options: any) {
    if (options) {
      for (let key in options) {
        if (this.widget.hasOwnProperty(key) && typeof this.widget[key] === 'function') {
          this.widget[key](options[key]);
        }
      }
    }
  }

  destroy() {
    this.widget.destroy();
  }
};

// export var KendoDropDownList = createCommonKendoComponent('[data-role=dropdownlist]', 'kendoDropDownList');
// export var KendoDatePicker = createCommonKendoComponent('[data-role=datepicker]', 'kendoDatePicker');
// export var KendoAutoComplete = createCommonKendoComponent('[data-role=autocomplete]', 'kendoAutoComplete');
// export var KendoButton = createCommonKendoComponent('[data-role=button]', 'kendoButton');
// export var KendoColorPalette = createCommonKendoComponent('[data-role=colorpalette]', 'kendoColorPalette');
// export var KendoColorPicker = createCommonKendoComponent('[data-role=colorpicker]', 'kendoColorPicker');
// export var KendoDateTimePicker = createCommonKendoComponent('[data-role=datetimepicker]', 'kendoDateTimePicker');
// export var KendoEditor = createCommonKendoComponent('[data-role=editor]', 'kendoEditor');
// export var KendoMaskedTextBox = createCommonKendoComponent('[data-role=maskedtextbox]', 'kendoMaskedTextBox');
// export var KendoMultiSelect = createCommonKendoComponent('[data-role=multiselect]', 'kendoMultiSelect');
// export var KendoNumericTextBox = createCommonKendoComponent('[data-role=numerictextbox]', 'kendoNumericTextBox');
// export var KendoSlider = createCommonKendoComponent('[data-role=slider]', 'kendoSlider');
// export var KendoTimePicker = createCommonKendoComponent('[data-role=timepicker]', 'kendoTimePicker');
// export var KendoUpload = createCommonKendoComponent('[data-role=upload]', 'kendoUpload');
// export var KendoMobileSwitch = createCommonKendoComponent('[data-role=mobileswitch]', 'kendoMobileSwitch');
// export var KendoMobileButtonGroup = createCommonKendoComponent('[data-role=mobilebuttongroup]', 'kendoMobileButtonGroup');
// export var KendoMenu = createCommonKendoComponent('[data-role=menu]', 'kendoMenu');
// export var KendoPanelBar = createCommonKendoComponent('[data-role=panelbar]', 'kendoPanelBar');
// export var KendoTabStrip = createCommonKendoComponent('[data-role=tabstrip]', 'kendoTabStrip');
// export var KendoToolBar = createCommonKendoComponent('[data-role=toolbar]', 'kendoToolBar');
// export var KendoTreeView = createCommonKendoComponent('[data-role=treeview]', 'kendoTreeView');
// export var KendoCalendar = createCommonKendoComponent('[data-role=calendar]', 'kendoCalendar');
// export var KendoGantt = createCommonKendoComponent('[data-role=gantt]', 'kendoGantt');
// export var KendoScheduler = createCommonKendoComponent('[data-role=scheduler]', 'kendoScheduler');
// export var KendoGrid = createCommonKendoComponent('[data-role=grid]', 'kendoGrid');
// export var KendoListView = createCommonKendoComponent('[data-role=listview]', 'kendoListView');
// export var KendoPager = createCommonKendoComponent('[data-role=pager]', 'kendoPager');
// export var KendoPivotGrid = createCommonKendoComponent('[data-role=pivotgrid]', 'kendoPivotGrid');
// export var KendoPivotConfigurator = createCommonKendoComponent('[data-role=pivotconfigurator]', 'kendoPivotConfigurator');
// export var KendoTreeList = createCommonKendoComponent('[data-role=treelist]', 'kendoTreeList');
// export var KendoNotification = createCommonKendoComponent('[data-role=notification]', 'kendoNotification');
// export var KendoResponsivePanel = createCommonKendoComponent('[data-role=responsivepanel]', 'kendoResponsivePanel');
// export var KendoSplitter = createCommonKendoComponent('[data-role=splitter]', 'kendoSplitter');
// export var KendoToolTip = createCommonKendoComponent('[data-role=tooltip]', 'kendoToolTip');
// export var KendoWindow = createCommonKendoComponent('[data-role=window]', 'kendoWindow');
// export var KendoDraggable = createCommonKendoComponent('[data-role=draggable]', 'kendoDraggable');
// export var KendoDropTarget = createCommonKendoComponent('[data-role=droptarget]', 'kendoDropTarget');
// export var KendoProgressBar = createCommonKendoComponent('[data-role=progressbar]', 'kendoProgressBar');
// export var KendoSortable = createCommonKendoComponent('[data-role=sortable]', 'kendoSortable');
// export var KendoChart = createCommonKendoComponent('[data-role=chart]', 'kendoChart');
// export var KendoBarCode = createCommonKendoComponent('[data-role=barcode]', 'kendoBarCode');
// export var KendoQRCode = createCommonKendoComponent('[data-role=qrcode]', 'kendoQRCode');
// export var KendoLinearGuage = createCommonKendoComponent('[data-role=linearguage]', 'kendoLinearGuage');
// export var KendoRadialGuage = createCommonKendoComponent('[data-role=radialguage]', 'kendoRadialGuage');
// export var KendoDiagram = createCommonKendoComponent('[data-role=diagram]', 'kendoDiagram');
// export var KendoMap = createCommonKendoComponent('[data-role=map]', 'kendoMap');
// export var KendoFlatColorPicker = createCommonKendoComponent('[data-role=flatcolorpicker]', 'kendoFlatColorPicker');
