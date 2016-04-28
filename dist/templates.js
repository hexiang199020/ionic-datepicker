(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-datepicker-modal.html',
    '<ion-modal-view class=ionic_datepicker_modal><ion-header-bar class=header><h1 class=title>{{selctedDateEpoch | date : mainObj.dateFormat}}</h1></ion-header-bar><ion-content class=ionic_datepicker_modal_content><div><div class="row text-center"><div class="col col-10 left_arrow"><button class="button-clear font_22px" ng-click=prevMonth() ng-class="{\'pointer_events_none\':((firstDayEpoch - 86400000) < fromDate)}"><i class="icon ion-chevron-left"></i></button></div><div class="col col-80 text-center"><div class="row select_section"><div class="col-50 padding_right_5px"><label class="item item-input item-select month_select"><span class=input-label>&nbsp;</span><select ng-options="month for month in monthsList" ng-model=currentMonth ng-change=monthChanged(currentMonth)></select></label></div><div class="col-50 padding_left_5px"><label class="item item-input item-select year_select"><span class=input-label>&nbsp;</span><select ng-options="year for year in yearsList" ng-model=currentYear ng-change=yearChanged(currentYear)></select></label></div></div></div><div class="col col-10 right_arrow"><button class="button-clear font_22px" ng-click=nextMonth() ng-class="{\'pointer_events_none\':((lastDayEpoch + 86400000)> toDate)}"><i class="icon ion-chevron-right"></i></button></div></div><div class=calendar_grid><div class="row padding-top weeks_row"><div class="col text-center font_bold" ng-repeat="weekName in weeksList track by $index" ng-bind=weekName></div></div><div><div class="row text-center padding_top_zero" ng-repeat="row in rows track by $index"><div class="col padding_zero date_col" ng-repeat="col in cols track by $index" ng-class="{\'selected_date\': (dayList[row + $index].epoch === selctedDateEpoch), \'today\' : (dayList[row + $index].epoch == today), \'pointer_events_none\':((disabledDates.indexOf(dayList[row + $index].epoch) >= 0) || (dayList[row + $index].disabled))}" ng-click="dateSelected(dayList[row + $index])"><div class=date_cell>{{dayList[row + col].date}}</div></div></div></div></div></div></ion-content><ion-footer-bar class=footer><div class="row padding_zero"><button class="button button-clear button-block button_set" ng-if=!mainObj.closeOnSelect ng-click=setIonicDatePickerDate()>{{mainObj.setLabel}}</button> <button class="button button-clear button-block button_today" ng-if=mainObj.showTodayButton ng-click=setIonicDatePickerTodayDate()>{{mainObj.todayLabel}}</button> <button class="button button-clear button-block button_close" ng-click=closeIonicDatePickerModal()>{{mainObj.closeLabel}}</button></div></ion-footer-bar></ion-modal-view>');
}]);
})();

(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('ionic-datepicker-popup.html',
    '<div class=selected_date_full>{{selctedDateEpoch | date : mainObj.dateFormat}}</div><div class=date_selection><div class="row show_nav"><div class="col-10 prev_btn_section"><button class=button-clear ng-click=prevMonth() ng-class="{\'pointer_events_none\':((firstDayEpoch - 86400000) < fromDate)}"><i class="icon ion-chevron-left"></i></button></div><div class="col-80 text-center"><div class="row select_section"><div class="col-50 padding_right_5px"><label class="item item-input item-select month_select"><span class=input-label>&nbsp;</span><select ng-model=currentMonth ng-change=monthChanged(currentMonth)><option ng-repeat="month in monthsList" ng-selected="month==currentMonthSelected" value={{month}}>{{month}}</option></select></label></div><div class="col-50 padding_left_5px"><label class="item item-input item-select year_select"><span class=input-label>&nbsp;</span><select ng-model=currentYear ng-change=yearChanged(currentYear)><option ng-repeat="year in yearsList" ng-selected="year==currentYearSelected" value={{year}}>{{year}}</option></select></label></div></div></div><div class="col-10 next_btn_section"><button class=button-clear ng-click=nextMonth() ng-class="{\'pointer_events_none\':((lastDayEpoch + 86400000)> toDate)}"><i class="icon ion-chevron-right"></i></button></div></div><div class=calendar_grid><div class="row weeks_row"><div class="col text-center font_bold" ng-repeat="weekName in weeksList track by $index" ng-bind=weekName></div></div><div><div class="row text-center padding_top_zero" ng-repeat="row in rows track by $index"><div class="col no_padding date_col" ng-repeat="col in cols track by $index" ng-class="{\'selected_date\': (dayList[row + $index].epoch === selctedDateEpoch), \'today\' : (dayList[row + $index].epoch == today), \'pointer_events_none\':((disabledDates.indexOf(dayList[row + $index].epoch) >= 0) || dayList[row + $index].disabled)}" ng-click="dateSelected(dayList[row + $index])"><div class=date_cell>{{dayList[row + col].date}}</div></div></div></div></div></div>');
}]);
})();
