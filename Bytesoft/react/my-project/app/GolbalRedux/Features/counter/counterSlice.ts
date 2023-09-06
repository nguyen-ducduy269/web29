"use client";
////// json server => redux
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  hotline: string;
  home: string;
  details: string;
  area: string;
  project: string;
  new: string;
  recruitment: string;
  contact: string;
  indexBannerTitle: string;
  indexBannerDescription: string;
  seeMoreBtn: string;
  newsHeaderTitle: string;
  newsHeaderDescription: string;
  contactHeaderTitle: string;
  contactHeaderDescription: string;
  aboutUsTitle: string;
  aboutContent: string;
  aboutH1: string;
  xemThemBtn: string;
  actTitle: string;
  designTitle: string;
  designText: string;
  actBonusBtn: string;
  projectH4: string;
  projectH1: string;
  all: string;
  commerce: string;
  education: string;
  hospital: string;
  resident: string;
  offical: string;
  reconstruction: string;
  discriptionTitle: string;
  disCommerce: string;
  disEducation: string;
  disHospital: string;
  disResident: string;
  disOffical: string;
  disReconstruction: string;
  popUpTitle: string;
  nameProject: string;
  disProject1: string;
  investor: string;
  disProject2: string;
  category: string;
  disProject3: string;
  location: string;
  disProject4: string;
  typeOfConstruction: string;
  disProject5: string;
  levelOfConstruction: string;
  disProject6: string;
  executionTime: string;
  time: string;
  projectBonus: string;
  recruitmentContent: string;
  recruitmentText: string;
  recruitmentBtn: string;
  recruitmentBonus: string;
  lastestNewsTitle: string;
  mainContentText: string;
  mainView: string;
  lastBtn: string;
  lastBonus: string;
  disscriptionText: string;
  footerMainText: string;
  footerNote: string;
  serviceTitle: string;
  privacyPolicy: string;
  termsAndConditions: string;
  copyRightPolicy: string;
  codeOfConduct: string;
  chemicalEngineeringProject: string;
  miningEngineeringConstruction: string;
  engineeringWeldingEngineering: string;
  weldingEngineering: string;
  partnersCustomers: string;
  moduleTitle: string;
  moduleNewText: string;
  newsTitle: string;
  newHeading: string;
  switch: string;
  page1: number;
  page2: number;
  page3: number;
  finalPage: number;
  final: string;
  footerFinal: string;
  denote: string;
  unpacked: string;
  yourSelf: string;
  bodyMeet: string;
  smilling: string;
  moduleNews: string;
  locationText: string;
  callNumber: string;
  contactMail: string;
  help: string;
}

const initialState: CounterState = {
  hotline: "HOTLINE:1900 2863",
  home: "TRANG CHỦ",
  details: "GIỚI THIỆU",
  area: "LĨNH VỰC",
  project: "DỰ ÁN",
  new: "TIN TỨC",
  recruitment: "TUYỂN DỤNG",
  contact: "LIÊN HỆ",
  indexBannerTitle: "FROM CONCEPT TO CREATION.",
  indexBannerDescription:
    "It is a long established fact that a reader will be distracted by the readable content.",
  seeMoreBtn: "XEM THÊM",

  ////// index main
  //// about us
  aboutUsTitle: "VỀ CHÚNG TÔI",
  aboutContent:
    "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices oisier as. Sending do brought windng compass in. Paid day till shed only fact age its end.",
  aboutH1: "ABOUT US",
  xemThemBtn: "Xem thêm",

  //// activity
  actTitle: "LĨNH VỰC HOẠT ĐỘNG",
  designTitle: "THIẾT KẾ KIẾN TRÚC",
  designText:
    "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot.",
  actBonusBtn: "MARKET",

  //// project
  projectH4: "DỰ ÁN MỚI NHẤT",
  projectH1: "DỰ ÁN NỔI BẬT",
  all: "TÁT CẢ",
  commerce: "THƯƠNG MẠI",
  education: "GIÁO DỤC",
  hospital: "BỆNH VIỆN",
  resident: "THƯỜNG TRÚ",
  offical: "VĂN PHÒNG",
  reconstruction: "TÁI THIẾT",
  discriptionTitle: "TÒA NHÀ THÀNH PHỐ",
  disCommerce: "Thương mại",
  disEducation: "Giáo dục",
  disHospital: "Bệnh viện",
  disResident: "Thường trú",
  disOffical: "Văn phòng",
  disReconstruction: "Tái thiết",
  popUpTitle: "DỰ ÁN N04B - NGOẠI GIAO ĐOÀN",
  nameProject: "Tên dự án",
  disProject1:
    ": Tổ hợp chung cư cao tầng N04B - Khu đoàn Ngoại giao tại Hà Nội",
  investor: "Chủ đầu tư",
  disProject2: ": Công ty Cổ phần Đầu tư Xây dựng Bất động sản Lanmak",
  category: "Hạng mục",
  disProject3: ": Phần kết cấu thân nhà/ Phần hoàn thiện kiến trúc",
  location: "Địa điểm",
  disProject4: ": Khu đoàn Ngoại giao, Xuân Tảo, Bắc Từ Liêm, Hà Nội",
  typeOfConstruction: "Loại công trình",
  disProject5: ": Dân dụng, căn hộ chung cư",
  levelOfConstruction: "Cấp công trình",
  disProject6: " Cấp 1",
  executionTime: "Thời gian thực hiện",
  time: "2013-2015",
  projectBonus: "PROJECTS",

  ///// recruitment
  recruitmentContent: "TUYỂN DỤNG",
  recruitmentText:
    "Resources exquisite set arranging moonlight sem him household had. Months had too ham cousin remove far spirit. She procuring the why performed continual improving.",
  recruitmentBtn: "NỘP ĐƠN",
  recruitmentBonus: "RECRUITMENT",

  ///// lastest news
  lastestNewsTitle: "TIN MỚI NHẤT",
  mainContentText: "5.december.2020",
  mainView: "328",
  disscriptionText: "Lorem ipsum dolor sit amet aenean nisi sociis ipsum...",

  ///// last
  lastBtn: "XEM TIẾP",
  lastBonus: "LASTEST NEWS",

  //// index footer
  footerMainText:
    "ACEFIC5 là Nhà thầu chính thi công tại các dự án lớn tại Hà Nội, Đà Nẵng và nhiều tỉnh thành thành phố trên cả nước. Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái Bình Dương luôn đáp ứng được các yêu cầu khắt khe của các Chủ đầu tư, luôn đem đến cho khách hàng và xã hội các sản phẩm với chất lượng tốt nhất, tiến độ nhanh nhất mà vẫn đảm bảo tính an toàn và hiệu quả đầu tư trên mỗi công trình.....",
  footerNote: "Copyright 2019 Acefic5. All Rights Reserved",
  serviceTitle: "DỊCH VỤ",
  privacyPolicy: "Privacy Policy",
  termsAndConditions: "Terms and Conditions",
  copyRightPolicy: "Copyright Policy",
  codeOfConduct: "Code of Conduct",
  chemicalEngineeringProject: "Chemical Engineering Projects",
  miningEngineeringConstruction: "Mining Engineering Construction",
  engineeringWeldingEngineering: "Engineering Welding Engineering",
  weldingEngineering: "Welding Engineering",
  partnersCustomers: "ĐỐI TÁC KHÁCH HÀNG",

  /////// news
  //// header news
  newsHeaderTitle: "TIN TỨC",
  newsHeaderDescription: "Trang chủ / Tin tức",

  //// news main
  moduleTitle:
    "Lorem ipsum dolor sit amet aenean nisi sociis ipsum sit amet aenean...",
  moduleNewText:
    "Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly.",
  newsTitle: "Far concluded not his something extremily",
  newHeading: "TIN NỔI BẬT",
  switch: "Prev",
  page1: 1,
  page2: 2,
  page3: 3,
  finalPage: 60,
  final: "Next",

  ///// news footer
  footerFinal:
    "Bản quyền © 2019 bởi Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái Bình Dương",
  denote:
    "Denote simple fat denied add worthy little use. As some he so high down am week. Conduct esteems by cottage to pasture we winding. On assistance he cultivated considered frequently. Person how having tended direct own day man. Saw sufficient indulgance one own you inquietude sympathize.",
  unpacked:
    "Unpacked reserved sir offering bed judgment mat and quitting speaking, is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hance chief he cause. Whole no doors on hoped. Mile tell if help they ye full name.",
  yourSelf:
    "Yourself off its pleasant ecstatic now law. Ye their Mirth seems of songs. Propect out bed contemps separate. Her inquietude our sy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave window hours among him no you led. Power had these met least nor young. Yet match drift wrong his our.",
  bodyMeet:
    "Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing.",
  smilling:
    "But why smilling man her imagine married. Chiefly can man her out believe manners cottage coloned unknown. Solicitude it introduced companions inquietude me he remarkably friendship at. My almost or horses period. Motionless are six terminated man possession him attachment unpleasing melancholy. Sir smile arose one share. No abroad in easily relied an whence lovers temper by. Looked wisdom common he an be giving length mr.",
  moduleNews: "Far concluded not his something extremily",

  //// contact
  contactHeaderTitle: "LIÊN HỆ",
  contactHeaderDescription: "Trang chủ / Liên hệ",
  locationText:
    "Tầng 2, Lô 8 + 15 NV, Khu HH1 Ô16 Tây Hồ Tây, P.Xuân La, Q.Tây Hồ, TP.Hà Nội.",
  callNumber: "024.6666.7069",
  contactMail: "vanphongace5.ace@gmail.com",
  help: "Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
