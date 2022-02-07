/*
 * @Descripttion:
 * @version:
 * @Author: LiuXuFei
 * @Date: 2021-11-11 13:53:52
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2022-01-25 11:46:02
 */
// import {UPLOAD_API} from "@/api/uploadApi"
export default {
  常用组件: [{
      expand: {
        span: 24,
        defaultValue: "",
        placeholder: "请输入内容",
        style: {},
      },
      label: "单行文本框",
      component: "customInput",
      type: "INPUT",
    },
    {
      expand: {
        span: 24,
        defaultValue: "",
        placeholder: "请输入内容",
        minRow: 4,
        maxRow: 4,
        style: {},
      },
      label: "多行文本框",
      component: "customTextarea",
      type: "TEXTAREA"
    },
    {
      expand: {
        span: 24,
        defaultValue: "",
        multiple: false,
        style: {},
        selectValue: "",
        selectOptions: [{
            value: "1",
            id: "",
          },
          {
            value: "2",
            id: "",
          },
        ],
      },
      label: "下拉框",
      component: "customSelect",
      type: "SELECT",
    },
    {
      expand: {
        span: 24,
        defaultValue: "",
        style: {},
        radioValue: "",
        radioOptions: [{
            value: "1",
          },
          {
            value: "2",
          },
        ],
        required: false,
      },
      label: "单选框",
      component: "customRadio",
      type: "RADIO",
    },
    {
      expand: {
        span: 24,
        defaultValue: [],
        style: {},
        checkValue: [],
        checkOptions: [{
            value: "1",
            id: "",
          },
          {
            value: "2",
            id: "",
          },
        ],
        required: false,
      },
      label: "多选框",
      component: "customCheck",
      type: "CHECKBOX",
    },
    {
      expand: {
        span: 24,
        defaultValue: false,
        style: {},
        switchValue: "",
        required: false,
        activeColor: null,
        inactiveColor: null,
      },
      label: "开关",
      component: "customSwitch",
      type: "SWITCH",
    },
    {
      expand: {
        span: 24,
        defaultValue: "",
        style: {},
      },
      label: "计数器",
      type: "NUMBER_INPUT",
      component: "customNumber",
      color: "#000000",
    },
    // {
    //   expand: {
    //     span: 24,
    //     defaultValue: "",
    //     color: "#000000",
    //     style: {},
    //     required: false,
    //     action: `${UPLOAD_API}${Date.parse(new Date())}`,
    //   },
    //   label: "签名",
    //   type: "SIGN_PAD",
    //   component: "customSign",
    // },
    {
      expand: {
        span: 24,
        defaultValue: "",
        placeholder: "选择时间",
        style: {},
        required: false,
        timePickerValue: new Date(),
        format: "HH:mm:ss",
      },
      label: "时间选择器",
      component: "customTimePicker",
      type: "TIME",
    },
    {
      expand: {
        span: 24,
        defaultValue: [new Date(2020, 1, 1, 9, 0), new Date(2020, 12, 31, 18, 0)],
        placeholder: "选择时间范围",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        style: {},
        isRange: true,
        timePickerValue: [new Date(2020, 1, 1, 9, 0), new Date(2020, 12, 31, 18, 0)],
        format: "HH:mm:ss",
      },
      label: "时间范围",
      component: "customTimePicker",
      type: "TIME_RANGE",
    },
    {
      expand: {
        span: 24,
        defaultValue: "",
        placeholder: "选择日期",
        style: {},
        datePickerValue: new Date(),
        format: "yyyy-MM-dd",
        type: "date",
        dateTypeOptions: [{
            label: "日(date)",
            value: "date",
          },
          {
            label: "周(week)",
            value: "week",
          },
          {
            label: "月(month)",
            value: "month",
          },
          {
            label: "年(year)",
            value: "year",
          },
          {
            label: "日期时间(datetime)",
            value: "datetime",
          },
        ],
      },
      label: "日期选择器",
      component: "customDatePicker",
      type: "DATE",
    },
    {
      expand: {
        span: 24,
        defaultValue: [],
        placeholder: "选择日期范围",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
        style: {},
        daterange: true,
        isRange: true,
        datePickerValue: [new Date(), new Date()],
        format: "yyyy-MM-dd",
        type: "daterange",
        dateRangeTypeOptions: [{
            label: "日期范围(daterange)",
            value: "daterange",
          },
          {
            label: "月范围(monthrange)",
            value: "monthrange",
          },
          {
            label: "日期时间范围(datetimerange)",
            value: "datetimerange",
          },
        ],
      },
      label: "日期范围",
      component: "customDatePicker",
      type: "DATE_RANGE",
    },
    // {
    //   expand: {
    //     span: 24,
    //     defaultValue: [],
    //     style: {},
    //     uploadUrl: `${UPLOAD_API}${Date.parse(new Date())}`,
    //     fileList: [],
    //     notify: "",
    //     fileSize: null,
    //     sizeUnit: "MB",
    //     showTip: false,
    //     buttonText: "点击上传",
    //     limit: null,
    //     multiple: false,
    //     accept: "",

    //   },
    //   label: "上传",
    //   component: "customUpload",
    //   type: "UPLOAD",
    // },
  ],
  表格组件: [{
    expand: {
      span: 24,
      defaultValue: "",
      style: {},
    },
    label: "表格栅格",
    component: "customFrom",
    children: [],
    type: "TABLE_FORM",
  }, ],
  // 定制组件: [{
  //     expand: {
  //       span: 24,
  //       defaultValue: "",
  //       placeholder: "参与人不可修改",
  //       style: {},
  //       disabled: true,
  //     },
  //     label: "参与人",
  //     component: "customInput",
  //     type: "PARTICIPANTS",
  //   },
  //   {
  //     expand: {
  //       span: 24,
  //       defaultValue: "",
  //       placeholder: "记录人不可修改",
  //       style: {},
  //       disabled: true,
  //     },
  //     label: "记录人",
  //     component: "customInput",
  //     type: "RECORDER",
  //   },
  //   {
  //     expand: {
  //       span: 24,
  //       defaultValue: [],
  //       style: {},
  //       uploadUrl: `${UPLOAD_API}${Date.parse(new Date())}`,
  //       fileList: [],
  //       notify: "",
  //       fileSize: null,
  //       sizeUnit: "MB",
  //       showTip: true,
  //       buttonText: "点击上传",
  //       limit: null,
  //       multiple: false,
  //       accept: ".doc, .docx",

  //     },
  //     label: '附件',
  //     component: "customAttachment",
  //     type: 'ATTACHMENT'
  //   },
  //   {
  //     expand: {
  //       span: 24,
  //       defaultValue: [],
  //       placeholder: "",
  //       required: false,
  //     },
  //     label: "选择人员",
  //     component: "customSelectPeople",
  //     type: "SELECT_PEOPLE",
  //   },
  // ],
}
