const city = [
  {
    cityId: "01",
    name: "TP. Hà Nội",
  },
  {
    cityId: "03",
    name: "Tỉnh Vĩnh Phúc",
  },
  {
    cityId: "04",
    name: "Tỉnh Bắc Ninh",
  },
  {
    cityId: "05",
    name: "Tỉnh Hưng Yên",
  },
  {
    cityId: "06",
    name: "Tỉnh Hà Nam",
  },
  {
    cityId: "07",
    name: "Tỉnh Hải Dương",
  },
  {
    cityId: "08",
    name: "TP. Hải Phòng",
  },
  {
    cityId: "09",
    name: "Tỉnh Thái Bình",
  },
  {
    cityId: "10",
    name: "Tỉnh Nam Định",
  },
  {
    cityId: "11",
    name: "Tỉnh Ninh Bình",
  },
  {
    cityId: "12",
    name: "Tỉnh Lai Châu",
  },
  {
    cityId: "13",
    name: "Tỉnh Lào Cai",
  },
  {
    cityId: "14",
    name: "Tỉnh Điện Biên",
  },
  {
    cityId: "15",
    name: "Tỉnh Yên Bái",
  },
  {
    cityId: "16",
    name: "Tỉnh Sơn La",
  },
  {
    cityId: "17",
    name: "Tỉnh Hoà Bình",
  },
  {
    cityId: "18",
    name: "Tỉnh Hà Giang",
  },
  {
    cityId: "19",
    name: "Tỉnh Cao Bằng",
  },
  {
    cityId: "20",
    name: "Tỉnh Tuyên Quang",
  },
  {
    cityId: "21",
    name: "Tỉnh Bắc Kạn",
  },
  {
    cityId: "22",
    name: "Tỉnh Lạng Sơn",
  },
  {
    cityId: "23",
    name: "Tỉnh Thái Nguyên",
  },
  {
    cityId: "24",
    name: "Tỉnh Bắc Giang",
  },
  {
    cityId: "25",
    name: "Tỉnh Quảng Ninh",
  },
  {
    cityId: "26",
    name: "Tỉnh Phú Thọ",
  },
  {
    cityId: "27",
    name: "Tỉnh Thanh Hóa",
  },
  {
    cityId: "28",
    name: "Tỉnh Nghệ An",
  },
  {
    cityId: "29",
    name: "Tỉnh Hà Tĩnh",
  },
  {
    cityId: "30",
    name: "Tỉnh Quảng Bình",
  },
  {
    cityId: "31",
    name: "Tỉnh Quảng Trị",
  },
  {
    cityId: "32",
    name: "Tỉnh Thừa Thiên Huế",
  },
  {
    cityId: "33",
    name: "TP. Đà Nẵng",
  },
  {
    cityId: "34",
    name: "Tỉnh Quảng Nam",
  },
  {
    cityId: "35",
    name: "Tỉnh Quảng Ngãi",
  },
  {
    cityId: "36",
    name: "Tỉnh Bình Định",
  },
  {
    cityId: "37",
    name: "Tỉnh Phú Yên",
  },
  {
    cityId: "38",
    name: "Tỉnh Khánh Hòa",
  },
  {
    cityId: "39",
    name: "Tỉnh Ninh Thuận",
  },
  {
    cityId: "40",
    name: "Tỉnh Bình Thuận",
  },
  {
    cityId: "41",
    name: "Tỉnh Gia Lai",
  },
  {
    cityId: "42",
    name: "Tỉnh Kon Tum",
  },
  {
    cityId: "43",
    name: "Tỉnh Đắk Lắk",
  },
  {
    cityId: "44",
    name: "Tỉnh Lâm Đồng",
  },
  {
    cityId: "45",
    name: "Tỉnh Đắk Nông",
  },
  {
    cityId: "46",
    name: "TP. Hồ Chí Minh",
  },
  {
    cityId: "47",
    name: "Tỉnh Bình Dương",
  },
  {
    cityId: "48",
    name: "Tỉnh Bình Phước",
  },
  {
    cityId: "49",
    name: "Tỉnh Tây Ninh",
  },
  {
    cityId: "50",
    name: "Tỉnh Đồng Nai",
  },
  {
    cityId: "51",
    name: "Tỉnh Bà Rịa - Vũng Tàu",
  },
  {
    cityId: "52",
    name: "Tỉnh Long An",
  },
  {
    cityId: "53",
    name: "Tỉnh Đồng Tháp",
  },
  {
    cityId: "54",
    name: "Tỉnh Tiền Giang",
  },
  {
    cityId: "55",
    name: "Tỉnh Bến Tre",
  },
  {
    cityId: "56",
    name: "Tỉnh An Giang",
  },
  {
    cityId: "57",
    name: "TP. Cần Thơ",
  },
  {
    cityId: "58",
    name: "Tỉnh Vĩnh Long",
  },
  {
    cityId: "59",
    name: "Tỉnh Trà Vinh",
  },
  {
    cityId: "60",
    name: "Tỉnh Kiên Giang",
  },
  {
    cityId: "61",
    name: "Tỉnh Hậu Giang",
  },
  {
    cityId: "62",
    name: "Tỉnh Sóc Trăng",
  },
  {
    cityId: "63",
    name: "Tỉnh Bạc Liêu",
  },
  {
    cityId: "64",
    name: "Tỉnh Cà Mau",
  },
];

const district = [
  {
    cityId: "01",
    districtId: "001",
    name: "Quận Ba Đình",
  },
  {
    cityId: "01",
    districtId: "002",
    name: "Quận Hoàn Kiếm",
  },
  {
    cityId: "01",
    districtId: "003",
    name: "Quận Tây Hồ",
  },
  {
    cityId: "01",
    districtId: "004",
    name: "Quận Long Biên",
  },
  {
    cityId: "01",
    districtId: "005",
    name: "Quận Cầu Giấy",
  },
  {
    cityId: "01",
    districtId: "006",
    name: "Quận Đống Đa",
  },
  {
    cityId: "01",
    districtId: "007",
    name: "Quận Hai Bà Trưng",
  },
  {
    cityId: "01",
    districtId: "008",
    name: "Quận Hoàng Mai",
  },
  {
    cityId: "01",
    districtId: "009",
    name: "Quận Thanh Xuân",
  },
  {
    cityId: "01",
    districtId: "016",
    name: "Huyện Sóc Sơn",
  },
  {
    cityId: "01",
    districtId: "017",
    name: "Huyện Đông Anh",
  },
  {
    cityId: "01",
    districtId: "018",
    name: "Huyện Gia Lâm",
  },
  {
    cityId: "01",
    districtId: "019",
    name: "Quận Nam Từ Liêm",
  },
  {
    cityId: "01",
    districtId: "020",
    name: "Huyện Thanh Trì",
  },
  {
    cityId: "01",
    districtId: "021",
    name: "Quận Bắc Từ Liêm",
  },
  {
    cityId: "01",
    districtId: "250",
    name: "Huyện Mê Linh",
  },
  {
    cityId: "01",
    districtId: "268",
    name: "Quận Hà Đông",
  },
  {
    cityId: "01",
    districtId: "269",
    name: "Thị xã Sơn Tây",
  },
  {
    cityId: "01",
    districtId: "271",
    name: "Huyện Ba Vì",
  },
  {
    cityId: "01",
    districtId: "272",
    name: "Huyện Phúc Thọ",
  },
  {
    cityId: "01",
    districtId: "273",
    name: "Huyện Đan Phượng",
  },
  {
    cityId: "01",
    districtId: "274",
    name: "Huyện Hoài Đức",
  },
  {
    cityId: "01",
    districtId: "275",
    name: "Huyện Quốc Oai",
  },
  {
    cityId: "01",
    districtId: "276",
    name: "Huyện Thạch Thất",
  },
  {
    cityId: "01",
    districtId: "277",
    name: "Huyện Chương Mỹ",
  },
  {
    cityId: "01",
    districtId: "278",
    name: "Huyện Thanh Oai",
  },
  {
    cityId: "01",
    districtId: "279",
    name: "Huyện Thường Tín",
  },
  {
    cityId: "01",
    districtId: "280",
    name: "Huyện Phú Xuyên",
  },
  {
    cityId: "01",
    districtId: "281",
    name: "Huyện Ứng Hòa",
  },
  {
    cityId: "01",
    districtId: "282",
    name: "Huyện Mỹ Đức",
  },
  {
    cityId: "18",
    districtId: "024",
    name: "TP. Hà Giang",
  },
  {
    cityId: "18",
    districtId: "026",
    name: "Huyện Đồng Văn",
  },
  {
    cityId: "18",
    districtId: "027",
    name: "Huyện Mèo Vạc",
  },
  {
    cityId: "18",
    districtId: "028",
    name: "Huyện Yên Minh",
  },
  {
    cityId: "18",
    districtId: "029",
    name: "Huyện Quản Bạ",
  },
  {
    cityId: "18",
    districtId: "030",
    name: "Huyện Vị Xuyên",
  },
  {
    cityId: "18",
    districtId: "031",
    name: "Huyện Bắc Mê",
  },
  {
    cityId: "18",
    districtId: "032",
    name: "Huyện Hoàng Su Phì",
  },
  {
    cityId: "18",
    districtId: "033",
    name: "Huyện Xín Mần",
  },
  {
    cityId: "18",
    districtId: "034",
    name: "Huyện Bắc Quang",
  },
  {
    cityId: "18",
    districtId: "035",
    name: "Huyện Quang Bình",
  },
  {
    cityId: "19",
    districtId: "040",
    name: "TP. Cao Bằng",
  },
  {
    cityId: "19",
    districtId: "042",
    name: "Huyện Bảo Lâm",
  },
  {
    cityId: "19",
    districtId: "043",
    name: "Huyện Bảo Lạc",
  },
  {
    cityId: "19",
    districtId: "045",
    name: "Huyện Hà Quảng",
  },
  {
    cityId: "19",
    districtId: "047",
    name: "Huyện Trùng Khánh",
  },
  {
    cityId: "19",
    districtId: "048",
    name: "Huyện Hạ Lang",
  },
  {
    cityId: "19",
    districtId: "049",
    name: "Huyện Quảng Hòa",
  },
  {
    cityId: "19",
    districtId: "051",
    name: "Huyện Hoà An",
  },
  {
    cityId: "19",
    districtId: "052",
    name: "Huyện Nguyên Bình",
  },
  {
    cityId: "19",
    districtId: "053",
    name: "Huyện Thạch An",
  },
  {
    cityId: "21",
    districtId: "058",
    name: "Thành Phố Bắc Kạn",
  },
  {
    cityId: "21",
    districtId: "060",
    name: "Huyện Pác Nặm",
  },
  {
    cityId: "21",
    districtId: "061",
    name: "Huyện Ba Bể",
  },
  {
    cityId: "21",
    districtId: "062",
    name: "Huyện Ngân Sơn",
  },
  {
    cityId: "21",
    districtId: "063",
    name: "Huyện Bạch Thông",
  },
  {
    cityId: "21",
    districtId: "064",
    name: "Huyện Chợ Đồn",
  },
  {
    cityId: "21",
    districtId: "065",
    name: "Huyện Chợ Mới",
  },
  {
    cityId: "21",
    districtId: "066",
    name: "Huyện Na Rì",
  },
  {
    cityId: "20",
    districtId: "070",
    name: "TP. Tuyên Quang",
  },
  {
    cityId: "20",
    districtId: "071",
    name: "Huyện Lâm Bình",
  },
  {
    cityId: "20",
    districtId: "072",
    name: "Huyện Na Hang",
  },
  {
    cityId: "20",
    districtId: "073",
    name: "Huyện Chiêm Hóa",
  },
  {
    cityId: "20",
    districtId: "074",
    name: "Huyện Hàm Yên",
  },
  {
    cityId: "20",
    districtId: "075",
    name: "Huyện Yên Sơn",
  },
  {
    cityId: "20",
    districtId: "076",
    name: "Huyện Sơn Dương",
  },
  {
    cityId: "13",
    districtId: "080",
    name: "TP. Lào Cai",
  },
  {
    cityId: "13",
    districtId: "082",
    name: "Huyện Bát Xát",
  },
  {
    cityId: "13",
    districtId: "083",
    name: "Huyện Mường Khương",
  },
  {
    cityId: "13",
    districtId: "084",
    name: "Huyện Si Ma Cai",
  },
  {
    cityId: "13",
    districtId: "085",
    name: "Huyện Bắc Hà",
  },
  {
    cityId: "13",
    districtId: "086",
    name: "Huyện Bảo Thắng",
  },
  {
    cityId: "13",
    districtId: "087",
    name: "Huyện Bảo Yên",
  },
  {
    cityId: "13",
    districtId: "088",
    name: "Thị xã Sa Pa",
  },
  {
    cityId: "13",
    districtId: "089",
    name: "Huyện Văn Bàn",
  },
  {
    cityId: "14",
    districtId: "094",
    name: "TP. Điện Biên Phủ",
  },
  {
    cityId: "14",
    districtId: "095",
    name: "Thị Xã Mường Lay",
  },
  {
    cityId: "14",
    districtId: "096",
    name: "Huyện Mường Nhé",
  },
  {
    cityId: "14",
    districtId: "097",
    name: "Huyện Mường Chà",
  },
  {
    cityId: "14",
    districtId: "098",
    name: "Huyện Tủa Chùa",
  },
  {
    cityId: "14",
    districtId: "099",
    name: "Huyện Tuần Giáo",
  },
  {
    cityId: "14",
    districtId: "100",
    name: "Huyện Điện Biên",
  },
  {
    cityId: "14",
    districtId: "101",
    name: "Huyện Điện Biên Đông",
  },
  {
    cityId: "14",
    districtId: "102",
    name: "Huyện Mường Ảng",
  },
  {
    cityId: "14",
    districtId: "103",
    name: "Huyện Nậm Pồ",
  },
  {
    cityId: "12",
    districtId: "105",
    name: "TP. Lai Châu",
  },
  {
    cityId: "12",
    districtId: "106",
    name: "Huyện Tam Đường",
  },
  {
    cityId: "12",
    districtId: "107",
    name: "Huyện Mường Tè",
  },
  {
    cityId: "12",
    districtId: "108",
    name: "Huyện Sìn Hồ",
  },
  {
    cityId: "12",
    districtId: "109",
    name: "Huyện Phong Thổ",
  },
  {
    cityId: "12",
    districtId: "110",
    name: "Huyện Than Uyên",
  },
  {
    cityId: "12",
    districtId: "111",
    name: "Huyện Tân Uyên",
  },
  {
    cityId: "12",
    districtId: "112",
    name: "Huyện Nậm Nhùn",
  },
  {
    cityId: "16",
    districtId: "116",
    name: "TP. Sơn La",
  },
  {
    cityId: "16",
    districtId: "118",
    name: "Huyện Quỳnh Nhai",
  },
  {
    cityId: "16",
    districtId: "119",
    name: "Huyện Thuận Châu",
  },
  {
    cityId: "16",
    districtId: "120",
    name: "Huyện Mường La",
  },
  {
    cityId: "16",
    districtId: "121",
    name: "Huyện Bắc Yên",
  },
  {
    cityId: "16",
    districtId: "122",
    name: "Huyện Phù Yên",
  },
  {
    cityId: "16",
    districtId: "123",
    name: "Huyện Mộc Châu",
  },
  {
    cityId: "16",
    districtId: "124",
    name: "Huyện Yên Châu",
  },
  {
    cityId: "16",
    districtId: "125",
    name: "Huyện Mai Sơn",
  },
  {
    cityId: "16",
    districtId: "126",
    name: "Huyện Sông Mã",
  },
  {
    cityId: "16",
    districtId: "127",
    name: "Huyện Sốp Cộp",
  },
  {
    cityId: "16",
    districtId: "128",
    name: "Huyện Vân Hồ",
  },
  {
    cityId: "15",
    districtId: "132",
    name: "TP. Yên Bái",
  },
  {
    cityId: "15",
    districtId: "133",
    name: "Thị xã Nghĩa Lộ",
  },
  {
    cityId: "15",
    districtId: "135",
    name: "Huyện Lục Yên",
  },
  {
    cityId: "15",
    districtId: "136",
    name: "Huyện Văn Yên",
  },
  {
    cityId: "15",
    districtId: "137",
    name: "Huyện Mù Căng Chải",
  },
  {
    cityId: "15",
    districtId: "138",
    name: "Huyện Trấn Yên",
  },
  {
    cityId: "15",
    districtId: "139",
    name: "Huyện Trạm Tấu",
  },
  {
    cityId: "15",
    districtId: "140",
    name: "Huyện Văn Chấn",
  },
  {
    cityId: "15",
    districtId: "141",
    name: "Huyện Yên Bình",
  },
  {
    cityId: "17",
    districtId: "148",
    name: "TP. Hòa Bình",
  },
  {
    cityId: "17",
    districtId: "150",
    name: "Huyện Đà Bắc",
  },
  {
    cityId: "17",
    districtId: "152",
    name: "Huyện Lương Sơn",
  },
  {
    cityId: "17",
    districtId: "153",
    name: "Huyện Kim Bôi",
  },
  {
    cityId: "17",
    districtId: "154",
    name: "Huyện Cao Phong",
  },
  {
    cityId: "17",
    districtId: "155",
    name: "Huyện Tân Lạc",
  },
  {
    cityId: "17",
    districtId: "156",
    name: "Huyện Mai Châu",
  },
  {
    cityId: "17",
    districtId: "157",
    name: "Huyện Lạc Sơn",
  },
  {
    cityId: "17",
    districtId: "158",
    name: "Huyện Yên Thủy",
  },
  {
    cityId: "17",
    districtId: "159",
    name: "Huyện Lạc Thủy",
  },
  {
    cityId: "23",
    districtId: "164",
    name: "TP. Thái Nguyên",
  },
  {
    cityId: "23",
    districtId: "165",
    name: "TP. Sông Công",
  },
  {
    cityId: "23",
    districtId: "167",
    name: "Huyện Định Hóa",
  },
  {
    cityId: "23",
    districtId: "168",
    name: "Huyện Phú Lương",
  },
  {
    cityId: "23",
    districtId: "169",
    name: "Huyện Đồng Hỷ",
  },
  {
    cityId: "23",
    districtId: "170",
    name: "Huyện Võ Nhai",
  },
  {
    cityId: "23",
    districtId: "171",
    name: "Huyện Đại Từ",
  },
  {
    cityId: "23",
    districtId: "172",
    name: "TP. Phổ Yên",
  },
  {
    cityId: "23",
    districtId: "173",
    name: "Huyện Phú Bình",
  },
  {
    cityId: "22",
    districtId: "178",
    name: "TP. Lạng Sơn",
  },
  {
    cityId: "22",
    districtId: "180",
    name: "Huyện Tràng Định",
  },
  {
    cityId: "22",
    districtId: "181",
    name: "Huyện Bình Gia",
  },
  {
    cityId: "22",
    districtId: "182",
    name: "Huyện Văn Lãng",
  },
  {
    cityId: "22",
    districtId: "183",
    name: "Huyện Cao Lộc",
  },
  {
    cityId: "22",
    districtId: "184",
    name: "Huyện Văn Quan",
  },
  {
    cityId: "22",
    districtId: "185",
    name: "Huyện Bắc Sơn",
  },
  {
    cityId: "22",
    districtId: "186",
    name: "Huyện Hữu Lũng",
  },
  {
    cityId: "22",
    districtId: "187",
    name: "Huyện Chi Lăng",
  },
  {
    cityId: "22",
    districtId: "188",
    name: "Huyện Lộc Bình",
  },
  {
    cityId: "22",
    districtId: "189",
    name: "Huyện Đình Lập",
  },
  {
    cityId: "25",
    districtId: "193",
    name: "TP. Hạ Long",
  },
  {
    cityId: "25",
    districtId: "194",
    name: "TP. Móng Cái",
  },
  {
    cityId: "25",
    districtId: "195",
    name: "TP. Cẩm Phả",
  },
  {
    cityId: "25",
    districtId: "196",
    name: "TP. Uông Bí",
  },
  {
    cityId: "25",
    districtId: "198",
    name: "Huyện Bình Liêu",
  },
  {
    cityId: "25",
    districtId: "199",
    name: "Huyện Tiên Yên",
  },
  {
    cityId: "25",
    districtId: "200",
    name: "Huyện Đầm Hà",
  },
  {
    cityId: "25",
    districtId: "201",
    name: "Huyện Hải Hà",
  },
  {
    cityId: "25",
    districtId: "202",
    name: "Huyện Ba Chẽ",
  },
  {
    cityId: "25",
    districtId: "203",
    name: "Huyện Vân Đồn",
  },
  {
    cityId: "25",
    districtId: "205",
    name: "Thị xã Đông Triều",
  },
  {
    cityId: "25",
    districtId: "206",
    name: "Thị xã Quảng Yên",
  },
  {
    cityId: "25",
    districtId: "207",
    name: "Huyện Cô Tô",
  },
  {
    cityId: "24",
    districtId: "213",
    name: "TP. Bắc Giang",
  },
  {
    cityId: "24",
    districtId: "215",
    name: "Huyện Yên Thế",
  },
  {
    cityId: "24",
    districtId: "216",
    name: "Huyện Tân Yên",
  },
  {
    cityId: "24",
    districtId: "217",
    name: "Huyện Lạng Giang",
  },
  {
    cityId: "24",
    districtId: "218",
    name: "Huyện Lục Nam",
  },
  {
    cityId: "24",
    districtId: "219",
    name: "Huyện Lục Ngạn",
  },
  {
    cityId: "24",
    districtId: "220",
    name: "Huyện Sơn Động",
  },
  {
    cityId: "24",
    districtId: "221",
    name: "Huyện Yên Dũng",
  },
  {
    cityId: "24",
    districtId: "222",
    name: "Huyện Việt Yên",
  },
  {
    cityId: "24",
    districtId: "223",
    name: "Huyện Hiệp Hòa",
  },
  {
    cityId: "26",
    districtId: "227",
    name: "TP. Việt Trì",
  },
  {
    cityId: "26",
    districtId: "228",
    name: "Thị xã Phú Thọ",
  },
  {
    cityId: "26",
    districtId: "230",
    name: "Huyện Đoan Hùng",
  },
  {
    cityId: "26",
    districtId: "231",
    name: "Huyện Hạ Hoà",
  },
  {
    cityId: "26",
    districtId: "232",
    name: "Huyện Thanh Ba",
  },
  {
    cityId: "26",
    districtId: "233",
    name: "Huyện Phù Ninh",
  },
  {
    cityId: "26",
    districtId: "234",
    name: "Huyện Yên Lập",
  },
  {
    cityId: "26",
    districtId: "235",
    name: "Huyện Cẩm Khê",
  },
  {
    cityId: "26",
    districtId: "236",
    name: "Huyện Tam Nông",
  },
  {
    cityId: "26",
    districtId: "237",
    name: "Huyện Lâm Thao",
  },
  {
    cityId: "26",
    districtId: "238",
    name: "Huyện Thanh Sơn",
  },
  {
    cityId: "26",
    districtId: "239",
    name: "Huyện Thanh Thuỷ",
  },
  {
    cityId: "26",
    districtId: "240",
    name: "Huyện Tân Sơn",
  },
  {
    cityId: "03",
    districtId: "243",
    name: "TP. Vĩnh Yên",
  },
  {
    cityId: "03",
    districtId: "244",
    name: "TP. Phúc Yên",
  },
  {
    cityId: "03",
    districtId: "246",
    name: "Huyện Lập Thạch",
  },
  {
    cityId: "03",
    districtId: "247",
    name: "Huyện Tam Dương",
  },
  {
    cityId: "03",
    districtId: "248",
    name: "Huyện Tam Đảo",
  },
  {
    cityId: "03",
    districtId: "249",
    name: "Huyện Bình Xuyên",
  },
  {
    cityId: "03",
    districtId: "251",
    name: "Huyện Yên Lạc",
  },
  {
    cityId: "03",
    districtId: "252",
    name: "Huyện Vĩnh Tường",
  },
  {
    cityId: "03",
    districtId: "253",
    name: "Huyện Sông Lô",
  },
  {
    cityId: "04",
    districtId: "256",
    name: "TP. Bắc Ninh",
  },
  {
    cityId: "04",
    districtId: "258",
    name: "Huyện Yên Phong",
  },
  {
    cityId: "04",
    districtId: "259",
    name: "Huyện Quế Võ",
  },
  {
    cityId: "04",
    districtId: "260",
    name: "Huyện Tiên Du",
  },
  {
    cityId: "04",
    districtId: "261",
    name: "TP. Từ Sơn",
  },
  {
    cityId: "04",
    districtId: "262",
    name: "Huyện Thuận Thành",
  },
  {
    cityId: "04",
    districtId: "263",
    name: "Huyện Gia Bình",
  },
  {
    cityId: "04",
    districtId: "264",
    name: "Huyện Lương Tài",
  },
  {
    cityId: "07",
    districtId: "288",
    name: "TP. Hải Dương",
  },
  {
    cityId: "07",
    districtId: "290",
    name: "TP. Chí Linh",
  },
  {
    cityId: "07",
    districtId: "291",
    name: "Huyện Nam Sách",
  },
  {
    cityId: "07",
    districtId: "292",
    name: "Thị xã Kinh Môn",
  },
  {
    cityId: "07",
    districtId: "293",
    name: "Huyện Kim Thành",
  },
  {
    cityId: "07",
    districtId: "294",
    name: "Huyện Thanh Hà",
  },
  {
    cityId: "07",
    districtId: "295",
    name: "Huyện Cẩm Giàng",
  },
  {
    cityId: "07",
    districtId: "296",
    name: "Huyện Bình Giang",
  },
  {
    cityId: "07",
    districtId: "297",
    name: "Huyện Gia Lộc",
  },
  {
    cityId: "07",
    districtId: "298",
    name: "Huyện Tứ Kỳ",
  },
  {
    cityId: "07",
    districtId: "299",
    name: "Huyện Ninh Giang",
  },
  {
    cityId: "07",
    districtId: "300",
    name: "Huyện Thanh Miện",
  },
  {
    cityId: "08",
    districtId: "303",
    name: "Quận Hồng Bàng",
  },
  {
    cityId: "08",
    districtId: "304",
    name: "Quận Ngô Quyền",
  },
  {
    cityId: "08",
    districtId: "305",
    name: "Quận Lê Chân",
  },
  {
    cityId: "08",
    districtId: "306",
    name: "Quận Hải An",
  },
  {
    cityId: "08",
    districtId: "307",
    name: "Quận Kiến An",
  },
  {
    cityId: "08",
    districtId: "308",
    name: "Quận Đồ Sơn",
  },
  {
    cityId: "08",
    districtId: "309",
    name: "Quận Dương Kinh",
  },
  {
    cityId: "08",
    districtId: "311",
    name: "Huyện Thuỷ Nguyên",
  },
  {
    cityId: "08",
    districtId: "312",
    name: "Huyện An Dương",
  },
  {
    cityId: "08",
    districtId: "313",
    name: "Huyện An Lão",
  },
  {
    cityId: "08",
    districtId: "314",
    name: "Huyện Kiến Thuỵ",
  },
  {
    cityId: "08",
    districtId: "315",
    name: "Huyện Tiên Lãng",
  },
  {
    cityId: "08",
    districtId: "316",
    name: "Huyện Vĩnh Bảo",
  },
  {
    cityId: "08",
    districtId: "317",
    name: "Huyện Cát Hải",
  },
  {
    cityId: "08",
    districtId: "318",
    name: "Huyện Bạch Long Vĩ",
  },
  {
    cityId: "05",
    districtId: "323",
    name: "TP. Hưng Yên",
  },
  {
    cityId: "05",
    districtId: "325",
    name: "Huyện Văn Lâm",
  },
  {
    cityId: "05",
    districtId: "326",
    name: "Huyện Văn Giang",
  },
  {
    cityId: "05",
    districtId: "327",
    name: "Huyện Yên Mỹ",
  },
  {
    cityId: "05",
    districtId: "328",
    name: "Thị xã Mỹ Hào",
  },
  {
    cityId: "05",
    districtId: "329",
    name: "Huyện Ân Thi",
  },
  {
    cityId: "05",
    districtId: "330",
    name: "Huyện Khoái Châu",
  },
  {
    cityId: "05",
    districtId: "331",
    name: "Huyện Kim Động",
  },
  {
    cityId: "05",
    districtId: "332",
    name: "Huyện Tiên Lữ",
  },
  {
    cityId: "05",
    districtId: "333",
    name: "Huyện Phù Cừ",
  },
  {
    cityId: "09",
    districtId: "336",
    name: "TP. Thái Bình",
  },
  {
    cityId: "09",
    districtId: "338",
    name: "Huyện Quỳnh Phụ",
  },
  {
    cityId: "09",
    districtId: "339",
    name: "Huyện Hưng Hà",
  },
  {
    cityId: "09",
    districtId: "340",
    name: "Huyện Đông Hưng",
  },
  {
    cityId: "09",
    districtId: "341",
    name: "Huyện Thái Thụy",
  },
  {
    cityId: "09",
    districtId: "342",
    name: "Huyện Tiền Hải",
  },
  {
    cityId: "09",
    districtId: "343",
    name: "Huyện Kiến Xương",
  },
  {
    cityId: "09",
    districtId: "344",
    name: "Huyện Vũ Thư",
  },
  {
    cityId: "06",
    districtId: "347",
    name: "TP. Phủ Lý",
  },
  {
    cityId: "06",
    districtId: "349",
    name: "Thị xã Duy Tiên",
  },
  {
    cityId: "06",
    districtId: "350",
    name: "Huyện Kim Bảng",
  },
  {
    cityId: "06",
    districtId: "351",
    name: "Huyện Thanh Liêm",
  },
  {
    cityId: "06",
    districtId: "352",
    name: "Huyện Bình Lục",
  },
  {
    cityId: "06",
    districtId: "353",
    name: "Huyện Lý Nhân",
  },
  {
    cityId: "10",
    districtId: "356",
    name: "TP. Nam Định",
  },
  {
    cityId: "10",
    districtId: "358",
    name: "Huyện Mỹ Lộc",
  },
  {
    cityId: "10",
    districtId: "359",
    name: "Huyện Vụ Bản",
  },
  {
    cityId: "10",
    districtId: "360",
    name: "Huyện Ý Yên",
  },
  {
    cityId: "10",
    districtId: "361",
    name: "Huyện Nghĩa Hưng",
  },
  {
    cityId: "10",
    districtId: "362",
    name: "Huyện Nam Trực",
  },
  {
    cityId: "10",
    districtId: "363",
    name: "Huyện Trực Ninh",
  },
  {
    cityId: "10",
    districtId: "364",
    name: "Huyện Xuân Trường",
  },
  {
    cityId: "10",
    districtId: "365",
    name: "Huyện Giao Thủy",
  },
  {
    cityId: "10",
    districtId: "366",
    name: "Huyện Hải Hậu",
  },
  {
    cityId: "11",
    districtId: "369",
    name: "TP. Ninh Bình",
  },
  {
    cityId: "11",
    districtId: "370",
    name: "TP. Tam Điệp",
  },
  {
    cityId: "11",
    districtId: "372",
    name: "Huyện Nho Quan",
  },
  {
    cityId: "11",
    districtId: "373",
    name: "Huyện Gia Viễn",
  },
  {
    cityId: "11",
    districtId: "374",
    name: "Huyện Hoa Lư",
  },
  {
    cityId: "11",
    districtId: "375",
    name: "Huyện Yên Khánh",
  },
  {
    cityId: "11",
    districtId: "376",
    name: "Huyện Kim Sơn",
  },
  {
    cityId: "11",
    districtId: "377",
    name: "Huyện Yên Mô",
  },
  {
    cityId: "27",
    districtId: "380",
    name: "TP. Thanh Hóa",
  },
  {
    cityId: "27",
    districtId: "381",
    name: "Thị xã Bỉm Sơn",
  },
  {
    cityId: "27",
    districtId: "382",
    name: "TP. Sầm Sơn",
  },
  {
    cityId: "27",
    districtId: "384",
    name: "Huyện Mường Lát",
  },
  {
    cityId: "27",
    districtId: "385",
    name: "Huyện Quan Hóa",
  },
  {
    cityId: "27",
    districtId: "386",
    name: "Huyện Bá Thước",
  },
  {
    cityId: "27",
    districtId: "387",
    name: "Huyện Quan Sơn",
  },
  {
    cityId: "27",
    districtId: "388",
    name: "Huyện Lang Chánh",
  },
  {
    cityId: "27",
    districtId: "389",
    name: "Huyện Ngọc Lặc",
  },
  {
    cityId: "27",
    districtId: "390",
    name: "Huyện Cẩm Thủy",
  },
  {
    cityId: "27",
    districtId: "391",
    name: "Huyện Thạch Thành",
  },
  {
    cityId: "27",
    districtId: "392",
    name: "Huyện Hà Trung",
  },
  {
    cityId: "27",
    districtId: "393",
    name: "Huyện Vĩnh Lộc",
  },
  {
    cityId: "27",
    districtId: "394",
    name: "Huyện Yên Định",
  },
  {
    cityId: "27",
    districtId: "395",
    name: "Huyện Thọ Xuân",
  },
  {
    cityId: "27",
    districtId: "396",
    name: "Huyện Thường Xuân",
  },
  {
    cityId: "27",
    districtId: "397",
    name: "Huyện Triệu Sơn",
  },
  {
    cityId: "27",
    districtId: "398",
    name: "Huyện Thiệu Hóa",
  },
  {
    cityId: "27",
    districtId: "399",
    name: "Huyện Hoằng Hóa",
  },
  {
    cityId: "27",
    districtId: "400",
    name: "Huyện Hậu Lộc",
  },
  {
    cityId: "27",
    districtId: "401",
    name: "Huyện Nga Sơn",
  },
  {
    cityId: "27",
    districtId: "402",
    name: "Huyện Như Xuân",
  },
  {
    cityId: "27",
    districtId: "403",
    name: "Huyện Như Thanh",
  },
  {
    cityId: "27",
    districtId: "404",
    name: "Huyện Nông Cống",
  },
  {
    cityId: "27",
    districtId: "405",
    name: "Huyện Đông Sơn",
  },
  {
    cityId: "27",
    districtId: "406",
    name: "Huyện Quảng Xương",
  },
  {
    cityId: "27",
    districtId: "407",
    name: "Thị xã Nghi Sơn",
  },
  {
    cityId: "28",
    districtId: "412",
    name: "TP. Vinh",
  },
  {
    cityId: "28",
    districtId: "413",
    name: "Thị xã Cửa Lò",
  },
  {
    cityId: "28",
    districtId: "414",
    name: "Thị xã Thái Hoà",
  },
  {
    cityId: "28",
    districtId: "415",
    name: "Huyện Quế Phong",
  },
  {
    cityId: "28",
    districtId: "416",
    name: "Huyện Quỳ Châu",
  },
  {
    cityId: "28",
    districtId: "417",
    name: "Huyện Kỳ Sơn",
  },
  {
    cityId: "28",
    districtId: "418",
    name: "Huyện Tương Dương",
  },
  {
    cityId: "28",
    districtId: "419",
    name: "Huyện Nghĩa Đàn",
  },
  {
    cityId: "28",
    districtId: "420",
    name: "Huyện Quỳ Hợp",
  },
  {
    cityId: "28",
    districtId: "421",
    name: "Huyện Quỳnh Lưu",
  },
  {
    cityId: "28",
    districtId: "422",
    name: "Huyện Con Cuông",
  },
  {
    cityId: "28",
    districtId: "423",
    name: "Huyện Tân Kỳ",
  },
  {
    cityId: "28",
    districtId: "424",
    name: "Huyện Anh Sơn",
  },
  {
    cityId: "28",
    districtId: "425",
    name: "Huyện Diễn Châu",
  },
  {
    cityId: "28",
    districtId: "426",
    name: "Huyện Yên Thành",
  },
  {
    cityId: "28",
    districtId: "427",
    name: "Huyện Đô Lương",
  },
  {
    cityId: "28",
    districtId: "428",
    name: "Huyện Thanh Chương",
  },
  {
    cityId: "28",
    districtId: "429",
    name: "Huyện Nghi Lộc",
  },
  {
    cityId: "28",
    districtId: "430",
    name: "Huyện Nam Đàn",
  },
  {
    cityId: "28",
    districtId: "431",
    name: "Huyện Hưng Nguyên",
  },
  {
    cityId: "28",
    districtId: "432",
    name: "Thị xã Hoàng Mai",
  },
  {
    cityId: "29",
    districtId: "436",
    name: "TP. Hà Tĩnh",
  },
  {
    cityId: "29",
    districtId: "437",
    name: "Thị xã Hồng Lĩnh",
  },
  {
    cityId: "29",
    districtId: "439",
    name: "Huyện Hương Sơn",
  },
  {
    cityId: "29",
    districtId: "440",
    name: "Huyện Đức Thọ",
  },
  {
    cityId: "29",
    districtId: "441",
    name: "Huyện Vũ Quang",
  },
  {
    cityId: "29",
    districtId: "442",
    name: "Huyện Nghi Xuân",
  },
  {
    cityId: "29",
    districtId: "443",
    name: "Huyện Can Lộc",
  },
  {
    cityId: "29",
    districtId: "444",
    name: "Huyện Hương Khê",
  },
  {
    cityId: "29",
    districtId: "445",
    name: "Huyện Thạch Hà",
  },
  {
    cityId: "29",
    districtId: "446",
    name: "Huyện Cẩm Xuyên",
  },
  {
    cityId: "29",
    districtId: "447",
    name: "Huyện Kỳ Anh",
  },
  {
    cityId: "29",
    districtId: "448",
    name: "Huyện Lộc Hà",
  },
  {
    cityId: "29",
    districtId: "449",
    name: "Thị xã Kỳ Anh",
  },
  {
    cityId: "30",
    districtId: "450",
    name: "Thành Phố Đồng Hới",
  },
  {
    cityId: "30",
    districtId: "452",
    name: "Huyện Minh Hóa",
  },
  {
    cityId: "30",
    districtId: "453",
    name: "Huyện Tuyên Hóa",
  },
  {
    cityId: "30",
    districtId: "454",
    name: "Huyện Quảng Trạch",
  },
  {
    cityId: "30",
    districtId: "455",
    name: "Huyện Bố Trạch",
  },
  {
    cityId: "30",
    districtId: "456",
    name: "Huyện Quảng Ninh",
  },
  {
    cityId: "30",
    districtId: "457",
    name: "Huyện Lệ Thủy",
  },
  {
    cityId: "30",
    districtId: "458",
    name: "Thị xã Ba Đồn",
  },
  {
    cityId: "31",
    districtId: "461",
    name: "TP. Đông Hà",
  },
  {
    cityId: "31",
    districtId: "462",
    name: "Thị xã Quảng Trị",
  },
  {
    cityId: "31",
    districtId: "464",
    name: "Huyện Vĩnh Linh",
  },
  {
    cityId: "31",
    districtId: "465",
    name: "Huyện Hướng Hóa",
  },
  {
    cityId: "31",
    districtId: "466",
    name: "Huyện Gio Linh",
  },
  {
    cityId: "31",
    districtId: "467",
    name: "Huyện Đa Krông",
  },
  {
    cityId: "31",
    districtId: "468",
    name: "Huyện Cam Lộ",
  },
  {
    cityId: "31",
    districtId: "469",
    name: "Huyện Triệu Phong",
  },
  {
    cityId: "31",
    districtId: "470",
    name: "Huyện Hải Lăng",
  },
  {
    cityId: "31",
    districtId: "471",
    name: "Huyện Cồn Cỏ",
  },
  {
    cityId: "32",
    districtId: "474",
    name: "TP. Huế",
  },
  {
    cityId: "32",
    districtId: "476",
    name: "Huyện Phong Điền",
  },
  {
    cityId: "32",
    districtId: "477",
    name: "Huyện Quảng Điền",
  },
  {
    cityId: "32",
    districtId: "478",
    name: "Huyện Phú Vang",
  },
  {
    cityId: "32",
    districtId: "479",
    name: "Thị xã Hương Thủy",
  },
  {
    cityId: "32",
    districtId: "480",
    name: "Thị xã Hương Trà",
  },
  {
    cityId: "32",
    districtId: "481",
    name: "Huyện A Lưới",
  },
  {
    cityId: "32",
    districtId: "482",
    name: "Huyện Phú Lộc",
  },
  {
    cityId: "32",
    districtId: "483",
    name: "Huyện Nam Đông",
  },
  {
    cityId: "33",
    districtId: "490",
    name: "Quận Liên Chiểu",
  },
  {
    cityId: "33",
    districtId: "491",
    name: "Quận Thanh Khê",
  },
  {
    cityId: "33",
    districtId: "492",
    name: "Quận Hải Châu",
  },
  {
    cityId: "33",
    districtId: "493",
    name: "Quận Sơn Trà",
  },
  {
    cityId: "33",
    districtId: "494",
    name: "Quận Ngũ Hành Sơn",
  },
  {
    cityId: "33",
    districtId: "495",
    name: "Quận Cẩm Lệ",
  },
  {
    cityId: "33",
    districtId: "497",
    name: "Huyện Hòa Vang",
  },
  {
    cityId: "33",
    districtId: "498",
    name: "Huyện Hoàng Sa",
  },
  {
    cityId: "34",
    districtId: "502",
    name: "TP. Tam Kỳ",
  },
  {
    cityId: "34",
    districtId: "503",
    name: "TP. Hội An",
  },
  {
    cityId: "34",
    districtId: "504",
    name: "Huyện Tây Giang",
  },
  {
    cityId: "34",
    districtId: "505",
    name: "Huyện Đông Giang",
  },
  {
    cityId: "34",
    districtId: "506",
    name: "Huyện Đại Lộc",
  },
  {
    cityId: "34",
    districtId: "507",
    name: "Thị xã Điện Bàn",
  },
  {
    cityId: "34",
    districtId: "508",
    name: "Huyện Duy Xuyên",
  },
  {
    cityId: "34",
    districtId: "509",
    name: "Huyện Quế Sơn",
  },
  {
    cityId: "34",
    districtId: "510",
    name: "Huyện Nam Giang",
  },
  {
    cityId: "34",
    districtId: "511",
    name: "Huyện Phước Sơn",
  },
  {
    cityId: "34",
    districtId: "512",
    name: "Huyện Hiệp Đức",
  },
  {
    cityId: "34",
    districtId: "513",
    name: "Huyện Thăng Bình",
  },
  {
    cityId: "34",
    districtId: "514",
    name: "Huyện Tiên Phước",
  },
  {
    cityId: "34",
    districtId: "515",
    name: "Huyện Bắc Trà My",
  },
  {
    cityId: "34",
    districtId: "516",
    name: "Huyện Nam Trà My",
  },
  {
    cityId: "34",
    districtId: "517",
    name: "Huyện Núi Thành",
  },
  {
    cityId: "34",
    districtId: "518",
    name: "Huyện Phú Ninh",
  },
  {
    cityId: "34",
    districtId: "519",
    name: "Huyện Nông Sơn",
  },
  {
    cityId: "35",
    districtId: "522",
    name: "TP. Quảng Ngãi",
  },
  {
    cityId: "35",
    districtId: "524",
    name: "Huyện Bình Sơn",
  },
  {
    cityId: "35",
    districtId: "525",
    name: "Huyện Trà Bồng",
  },
  {
    cityId: "35",
    districtId: "527",
    name: "Huyện Sơn Tịnh",
  },
  {
    cityId: "35",
    districtId: "528",
    name: "Huyện Tư Nghĩa",
  },
  {
    cityId: "35",
    districtId: "529",
    name: "Huyện Sơn Hà",
  },
  {
    cityId: "35",
    districtId: "530",
    name: "Huyện Sơn Tây",
  },
  {
    cityId: "35",
    districtId: "531",
    name: "Huyện Minh Long",
  },
  {
    cityId: "35",
    districtId: "532",
    name: "Huyện Nghĩa Hành",
  },
  {
    cityId: "35",
    districtId: "533",
    name: "Huyện Mộ Đức",
  },
  {
    cityId: "35",
    districtId: "534",
    name: "Thị xã Đức Phổ",
  },
  {
    cityId: "35",
    districtId: "535",
    name: "Huyện Ba Tơ",
  },
  {
    cityId: "35",
    districtId: "536",
    name: "Huyện Lý Sơn",
  },
  {
    cityId: "36",
    districtId: "540",
    name: "TP. Quy Nhơn",
  },
  {
    cityId: "36",
    districtId: "542",
    name: "Huyện An Lão",
  },
  {
    cityId: "36",
    districtId: "543",
    name: "Thị xã Hoài Nhơn",
  },
  {
    cityId: "36",
    districtId: "544",
    name: "Huyện Hoài Ân",
  },
  {
    cityId: "36",
    districtId: "545",
    name: "Huyện Phù Mỹ",
  },
  {
    cityId: "36",
    districtId: "546",
    name: "Huyện Vĩnh Thạnh",
  },
  {
    cityId: "36",
    districtId: "547",
    name: "Huyện Tây Sơn",
  },
  {
    cityId: "36",
    districtId: "548",
    name: "Huyện Phù Cát",
  },
  {
    cityId: "36",
    districtId: "549",
    name: "Thị xã An Nhơn",
  },
  {
    cityId: "36",
    districtId: "550",
    name: "Huyện Tuy Phước",
  },
  {
    cityId: "36",
    districtId: "551",
    name: "Huyện Vân Canh",
  },
  {
    cityId: "37",
    districtId: "555",
    name: "TP. Tuy Hoà",
  },
  {
    cityId: "37",
    districtId: "557",
    name: "Thị xã Sông Cầu",
  },
  {
    cityId: "37",
    districtId: "558",
    name: "Huyện Đồng Xuân",
  },
  {
    cityId: "37",
    districtId: "559",
    name: "Huyện Tuy An",
  },
  {
    cityId: "37",
    districtId: "560",
    name: "Huyện Sơn Hòa",
  },
  {
    cityId: "37",
    districtId: "561",
    name: "Huyện Sông Hinh",
  },
  {
    cityId: "37",
    districtId: "562",
    name: "Huyện Tây Hoà",
  },
  {
    cityId: "37",
    districtId: "563",
    name: "Huyện Phú Hoà",
  },
  {
    cityId: "37",
    districtId: "564",
    name: "Thị xã Đông Hòa",
  },
  {
    cityId: "38",
    districtId: "568",
    name: "TP. Nha Trang",
  },
  {
    cityId: "38",
    districtId: "569",
    name: "TP. Cam Ranh",
  },
  {
    cityId: "38",
    districtId: "570",
    name: "Huyện Cam Lâm",
  },
  {
    cityId: "38",
    districtId: "571",
    name: "Huyện Vạn Ninh",
  },
  {
    cityId: "38",
    districtId: "572",
    name: "Thị xã Ninh Hòa",
  },
  {
    cityId: "38",
    districtId: "573",
    name: "Huyện Khánh Vĩnh",
  },
  {
    cityId: "38",
    districtId: "574",
    name: "Huyện Diên Khánh",
  },
  {
    cityId: "38",
    districtId: "575",
    name: "Huyện Khánh Sơn",
  },
  {
    cityId: "38",
    districtId: "576",
    name: "Huyện Trường Sa",
  },
  {
    cityId: "39",
    districtId: "582",
    name: "TP. Phan Rang-Tháp Chàm",
  },
  {
    cityId: "39",
    districtId: "584",
    name: "Huyện Bác Ái",
  },
  {
    cityId: "39",
    districtId: "585",
    name: "Huyện Ninh Sơn",
  },
  {
    cityId: "39",
    districtId: "586",
    name: "Huyện Ninh Hải",
  },
  {
    cityId: "39",
    districtId: "587",
    name: "Huyện Ninh Phước",
  },
  {
    cityId: "39",
    districtId: "588",
    name: "Huyện Thuận Bắc",
  },
  {
    cityId: "39",
    districtId: "589",
    name: "Huyện Thuận Nam",
  },
  {
    cityId: "40",
    districtId: "593",
    name: "TP. Phan Thiết",
  },
  {
    cityId: "40",
    districtId: "594",
    name: "Thị xã La Gi",
  },
  {
    cityId: "40",
    districtId: "595",
    name: "Huyện Tuy Phong",
  },
  {
    cityId: "40",
    districtId: "596",
    name: "Huyện Bắc Bình",
  },
  {
    cityId: "40",
    districtId: "597",
    name: "Huyện Hàm Thuận Bắc",
  },
  {
    cityId: "40",
    districtId: "598",
    name: "Huyện Hàm Thuận Nam",
  },
  {
    cityId: "40",
    districtId: "599",
    name: "Huyện Tánh Linh",
  },
  {
    cityId: "40",
    districtId: "600",
    name: "Huyện Đức Linh",
  },
  {
    cityId: "40",
    districtId: "601",
    name: "Huyện Hàm Tân",
  },
  {
    cityId: "40",
    districtId: "602",
    name: "Huyện Phú Quí",
  },
  {
    cityId: "42",
    districtId: "608",
    name: "TP. Kon Tum",
  },
  {
    cityId: "42",
    districtId: "610",
    name: "Huyện Đắk Glei",
  },
  {
    cityId: "42",
    districtId: "611",
    name: "Huyện Ngọc Hồi",
  },
  {
    cityId: "42",
    districtId: "612",
    name: "Huyện Đắk Tô",
  },
  {
    cityId: "42",
    districtId: "613",
    name: "Huyện Kon Plông",
  },
  {
    cityId: "42",
    districtId: "614",
    name: "Huyện Kon Rẫy",
  },
  {
    cityId: "42",
    districtId: "615",
    name: "Huyện Đắk Hà",
  },
  {
    cityId: "42",
    districtId: "616",
    name: "Huyện Sa Thầy",
  },
  {
    cityId: "42",
    districtId: "617",
    name: "Huyện Tu Mơ Rông",
  },
  {
    cityId: "42",
    districtId: "618",
    name: "Huyện Ia H' Drai",
  },
  {
    cityId: "41",
    districtId: "622",
    name: "TP. Pleiku",
  },
  {
    cityId: "41",
    districtId: "623",
    name: "Thị xã An Khê",
  },
  {
    cityId: "41",
    districtId: "624",
    name: "Thị xã Ayun Pa",
  },
  {
    cityId: "41",
    districtId: "625",
    name: "Huyện KBang",
  },
  {
    cityId: "41",
    districtId: "626",
    name: "Huyện Đăk Đoa",
  },
  {
    cityId: "41",
    districtId: "627",
    name: "Huyện Chư Păh",
  },
  {
    cityId: "41",
    districtId: "628",
    name: "Huyện Ia Grai",
  },
  {
    cityId: "41",
    districtId: "629",
    name: "Huyện Mang Yang",
  },
  {
    cityId: "41",
    districtId: "630",
    name: "Huyện Kông Chro",
  },
  {
    cityId: "41",
    districtId: "631",
    name: "Huyện Đức Cơ",
  },
  {
    cityId: "41",
    districtId: "632",
    name: "Huyện Chư Prông",
  },
  {
    cityId: "41",
    districtId: "633",
    name: "Huyện Chư Sê",
  },
  {
    cityId: "41",
    districtId: "634",
    name: "Huyện Đăk Pơ",
  },
  {
    cityId: "41",
    districtId: "635",
    name: "Huyện Ia Pa",
  },
  {
    cityId: "41",
    districtId: "637",
    name: "Huyện Krông Pa",
  },
  {
    cityId: "41",
    districtId: "638",
    name: "Huyện Phú Thiện",
  },
  {
    cityId: "41",
    districtId: "639",
    name: "Huyện Chư Pưh",
  },
  {
    cityId: "43",
    districtId: "643",
    name: "TP. Buôn Ma Thuột",
  },
  {
    cityId: "43",
    districtId: "644",
    name: "Thị Xã Buôn Hồ",
  },
  {
    cityId: "43",
    districtId: "645",
    name: "Huyện Ea H'leo",
  },
  {
    cityId: "43",
    districtId: "646",
    name: "Huyện Ea Súp",
  },
  {
    cityId: "43",
    districtId: "647",
    name: "Huyện Buôn Đôn",
  },
  {
    cityId: "43",
    districtId: "648",
    name: "Huyện Cư M'gar",
  },
  {
    cityId: "43",
    districtId: "649",
    name: "Huyện Krông Búk",
  },
  {
    cityId: "43",
    districtId: "650",
    name: "Huyện Krông Năng",
  },
  {
    cityId: "43",
    districtId: "651",
    name: "Huyện Ea Kar",
  },
  {
    cityId: "43",
    districtId: "652",
    name: "Huyện M'Đrắk",
  },
  {
    cityId: "43",
    districtId: "653",
    name: "Huyện Krông Bông",
  },
  {
    cityId: "43",
    districtId: "654",
    name: "Huyện Krông Pắc",
  },
  {
    cityId: "43",
    districtId: "655",
    name: "Huyện Krông A Na",
  },
  {
    cityId: "43",
    districtId: "656",
    name: "Huyện Lắk",
  },
  {
    cityId: "43",
    districtId: "657",
    name: "Huyện Cư Kuin",
  },
  {
    cityId: "45",
    districtId: "660",
    name: "TP. Gia Nghĩa",
  },
  {
    cityId: "45",
    districtId: "661",
    name: "Huyện Đăk Glong",
  },
  {
    cityId: "45",
    districtId: "662",
    name: "Huyện Cư Jút",
  },
  {
    cityId: "45",
    districtId: "663",
    name: "Huyện Đắk Mil",
  },
  {
    cityId: "45",
    districtId: "664",
    name: "Huyện Krông Nô",
  },
  {
    cityId: "45",
    districtId: "665",
    name: "Huyện Đắk Song",
  },
  {
    cityId: "45",
    districtId: "666",
    name: "Huyện Đắk R'Lấp",
  },
  {
    cityId: "45",
    districtId: "667",
    name: "Huyện Tuy Đức",
  },
  {
    cityId: "44",
    districtId: "672",
    name: "TP. Đà Lạt",
  },
  {
    cityId: "44",
    districtId: "673",
    name: "TP. Bảo Lộc",
  },
  {
    cityId: "44",
    districtId: "674",
    name: "Huyện Đam Rông",
  },
  {
    cityId: "44",
    districtId: "675",
    name: "Huyện Lạc Dương",
  },
  {
    cityId: "44",
    districtId: "676",
    name: "Huyện Lâm Hà",
  },
  {
    cityId: "44",
    districtId: "677",
    name: "Huyện Đơn Dương",
  },
  {
    cityId: "44",
    districtId: "678",
    name: "Huyện Đức Trọng",
  },
  {
    cityId: "44",
    districtId: "679",
    name: "Huyện Di Linh",
  },
  {
    cityId: "44",
    districtId: "680",
    name: "Huyện Bảo Lâm",
  },
  {
    cityId: "44",
    districtId: "681",
    name: "Huyện Đạ Huoai",
  },
  {
    cityId: "44",
    districtId: "682",
    name: "Huyện Đạ Tẻh",
  },
  {
    cityId: "44",
    districtId: "683",
    name: "Huyện Cát Tiên",
  },
  {
    cityId: "48",
    districtId: "688",
    name: "Thị xã Phước Long",
  },
  {
    cityId: "48",
    districtId: "689",
    name: "TP. Đồng Xoài",
  },
  {
    cityId: "48",
    districtId: "690",
    name: "Thị xã Bình Long",
  },
  {
    cityId: "48",
    districtId: "691",
    name: "Huyện Bù Gia Mập",
  },
  {
    cityId: "48",
    districtId: "692",
    name: "Huyện Lộc Ninh",
  },
  {
    cityId: "48",
    districtId: "693",
    name: "Huyện Bù Đốp",
  },
  {
    cityId: "48",
    districtId: "694",
    name: "Huyện Hớn Quản",
  },
  {
    cityId: "48",
    districtId: "695",
    name: "Huyện Đồng Phú",
  },
  {
    cityId: "48",
    districtId: "696",
    name: "Huyện Bù Đăng",
  },
  {
    cityId: "48",
    districtId: "697",
    name: "Huyện Chơn Thành",
  },
  {
    cityId: "48",
    districtId: "698",
    name: "Huyện Phú Riềng",
  },
  {
    cityId: "49",
    districtId: "703",
    name: "TP. Tây Ninh",
  },
  {
    cityId: "49",
    districtId: "705",
    name: "Huyện Tân Biên",
  },
  {
    cityId: "49",
    districtId: "706",
    name: "Huyện Tân Châu",
  },
  {
    cityId: "49",
    districtId: "707",
    name: "Huyện Dương Minh Châu",
  },
  {
    cityId: "49",
    districtId: "708",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "49",
    districtId: "709",
    name: "Thị xã Hòa Thành",
  },
  {
    cityId: "49",
    districtId: "710",
    name: "Huyện Gò Dầu",
  },
  {
    cityId: "49",
    districtId: "711",
    name: "Huyện Bến Cầu",
  },
  {
    cityId: "49",
    districtId: "712",
    name: "Thị xã Trảng Bàng",
  },
  {
    cityId: "47",
    districtId: "718",
    name: "TP. Thủ Dầu Một",
  },
  {
    cityId: "47",
    districtId: "719",
    name: "Huyện Bàu Bàng",
  },
  {
    cityId: "47",
    districtId: "720",
    name: "Huyện Dầu Tiếng",
  },
  {
    cityId: "47",
    districtId: "721",
    name: "Thị xã Bến Cát",
  },
  {
    cityId: "47",
    districtId: "722",
    name: "Huyện Phú Giáo",
  },
  {
    cityId: "47",
    districtId: "723",
    name: "Thị xã Tân Uyên",
  },
  {
    cityId: "47",
    districtId: "724",
    name: "TP. Dĩ An",
  },
  {
    cityId: "47",
    districtId: "725",
    name: "TP. Thuận An",
  },
  {
    cityId: "47",
    districtId: "726",
    name: "Huyện Bắc Tân Uyên",
  },
  {
    cityId: "50",
    districtId: "731",
    name: "TP. Biên Hòa",
  },
  {
    cityId: "50",
    districtId: "732",
    name: "TP. Long Khánh",
  },
  {
    cityId: "50",
    districtId: "734",
    name: "Huyện Tân Phú",
  },
  {
    cityId: "50",
    districtId: "735",
    name: "Huyện Vĩnh Cửu",
  },
  {
    cityId: "50",
    districtId: "736",
    name: "Huyện Định Quán",
  },
  {
    cityId: "50",
    districtId: "737",
    name: "Huyện Trảng Bom",
  },
  {
    cityId: "50",
    districtId: "738",
    name: "Huyện Thống Nhất",
  },
  {
    cityId: "50",
    districtId: "739",
    name: "Huyện Cẩm Mỹ",
  },
  {
    cityId: "50",
    districtId: "740",
    name: "Huyện Long Thành",
  },
  {
    cityId: "50",
    districtId: "741",
    name: "Huyện Xuân Lộc",
  },
  {
    cityId: "50",
    districtId: "742",
    name: "Huyện Nhơn Trạch",
  },
  {
    cityId: "51",
    districtId: "747",
    name: "TP. Vũng Tàu",
  },
  {
    cityId: "51",
    districtId: "748",
    name: "TP. Bà Rịa",
  },
  {
    cityId: "51",
    districtId: "750",
    name: "Huyện Châu Đức",
  },
  {
    cityId: "51",
    districtId: "751",
    name: "Huyện Xuyên Mộc",
  },
  {
    cityId: "51",
    districtId: "752",
    name: "Huyện Long Điền",
  },
  {
    cityId: "51",
    districtId: "753",
    name: "Huyện Đất Đỏ",
  },
  {
    cityId: "51",
    districtId: "754",
    name: "Thị xã Phú Mỹ",
  },
  {
    cityId: "51",
    districtId: "755",
    name: "Huyện Côn Đảo",
  },
  {
    cityId: "46",
    districtId: "760",
    name: "Quận 1",
  },
  {
    cityId: "46",
    districtId: "761",
    name: "Quận 12",
  },
  {
    cityId: "46",
    districtId: "764",
    name: "Quận Gò Vấp",
  },
  {
    cityId: "46",
    districtId: "765",
    name: "Quận Bình Thạnh",
  },
  {
    cityId: "46",
    districtId: "766",
    name: "Quận Tân Bình",
  },
  {
    cityId: "46",
    districtId: "767",
    name: "Quận Tân Phú",
  },
  {
    cityId: "46",
    districtId: "768",
    name: "Quận Phú Nhuận",
  },
  {
    cityId: "46",
    districtId: "769",
    name: "TP. Thủ Đức",
  },
  {
    cityId: "46",
    districtId: "770",
    name: "Quận 3",
  },
  {
    cityId: "46",
    districtId: "771",
    name: "Quận 10",
  },
  {
    cityId: "46",
    districtId: "772",
    name: "Quận 11",
  },
  {
    cityId: "46",
    districtId: "773",
    name: "Quận 4",
  },
  {
    cityId: "46",
    districtId: "774",
    name: "Quận 5",
  },
  {
    cityId: "46",
    districtId: "775",
    name: "Quận 6",
  },
  {
    cityId: "46",
    districtId: "776",
    name: "Quận 8",
  },
  {
    cityId: "46",
    districtId: "777",
    name: "Quận Bình Tân",
  },
  {
    cityId: "46",
    districtId: "778",
    name: "Quận 7",
  },
  {
    cityId: "46",
    districtId: "783",
    name: "Huyện Củ Chi",
  },
  {
    cityId: "46",
    districtId: "784",
    name: "Huyện Hóc Môn",
  },
  {
    cityId: "46",
    districtId: "785",
    name: "Huyện Bình Chánh",
  },
  {
    cityId: "46",
    districtId: "786",
    name: "Huyện Nhà Bè",
  },
  {
    cityId: "46",
    districtId: "787",
    name: "Huyện Cần Giờ",
  },
  {
    cityId: "52",
    districtId: "794",
    name: "TP. Tân An",
  },
  {
    cityId: "52",
    districtId: "795",
    name: "Thị xã Kiến Tường",
  },
  {
    cityId: "52",
    districtId: "796",
    name: "Huyện Tân Hưng",
  },
  {
    cityId: "52",
    districtId: "797",
    name: "Huyện Vĩnh Hưng",
  },
  {
    cityId: "52",
    districtId: "798",
    name: "Huyện Mộc Hóa",
  },
  {
    cityId: "52",
    districtId: "799",
    name: "Huyện Tân Thạnh",
  },
  {
    cityId: "52",
    districtId: "800",
    name: "Huyện Thạnh Hóa",
  },
  {
    cityId: "52",
    districtId: "801",
    name: "Huyện Đức Huệ",
  },
  {
    cityId: "52",
    districtId: "802",
    name: "Huyện Đức Hòa",
  },
  {
    cityId: "52",
    districtId: "803",
    name: "Huyện Bến Lức",
  },
  {
    cityId: "52",
    districtId: "804",
    name: "Huyện Thủ Thừa",
  },
  {
    cityId: "52",
    districtId: "805",
    name: "Huyện Tân Trụ",
  },
  {
    cityId: "52",
    districtId: "806",
    name: "Huyện Cần Đước",
  },
  {
    cityId: "52",
    districtId: "807",
    name: "Huyện Cần Giuộc",
  },
  {
    cityId: "52",
    districtId: "808",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "54",
    districtId: "815",
    name: "TP. Mỹ Tho",
  },
  {
    cityId: "54",
    districtId: "816",
    name: "Thị xã Gò Công",
  },
  {
    cityId: "54",
    districtId: "817",
    name: "Thị xã Cai Lậy",
  },
  {
    cityId: "54",
    districtId: "818",
    name: "Huyện Tân Phước",
  },
  {
    cityId: "54",
    districtId: "819",
    name: "Huyện Cái Bè",
  },
  {
    cityId: "54",
    districtId: "820",
    name: "Huyện Cai Lậy",
  },
  {
    cityId: "54",
    districtId: "821",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "54",
    districtId: "822",
    name: "Huyện Chợ Gạo",
  },
  {
    cityId: "54",
    districtId: "823",
    name: "Huyện Gò Công Tây",
  },
  {
    cityId: "54",
    districtId: "824",
    name: "Huyện Gò Công Đông",
  },
  {
    cityId: "54",
    districtId: "825",
    name: "Huyện Tân Phú Đông",
  },
  {
    cityId: "55",
    districtId: "829",
    name: "TP. Bến Tre",
  },
  {
    cityId: "55",
    districtId: "831",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "55",
    districtId: "832",
    name: "Huyện Chợ Lách",
  },
  {
    cityId: "55",
    districtId: "833",
    name: "Huyện Mỏ Cày Nam",
  },
  {
    cityId: "55",
    districtId: "834",
    name: "Huyện Giồng Trôm",
  },
  {
    cityId: "55",
    districtId: "835",
    name: "Huyện Bình Đại",
  },
  {
    cityId: "55",
    districtId: "836",
    name: "Huyện Ba Tri",
  },
  {
    cityId: "55",
    districtId: "837",
    name: "Huyện Thạnh Phú",
  },
  {
    cityId: "55",
    districtId: "838",
    name: "Huyện Mỏ Cày Bắc",
  },
  {
    cityId: "59",
    districtId: "842",
    name: "TP. Trà Vinh",
  },
  {
    cityId: "59",
    districtId: "844",
    name: "Huyện Càng Long",
  },
  {
    cityId: "59",
    districtId: "845",
    name: "Huyện Cầu Kè",
  },
  {
    cityId: "59",
    districtId: "846",
    name: "Huyện Tiểu Cần",
  },
  {
    cityId: "59",
    districtId: "847",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "59",
    districtId: "848",
    name: "Huyện Cầu Ngang",
  },
  {
    cityId: "59",
    districtId: "849",
    name: "Huyện Trà Cú",
  },
  {
    cityId: "59",
    districtId: "850",
    name: "Huyện Duyên Hải",
  },
  {
    cityId: "59",
    districtId: "851",
    name: "Thị xã Duyên Hải",
  },
  {
    cityId: "58",
    districtId: "855",
    name: "TP. Vĩnh Long",
  },
  {
    cityId: "58",
    districtId: "857",
    name: "Huyện Long Hồ",
  },
  {
    cityId: "58",
    districtId: "858",
    name: "Huyện Mang Thít",
  },
  {
    cityId: "58",
    districtId: "859",
    name: "Huyện  Vũng Liêm",
  },
  {
    cityId: "58",
    districtId: "860",
    name: "Huyện Tam Bình",
  },
  {
    cityId: "58",
    districtId: "861",
    name: "Thị xã Bình Minh",
  },
  {
    cityId: "58",
    districtId: "862",
    name: "Huyện Trà Ôn",
  },
  {
    cityId: "58",
    districtId: "863",
    name: "Huyện Bình Tân",
  },
  {
    cityId: "53",
    districtId: "866",
    name: "TP. Cao Lãnh",
  },
  {
    cityId: "53",
    districtId: "867",
    name: "TP. Sa Đéc",
  },
  {
    cityId: "53",
    districtId: "868",
    name: "TP. Hồng Ngự",
  },
  {
    cityId: "53",
    districtId: "869",
    name: "Huyện Tân Hồng",
  },
  {
    cityId: "53",
    districtId: "870",
    name: "Huyện Hồng Ngự",
  },
  {
    cityId: "53",
    districtId: "871",
    name: "Huyện Tam Nông",
  },
  {
    cityId: "53",
    districtId: "872",
    name: "Huyện Tháp Mười",
  },
  {
    cityId: "53",
    districtId: "873",
    name: "Huyện Cao Lãnh",
  },
  {
    cityId: "53",
    districtId: "874",
    name: "Huyện Thanh Bình",
  },
  {
    cityId: "53",
    districtId: "875",
    name: "Huyện Lấp Vò",
  },
  {
    cityId: "53",
    districtId: "876",
    name: "Huyện Lai Vung",
  },
  {
    cityId: "53",
    districtId: "877",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "56",
    districtId: "883",
    name: "TP. Long Xuyên",
  },
  {
    cityId: "56",
    districtId: "884",
    name: "TP. Châu Đốc",
  },
  {
    cityId: "56",
    districtId: "886",
    name: "Huyện An Phú",
  },
  {
    cityId: "56",
    districtId: "887",
    name: "Thị xã Tân Châu",
  },
  {
    cityId: "56",
    districtId: "888",
    name: "Huyện Phú Tân",
  },
  {
    cityId: "56",
    districtId: "889",
    name: "Huyện Châu Phú",
  },
  {
    cityId: "56",
    districtId: "890",
    name: "Huyện Tịnh Biên",
  },
  {
    cityId: "56",
    districtId: "891",
    name: "Huyện Tri Tôn",
  },
  {
    cityId: "56",
    districtId: "892",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "56",
    districtId: "893",
    name: "Huyện Chợ Mới",
  },
  {
    cityId: "56",
    districtId: "894",
    name: "Huyện Thoại Sơn",
  },
  {
    cityId: "60",
    districtId: "899",
    name: "TP. Rạch Giá",
  },
  {
    cityId: "60",
    districtId: "900",
    name: "TP. Hà Tiên",
  },
  {
    cityId: "60",
    districtId: "902",
    name: "Huyện Kiên Lương",
  },
  {
    cityId: "60",
    districtId: "903",
    name: "Huyện Hòn Đất",
  },
  {
    cityId: "60",
    districtId: "904",
    name: "Huyện Tân Hiệp",
  },
  {
    cityId: "60",
    districtId: "905",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "60",
    districtId: "906",
    name: "Huyện Giồng Riềng",
  },
  {
    cityId: "60",
    districtId: "907",
    name: "Huyện Gò Quao",
  },
  {
    cityId: "60",
    districtId: "908",
    name: "Huyện An Biên",
  },
  {
    cityId: "60",
    districtId: "909",
    name: "Huyện An Minh",
  },
  {
    cityId: "60",
    districtId: "910",
    name: "Huyện Vĩnh Thuận",
  },
  {
    cityId: "60",
    districtId: "911",
    name: "TP. Phú Quốc",
  },
  {
    cityId: "60",
    districtId: "912",
    name: "Huyện Kiên Hải",
  },
  {
    cityId: "60",
    districtId: "913",
    name: "Huyện U Minh Thượng",
  },
  {
    cityId: "60",
    districtId: "914",
    name: "Huyện Giang Thành",
  },
  {
    cityId: "57",
    districtId: "916",
    name: "Quận Ninh Kiều",
  },
  {
    cityId: "57",
    districtId: "917",
    name: "Quận Ô Môn",
  },
  {
    cityId: "57",
    districtId: "918",
    name: "Quận Bình Thuỷ",
  },
  {
    cityId: "57",
    districtId: "919",
    name: "Quận Cái Răng",
  },
  {
    cityId: "57",
    districtId: "923",
    name: "Quận Thốt Nốt",
  },
  {
    cityId: "57",
    districtId: "924",
    name: "Huyện Vĩnh Thạnh",
  },
  {
    cityId: "57",
    districtId: "925",
    name: "Huyện Cờ Đỏ",
  },
  {
    cityId: "57",
    districtId: "926",
    name: "Huyện Phong Điền",
  },
  {
    cityId: "57",
    districtId: "927",
    name: "Huyện Thới Lai",
  },
  {
    cityId: "61",
    districtId: "930",
    name: "TP. Vị Thanh",
  },
  {
    cityId: "61",
    districtId: "931",
    name: "TP. Ngã Bảy",
  },
  {
    cityId: "61",
    districtId: "932",
    name: "Huyện Châu Thành A",
  },
  {
    cityId: "61",
    districtId: "933",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "61",
    districtId: "934",
    name: "Huyện Phụng Hiệp",
  },
  {
    cityId: "61",
    districtId: "935",
    name: "Huyện Vị Thuỷ",
  },
  {
    cityId: "61",
    districtId: "936",
    name: "Huyện Long Mỹ",
  },
  {
    cityId: "61",
    districtId: "937",
    name: "Thị xã Long Mỹ",
  },
  {
    cityId: "62",
    districtId: "941",
    name: "TP. Sóc Trăng",
  },
  {
    cityId: "62",
    districtId: "942",
    name: "Huyện Châu Thành",
  },
  {
    cityId: "62",
    districtId: "943",
    name: "Huyện Kế Sách",
  },
  {
    cityId: "62",
    districtId: "944",
    name: "Huyện Mỹ Tú",
  },
  {
    cityId: "62",
    districtId: "945",
    name: "Huyện Cù Lao Dung",
  },
  {
    cityId: "62",
    districtId: "946",
    name: "Huyện Long Phú",
  },
  {
    cityId: "62",
    districtId: "947",
    name: "Huyện Mỹ Xuyên",
  },
  {
    cityId: "62",
    districtId: "948",
    name: "Thị xã Ngã Năm",
  },
  {
    cityId: "62",
    districtId: "949",
    name: "Huyện Thạnh Trị",
  },
  {
    cityId: "62",
    districtId: "950",
    name: "Thị xã Vĩnh Châu",
  },
  {
    cityId: "62",
    districtId: "951",
    name: "Huyện Trần Đề",
  },
  {
    cityId: "63",
    districtId: "954",
    name: "TP. Bạc Liêu",
  },
  {
    cityId: "63",
    districtId: "956",
    name: "Huyện Hồng Dân",
  },
  {
    cityId: "63",
    districtId: "957",
    name: "Huyện Phước Long",
  },
  {
    cityId: "63",
    districtId: "958",
    name: "Huyện Vĩnh Lợi",
  },
  {
    cityId: "63",
    districtId: "959",
    name: "Thị xã Giá Rai",
  },
  {
    cityId: "63",
    districtId: "960",
    name: "Huyện Đông Hải",
  },
  {
    cityId: "63",
    districtId: "961",
    name: "Huyện Hoà Bình",
  },
  {
    cityId: "64",
    districtId: "964",
    name: "TP. Cà Mau",
  },
  {
    cityId: "64",
    districtId: "966",
    name: "Huyện U Minh",
  },
  {
    cityId: "64",
    districtId: "967",
    name: "Huyện Thới Bình",
  },
  {
    cityId: "64",
    districtId: "968",
    name: "Huyện Trần Văn Thời",
  },
  {
    cityId: "64",
    districtId: "969",
    name: "Huyện Cái Nước",
  },
  {
    cityId: "64",
    districtId: "970",
    name: "Huyện Đầm Dơi",
  },
  {
    cityId: "64",
    districtId: "971",
    name: "Huyện Năm Căn",
  },
  {
    cityId: "64",
    districtId: "972",
    name: "Huyện Phú Tân",
  },
  {
    cityId: "64",
    districtId: "973",
    name: "Huyện Ngọc Hiển",
  },
];

const wart = [
  {
    districtId: "001",
    wardId: "00001",
    name: "Phường Phúc Xá",
  },
  {
    districtId: "001",
    wardId: "00004",
    name: "Phường Trúc Bạch",
  },
  {
    districtId: "001",
    wardId: "00006",
    name: "Phường Vĩnh Phúc",
  },
  {
    districtId: "001",
    wardId: "00007",
    name: "Phường Cống Vị",
  },
  {
    districtId: "001",
    wardId: "00008",
    name: "Phường Liễu Giai",
  },
  {
    districtId: "001",
    wardId: "00010",
    name: "Phường Nguyễn Trung Trực",
  },
  {
    districtId: "001",
    wardId: "00013",
    name: "Phường Quán Thánh",
  },
  {
    districtId: "001",
    wardId: "00016",
    name: "Phường Ngọc Hà",
  },
  {
    districtId: "001",
    wardId: "00019",
    name: "Phường Điện Biên",
  },
  {
    districtId: "001",
    wardId: "00022",
    name: "Phường Đội Cấn",
  },
  {
    districtId: "001",
    wardId: "00025",
    name: "Phường Ngọc Khánh",
  },
  {
    districtId: "001",
    wardId: "00028",
    name: "Phường Kim Mã",
  },
  {
    districtId: "001",
    wardId: "00031",
    name: "Phường Giảng Võ",
  },
  {
    districtId: "001",
    wardId: "00034",
    name: "Phường Thành Công",
  },
  {
    districtId: "002",
    wardId: "00037",
    name: "Phường Phúc Tân",
  },
  {
    districtId: "002",
    wardId: "00040",
    name: "Phường Đồng Xuân",
  },
  {
    districtId: "002",
    wardId: "00043",
    name: "Phường Hàng Mã",
  },
  {
    districtId: "002",
    wardId: "00046",
    name: "Phường Hàng Buồm",
  },
  {
    districtId: "002",
    wardId: "00049",
    name: "Phường Hàng Đào",
  },
  {
    districtId: "002",
    wardId: "00052",
    name: "Phường Hàng Bồ",
  },
  {
    districtId: "002",
    wardId: "00055",
    name: "Phường Cửa Đông",
  },
  {
    districtId: "002",
    wardId: "00058",
    name: "Phường Lý Thái Tổ",
  },
  {
    districtId: "002",
    wardId: "00061",
    name: "Phường Hàng Bạc",
  },
  {
    districtId: "002",
    wardId: "00064",
    name: "Phường Hàng Gai",
  },
  {
    districtId: "002",
    wardId: "00067",
    name: "Phường Chương Dương",
  },
  {
    districtId: "002",
    wardId: "00070",
    name: "Phường Hàng Trống",
  },
  {
    districtId: "002",
    wardId: "00073",
    name: "Phường Cửa Nam",
  },
  {
    districtId: "002",
    wardId: "00076",
    name: "Phường Hàng Bông",
  },
  {
    districtId: "002",
    wardId: "00079",
    name: "Phường Tràng Tiền",
  },
  {
    districtId: "002",
    wardId: "00082",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "002",
    wardId: "00085",
    name: "Phường Phan Chu Trinh",
  },
  {
    districtId: "002",
    wardId: "00088",
    name: "Phường Hàng Bài",
  },
  {
    districtId: "003",
    wardId: "00091",
    name: "Phường Phú Thượng",
  },
  {
    districtId: "003",
    wardId: "00094",
    name: "Phường Nhật Tân",
  },
  {
    districtId: "003",
    wardId: "00097",
    name: "Phường Tứ Liên",
  },
  {
    districtId: "003",
    wardId: "00100",
    name: "Phường Quảng An",
  },
  {
    districtId: "003",
    wardId: "00103",
    name: "Phường Xuân La",
  },
  {
    districtId: "003",
    wardId: "00106",
    name: "Phường Yên Phụ",
  },
  {
    districtId: "003",
    wardId: "00109",
    name: "Phường Bưởi",
  },
  {
    districtId: "003",
    wardId: "00112",
    name: "Phường Thụy Khuê",
  },
  {
    districtId: "004",
    wardId: "00115",
    name: "Phường Thượng Thanh",
  },
  {
    districtId: "004",
    wardId: "00118",
    name: "Phường Ngọc Thụy",
  },
  {
    districtId: "004",
    wardId: "00121",
    name: "Phường Giang Biên",
  },
  {
    districtId: "004",
    wardId: "00124",
    name: "Phường Đức Giang",
  },
  {
    districtId: "004",
    wardId: "00127",
    name: "Phường Việt Hưng",
  },
  {
    districtId: "004",
    wardId: "00130",
    name: "Phường Gia Thụy",
  },
  {
    districtId: "004",
    wardId: "00133",
    name: "Phường Ngọc Lâm",
  },
  {
    districtId: "004",
    wardId: "00136",
    name: "Phường Phúc Lợi",
  },
  {
    districtId: "004",
    wardId: "00139",
    name: "Phường Bồ Đề",
  },
  {
    districtId: "004",
    wardId: "00142",
    name: "Phường Sài Đồng",
  },
  {
    districtId: "004",
    wardId: "00145",
    name: "Phường Long Biên",
  },
  {
    districtId: "004",
    wardId: "00148",
    name: "Phường Thạch Bàn",
  },
  {
    districtId: "004",
    wardId: "00151",
    name: "Phường Phúc Đồng",
  },
  {
    districtId: "004",
    wardId: "00154",
    name: "Phường Cự Khối",
  },
  {
    districtId: "005",
    wardId: "00157",
    name: "Phường Nghĩa Đô",
  },
  {
    districtId: "005",
    wardId: "00160",
    name: "Phường Nghĩa Tân",
  },
  {
    districtId: "005",
    wardId: "00163",
    name: "Phường Mai Dịch",
  },
  {
    districtId: "005",
    wardId: "00166",
    name: "Phường Dịch Vọng",
  },
  {
    districtId: "005",
    wardId: "00167",
    name: "Phường Dịch Vọng Hậu",
  },
  {
    districtId: "005",
    wardId: "00169",
    name: "Phường Quan Hoa",
  },
  {
    districtId: "005",
    wardId: "00172",
    name: "Phường Yên Hoà",
  },
  {
    districtId: "005",
    wardId: "00175",
    name: "Phường Trung Hoà",
  },
  {
    districtId: "006",
    wardId: "00178",
    name: "Phường Cát Linh",
  },
  {
    districtId: "006",
    wardId: "00181",
    name: "Phường Văn Miếu",
  },
  {
    districtId: "006",
    wardId: "00184",
    name: "Phường Quốc Tử Giám",
  },
  {
    districtId: "006",
    wardId: "00187",
    name: "Phường Láng Thượng",
  },
  {
    districtId: "006",
    wardId: "00190",
    name: "Phường Ô Chợ Dừa",
  },
  {
    districtId: "006",
    wardId: "00193",
    name: "Phường Văn Chương",
  },
  {
    districtId: "006",
    wardId: "00196",
    name: "Phường Hàng Bột",
  },
  {
    districtId: "006",
    wardId: "00199",
    name: "Phường Láng Hạ",
  },
  {
    districtId: "006",
    wardId: "00202",
    name: "Phường Khâm Thiên",
  },
  {
    districtId: "006",
    wardId: "00205",
    name: "Phường Thổ Quan",
  },
  {
    districtId: "006",
    wardId: "00208",
    name: "Phường Nam Đồng",
  },
  {
    districtId: "006",
    wardId: "00211",
    name: "Phường Trung Phụng",
  },
  {
    districtId: "006",
    wardId: "00214",
    name: "Phường Quang Trung",
  },
  {
    districtId: "006",
    wardId: "00217",
    name: "Phường Trung Liệt",
  },
  {
    districtId: "006",
    wardId: "00220",
    name: "Phường Phương Liên",
  },
  {
    districtId: "006",
    wardId: "00223",
    name: "Phường Thịnh Quang",
  },
  {
    districtId: "006",
    wardId: "00226",
    name: "Phường Trung Tự",
  },
  {
    districtId: "006",
    wardId: "00229",
    name: "Phường Kim Liên",
  },
  {
    districtId: "006",
    wardId: "00232",
    name: "Phường Phương Mai",
  },
  {
    districtId: "006",
    wardId: "00235",
    name: "Phường Ngã Tư Sở",
  },
  {
    districtId: "006",
    wardId: "00238",
    name: "Phường Khương Thượng",
  },
  {
    districtId: "007",
    wardId: "00241",
    name: "Phường Nguyễn Du",
  },
  {
    districtId: "007",
    wardId: "00244",
    name: "Phường Bạch Đằng",
  },
  {
    districtId: "007",
    wardId: "00247",
    name: "Phường Phạm Đình Hổ",
  },
  {
    districtId: "007",
    wardId: "00256",
    name: "Phường Lê Đại Hành",
  },
  {
    districtId: "007",
    wardId: "00259",
    name: "Phường Đồng Nhân",
  },
  {
    districtId: "007",
    wardId: "00262",
    name: "Phường Phố Huế",
  },
  {
    districtId: "007",
    wardId: "00265",
    name: "Phường Đống Mác",
  },
  {
    districtId: "007",
    wardId: "00268",
    name: "Phường Thanh Lương",
  },
  {
    districtId: "007",
    wardId: "00271",
    name: "Phường Thanh Nhàn",
  },
  {
    districtId: "007",
    wardId: "00274",
    name: "Phường Cầu Dền",
  },
  {
    districtId: "007",
    wardId: "00277",
    name: "Phường Bách Khoa",
  },
  {
    districtId: "007",
    wardId: "00280",
    name: "Phường Đồng Tâm",
  },
  {
    districtId: "007",
    wardId: "00283",
    name: "Phường Vĩnh Tuy",
  },
  {
    districtId: "007",
    wardId: "00286",
    name: "Phường Bạch Mai",
  },
  {
    districtId: "007",
    wardId: "00289",
    name: "Phường Quỳnh Mai",
  },
  {
    districtId: "007",
    wardId: "00292",
    name: "Phường Quỳnh Lôi",
  },
  {
    districtId: "007",
    wardId: "00295",
    name: "Phường Minh Khai",
  },
  {
    districtId: "007",
    wardId: "00298",
    name: "Phường Trương Định",
  },
  {
    districtId: "008",
    wardId: "00301",
    name: "Phường Thanh Trì",
  },
  {
    districtId: "008",
    wardId: "00304",
    name: "Phường Vĩnh Hưng",
  },
  {
    districtId: "008",
    wardId: "00307",
    name: "Phường Định Công",
  },
  {
    districtId: "008",
    wardId: "00310",
    name: "Phường Mai Động",
  },
  {
    districtId: "008",
    wardId: "00313",
    name: "Phường Tương Mai",
  },
  {
    districtId: "008",
    wardId: "00316",
    name: "Phường Đại Kim",
  },
  {
    districtId: "008",
    wardId: "00319",
    name: "Phường Tân Mai",
  },
  {
    districtId: "008",
    wardId: "00322",
    name: "Phường Hoàng Văn Thụ",
  },
  {
    districtId: "008",
    wardId: "00325",
    name: "Phường Giáp Bát",
  },
  {
    districtId: "008",
    wardId: "00328",
    name: "Phường Lĩnh Nam",
  },
  {
    districtId: "008",
    wardId: "00331",
    name: "Phường Thịnh Liệt",
  },
  {
    districtId: "008",
    wardId: "00334",
    name: "Phường Trần Phú",
  },
  {
    districtId: "008",
    wardId: "00337",
    name: "Phường Hoàng Liệt",
  },
  {
    districtId: "008",
    wardId: "00340",
    name: "Phường Yên Sở",
  },
  {
    districtId: "009",
    wardId: "00343",
    name: "Phường Nhân Chính",
  },
  {
    districtId: "009",
    wardId: "00346",
    name: "Phường Thượng Đình",
  },
  {
    districtId: "009",
    wardId: "00349",
    name: "Phường Khương Trung",
  },
  {
    districtId: "009",
    wardId: "00352",
    name: "Phường Khương Mai",
  },
  {
    districtId: "009",
    wardId: "00355",
    name: "Phường Thanh Xuân Trung",
  },
  {
    districtId: "009",
    wardId: "00358",
    name: "Phường Phương Liệt",
  },
  {
    districtId: "009",
    wardId: "00361",
    name: "Phường Hạ Đình",
  },
  {
    districtId: "009",
    wardId: "00364",
    name: "Phường Khương Đình",
  },
  {
    districtId: "009",
    wardId: "00367",
    name: "Phường Thanh Xuân Bắc",
  },
  {
    districtId: "009",
    wardId: "00370",
    name: "Phường Thanh Xuân Nam",
  },
  {
    districtId: "009",
    wardId: "00373",
    name: "Phường Kim Giang",
  },
  {
    districtId: "016",
    wardId: "00376",
    name: "Thị trấn Sóc Sơn",
  },
  {
    districtId: "016",
    wardId: "00379",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "016",
    wardId: "00382",
    name: "Xã Minh Trí",
  },
  {
    districtId: "016",
    wardId: "00385",
    name: "Xã Hồng Kỳ",
  },
  {
    districtId: "016",
    wardId: "00388",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "016",
    wardId: "00391",
    name: "Xã Trung Giã",
  },
  {
    districtId: "016",
    wardId: "00394",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "016",
    wardId: "00397",
    name: "Xã Minh Phú",
  },
  {
    districtId: "016",
    wardId: "00400",
    name: "Xã Phù Linh",
  },
  {
    districtId: "016",
    wardId: "00403",
    name: "Xã Bắc Phú",
  },
  {
    districtId: "016",
    wardId: "00406",
    name: "Xã Tân Minh",
  },
  {
    districtId: "016",
    wardId: "00409",
    name: "Xã Quang Tiến",
  },
  {
    districtId: "016",
    wardId: "00412",
    name: "Xã Hiền Ninh",
  },
  {
    districtId: "016",
    wardId: "00415",
    name: "Xã Tân Dân",
  },
  {
    districtId: "016",
    wardId: "00418",
    name: "Xã Tiên Dược",
  },
  {
    districtId: "016",
    wardId: "00421",
    name: "Xã Việt Long",
  },
  {
    districtId: "016",
    wardId: "00424",
    name: "Xã Xuân Giang",
  },
  {
    districtId: "016",
    wardId: "00427",
    name: "Xã Mai Đình",
  },
  {
    districtId: "016",
    wardId: "00430",
    name: "Xã Đức Hoà",
  },
  {
    districtId: "016",
    wardId: "00433",
    name: "Xã Thanh Xuân",
  },
  {
    districtId: "016",
    wardId: "00436",
    name: "Xã Đông Xuân",
  },
  {
    districtId: "016",
    wardId: "00439",
    name: "Xã Kim Lũ",
  },
  {
    districtId: "016",
    wardId: "00442",
    name: "Xã Phú Cường",
  },
  {
    districtId: "016",
    wardId: "00445",
    name: "Xã Phú Minh",
  },
  {
    districtId: "016",
    wardId: "00448",
    name: "Xã Phù Lỗ",
  },
  {
    districtId: "016",
    wardId: "00451",
    name: "Xã Xuân Thu",
  },
  {
    districtId: "017",
    wardId: "00454",
    name: "Thị trấn Đông Anh",
  },
  {
    districtId: "017",
    wardId: "00457",
    name: "Xã Xuân Nộn",
  },
  {
    districtId: "017",
    wardId: "00460",
    name: "Xã Thuỵ Lâm",
  },
  {
    districtId: "017",
    wardId: "00463",
    name: "Xã Bắc Hồng",
  },
  {
    districtId: "017",
    wardId: "00466",
    name: "Xã Nguyên Khê",
  },
  {
    districtId: "017",
    wardId: "00469",
    name: "Xã Nam Hồng",
  },
  {
    districtId: "017",
    wardId: "00472",
    name: "Xã Tiên Dương",
  },
  {
    districtId: "017",
    wardId: "00475",
    name: "Xã Vân Hà",
  },
  {
    districtId: "017",
    wardId: "00478",
    name: "Xã Uy Nỗ",
  },
  {
    districtId: "017",
    wardId: "00481",
    name: "Xã Vân Nội",
  },
  {
    districtId: "017",
    wardId: "00484",
    name: "Xã Liên Hà",
  },
  {
    districtId: "017",
    wardId: "00487",
    name: "Xã Việt Hùng",
  },
  {
    districtId: "017",
    wardId: "00490",
    name: "Xã Kim Nỗ",
  },
  {
    districtId: "017",
    wardId: "00493",
    name: "Xã Kim Chung",
  },
  {
    districtId: "017",
    wardId: "00496",
    name: "Xã Dục Tú",
  },
  {
    districtId: "017",
    wardId: "00499",
    name: "Xã Đại Mạch",
  },
  {
    districtId: "017",
    wardId: "00502",
    name: "Xã Vĩnh Ngọc",
  },
  {
    districtId: "017",
    wardId: "00505",
    name: "Xã Cổ Loa",
  },
  {
    districtId: "017",
    wardId: "00508",
    name: "Xã Hải Bối",
  },
  {
    districtId: "017",
    wardId: "00511",
    name: "Xã Xuân Canh",
  },
  {
    districtId: "017",
    wardId: "00514",
    name: "Xã Võng La",
  },
  {
    districtId: "017",
    wardId: "00517",
    name: "Xã Tàm Xá",
  },
  {
    districtId: "017",
    wardId: "00520",
    name: "Xã Mai Lâm",
  },
  {
    districtId: "017",
    wardId: "00523",
    name: "Xã Đông Hội",
  },
  {
    districtId: "018",
    wardId: "00526",
    name: "Thị trấn Yên Viên",
  },
  {
    districtId: "018",
    wardId: "00529",
    name: "Xã Yên Thường",
  },
  {
    districtId: "018",
    wardId: "00532",
    name: "Xã Yên Viên",
  },
  {
    districtId: "018",
    wardId: "00535",
    name: "Xã Ninh Hiệp",
  },
  {
    districtId: "018",
    wardId: "00538",
    name: "Xã Đình Xuyên",
  },
  {
    districtId: "018",
    wardId: "00541",
    name: "Xã Dương Hà",
  },
  {
    districtId: "018",
    wardId: "00544",
    name: "Xã Phù Đổng",
  },
  {
    districtId: "018",
    wardId: "00547",
    name: "Xã Trung Mầu",
  },
  {
    districtId: "018",
    wardId: "00550",
    name: "Xã Lệ Chi",
  },
  {
    districtId: "018",
    wardId: "00553",
    name: "Xã Cổ Bi",
  },
  {
    districtId: "018",
    wardId: "00556",
    name: "Xã Đặng Xá",
  },
  {
    districtId: "018",
    wardId: "00559",
    name: "Xã Phú Thị",
  },
  {
    districtId: "018",
    wardId: "00562",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "018",
    wardId: "00565",
    name: "Thị trấn Trâu Quỳ",
  },
  {
    districtId: "018",
    wardId: "00568",
    name: "Xã Dương Quang",
  },
  {
    districtId: "018",
    wardId: "00571",
    name: "Xã Dương Xá",
  },
  {
    districtId: "018",
    wardId: "00574",
    name: "Xã Đông Dư",
  },
  {
    districtId: "018",
    wardId: "00577",
    name: "Xã Đa Tốn",
  },
  {
    districtId: "018",
    wardId: "00580",
    name: "Xã Kiêu Kỵ",
  },
  {
    districtId: "018",
    wardId: "00583",
    name: "Xã Bát Tràng",
  },
  {
    districtId: "018",
    wardId: "00586",
    name: "Xã Kim Lan",
  },
  {
    districtId: "018",
    wardId: "00589",
    name: "Xã Văn Đức",
  },
  {
    districtId: "019",
    wardId: "00592",
    name: "Phường Cầu Diễn",
  },
  {
    districtId: "019",
    wardId: "00622",
    name: "Phường Xuân Phương",
  },
  {
    districtId: "019",
    wardId: "00623",
    name: "Phường Phương Canh",
  },
  {
    districtId: "019",
    wardId: "00625",
    name: "Phường Mỹ Đình 1",
  },
  {
    districtId: "019",
    wardId: "00626",
    name: "Phường Mỹ Đình 2",
  },
  {
    districtId: "019",
    wardId: "00628",
    name: "Phường Tây Mỗ",
  },
  {
    districtId: "019",
    wardId: "00631",
    name: "Phường Mễ Trì",
  },
  {
    districtId: "019",
    wardId: "00632",
    name: "Phường Phú Đô",
  },
  {
    districtId: "019",
    wardId: "00634",
    name: "Phường Đại Mỗ",
  },
  {
    districtId: "019",
    wardId: "00637",
    name: "Phường Trung Văn",
  },
  {
    districtId: "020",
    wardId: "00640",
    name: "Thị trấn Văn Điển",
  },
  {
    districtId: "020",
    wardId: "00643",
    name: "Xã Tân Triều",
  },
  {
    districtId: "020",
    wardId: "00646",
    name: "Xã Thanh Liệt",
  },
  {
    districtId: "020",
    wardId: "00649",
    name: "Xã Tả Thanh Oai",
  },
  {
    districtId: "020",
    wardId: "00652",
    name: "Xã Hữu Hoà",
  },
  {
    districtId: "020",
    wardId: "00655",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "020",
    wardId: "00658",
    name: "Xã Tứ Hiệp",
  },
  {
    districtId: "020",
    wardId: "00661",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "020",
    wardId: "00664",
    name: "Xã Vĩnh Quỳnh",
  },
  {
    districtId: "020",
    wardId: "00667",
    name: "Xã Ngũ Hiệp",
  },
  {
    districtId: "020",
    wardId: "00670",
    name: "Xã Duyên Hà",
  },
  {
    districtId: "020",
    wardId: "00673",
    name: "Xã Ngọc Hồi",
  },
  {
    districtId: "020",
    wardId: "00676",
    name: "Xã Vạn Phúc",
  },
  {
    districtId: "020",
    wardId: "00679",
    name: "Xã Đại áng",
  },
  {
    districtId: "020",
    wardId: "00682",
    name: "Xã Liên Ninh",
  },
  {
    districtId: "020",
    wardId: "00685",
    name: "Xã Đông Mỹ",
  },
  {
    districtId: "021",
    wardId: "00595",
    name: "Phường Thượng Cát",
  },
  {
    districtId: "021",
    wardId: "00598",
    name: "Phường Liên Mạc",
  },
  {
    districtId: "021",
    wardId: "00601",
    name: "Phường Đông Ngạc",
  },
  {
    districtId: "021",
    wardId: "00602",
    name: "Phường Đức Thắng",
  },
  {
    districtId: "021",
    wardId: "00604",
    name: "Phường Thụy Phương",
  },
  {
    districtId: "021",
    wardId: "00607",
    name: "Phường Tây Tựu",
  },
  {
    districtId: "021",
    wardId: "00610",
    name: "Phường Xuân Đỉnh",
  },
  {
    districtId: "021",
    wardId: "00611",
    name: "Phường Xuân Tảo",
  },
  {
    districtId: "021",
    wardId: "00613",
    name: "Phường Minh Khai",
  },
  {
    districtId: "021",
    wardId: "00616",
    name: "Phường Cổ Nhuế 1",
  },
  {
    districtId: "021",
    wardId: "00617",
    name: "Phường Cổ Nhuế 2",
  },
  {
    districtId: "021",
    wardId: "00619",
    name: "Phường Phú Diễn",
  },
  {
    districtId: "021",
    wardId: "00620",
    name: "Phường Phúc Diễn",
  },
  {
    districtId: "250",
    wardId: "08973",
    name: "Thị trấn Chi Đông",
  },
  {
    districtId: "250",
    wardId: "08974",
    name: "Xã Đại Thịnh",
  },
  {
    districtId: "250",
    wardId: "08977",
    name: "Xã Kim Hoa",
  },
  {
    districtId: "250",
    wardId: "08980",
    name: "Xã Thạch Đà",
  },
  {
    districtId: "250",
    wardId: "08983",
    name: "Xã Tiến Thắng",
  },
  {
    districtId: "250",
    wardId: "08986",
    name: "Xã Tự Lập",
  },
  {
    districtId: "250",
    wardId: "08989",
    name: "Thị trấn Quang Minh",
  },
  {
    districtId: "250",
    wardId: "08992",
    name: "Xã Thanh Lâm",
  },
  {
    districtId: "250",
    wardId: "08995",
    name: "Xã Tam Đồng",
  },
  {
    districtId: "250",
    wardId: "08998",
    name: "Xã Liên Mạc",
  },
  {
    districtId: "250",
    wardId: "09001",
    name: "Xã Vạn Yên",
  },
  {
    districtId: "250",
    wardId: "09004",
    name: "Xã Chu Phan",
  },
  {
    districtId: "250",
    wardId: "09007",
    name: "Xã Tiến Thịnh",
  },
  {
    districtId: "250",
    wardId: "09010",
    name: "Xã Mê Linh",
  },
  {
    districtId: "250",
    wardId: "09013",
    name: "Xã Văn Khê",
  },
  {
    districtId: "250",
    wardId: "09016",
    name: "Xã Hoàng Kim",
  },
  {
    districtId: "250",
    wardId: "09019",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "250",
    wardId: "09022",
    name: "Xã Tráng Việt",
  },
  {
    districtId: "268",
    wardId: "09538",
    name: "Phường Nguyễn Trãi",
  },
  {
    districtId: "268",
    wardId: "09541",
    name: "Phường Mộ Lao",
  },
  {
    districtId: "268",
    wardId: "09542",
    name: "Phường Văn Quán",
  },
  {
    districtId: "268",
    wardId: "09544",
    name: "Phường Vạn Phúc",
  },
  {
    districtId: "268",
    wardId: "09547",
    name: "Phường Yết Kiêu",
  },
  {
    districtId: "268",
    wardId: "09550",
    name: "Phường Quang Trung",
  },
  {
    districtId: "268",
    wardId: "09551",
    name: "Phường La Khê",
  },
  {
    districtId: "268",
    wardId: "09552",
    name: "Phường Phú La",
  },
  {
    districtId: "268",
    wardId: "09553",
    name: "Phường Phúc La",
  },
  {
    districtId: "268",
    wardId: "09556",
    name: "Phường Hà Cầu",
  },
  {
    districtId: "268",
    wardId: "09562",
    name: "Phường Yên Nghĩa",
  },
  {
    districtId: "268",
    wardId: "09565",
    name: "Phường Kiến Hưng",
  },
  {
    districtId: "268",
    wardId: "09568",
    name: "Phường Phú Lãm",
  },
  {
    districtId: "268",
    wardId: "09571",
    name: "Phường Phú Lương",
  },
  {
    districtId: "268",
    wardId: "09886",
    name: "Phường Dương Nội",
  },
  {
    districtId: "268",
    wardId: "10117",
    name: "Phường Đồng Mai",
  },
  {
    districtId: "268",
    wardId: "10123",
    name: "Phường Biên Giang",
  },
  {
    districtId: "269",
    wardId: "09574",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "269",
    wardId: "09577",
    name: "Phường Phú Thịnh",
  },
  {
    districtId: "269",
    wardId: "09580",
    name: "Phường Ngô Quyền",
  },
  {
    districtId: "269",
    wardId: "09583",
    name: "Phường Quang Trung",
  },
  {
    districtId: "269",
    wardId: "09586",
    name: "Phường Sơn Lộc",
  },
  {
    districtId: "269",
    wardId: "09589",
    name: "Phường Xuân Khanh",
  },
  {
    districtId: "269",
    wardId: "09592",
    name: "Xã Đường Lâm",
  },
  {
    districtId: "269",
    wardId: "09595",
    name: "Phường Viên Sơn",
  },
  {
    districtId: "269",
    wardId: "09598",
    name: "Xã Xuân Sơn",
  },
  {
    districtId: "269",
    wardId: "09601",
    name: "Phường Trung Hưng",
  },
  {
    districtId: "269",
    wardId: "09604",
    name: "Xã Thanh Mỹ",
  },
  {
    districtId: "269",
    wardId: "09607",
    name: "Phường Trung Sơn Trầm",
  },
  {
    districtId: "269",
    wardId: "09610",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "269",
    wardId: "09613",
    name: "Xã Sơn Đông",
  },
  {
    districtId: "269",
    wardId: "09616",
    name: "Xã Cổ Đông",
  },
  {
    districtId: "271",
    wardId: "09619",
    name: "Thị trấn Tây Đằng",
  },
  {
    districtId: "271",
    wardId: "09625",
    name: "Xã Phú Cường",
  },
  {
    districtId: "271",
    wardId: "09628",
    name: "Xã Cổ Đô",
  },
  {
    districtId: "271",
    wardId: "09631",
    name: "Xã Tản Hồng",
  },
  {
    districtId: "271",
    wardId: "09634",
    name: "Xã Vạn Thắng",
  },
  {
    districtId: "271",
    wardId: "09637",
    name: "Xã Châu Sơn",
  },
  {
    districtId: "271",
    wardId: "09640",
    name: "Xã Phong Vân",
  },
  {
    districtId: "271",
    wardId: "09643",
    name: "Xã Phú Đông",
  },
  {
    districtId: "271",
    wardId: "09646",
    name: "Xã Phú Phương",
  },
  {
    districtId: "271",
    wardId: "09649",
    name: "Xã Phú Châu",
  },
  {
    districtId: "271",
    wardId: "09652",
    name: "Xã Thái Hòa",
  },
  {
    districtId: "271",
    wardId: "09655",
    name: "Xã Đồng Thái",
  },
  {
    districtId: "271",
    wardId: "09658",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "271",
    wardId: "09661",
    name: "Xã Minh Châu",
  },
  {
    districtId: "271",
    wardId: "09664",
    name: "Xã Vật Lại",
  },
  {
    districtId: "271",
    wardId: "09667",
    name: "Xã Chu Minh",
  },
  {
    districtId: "271",
    wardId: "09670",
    name: "Xã Tòng Bạt",
  },
  {
    districtId: "271",
    wardId: "09673",
    name: "Xã Cẩm Lĩnh",
  },
  {
    districtId: "271",
    wardId: "09676",
    name: "Xã Sơn Đà",
  },
  {
    districtId: "271",
    wardId: "09679",
    name: "Xã Đông Quang",
  },
  {
    districtId: "271",
    wardId: "09682",
    name: "Xã Tiên Phong",
  },
  {
    districtId: "271",
    wardId: "09685",
    name: "Xã Thụy An",
  },
  {
    districtId: "271",
    wardId: "09688",
    name: "Xã Cam Thượng",
  },
  {
    districtId: "271",
    wardId: "09691",
    name: "Xã Thuần Mỹ",
  },
  {
    districtId: "271",
    wardId: "09694",
    name: "Xã Tản Lĩnh",
  },
  {
    districtId: "271",
    wardId: "09697",
    name: "Xã Ba Trại",
  },
  {
    districtId: "271",
    wardId: "09700",
    name: "Xã Minh Quang",
  },
  {
    districtId: "271",
    wardId: "09703",
    name: "Xã Ba Vì",
  },
  {
    districtId: "271",
    wardId: "09706",
    name: "Xã Vân Hòa",
  },
  {
    districtId: "271",
    wardId: "09709",
    name: "Xã Yên Bài",
  },
  {
    districtId: "271",
    wardId: "09712",
    name: "Xã Khánh Thượng",
  },
  {
    districtId: "272",
    wardId: "09715",
    name: "Thị trấn Phúc Thọ",
  },
  {
    districtId: "272",
    wardId: "09718",
    name: "Xã Vân Hà",
  },
  {
    districtId: "272",
    wardId: "09721",
    name: "Xã Vân Phúc",
  },
  {
    districtId: "272",
    wardId: "09724",
    name: "Xã Vân Nam",
  },
  {
    districtId: "272",
    wardId: "09727",
    name: "Xã Xuân Đình",
  },
  {
    districtId: "272",
    wardId: "09733",
    name: "Xã Sen Phương",
  },
  {
    districtId: "272",
    wardId: "09739",
    name: "Xã Võng Xuyên",
  },
  {
    districtId: "272",
    wardId: "09742",
    name: "Xã Thọ Lộc",
  },
  {
    districtId: "272",
    wardId: "09745",
    name: "Xã Long Xuyên",
  },
  {
    districtId: "272",
    wardId: "09748",
    name: "Xã Thượng Cốc",
  },
  {
    districtId: "272",
    wardId: "09751",
    name: "Xã Hát Môn",
  },
  {
    districtId: "272",
    wardId: "09754",
    name: "Xã Tích Giang",
  },
  {
    districtId: "272",
    wardId: "09757",
    name: "Xã Thanh Đa",
  },
  {
    districtId: "272",
    wardId: "09760",
    name: "Xã Trạch Mỹ Lộc",
  },
  {
    districtId: "272",
    wardId: "09763",
    name: "Xã Phúc Hòa",
  },
  {
    districtId: "272",
    wardId: "09766",
    name: "Xã Ngọc Tảo",
  },
  {
    districtId: "272",
    wardId: "09769",
    name: "Xã Phụng Thượng",
  },
  {
    districtId: "272",
    wardId: "09772",
    name: "Xã Tam Thuấn",
  },
  {
    districtId: "272",
    wardId: "09775",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "272",
    wardId: "09778",
    name: "Xã Hiệp Thuận",
  },
  {
    districtId: "272",
    wardId: "09781",
    name: "Xã Liên Hiệp",
  },
  {
    districtId: "273",
    wardId: "09784",
    name: "Thị trấn Phùng",
  },
  {
    districtId: "273",
    wardId: "09787",
    name: "Xã Trung Châu",
  },
  {
    districtId: "273",
    wardId: "09790",
    name: "Xã Thọ An",
  },
  {
    districtId: "273",
    wardId: "09793",
    name: "Xã Thọ Xuân",
  },
  {
    districtId: "273",
    wardId: "09796",
    name: "Xã Hồng Hà",
  },
  {
    districtId: "273",
    wardId: "09799",
    name: "Xã Liên Hồng",
  },
  {
    districtId: "273",
    wardId: "09802",
    name: "Xã Liên Hà",
  },
  {
    districtId: "273",
    wardId: "09805",
    name: "Xã Hạ Mỗ",
  },
  {
    districtId: "273",
    wardId: "09808",
    name: "Xã Liên Trung",
  },
  {
    districtId: "273",
    wardId: "09811",
    name: "Xã Phương Đình",
  },
  {
    districtId: "273",
    wardId: "09814",
    name: "Xã Thượng Mỗ",
  },
  {
    districtId: "273",
    wardId: "09817",
    name: "Xã Tân Hội",
  },
  {
    districtId: "273",
    wardId: "09820",
    name: "Xã Tân Lập",
  },
  {
    districtId: "273",
    wardId: "09823",
    name: "Xã Đan Phượng",
  },
  {
    districtId: "273",
    wardId: "09826",
    name: "Xã Đồng Tháp",
  },
  {
    districtId: "273",
    wardId: "09829",
    name: "Xã Song Phượng",
  },
  {
    districtId: "274",
    wardId: "09832",
    name: "Thị trấn Trạm Trôi",
  },
  {
    districtId: "274",
    wardId: "09835",
    name: "Xã Đức Thượng",
  },
  {
    districtId: "274",
    wardId: "09838",
    name: "Xã Minh Khai",
  },
  {
    districtId: "274",
    wardId: "09841",
    name: "Xã Dương Liễu",
  },
  {
    districtId: "274",
    wardId: "09844",
    name: "Xã Di Trạch",
  },
  {
    districtId: "274",
    wardId: "09847",
    name: "Xã Đức Giang",
  },
  {
    districtId: "274",
    wardId: "09850",
    name: "Xã Cát Quế",
  },
  {
    districtId: "274",
    wardId: "09853",
    name: "Xã Kim Chung",
  },
  {
    districtId: "274",
    wardId: "09856",
    name: "Xã Yên Sở",
  },
  {
    districtId: "274",
    wardId: "09859",
    name: "Xã Sơn Đồng",
  },
  {
    districtId: "274",
    wardId: "09862",
    name: "Xã Vân Canh",
  },
  {
    districtId: "274",
    wardId: "09865",
    name: "Xã Đắc Sở",
  },
  {
    districtId: "274",
    wardId: "09868",
    name: "Xã Lại Yên",
  },
  {
    districtId: "274",
    wardId: "09871",
    name: "Xã Tiền Yên",
  },
  {
    districtId: "274",
    wardId: "09874",
    name: "Xã Song Phương",
  },
  {
    districtId: "274",
    wardId: "09877",
    name: "Xã An Khánh",
  },
  {
    districtId: "274",
    wardId: "09880",
    name: "Xã An Thượng",
  },
  {
    districtId: "274",
    wardId: "09883",
    name: "Xã Vân Côn",
  },
  {
    districtId: "274",
    wardId: "09889",
    name: "Xã La Phù",
  },
  {
    districtId: "274",
    wardId: "09892",
    name: "Xã Đông La",
  },
  {
    districtId: "275",
    wardId: "04939",
    name: "Xã Đông Xuân",
  },
  {
    districtId: "275",
    wardId: "09895",
    name: "Thị trấn Quốc Oai",
  },
  {
    districtId: "275",
    wardId: "09898",
    name: "Xã Sài Sơn",
  },
  {
    districtId: "275",
    wardId: "09901",
    name: "Xã Phượng Cách",
  },
  {
    districtId: "275",
    wardId: "09904",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "275",
    wardId: "09907",
    name: "Xã Ngọc Liệp",
  },
  {
    districtId: "275",
    wardId: "09910",
    name: "Xã Ngọc Mỹ",
  },
  {
    districtId: "275",
    wardId: "09913",
    name: "Xã Liệp Tuyết",
  },
  {
    districtId: "275",
    wardId: "09916",
    name: "Xã Thạch Thán",
  },
  {
    districtId: "275",
    wardId: "09919",
    name: "Xã Đồng Quang",
  },
  {
    districtId: "275",
    wardId: "09922",
    name: "Xã Phú Cát",
  },
  {
    districtId: "275",
    wardId: "09925",
    name: "Xã Tuyết Nghĩa",
  },
  {
    districtId: "275",
    wardId: "09928",
    name: "Xã Nghĩa Hương",
  },
  {
    districtId: "275",
    wardId: "09931",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "275",
    wardId: "09934",
    name: "Xã Tân Phú",
  },
  {
    districtId: "275",
    wardId: "09937",
    name: "Xã Đại Thành",
  },
  {
    districtId: "275",
    wardId: "09940",
    name: "Xã Phú Mãn",
  },
  {
    districtId: "275",
    wardId: "09943",
    name: "Xã Cấn Hữu",
  },
  {
    districtId: "275",
    wardId: "09946",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "275",
    wardId: "09949",
    name: "Xã Hòa Thạch",
  },
  {
    districtId: "275",
    wardId: "09952",
    name: "Xã Đông Yên",
  },
  {
    districtId: "276",
    wardId: "04927",
    name: "Xã Yên Trung",
  },
  {
    districtId: "276",
    wardId: "04930",
    name: "Xã Yên Bình",
  },
  {
    districtId: "276",
    wardId: "04936",
    name: "Xã Tiến Xuân",
  },
  {
    districtId: "276",
    wardId: "09955",
    name: "Thị trấn Liên Quan",
  },
  {
    districtId: "276",
    wardId: "09958",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "276",
    wardId: "09961",
    name: "Xã Cẩm Yên",
  },
  {
    districtId: "276",
    wardId: "09964",
    name: "Xã Lại Thượng",
  },
  {
    districtId: "276",
    wardId: "09967",
    name: "Xã Phú Kim",
  },
  {
    districtId: "276",
    wardId: "09970",
    name: "Xã Hương Ngải",
  },
  {
    districtId: "276",
    wardId: "09973",
    name: "Xã Canh Nậu",
  },
  {
    districtId: "276",
    wardId: "09976",
    name: "Xã Kim Quan",
  },
  {
    districtId: "276",
    wardId: "09979",
    name: "Xã Dị Nậu",
  },
  {
    districtId: "276",
    wardId: "09982",
    name: "Xã Bình Yên",
  },
  {
    districtId: "276",
    wardId: "09985",
    name: "Xã Chàng Sơn",
  },
  {
    districtId: "276",
    wardId: "09988",
    name: "Xã Thạch Hoà",
  },
  {
    districtId: "276",
    wardId: "09991",
    name: "Xã Cần Kiệm",
  },
  {
    districtId: "276",
    wardId: "09994",
    name: "Xã Hữu Bằng",
  },
  {
    districtId: "276",
    wardId: "09997",
    name: "Xã Phùng Xá",
  },
  {
    districtId: "276",
    wardId: "10000",
    name: "Xã Tân Xã",
  },
  {
    districtId: "276",
    wardId: "10003",
    name: "Xã Thạch Xá",
  },
  {
    districtId: "276",
    wardId: "10006",
    name: "Xã Bình Phú",
  },
  {
    districtId: "276",
    wardId: "10009",
    name: "Xã Hạ Bằng",
  },
  {
    districtId: "276",
    wardId: "10012",
    name: "Xã Đồng Trúc",
  },
  {
    districtId: "277",
    wardId: "10015",
    name: "Thị trấn Chúc Sơn",
  },
  {
    districtId: "277",
    wardId: "10018",
    name: "Thị trấn Xuân Mai",
  },
  {
    districtId: "277",
    wardId: "10021",
    name: "Xã Phụng Châu",
  },
  {
    districtId: "277",
    wardId: "10024",
    name: "Xã Tiên Phương",
  },
  {
    districtId: "277",
    wardId: "10027",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "277",
    wardId: "10030",
    name: "Xã Đông Phương Yên",
  },
  {
    districtId: "277",
    wardId: "10033",
    name: "Xã Phú Nghĩa",
  },
  {
    districtId: "277",
    wardId: "10039",
    name: "Xã Trường Yên",
  },
  {
    districtId: "277",
    wardId: "10042",
    name: "Xã Ngọc Hòa",
  },
  {
    districtId: "277",
    wardId: "10045",
    name: "Xã Thủy Xuân Tiên",
  },
  {
    districtId: "277",
    wardId: "10048",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "277",
    wardId: "10051",
    name: "Xã Trung Hòa",
  },
  {
    districtId: "277",
    wardId: "10054",
    name: "Xã Đại Yên",
  },
  {
    districtId: "277",
    wardId: "10057",
    name: "Xã Thụy Hương",
  },
  {
    districtId: "277",
    wardId: "10060",
    name: "Xã Tốt Động",
  },
  {
    districtId: "277",
    wardId: "10063",
    name: "Xã Lam Điền",
  },
  {
    districtId: "277",
    wardId: "10066",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "277",
    wardId: "10069",
    name: "Xã Nam Phương Tiến",
  },
  {
    districtId: "277",
    wardId: "10072",
    name: "Xã Hợp Đồng",
  },
  {
    districtId: "277",
    wardId: "10075",
    name: "Xã Hoàng Văn Thụ",
  },
  {
    districtId: "277",
    wardId: "10078",
    name: "Xã Hoàng Diệu",
  },
  {
    districtId: "277",
    wardId: "10081",
    name: "Xã Hữu Văn",
  },
  {
    districtId: "277",
    wardId: "10084",
    name: "Xã Quảng Bị",
  },
  {
    districtId: "277",
    wardId: "10087",
    name: "Xã Mỹ Lương",
  },
  {
    districtId: "277",
    wardId: "10090",
    name: "Xã Thượng Vực",
  },
  {
    districtId: "277",
    wardId: "10093",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "277",
    wardId: "10096",
    name: "Xã Đồng Phú",
  },
  {
    districtId: "277",
    wardId: "10099",
    name: "Xã Trần Phú",
  },
  {
    districtId: "277",
    wardId: "10102",
    name: "Xã Văn Võ",
  },
  {
    districtId: "277",
    wardId: "10105",
    name: "Xã Đồng Lạc",
  },
  {
    districtId: "277",
    wardId: "10108",
    name: "Xã Hòa Chính",
  },
  {
    districtId: "277",
    wardId: "10111",
    name: "Xã Phú Nam An",
  },
  {
    districtId: "278",
    wardId: "10114",
    name: "Thị trấn Kim Bài",
  },
  {
    districtId: "278",
    wardId: "10120",
    name: "Xã Cự Khê",
  },
  {
    districtId: "278",
    wardId: "10126",
    name: "Xã Bích Hòa",
  },
  {
    districtId: "278",
    wardId: "10129",
    name: "Xã Mỹ Hưng",
  },
  {
    districtId: "278",
    wardId: "10132",
    name: "Xã Cao Viên",
  },
  {
    districtId: "278",
    wardId: "10135",
    name: "Xã Bình Minh",
  },
  {
    districtId: "278",
    wardId: "10138",
    name: "Xã Tam Hưng",
  },
  {
    districtId: "278",
    wardId: "10141",
    name: "Xã Thanh Cao",
  },
  {
    districtId: "278",
    wardId: "10144",
    name: "Xã Thanh Thùy",
  },
  {
    districtId: "278",
    wardId: "10147",
    name: "Xã Thanh Mai",
  },
  {
    districtId: "278",
    wardId: "10150",
    name: "Xã Thanh Văn",
  },
  {
    districtId: "278",
    wardId: "10153",
    name: "Xã Đỗ Động",
  },
  {
    districtId: "278",
    wardId: "10156",
    name: "Xã Kim An",
  },
  {
    districtId: "278",
    wardId: "10159",
    name: "Xã Kim Thư",
  },
  {
    districtId: "278",
    wardId: "10162",
    name: "Xã Phương Trung",
  },
  {
    districtId: "278",
    wardId: "10165",
    name: "Xã Tân Ước",
  },
  {
    districtId: "278",
    wardId: "10168",
    name: "Xã Dân Hòa",
  },
  {
    districtId: "278",
    wardId: "10171",
    name: "Xã Liên Châu",
  },
  {
    districtId: "278",
    wardId: "10174",
    name: "Xã Cao Dương",
  },
  {
    districtId: "278",
    wardId: "10177",
    name: "Xã Xuân Dương",
  },
  {
    districtId: "278",
    wardId: "10180",
    name: "Xã Hồng Dương",
  },
  {
    districtId: "279",
    wardId: "10183",
    name: "Thị trấn Thường Tín",
  },
  {
    districtId: "279",
    wardId: "10186",
    name: "Xã Ninh Sở",
  },
  {
    districtId: "279",
    wardId: "10189",
    name: "Xã Nhị Khê",
  },
  {
    districtId: "279",
    wardId: "10192",
    name: "Xã Duyên Thái",
  },
  {
    districtId: "279",
    wardId: "10195",
    name: "Xã Khánh Hà",
  },
  {
    districtId: "279",
    wardId: "10198",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "279",
    wardId: "10201",
    name: "Xã Văn Bình",
  },
  {
    districtId: "279",
    wardId: "10204",
    name: "Xã Hiền Giang",
  },
  {
    districtId: "279",
    wardId: "10207",
    name: "Xã Hồng Vân",
  },
  {
    districtId: "279",
    wardId: "10210",
    name: "Xã Vân Tảo",
  },
  {
    districtId: "279",
    wardId: "10213",
    name: "Xã Liên Phương",
  },
  {
    districtId: "279",
    wardId: "10216",
    name: "Xã Văn Phú",
  },
  {
    districtId: "279",
    wardId: "10219",
    name: "Xã Tự Nhiên",
  },
  {
    districtId: "279",
    wardId: "10222",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "279",
    wardId: "10225",
    name: "Xã Hà Hồi",
  },
  {
    districtId: "279",
    wardId: "10228",
    name: "Xã Thư Phú",
  },
  {
    districtId: "279",
    wardId: "10231",
    name: "Xã Nguyễn Trãi",
  },
  {
    districtId: "279",
    wardId: "10234",
    name: "Xã Quất Động",
  },
  {
    districtId: "279",
    wardId: "10237",
    name: "Xã Chương Dương",
  },
  {
    districtId: "279",
    wardId: "10240",
    name: "Xã Tân Minh",
  },
  {
    districtId: "279",
    wardId: "10243",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "279",
    wardId: "10246",
    name: "Xã Thắng Lợi",
  },
  {
    districtId: "279",
    wardId: "10249",
    name: "Xã Dũng Tiến",
  },
  {
    districtId: "279",
    wardId: "10252",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "279",
    wardId: "10255",
    name: "Xã Nghiêm Xuyên",
  },
  {
    districtId: "279",
    wardId: "10258",
    name: "Xã Tô Hiệu",
  },
  {
    districtId: "279",
    wardId: "10261",
    name: "Xã Văn Tự",
  },
  {
    districtId: "279",
    wardId: "10264",
    name: "Xã Vạn Điểm",
  },
  {
    districtId: "279",
    wardId: "10267",
    name: "Xã Minh Cường",
  },
  {
    districtId: "280",
    wardId: "10270",
    name: "Thị trấn Phú Minh",
  },
  {
    districtId: "280",
    wardId: "10273",
    name: "Thị trấn Phú Xuyên",
  },
  {
    districtId: "280",
    wardId: "10276",
    name: "Xã Hồng Minh",
  },
  {
    districtId: "280",
    wardId: "10279",
    name: "Xã Phượng Dực",
  },
  {
    districtId: "280",
    wardId: "10282",
    name: "Xã Nam Tiến",
  },
  {
    districtId: "280",
    wardId: "10288",
    name: "Xã Tri Trung",
  },
  {
    districtId: "280",
    wardId: "10291",
    name: "Xã Đại Thắng",
  },
  {
    districtId: "280",
    wardId: "10294",
    name: "Xã Phú Túc",
  },
  {
    districtId: "280",
    wardId: "10297",
    name: "Xã Văn Hoàng",
  },
  {
    districtId: "280",
    wardId: "10300",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "280",
    wardId: "10303",
    name: "Xã Hoàng Long",
  },
  {
    districtId: "280",
    wardId: "10306",
    name: "Xã Quang Trung",
  },
  {
    districtId: "280",
    wardId: "10309",
    name: "Xã Nam Phong",
  },
  {
    districtId: "280",
    wardId: "10312",
    name: "Xã Nam Triều",
  },
  {
    districtId: "280",
    wardId: "10315",
    name: "Xã Tân Dân",
  },
  {
    districtId: "280",
    wardId: "10318",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "280",
    wardId: "10321",
    name: "Xã Chuyên Mỹ",
  },
  {
    districtId: "280",
    wardId: "10324",
    name: "Xã Khai Thái",
  },
  {
    districtId: "280",
    wardId: "10327",
    name: "Xã Phúc Tiến",
  },
  {
    districtId: "280",
    wardId: "10330",
    name: "Xã Vân Từ",
  },
  {
    districtId: "280",
    wardId: "10333",
    name: "Xã Tri Thủy",
  },
  {
    districtId: "280",
    wardId: "10336",
    name: "Xã Đại Xuyên",
  },
  {
    districtId: "280",
    wardId: "10339",
    name: "Xã Phú Yên",
  },
  {
    districtId: "280",
    wardId: "10342",
    name: "Xã Bạch Hạ",
  },
  {
    districtId: "280",
    wardId: "10345",
    name: "Xã Quang Lãng",
  },
  {
    districtId: "280",
    wardId: "10348",
    name: "Xã Châu Can",
  },
  {
    districtId: "280",
    wardId: "10351",
    name: "Xã Minh Tân",
  },
  {
    districtId: "281",
    wardId: "10354",
    name: "Thị trấn Vân Đình",
  },
  {
    districtId: "281",
    wardId: "10357",
    name: "Xã Viên An",
  },
  {
    districtId: "281",
    wardId: "10360",
    name: "Xã Viên Nội",
  },
  {
    districtId: "281",
    wardId: "10363",
    name: "Xã Hoa Sơn",
  },
  {
    districtId: "281",
    wardId: "10366",
    name: "Xã Quảng Phú Cầu",
  },
  {
    districtId: "281",
    wardId: "10369",
    name: "Xã Trường Thịnh",
  },
  {
    districtId: "281",
    wardId: "10372",
    name: "Xã Cao Thành",
  },
  {
    districtId: "281",
    wardId: "10375",
    name: "Xã Liên Bạt",
  },
  {
    districtId: "281",
    wardId: "10378",
    name: "Xã Sơn Công",
  },
  {
    districtId: "281",
    wardId: "10381",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "281",
    wardId: "10384",
    name: "Xã Phương Tú",
  },
  {
    districtId: "281",
    wardId: "10387",
    name: "Xã Trung Tú",
  },
  {
    districtId: "281",
    wardId: "10390",
    name: "Xã Đồng Tân",
  },
  {
    districtId: "281",
    wardId: "10393",
    name: "Xã Tảo Dương Văn",
  },
  {
    districtId: "281",
    wardId: "10396",
    name: "Xã Vạn Thái",
  },
  {
    districtId: "281",
    wardId: "10399",
    name: "Xã Minh Đức",
  },
  {
    districtId: "281",
    wardId: "10402",
    name: "Xã Hòa Lâm",
  },
  {
    districtId: "281",
    wardId: "10405",
    name: "Xã Hòa Xá",
  },
  {
    districtId: "281",
    wardId: "10408",
    name: "Xã Trầm Lộng",
  },
  {
    districtId: "281",
    wardId: "10411",
    name: "Xã Kim Đường",
  },
  {
    districtId: "281",
    wardId: "10414",
    name: "Xã Hòa Nam",
  },
  {
    districtId: "281",
    wardId: "10417",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "281",
    wardId: "10420",
    name: "Xã Đội Bình",
  },
  {
    districtId: "281",
    wardId: "10423",
    name: "Xã Đại Hùng",
  },
  {
    districtId: "281",
    wardId: "10426",
    name: "Xã Đông Lỗ",
  },
  {
    districtId: "281",
    wardId: "10429",
    name: "Xã Phù Lưu",
  },
  {
    districtId: "281",
    wardId: "10432",
    name: "Xã Đại Cường",
  },
  {
    districtId: "281",
    wardId: "10435",
    name: "Xã Lưu Hoàng",
  },
  {
    districtId: "281",
    wardId: "10438",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "282",
    wardId: "10441",
    name: "Thị trấn Đại Nghĩa",
  },
  {
    districtId: "282",
    wardId: "10444",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "282",
    wardId: "10447",
    name: "Xã Thượng Lâm",
  },
  {
    districtId: "282",
    wardId: "10450",
    name: "Xã Tuy Lai",
  },
  {
    districtId: "282",
    wardId: "10453",
    name: "Xã Phúc Lâm",
  },
  {
    districtId: "282",
    wardId: "10456",
    name: "Xã Mỹ Thành",
  },
  {
    districtId: "282",
    wardId: "10459",
    name: "Xã Bột Xuyên",
  },
  {
    districtId: "282",
    wardId: "10462",
    name: "Xã An Mỹ",
  },
  {
    districtId: "282",
    wardId: "10465",
    name: "Xã Hồng Sơn",
  },
  {
    districtId: "282",
    wardId: "10468",
    name: "Xã Lê Thanh",
  },
  {
    districtId: "282",
    wardId: "10471",
    name: "Xã Xuy Xá",
  },
  {
    districtId: "282",
    wardId: "10474",
    name: "Xã Phùng Xá",
  },
  {
    districtId: "282",
    wardId: "10477",
    name: "Xã Phù Lưu Tế",
  },
  {
    districtId: "282",
    wardId: "10480",
    name: "Xã Đại Hưng",
  },
  {
    districtId: "282",
    wardId: "10483",
    name: "Xã Vạn Kim",
  },
  {
    districtId: "282",
    wardId: "10486",
    name: "Xã Đốc Tín",
  },
  {
    districtId: "282",
    wardId: "10489",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "282",
    wardId: "10492",
    name: "Xã Hùng Tiến",
  },
  {
    districtId: "282",
    wardId: "10495",
    name: "Xã An Tiến",
  },
  {
    districtId: "282",
    wardId: "10498",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "282",
    wardId: "10501",
    name: "Xã Hợp Thanh",
  },
  {
    districtId: "282",
    wardId: "10504",
    name: "Xã An Phú",
  },
  {
    districtId: "024",
    wardId: "00688",
    name: "Phường Quang Trung",
  },
  {
    districtId: "024",
    wardId: "00691",
    name: "Phường Trần Phú",
  },
  {
    districtId: "024",
    wardId: "00692",
    name: "Phường Ngọc Hà",
  },
  {
    districtId: "024",
    wardId: "00694",
    name: "Phường Nguyễn Trãi",
  },
  {
    districtId: "024",
    wardId: "00697",
    name: "Phường Minh Khai",
  },
  {
    districtId: "024",
    wardId: "00700",
    name: "Xã Ngọc Đường",
  },
  {
    districtId: "024",
    wardId: "00946",
    name: "Xã Phương Độ",
  },
  {
    districtId: "024",
    wardId: "00949",
    name: "Xã Phương Thiện",
  },
  {
    districtId: "026",
    wardId: "00712",
    name: "Thị trấn Phó Bảng",
  },
  {
    districtId: "026",
    wardId: "00715",
    name: "Xã Lũng Cú",
  },
  {
    districtId: "026",
    wardId: "00718",
    name: "Xã Má Lé",
  },
  {
    districtId: "026",
    wardId: "00721",
    name: "Thị trấn Đồng Văn",
  },
  {
    districtId: "026",
    wardId: "00724",
    name: "Xã Lũng Táo",
  },
  {
    districtId: "026",
    wardId: "00727",
    name: "Xã Phố Là",
  },
  {
    districtId: "026",
    wardId: "00730",
    name: "Xã Thài Phìn Tủng",
  },
  {
    districtId: "026",
    wardId: "00733",
    name: "Xã Sủng Là",
  },
  {
    districtId: "026",
    wardId: "00736",
    name: "Xã Xà Phìn",
  },
  {
    districtId: "026",
    wardId: "00739",
    name: "Xã Tả Phìn",
  },
  {
    districtId: "026",
    wardId: "00742",
    name: "Xã Tả Lủng",
  },
  {
    districtId: "026",
    wardId: "00745",
    name: "Xã Phố Cáo",
  },
  {
    districtId: "026",
    wardId: "00748",
    name: "Xã Sính Lủng",
  },
  {
    districtId: "026",
    wardId: "00751",
    name: "Xã Sảng Tủng",
  },
  {
    districtId: "026",
    wardId: "00754",
    name: "Xã Lũng Thầu",
  },
  {
    districtId: "026",
    wardId: "00757",
    name: "Xã Hố Quáng Phìn",
  },
  {
    districtId: "026",
    wardId: "00760",
    name: "Xã Vần Chải",
  },
  {
    districtId: "026",
    wardId: "00763",
    name: "Xã Lũng Phìn",
  },
  {
    districtId: "026",
    wardId: "00766",
    name: "Xã Sủng Trái",
  },
  {
    districtId: "027",
    wardId: "00769",
    name: "Thị trấn Mèo Vạc",
  },
  {
    districtId: "027",
    wardId: "00772",
    name: "Xã Thượng Phùng",
  },
  {
    districtId: "027",
    wardId: "00775",
    name: "Xã Pải Lủng",
  },
  {
    districtId: "027",
    wardId: "00778",
    name: "Xã Xín Cái",
  },
  {
    districtId: "027",
    wardId: "00781",
    name: "Xã Pả Vi",
  },
  {
    districtId: "027",
    wardId: "00784",
    name: "Xã Giàng Chu Phìn",
  },
  {
    districtId: "027",
    wardId: "00787",
    name: "Xã Sủng Trà",
  },
  {
    districtId: "027",
    wardId: "00790",
    name: "Xã Sủng Máng",
  },
  {
    districtId: "027",
    wardId: "00793",
    name: "Xã Sơn Vĩ",
  },
  {
    districtId: "027",
    wardId: "00796",
    name: "Xã Tả Lủng",
  },
  {
    districtId: "027",
    wardId: "00799",
    name: "Xã Cán Chu Phìn",
  },
  {
    districtId: "027",
    wardId: "00802",
    name: "Xã Lũng Pù",
  },
  {
    districtId: "027",
    wardId: "00805",
    name: "Xã Lũng Chinh",
  },
  {
    districtId: "027",
    wardId: "00808",
    name: "Xã Tát Ngà",
  },
  {
    districtId: "027",
    wardId: "00811",
    name: "Xã Nậm Ban",
  },
  {
    districtId: "027",
    wardId: "00814",
    name: "Xã Khâu Vai",
  },
  {
    districtId: "027",
    wardId: "00815",
    name: "Xã Niêm Tòng",
  },
  {
    districtId: "027",
    wardId: "00817",
    name: "Xã Niêm Sơn",
  },
  {
    districtId: "028",
    wardId: "00820",
    name: "Thị trấn Yên Minh",
  },
  {
    districtId: "028",
    wardId: "00823",
    name: "Xã Thắng Mố",
  },
  {
    districtId: "028",
    wardId: "00826",
    name: "Xã Phú Lũng",
  },
  {
    districtId: "028",
    wardId: "00829",
    name: "Xã Sủng Tráng",
  },
  {
    districtId: "028",
    wardId: "00832",
    name: "Xã Bạch Đích",
  },
  {
    districtId: "028",
    wardId: "00835",
    name: "Xã Na Khê",
  },
  {
    districtId: "028",
    wardId: "00838",
    name: "Xã Sủng Thài",
  },
  {
    districtId: "028",
    wardId: "00841",
    name: "Xã Hữu Vinh",
  },
  {
    districtId: "028",
    wardId: "00844",
    name: "Xã Lao Và Chải",
  },
  {
    districtId: "028",
    wardId: "00847",
    name: "Xã Mậu Duệ",
  },
  {
    districtId: "028",
    wardId: "00850",
    name: "Xã Đông Minh",
  },
  {
    districtId: "028",
    wardId: "00853",
    name: "Xã Mậu Long",
  },
  {
    districtId: "028",
    wardId: "00856",
    name: "Xã Ngam La",
  },
  {
    districtId: "028",
    wardId: "00859",
    name: "Xã Ngọc Long",
  },
  {
    districtId: "028",
    wardId: "00862",
    name: "Xã Đường Thượng",
  },
  {
    districtId: "028",
    wardId: "00865",
    name: "Xã Lũng Hồ",
  },
  {
    districtId: "028",
    wardId: "00868",
    name: "Xã Du Tiến",
  },
  {
    districtId: "028",
    wardId: "00871",
    name: "Xã Du Già",
  },
  {
    districtId: "029",
    wardId: "00874",
    name: "Thị trấn Tam Sơn",
  },
  {
    districtId: "029",
    wardId: "00877",
    name: "Xã Bát Đại Sơn",
  },
  {
    districtId: "029",
    wardId: "00880",
    name: "Xã Nghĩa Thuận",
  },
  {
    districtId: "029",
    wardId: "00883",
    name: "Xã Cán Tỷ",
  },
  {
    districtId: "029",
    wardId: "00886",
    name: "Xã Cao Mã Pờ",
  },
  {
    districtId: "029",
    wardId: "00889",
    name: "Xã Thanh Vân",
  },
  {
    districtId: "029",
    wardId: "00892",
    name: "Xã Tùng Vài",
  },
  {
    districtId: "029",
    wardId: "00895",
    name: "Xã Đông Hà",
  },
  {
    districtId: "029",
    wardId: "00898",
    name: "Xã Quản Bạ",
  },
  {
    districtId: "029",
    wardId: "00901",
    name: "Xã Lùng Tám",
  },
  {
    districtId: "029",
    wardId: "00904",
    name: "Xã Quyết Tiến",
  },
  {
    districtId: "029",
    wardId: "00907",
    name: "Xã Tả Ván",
  },
  {
    districtId: "029",
    wardId: "00910",
    name: "Xã Thái An",
  },
  {
    districtId: "030",
    wardId: "00703",
    name: "Xã Kim Thạch",
  },
  {
    districtId: "030",
    wardId: "00706",
    name: "Xã Phú Linh",
  },
  {
    districtId: "030",
    wardId: "00709",
    name: "Xã Kim Linh",
  },
  {
    districtId: "030",
    wardId: "00913",
    name: "Thị trấn Vị Xuyên",
  },
  {
    districtId: "030",
    wardId: "00916",
    name: "Thị trấn Nông Trường Việt Lâm",
  },
  {
    districtId: "030",
    wardId: "00919",
    name: "Xã Minh Tân",
  },
  {
    districtId: "030",
    wardId: "00922",
    name: "Xã Thuận Hoà",
  },
  {
    districtId: "030",
    wardId: "00925",
    name: "Xã Tùng Bá",
  },
  {
    districtId: "030",
    wardId: "00928",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "030",
    wardId: "00931",
    name: "Xã Thanh Đức",
  },
  {
    districtId: "030",
    wardId: "00934",
    name: "Xã Phong Quang",
  },
  {
    districtId: "030",
    wardId: "00937",
    name: "Xã Xín Chải",
  },
  {
    districtId: "030",
    wardId: "00940",
    name: "Xã Phương Tiến",
  },
  {
    districtId: "030",
    wardId: "00943",
    name: "Xã Lao Chải",
  },
  {
    districtId: "030",
    wardId: "00952",
    name: "Xã Cao Bồ",
  },
  {
    districtId: "030",
    wardId: "00955",
    name: "Xã Đạo Đức",
  },
  {
    districtId: "030",
    wardId: "00958",
    name: "Xã Thượng Sơn",
  },
  {
    districtId: "030",
    wardId: "00961",
    name: "Xã Linh Hồ",
  },
  {
    districtId: "030",
    wardId: "00964",
    name: "Xã Quảng Ngần",
  },
  {
    districtId: "030",
    wardId: "00967",
    name: "Xã Việt Lâm",
  },
  {
    districtId: "030",
    wardId: "00970",
    name: "Xã Ngọc Linh",
  },
  {
    districtId: "030",
    wardId: "00973",
    name: "Xã Ngọc Minh",
  },
  {
    districtId: "030",
    wardId: "00976",
    name: "Xã Bạch Ngọc",
  },
  {
    districtId: "030",
    wardId: "00979",
    name: "Xã Trung Thành",
  },
  {
    districtId: "031",
    wardId: "00982",
    name: "Xã Minh Sơn",
  },
  {
    districtId: "031",
    wardId: "00985",
    name: "Xã Giáp Trung",
  },
  {
    districtId: "031",
    wardId: "00988",
    name: "Xã Yên Định",
  },
  {
    districtId: "031",
    wardId: "00991",
    name: "Thị trấn Yên Phú",
  },
  {
    districtId: "031",
    wardId: "00994",
    name: "Xã Minh Ngọc",
  },
  {
    districtId: "031",
    wardId: "00997",
    name: "Xã Yên Phong",
  },
  {
    districtId: "031",
    wardId: "01000",
    name: "Xã Lạc Nông",
  },
  {
    districtId: "031",
    wardId: "01003",
    name: "Xã Phú Nam",
  },
  {
    districtId: "031",
    wardId: "01006",
    name: "Xã Yên Cường",
  },
  {
    districtId: "031",
    wardId: "01009",
    name: "Xã Thượng Tân",
  },
  {
    districtId: "031",
    wardId: "01012",
    name: "Xã Đường Âm",
  },
  {
    districtId: "031",
    wardId: "01015",
    name: "Xã Đường Hồng",
  },
  {
    districtId: "031",
    wardId: "01018",
    name: "Xã Phiêng Luông",
  },
  {
    districtId: "032",
    wardId: "01021",
    name: "Thị trấn Vinh Quang",
  },
  {
    districtId: "032",
    wardId: "01024",
    name: "Xã Bản Máy",
  },
  {
    districtId: "032",
    wardId: "01027",
    name: "Xã Thàng Tín",
  },
  {
    districtId: "032",
    wardId: "01030",
    name: "Xã Thèn Chu Phìn",
  },
  {
    districtId: "032",
    wardId: "01033",
    name: "Xã Pố Lồ",
  },
  {
    districtId: "032",
    wardId: "01036",
    name: "Xã Bản Phùng",
  },
  {
    districtId: "032",
    wardId: "01039",
    name: "Xã Túng Sán",
  },
  {
    districtId: "032",
    wardId: "01042",
    name: "Xã Chiến Phố",
  },
  {
    districtId: "032",
    wardId: "01045",
    name: "Xã Đản Ván",
  },
  {
    districtId: "032",
    wardId: "01048",
    name: "Xã Tụ Nhân",
  },
  {
    districtId: "032",
    wardId: "01051",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "032",
    wardId: "01054",
    name: "Xã Nàng Đôn",
  },
  {
    districtId: "032",
    wardId: "01057",
    name: "Xã Pờ Ly Ngài",
  },
  {
    districtId: "032",
    wardId: "01060",
    name: "Xã Sán Xả Hồ",
  },
  {
    districtId: "032",
    wardId: "01063",
    name: "Xã Bản Luốc",
  },
  {
    districtId: "032",
    wardId: "01066",
    name: "Xã Ngàm Đăng Vài",
  },
  {
    districtId: "032",
    wardId: "01069",
    name: "Xã Bản Nhùng",
  },
  {
    districtId: "032",
    wardId: "01072",
    name: "Xã Tả Sử Choóng",
  },
  {
    districtId: "032",
    wardId: "01075",
    name: "Xã Nậm Dịch",
  },
  {
    districtId: "032",
    wardId: "01081",
    name: "Xã Hồ Thầu",
  },
  {
    districtId: "032",
    wardId: "01084",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "032",
    wardId: "01087",
    name: "Xã Nậm Tỵ",
  },
  {
    districtId: "032",
    wardId: "01090",
    name: "Xã Thông Nguyên",
  },
  {
    districtId: "032",
    wardId: "01093",
    name: "Xã Nậm Khòa",
  },
  {
    districtId: "033",
    wardId: "01096",
    name: "Thị trấn Cốc Pài",
  },
  {
    districtId: "033",
    wardId: "01099",
    name: "Xã Nàn Xỉn",
  },
  {
    districtId: "033",
    wardId: "01102",
    name: "Xã Bản Díu",
  },
  {
    districtId: "033",
    wardId: "01105",
    name: "Xã Chí Cà",
  },
  {
    districtId: "033",
    wardId: "01108",
    name: "Xã Xín Mần",
  },
  {
    districtId: "033",
    wardId: "01114",
    name: "Xã Thèn Phàng",
  },
  {
    districtId: "033",
    wardId: "01117",
    name: "Xã Trung Thịnh",
  },
  {
    districtId: "033",
    wardId: "01120",
    name: "Xã Pà Vầy Sủ",
  },
  {
    districtId: "033",
    wardId: "01123",
    name: "Xã Cốc Rế",
  },
  {
    districtId: "033",
    wardId: "01126",
    name: "Xã Thu Tà",
  },
  {
    districtId: "033",
    wardId: "01129",
    name: "Xã Nàn Ma",
  },
  {
    districtId: "033",
    wardId: "01132",
    name: "Xã Tả Nhìu",
  },
  {
    districtId: "033",
    wardId: "01135",
    name: "Xã Bản Ngò",
  },
  {
    districtId: "033",
    wardId: "01138",
    name: "Xã Chế Là",
  },
  {
    districtId: "033",
    wardId: "01141",
    name: "Xã Nấm Dẩn",
  },
  {
    districtId: "033",
    wardId: "01144",
    name: "Xã Quảng Nguyên",
  },
  {
    districtId: "033",
    wardId: "01147",
    name: "Xã Nà Chì",
  },
  {
    districtId: "033",
    wardId: "01150",
    name: "Xã Khuôn Lùng",
  },
  {
    districtId: "034",
    wardId: "01153",
    name: "Thị trấn Việt Quang",
  },
  {
    districtId: "034",
    wardId: "01156",
    name: "Thị trấn Vĩnh Tuy",
  },
  {
    districtId: "034",
    wardId: "01159",
    name: "Xã Tân Lập",
  },
  {
    districtId: "034",
    wardId: "01162",
    name: "Xã Tân Thành",
  },
  {
    districtId: "034",
    wardId: "01165",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "034",
    wardId: "01168",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "034",
    wardId: "01171",
    name: "Xã Tân Quang",
  },
  {
    districtId: "034",
    wardId: "01174",
    name: "Xã Thượng Bình",
  },
  {
    districtId: "034",
    wardId: "01177",
    name: "Xã Hữu Sản",
  },
  {
    districtId: "034",
    wardId: "01180",
    name: "Xã Kim Ngọc",
  },
  {
    districtId: "034",
    wardId: "01183",
    name: "Xã Việt Vinh",
  },
  {
    districtId: "034",
    wardId: "01186",
    name: "Xã Bằng Hành",
  },
  {
    districtId: "034",
    wardId: "01189",
    name: "Xã Quang Minh",
  },
  {
    districtId: "034",
    wardId: "01192",
    name: "Xã Liên Hiệp",
  },
  {
    districtId: "034",
    wardId: "01195",
    name: "Xã Vô Điếm",
  },
  {
    districtId: "034",
    wardId: "01198",
    name: "Xã Việt Hồng",
  },
  {
    districtId: "034",
    wardId: "01201",
    name: "Xã Hùng An",
  },
  {
    districtId: "034",
    wardId: "01204",
    name: "Xã Đức Xuân",
  },
  {
    districtId: "034",
    wardId: "01207",
    name: "Xã Tiên Kiều",
  },
  {
    districtId: "034",
    wardId: "01210",
    name: "Xã Vĩnh Hảo",
  },
  {
    districtId: "034",
    wardId: "01213",
    name: "Xã Vĩnh Phúc",
  },
  {
    districtId: "034",
    wardId: "01216",
    name: "Xã Đồng Yên",
  },
  {
    districtId: "034",
    wardId: "01219",
    name: "Xã Đông Thành",
  },
  {
    districtId: "035",
    wardId: "01222",
    name: "Xã Xuân Minh",
  },
  {
    districtId: "035",
    wardId: "01225",
    name: "Xã Tiên Nguyên",
  },
  {
    districtId: "035",
    wardId: "01228",
    name: "Xã Tân Nam",
  },
  {
    districtId: "035",
    wardId: "01231",
    name: "Xã Bản Rịa",
  },
  {
    districtId: "035",
    wardId: "01234",
    name: "Xã Yên Thành",
  },
  {
    districtId: "035",
    wardId: "01237",
    name: "Thị trấn Yên Bình",
  },
  {
    districtId: "035",
    wardId: "01240",
    name: "Xã Tân Trịnh",
  },
  {
    districtId: "035",
    wardId: "01243",
    name: "Xã Tân Bắc",
  },
  {
    districtId: "035",
    wardId: "01246",
    name: "Xã Bằng Lang",
  },
  {
    districtId: "035",
    wardId: "01249",
    name: "Xã Yên Hà",
  },
  {
    districtId: "035",
    wardId: "01252",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "035",
    wardId: "01255",
    name: "Xã Xuân Giang",
  },
  {
    districtId: "035",
    wardId: "01258",
    name: "Xã Nà Khương",
  },
  {
    districtId: "035",
    wardId: "01261",
    name: "Xã Tiên Yên",
  },
  {
    districtId: "035",
    wardId: "01264",
    name: "Xã Vĩ Thượng",
  },
  {
    districtId: "040",
    wardId: "01267",
    name: "Phường Sông Hiến",
  },
  {
    districtId: "040",
    wardId: "01270",
    name: "Phường Sông Bằng",
  },
  {
    districtId: "040",
    wardId: "01273",
    name: "Phường Hợp Giang",
  },
  {
    districtId: "040",
    wardId: "01276",
    name: "Phường Tân Giang",
  },
  {
    districtId: "040",
    wardId: "01279",
    name: "Phường Ngọc Xuân",
  },
  {
    districtId: "040",
    wardId: "01282",
    name: "Phường Đề Thám",
  },
  {
    districtId: "040",
    wardId: "01285",
    name: "Phường Hoà Chung",
  },
  {
    districtId: "040",
    wardId: "01288",
    name: "Phường Duyệt Trung",
  },
  {
    districtId: "040",
    wardId: "01693",
    name: "Xã Vĩnh Quang",
  },
  {
    districtId: "040",
    wardId: "01705",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "040",
    wardId: "01720",
    name: "Xã Chu Trinh",
  },
  {
    districtId: "042",
    wardId: "01290",
    name: "Thị trấn Pác Miầu",
  },
  {
    districtId: "042",
    wardId: "01291",
    name: "Xã Đức Hạnh",
  },
  {
    districtId: "042",
    wardId: "01294",
    name: "Xã Lý Bôn",
  },
  {
    districtId: "042",
    wardId: "01296",
    name: "Xã Nam Cao",
  },
  {
    districtId: "042",
    wardId: "01297",
    name: "Xã Nam Quang",
  },
  {
    districtId: "042",
    wardId: "01300",
    name: "Xã Vĩnh Quang",
  },
  {
    districtId: "042",
    wardId: "01303",
    name: "Xã Quảng Lâm",
  },
  {
    districtId: "042",
    wardId: "01304",
    name: "Xã Thạch Lâm",
  },
  {
    districtId: "042",
    wardId: "01309",
    name: "Xã Vĩnh Phong",
  },
  {
    districtId: "042",
    wardId: "01312",
    name: "Xã Mông Ân",
  },
  {
    districtId: "042",
    wardId: "01315",
    name: "Xã Thái Học",
  },
  {
    districtId: "042",
    wardId: "01316",
    name: "Xã Thái Sơn",
  },
  {
    districtId: "042",
    wardId: "01318",
    name: "Xã Yên Thổ",
  },
  {
    districtId: "043",
    wardId: "01321",
    name: "Thị trấn Bảo Lạc",
  },
  {
    districtId: "043",
    wardId: "01324",
    name: "Xã Cốc Pàng",
  },
  {
    districtId: "043",
    wardId: "01327",
    name: "Xã Thượng Hà",
  },
  {
    districtId: "043",
    wardId: "01330",
    name: "Xã Cô Ba",
  },
  {
    districtId: "043",
    wardId: "01333",
    name: "Xã Bảo Toàn",
  },
  {
    districtId: "043",
    wardId: "01336",
    name: "Xã Khánh Xuân",
  },
  {
    districtId: "043",
    wardId: "01339",
    name: "Xã Xuân Trường",
  },
  {
    districtId: "043",
    wardId: "01342",
    name: "Xã Hồng Trị",
  },
  {
    districtId: "043",
    wardId: "01343",
    name: "Xã Kim Cúc",
  },
  {
    districtId: "043",
    wardId: "01345",
    name: "Xã Phan Thanh",
  },
  {
    districtId: "043",
    wardId: "01348",
    name: "Xã Hồng An",
  },
  {
    districtId: "043",
    wardId: "01351",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "043",
    wardId: "01352",
    name: "Xã Hưng Thịnh",
  },
  {
    districtId: "043",
    wardId: "01354",
    name: "Xã Huy Giáp",
  },
  {
    districtId: "043",
    wardId: "01357",
    name: "Xã Đình Phùng",
  },
  {
    districtId: "043",
    wardId: "01359",
    name: "Xã Sơn Lập",
  },
  {
    districtId: "043",
    wardId: "01360",
    name: "Xã Sơn Lộ",
  },
  {
    districtId: "045",
    wardId: "01363",
    name: "Thị trấn Thông Nông",
  },
  {
    districtId: "045",
    wardId: "01366",
    name: "Xã Cần Yên",
  },
  {
    districtId: "045",
    wardId: "01367",
    name: "Xã Cần Nông",
  },
  {
    districtId: "045",
    wardId: "01372",
    name: "Xã Lương Thông",
  },
  {
    districtId: "045",
    wardId: "01375",
    name: "Xã Đa Thông",
  },
  {
    districtId: "045",
    wardId: "01378",
    name: "Xã Ngọc Động",
  },
  {
    districtId: "045",
    wardId: "01381",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "045",
    wardId: "01384",
    name: "Xã Lương Can",
  },
  {
    districtId: "045",
    wardId: "01387",
    name: "Xã Thanh Long",
  },
  {
    districtId: "045",
    wardId: "01392",
    name: "Thị trấn Xuân Hòa",
  },
  {
    districtId: "045",
    wardId: "01393",
    name: "Xã Lũng Nặm",
  },
  {
    districtId: "045",
    wardId: "01399",
    name: "Xã Trường Hà",
  },
  {
    districtId: "045",
    wardId: "01402",
    name: "Xã Cải Viên",
  },
  {
    districtId: "045",
    wardId: "01411",
    name: "Xã Nội Thôn",
  },
  {
    districtId: "045",
    wardId: "01414",
    name: "Xã Tổng Cọt",
  },
  {
    districtId: "045",
    wardId: "01417",
    name: "Xã Sóc Hà",
  },
  {
    districtId: "045",
    wardId: "01420",
    name: "Xã Thượng Thôn",
  },
  {
    districtId: "045",
    wardId: "01429",
    name: "Xã Hồng Sỹ",
  },
  {
    districtId: "045",
    wardId: "01432",
    name: "Xã Quý Quân",
  },
  {
    districtId: "045",
    wardId: "01435",
    name: "Xã Mã Ba",
  },
  {
    districtId: "045",
    wardId: "01438",
    name: "Xã Ngọc Đào",
  },
  {
    districtId: "047",
    wardId: "01447",
    name: "Thị trấn Trà Lĩnh",
  },
  {
    districtId: "047",
    wardId: "01453",
    name: "Xã Tri Phương",
  },
  {
    districtId: "047",
    wardId: "01456",
    name: "Xã Quang Hán",
  },
  {
    districtId: "047",
    wardId: "01462",
    name: "Xã Xuân Nội",
  },
  {
    districtId: "047",
    wardId: "01465",
    name: "Xã Quang Trung",
  },
  {
    districtId: "047",
    wardId: "01468",
    name: "Xã Quang Vinh",
  },
  {
    districtId: "047",
    wardId: "01471",
    name: "Xã Cao Chương",
  },
  {
    districtId: "047",
    wardId: "01477",
    name: "Thị trấn Trùng Khánh",
  },
  {
    districtId: "047",
    wardId: "01480",
    name: "Xã Ngọc Khê",
  },
  {
    districtId: "047",
    wardId: "01481",
    name: "Xã Ngọc Côn",
  },
  {
    districtId: "047",
    wardId: "01483",
    name: "Xã Phong Nậm",
  },
  {
    districtId: "047",
    wardId: "01489",
    name: "Xã Đình Phong",
  },
  {
    districtId: "047",
    wardId: "01495",
    name: "Xã Đàm Thuỷ",
  },
  {
    districtId: "047",
    wardId: "01498",
    name: "Xã Khâm Thành",
  },
  {
    districtId: "047",
    wardId: "01501",
    name: "Xã Chí Viễn",
  },
  {
    districtId: "047",
    wardId: "01504",
    name: "Xã Lăng Hiếu",
  },
  {
    districtId: "047",
    wardId: "01507",
    name: "Xã Phong Châu",
  },
  {
    districtId: "047",
    wardId: "01516",
    name: "Xã Trung Phúc",
  },
  {
    districtId: "047",
    wardId: "01519",
    name: "Xã Cao Thăng",
  },
  {
    districtId: "047",
    wardId: "01522",
    name: "Xã Đức Hồng",
  },
  {
    districtId: "047",
    wardId: "01525",
    name: "Xã Đoài Dương",
  },
  {
    districtId: "048",
    wardId: "01534",
    name: "Xã Minh Long",
  },
  {
    districtId: "048",
    wardId: "01537",
    name: "Xã Lý Quốc",
  },
  {
    districtId: "048",
    wardId: "01540",
    name: "Xã Thắng Lợi",
  },
  {
    districtId: "048",
    wardId: "01543",
    name: "Xã Đồng Loan",
  },
  {
    districtId: "048",
    wardId: "01546",
    name: "Xã Đức Quang",
  },
  {
    districtId: "048",
    wardId: "01549",
    name: "Xã Kim Loan",
  },
  {
    districtId: "048",
    wardId: "01552",
    name: "Xã Quang Long",
  },
  {
    districtId: "048",
    wardId: "01555",
    name: "Xã An Lạc",
  },
  {
    districtId: "048",
    wardId: "01558",
    name: "Thị trấn Thanh Nhật",
  },
  {
    districtId: "048",
    wardId: "01561",
    name: "Xã Vinh Quý",
  },
  {
    districtId: "048",
    wardId: "01564",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "048",
    wardId: "01567",
    name: "Xã Cô Ngân",
  },
  {
    districtId: "048",
    wardId: "01573",
    name: "Xã Thị Hoa",
  },
  {
    districtId: "049",
    wardId: "01474",
    name: "Xã Quốc Toản",
  },
  {
    districtId: "049",
    wardId: "01576",
    name: "Thị trấn Quảng Uyên",
  },
  {
    districtId: "049",
    wardId: "01579",
    name: "Xã Phi Hải",
  },
  {
    districtId: "049",
    wardId: "01582",
    name: "Xã Quảng Hưng",
  },
  {
    districtId: "049",
    wardId: "01594",
    name: "Xã Độc Lập",
  },
  {
    districtId: "049",
    wardId: "01597",
    name: "Xã Cai Bộ",
  },
  {
    districtId: "049",
    wardId: "01603",
    name: "Xã Phúc Sen",
  },
  {
    districtId: "049",
    wardId: "01606",
    name: "Xã Chí Thảo",
  },
  {
    districtId: "049",
    wardId: "01609",
    name: "Xã Tự Do",
  },
  {
    districtId: "049",
    wardId: "01615",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "049",
    wardId: "01618",
    name: "Xã Ngọc Động",
  },
  {
    districtId: "049",
    wardId: "01624",
    name: "Xã Hạnh Phúc",
  },
  {
    districtId: "049",
    wardId: "01627",
    name: "Thị trấn Tà Lùng",
  },
  {
    districtId: "049",
    wardId: "01630",
    name: "Xã Bế Văn Đàn",
  },
  {
    districtId: "049",
    wardId: "01636",
    name: "Xã Cách Linh",
  },
  {
    districtId: "049",
    wardId: "01639",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "049",
    wardId: "01645",
    name: "Xã Tiên Thành",
  },
  {
    districtId: "049",
    wardId: "01648",
    name: "Thị trấn Hoà Thuận",
  },
  {
    districtId: "049",
    wardId: "01651",
    name: "Xã Mỹ Hưng",
  },
  {
    districtId: "051",
    wardId: "01654",
    name: "Thị trấn Nước Hai",
  },
  {
    districtId: "051",
    wardId: "01657",
    name: "Xã Dân Chủ",
  },
  {
    districtId: "051",
    wardId: "01660",
    name: "Xã Nam Tuấn",
  },
  {
    districtId: "051",
    wardId: "01666",
    name: "Xã Đại Tiến",
  },
  {
    districtId: "051",
    wardId: "01669",
    name: "Xã Đức Long",
  },
  {
    districtId: "051",
    wardId: "01672",
    name: "Xã Ngũ Lão",
  },
  {
    districtId: "051",
    wardId: "01675",
    name: "Xã Trương Lương",
  },
  {
    districtId: "051",
    wardId: "01687",
    name: "Xã Hồng Việt",
  },
  {
    districtId: "051",
    wardId: "01696",
    name: "Xã Hoàng Tung",
  },
  {
    districtId: "051",
    wardId: "01699",
    name: "Xã Nguyễn Huệ",
  },
  {
    districtId: "051",
    wardId: "01702",
    name: "Xã Quang Trung",
  },
  {
    districtId: "051",
    wardId: "01708",
    name: "Xã Bạch Đằng",
  },
  {
    districtId: "051",
    wardId: "01711",
    name: "Xã Bình Dương",
  },
  {
    districtId: "051",
    wardId: "01714",
    name: "Xã Lê Chung",
  },
  {
    districtId: "051",
    wardId: "01723",
    name: "Xã Hồng Nam",
  },
  {
    districtId: "052",
    wardId: "01726",
    name: "Thị trấn Nguyên Bình",
  },
  {
    districtId: "052",
    wardId: "01729",
    name: "Thị trấn Tĩnh Túc",
  },
  {
    districtId: "052",
    wardId: "01732",
    name: "Xã Yên Lạc",
  },
  {
    districtId: "052",
    wardId: "01735",
    name: "Xã Triệu Nguyên",
  },
  {
    districtId: "052",
    wardId: "01738",
    name: "Xã Ca Thành",
  },
  {
    districtId: "052",
    wardId: "01744",
    name: "Xã Vũ Nông",
  },
  {
    districtId: "052",
    wardId: "01747",
    name: "Xã Minh Tâm",
  },
  {
    districtId: "052",
    wardId: "01750",
    name: "Xã Thể Dục",
  },
  {
    districtId: "052",
    wardId: "01756",
    name: "Xã Mai Long",
  },
  {
    districtId: "052",
    wardId: "01762",
    name: "Xã Vũ Minh",
  },
  {
    districtId: "052",
    wardId: "01765",
    name: "Xã Hoa Thám",
  },
  {
    districtId: "052",
    wardId: "01768",
    name: "Xã Phan Thanh",
  },
  {
    districtId: "052",
    wardId: "01771",
    name: "Xã Quang Thành",
  },
  {
    districtId: "052",
    wardId: "01774",
    name: "Xã Tam Kim",
  },
  {
    districtId: "052",
    wardId: "01777",
    name: "Xã Thành Công",
  },
  {
    districtId: "052",
    wardId: "01780",
    name: "Xã Thịnh Vượng",
  },
  {
    districtId: "052",
    wardId: "01783",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "053",
    wardId: "01786",
    name: "Thị trấn Đông Khê",
  },
  {
    districtId: "053",
    wardId: "01789",
    name: "Xã Canh Tân",
  },
  {
    districtId: "053",
    wardId: "01792",
    name: "Xã Kim Đồng",
  },
  {
    districtId: "053",
    wardId: "01795",
    name: "Xã Minh Khai",
  },
  {
    districtId: "053",
    wardId: "01801",
    name: "Xã Đức Thông",
  },
  {
    districtId: "053",
    wardId: "01804",
    name: "Xã Thái Cường",
  },
  {
    districtId: "053",
    wardId: "01807",
    name: "Xã Vân Trình",
  },
  {
    districtId: "053",
    wardId: "01810",
    name: "Xã Thụy Hùng",
  },
  {
    districtId: "053",
    wardId: "01813",
    name: "Xã Quang Trọng",
  },
  {
    districtId: "053",
    wardId: "01816",
    name: "Xã Trọng Con",
  },
  {
    districtId: "053",
    wardId: "01819",
    name: "Xã Lê Lai",
  },
  {
    districtId: "053",
    wardId: "01822",
    name: "Xã Đức Long",
  },
  {
    districtId: "053",
    wardId: "01828",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "053",
    wardId: "01831",
    name: "Xã Đức Xuân",
  },
  {
    districtId: "058",
    wardId: "01834",
    name: "Phường Nguyễn Thị Minh Khai",
  },
  {
    districtId: "058",
    wardId: "01837",
    name: "Phường Sông Cầu",
  },
  {
    districtId: "058",
    wardId: "01840",
    name: "Phường Đức Xuân",
  },
  {
    districtId: "058",
    wardId: "01843",
    name: "Phường Phùng Chí Kiên",
  },
  {
    districtId: "058",
    wardId: "01846",
    name: "Phường Huyền Tụng",
  },
  {
    districtId: "058",
    wardId: "01849",
    name: "Xã Dương Quang",
  },
  {
    districtId: "058",
    wardId: "01852",
    name: "Xã Nông Thượng",
  },
  {
    districtId: "058",
    wardId: "01855",
    name: "Phường Xuất Hóa",
  },
  {
    districtId: "060",
    wardId: "01858",
    name: "Xã Bằng Thành",
  },
  {
    districtId: "060",
    wardId: "01861",
    name: "Xã Nhạn Môn",
  },
  {
    districtId: "060",
    wardId: "01864",
    name: "Xã Bộc Bố",
  },
  {
    districtId: "060",
    wardId: "01867",
    name: "Xã Công Bằng",
  },
  {
    districtId: "060",
    wardId: "01870",
    name: "Xã Giáo Hiệu",
  },
  {
    districtId: "060",
    wardId: "01873",
    name: "Xã Xuân La",
  },
  {
    districtId: "060",
    wardId: "01876",
    name: "Xã An Thắng",
  },
  {
    districtId: "060",
    wardId: "01879",
    name: "Xã Cổ Linh",
  },
  {
    districtId: "060",
    wardId: "01882",
    name: "Xã Nghiên Loan",
  },
  {
    districtId: "060",
    wardId: "01885",
    name: "Xã Cao Tân",
  },
  {
    districtId: "061",
    wardId: "01888",
    name: "Thị trấn Chợ Rã",
  },
  {
    districtId: "061",
    wardId: "01891",
    name: "Xã Bành Trạch",
  },
  {
    districtId: "061",
    wardId: "01894",
    name: "Xã Phúc Lộc",
  },
  {
    districtId: "061",
    wardId: "01897",
    name: "Xã Hà Hiệu",
  },
  {
    districtId: "061",
    wardId: "01900",
    name: "Xã Cao Thượng",
  },
  {
    districtId: "061",
    wardId: "01906",
    name: "Xã Khang Ninh",
  },
  {
    districtId: "061",
    wardId: "01909",
    name: "Xã Nam Mẫu",
  },
  {
    districtId: "061",
    wardId: "01912",
    name: "Xã Thượng Giáo",
  },
  {
    districtId: "061",
    wardId: "01915",
    name: "Xã Địa Linh",
  },
  {
    districtId: "061",
    wardId: "01918",
    name: "Xã Yến Dương",
  },
  {
    districtId: "061",
    wardId: "01921",
    name: "Xã Chu Hương",
  },
  {
    districtId: "061",
    wardId: "01924",
    name: "Xã Quảng Khê",
  },
  {
    districtId: "061",
    wardId: "01927",
    name: "Xã Mỹ Phương",
  },
  {
    districtId: "061",
    wardId: "01930",
    name: "Xã Hoàng Trĩ",
  },
  {
    districtId: "061",
    wardId: "01933",
    name: "Xã Đồng Phúc",
  },
  {
    districtId: "062",
    wardId: "01936",
    name: "Thị trấn Nà Phặc",
  },
  {
    districtId: "062",
    wardId: "01939",
    name: "Xã Thượng Ân",
  },
  {
    districtId: "062",
    wardId: "01942",
    name: "Xã Bằng Vân",
  },
  {
    districtId: "062",
    wardId: "01945",
    name: "Xã Cốc Đán",
  },
  {
    districtId: "062",
    wardId: "01948",
    name: "Xã Trung Hoà",
  },
  {
    districtId: "062",
    wardId: "01951",
    name: "Xã Đức Vân",
  },
  {
    districtId: "062",
    wardId: "01954",
    name: "Xã Vân Tùng",
  },
  {
    districtId: "062",
    wardId: "01957",
    name: "Xã Thượng Quan",
  },
  {
    districtId: "062",
    wardId: "01960",
    name: "Xã Hiệp Lực",
  },
  {
    districtId: "062",
    wardId: "01963",
    name: "Xã Thuần Mang",
  },
  {
    districtId: "063",
    wardId: "01969",
    name: "Thị trấn Phủ Thông",
  },
  {
    districtId: "063",
    wardId: "01975",
    name: "Xã Vi Hương",
  },
  {
    districtId: "063",
    wardId: "01978",
    name: "Xã Sĩ Bình",
  },
  {
    districtId: "063",
    wardId: "01981",
    name: "Xã Vũ Muộn",
  },
  {
    districtId: "063",
    wardId: "01984",
    name: "Xã Đôn Phong",
  },
  {
    districtId: "063",
    wardId: "01990",
    name: "Xã Lục Bình",
  },
  {
    districtId: "063",
    wardId: "01993",
    name: "Xã Tân Tú",
  },
  {
    districtId: "063",
    wardId: "01999",
    name: "Xã Nguyên Phúc",
  },
  {
    districtId: "063",
    wardId: "02002",
    name: "Xã Cao Sơn",
  },
  {
    districtId: "063",
    wardId: "02005",
    name: "Xã Quân Hà",
  },
  {
    districtId: "063",
    wardId: "02008",
    name: "Xã Cẩm Giàng",
  },
  {
    districtId: "063",
    wardId: "02011",
    name: "Xã Mỹ Thanh",
  },
  {
    districtId: "063",
    wardId: "02014",
    name: "Xã Dương Phong",
  },
  {
    districtId: "063",
    wardId: "02017",
    name: "Xã Quang Thuận",
  },
  {
    districtId: "064",
    wardId: "02020",
    name: "Thị trấn Bằng Lũng",
  },
  {
    districtId: "064",
    wardId: "02023",
    name: "Xã Xuân Lạc",
  },
  {
    districtId: "064",
    wardId: "02026",
    name: "Xã Nam Cường",
  },
  {
    districtId: "064",
    wardId: "02029",
    name: "Xã Đồng Lạc",
  },
  {
    districtId: "064",
    wardId: "02032",
    name: "Xã Tân Lập",
  },
  {
    districtId: "064",
    wardId: "02035",
    name: "Xã Bản Thi",
  },
  {
    districtId: "064",
    wardId: "02038",
    name: "Xã Quảng Bạch",
  },
  {
    districtId: "064",
    wardId: "02041",
    name: "Xã Bằng Phúc",
  },
  {
    districtId: "064",
    wardId: "02044",
    name: "Xã Yên Thịnh",
  },
  {
    districtId: "064",
    wardId: "02047",
    name: "Xã Yên Thượng",
  },
  {
    districtId: "064",
    wardId: "02050",
    name: "Xã Phương Viên",
  },
  {
    districtId: "064",
    wardId: "02053",
    name: "Xã Ngọc Phái",
  },
  {
    districtId: "064",
    wardId: "02059",
    name: "Xã Đồng Thắng",
  },
  {
    districtId: "064",
    wardId: "02062",
    name: "Xã Lương Bằng",
  },
  {
    districtId: "064",
    wardId: "02065",
    name: "Xã Bằng Lãng",
  },
  {
    districtId: "064",
    wardId: "02068",
    name: "Xã Đại Sảo",
  },
  {
    districtId: "064",
    wardId: "02071",
    name: "Xã Nghĩa Tá",
  },
  {
    districtId: "064",
    wardId: "02077",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "064",
    wardId: "02080",
    name: "Xã Bình Trung",
  },
  {
    districtId: "064",
    wardId: "02083",
    name: "Xã Yên Phong",
  },
  {
    districtId: "065",
    wardId: "02086",
    name: "Thị trấn Đồng Tâm",
  },
  {
    districtId: "065",
    wardId: "02089",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "065",
    wardId: "02092",
    name: "Xã Thanh Vận",
  },
  {
    districtId: "065",
    wardId: "02095",
    name: "Xã Mai Lạp",
  },
  {
    districtId: "065",
    wardId: "02098",
    name: "Xã Hoà Mục",
  },
  {
    districtId: "065",
    wardId: "02101",
    name: "Xã Thanh Mai",
  },
  {
    districtId: "065",
    wardId: "02104",
    name: "Xã Cao Kỳ",
  },
  {
    districtId: "065",
    wardId: "02107",
    name: "Xã Nông Hạ",
  },
  {
    districtId: "065",
    wardId: "02110",
    name: "Xã Yên Cư",
  },
  {
    districtId: "065",
    wardId: "02113",
    name: "Xã Thanh Thịnh",
  },
  {
    districtId: "065",
    wardId: "02116",
    name: "Xã Yên Hân",
  },
  {
    districtId: "065",
    wardId: "02122",
    name: "Xã Như Cố",
  },
  {
    districtId: "065",
    wardId: "02125",
    name: "Xã Bình Văn",
  },
  {
    districtId: "065",
    wardId: "02131",
    name: "Xã Quảng Chu",
  },
  {
    districtId: "066",
    wardId: "02137",
    name: "Xã Văn Vũ",
  },
  {
    districtId: "066",
    wardId: "02140",
    name: "Xã Văn Lang",
  },
  {
    districtId: "066",
    wardId: "02143",
    name: "Xã Lương Thượng",
  },
  {
    districtId: "066",
    wardId: "02146",
    name: "Xã Kim Hỷ",
  },
  {
    districtId: "066",
    wardId: "02152",
    name: "Xã Cường Lợi",
  },
  {
    districtId: "066",
    wardId: "02155",
    name: "Thị trấn Yến Lạc",
  },
  {
    districtId: "066",
    wardId: "02158",
    name: "Xã Kim Lư",
  },
  {
    districtId: "066",
    wardId: "02161",
    name: "Xã Sơn Thành",
  },
  {
    districtId: "066",
    wardId: "02170",
    name: "Xã Văn Minh",
  },
  {
    districtId: "066",
    wardId: "02173",
    name: "Xã Côn Minh",
  },
  {
    districtId: "066",
    wardId: "02176",
    name: "Xã Cư Lễ",
  },
  {
    districtId: "066",
    wardId: "02179",
    name: "Xã Trần Phú",
  },
  {
    districtId: "066",
    wardId: "02185",
    name: "Xã Quang Phong",
  },
  {
    districtId: "066",
    wardId: "02188",
    name: "Xã Dương Sơn",
  },
  {
    districtId: "066",
    wardId: "02191",
    name: "Xã Xuân Dương",
  },
  {
    districtId: "066",
    wardId: "02194",
    name: "Xã Đổng Xá",
  },
  {
    districtId: "066",
    wardId: "02197",
    name: "Xã Liêm Thuỷ",
  },
  {
    districtId: "070",
    wardId: "02200",
    name: "Phường Phan Thiết",
  },
  {
    districtId: "070",
    wardId: "02203",
    name: "Phường Minh Xuân",
  },
  {
    districtId: "070",
    wardId: "02206",
    name: "Phường Tân Quang",
  },
  {
    districtId: "070",
    wardId: "02209",
    name: "Xã Tràng Đà",
  },
  {
    districtId: "070",
    wardId: "02212",
    name: "Phường Nông Tiến",
  },
  {
    districtId: "070",
    wardId: "02215",
    name: "Phường Ỷ La",
  },
  {
    districtId: "070",
    wardId: "02216",
    name: "Phường Tân Hà",
  },
  {
    districtId: "070",
    wardId: "02218",
    name: "Phường Hưng Thành",
  },
  {
    districtId: "070",
    wardId: "02497",
    name: "Xã Kim Phú",
  },
  {
    districtId: "070",
    wardId: "02503",
    name: "Xã An Khang",
  },
  {
    districtId: "070",
    wardId: "02509",
    name: "Phường Mỹ Lâm",
  },
  {
    districtId: "070",
    wardId: "02512",
    name: "Phường An Tường",
  },
  {
    districtId: "070",
    wardId: "02515",
    name: "Xã Lưỡng Vượng",
  },
  {
    districtId: "070",
    wardId: "02521",
    name: "Xã Thái Long",
  },
  {
    districtId: "070",
    wardId: "02524",
    name: "Phường Đội Cấn",
  },
  {
    districtId: "071",
    wardId: "02233",
    name: "Xã Phúc Yên",
  },
  {
    districtId: "071",
    wardId: "02242",
    name: "Xã Xuân Lập",
  },
  {
    districtId: "071",
    wardId: "02251",
    name: "Xã Khuôn Hà",
  },
  {
    districtId: "071",
    wardId: "02266",
    name: "Thị trấn Lăng Can",
  },
  {
    districtId: "071",
    wardId: "02269",
    name: "Xã Thượng Lâm",
  },
  {
    districtId: "071",
    wardId: "02290",
    name: "Xã Bình An",
  },
  {
    districtId: "071",
    wardId: "02293",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "071",
    wardId: "02296",
    name: "Xã Thổ Bình",
  },
  {
    districtId: "071",
    wardId: "02299",
    name: "Xã Phúc Sơn",
  },
  {
    districtId: "071",
    wardId: "02302",
    name: "Xã Minh Quang",
  },
  {
    districtId: "072",
    wardId: "02221",
    name: "Thị trấn Na Hang",
  },
  {
    districtId: "072",
    wardId: "02227",
    name: "Xã Sinh Long",
  },
  {
    districtId: "072",
    wardId: "02230",
    name: "Xã Thượng Giáp",
  },
  {
    districtId: "072",
    wardId: "02239",
    name: "Xã Thượng Nông",
  },
  {
    districtId: "072",
    wardId: "02245",
    name: "Xã Côn Lôn",
  },
  {
    districtId: "072",
    wardId: "02248",
    name: "Xã Yên Hoa",
  },
  {
    districtId: "072",
    wardId: "02254",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "072",
    wardId: "02260",
    name: "Xã Đà Vị",
  },
  {
    districtId: "072",
    wardId: "02263",
    name: "Xã Khau Tinh",
  },
  {
    districtId: "072",
    wardId: "02275",
    name: "Xã Sơn Phú",
  },
  {
    districtId: "072",
    wardId: "02281",
    name: "Xã Năng Khả",
  },
  {
    districtId: "072",
    wardId: "02284",
    name: "Xã Thanh Tương",
  },
  {
    districtId: "073",
    wardId: "02287",
    name: "Thị trấn Vĩnh Lộc",
  },
  {
    districtId: "073",
    wardId: "02305",
    name: "Xã Trung Hà",
  },
  {
    districtId: "073",
    wardId: "02308",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "073",
    wardId: "02311",
    name: "Xã Hà Lang",
  },
  {
    districtId: "073",
    wardId: "02314",
    name: "Xã Hùng Mỹ",
  },
  {
    districtId: "073",
    wardId: "02317",
    name: "Xã Yên Lập",
  },
  {
    districtId: "073",
    wardId: "02320",
    name: "Xã Tân An",
  },
  {
    districtId: "073",
    wardId: "02323",
    name: "Xã Bình Phú",
  },
  {
    districtId: "073",
    wardId: "02326",
    name: "Xã Xuân Quang",
  },
  {
    districtId: "073",
    wardId: "02329",
    name: "Xã Ngọc Hội",
  },
  {
    districtId: "073",
    wardId: "02332",
    name: "Xã Phú Bình",
  },
  {
    districtId: "073",
    wardId: "02335",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "073",
    wardId: "02338",
    name: "Xã Phúc Thịnh",
  },
  {
    districtId: "073",
    wardId: "02341",
    name: "Xã Kiên Đài",
  },
  {
    districtId: "073",
    wardId: "02344",
    name: "Xã Tân Thịnh",
  },
  {
    districtId: "073",
    wardId: "02347",
    name: "Xã Trung Hòa",
  },
  {
    districtId: "073",
    wardId: "02350",
    name: "Xã Kim Bình",
  },
  {
    districtId: "073",
    wardId: "02353",
    name: "Xã Hòa An",
  },
  {
    districtId: "073",
    wardId: "02356",
    name: "Xã Vinh Quang",
  },
  {
    districtId: "073",
    wardId: "02359",
    name: "Xã Tri Phú",
  },
  {
    districtId: "073",
    wardId: "02362",
    name: "Xã Nhân Lý",
  },
  {
    districtId: "073",
    wardId: "02365",
    name: "Xã Yên Nguyên",
  },
  {
    districtId: "073",
    wardId: "02368",
    name: "Xã Linh Phú",
  },
  {
    districtId: "073",
    wardId: "02371",
    name: "Xã Bình Nhân",
  },
  {
    districtId: "074",
    wardId: "02374",
    name: "Thị trấn Tân Yên",
  },
  {
    districtId: "074",
    wardId: "02377",
    name: "Xã Yên Thuận",
  },
  {
    districtId: "074",
    wardId: "02380",
    name: "Xã Bạch Xa",
  },
  {
    districtId: "074",
    wardId: "02383",
    name: "Xã Minh Khương",
  },
  {
    districtId: "074",
    wardId: "02386",
    name: "Xã Yên Lâm",
  },
  {
    districtId: "074",
    wardId: "02389",
    name: "Xã Minh Dân",
  },
  {
    districtId: "074",
    wardId: "02392",
    name: "Xã Phù Lưu",
  },
  {
    districtId: "074",
    wardId: "02395",
    name: "Xã Minh Hương",
  },
  {
    districtId: "074",
    wardId: "02398",
    name: "Xã Yên Phú",
  },
  {
    districtId: "074",
    wardId: "02401",
    name: "Xã Tân Thành",
  },
  {
    districtId: "074",
    wardId: "02404",
    name: "Xã Bình Xa",
  },
  {
    districtId: "074",
    wardId: "02407",
    name: "Xã Thái Sơn",
  },
  {
    districtId: "074",
    wardId: "02410",
    name: "Xã Nhân Mục",
  },
  {
    districtId: "074",
    wardId: "02413",
    name: "Xã Thành Long",
  },
  {
    districtId: "074",
    wardId: "02416",
    name: "Xã Bằng Cốc",
  },
  {
    districtId: "074",
    wardId: "02419",
    name: "Xã Thái Hòa",
  },
  {
    districtId: "074",
    wardId: "02422",
    name: "Xã Đức Ninh",
  },
  {
    districtId: "074",
    wardId: "02425",
    name: "Xã Hùng Đức",
  },
  {
    districtId: "075",
    wardId: "02431",
    name: "Xã Quí Quân",
  },
  {
    districtId: "075",
    wardId: "02434",
    name: "Xã Lực Hành",
  },
  {
    districtId: "075",
    wardId: "02437",
    name: "Xã Kiến Thiết",
  },
  {
    districtId: "075",
    wardId: "02440",
    name: "Xã Trung Minh",
  },
  {
    districtId: "075",
    wardId: "02443",
    name: "Xã Chiêu Yên",
  },
  {
    districtId: "075",
    wardId: "02446",
    name: "Xã Trung Trực",
  },
  {
    districtId: "075",
    wardId: "02449",
    name: "Xã Xuân Vân",
  },
  {
    districtId: "075",
    wardId: "02452",
    name: "Xã Phúc Ninh",
  },
  {
    districtId: "075",
    wardId: "02455",
    name: "Xã Hùng Lợi",
  },
  {
    districtId: "075",
    wardId: "02458",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "075",
    wardId: "02461",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "075",
    wardId: "02464",
    name: "Xã Tứ Quận",
  },
  {
    districtId: "075",
    wardId: "02467",
    name: "Xã Đạo Viện",
  },
  {
    districtId: "075",
    wardId: "02470",
    name: "Xã Tân Long",
  },
  {
    districtId: "075",
    wardId: "02473",
    name: "Thị trấn Yên Sơn",
  },
  {
    districtId: "075",
    wardId: "02476",
    name: "Xã Kim Quan",
  },
  {
    districtId: "075",
    wardId: "02479",
    name: "Xã Lang Quán",
  },
  {
    districtId: "075",
    wardId: "02482",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "075",
    wardId: "02485",
    name: "Xã Công Đa",
  },
  {
    districtId: "075",
    wardId: "02488",
    name: "Xã Trung Môn",
  },
  {
    districtId: "075",
    wardId: "02491",
    name: "Xã Chân Sơn",
  },
  {
    districtId: "075",
    wardId: "02494",
    name: "Xã Thái Bình",
  },
  {
    districtId: "075",
    wardId: "02500",
    name: "Xã Tiến Bộ",
  },
  {
    districtId: "075",
    wardId: "02506",
    name: "Xã Mỹ Bằng",
  },
  {
    districtId: "075",
    wardId: "02518",
    name: "Xã Hoàng Khai",
  },
  {
    districtId: "075",
    wardId: "02527",
    name: "Xã Nhữ Hán",
  },
  {
    districtId: "075",
    wardId: "02530",
    name: "Xã Nhữ Khê",
  },
  {
    districtId: "075",
    wardId: "02533",
    name: "Xã Đội Bình",
  },
  {
    districtId: "076",
    wardId: "02536",
    name: "Thị trấn Sơn Dương",
  },
  {
    districtId: "076",
    wardId: "02539",
    name: "Xã Trung Yên",
  },
  {
    districtId: "076",
    wardId: "02542",
    name: "Xã Minh Thanh",
  },
  {
    districtId: "076",
    wardId: "02545",
    name: "Xã Tân Trào",
  },
  {
    districtId: "076",
    wardId: "02548",
    name: "Xã Vĩnh Lợi",
  },
  {
    districtId: "076",
    wardId: "02551",
    name: "Xã Thượng Ấm",
  },
  {
    districtId: "076",
    wardId: "02554",
    name: "Xã Bình Yên",
  },
  {
    districtId: "076",
    wardId: "02557",
    name: "Xã Lương Thiện",
  },
  {
    districtId: "076",
    wardId: "02560",
    name: "Xã Tú Thịnh",
  },
  {
    districtId: "076",
    wardId: "02563",
    name: "Xã Cấp Tiến",
  },
  {
    districtId: "076",
    wardId: "02566",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "076",
    wardId: "02569",
    name: "Xã Phúc Ứng",
  },
  {
    districtId: "076",
    wardId: "02572",
    name: "Xã Đông Thọ",
  },
  {
    districtId: "076",
    wardId: "02575",
    name: "Xã Kháng Nhật",
  },
  {
    districtId: "076",
    wardId: "02578",
    name: "Xã Hợp Hòa",
  },
  {
    districtId: "076",
    wardId: "02584",
    name: "Xã Quyết Thắng",
  },
  {
    districtId: "076",
    wardId: "02587",
    name: "Xã Đồng Quý",
  },
  {
    districtId: "076",
    wardId: "02590",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "076",
    wardId: "02593",
    name: "Xã Vân Sơn",
  },
  {
    districtId: "076",
    wardId: "02596",
    name: "Xã Văn Phú",
  },
  {
    districtId: "076",
    wardId: "02599",
    name: "Xã Chi Thiết",
  },
  {
    districtId: "076",
    wardId: "02602",
    name: "Xã Đông Lợi",
  },
  {
    districtId: "076",
    wardId: "02605",
    name: "Xã Thiện Kế",
  },
  {
    districtId: "076",
    wardId: "02608",
    name: "Xã Hồng Lạc",
  },
  {
    districtId: "076",
    wardId: "02611",
    name: "Xã Phú Lương",
  },
  {
    districtId: "076",
    wardId: "02614",
    name: "Xã Ninh Lai",
  },
  {
    districtId: "076",
    wardId: "02617",
    name: "Xã Đại Phú",
  },
  {
    districtId: "076",
    wardId: "02620",
    name: "Xã Sơn Nam",
  },
  {
    districtId: "076",
    wardId: "02623",
    name: "Xã Hào Phú",
  },
  {
    districtId: "076",
    wardId: "02626",
    name: "Xã Tam Đa",
  },
  {
    districtId: "076",
    wardId: "02632",
    name: "Xã Trường Sinh",
  },
  {
    districtId: "080",
    wardId: "02635",
    name: "Phường Duyên Hải",
  },
  {
    districtId: "080",
    wardId: "02641",
    name: "Phường Lào Cai",
  },
  {
    districtId: "080",
    wardId: "02644",
    name: "Phường Cốc Lếu",
  },
  {
    districtId: "080",
    wardId: "02647",
    name: "Phường Kim Tân",
  },
  {
    districtId: "080",
    wardId: "02650",
    name: "Phường Bắc Lệnh",
  },
  {
    districtId: "080",
    wardId: "02653",
    name: "Phường Pom Hán",
  },
  {
    districtId: "080",
    wardId: "02656",
    name: "Phường Xuân Tăng",
  },
  {
    districtId: "080",
    wardId: "02658",
    name: "Phường Bình Minh",
  },
  {
    districtId: "080",
    wardId: "02659",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "080",
    wardId: "02662",
    name: "Xã Đồng Tuyển",
  },
  {
    districtId: "080",
    wardId: "02665",
    name: "Xã Vạn Hoà",
  },
  {
    districtId: "080",
    wardId: "02668",
    name: "Phường Bắc Cường",
  },
  {
    districtId: "080",
    wardId: "02671",
    name: "Phường Nam Cường",
  },
  {
    districtId: "080",
    wardId: "02674",
    name: "Xã Cam Đường",
  },
  {
    districtId: "080",
    wardId: "02677",
    name: "Xã Tả Phời",
  },
  {
    districtId: "080",
    wardId: "02680",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "080",
    wardId: "02746",
    name: "Xã Cốc San",
  },
  {
    districtId: "082",
    wardId: "02683",
    name: "Thị trấn Bát Xát",
  },
  {
    districtId: "082",
    wardId: "02686",
    name: "Xã A Mú Sung",
  },
  {
    districtId: "082",
    wardId: "02689",
    name: "Xã Nậm Chạc",
  },
  {
    districtId: "082",
    wardId: "02692",
    name: "Xã A Lù",
  },
  {
    districtId: "082",
    wardId: "02695",
    name: "Xã Trịnh Tường",
  },
  {
    districtId: "082",
    wardId: "02701",
    name: "Xã Y Tý",
  },
  {
    districtId: "082",
    wardId: "02704",
    name: "Xã Cốc Mỳ",
  },
  {
    districtId: "082",
    wardId: "02707",
    name: "Xã Dền Sáng",
  },
  {
    districtId: "082",
    wardId: "02710",
    name: "Xã Bản Vược",
  },
  {
    districtId: "082",
    wardId: "02713",
    name: "Xã Sàng Ma Sáo",
  },
  {
    districtId: "082",
    wardId: "02716",
    name: "Xã Bản Qua",
  },
  {
    districtId: "082",
    wardId: "02719",
    name: "Xã Mường Vi",
  },
  {
    districtId: "082",
    wardId: "02722",
    name: "Xã Dền Thàng",
  },
  {
    districtId: "082",
    wardId: "02725",
    name: "Xã Bản Xèo",
  },
  {
    districtId: "082",
    wardId: "02728",
    name: "Xã Mường Hum",
  },
  {
    districtId: "082",
    wardId: "02731",
    name: "Xã Trung Lèng Hồ",
  },
  {
    districtId: "082",
    wardId: "02734",
    name: "Xã Quang Kim",
  },
  {
    districtId: "082",
    wardId: "02737",
    name: "Xã Pa Cheo",
  },
  {
    districtId: "082",
    wardId: "02740",
    name: "Xã Nậm Pung",
  },
  {
    districtId: "082",
    wardId: "02743",
    name: "Xã Phìn Ngan",
  },
  {
    districtId: "082",
    wardId: "02749",
    name: "Xã Tòng Sành",
  },
  {
    districtId: "083",
    wardId: "02752",
    name: "Xã Pha Long",
  },
  {
    districtId: "083",
    wardId: "02755",
    name: "Xã Tả Ngải Chồ",
  },
  {
    districtId: "083",
    wardId: "02758",
    name: "Xã Tung Chung Phố",
  },
  {
    districtId: "083",
    wardId: "02761",
    name: "Thị trấn Mường Khương",
  },
  {
    districtId: "083",
    wardId: "02764",
    name: "Xã Dìn Chin",
  },
  {
    districtId: "083",
    wardId: "02767",
    name: "Xã Tả Gia Khâu",
  },
  {
    districtId: "083",
    wardId: "02770",
    name: "Xã Nậm Chảy",
  },
  {
    districtId: "083",
    wardId: "02773",
    name: "Xã Nấm Lư",
  },
  {
    districtId: "083",
    wardId: "02776",
    name: "Xã Lùng Khấu Nhin",
  },
  {
    districtId: "083",
    wardId: "02779",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "083",
    wardId: "02782",
    name: "Xã Cao Sơn",
  },
  {
    districtId: "083",
    wardId: "02785",
    name: "Xã Lùng Vai",
  },
  {
    districtId: "083",
    wardId: "02788",
    name: "Xã Bản Lầu",
  },
  {
    districtId: "083",
    wardId: "02791",
    name: "Xã La Pan Tẩn",
  },
  {
    districtId: "083",
    wardId: "02794",
    name: "Xã Tả Thàng",
  },
  {
    districtId: "083",
    wardId: "02797",
    name: "Xã Bản Sen",
  },
  {
    districtId: "084",
    wardId: "02800",
    name: "Xã Nàn Sán",
  },
  {
    districtId: "084",
    wardId: "02803",
    name: "Xã Thào Chư Phìn",
  },
  {
    districtId: "084",
    wardId: "02806",
    name: "Xã Bản Mế",
  },
  {
    districtId: "084",
    wardId: "02809",
    name: "Thị trấn Si Ma Cai",
  },
  {
    districtId: "084",
    wardId: "02812",
    name: "Xã Sán Chải",
  },
  {
    districtId: "084",
    wardId: "02818",
    name: "Xã Lùng Thẩn",
  },
  {
    districtId: "084",
    wardId: "02821",
    name: "Xã Cán Cấu",
  },
  {
    districtId: "084",
    wardId: "02824",
    name: "Xã Sín Chéng",
  },
  {
    districtId: "084",
    wardId: "02827",
    name: "Xã Quan Hồ Thẩn",
  },
  {
    districtId: "084",
    wardId: "02836",
    name: "Xã Nàn Xín",
  },
  {
    districtId: "085",
    wardId: "02839",
    name: "Thị trấn Bắc Hà",
  },
  {
    districtId: "085",
    wardId: "02842",
    name: "Xã Lùng Cải",
  },
  {
    districtId: "085",
    wardId: "02848",
    name: "Xã Lùng Phình",
  },
  {
    districtId: "085",
    wardId: "02851",
    name: "Xã Tả Van Chư",
  },
  {
    districtId: "085",
    wardId: "02854",
    name: "Xã Tả Củ Tỷ",
  },
  {
    districtId: "085",
    wardId: "02857",
    name: "Xã Thải Giàng Phố",
  },
  {
    districtId: "085",
    wardId: "02863",
    name: "Xã Hoàng Thu Phố",
  },
  {
    districtId: "085",
    wardId: "02866",
    name: "Xã Bản Phố",
  },
  {
    districtId: "085",
    wardId: "02869",
    name: "Xã Bản Liền",
  },
  {
    districtId: "085",
    wardId: "02872",
    name: "Xã Tà Chải",
  },
  {
    districtId: "085",
    wardId: "02875",
    name: "Xã Na Hối",
  },
  {
    districtId: "085",
    wardId: "02878",
    name: "Xã Cốc Ly",
  },
  {
    districtId: "085",
    wardId: "02881",
    name: "Xã Nậm Mòn",
  },
  {
    districtId: "085",
    wardId: "02884",
    name: "Xã Nậm Đét",
  },
  {
    districtId: "085",
    wardId: "02887",
    name: "Xã Nậm Khánh",
  },
  {
    districtId: "085",
    wardId: "02890",
    name: "Xã Bảo Nhai",
  },
  {
    districtId: "085",
    wardId: "02893",
    name: "Xã Nậm Lúc",
  },
  {
    districtId: "085",
    wardId: "02896",
    name: "Xã Cốc Lầu",
  },
  {
    districtId: "085",
    wardId: "02899",
    name: "Xã Bản Cái",
  },
  {
    districtId: "086",
    wardId: "02902",
    name: "Thị trấn N.T Phong Hải",
  },
  {
    districtId: "086",
    wardId: "02905",
    name: "Thị trấn Phố Lu",
  },
  {
    districtId: "086",
    wardId: "02908",
    name: "Thị trấn Tằng Loỏng",
  },
  {
    districtId: "086",
    wardId: "02911",
    name: "Xã Bản Phiệt",
  },
  {
    districtId: "086",
    wardId: "02914",
    name: "Xã Bản Cầm",
  },
  {
    districtId: "086",
    wardId: "02917",
    name: "Xã Thái Niên",
  },
  {
    districtId: "086",
    wardId: "02920",
    name: "Xã Phong Niên",
  },
  {
    districtId: "086",
    wardId: "02923",
    name: "Xã Gia Phú",
  },
  {
    districtId: "086",
    wardId: "02926",
    name: "Xã Xuân Quang",
  },
  {
    districtId: "086",
    wardId: "02929",
    name: "Xã Sơn Hải",
  },
  {
    districtId: "086",
    wardId: "02932",
    name: "Xã Xuân Giao",
  },
  {
    districtId: "086",
    wardId: "02935",
    name: "Xã Trì Quang",
  },
  {
    districtId: "086",
    wardId: "02938",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "086",
    wardId: "02944",
    name: "Xã Phú Nhuận",
  },
  {
    districtId: "087",
    wardId: "02947",
    name: "Thị trấn Phố Ràng",
  },
  {
    districtId: "087",
    wardId: "02950",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "087",
    wardId: "02953",
    name: "Xã Nghĩa Đô",
  },
  {
    districtId: "087",
    wardId: "02956",
    name: "Xã Vĩnh Yên",
  },
  {
    districtId: "087",
    wardId: "02959",
    name: "Xã Điện Quan",
  },
  {
    districtId: "087",
    wardId: "02962",
    name: "Xã Xuân Hoà",
  },
  {
    districtId: "087",
    wardId: "02965",
    name: "Xã Tân Dương",
  },
  {
    districtId: "087",
    wardId: "02968",
    name: "Xã Thượng Hà",
  },
  {
    districtId: "087",
    wardId: "02971",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "087",
    wardId: "02974",
    name: "Xã Cam Cọn",
  },
  {
    districtId: "087",
    wardId: "02977",
    name: "Xã Minh Tân",
  },
  {
    districtId: "087",
    wardId: "02980",
    name: "Xã Xuân Thượng",
  },
  {
    districtId: "087",
    wardId: "02983",
    name: "Xã Việt Tiến",
  },
  {
    districtId: "087",
    wardId: "02986",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "087",
    wardId: "02989",
    name: "Xã Bảo Hà",
  },
  {
    districtId: "087",
    wardId: "02992",
    name: "Xã Lương Sơn",
  },
  {
    districtId: "087",
    wardId: "02998",
    name: "Xã Phúc Khánh",
  },
  {
    districtId: "088",
    wardId: "03001",
    name: "Phường Sa Pa",
  },
  {
    districtId: "088",
    wardId: "03002",
    name: "Phường Sa Pả",
  },
  {
    districtId: "088",
    wardId: "03003",
    name: "Phường Ô Quý Hồ",
  },
  {
    districtId: "088",
    wardId: "03004",
    name: "Xã Ngũ Chỉ Sơn",
  },
  {
    districtId: "088",
    wardId: "03006",
    name: "Phường Phan Si Păng",
  },
  {
    districtId: "088",
    wardId: "03010",
    name: "Xã Trung Chải",
  },
  {
    districtId: "088",
    wardId: "03013",
    name: "Xã Tả Phìn",
  },
  {
    districtId: "088",
    wardId: "03016",
    name: "Phường Hàm Rồng",
  },
  {
    districtId: "088",
    wardId: "03019",
    name: "Xã Hoàng Liên",
  },
  {
    districtId: "088",
    wardId: "03022",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "088",
    wardId: "03028",
    name: "Phường Cầu Mây",
  },
  {
    districtId: "088",
    wardId: "03037",
    name: "Xã Mường Hoa",
  },
  {
    districtId: "088",
    wardId: "03040",
    name: "Xã Tả Van",
  },
  {
    districtId: "088",
    wardId: "03043",
    name: "Xã Mường Bo",
  },
  {
    districtId: "088",
    wardId: "03046",
    name: "Xã Bản Hồ",
  },
  {
    districtId: "088",
    wardId: "03052",
    name: "Xã Liên Minh",
  },
  {
    districtId: "089",
    wardId: "03055",
    name: "Thị trấn Khánh Yên",
  },
  {
    districtId: "089",
    wardId: "03061",
    name: "Xã Võ Lao",
  },
  {
    districtId: "089",
    wardId: "03064",
    name: "Xã Sơn Thuỷ",
  },
  {
    districtId: "089",
    wardId: "03067",
    name: "Xã Nậm Mả",
  },
  {
    districtId: "089",
    wardId: "03070",
    name: "Xã Tân Thượng",
  },
  {
    districtId: "089",
    wardId: "03073",
    name: "Xã Nậm Rạng",
  },
  {
    districtId: "089",
    wardId: "03076",
    name: "Xã Nậm Chầy",
  },
  {
    districtId: "089",
    wardId: "03079",
    name: "Xã Tân An",
  },
  {
    districtId: "089",
    wardId: "03082",
    name: "Xã Khánh Yên Thượng",
  },
  {
    districtId: "089",
    wardId: "03085",
    name: "Xã Nậm Xé",
  },
  {
    districtId: "089",
    wardId: "03088",
    name: "Xã Dần Thàng",
  },
  {
    districtId: "089",
    wardId: "03091",
    name: "Xã Chiềng Ken",
  },
  {
    districtId: "089",
    wardId: "03094",
    name: "Xã Làng Giàng",
  },
  {
    districtId: "089",
    wardId: "03097",
    name: "Xã Hoà Mạc",
  },
  {
    districtId: "089",
    wardId: "03100",
    name: "Xã Khánh Yên Trung",
  },
  {
    districtId: "089",
    wardId: "03103",
    name: "Xã Khánh Yên Hạ",
  },
  {
    districtId: "089",
    wardId: "03106",
    name: "Xã Dương Quỳ",
  },
  {
    districtId: "089",
    wardId: "03109",
    name: "Xã Nậm Tha",
  },
  {
    districtId: "089",
    wardId: "03112",
    name: "Xã Minh Lương",
  },
  {
    districtId: "089",
    wardId: "03115",
    name: "Xã Thẩm Dương",
  },
  {
    districtId: "089",
    wardId: "03118",
    name: "Xã Liêm Phú",
  },
  {
    districtId: "089",
    wardId: "03121",
    name: "Xã Nậm Xây",
  },
  {
    districtId: "094",
    wardId: "03124",
    name: "Phường Noong Bua",
  },
  {
    districtId: "094",
    wardId: "03127",
    name: "Phường Him Lam",
  },
  {
    districtId: "094",
    wardId: "03130",
    name: "Phường Thanh Bình",
  },
  {
    districtId: "094",
    wardId: "03133",
    name: "Phường Tân Thanh",
  },
  {
    districtId: "094",
    wardId: "03136",
    name: "Phường Mường Thanh",
  },
  {
    districtId: "094",
    wardId: "03139",
    name: "Phường Nam Thanh",
  },
  {
    districtId: "094",
    wardId: "03142",
    name: "Phường Thanh Trường",
  },
  {
    districtId: "094",
    wardId: "03145",
    name: "Xã Thanh Minh",
  },
  {
    districtId: "094",
    wardId: "03316",
    name: "Xã Nà Tấu",
  },
  {
    districtId: "094",
    wardId: "03317",
    name: "Xã Nà Nhạn",
  },
  {
    districtId: "094",
    wardId: "03325",
    name: "Xã Mường Phăng",
  },
  {
    districtId: "094",
    wardId: "03326",
    name: "Xã Pá Khoang",
  },
  {
    districtId: "095",
    wardId: "03148",
    name: "Phường Sông Đà",
  },
  {
    districtId: "095",
    wardId: "03151",
    name: "Phường Na Lay",
  },
  {
    districtId: "095",
    wardId: "03184",
    name: "Xã Lay Nưa",
  },
  {
    districtId: "096",
    wardId: "03154",
    name: "Xã Sín Thầu",
  },
  {
    districtId: "096",
    wardId: "03155",
    name: "Xã Sen Thượng",
  },
  {
    districtId: "096",
    wardId: "03157",
    name: "Xã Chung Chải",
  },
  {
    districtId: "096",
    wardId: "03158",
    name: "Xã Leng Su Sìn",
  },
  {
    districtId: "096",
    wardId: "03159",
    name: "Xã Pá Mỳ",
  },
  {
    districtId: "096",
    wardId: "03160",
    name: "Xã Mường Nhé",
  },
  {
    districtId: "096",
    wardId: "03161",
    name: "Xã Nậm Vì",
  },
  {
    districtId: "096",
    wardId: "03162",
    name: "Xã Nậm Kè",
  },
  {
    districtId: "096",
    wardId: "03163",
    name: "Xã Mường Toong",
  },
  {
    districtId: "096",
    wardId: "03164",
    name: "Xã Quảng Lâm",
  },
  {
    districtId: "096",
    wardId: "03177",
    name: "Xã Huổi Lếnh",
  },
  {
    districtId: "097",
    wardId: "03172",
    name: "Thị Trấn Mường Chà",
  },
  {
    districtId: "097",
    wardId: "03178",
    name: "Xã Xá Tổng",
  },
  {
    districtId: "097",
    wardId: "03181",
    name: "Xã Mường Tùng",
  },
  {
    districtId: "097",
    wardId: "03190",
    name: "Xã Hừa Ngài",
  },
  {
    districtId: "097",
    wardId: "03191",
    name: "Xã Huổi Mí",
  },
  {
    districtId: "097",
    wardId: "03193",
    name: "Xã Pa Ham",
  },
  {
    districtId: "097",
    wardId: "03194",
    name: "Xã Nậm Nèn",
  },
  {
    districtId: "097",
    wardId: "03196",
    name: "Xã Huổi Lèng",
  },
  {
    districtId: "097",
    wardId: "03197",
    name: "Xã Sa Lông",
  },
  {
    districtId: "097",
    wardId: "03200",
    name: "Xã Ma Thì Hồ",
  },
  {
    districtId: "097",
    wardId: "03201",
    name: "Xã Na Sang",
  },
  {
    districtId: "097",
    wardId: "03202",
    name: "Xã Mường Mươn",
  },
  {
    districtId: "098",
    wardId: "03217",
    name: "Thị trấn Tủa Chùa",
  },
  {
    districtId: "098",
    wardId: "03220",
    name: "Xã Huổi Só",
  },
  {
    districtId: "098",
    wardId: "03223",
    name: "Xã Xín Chải",
  },
  {
    districtId: "098",
    wardId: "03226",
    name: "Xã Tả Sìn Thàng",
  },
  {
    districtId: "098",
    wardId: "03229",
    name: "Xã Lao Xả Phình",
  },
  {
    districtId: "098",
    wardId: "03232",
    name: "Xã Tả Phìn",
  },
  {
    districtId: "098",
    wardId: "03235",
    name: "Xã Tủa Thàng",
  },
  {
    districtId: "098",
    wardId: "03238",
    name: "Xã Trung Thu",
  },
  {
    districtId: "098",
    wardId: "03241",
    name: "Xã Sính Phình",
  },
  {
    districtId: "098",
    wardId: "03244",
    name: "Xã Sáng Nhè",
  },
  {
    districtId: "098",
    wardId: "03247",
    name: "Xã Mường Đun",
  },
  {
    districtId: "098",
    wardId: "03250",
    name: "Xã Mường Báng",
  },
  {
    districtId: "099",
    wardId: "03253",
    name: "Thị trấn Tuần Giáo",
  },
  {
    districtId: "099",
    wardId: "03259",
    name: "Xã Phình Sáng",
  },
  {
    districtId: "099",
    wardId: "03260",
    name: "Xã Rạng Đông",
  },
  {
    districtId: "099",
    wardId: "03262",
    name: "Xã Mùn Chung",
  },
  {
    districtId: "099",
    wardId: "03263",
    name: "Xã Nà Tòng",
  },
  {
    districtId: "099",
    wardId: "03265",
    name: "Xã Ta Ma",
  },
  {
    districtId: "099",
    wardId: "03268",
    name: "Xã Mường Mùn",
  },
  {
    districtId: "099",
    wardId: "03269",
    name: "Xã Pú Xi",
  },
  {
    districtId: "099",
    wardId: "03271",
    name: "Xã Pú Nhung",
  },
  {
    districtId: "099",
    wardId: "03274",
    name: "Xã Quài Nưa",
  },
  {
    districtId: "099",
    wardId: "03277",
    name: "Xã Mường Thín",
  },
  {
    districtId: "099",
    wardId: "03280",
    name: "Xã Tỏa Tình",
  },
  {
    districtId: "099",
    wardId: "03283",
    name: "Xã Nà Sáy",
  },
  {
    districtId: "099",
    wardId: "03284",
    name: "Xã Mường Khong",
  },
  {
    districtId: "099",
    wardId: "03289",
    name: "Xã Quài Cang",
  },
  {
    districtId: "099",
    wardId: "03295",
    name: "Xã Quài Tở",
  },
  {
    districtId: "099",
    wardId: "03298",
    name: "Xã Chiềng Sinh",
  },
  {
    districtId: "099",
    wardId: "03299",
    name: "Xã Chiềng Đông",
  },
  {
    districtId: "099",
    wardId: "03304",
    name: "Xã Tênh Phông",
  },
  {
    districtId: "100",
    wardId: "03319",
    name: "Xã Mường Pồn",
  },
  {
    districtId: "100",
    wardId: "03322",
    name: "Xã Thanh Nưa",
  },
  {
    districtId: "100",
    wardId: "03323",
    name: "Xã Hua Thanh",
  },
  {
    districtId: "100",
    wardId: "03328",
    name: "Xã Thanh Luông",
  },
  {
    districtId: "100",
    wardId: "03331",
    name: "Xã Thanh Hưng",
  },
  {
    districtId: "100",
    wardId: "03334",
    name: "Xã Thanh Xương",
  },
  {
    districtId: "100",
    wardId: "03337",
    name: "Xã Thanh Chăn",
  },
  {
    districtId: "100",
    wardId: "03340",
    name: "Xã Pa Thơm",
  },
  {
    districtId: "100",
    wardId: "03343",
    name: "Xã Thanh An",
  },
  {
    districtId: "100",
    wardId: "03346",
    name: "Xã Thanh Yên",
  },
  {
    districtId: "100",
    wardId: "03349",
    name: "Xã Noong Luống",
  },
  {
    districtId: "100",
    wardId: "03352",
    name: "Xã Noọng Hẹt",
  },
  {
    districtId: "100",
    wardId: "03355",
    name: "Xã Sam Mứn",
  },
  {
    districtId: "100",
    wardId: "03356",
    name: "Xã Pom Lót",
  },
  {
    districtId: "100",
    wardId: "03358",
    name: "Xã Núa Ngam",
  },
  {
    districtId: "100",
    wardId: "03359",
    name: "Xã Hẹ Muông",
  },
  {
    districtId: "100",
    wardId: "03361",
    name: "Xã Na Ư",
  },
  {
    districtId: "100",
    wardId: "03364",
    name: "Xã Mường Nhà",
  },
  {
    districtId: "100",
    wardId: "03365",
    name: "Xã Na Tông",
  },
  {
    districtId: "100",
    wardId: "03367",
    name: "Xã Mường Lói",
  },
  {
    districtId: "100",
    wardId: "03368",
    name: "Xã Phu Luông",
  },
  {
    districtId: "101",
    wardId: "03203",
    name: "Thị trấn Điện Biên Đông",
  },
  {
    districtId: "101",
    wardId: "03205",
    name: "Xã Na Son",
  },
  {
    districtId: "101",
    wardId: "03208",
    name: "Xã Phì Nhừ",
  },
  {
    districtId: "101",
    wardId: "03211",
    name: "Xã Chiềng Sơ",
  },
  {
    districtId: "101",
    wardId: "03214",
    name: "Xã Mường Luân",
  },
  {
    districtId: "101",
    wardId: "03370",
    name: "Xã Pú Nhi",
  },
  {
    districtId: "101",
    wardId: "03371",
    name: "Xã Nong U",
  },
  {
    districtId: "101",
    wardId: "03373",
    name: "Xã Xa Dung",
  },
  {
    districtId: "101",
    wardId: "03376",
    name: "Xã Keo Lôm",
  },
  {
    districtId: "101",
    wardId: "03379",
    name: "Xã Luân Giới",
  },
  {
    districtId: "101",
    wardId: "03382",
    name: "Xã Phình Giàng",
  },
  {
    districtId: "101",
    wardId: "03383",
    name: "Xã Pú Hồng",
  },
  {
    districtId: "101",
    wardId: "03384",
    name: "Xã Tìa Dình",
  },
  {
    districtId: "101",
    wardId: "03385",
    name: "Xã Háng Lìa",
  },
  {
    districtId: "102",
    wardId: "03256",
    name: "Thị trấn Mường Ảng",
  },
  {
    districtId: "102",
    wardId: "03286",
    name: "Xã Mường Đăng",
  },
  {
    districtId: "102",
    wardId: "03287",
    name: "Xã Ngối Cáy",
  },
  {
    districtId: "102",
    wardId: "03292",
    name: "Xã Ẳng Tở",
  },
  {
    districtId: "102",
    wardId: "03301",
    name: "Xã Búng Lao",
  },
  {
    districtId: "102",
    wardId: "03302",
    name: "Xã Xuân Lao",
  },
  {
    districtId: "102",
    wardId: "03307",
    name: "Xã Ẳng Nưa",
  },
  {
    districtId: "102",
    wardId: "03310",
    name: "Xã Ẳng Cang",
  },
  {
    districtId: "102",
    wardId: "03312",
    name: "Xã Nặm Lịch",
  },
  {
    districtId: "102",
    wardId: "03313",
    name: "Xã Mường Lạn",
  },
  {
    districtId: "103",
    wardId: "03156",
    name: "Xã Nậm Tin",
  },
  {
    districtId: "103",
    wardId: "03165",
    name: "Xã Pa Tần",
  },
  {
    districtId: "103",
    wardId: "03166",
    name: "Xã Chà Cang",
  },
  {
    districtId: "103",
    wardId: "03167",
    name: "Xã Na Cô Sa",
  },
  {
    districtId: "103",
    wardId: "03168",
    name: "Xã Nà Khoa",
  },
  {
    districtId: "103",
    wardId: "03169",
    name: "Xã Nà Hỳ",
  },
  {
    districtId: "103",
    wardId: "03170",
    name: "Xã Nà Bủng",
  },
  {
    districtId: "103",
    wardId: "03171",
    name: "Xã Nậm Nhừ",
  },
  {
    districtId: "103",
    wardId: "03173",
    name: "Xã Nậm Chua",
  },
  {
    districtId: "103",
    wardId: "03174",
    name: "Xã Nậm Khăn",
  },
  {
    districtId: "103",
    wardId: "03175",
    name: "Xã Chà Tở",
  },
  {
    districtId: "103",
    wardId: "03176",
    name: "Xã Vàng Đán",
  },
  {
    districtId: "103",
    wardId: "03187",
    name: "Xã Chà Nưa",
  },
  {
    districtId: "103",
    wardId: "03198",
    name: "Xã Phìn Hồ",
  },
  {
    districtId: "103",
    wardId: "03199",
    name: "Xã Si Pa Phìn",
  },
  {
    districtId: "105",
    wardId: "03386",
    name: "Phường Quyết Thắng",
  },
  {
    districtId: "105",
    wardId: "03387",
    name: "Phường Tân Phong",
  },
  {
    districtId: "105",
    wardId: "03388",
    name: "Phường Quyết Tiến",
  },
  {
    districtId: "105",
    wardId: "03389",
    name: "Phường Đoàn Kết",
  },
  {
    districtId: "105",
    wardId: "03403",
    name: "Xã Sùng Phài",
  },
  {
    districtId: "105",
    wardId: "03408",
    name: "Phường Đông Phong",
  },
  {
    districtId: "105",
    wardId: "03409",
    name: "Xã San Thàng",
  },
  {
    districtId: "106",
    wardId: "03390",
    name: "Thị trấn Tam Đường",
  },
  {
    districtId: "106",
    wardId: "03394",
    name: "Xã Thèn Sin",
  },
  {
    districtId: "106",
    wardId: "03400",
    name: "Xã Tả Lèng",
  },
  {
    districtId: "106",
    wardId: "03405",
    name: "Xã Giang Ma",
  },
  {
    districtId: "106",
    wardId: "03406",
    name: "Xã Hồ Thầu",
  },
  {
    districtId: "106",
    wardId: "03412",
    name: "Xã Bình Lư",
  },
  {
    districtId: "106",
    wardId: "03413",
    name: "Xã Sơn Bình",
  },
  {
    districtId: "106",
    wardId: "03415",
    name: "Xã Nùng Nàng",
  },
  {
    districtId: "106",
    wardId: "03418",
    name: "Xã Bản Giang",
  },
  {
    districtId: "106",
    wardId: "03421",
    name: "Xã Bản Hon",
  },
  {
    districtId: "106",
    wardId: "03424",
    name: "Xã Bản Bo",
  },
  {
    districtId: "106",
    wardId: "03427",
    name: "Xã Nà Tăm",
  },
  {
    districtId: "106",
    wardId: "03430",
    name: "Xã Khun Há",
  },
  {
    districtId: "107",
    wardId: "03433",
    name: "Thị trấn Mường Tè",
  },
  {
    districtId: "107",
    wardId: "03436",
    name: "Xã Thu Lũm",
  },
  {
    districtId: "107",
    wardId: "03439",
    name: "Xã Ka Lăng",
  },
  {
    districtId: "107",
    wardId: "03440",
    name: "Xã Tá Bạ",
  },
  {
    districtId: "107",
    wardId: "03442",
    name: "Xã Pa ủ",
  },
  {
    districtId: "107",
    wardId: "03445",
    name: "Xã Mường Tè",
  },
  {
    districtId: "107",
    wardId: "03448",
    name: "Xã Pa Vệ Sử",
  },
  {
    districtId: "107",
    wardId: "03451",
    name: "Xã Mù Cả",
  },
  {
    districtId: "107",
    wardId: "03454",
    name: "Xã Bum Tở",
  },
  {
    districtId: "107",
    wardId: "03457",
    name: "Xã Nậm Khao",
  },
  {
    districtId: "107",
    wardId: "03463",
    name: "Xã Tà Tổng",
  },
  {
    districtId: "107",
    wardId: "03466",
    name: "Xã Bum Nưa",
  },
  {
    districtId: "107",
    wardId: "03467",
    name: "Xã Vàng San",
  },
  {
    districtId: "107",
    wardId: "03469",
    name: "Xã Kan Hồ",
  },
  {
    districtId: "108",
    wardId: "03478",
    name: "Thị trấn Sìn Hồ",
  },
  {
    districtId: "108",
    wardId: "03487",
    name: "Xã Chăn Nưa",
  },
  {
    districtId: "108",
    wardId: "03493",
    name: "Xã Pa Tần",
  },
  {
    districtId: "108",
    wardId: "03496",
    name: "Xã Phìn Hồ",
  },
  {
    districtId: "108",
    wardId: "03499",
    name: "Xã Hồng Thu",
  },
  {
    districtId: "108",
    wardId: "03505",
    name: "Xã Phăng Sô Lin",
  },
  {
    districtId: "108",
    wardId: "03508",
    name: "Xã Ma Quai",
  },
  {
    districtId: "108",
    wardId: "03509",
    name: "Xã Lùng Thàng",
  },
  {
    districtId: "108",
    wardId: "03511",
    name: "Xã Tả Phìn",
  },
  {
    districtId: "108",
    wardId: "03514",
    name: "Xã Sà Dề Phìn",
  },
  {
    districtId: "108",
    wardId: "03517",
    name: "Xã Nậm Tăm",
  },
  {
    districtId: "108",
    wardId: "03520",
    name: "Xã Tả Ngảo",
  },
  {
    districtId: "108",
    wardId: "03523",
    name: "Xã Pu Sam Cáp",
  },
  {
    districtId: "108",
    wardId: "03526",
    name: "Xã Nậm Cha",
  },
  {
    districtId: "108",
    wardId: "03527",
    name: "Xã Pa Khoá",
  },
  {
    districtId: "108",
    wardId: "03529",
    name: "Xã Làng Mô",
  },
  {
    districtId: "108",
    wardId: "03532",
    name: "Xã Noong Hẻo",
  },
  {
    districtId: "108",
    wardId: "03535",
    name: "Xã Nậm Mạ",
  },
  {
    districtId: "108",
    wardId: "03538",
    name: "Xã Căn Co",
  },
  {
    districtId: "108",
    wardId: "03541",
    name: "Xã Tủa Sín Chải",
  },
  {
    districtId: "108",
    wardId: "03544",
    name: "Xã Nậm Cuổi",
  },
  {
    districtId: "108",
    wardId: "03547",
    name: "Xã Nậm Hăn",
  },
  {
    districtId: "109",
    wardId: "03391",
    name: "Xã Lả Nhì Thàng",
  },
  {
    districtId: "109",
    wardId: "03490",
    name: "Xã Huổi Luông",
  },
  {
    districtId: "109",
    wardId: "03549",
    name: "Thị trấn Phong Thổ",
  },
  {
    districtId: "109",
    wardId: "03550",
    name: "Xã Sì Lở Lầu",
  },
  {
    districtId: "109",
    wardId: "03553",
    name: "Xã Mồ Sì San",
  },
  {
    districtId: "109",
    wardId: "03559",
    name: "Xã Pa Vây Sử",
  },
  {
    districtId: "109",
    wardId: "03562",
    name: "Xã Vàng Ma Chải",
  },
  {
    districtId: "109",
    wardId: "03565",
    name: "Xã Tông Qua Lìn",
  },
  {
    districtId: "109",
    wardId: "03568",
    name: "Xã Mù Sang",
  },
  {
    districtId: "109",
    wardId: "03571",
    name: "Xã Dào San",
  },
  {
    districtId: "109",
    wardId: "03574",
    name: "Xã Ma Ly Pho",
  },
  {
    districtId: "109",
    wardId: "03577",
    name: "Xã Bản Lang",
  },
  {
    districtId: "109",
    wardId: "03580",
    name: "Xã Hoang Thèn",
  },
  {
    districtId: "109",
    wardId: "03583",
    name: "Xã Khổng Lào",
  },
  {
    districtId: "109",
    wardId: "03586",
    name: "Xã Nậm Xe",
  },
  {
    districtId: "109",
    wardId: "03589",
    name: "Xã Mường So",
  },
  {
    districtId: "109",
    wardId: "03592",
    name: "Xã Sin Suối Hồ",
  },
  {
    districtId: "110",
    wardId: "03595",
    name: "Thị trấn Than Uyên",
  },
  {
    districtId: "110",
    wardId: "03618",
    name: "Xã Phúc Than",
  },
  {
    districtId: "110",
    wardId: "03619",
    name: "Xã Mường Than",
  },
  {
    districtId: "110",
    wardId: "03625",
    name: "Xã Mường Mít",
  },
  {
    districtId: "110",
    wardId: "03628",
    name: "Xã Pha Mu",
  },
  {
    districtId: "110",
    wardId: "03631",
    name: "Xã Mường Cang",
  },
  {
    districtId: "110",
    wardId: "03632",
    name: "Xã Hua Nà",
  },
  {
    districtId: "110",
    wardId: "03634",
    name: "Xã Tà Hừa",
  },
  {
    districtId: "110",
    wardId: "03637",
    name: "Xã Mường Kim",
  },
  {
    districtId: "110",
    wardId: "03638",
    name: "Xã Tà Mung",
  },
  {
    districtId: "110",
    wardId: "03640",
    name: "Xã Tà Gia",
  },
  {
    districtId: "110",
    wardId: "03643",
    name: "Xã Khoen On",
  },
  {
    districtId: "111",
    wardId: "03598",
    name: "Thị trấn Tân Uyên",
  },
  {
    districtId: "111",
    wardId: "03601",
    name: "Xã Mường Khoa",
  },
  {
    districtId: "111",
    wardId: "03602",
    name: "Xã Phúc Khoa",
  },
  {
    districtId: "111",
    wardId: "03604",
    name: "Xã Thân Thuộc",
  },
  {
    districtId: "111",
    wardId: "03605",
    name: "Xã Trung Đồng",
  },
  {
    districtId: "111",
    wardId: "03607",
    name: "Xã Hố Mít",
  },
  {
    districtId: "111",
    wardId: "03610",
    name: "Xã Nậm Cần",
  },
  {
    districtId: "111",
    wardId: "03613",
    name: "Xã Nậm Sỏ",
  },
  {
    districtId: "111",
    wardId: "03616",
    name: "Xã Pắc Ta",
  },
  {
    districtId: "111",
    wardId: "03622",
    name: "Xã Tà Mít",
  },
  {
    districtId: "112",
    wardId: "03434",
    name: "Thị trấn Nậm Nhùn",
  },
  {
    districtId: "112",
    wardId: "03460",
    name: "Xã Hua Bun",
  },
  {
    districtId: "112",
    wardId: "03472",
    name: "Xã Mường Mô",
  },
  {
    districtId: "112",
    wardId: "03473",
    name: "Xã Nậm Chà",
  },
  {
    districtId: "112",
    wardId: "03474",
    name: "Xã Nậm Manh",
  },
  {
    districtId: "112",
    wardId: "03475",
    name: "Xã Nậm Hàng",
  },
  {
    districtId: "112",
    wardId: "03481",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "112",
    wardId: "03484",
    name: "Xã Pú Đao",
  },
  {
    districtId: "112",
    wardId: "03488",
    name: "Xã Nậm Pì",
  },
  {
    districtId: "112",
    wardId: "03502",
    name: "Xã Nậm Ban",
  },
  {
    districtId: "112",
    wardId: "03503",
    name: "Xã Trung Chải",
  },
  {
    districtId: "116",
    wardId: "03646",
    name: "Phường Chiềng Lề",
  },
  {
    districtId: "116",
    wardId: "03649",
    name: "Phường Tô Hiệu",
  },
  {
    districtId: "116",
    wardId: "03652",
    name: "Phường Quyết Thắng",
  },
  {
    districtId: "116",
    wardId: "03655",
    name: "Phường Quyết Tâm",
  },
  {
    districtId: "116",
    wardId: "03658",
    name: "Xã Chiềng Cọ",
  },
  {
    districtId: "116",
    wardId: "03661",
    name: "Xã Chiềng Đen",
  },
  {
    districtId: "116",
    wardId: "03664",
    name: "Xã Chiềng Xôm",
  },
  {
    districtId: "116",
    wardId: "03667",
    name: "Phường Chiềng An",
  },
  {
    districtId: "116",
    wardId: "03670",
    name: "Phường Chiềng Cơi",
  },
  {
    districtId: "116",
    wardId: "03673",
    name: "Xã Chiềng Ngần",
  },
  {
    districtId: "116",
    wardId: "03676",
    name: "Xã Hua La",
  },
  {
    districtId: "116",
    wardId: "03679",
    name: "Phường Chiềng Sinh",
  },
  {
    districtId: "118",
    wardId: "03682",
    name: "Xã Mường Chiên",
  },
  {
    districtId: "118",
    wardId: "03685",
    name: "Xã Cà Nàng",
  },
  {
    districtId: "118",
    wardId: "03688",
    name: "Xã Chiềng Khay",
  },
  {
    districtId: "118",
    wardId: "03694",
    name: "Xã Mường Giôn",
  },
  {
    districtId: "118",
    wardId: "03697",
    name: "Xã Pá Ma Pha Khinh",
  },
  {
    districtId: "118",
    wardId: "03700",
    name: "Xã Chiềng Ơn",
  },
  {
    districtId: "118",
    wardId: "03703",
    name: "Xã Mường Giàng",
  },
  {
    districtId: "118",
    wardId: "03706",
    name: "Xã Chiềng Bằng",
  },
  {
    districtId: "118",
    wardId: "03709",
    name: "Xã Mường Sại",
  },
  {
    districtId: "118",
    wardId: "03712",
    name: "Xã Nậm ét",
  },
  {
    districtId: "118",
    wardId: "03718",
    name: "Xã Chiềng Khoang",
  },
  {
    districtId: "119",
    wardId: "03721",
    name: "Thị trấn Thuận Châu",
  },
  {
    districtId: "119",
    wardId: "03724",
    name: "Xã Phổng Lái",
  },
  {
    districtId: "119",
    wardId: "03727",
    name: "Xã Mường é",
  },
  {
    districtId: "119",
    wardId: "03730",
    name: "Xã Chiềng Pha",
  },
  {
    districtId: "119",
    wardId: "03733",
    name: "Xã Chiềng La",
  },
  {
    districtId: "119",
    wardId: "03736",
    name: "Xã Chiềng Ngàm",
  },
  {
    districtId: "119",
    wardId: "03739",
    name: "Xã Liệp Tè",
  },
  {
    districtId: "119",
    wardId: "03742",
    name: "Xã é Tòng",
  },
  {
    districtId: "119",
    wardId: "03745",
    name: "Xã Phổng Lập",
  },
  {
    districtId: "119",
    wardId: "03748",
    name: "Xã Phổng Lăng",
  },
  {
    districtId: "119",
    wardId: "03751",
    name: "Xã Chiềng Ly",
  },
  {
    districtId: "119",
    wardId: "03754",
    name: "Xã Noong Lay",
  },
  {
    districtId: "119",
    wardId: "03757",
    name: "Xã Mường Khiêng",
  },
  {
    districtId: "119",
    wardId: "03760",
    name: "Xã Mường Bám",
  },
  {
    districtId: "119",
    wardId: "03763",
    name: "Xã Long Hẹ",
  },
  {
    districtId: "119",
    wardId: "03766",
    name: "Xã Chiềng Bôm",
  },
  {
    districtId: "119",
    wardId: "03769",
    name: "Xã Thôm Mòn",
  },
  {
    districtId: "119",
    wardId: "03772",
    name: "Xã Tông Lạnh",
  },
  {
    districtId: "119",
    wardId: "03775",
    name: "Xã Tông Cọ",
  },
  {
    districtId: "119",
    wardId: "03778",
    name: "Xã Bó Mười",
  },
  {
    districtId: "119",
    wardId: "03781",
    name: "Xã Co Mạ",
  },
  {
    districtId: "119",
    wardId: "03784",
    name: "Xã Púng Tra",
  },
  {
    districtId: "119",
    wardId: "03787",
    name: "Xã Chiềng Pấc",
  },
  {
    districtId: "119",
    wardId: "03790",
    name: "Xã Nậm Lầu",
  },
  {
    districtId: "119",
    wardId: "03793",
    name: "Xã Bon Phặng",
  },
  {
    districtId: "119",
    wardId: "03796",
    name: "Xã Co Tòng",
  },
  {
    districtId: "119",
    wardId: "03799",
    name: "Xã Muổi Nọi",
  },
  {
    districtId: "119",
    wardId: "03802",
    name: "Xã Pá Lông",
  },
  {
    districtId: "119",
    wardId: "03805",
    name: "Xã Bản Lầm",
  },
  {
    districtId: "120",
    wardId: "03808",
    name: "Thị trấn Ít Ong",
  },
  {
    districtId: "120",
    wardId: "03811",
    name: "Xã Nậm Giôn",
  },
  {
    districtId: "120",
    wardId: "03814",
    name: "Xã Chiềng Lao",
  },
  {
    districtId: "120",
    wardId: "03817",
    name: "Xã Hua Trai",
  },
  {
    districtId: "120",
    wardId: "03820",
    name: "Xã Ngọc Chiến",
  },
  {
    districtId: "120",
    wardId: "03823",
    name: "Xã Mường Trai",
  },
  {
    districtId: "120",
    wardId: "03826",
    name: "Xã Nậm Păm",
  },
  {
    districtId: "120",
    wardId: "03829",
    name: "Xã Chiềng Muôn",
  },
  {
    districtId: "120",
    wardId: "03832",
    name: "Xã Chiềng Ân",
  },
  {
    districtId: "120",
    wardId: "03835",
    name: "Xã Pi Toong",
  },
  {
    districtId: "120",
    wardId: "03838",
    name: "Xã Chiềng Công",
  },
  {
    districtId: "120",
    wardId: "03841",
    name: "Xã Tạ Bú",
  },
  {
    districtId: "120",
    wardId: "03844",
    name: "Xã Chiềng San",
  },
  {
    districtId: "120",
    wardId: "03847",
    name: "Xã Mường Bú",
  },
  {
    districtId: "120",
    wardId: "03850",
    name: "Xã Chiềng Hoa",
  },
  {
    districtId: "120",
    wardId: "03853",
    name: "Xã Mường Chùm",
  },
  {
    districtId: "121",
    wardId: "03856",
    name: "Thị trấn Bắc Yên",
  },
  {
    districtId: "121",
    wardId: "03859",
    name: "Xã Phiêng Ban",
  },
  {
    districtId: "121",
    wardId: "03862",
    name: "Xã Hang Chú",
  },
  {
    districtId: "121",
    wardId: "03865",
    name: "Xã Xím Vàng",
  },
  {
    districtId: "121",
    wardId: "03868",
    name: "Xã Tà Xùa",
  },
  {
    districtId: "121",
    wardId: "03869",
    name: "Xã Háng Đồng",
  },
  {
    districtId: "121",
    wardId: "03871",
    name: "Xã Pắc Ngà",
  },
  {
    districtId: "121",
    wardId: "03874",
    name: "Xã Làng Chếu",
  },
  {
    districtId: "121",
    wardId: "03877",
    name: "Xã Chim Vàn",
  },
  {
    districtId: "121",
    wardId: "03880",
    name: "Xã Mường Khoa",
  },
  {
    districtId: "121",
    wardId: "03883",
    name: "Xã Song Pe",
  },
  {
    districtId: "121",
    wardId: "03886",
    name: "Xã Hồng Ngài",
  },
  {
    districtId: "121",
    wardId: "03889",
    name: "Xã Tạ Khoa",
  },
  {
    districtId: "121",
    wardId: "03890",
    name: "Xã Hua Nhàn",
  },
  {
    districtId: "121",
    wardId: "03892",
    name: "Xã Phiêng Côn",
  },
  {
    districtId: "121",
    wardId: "03895",
    name: "Xã Chiềng Sại",
  },
  {
    districtId: "122",
    wardId: "03898",
    name: "Thị trấn Phù Yên",
  },
  {
    districtId: "122",
    wardId: "03901",
    name: "Xã Suối Tọ",
  },
  {
    districtId: "122",
    wardId: "03904",
    name: "Xã Mường Thải",
  },
  {
    districtId: "122",
    wardId: "03907",
    name: "Xã Mường Cơi",
  },
  {
    districtId: "122",
    wardId: "03910",
    name: "Xã Quang Huy",
  },
  {
    districtId: "122",
    wardId: "03913",
    name: "Xã Huy Bắc",
  },
  {
    districtId: "122",
    wardId: "03916",
    name: "Xã Huy Thượng",
  },
  {
    districtId: "122",
    wardId: "03919",
    name: "Xã Tân Lang",
  },
  {
    districtId: "122",
    wardId: "03922",
    name: "Xã Gia Phù",
  },
  {
    districtId: "122",
    wardId: "03925",
    name: "Xã Tường Phù",
  },
  {
    districtId: "122",
    wardId: "03928",
    name: "Xã Huy Hạ",
  },
  {
    districtId: "122",
    wardId: "03931",
    name: "Xã Huy Tân",
  },
  {
    districtId: "122",
    wardId: "03934",
    name: "Xã Mường Lang",
  },
  {
    districtId: "122",
    wardId: "03937",
    name: "Xã Suối Bau",
  },
  {
    districtId: "122",
    wardId: "03940",
    name: "Xã Huy Tường",
  },
  {
    districtId: "122",
    wardId: "03943",
    name: "Xã Mường Do",
  },
  {
    districtId: "122",
    wardId: "03946",
    name: "Xã Sập Xa",
  },
  {
    districtId: "122",
    wardId: "03949",
    name: "Xã Tường Thượng",
  },
  {
    districtId: "122",
    wardId: "03952",
    name: "Xã Tường Tiến",
  },
  {
    districtId: "122",
    wardId: "03955",
    name: "Xã Tường Phong",
  },
  {
    districtId: "122",
    wardId: "03958",
    name: "Xã Tường Hạ",
  },
  {
    districtId: "122",
    wardId: "03961",
    name: "Xã Kim Bon",
  },
  {
    districtId: "122",
    wardId: "03964",
    name: "Xã Mường Bang",
  },
  {
    districtId: "122",
    wardId: "03967",
    name: "Xã Đá Đỏ",
  },
  {
    districtId: "122",
    wardId: "03970",
    name: "Xã Tân Phong",
  },
  {
    districtId: "122",
    wardId: "03973",
    name: "Xã Nam Phong",
  },
  {
    districtId: "122",
    wardId: "03976",
    name: "Xã Bắc Phong",
  },
  {
    districtId: "123",
    wardId: "03979",
    name: "Thị trấn Mộc Châu",
  },
  {
    districtId: "123",
    wardId: "03982",
    name: "Thị trấn NT Mộc Châu",
  },
  {
    districtId: "123",
    wardId: "03985",
    name: "Xã Chiềng Sơn",
  },
  {
    districtId: "123",
    wardId: "03988",
    name: "Xã Tân Hợp",
  },
  {
    districtId: "123",
    wardId: "03991",
    name: "Xã Qui Hướng",
  },
  {
    districtId: "123",
    wardId: "03997",
    name: "Xã Tân Lập",
  },
  {
    districtId: "123",
    wardId: "04000",
    name: "Xã Nà Mường",
  },
  {
    districtId: "123",
    wardId: "04003",
    name: "Xã Tà Lai",
  },
  {
    districtId: "123",
    wardId: "04012",
    name: "Xã Chiềng Hắc",
  },
  {
    districtId: "123",
    wardId: "04015",
    name: "Xã Hua Păng",
  },
  {
    districtId: "123",
    wardId: "04024",
    name: "Xã Chiềng Khừa",
  },
  {
    districtId: "123",
    wardId: "04027",
    name: "Xã Mường Sang",
  },
  {
    districtId: "123",
    wardId: "04030",
    name: "Xã Đông Sang",
  },
  {
    districtId: "123",
    wardId: "04033",
    name: "Xã Phiêng Luông",
  },
  {
    districtId: "123",
    wardId: "04045",
    name: "Xã Lóng Sập",
  },
  {
    districtId: "124",
    wardId: "04060",
    name: "Thị trấn Yên Châu",
  },
  {
    districtId: "124",
    wardId: "04063",
    name: "Xã Chiềng Đông",
  },
  {
    districtId: "124",
    wardId: "04066",
    name: "Xã Sập Vạt",
  },
  {
    districtId: "124",
    wardId: "04069",
    name: "Xã Chiềng Sàng",
  },
  {
    districtId: "124",
    wardId: "04072",
    name: "Xã Chiềng Pằn",
  },
  {
    districtId: "124",
    wardId: "04075",
    name: "Xã Viêng Lán",
  },
  {
    districtId: "124",
    wardId: "04078",
    name: "Xã Chiềng Hặc",
  },
  {
    districtId: "124",
    wardId: "04081",
    name: "Xã Mường Lựm",
  },
  {
    districtId: "124",
    wardId: "04084",
    name: "Xã Chiềng On",
  },
  {
    districtId: "124",
    wardId: "04087",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "124",
    wardId: "04090",
    name: "Xã Chiềng Khoi",
  },
  {
    districtId: "124",
    wardId: "04093",
    name: "Xã Tú Nang",
  },
  {
    districtId: "124",
    wardId: "04096",
    name: "Xã Lóng Phiêng",
  },
  {
    districtId: "124",
    wardId: "04099",
    name: "Xã Phiêng Khoài",
  },
  {
    districtId: "124",
    wardId: "04102",
    name: "Xã Chiềng Tương",
  },
  {
    districtId: "125",
    wardId: "04105",
    name: "Thị trấn Hát Lót",
  },
  {
    districtId: "125",
    wardId: "04108",
    name: "Xã Chiềng Sung",
  },
  {
    districtId: "125",
    wardId: "04111",
    name: "Xã Mường Bằng",
  },
  {
    districtId: "125",
    wardId: "04114",
    name: "Xã Chiềng Chăn",
  },
  {
    districtId: "125",
    wardId: "04117",
    name: "Xã Mương Chanh",
  },
  {
    districtId: "125",
    wardId: "04120",
    name: "Xã Chiềng Ban",
  },
  {
    districtId: "125",
    wardId: "04123",
    name: "Xã Chiềng Mung",
  },
  {
    districtId: "125",
    wardId: "04126",
    name: "Xã Mường Bon",
  },
  {
    districtId: "125",
    wardId: "04129",
    name: "Xã Chiềng Chung",
  },
  {
    districtId: "125",
    wardId: "04132",
    name: "Xã Chiềng Mai",
  },
  {
    districtId: "125",
    wardId: "04135",
    name: "Xã Hát Lót",
  },
  {
    districtId: "125",
    wardId: "04136",
    name: "Xã Nà Pó",
  },
  {
    districtId: "125",
    wardId: "04138",
    name: "Xã Cò  Nòi",
  },
  {
    districtId: "125",
    wardId: "04141",
    name: "Xã Chiềng Nơi",
  },
  {
    districtId: "125",
    wardId: "04144",
    name: "Xã Phiêng Cằm",
  },
  {
    districtId: "125",
    wardId: "04147",
    name: "Xã Chiềng Dong",
  },
  {
    districtId: "125",
    wardId: "04150",
    name: "Xã Chiềng Kheo",
  },
  {
    districtId: "125",
    wardId: "04153",
    name: "Xã Chiềng Ve",
  },
  {
    districtId: "125",
    wardId: "04156",
    name: "Xã Chiềng Lương",
  },
  {
    districtId: "125",
    wardId: "04159",
    name: "Xã Phiêng Pằn",
  },
  {
    districtId: "125",
    wardId: "04162",
    name: "Xã Nà Ơt",
  },
  {
    districtId: "125",
    wardId: "04165",
    name: "Xã Tà Hộc",
  },
  {
    districtId: "126",
    wardId: "04168",
    name: "Thị trấn Sông Mã",
  },
  {
    districtId: "126",
    wardId: "04171",
    name: "Xã Bó Sinh",
  },
  {
    districtId: "126",
    wardId: "04174",
    name: "Xã Pú Pẩu",
  },
  {
    districtId: "126",
    wardId: "04177",
    name: "Xã Chiềng Phung",
  },
  {
    districtId: "126",
    wardId: "04180",
    name: "Xã Chiềng En",
  },
  {
    districtId: "126",
    wardId: "04183",
    name: "Xã Mường Lầm",
  },
  {
    districtId: "126",
    wardId: "04186",
    name: "Xã Nậm Ty",
  },
  {
    districtId: "126",
    wardId: "04189",
    name: "Xã Đứa Mòn",
  },
  {
    districtId: "126",
    wardId: "04192",
    name: "Xã Yên Hưng",
  },
  {
    districtId: "126",
    wardId: "04195",
    name: "Xã Chiềng Sơ",
  },
  {
    districtId: "126",
    wardId: "04198",
    name: "Xã Nà Nghịu",
  },
  {
    districtId: "126",
    wardId: "04201",
    name: "Xã Nậm Mằn",
  },
  {
    districtId: "126",
    wardId: "04204",
    name: "Xã Chiềng Khoong",
  },
  {
    districtId: "126",
    wardId: "04207",
    name: "Xã Chiềng Cang",
  },
  {
    districtId: "126",
    wardId: "04210",
    name: "Xã Huổi Một",
  },
  {
    districtId: "126",
    wardId: "04213",
    name: "Xã Mường Sai",
  },
  {
    districtId: "126",
    wardId: "04216",
    name: "Xã Mường Cai",
  },
  {
    districtId: "126",
    wardId: "04219",
    name: "Xã Mường Hung",
  },
  {
    districtId: "126",
    wardId: "04222",
    name: "Xã Chiềng Khương",
  },
  {
    districtId: "127",
    wardId: "04225",
    name: "Xã Sam Kha",
  },
  {
    districtId: "127",
    wardId: "04228",
    name: "Xã Púng Bánh",
  },
  {
    districtId: "127",
    wardId: "04231",
    name: "Xã Sốp Cộp",
  },
  {
    districtId: "127",
    wardId: "04234",
    name: "Xã Dồm Cang",
  },
  {
    districtId: "127",
    wardId: "04237",
    name: "Xã Nậm Lạnh",
  },
  {
    districtId: "127",
    wardId: "04240",
    name: "Xã Mường Lèo",
  },
  {
    districtId: "127",
    wardId: "04243",
    name: "Xã Mường Và",
  },
  {
    districtId: "127",
    wardId: "04246",
    name: "Xã Mường Lạn",
  },
  {
    districtId: "128",
    wardId: "03994",
    name: "Xã Suối Bàng",
  },
  {
    districtId: "128",
    wardId: "04006",
    name: "Xã Song Khủa",
  },
  {
    districtId: "128",
    wardId: "04009",
    name: "Xã Liên Hoà",
  },
  {
    districtId: "128",
    wardId: "04018",
    name: "Xã Tô Múa",
  },
  {
    districtId: "128",
    wardId: "04021",
    name: "Xã Mường Tè",
  },
  {
    districtId: "128",
    wardId: "04036",
    name: "Xã Chiềng Khoa",
  },
  {
    districtId: "128",
    wardId: "04039",
    name: "Xã Mường Men",
  },
  {
    districtId: "128",
    wardId: "04042",
    name: "Xã Quang Minh",
  },
  {
    districtId: "128",
    wardId: "04048",
    name: "Xã Vân Hồ",
  },
  {
    districtId: "128",
    wardId: "04051",
    name: "Xã Lóng Luông",
  },
  {
    districtId: "128",
    wardId: "04054",
    name: "Xã Chiềng Yên",
  },
  {
    districtId: "128",
    wardId: "04056",
    name: "Xã Chiềng Xuân",
  },
  {
    districtId: "128",
    wardId: "04057",
    name: "Xã Xuân Nha",
  },
  {
    districtId: "128",
    wardId: "04058",
    name: "Xã Tân Xuân",
  },
  {
    districtId: "132",
    wardId: "04249",
    name: "Phường Yên Thịnh",
  },
  {
    districtId: "132",
    wardId: "04252",
    name: "Phường Yên Ninh",
  },
  {
    districtId: "132",
    wardId: "04255",
    name: "Phường Minh Tân",
  },
  {
    districtId: "132",
    wardId: "04258",
    name: "Phường Nguyễn Thái Học",
  },
  {
    districtId: "132",
    wardId: "04261",
    name: "Phường Đồng Tâm",
  },
  {
    districtId: "132",
    wardId: "04264",
    name: "Phường Nguyễn Phúc",
  },
  {
    districtId: "132",
    wardId: "04267",
    name: "Phường Hồng Hà",
  },
  {
    districtId: "132",
    wardId: "04270",
    name: "Xã Minh Bảo",
  },
  {
    districtId: "132",
    wardId: "04273",
    name: "Phường Nam Cường",
  },
  {
    districtId: "132",
    wardId: "04276",
    name: "Xã Tuy Lộc",
  },
  {
    districtId: "132",
    wardId: "04279",
    name: "Xã Tân Thịnh",
  },
  {
    districtId: "132",
    wardId: "04540",
    name: "Xã Âu Lâu",
  },
  {
    districtId: "132",
    wardId: "04543",
    name: "Xã Giới Phiên",
  },
  {
    districtId: "132",
    wardId: "04546",
    name: "Phường Hợp Minh",
  },
  {
    districtId: "132",
    wardId: "04558",
    name: "Xã Văn Phú",
  },
  {
    districtId: "133",
    wardId: "04282",
    name: "Phường Pú Trạng",
  },
  {
    districtId: "133",
    wardId: "04285",
    name: "Phường Trung Tâm",
  },
  {
    districtId: "133",
    wardId: "04288",
    name: "Phường Tân An",
  },
  {
    districtId: "133",
    wardId: "04291",
    name: "Phường Cầu Thia",
  },
  {
    districtId: "133",
    wardId: "04294",
    name: "Xã Nghĩa Lợi",
  },
  {
    districtId: "133",
    wardId: "04297",
    name: "Xã Nghĩa Phúc",
  },
  {
    districtId: "133",
    wardId: "04300",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "133",
    wardId: "04624",
    name: "Xã Nghĩa Lộ",
  },
  {
    districtId: "133",
    wardId: "04660",
    name: "Xã Sơn A",
  },
  {
    districtId: "133",
    wardId: "04663",
    name: "Xã Phù Nham",
  },
  {
    districtId: "133",
    wardId: "04675",
    name: "Xã Thanh Lương",
  },
  {
    districtId: "133",
    wardId: "04678",
    name: "Xã Hạnh Sơn",
  },
  {
    districtId: "133",
    wardId: "04681",
    name: "Xã Phúc Sơn",
  },
  {
    districtId: "133",
    wardId: "04684",
    name: "Xã Thạch Lương",
  },
  {
    districtId: "135",
    wardId: "04303",
    name: "Thị trấn Yên Thế",
  },
  {
    districtId: "135",
    wardId: "04306",
    name: "Xã Tân Phượng",
  },
  {
    districtId: "135",
    wardId: "04309",
    name: "Xã Lâm Thượng",
  },
  {
    districtId: "135",
    wardId: "04312",
    name: "Xã Khánh Thiện",
  },
  {
    districtId: "135",
    wardId: "04315",
    name: "Xã Minh Chuẩn",
  },
  {
    districtId: "135",
    wardId: "04318",
    name: "Xã Mai Sơn",
  },
  {
    districtId: "135",
    wardId: "04321",
    name: "Xã Khai Trung",
  },
  {
    districtId: "135",
    wardId: "04324",
    name: "Xã Mường Lai",
  },
  {
    districtId: "135",
    wardId: "04327",
    name: "Xã An Lạc",
  },
  {
    districtId: "135",
    wardId: "04330",
    name: "Xã Minh Xuân",
  },
  {
    districtId: "135",
    wardId: "04333",
    name: "Xã Tô Mậu",
  },
  {
    districtId: "135",
    wardId: "04336",
    name: "Xã Tân Lĩnh",
  },
  {
    districtId: "135",
    wardId: "04339",
    name: "Xã Yên Thắng",
  },
  {
    districtId: "135",
    wardId: "04342",
    name: "Xã Khánh Hoà",
  },
  {
    districtId: "135",
    wardId: "04345",
    name: "Xã Vĩnh Lạc",
  },
  {
    districtId: "135",
    wardId: "04348",
    name: "Xã Liễu Đô",
  },
  {
    districtId: "135",
    wardId: "04351",
    name: "Xã Động Quan",
  },
  {
    districtId: "135",
    wardId: "04354",
    name: "Xã Tân Lập",
  },
  {
    districtId: "135",
    wardId: "04357",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "135",
    wardId: "04360",
    name: "Xã Trúc Lâu",
  },
  {
    districtId: "135",
    wardId: "04363",
    name: "Xã Phúc Lợi",
  },
  {
    districtId: "135",
    wardId: "04366",
    name: "Xã Phan Thanh",
  },
  {
    districtId: "135",
    wardId: "04369",
    name: "Xã An Phú",
  },
  {
    districtId: "135",
    wardId: "04372",
    name: "Xã Trung Tâm",
  },
  {
    districtId: "136",
    wardId: "04375",
    name: "Thị trấn Mậu A",
  },
  {
    districtId: "136",
    wardId: "04378",
    name: "Xã Lang Thíp",
  },
  {
    districtId: "136",
    wardId: "04381",
    name: "Xã Lâm Giang",
  },
  {
    districtId: "136",
    wardId: "04384",
    name: "Xã Châu Quế Thượng",
  },
  {
    districtId: "136",
    wardId: "04387",
    name: "Xã Châu Quế Hạ",
  },
  {
    districtId: "136",
    wardId: "04390",
    name: "Xã An Bình",
  },
  {
    districtId: "136",
    wardId: "04393",
    name: "Xã Quang Minh",
  },
  {
    districtId: "136",
    wardId: "04396",
    name: "Xã Đông An",
  },
  {
    districtId: "136",
    wardId: "04399",
    name: "Xã Đông Cuông",
  },
  {
    districtId: "136",
    wardId: "04402",
    name: "Xã Phong Dụ Hạ",
  },
  {
    districtId: "136",
    wardId: "04405",
    name: "Xã Mậu Đông",
  },
  {
    districtId: "136",
    wardId: "04408",
    name: "Xã Ngòi A",
  },
  {
    districtId: "136",
    wardId: "04411",
    name: "Xã Xuân Tầm",
  },
  {
    districtId: "136",
    wardId: "04414",
    name: "Xã Tân Hợp",
  },
  {
    districtId: "136",
    wardId: "04417",
    name: "Xã An Thịnh",
  },
  {
    districtId: "136",
    wardId: "04420",
    name: "Xã Yên Thái",
  },
  {
    districtId: "136",
    wardId: "04423",
    name: "Xã Phong Dụ Thượng",
  },
  {
    districtId: "136",
    wardId: "04426",
    name: "Xã Yên Hợp",
  },
  {
    districtId: "136",
    wardId: "04429",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "136",
    wardId: "04435",
    name: "Xã Đại Phác",
  },
  {
    districtId: "136",
    wardId: "04438",
    name: "Xã Yên Phú",
  },
  {
    districtId: "136",
    wardId: "04441",
    name: "Xã Xuân Ái",
  },
  {
    districtId: "136",
    wardId: "04447",
    name: "Xã Viễn Sơn",
  },
  {
    districtId: "136",
    wardId: "04450",
    name: "Xã Mỏ Vàng",
  },
  {
    districtId: "136",
    wardId: "04453",
    name: "Xã Nà Hẩu",
  },
  {
    districtId: "137",
    wardId: "04456",
    name: "Thị trấn Mù Căng Chải",
  },
  {
    districtId: "137",
    wardId: "04459",
    name: "Xã Hồ Bốn",
  },
  {
    districtId: "137",
    wardId: "04462",
    name: "Xã Nậm Có",
  },
  {
    districtId: "137",
    wardId: "04465",
    name: "Xã Khao Mang",
  },
  {
    districtId: "137",
    wardId: "04468",
    name: "Xã Mồ Dề",
  },
  {
    districtId: "137",
    wardId: "04471",
    name: "Xã Chế Cu Nha",
  },
  {
    districtId: "137",
    wardId: "04474",
    name: "Xã Lao Chải",
  },
  {
    districtId: "137",
    wardId: "04477",
    name: "Xã Kim Nọi",
  },
  {
    districtId: "137",
    wardId: "04480",
    name: "Xã Cao Phạ",
  },
  {
    districtId: "137",
    wardId: "04483",
    name: "Xã La Pán Tẩn",
  },
  {
    districtId: "137",
    wardId: "04486",
    name: "Xã Dế Su Phình",
  },
  {
    districtId: "137",
    wardId: "04489",
    name: "Xã Chế Tạo",
  },
  {
    districtId: "137",
    wardId: "04492",
    name: "Xã Púng Luông",
  },
  {
    districtId: "137",
    wardId: "04495",
    name: "Xã Nậm Khắt",
  },
  {
    districtId: "138",
    wardId: "04498",
    name: "Thị trấn Cổ Phúc",
  },
  {
    districtId: "138",
    wardId: "04501",
    name: "Xã Tân Đồng",
  },
  {
    districtId: "138",
    wardId: "04504",
    name: "Xã Báo Đáp",
  },
  {
    districtId: "138",
    wardId: "04507",
    name: "Xã Đào Thịnh",
  },
  {
    districtId: "138",
    wardId: "04510",
    name: "Xã Việt Thành",
  },
  {
    districtId: "138",
    wardId: "04513",
    name: "Xã Hòa Cuông",
  },
  {
    districtId: "138",
    wardId: "04516",
    name: "Xã Minh Quán",
  },
  {
    districtId: "138",
    wardId: "04519",
    name: "Xã Quy Mông",
  },
  {
    districtId: "138",
    wardId: "04522",
    name: "Xã Cường Thịnh",
  },
  {
    districtId: "138",
    wardId: "04525",
    name: "Xã Kiên Thành",
  },
  {
    districtId: "138",
    wardId: "04528",
    name: "Xã Nga Quán",
  },
  {
    districtId: "138",
    wardId: "04531",
    name: "Xã Y Can",
  },
  {
    districtId: "138",
    wardId: "04537",
    name: "Xã Lương Thịnh",
  },
  {
    districtId: "138",
    wardId: "04561",
    name: "Xã Bảo Hưng",
  },
  {
    districtId: "138",
    wardId: "04564",
    name: "Xã Việt Cường",
  },
  {
    districtId: "138",
    wardId: "04567",
    name: "Xã Minh Quân",
  },
  {
    districtId: "138",
    wardId: "04570",
    name: "Xã Hồng Ca",
  },
  {
    districtId: "138",
    wardId: "04573",
    name: "Xã Hưng Thịnh",
  },
  {
    districtId: "138",
    wardId: "04576",
    name: "Xã Hưng Khánh",
  },
  {
    districtId: "138",
    wardId: "04579",
    name: "Xã Việt Hồng",
  },
  {
    districtId: "138",
    wardId: "04582",
    name: "Xã Vân Hội",
  },
  {
    districtId: "139",
    wardId: "04585",
    name: "Thị trấn Trạm Tấu",
  },
  {
    districtId: "139",
    wardId: "04588",
    name: "Xã Túc Đán",
  },
  {
    districtId: "139",
    wardId: "04591",
    name: "Xã Pá Lau",
  },
  {
    districtId: "139",
    wardId: "04594",
    name: "Xã Xà Hồ",
  },
  {
    districtId: "139",
    wardId: "04597",
    name: "Xã Phình Hồ",
  },
  {
    districtId: "139",
    wardId: "04600",
    name: "Xã Trạm Tấu",
  },
  {
    districtId: "139",
    wardId: "04603",
    name: "Xã Tà Si Láng",
  },
  {
    districtId: "139",
    wardId: "04606",
    name: "Xã Pá Hu",
  },
  {
    districtId: "139",
    wardId: "04609",
    name: "Xã Làng Nhì",
  },
  {
    districtId: "139",
    wardId: "04612",
    name: "Xã Bản Công",
  },
  {
    districtId: "139",
    wardId: "04615",
    name: "Xã Bản Mù",
  },
  {
    districtId: "139",
    wardId: "04618",
    name: "Xã Hát Lìu",
  },
  {
    districtId: "140",
    wardId: "04621",
    name: "Thị trấn NT Liên Sơn",
  },
  {
    districtId: "140",
    wardId: "04627",
    name: "Thị trấn NT Trần Phú",
  },
  {
    districtId: "140",
    wardId: "04630",
    name: "Xã Tú Lệ",
  },
  {
    districtId: "140",
    wardId: "04633",
    name: "Xã Nậm Búng",
  },
  {
    districtId: "140",
    wardId: "04636",
    name: "Xã Gia Hội",
  },
  {
    districtId: "140",
    wardId: "04639",
    name: "Xã Sùng Đô",
  },
  {
    districtId: "140",
    wardId: "04642",
    name: "Xã Nậm Mười",
  },
  {
    districtId: "140",
    wardId: "04645",
    name: "Xã An Lương",
  },
  {
    districtId: "140",
    wardId: "04648",
    name: "Xã Nậm Lành",
  },
  {
    districtId: "140",
    wardId: "04651",
    name: "Xã Sơn Lương",
  },
  {
    districtId: "140",
    wardId: "04654",
    name: "Xã Suối Quyền",
  },
  {
    districtId: "140",
    wardId: "04657",
    name: "Xã Suối Giàng",
  },
  {
    districtId: "140",
    wardId: "04666",
    name: "Xã Nghĩa Sơn",
  },
  {
    districtId: "140",
    wardId: "04669",
    name: "Xã Suối Bu",
  },
  {
    districtId: "140",
    wardId: "04672",
    name: "Thị trấn Sơn Thịnh",
  },
  {
    districtId: "140",
    wardId: "04687",
    name: "Xã Đại Lịch",
  },
  {
    districtId: "140",
    wardId: "04690",
    name: "Xã Đồng Khê",
  },
  {
    districtId: "140",
    wardId: "04693",
    name: "Xã Cát Thịnh",
  },
  {
    districtId: "140",
    wardId: "04696",
    name: "Xã Tân Thịnh",
  },
  {
    districtId: "140",
    wardId: "04699",
    name: "Xã Chấn Thịnh",
  },
  {
    districtId: "140",
    wardId: "04702",
    name: "Xã Bình Thuận",
  },
  {
    districtId: "140",
    wardId: "04705",
    name: "Xã Thượng Bằng La",
  },
  {
    districtId: "140",
    wardId: "04708",
    name: "Xã Minh An",
  },
  {
    districtId: "140",
    wardId: "04711",
    name: "Xã Nghĩa Tâm",
  },
  {
    districtId: "141",
    wardId: "04714",
    name: "Thị trấn Yên Bình",
  },
  {
    districtId: "141",
    wardId: "04717",
    name: "Thị trấn Thác Bà",
  },
  {
    districtId: "141",
    wardId: "04720",
    name: "Xã Xuân Long",
  },
  {
    districtId: "141",
    wardId: "04726",
    name: "Xã Cảm Nhân",
  },
  {
    districtId: "141",
    wardId: "04729",
    name: "Xã Ngọc Chấn",
  },
  {
    districtId: "141",
    wardId: "04732",
    name: "Xã Tân Nguyên",
  },
  {
    districtId: "141",
    wardId: "04735",
    name: "Xã Phúc Ninh",
  },
  {
    districtId: "141",
    wardId: "04738",
    name: "Xã Bảo Ái",
  },
  {
    districtId: "141",
    wardId: "04741",
    name: "Xã Mỹ Gia",
  },
  {
    districtId: "141",
    wardId: "04744",
    name: "Xã Xuân Lai",
  },
  {
    districtId: "141",
    wardId: "04747",
    name: "Xã Mông Sơn",
  },
  {
    districtId: "141",
    wardId: "04750",
    name: "Xã Cảm Ân",
  },
  {
    districtId: "141",
    wardId: "04753",
    name: "Xã Yên Thành",
  },
  {
    districtId: "141",
    wardId: "04756",
    name: "Xã Tân Hương",
  },
  {
    districtId: "141",
    wardId: "04759",
    name: "Xã Phúc An",
  },
  {
    districtId: "141",
    wardId: "04762",
    name: "Xã Bạch Hà",
  },
  {
    districtId: "141",
    wardId: "04765",
    name: "Xã Vũ Linh",
  },
  {
    districtId: "141",
    wardId: "04768",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "141",
    wardId: "04771",
    name: "Xã Vĩnh Kiên",
  },
  {
    districtId: "141",
    wardId: "04774",
    name: "Xã Yên Bình",
  },
  {
    districtId: "141",
    wardId: "04777",
    name: "Xã Thịnh Hưng",
  },
  {
    districtId: "141",
    wardId: "04780",
    name: "Xã Hán Đà",
  },
  {
    districtId: "141",
    wardId: "04783",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "141",
    wardId: "04786",
    name: "Xã Đại Minh",
  },
  {
    districtId: "148",
    wardId: "04789",
    name: "Phường Thái Bình",
  },
  {
    districtId: "148",
    wardId: "04792",
    name: "Phường Tân Hòa",
  },
  {
    districtId: "148",
    wardId: "04795",
    name: "Phường Thịnh Lang",
  },
  {
    districtId: "148",
    wardId: "04798",
    name: "Phường Hữu Nghị",
  },
  {
    districtId: "148",
    wardId: "04801",
    name: "Phường Tân Thịnh",
  },
  {
    districtId: "148",
    wardId: "04804",
    name: "Phường Đồng Tiến",
  },
  {
    districtId: "148",
    wardId: "04807",
    name: "Phường Phương Lâm",
  },
  {
    districtId: "148",
    wardId: "04813",
    name: "Xã Yên Mông",
  },
  {
    districtId: "148",
    wardId: "04816",
    name: "Phường Quỳnh Lâm",
  },
  {
    districtId: "148",
    wardId: "04819",
    name: "Phường Dân Chủ",
  },
  {
    districtId: "148",
    wardId: "04825",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "148",
    wardId: "04828",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "148",
    wardId: "04894",
    name: "Phường Kỳ Sơn",
  },
  {
    districtId: "148",
    wardId: "04897",
    name: "Xã Thịnh Minh",
  },
  {
    districtId: "148",
    wardId: "04903",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "148",
    wardId: "04906",
    name: "Xã Quang Tiến",
  },
  {
    districtId: "148",
    wardId: "04912",
    name: "Xã Mông Hóa",
  },
  {
    districtId: "148",
    wardId: "04918",
    name: "Phường Trung Minh",
  },
  {
    districtId: "148",
    wardId: "04921",
    name: "Xã Độc Lập",
  },
  {
    districtId: "150",
    wardId: "04831",
    name: "Thị trấn Đà Bắc",
  },
  {
    districtId: "150",
    wardId: "04834",
    name: "Xã Nánh Nghê",
  },
  {
    districtId: "150",
    wardId: "04840",
    name: "Xã Giáp Đắt",
  },
  {
    districtId: "150",
    wardId: "04846",
    name: "Xã Mường Chiềng",
  },
  {
    districtId: "150",
    wardId: "04849",
    name: "Xã Tân Pheo",
  },
  {
    districtId: "150",
    wardId: "04852",
    name: "Xã Đồng Chum",
  },
  {
    districtId: "150",
    wardId: "04855",
    name: "Xã Tân Minh",
  },
  {
    districtId: "150",
    wardId: "04858",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "150",
    wardId: "04861",
    name: "Xã Đồng Ruộng",
  },
  {
    districtId: "150",
    wardId: "04867",
    name: "Xã Tú Lý",
  },
  {
    districtId: "150",
    wardId: "04870",
    name: "Xã Trung Thành",
  },
  {
    districtId: "150",
    wardId: "04873",
    name: "Xã Yên Hòa",
  },
  {
    districtId: "150",
    wardId: "04876",
    name: "Xã Cao Sơn",
  },
  {
    districtId: "150",
    wardId: "04879",
    name: "Xã Toàn Sơn",
  },
  {
    districtId: "150",
    wardId: "04885",
    name: "Xã Hiền Lương",
  },
  {
    districtId: "150",
    wardId: "04888",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "150",
    wardId: "04891",
    name: "Xã Vầy Nưa",
  },
  {
    districtId: "152",
    wardId: "04924",
    name: "Thị trấn Lương Sơn",
  },
  {
    districtId: "152",
    wardId: "04942",
    name: "Xã Lâm Sơn",
  },
  {
    districtId: "152",
    wardId: "04945",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "152",
    wardId: "04951",
    name: "Xã Tân Vinh",
  },
  {
    districtId: "152",
    wardId: "04954",
    name: "Xã Nhuận Trạch",
  },
  {
    districtId: "152",
    wardId: "04957",
    name: "Xã Cao Sơn",
  },
  {
    districtId: "152",
    wardId: "04960",
    name: "Xã Cư Yên",
  },
  {
    districtId: "152",
    wardId: "04969",
    name: "Xã Liên Sơn",
  },
  {
    districtId: "152",
    wardId: "05008",
    name: "Xã Cao Dương",
  },
  {
    districtId: "152",
    wardId: "05041",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "152",
    wardId: "05047",
    name: "Xã Thanh Cao",
  },
  {
    districtId: "153",
    wardId: "04978",
    name: "Thị trấn Bo",
  },
  {
    districtId: "153",
    wardId: "04984",
    name: "Xã Đú Sáng",
  },
  {
    districtId: "153",
    wardId: "04987",
    name: "Xã Hùng Sơn",
  },
  {
    districtId: "153",
    wardId: "04990",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "153",
    wardId: "04999",
    name: "Xã Tú Sơn",
  },
  {
    districtId: "153",
    wardId: "05005",
    name: "Xã Vĩnh Tiến",
  },
  {
    districtId: "153",
    wardId: "05014",
    name: "Xã Đông Bắc",
  },
  {
    districtId: "153",
    wardId: "05017",
    name: "Xã Xuân Thủy",
  },
  {
    districtId: "153",
    wardId: "05026",
    name: "Xã Vĩnh Đồng",
  },
  {
    districtId: "153",
    wardId: "05035",
    name: "Xã Kim Lập",
  },
  {
    districtId: "153",
    wardId: "05038",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "153",
    wardId: "05065",
    name: "Xã Kim Bôi",
  },
  {
    districtId: "153",
    wardId: "05068",
    name: "Xã Nam Thượng",
  },
  {
    districtId: "153",
    wardId: "05077",
    name: "Xã Cuối Hạ",
  },
  {
    districtId: "153",
    wardId: "05080",
    name: "Xã Sào Báy",
  },
  {
    districtId: "153",
    wardId: "05083",
    name: "Xã Mi Hòa",
  },
  {
    districtId: "153",
    wardId: "05086",
    name: "Xã Nuông Dăm",
  },
  {
    districtId: "154",
    wardId: "05089",
    name: "Thị trấn Cao Phong",
  },
  {
    districtId: "154",
    wardId: "05092",
    name: "Xã Bình Thanh",
  },
  {
    districtId: "154",
    wardId: "05095",
    name: "Xã Thung Nai",
  },
  {
    districtId: "154",
    wardId: "05098",
    name: "Xã Bắc Phong",
  },
  {
    districtId: "154",
    wardId: "05101",
    name: "Xã Thu Phong",
  },
  {
    districtId: "154",
    wardId: "05104",
    name: "Xã Hợp Phong",
  },
  {
    districtId: "154",
    wardId: "05110",
    name: "Xã Tây Phong",
  },
  {
    districtId: "154",
    wardId: "05116",
    name: "Xã Dũng Phong",
  },
  {
    districtId: "154",
    wardId: "05119",
    name: "Xã Nam Phong",
  },
  {
    districtId: "154",
    wardId: "05125",
    name: "Xã Thạch Yên",
  },
  {
    districtId: "155",
    wardId: "05128",
    name: "Thị trấn Mãn Đức",
  },
  {
    districtId: "155",
    wardId: "05134",
    name: "Xã Suối Hoa",
  },
  {
    districtId: "155",
    wardId: "05137",
    name: "Xã Phú Vinh",
  },
  {
    districtId: "155",
    wardId: "05140",
    name: "Xã Phú Cường",
  },
  {
    districtId: "155",
    wardId: "05143",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "155",
    wardId: "05152",
    name: "Xã Quyết Chiến",
  },
  {
    districtId: "155",
    wardId: "05158",
    name: "Xã Phong Phú",
  },
  {
    districtId: "155",
    wardId: "05164",
    name: "Xã Tử Nê",
  },
  {
    districtId: "155",
    wardId: "05167",
    name: "Xã Thanh Hối",
  },
  {
    districtId: "155",
    wardId: "05170",
    name: "Xã Ngọc Mỹ",
  },
  {
    districtId: "155",
    wardId: "05173",
    name: "Xã Đông Lai",
  },
  {
    districtId: "155",
    wardId: "05176",
    name: "Xã Vân Sơn",
  },
  {
    districtId: "155",
    wardId: "05182",
    name: "Xã Nhân Mỹ",
  },
  {
    districtId: "155",
    wardId: "05191",
    name: "Xã Lỗ Sơn",
  },
  {
    districtId: "155",
    wardId: "05194",
    name: "Xã Ngổ Luông",
  },
  {
    districtId: "155",
    wardId: "05197",
    name: "Xã Gia Mô",
  },
  {
    districtId: "156",
    wardId: "04882",
    name: "Xã Tân Thành",
  },
  {
    districtId: "156",
    wardId: "05200",
    name: "Thị trấn Mai Châu",
  },
  {
    districtId: "156",
    wardId: "05206",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "156",
    wardId: "05209",
    name: "Xã Pà Cò",
  },
  {
    districtId: "156",
    wardId: "05212",
    name: "Xã Hang Kia",
  },
  {
    districtId: "156",
    wardId: "05221",
    name: "Xã Đồng Tân",
  },
  {
    districtId: "156",
    wardId: "05224",
    name: "Xã Cun Pheo",
  },
  {
    districtId: "156",
    wardId: "05227",
    name: "Xã Bao La",
  },
  {
    districtId: "156",
    wardId: "05233",
    name: "Xã Tòng Đậu",
  },
  {
    districtId: "156",
    wardId: "05242",
    name: "Xã Nà Phòn",
  },
  {
    districtId: "156",
    wardId: "05245",
    name: "Xã Săm Khóe",
  },
  {
    districtId: "156",
    wardId: "05248",
    name: "Xã Chiềng Châu",
  },
  {
    districtId: "156",
    wardId: "05251",
    name: "Xã Mai Hạ",
  },
  {
    districtId: "156",
    wardId: "05254",
    name: "Xã Thành Sơn",
  },
  {
    districtId: "156",
    wardId: "05257",
    name: "Xã Mai Hịch",
  },
  {
    districtId: "156",
    wardId: "05263",
    name: "Xã Vạn Mai",
  },
  {
    districtId: "157",
    wardId: "05266",
    name: "Thị trấn Vụ Bản",
  },
  {
    districtId: "157",
    wardId: "05269",
    name: "Xã Quý Hòa",
  },
  {
    districtId: "157",
    wardId: "05272",
    name: "Xã Miền Đồi",
  },
  {
    districtId: "157",
    wardId: "05275",
    name: "Xã Mỹ Thành",
  },
  {
    districtId: "157",
    wardId: "05278",
    name: "Xã Tuân Đạo",
  },
  {
    districtId: "157",
    wardId: "05281",
    name: "Xã Văn Nghĩa",
  },
  {
    districtId: "157",
    wardId: "05284",
    name: "Xã Văn Sơn",
  },
  {
    districtId: "157",
    wardId: "05287",
    name: "Xã Tân Lập",
  },
  {
    districtId: "157",
    wardId: "05290",
    name: "Xã Nhân Nghĩa",
  },
  {
    districtId: "157",
    wardId: "05293",
    name: "Xã Thượng Cốc",
  },
  {
    districtId: "157",
    wardId: "05299",
    name: "Xã Quyết Thắng",
  },
  {
    districtId: "157",
    wardId: "05302",
    name: "Xã Xuất Hóa",
  },
  {
    districtId: "157",
    wardId: "05305",
    name: "Xã Yên Phú",
  },
  {
    districtId: "157",
    wardId: "05308",
    name: "Xã Bình Hẻm",
  },
  {
    districtId: "157",
    wardId: "05320",
    name: "Xã Định Cư",
  },
  {
    districtId: "157",
    wardId: "05323",
    name: "Xã Chí Đạo",
  },
  {
    districtId: "157",
    wardId: "05329",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "157",
    wardId: "05332",
    name: "Xã Hương Nhượng",
  },
  {
    districtId: "157",
    wardId: "05335",
    name: "Xã Vũ Bình",
  },
  {
    districtId: "157",
    wardId: "05338",
    name: "Xã Tự Do",
  },
  {
    districtId: "157",
    wardId: "05341",
    name: "Xã Yên Nghiệp",
  },
  {
    districtId: "157",
    wardId: "05344",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "157",
    wardId: "05347",
    name: "Xã Ân Nghĩa",
  },
  {
    districtId: "157",
    wardId: "05350",
    name: "Xã Ngọc Lâu",
  },
  {
    districtId: "158",
    wardId: "05353",
    name: "Thị trấn Hàng Trạm",
  },
  {
    districtId: "158",
    wardId: "05356",
    name: "Xã Lạc Sỹ",
  },
  {
    districtId: "158",
    wardId: "05362",
    name: "Xã Lạc Lương",
  },
  {
    districtId: "158",
    wardId: "05365",
    name: "Xã Bảo Hiệu",
  },
  {
    districtId: "158",
    wardId: "05368",
    name: "Xã Đa Phúc",
  },
  {
    districtId: "158",
    wardId: "05371",
    name: "Xã Hữu Lợi",
  },
  {
    districtId: "158",
    wardId: "05374",
    name: "Xã Lạc Thịnh",
  },
  {
    districtId: "158",
    wardId: "05380",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "158",
    wardId: "05383",
    name: "Xã Phú Lai",
  },
  {
    districtId: "158",
    wardId: "05386",
    name: "Xã Yên Trị",
  },
  {
    districtId: "158",
    wardId: "05389",
    name: "Xã Ngọc Lương",
  },
  {
    districtId: "159",
    wardId: "04981",
    name: "Thị trấn Ba Hàng Đồi",
  },
  {
    districtId: "159",
    wardId: "05392",
    name: "Thị trấn Chi Nê",
  },
  {
    districtId: "159",
    wardId: "05395",
    name: "Xã Phú Nghĩa",
  },
  {
    districtId: "159",
    wardId: "05398",
    name: "Xã Phú Thành",
  },
  {
    districtId: "159",
    wardId: "05404",
    name: "Xã Hưng Thi",
  },
  {
    districtId: "159",
    wardId: "05413",
    name: "Xã Khoan Dụ",
  },
  {
    districtId: "159",
    wardId: "05419",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "159",
    wardId: "05422",
    name: "Xã Yên Bồng",
  },
  {
    districtId: "159",
    wardId: "05425",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "159",
    wardId: "05428",
    name: "Xã An Bình",
  },
  {
    districtId: "164",
    wardId: "05431",
    name: "Phường Quán Triều",
  },
  {
    districtId: "164",
    wardId: "05434",
    name: "Phường Quang Vinh",
  },
  {
    districtId: "164",
    wardId: "05437",
    name: "Phường Túc Duyên",
  },
  {
    districtId: "164",
    wardId: "05440",
    name: "Phường Hoàng Văn Thụ",
  },
  {
    districtId: "164",
    wardId: "05443",
    name: "Phường Trưng Vương",
  },
  {
    districtId: "164",
    wardId: "05446",
    name: "Phường Quang Trung",
  },
  {
    districtId: "164",
    wardId: "05449",
    name: "Phường Phan Đình Phùng",
  },
  {
    districtId: "164",
    wardId: "05452",
    name: "Phường Tân Thịnh",
  },
  {
    districtId: "164",
    wardId: "05455",
    name: "Phường Thịnh Đán",
  },
  {
    districtId: "164",
    wardId: "05458",
    name: "Phường Đồng Quang",
  },
  {
    districtId: "164",
    wardId: "05461",
    name: "Phường Gia Sàng",
  },
  {
    districtId: "164",
    wardId: "05464",
    name: "Phường Tân Lập",
  },
  {
    districtId: "164",
    wardId: "05467",
    name: "Phường Cam Giá",
  },
  {
    districtId: "164",
    wardId: "05470",
    name: "Phường Phú Xá",
  },
  {
    districtId: "164",
    wardId: "05473",
    name: "Phường Hương Sơn",
  },
  {
    districtId: "164",
    wardId: "05476",
    name: "Phường Trung Thành",
  },
  {
    districtId: "164",
    wardId: "05479",
    name: "Phường Tân Thành",
  },
  {
    districtId: "164",
    wardId: "05482",
    name: "Phường Tân Long",
  },
  {
    districtId: "164",
    wardId: "05485",
    name: "Xã Phúc Hà",
  },
  {
    districtId: "164",
    wardId: "05488",
    name: "Xã Phúc Xuân",
  },
  {
    districtId: "164",
    wardId: "05491",
    name: "Xã Quyết Thắng",
  },
  {
    districtId: "164",
    wardId: "05494",
    name: "Xã Phúc Trìu",
  },
  {
    districtId: "164",
    wardId: "05497",
    name: "Xã Thịnh Đức",
  },
  {
    districtId: "164",
    wardId: "05500",
    name: "Phường Tích Lương",
  },
  {
    districtId: "164",
    wardId: "05503",
    name: "Xã Tân Cương",
  },
  {
    districtId: "164",
    wardId: "05653",
    name: "Xã Sơn Cẩm",
  },
  {
    districtId: "164",
    wardId: "05659",
    name: "Phường Chùa Hang",
  },
  {
    districtId: "164",
    wardId: "05695",
    name: "Xã Cao Ngạn",
  },
  {
    districtId: "164",
    wardId: "05701",
    name: "Xã Linh Sơn",
  },
  {
    districtId: "164",
    wardId: "05710",
    name: "Phường Đồng Bẩm",
  },
  {
    districtId: "164",
    wardId: "05713",
    name: "Xã Huống Thượng",
  },
  {
    districtId: "164",
    wardId: "05914",
    name: "Xã Đồng Liên",
  },
  {
    districtId: "165",
    wardId: "05506",
    name: "Phường Lương Sơn",
  },
  {
    districtId: "165",
    wardId: "05509",
    name: "Phường Châu Sơn",
  },
  {
    districtId: "165",
    wardId: "05512",
    name: "Phường Mỏ Chè",
  },
  {
    districtId: "165",
    wardId: "05515",
    name: "Phường Cải Đan",
  },
  {
    districtId: "165",
    wardId: "05518",
    name: "Phường Thắng Lợi",
  },
  {
    districtId: "165",
    wardId: "05521",
    name: "Phường Phố Cò",
  },
  {
    districtId: "165",
    wardId: "05527",
    name: "Xã Tân Quang",
  },
  {
    districtId: "165",
    wardId: "05528",
    name: "Phường Bách Quang",
  },
  {
    districtId: "165",
    wardId: "05530",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "165",
    wardId: "05533",
    name: "Xã Bá Xuyên",
  },
  {
    districtId: "167",
    wardId: "05536",
    name: "Thị trấn Chợ Chu",
  },
  {
    districtId: "167",
    wardId: "05539",
    name: "Xã Linh Thông",
  },
  {
    districtId: "167",
    wardId: "05542",
    name: "Xã Lam Vỹ",
  },
  {
    districtId: "167",
    wardId: "05545",
    name: "Xã Quy Kỳ",
  },
  {
    districtId: "167",
    wardId: "05548",
    name: "Xã Tân Thịnh",
  },
  {
    districtId: "167",
    wardId: "05551",
    name: "Xã Kim Phượng",
  },
  {
    districtId: "167",
    wardId: "05554",
    name: "Xã Bảo Linh",
  },
  {
    districtId: "167",
    wardId: "05560",
    name: "Xã Phúc Chu",
  },
  {
    districtId: "167",
    wardId: "05563",
    name: "Xã Tân Dương",
  },
  {
    districtId: "167",
    wardId: "05566",
    name: "Xã Phượng Tiến",
  },
  {
    districtId: "167",
    wardId: "05569",
    name: "Xã Bảo Cường",
  },
  {
    districtId: "167",
    wardId: "05572",
    name: "Xã Đồng Thịnh",
  },
  {
    districtId: "167",
    wardId: "05575",
    name: "Xã Định Biên",
  },
  {
    districtId: "167",
    wardId: "05578",
    name: "Xã Thanh Định",
  },
  {
    districtId: "167",
    wardId: "05581",
    name: "Xã Trung Hội",
  },
  {
    districtId: "167",
    wardId: "05584",
    name: "Xã Trung Lương",
  },
  {
    districtId: "167",
    wardId: "05587",
    name: "Xã Bình Yên",
  },
  {
    districtId: "167",
    wardId: "05590",
    name: "Xã Điềm Mặc",
  },
  {
    districtId: "167",
    wardId: "05593",
    name: "Xã Phú Tiến",
  },
  {
    districtId: "167",
    wardId: "05596",
    name: "Xã Bộc Nhiêu",
  },
  {
    districtId: "167",
    wardId: "05599",
    name: "Xã Sơn Phú",
  },
  {
    districtId: "167",
    wardId: "05602",
    name: "Xã Phú Đình",
  },
  {
    districtId: "167",
    wardId: "05605",
    name: "Xã Bình Thành",
  },
  {
    districtId: "168",
    wardId: "05608",
    name: "Thị trấn Giang Tiên",
  },
  {
    districtId: "168",
    wardId: "05611",
    name: "Thị trấn Đu",
  },
  {
    districtId: "168",
    wardId: "05614",
    name: "Xã Yên Ninh",
  },
  {
    districtId: "168",
    wardId: "05617",
    name: "Xã Yên Trạch",
  },
  {
    districtId: "168",
    wardId: "05620",
    name: "Xã Yên Đổ",
  },
  {
    districtId: "168",
    wardId: "05623",
    name: "Xã Yên Lạc",
  },
  {
    districtId: "168",
    wardId: "05626",
    name: "Xã Ôn Lương",
  },
  {
    districtId: "168",
    wardId: "05629",
    name: "Xã Động Đạt",
  },
  {
    districtId: "168",
    wardId: "05632",
    name: "Xã Phủ Lý",
  },
  {
    districtId: "168",
    wardId: "05635",
    name: "Xã Phú Đô",
  },
  {
    districtId: "168",
    wardId: "05638",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "168",
    wardId: "05641",
    name: "Xã Tức Tranh",
  },
  {
    districtId: "168",
    wardId: "05644",
    name: "Xã Phấn Mễ",
  },
  {
    districtId: "168",
    wardId: "05647",
    name: "Xã Vô Tranh",
  },
  {
    districtId: "168",
    wardId: "05650",
    name: "Xã Cổ Lũng",
  },
  {
    districtId: "169",
    wardId: "05656",
    name: "Thị trấn Sông Cầu",
  },
  {
    districtId: "169",
    wardId: "05662",
    name: "Thị trấn Trại Cau",
  },
  {
    districtId: "169",
    wardId: "05665",
    name: "Xã Văn Lăng",
  },
  {
    districtId: "169",
    wardId: "05668",
    name: "Xã Tân Long",
  },
  {
    districtId: "169",
    wardId: "05671",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "169",
    wardId: "05674",
    name: "Xã Quang Sơn",
  },
  {
    districtId: "169",
    wardId: "05677",
    name: "Xã Minh Lập",
  },
  {
    districtId: "169",
    wardId: "05680",
    name: "Xã Văn Hán",
  },
  {
    districtId: "169",
    wardId: "05683",
    name: "Xã Hóa Trung",
  },
  {
    districtId: "169",
    wardId: "05686",
    name: "Xã Khe Mo",
  },
  {
    districtId: "169",
    wardId: "05689",
    name: "Xã Cây Thị",
  },
  {
    districtId: "169",
    wardId: "05692",
    name: "Xã Hóa Thượng",
  },
  {
    districtId: "169",
    wardId: "05698",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "169",
    wardId: "05704",
    name: "Xã Tân Lợi",
  },
  {
    districtId: "169",
    wardId: "05707",
    name: "Xã Nam Hòa",
  },
  {
    districtId: "170",
    wardId: "05716",
    name: "Thị trấn Đình Cả",
  },
  {
    districtId: "170",
    wardId: "05719",
    name: "Xã Sảng Mộc",
  },
  {
    districtId: "170",
    wardId: "05722",
    name: "Xã Nghinh Tường",
  },
  {
    districtId: "170",
    wardId: "05725",
    name: "Xã Thần Xa",
  },
  {
    districtId: "170",
    wardId: "05728",
    name: "Xã Vũ Chấn",
  },
  {
    districtId: "170",
    wardId: "05731",
    name: "Xã Thượng Nung",
  },
  {
    districtId: "170",
    wardId: "05734",
    name: "Xã Phú Thượng",
  },
  {
    districtId: "170",
    wardId: "05737",
    name: "Xã Cúc Đường",
  },
  {
    districtId: "170",
    wardId: "05740",
    name: "Xã La Hiên",
  },
  {
    districtId: "170",
    wardId: "05743",
    name: "Xã Lâu Thượng",
  },
  {
    districtId: "170",
    wardId: "05746",
    name: "Xã Tràng Xá",
  },
  {
    districtId: "170",
    wardId: "05749",
    name: "Xã Phương Giao",
  },
  {
    districtId: "170",
    wardId: "05752",
    name: "Xã Liên Minh",
  },
  {
    districtId: "170",
    wardId: "05755",
    name: "Xã Dân Tiến",
  },
  {
    districtId: "170",
    wardId: "05758",
    name: "Xã Bình Long",
  },
  {
    districtId: "171",
    wardId: "05761",
    name: "Thị trấn Hùng Sơn",
  },
  {
    districtId: "171",
    wardId: "05764",
    name: "Thị trấn Quân Chu",
  },
  {
    districtId: "171",
    wardId: "05767",
    name: "Xã Phúc Lương",
  },
  {
    districtId: "171",
    wardId: "05770",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "171",
    wardId: "05773",
    name: "Xã Yên Lãng",
  },
  {
    districtId: "171",
    wardId: "05776",
    name: "Xã Đức Lương",
  },
  {
    districtId: "171",
    wardId: "05779",
    name: "Xã Phú Cường",
  },
  {
    districtId: "171",
    wardId: "05782",
    name: "Xã Na Mao",
  },
  {
    districtId: "171",
    wardId: "05785",
    name: "Xã Phú Lạc",
  },
  {
    districtId: "171",
    wardId: "05788",
    name: "Xã Tân Linh",
  },
  {
    districtId: "171",
    wardId: "05791",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "171",
    wardId: "05794",
    name: "Xã Phục Linh",
  },
  {
    districtId: "171",
    wardId: "05797",
    name: "Xã Phú Xuyên",
  },
  {
    districtId: "171",
    wardId: "05800",
    name: "Xã Bản Ngoại",
  },
  {
    districtId: "171",
    wardId: "05803",
    name: "Xã Tiên Hội",
  },
  {
    districtId: "171",
    wardId: "05809",
    name: "Xã Cù Vân",
  },
  {
    districtId: "171",
    wardId: "05812",
    name: "Xã Hà Thượng",
  },
  {
    districtId: "171",
    wardId: "05815",
    name: "Xã La Bằng",
  },
  {
    districtId: "171",
    wardId: "05818",
    name: "Xã Hoàng Nông",
  },
  {
    districtId: "171",
    wardId: "05821",
    name: "Xã Khôi Kỳ",
  },
  {
    districtId: "171",
    wardId: "05824",
    name: "Xã An Khánh",
  },
  {
    districtId: "171",
    wardId: "05827",
    name: "Xã Tân Thái",
  },
  {
    districtId: "171",
    wardId: "05830",
    name: "Xã Bình Thuận",
  },
  {
    districtId: "171",
    wardId: "05833",
    name: "Xã Lục Ba",
  },
  {
    districtId: "171",
    wardId: "05836",
    name: "Xã Mỹ Yên",
  },
  {
    districtId: "171",
    wardId: "05839",
    name: "Xã Vạn Thọ",
  },
  {
    districtId: "171",
    wardId: "05842",
    name: "Xã Văn Yên",
  },
  {
    districtId: "171",
    wardId: "05845",
    name: "Xã Ký Phú",
  },
  {
    districtId: "171",
    wardId: "05848",
    name: "Xã Cát Nê",
  },
  {
    districtId: "171",
    wardId: "05851",
    name: "Xã Quân Chu",
  },
  {
    districtId: "172",
    wardId: "05854",
    name: "Phường Bãi Bông",
  },
  {
    districtId: "172",
    wardId: "05857",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "172",
    wardId: "05860",
    name: "Phường Ba Hàng",
  },
  {
    districtId: "172",
    wardId: "05863",
    name: "Xã Phúc Tân",
  },
  {
    districtId: "172",
    wardId: "05866",
    name: "Xã Phúc Thuận",
  },
  {
    districtId: "172",
    wardId: "05869",
    name: "Xã Hồng Tiến",
  },
  {
    districtId: "172",
    wardId: "05872",
    name: "Xã Minh Đức",
  },
  {
    districtId: "172",
    wardId: "05875",
    name: "Xã Đắc Sơn",
  },
  {
    districtId: "172",
    wardId: "05878",
    name: "Phường Đồng Tiến",
  },
  {
    districtId: "172",
    wardId: "05881",
    name: "Xã Thành Công",
  },
  {
    districtId: "172",
    wardId: "05884",
    name: "Xã Tiên Phong",
  },
  {
    districtId: "172",
    wardId: "05887",
    name: "Xã Vạn Phái",
  },
  {
    districtId: "172",
    wardId: "05890",
    name: "Xã Nam Tiến",
  },
  {
    districtId: "172",
    wardId: "05893",
    name: "Xã Tân Hương",
  },
  {
    districtId: "172",
    wardId: "05896",
    name: "Xã Đông Cao",
  },
  {
    districtId: "172",
    wardId: "05899",
    name: "Xã Trung Thành",
  },
  {
    districtId: "172",
    wardId: "05902",
    name: "Xã Tân Phú",
  },
  {
    districtId: "172",
    wardId: "05905",
    name: "Xã Thuận Thành",
  },
  {
    districtId: "173",
    wardId: "05908",
    name: "Thị trấn Hương Sơn",
  },
  {
    districtId: "173",
    wardId: "05911",
    name: "Xã Bàn Đạt",
  },
  {
    districtId: "173",
    wardId: "05917",
    name: "Xã Tân Khánh",
  },
  {
    districtId: "173",
    wardId: "05920",
    name: "Xã Tân Kim",
  },
  {
    districtId: "173",
    wardId: "05923",
    name: "Xã Tân Thành",
  },
  {
    districtId: "173",
    wardId: "05926",
    name: "Xã Đào Xá",
  },
  {
    districtId: "173",
    wardId: "05929",
    name: "Xã Bảo Lý",
  },
  {
    districtId: "173",
    wardId: "05932",
    name: "Xã Thượng Đình",
  },
  {
    districtId: "173",
    wardId: "05935",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "173",
    wardId: "05938",
    name: "Xã Nhã Lộng",
  },
  {
    districtId: "173",
    wardId: "05941",
    name: "Xã Điềm Thụy",
  },
  {
    districtId: "173",
    wardId: "05944",
    name: "Xã Xuân Phương",
  },
  {
    districtId: "173",
    wardId: "05947",
    name: "Xã Tân Đức",
  },
  {
    districtId: "173",
    wardId: "05950",
    name: "Xã Úc Kỳ",
  },
  {
    districtId: "173",
    wardId: "05953",
    name: "Xã Lương Phú",
  },
  {
    districtId: "173",
    wardId: "05956",
    name: "Xã Nga My",
  },
  {
    districtId: "173",
    wardId: "05959",
    name: "Xã Kha Sơn",
  },
  {
    districtId: "173",
    wardId: "05962",
    name: "Xã Thanh Ninh",
  },
  {
    districtId: "173",
    wardId: "05965",
    name: "Xã Dương Thành",
  },
  {
    districtId: "173",
    wardId: "05968",
    name: "Xã Hà Châu",
  },
  {
    districtId: "178",
    wardId: "05971",
    name: "Phường Hoàng Văn Thụ",
  },
  {
    districtId: "178",
    wardId: "05974",
    name: "Phường Tam Thanh",
  },
  {
    districtId: "178",
    wardId: "05977",
    name: "Phường Vĩnh Trại",
  },
  {
    districtId: "178",
    wardId: "05980",
    name: "Phường Đông Kinh",
  },
  {
    districtId: "178",
    wardId: "05983",
    name: "Phường Chi Lăng",
  },
  {
    districtId: "178",
    wardId: "05986",
    name: "Xã Hoàng Đồng",
  },
  {
    districtId: "178",
    wardId: "05989",
    name: "Xã Quảng Lạc",
  },
  {
    districtId: "178",
    wardId: "05992",
    name: "Xã Mai Pha",
  },
  {
    districtId: "180",
    wardId: "05995",
    name: "Thị trấn Thất Khê",
  },
  {
    districtId: "180",
    wardId: "05998",
    name: "Xã Khánh Long",
  },
  {
    districtId: "180",
    wardId: "06001",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "180",
    wardId: "06004",
    name: "Xã Quốc Khánh",
  },
  {
    districtId: "180",
    wardId: "06007",
    name: "Xã Vĩnh Tiến",
  },
  {
    districtId: "180",
    wardId: "06010",
    name: "Xã Cao Minh",
  },
  {
    districtId: "180",
    wardId: "06013",
    name: "Xã Chí Minh",
  },
  {
    districtId: "180",
    wardId: "06016",
    name: "Xã Tri Phương",
  },
  {
    districtId: "180",
    wardId: "06019",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "180",
    wardId: "06022",
    name: "Xã Tân Yên",
  },
  {
    districtId: "180",
    wardId: "06025",
    name: "Xã Đội Cấn",
  },
  {
    districtId: "180",
    wardId: "06028",
    name: "Xã Tân Minh",
  },
  {
    districtId: "180",
    wardId: "06031",
    name: "Xã Kim Đồng",
  },
  {
    districtId: "180",
    wardId: "06034",
    name: "Xã Chi Lăng",
  },
  {
    districtId: "180",
    wardId: "06037",
    name: "Xã Trung Thành",
  },
  {
    districtId: "180",
    wardId: "06040",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "180",
    wardId: "06043",
    name: "Xã Đào Viên",
  },
  {
    districtId: "180",
    wardId: "06046",
    name: "Xã Đề Thám",
  },
  {
    districtId: "180",
    wardId: "06049",
    name: "Xã Kháng Chiến",
  },
  {
    districtId: "180",
    wardId: "06055",
    name: "Xã Hùng Sơn",
  },
  {
    districtId: "180",
    wardId: "06058",
    name: "Xã Quốc Việt",
  },
  {
    districtId: "180",
    wardId: "06061",
    name: "Xã Hùng Việt",
  },
  {
    districtId: "181",
    wardId: "06067",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "181",
    wardId: "06070",
    name: "Xã Vĩnh Yên",
  },
  {
    districtId: "181",
    wardId: "06073",
    name: "Xã Hoa Thám",
  },
  {
    districtId: "181",
    wardId: "06076",
    name: "Xã Quý Hòa",
  },
  {
    districtId: "181",
    wardId: "06079",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "181",
    wardId: "06082",
    name: "Xã Yên Lỗ",
  },
  {
    districtId: "181",
    wardId: "06085",
    name: "Xã Thiện Hòa",
  },
  {
    districtId: "181",
    wardId: "06088",
    name: "Xã Quang Trung",
  },
  {
    districtId: "181",
    wardId: "06091",
    name: "Xã Thiện Thuật",
  },
  {
    districtId: "181",
    wardId: "06094",
    name: "Xã Minh Khai",
  },
  {
    districtId: "181",
    wardId: "06097",
    name: "Xã Thiện Long",
  },
  {
    districtId: "181",
    wardId: "06100",
    name: "Xã Hoàng Văn Thụ",
  },
  {
    districtId: "181",
    wardId: "06103",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "181",
    wardId: "06106",
    name: "Xã Mông Ân",
  },
  {
    districtId: "181",
    wardId: "06109",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "181",
    wardId: "06112",
    name: "Thị trấn Bình Gia",
  },
  {
    districtId: "181",
    wardId: "06115",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "181",
    wardId: "06118",
    name: "Xã Bình La",
  },
  {
    districtId: "181",
    wardId: "06121",
    name: "Xã Tân Văn",
  },
  {
    districtId: "182",
    wardId: "06124",
    name: "Thị trấn Na Sầm",
  },
  {
    districtId: "182",
    wardId: "06127",
    name: "Xã Trùng Khánh",
  },
  {
    districtId: "182",
    wardId: "06133",
    name: "Xã Bắc La",
  },
  {
    districtId: "182",
    wardId: "06136",
    name: "Xã Thụy Hùng",
  },
  {
    districtId: "182",
    wardId: "06139",
    name: "Xã Bắc Hùng",
  },
  {
    districtId: "182",
    wardId: "06142",
    name: "Xã Tân Tác",
  },
  {
    districtId: "182",
    wardId: "06148",
    name: "Xã Thanh Long",
  },
  {
    districtId: "182",
    wardId: "06151",
    name: "Xã Hội Hoan",
  },
  {
    districtId: "182",
    wardId: "06154",
    name: "Xã Bắc Việt",
  },
  {
    districtId: "182",
    wardId: "06157",
    name: "Xã Hoàng Việt",
  },
  {
    districtId: "182",
    wardId: "06160",
    name: "Xã Gia Miễn",
  },
  {
    districtId: "182",
    wardId: "06163",
    name: "Xã Thành Hòa",
  },
  {
    districtId: "182",
    wardId: "06166",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "182",
    wardId: "06172",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "182",
    wardId: "06175",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "182",
    wardId: "06178",
    name: "Xã  Hoàng Văn Thụ",
  },
  {
    districtId: "182",
    wardId: "06181",
    name: "Xã Nhạc Kỳ",
  },
  {
    districtId: "183",
    wardId: "06184",
    name: "Thị trấn Đồng Đăng",
  },
  {
    districtId: "183",
    wardId: "06187",
    name: "Thị trấn Cao Lộc",
  },
  {
    districtId: "183",
    wardId: "06190",
    name: "Xã Bảo Lâm",
  },
  {
    districtId: "183",
    wardId: "06193",
    name: "Xã Thanh Lòa",
  },
  {
    districtId: "183",
    wardId: "06196",
    name: "Xã Cao Lâu",
  },
  {
    districtId: "183",
    wardId: "06199",
    name: "Xã Thạch Đạn",
  },
  {
    districtId: "183",
    wardId: "06202",
    name: "Xã Xuất Lễ",
  },
  {
    districtId: "183",
    wardId: "06205",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "183",
    wardId: "06208",
    name: "Xã Thụy Hùng",
  },
  {
    districtId: "183",
    wardId: "06211",
    name: "Xã Lộc Yên",
  },
  {
    districtId: "183",
    wardId: "06214",
    name: "Xã Phú Xá",
  },
  {
    districtId: "183",
    wardId: "06217",
    name: "Xã Bình Trung",
  },
  {
    districtId: "183",
    wardId: "06220",
    name: "Xã Hải Yến",
  },
  {
    districtId: "183",
    wardId: "06223",
    name: "Xã Hòa Cư",
  },
  {
    districtId: "183",
    wardId: "06226",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "183",
    wardId: "06232",
    name: "Xã Công Sơn",
  },
  {
    districtId: "183",
    wardId: "06235",
    name: "Xã Gia Cát",
  },
  {
    districtId: "183",
    wardId: "06238",
    name: "Xã Mẫu Sơn",
  },
  {
    districtId: "183",
    wardId: "06241",
    name: "Xã Xuân Long",
  },
  {
    districtId: "183",
    wardId: "06244",
    name: "Xã Tân Liên",
  },
  {
    districtId: "183",
    wardId: "06247",
    name: "Xã Yên Trạch",
  },
  {
    districtId: "183",
    wardId: "06250",
    name: "Xã Tân Thành",
  },
  {
    districtId: "184",
    wardId: "06253",
    name: "Thị trấn Văn Quan",
  },
  {
    districtId: "184",
    wardId: "06256",
    name: "Xã Trấn Ninh",
  },
  {
    districtId: "184",
    wardId: "06268",
    name: "Xã Liên Hội",
  },
  {
    districtId: "184",
    wardId: "06274",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "184",
    wardId: "06277",
    name: "Xã Tú Xuyên",
  },
  {
    districtId: "184",
    wardId: "06280",
    name: "Xã Điềm He",
  },
  {
    districtId: "184",
    wardId: "06283",
    name: "Xã An Sơn",
  },
  {
    districtId: "184",
    wardId: "06286",
    name: "Xã Khánh Khê",
  },
  {
    districtId: "184",
    wardId: "06292",
    name: "Xã Lương Năng",
  },
  {
    districtId: "184",
    wardId: "06295",
    name: "Xã Đồng Giáp",
  },
  {
    districtId: "184",
    wardId: "06298",
    name: "Xã Bình Phúc",
  },
  {
    districtId: "184",
    wardId: "06301",
    name: "Xã Tràng Các",
  },
  {
    districtId: "184",
    wardId: "06307",
    name: "Xã Tân Đoàn",
  },
  {
    districtId: "184",
    wardId: "06313",
    name: "Xã Tri Lễ",
  },
  {
    districtId: "184",
    wardId: "06316",
    name: "Xã Tràng Phái",
  },
  {
    districtId: "184",
    wardId: "06319",
    name: "Xã Yên Phúc",
  },
  {
    districtId: "184",
    wardId: "06322",
    name: "Xã Hữu Lễ",
  },
  {
    districtId: "185",
    wardId: "06325",
    name: "Thị trấn Bắc Sơn",
  },
  {
    districtId: "185",
    wardId: "06328",
    name: "Xã Long Đống",
  },
  {
    districtId: "185",
    wardId: "06331",
    name: "Xã Vạn Thủy",
  },
  {
    districtId: "185",
    wardId: "06337",
    name: "Xã Đồng ý",
  },
  {
    districtId: "185",
    wardId: "06340",
    name: "Xã Tân Tri",
  },
  {
    districtId: "185",
    wardId: "06343",
    name: "Xã Bắc Quỳnh",
  },
  {
    districtId: "185",
    wardId: "06349",
    name: "Xã Hưng Vũ",
  },
  {
    districtId: "185",
    wardId: "06352",
    name: "Xã Tân Lập",
  },
  {
    districtId: "185",
    wardId: "06355",
    name: "Xã Vũ Sơn",
  },
  {
    districtId: "185",
    wardId: "06358",
    name: "Xã Chiêu Vũ",
  },
  {
    districtId: "185",
    wardId: "06361",
    name: "Xã Tân Hương",
  },
  {
    districtId: "185",
    wardId: "06364",
    name: "Xã Chiến Thắng",
  },
  {
    districtId: "185",
    wardId: "06367",
    name: "Xã Vũ Lăng",
  },
  {
    districtId: "185",
    wardId: "06370",
    name: "Xã Trấn Yên",
  },
  {
    districtId: "185",
    wardId: "06373",
    name: "Xã Vũ Lễ",
  },
  {
    districtId: "185",
    wardId: "06376",
    name: "Xã Nhất Hòa",
  },
  {
    districtId: "185",
    wardId: "06379",
    name: "Xã Tân Thành",
  },
  {
    districtId: "185",
    wardId: "06382",
    name: "Xã Nhất Tiến",
  },
  {
    districtId: "186",
    wardId: "06385",
    name: "Thị trấn Hữu Lũng",
  },
  {
    districtId: "186",
    wardId: "06388",
    name: "Xã Hữu Liên",
  },
  {
    districtId: "186",
    wardId: "06391",
    name: "Xã Yên Bình",
  },
  {
    districtId: "186",
    wardId: "06394",
    name: "Xã Quyết Thắng",
  },
  {
    districtId: "186",
    wardId: "06397",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "186",
    wardId: "06400",
    name: "Xã Yên Thịnh",
  },
  {
    districtId: "186",
    wardId: "06403",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "186",
    wardId: "06406",
    name: "Xã Thiện Tân",
  },
  {
    districtId: "186",
    wardId: "06412",
    name: "Xã Yên Vượng",
  },
  {
    districtId: "186",
    wardId: "06415",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "186",
    wardId: "06418",
    name: "Xã Nhật Tiến",
  },
  {
    districtId: "186",
    wardId: "06421",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "186",
    wardId: "06424",
    name: "Xã Đồng Tân",
  },
  {
    districtId: "186",
    wardId: "06427",
    name: "Xã Cai Kinh",
  },
  {
    districtId: "186",
    wardId: "06430",
    name: "Xã Hòa Lạc",
  },
  {
    districtId: "186",
    wardId: "06433",
    name: "Xã Vân Nham",
  },
  {
    districtId: "186",
    wardId: "06436",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "186",
    wardId: "06442",
    name: "Xã Tân Thành",
  },
  {
    districtId: "186",
    wardId: "06445",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "186",
    wardId: "06448",
    name: "Xã Minh Sơn",
  },
  {
    districtId: "186",
    wardId: "06451",
    name: "Xã Hồ Sơn",
  },
  {
    districtId: "186",
    wardId: "06454",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "186",
    wardId: "06457",
    name: "Xã Minh Hòa",
  },
  {
    districtId: "186",
    wardId: "06460",
    name: "Xã Hòa Thắng",
  },
  {
    districtId: "187",
    wardId: "06463",
    name: "Thị trấn Đồng Mỏ",
  },
  {
    districtId: "187",
    wardId: "06466",
    name: "Thị trấn Chi Lăng",
  },
  {
    districtId: "187",
    wardId: "06469",
    name: "Xã Vân An",
  },
  {
    districtId: "187",
    wardId: "06472",
    name: "Xã Vân Thủy",
  },
  {
    districtId: "187",
    wardId: "06475",
    name: "Xã Gia Lộc",
  },
  {
    districtId: "187",
    wardId: "06478",
    name: "Xã Bắc Thủy",
  },
  {
    districtId: "187",
    wardId: "06481",
    name: "Xã Chiến Thắng",
  },
  {
    districtId: "187",
    wardId: "06484",
    name: "Xã Mai Sao",
  },
  {
    districtId: "187",
    wardId: "06487",
    name: "Xã Bằng Hữu",
  },
  {
    districtId: "187",
    wardId: "06490",
    name: "Xã Thượng Cường",
  },
  {
    districtId: "187",
    wardId: "06493",
    name: "Xã Bằng Mạc",
  },
  {
    districtId: "187",
    wardId: "06496",
    name: "Xã Nhân Lý",
  },
  {
    districtId: "187",
    wardId: "06499",
    name: "Xã Lâm Sơn",
  },
  {
    districtId: "187",
    wardId: "06502",
    name: "Xã Liên Sơn",
  },
  {
    districtId: "187",
    wardId: "06505",
    name: "Xã Vạn Linh",
  },
  {
    districtId: "187",
    wardId: "06508",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "187",
    wardId: "06514",
    name: "Xã Hữu Kiên",
  },
  {
    districtId: "187",
    wardId: "06517",
    name: "Xã Quan Sơn",
  },
  {
    districtId: "187",
    wardId: "06520",
    name: "Xã Y Tịch",
  },
  {
    districtId: "187",
    wardId: "06523",
    name: "Xã Chi Lăng",
  },
  {
    districtId: "188",
    wardId: "06526",
    name: "Thị trấn Na Dương",
  },
  {
    districtId: "188",
    wardId: "06529",
    name: "Thị trấn Lộc Bình",
  },
  {
    districtId: "188",
    wardId: "06532",
    name: "Xã Mẫu Sơn",
  },
  {
    districtId: "188",
    wardId: "06541",
    name: "Xã Yên Khoái",
  },
  {
    districtId: "188",
    wardId: "06544",
    name: "Xã Khánh Xuân",
  },
  {
    districtId: "188",
    wardId: "06547",
    name: "Xã Tú Mịch",
  },
  {
    districtId: "188",
    wardId: "06550",
    name: "Xã Hữu Khánh",
  },
  {
    districtId: "188",
    wardId: "06553",
    name: "Xã Đồng Bục",
  },
  {
    districtId: "188",
    wardId: "06559",
    name: "Xã Tam Gia",
  },
  {
    districtId: "188",
    wardId: "06562",
    name: "Xã Tú Đoạn",
  },
  {
    districtId: "188",
    wardId: "06565",
    name: "Xã Khuất Xá",
  },
  {
    districtId: "188",
    wardId: "06574",
    name: "Xã Tĩnh Bắc",
  },
  {
    districtId: "188",
    wardId: "06577",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "188",
    wardId: "06589",
    name: "Xã Sàn Viên",
  },
  {
    districtId: "188",
    wardId: "06592",
    name: "Xã Đông Quan",
  },
  {
    districtId: "188",
    wardId: "06595",
    name: "Xã Minh Hiệp",
  },
  {
    districtId: "188",
    wardId: "06598",
    name: "Xã Hữu Lân",
  },
  {
    districtId: "188",
    wardId: "06601",
    name: "Xã Lợi Bác",
  },
  {
    districtId: "188",
    wardId: "06604",
    name: "Xã Nam Quan",
  },
  {
    districtId: "188",
    wardId: "06607",
    name: "Xã Xuân Dương",
  },
  {
    districtId: "188",
    wardId: "06610",
    name: "Xã Ái Quốc",
  },
  {
    districtId: "189",
    wardId: "06613",
    name: "Thị trấn Đình Lập",
  },
  {
    districtId: "189",
    wardId: "06616",
    name: "Thị trấn NT Thái Bình",
  },
  {
    districtId: "189",
    wardId: "06619",
    name: "Xã Bắc Xa",
  },
  {
    districtId: "189",
    wardId: "06622",
    name: "Xã Bính Xá",
  },
  {
    districtId: "189",
    wardId: "06625",
    name: "Xã Kiên Mộc",
  },
  {
    districtId: "189",
    wardId: "06628",
    name: "Xã Đình Lập",
  },
  {
    districtId: "189",
    wardId: "06631",
    name: "Xã Thái Bình",
  },
  {
    districtId: "189",
    wardId: "06634",
    name: "Xã Cường Lợi",
  },
  {
    districtId: "189",
    wardId: "06637",
    name: "Xã Châu Sơn",
  },
  {
    districtId: "189",
    wardId: "06640",
    name: "Xã Lâm Ca",
  },
  {
    districtId: "189",
    wardId: "06643",
    name: "Xã Đồng Thắng",
  },
  {
    districtId: "189",
    wardId: "06646",
    name: "Xã Bắc Lãng",
  },
  {
    districtId: "193",
    wardId: "06649",
    name: "Phường Hà Khánh",
  },
  {
    districtId: "193",
    wardId: "06652",
    name: "Phường Hà Phong",
  },
  {
    districtId: "193",
    wardId: "06655",
    name: "Phường Hà Khẩu",
  },
  {
    districtId: "193",
    wardId: "06658",
    name: "Phường Cao Xanh",
  },
  {
    districtId: "193",
    wardId: "06661",
    name: "Phường Giếng Đáy",
  },
  {
    districtId: "193",
    wardId: "06664",
    name: "Phường Hà Tu",
  },
  {
    districtId: "193",
    wardId: "06667",
    name: "Phường Hà Trung",
  },
  {
    districtId: "193",
    wardId: "06670",
    name: "Phường Hà Lầm",
  },
  {
    districtId: "193",
    wardId: "06673",
    name: "Phường Bãi Cháy",
  },
  {
    districtId: "193",
    wardId: "06676",
    name: "Phường Cao Thắng",
  },
  {
    districtId: "193",
    wardId: "06679",
    name: "Phường Hùng Thắng",
  },
  {
    districtId: "193",
    wardId: "06682",
    name: "Phường Yết Kiêu",
  },
  {
    districtId: "193",
    wardId: "06685",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "193",
    wardId: "06688",
    name: "Phường Hồng Hải",
  },
  {
    districtId: "193",
    wardId: "06691",
    name: "Phường Hồng Gai",
  },
  {
    districtId: "193",
    wardId: "06694",
    name: "Phường Bạch Đằng",
  },
  {
    districtId: "193",
    wardId: "06697",
    name: "Phường Hồng Hà",
  },
  {
    districtId: "193",
    wardId: "06700",
    name: "Phường Tuần Châu",
  },
  {
    districtId: "193",
    wardId: "06703",
    name: "Phường Việt Hưng",
  },
  {
    districtId: "193",
    wardId: "06706",
    name: "Phường Đại Yên",
  },
  {
    districtId: "193",
    wardId: "07030",
    name: "Phường Hoành Bồ",
  },
  {
    districtId: "193",
    wardId: "07033",
    name: "Xã Kỳ Thượng",
  },
  {
    districtId: "193",
    wardId: "07036",
    name: "Xã Đồng Sơn",
  },
  {
    districtId: "193",
    wardId: "07039",
    name: "Xã Tân Dân",
  },
  {
    districtId: "193",
    wardId: "07042",
    name: "Xã Đồng Lâm",
  },
  {
    districtId: "193",
    wardId: "07045",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "193",
    wardId: "07048",
    name: "Xã Vũ Oai",
  },
  {
    districtId: "193",
    wardId: "07051",
    name: "Xã Dân Chủ",
  },
  {
    districtId: "193",
    wardId: "07054",
    name: "Xã Quảng La",
  },
  {
    districtId: "193",
    wardId: "07057",
    name: "Xã Bằng Cả",
  },
  {
    districtId: "193",
    wardId: "07060",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "193",
    wardId: "07063",
    name: "Xã Sơn Dương",
  },
  {
    districtId: "193",
    wardId: "07066",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "194",
    wardId: "06709",
    name: "Phường Ka Long",
  },
  {
    districtId: "194",
    wardId: "06712",
    name: "Phường Trần Phú",
  },
  {
    districtId: "194",
    wardId: "06715",
    name: "Phường Ninh Dương",
  },
  {
    districtId: "194",
    wardId: "06718",
    name: "Phường Hoà Lạc",
  },
  {
    districtId: "194",
    wardId: "06721",
    name: "Phường Trà Cổ",
  },
  {
    districtId: "194",
    wardId: "06724",
    name: "Xã Hải Sơn",
  },
  {
    districtId: "194",
    wardId: "06727",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "194",
    wardId: "06730",
    name: "Xã Hải Đông",
  },
  {
    districtId: "194",
    wardId: "06733",
    name: "Xã Hải Tiến",
  },
  {
    districtId: "194",
    wardId: "06736",
    name: "Phường Hải Yên",
  },
  {
    districtId: "194",
    wardId: "06739",
    name: "Xã Quảng Nghĩa",
  },
  {
    districtId: "194",
    wardId: "06742",
    name: "Phường Hải Hoà",
  },
  {
    districtId: "194",
    wardId: "06745",
    name: "Xã Hải Xuân",
  },
  {
    districtId: "194",
    wardId: "06748",
    name: "Xã Vạn Ninh",
  },
  {
    districtId: "194",
    wardId: "06751",
    name: "Phường Bình Ngọc",
  },
  {
    districtId: "194",
    wardId: "06754",
    name: "Xã Vĩnh Trung",
  },
  {
    districtId: "194",
    wardId: "06757",
    name: "Xã Vĩnh Thực",
  },
  {
    districtId: "195",
    wardId: "06760",
    name: "Phường Mông Dương",
  },
  {
    districtId: "195",
    wardId: "06763",
    name: "Phường Cửa Ông",
  },
  {
    districtId: "195",
    wardId: "06766",
    name: "Phường Cẩm Sơn",
  },
  {
    districtId: "195",
    wardId: "06769",
    name: "Phường Cẩm Đông",
  },
  {
    districtId: "195",
    wardId: "06772",
    name: "Phường Cẩm Phú",
  },
  {
    districtId: "195",
    wardId: "06775",
    name: "Phường Cẩm Tây",
  },
  {
    districtId: "195",
    wardId: "06778",
    name: "Phường Quang Hanh",
  },
  {
    districtId: "195",
    wardId: "06781",
    name: "Phường Cẩm Thịnh",
  },
  {
    districtId: "195",
    wardId: "06784",
    name: "Phường Cẩm Thủy",
  },
  {
    districtId: "195",
    wardId: "06787",
    name: "Phường Cẩm Thạch",
  },
  {
    districtId: "195",
    wardId: "06790",
    name: "Phường Cẩm Thành",
  },
  {
    districtId: "195",
    wardId: "06793",
    name: "Phường Cẩm Trung",
  },
  {
    districtId: "195",
    wardId: "06796",
    name: "Phường Cẩm Bình",
  },
  {
    districtId: "195",
    wardId: "06799",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "195",
    wardId: "06802",
    name: "Xã Cẩm Hải",
  },
  {
    districtId: "195",
    wardId: "06805",
    name: "Xã Dương Huy",
  },
  {
    districtId: "196",
    wardId: "06808",
    name: "Phường Vàng Danh",
  },
  {
    districtId: "196",
    wardId: "06811",
    name: "Phường Thanh Sơn",
  },
  {
    districtId: "196",
    wardId: "06814",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "196",
    wardId: "06817",
    name: "Phường Quang Trung",
  },
  {
    districtId: "196",
    wardId: "06820",
    name: "Phường Trưng Vương",
  },
  {
    districtId: "196",
    wardId: "06823",
    name: "Phường Nam Khê",
  },
  {
    districtId: "196",
    wardId: "06826",
    name: "Phường Yên Thanh",
  },
  {
    districtId: "196",
    wardId: "06829",
    name: "Xã Thượng Yên Công",
  },
  {
    districtId: "196",
    wardId: "06832",
    name: "Phường Phương Đông",
  },
  {
    districtId: "196",
    wardId: "06835",
    name: "Phường Phương Nam",
  },
  {
    districtId: "198",
    wardId: "06838",
    name: "Thị trấn Bình Liêu",
  },
  {
    districtId: "198",
    wardId: "06841",
    name: "Xã Hoành Mô",
  },
  {
    districtId: "198",
    wardId: "06844",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "198",
    wardId: "06847",
    name: "Xã Đồng Văn",
  },
  {
    districtId: "198",
    wardId: "06853",
    name: "Xã Vô Ngại",
  },
  {
    districtId: "198",
    wardId: "06856",
    name: "Xã Lục Hồn",
  },
  {
    districtId: "198",
    wardId: "06859",
    name: "Xã Húc Động",
  },
  {
    districtId: "199",
    wardId: "06862",
    name: "Thị trấn Tiên Yên",
  },
  {
    districtId: "199",
    wardId: "06865",
    name: "Xã Hà Lâu",
  },
  {
    districtId: "199",
    wardId: "06868",
    name: "Xã Đại Dực",
  },
  {
    districtId: "199",
    wardId: "06871",
    name: "Xã Phong Dụ",
  },
  {
    districtId: "199",
    wardId: "06874",
    name: "Xã Điền Xá",
  },
  {
    districtId: "199",
    wardId: "06877",
    name: "Xã Đông Ngũ",
  },
  {
    districtId: "199",
    wardId: "06880",
    name: "Xã Yên Than",
  },
  {
    districtId: "199",
    wardId: "06883",
    name: "Xã Đông Hải",
  },
  {
    districtId: "199",
    wardId: "06886",
    name: "Xã Hải Lạng",
  },
  {
    districtId: "199",
    wardId: "06889",
    name: "Xã Tiên Lãng",
  },
  {
    districtId: "199",
    wardId: "06892",
    name: "Xã Đồng Rui",
  },
  {
    districtId: "200",
    wardId: "06895",
    name: "Thị trấn Đầm Hà",
  },
  {
    districtId: "200",
    wardId: "06898",
    name: "Xã Quảng Lâm",
  },
  {
    districtId: "200",
    wardId: "06901",
    name: "Xã Quảng An",
  },
  {
    districtId: "200",
    wardId: "06904",
    name: "Xã Tân Bình",
  },
  {
    districtId: "200",
    wardId: "06910",
    name: "Xã Dực Yên",
  },
  {
    districtId: "200",
    wardId: "06913",
    name: "Xã Quảng Tân",
  },
  {
    districtId: "200",
    wardId: "06916",
    name: "Xã Đầm Hà",
  },
  {
    districtId: "200",
    wardId: "06917",
    name: "Xã Tân Lập",
  },
  {
    districtId: "200",
    wardId: "06919",
    name: "Xã Đại Bình",
  },
  {
    districtId: "201",
    wardId: "06922",
    name: "Thị trấn Quảng Hà",
  },
  {
    districtId: "201",
    wardId: "06925",
    name: "Xã Quảng Đức",
  },
  {
    districtId: "201",
    wardId: "06928",
    name: "Xã Quảng Sơn",
  },
  {
    districtId: "201",
    wardId: "06931",
    name: "Xã Quảng Thành",
  },
  {
    districtId: "201",
    wardId: "06937",
    name: "Xã Quảng Thịnh",
  },
  {
    districtId: "201",
    wardId: "06940",
    name: "Xã Quảng Minh",
  },
  {
    districtId: "201",
    wardId: "06943",
    name: "Xã Quảng Chính",
  },
  {
    districtId: "201",
    wardId: "06946",
    name: "Xã Quảng Long",
  },
  {
    districtId: "201",
    wardId: "06949",
    name: "Xã Đường Hoa",
  },
  {
    districtId: "201",
    wardId: "06952",
    name: "Xã Quảng Phong",
  },
  {
    districtId: "201",
    wardId: "06967",
    name: "Xã Cái Chiên",
  },
  {
    districtId: "202",
    wardId: "06970",
    name: "Thị trấn Ba Chẽ",
  },
  {
    districtId: "202",
    wardId: "06973",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "202",
    wardId: "06976",
    name: "Xã Thanh Lâm",
  },
  {
    districtId: "202",
    wardId: "06979",
    name: "Xã Đạp Thanh",
  },
  {
    districtId: "202",
    wardId: "06982",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "202",
    wardId: "06985",
    name: "Xã Lương Mông",
  },
  {
    districtId: "202",
    wardId: "06988",
    name: "Xã Đồn Đạc",
  },
  {
    districtId: "202",
    wardId: "06991",
    name: "Xã Minh Cầm",
  },
  {
    districtId: "203",
    wardId: "06994",
    name: "Thị trấn Cái Rồng",
  },
  {
    districtId: "203",
    wardId: "06997",
    name: "Xã Đài Xuyên",
  },
  {
    districtId: "203",
    wardId: "07000",
    name: "Xã Bình Dân",
  },
  {
    districtId: "203",
    wardId: "07003",
    name: "Xã Vạn Yên",
  },
  {
    districtId: "203",
    wardId: "07006",
    name: "Xã Minh Châu",
  },
  {
    districtId: "203",
    wardId: "07009",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "203",
    wardId: "07012",
    name: "Xã Hạ Long",
  },
  {
    districtId: "203",
    wardId: "07015",
    name: "Xã Đông Xá",
  },
  {
    districtId: "203",
    wardId: "07018",
    name: "Xã Bản Sen",
  },
  {
    districtId: "203",
    wardId: "07021",
    name: "Xã Thắng Lợi",
  },
  {
    districtId: "203",
    wardId: "07024",
    name: "Xã Quan Lạn",
  },
  {
    districtId: "203",
    wardId: "07027",
    name: "Xã Ngọc Vừng",
  },
  {
    districtId: "205",
    wardId: "07069",
    name: "Phường Mạo Khê",
  },
  {
    districtId: "205",
    wardId: "07072",
    name: "Phường Đông Triều",
  },
  {
    districtId: "205",
    wardId: "07075",
    name: "Xã An Sinh",
  },
  {
    districtId: "205",
    wardId: "07078",
    name: "Xã Tràng Lương",
  },
  {
    districtId: "205",
    wardId: "07081",
    name: "Xã Bình Khê",
  },
  {
    districtId: "205",
    wardId: "07084",
    name: "Xã Việt Dân",
  },
  {
    districtId: "205",
    wardId: "07087",
    name: "Xã Tân Việt",
  },
  {
    districtId: "205",
    wardId: "07090",
    name: "Xã Bình Dương",
  },
  {
    districtId: "205",
    wardId: "07093",
    name: "Phường Đức Chính",
  },
  {
    districtId: "205",
    wardId: "07096",
    name: "Phường Tràng An",
  },
  {
    districtId: "205",
    wardId: "07099",
    name: "Xã Nguyễn Huệ",
  },
  {
    districtId: "205",
    wardId: "07102",
    name: "Xã Thủy An",
  },
  {
    districtId: "205",
    wardId: "07105",
    name: "Phường Xuân Sơn",
  },
  {
    districtId: "205",
    wardId: "07108",
    name: "Xã Hồng Thái Tây",
  },
  {
    districtId: "205",
    wardId: "07111",
    name: "Xã Hồng Thái Đông",
  },
  {
    districtId: "205",
    wardId: "07114",
    name: "Phường Hoàng Quế",
  },
  {
    districtId: "205",
    wardId: "07117",
    name: "Phường Yên Thọ",
  },
  {
    districtId: "205",
    wardId: "07120",
    name: "Phường Hồng Phong",
  },
  {
    districtId: "205",
    wardId: "07123",
    name: "Phường Kim Sơn",
  },
  {
    districtId: "205",
    wardId: "07126",
    name: "Phường Hưng Đạo",
  },
  {
    districtId: "205",
    wardId: "07129",
    name: "Xã Yên Đức",
  },
  {
    districtId: "206",
    wardId: "07132",
    name: "Phường Quảng Yên",
  },
  {
    districtId: "206",
    wardId: "07135",
    name: "Phường Đông Mai",
  },
  {
    districtId: "206",
    wardId: "07138",
    name: "Phường Minh Thành",
  },
  {
    districtId: "206",
    wardId: "07144",
    name: "Xã Sông Khoai",
  },
  {
    districtId: "206",
    wardId: "07147",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "206",
    wardId: "07150",
    name: "Phường Cộng Hòa",
  },
  {
    districtId: "206",
    wardId: "07153",
    name: "Xã Tiền An",
  },
  {
    districtId: "206",
    wardId: "07156",
    name: "Xã Hoàng Tân",
  },
  {
    districtId: "206",
    wardId: "07159",
    name: "Phường Tân An",
  },
  {
    districtId: "206",
    wardId: "07162",
    name: "Phường Yên Giang",
  },
  {
    districtId: "206",
    wardId: "07165",
    name: "Phường Nam Hoà",
  },
  {
    districtId: "206",
    wardId: "07168",
    name: "Phường Hà An",
  },
  {
    districtId: "206",
    wardId: "07171",
    name: "Xã Cẩm La",
  },
  {
    districtId: "206",
    wardId: "07174",
    name: "Phường Phong Hải",
  },
  {
    districtId: "206",
    wardId: "07177",
    name: "Phường Yên Hải",
  },
  {
    districtId: "206",
    wardId: "07180",
    name: "Xã Liên Hòa",
  },
  {
    districtId: "206",
    wardId: "07183",
    name: "Phường Phong Cốc",
  },
  {
    districtId: "206",
    wardId: "07186",
    name: "Xã Liên Vị",
  },
  {
    districtId: "206",
    wardId: "07189",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "207",
    wardId: "07192",
    name: "Thị trấn Cô Tô",
  },
  {
    districtId: "207",
    wardId: "07195",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "207",
    wardId: "07198",
    name: "Xã Thanh Lân",
  },
  {
    districtId: "213",
    wardId: "07201",
    name: "Phường Thọ Xương",
  },
  {
    districtId: "213",
    wardId: "07204",
    name: "Phường Trần Nguyên Hãn",
  },
  {
    districtId: "213",
    wardId: "07207",
    name: "Phường Ngô Quyền",
  },
  {
    districtId: "213",
    wardId: "07210",
    name: "Phường Hoàng Văn Thụ",
  },
  {
    districtId: "213",
    wardId: "07213",
    name: "Phường Trần Phú",
  },
  {
    districtId: "213",
    wardId: "07216",
    name: "Phường Mỹ Độ",
  },
  {
    districtId: "213",
    wardId: "07219",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "213",
    wardId: "07222",
    name: "Xã Song Mai",
  },
  {
    districtId: "213",
    wardId: "07225",
    name: "Phường Xương Giang",
  },
  {
    districtId: "213",
    wardId: "07228",
    name: "Phường Đa Mai",
  },
  {
    districtId: "213",
    wardId: "07231",
    name: "Phường Dĩnh Kế",
  },
  {
    districtId: "213",
    wardId: "07441",
    name: "Xã Dĩnh Trì",
  },
  {
    districtId: "213",
    wardId: "07687",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "213",
    wardId: "07696",
    name: "Xã Đồng Sơn",
  },
  {
    districtId: "213",
    wardId: "07699",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "213",
    wardId: "07705",
    name: "Xã Song Khê",
  },
  {
    districtId: "215",
    wardId: "07243",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "215",
    wardId: "07246",
    name: "Xã Canh Nậu",
  },
  {
    districtId: "215",
    wardId: "07249",
    name: "Xã Xuân Lương",
  },
  {
    districtId: "215",
    wardId: "07252",
    name: "Xã Tam Tiến",
  },
  {
    districtId: "215",
    wardId: "07255",
    name: "Xã Đồng Vương",
  },
  {
    districtId: "215",
    wardId: "07258",
    name: "Xã Đồng Hưu",
  },
  {
    districtId: "215",
    wardId: "07260",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "215",
    wardId: "07261",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "215",
    wardId: "07264",
    name: "Xã Tiến Thắng",
  },
  {
    districtId: "215",
    wardId: "07267",
    name: "Xã Hồng Kỳ",
  },
  {
    districtId: "215",
    wardId: "07270",
    name: "Xã Đồng Lạc",
  },
  {
    districtId: "215",
    wardId: "07273",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "215",
    wardId: "07276",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "215",
    wardId: "07279",
    name: "Xã Hương Vĩ",
  },
  {
    districtId: "215",
    wardId: "07282",
    name: "Xã Đồng Kỳ",
  },
  {
    districtId: "215",
    wardId: "07285",
    name: "Xã An Thượng",
  },
  {
    districtId: "215",
    wardId: "07288",
    name: "Thị trấn Phồn Xương",
  },
  {
    districtId: "215",
    wardId: "07291",
    name: "Xã Tân Sỏi",
  },
  {
    districtId: "215",
    wardId: "07294",
    name: "Thị trấn Bố Hạ",
  },
  {
    districtId: "216",
    wardId: "07303",
    name: "Xã Lan Giới",
  },
  {
    districtId: "216",
    wardId: "07306",
    name: "Thị trấn Nhã Nam",
  },
  {
    districtId: "216",
    wardId: "07309",
    name: "Xã Tân Trung",
  },
  {
    districtId: "216",
    wardId: "07312",
    name: "Xã Đại Hóa",
  },
  {
    districtId: "216",
    wardId: "07315",
    name: "Xã Quang Tiến",
  },
  {
    districtId: "216",
    wardId: "07318",
    name: "Xã Phúc Sơn",
  },
  {
    districtId: "216",
    wardId: "07321",
    name: "Xã An Dương",
  },
  {
    districtId: "216",
    wardId: "07324",
    name: "Xã Phúc Hòa",
  },
  {
    districtId: "216",
    wardId: "07327",
    name: "Xã Liên Sơn",
  },
  {
    districtId: "216",
    wardId: "07330",
    name: "Xã Hợp Đức",
  },
  {
    districtId: "216",
    wardId: "07333",
    name: "Xã Lam Cốt",
  },
  {
    districtId: "216",
    wardId: "07336",
    name: "Xã Cao Xá",
  },
  {
    districtId: "216",
    wardId: "07339",
    name: "Thị trấn Cao Thượng",
  },
  {
    districtId: "216",
    wardId: "07342",
    name: "Xã Việt Ngọc",
  },
  {
    districtId: "216",
    wardId: "07345",
    name: "Xã Song Vân",
  },
  {
    districtId: "216",
    wardId: "07348",
    name: "Xã Ngọc Châu",
  },
  {
    districtId: "216",
    wardId: "07351",
    name: "Xã Ngọc Vân",
  },
  {
    districtId: "216",
    wardId: "07354",
    name: "Xã Việt Lập",
  },
  {
    districtId: "216",
    wardId: "07357",
    name: "Xã Liên Chung",
  },
  {
    districtId: "216",
    wardId: "07360",
    name: "Xã Ngọc Thiện",
  },
  {
    districtId: "216",
    wardId: "07363",
    name: "Xã Ngọc Lý",
  },
  {
    districtId: "216",
    wardId: "07366",
    name: "Xã Quế Nham",
  },
  {
    districtId: "217",
    wardId: "07375",
    name: "Thị trấn Vôi",
  },
  {
    districtId: "217",
    wardId: "07378",
    name: "Xã Nghĩa Hòa",
  },
  {
    districtId: "217",
    wardId: "07381",
    name: "Xã Nghĩa Hưng",
  },
  {
    districtId: "217",
    wardId: "07384",
    name: "Xã Quang Thịnh",
  },
  {
    districtId: "217",
    wardId: "07387",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "217",
    wardId: "07390",
    name: "Xã Đào Mỹ",
  },
  {
    districtId: "217",
    wardId: "07393",
    name: "Xã Tiên Lục",
  },
  {
    districtId: "217",
    wardId: "07396",
    name: "Xã An Hà",
  },
  {
    districtId: "217",
    wardId: "07399",
    name: "Thị trấn Kép",
  },
  {
    districtId: "217",
    wardId: "07402",
    name: "Xã Mỹ Hà",
  },
  {
    districtId: "217",
    wardId: "07405",
    name: "Xã Hương Lạc",
  },
  {
    districtId: "217",
    wardId: "07408",
    name: "Xã Dương Đức",
  },
  {
    districtId: "217",
    wardId: "07411",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "217",
    wardId: "07414",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "217",
    wardId: "07417",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "217",
    wardId: "07420",
    name: "Xã Mỹ Thái",
  },
  {
    districtId: "217",
    wardId: "07426",
    name: "Xã Xương Lâm",
  },
  {
    districtId: "217",
    wardId: "07429",
    name: "Xã Xuân Hương",
  },
  {
    districtId: "217",
    wardId: "07432",
    name: "Xã Tân Dĩnh",
  },
  {
    districtId: "217",
    wardId: "07435",
    name: "Xã Đại Lâm",
  },
  {
    districtId: "217",
    wardId: "07438",
    name: "Xã Thái Đào",
  },
  {
    districtId: "218",
    wardId: "07444",
    name: "Thị trấn Đồi Ngô",
  },
  {
    districtId: "218",
    wardId: "07450",
    name: "Xã Đông Hưng",
  },
  {
    districtId: "218",
    wardId: "07453",
    name: "Xã Đông Phú",
  },
  {
    districtId: "218",
    wardId: "07456",
    name: "Xã Tam Dị",
  },
  {
    districtId: "218",
    wardId: "07459",
    name: "Xã Bảo Sơn",
  },
  {
    districtId: "218",
    wardId: "07462",
    name: "Xã Bảo Đài",
  },
  {
    districtId: "218",
    wardId: "07465",
    name: "Xã Thanh Lâm",
  },
  {
    districtId: "218",
    wardId: "07468",
    name: "Xã Tiên Nha",
  },
  {
    districtId: "218",
    wardId: "07471",
    name: "Xã Trường Giang",
  },
  {
    districtId: "218",
    wardId: "07477",
    name: "Thị trấn Phương Sơn",
  },
  {
    districtId: "218",
    wardId: "07480",
    name: "Xã Chu Điện",
  },
  {
    districtId: "218",
    wardId: "07483",
    name: "Xã Cương Sơn",
  },
  {
    districtId: "218",
    wardId: "07486",
    name: "Xã Nghĩa Phương",
  },
  {
    districtId: "218",
    wardId: "07489",
    name: "Xã Vô Tranh",
  },
  {
    districtId: "218",
    wardId: "07492",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "218",
    wardId: "07495",
    name: "Xã Lan Mẫu",
  },
  {
    districtId: "218",
    wardId: "07498",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "218",
    wardId: "07501",
    name: "Xã Khám Lạng",
  },
  {
    districtId: "218",
    wardId: "07504",
    name: "Xã Huyền Sơn",
  },
  {
    districtId: "218",
    wardId: "07507",
    name: "Xã Trường Sơn",
  },
  {
    districtId: "218",
    wardId: "07510",
    name: "Xã Lục Sơn",
  },
  {
    districtId: "218",
    wardId: "07513",
    name: "Xã Bắc Lũng",
  },
  {
    districtId: "218",
    wardId: "07516",
    name: "Xã Vũ Xá",
  },
  {
    districtId: "218",
    wardId: "07519",
    name: "Xã Cẩm Lý",
  },
  {
    districtId: "218",
    wardId: "07522",
    name: "Xã Đan Hội",
  },
  {
    districtId: "219",
    wardId: "07525",
    name: "Thị trấn Chũ",
  },
  {
    districtId: "219",
    wardId: "07528",
    name: "Xã Cấm Sơn",
  },
  {
    districtId: "219",
    wardId: "07531",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "219",
    wardId: "07534",
    name: "Xã Phong Minh",
  },
  {
    districtId: "219",
    wardId: "07537",
    name: "Xã Phong Vân",
  },
  {
    districtId: "219",
    wardId: "07540",
    name: "Xã Xa Lý",
  },
  {
    districtId: "219",
    wardId: "07543",
    name: "Xã Hộ Đáp",
  },
  {
    districtId: "219",
    wardId: "07546",
    name: "Xã Sơn Hải",
  },
  {
    districtId: "219",
    wardId: "07549",
    name: "Xã Thanh Hải",
  },
  {
    districtId: "219",
    wardId: "07552",
    name: "Xã Kiên Lao",
  },
  {
    districtId: "219",
    wardId: "07555",
    name: "Xã Biên Sơn",
  },
  {
    districtId: "219",
    wardId: "07558",
    name: "Xã Kiên Thành",
  },
  {
    districtId: "219",
    wardId: "07561",
    name: "Xã Hồng Giang",
  },
  {
    districtId: "219",
    wardId: "07564",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "219",
    wardId: "07567",
    name: "Xã Tân Hoa",
  },
  {
    districtId: "219",
    wardId: "07570",
    name: "Xã Giáp Sơn",
  },
  {
    districtId: "219",
    wardId: "07573",
    name: "Xã Biển Động",
  },
  {
    districtId: "219",
    wardId: "07576",
    name: "Xã Quý Sơn",
  },
  {
    districtId: "219",
    wardId: "07579",
    name: "Xã Trù Hựu",
  },
  {
    districtId: "219",
    wardId: "07582",
    name: "Xã Phì Điền",
  },
  {
    districtId: "219",
    wardId: "07588",
    name: "Xã Tân Quang",
  },
  {
    districtId: "219",
    wardId: "07591",
    name: "Xã Đồng Cốc",
  },
  {
    districtId: "219",
    wardId: "07594",
    name: "Xã Tân Lập",
  },
  {
    districtId: "219",
    wardId: "07597",
    name: "Xã Phú Nhuận",
  },
  {
    districtId: "219",
    wardId: "07600",
    name: "Xã Mỹ An",
  },
  {
    districtId: "219",
    wardId: "07603",
    name: "Xã Nam Dương",
  },
  {
    districtId: "219",
    wardId: "07606",
    name: "Xã Tân Mộc",
  },
  {
    districtId: "219",
    wardId: "07609",
    name: "Xã Đèo Gia",
  },
  {
    districtId: "219",
    wardId: "07612",
    name: "Xã Phượng Sơn",
  },
  {
    districtId: "220",
    wardId: "07615",
    name: "Thị trấn An Châu",
  },
  {
    districtId: "220",
    wardId: "07616",
    name: "Thị trấn Tây Yên Tử",
  },
  {
    districtId: "220",
    wardId: "07621",
    name: "Xã Vân Sơn",
  },
  {
    districtId: "220",
    wardId: "07624",
    name: "Xã Hữu Sản",
  },
  {
    districtId: "220",
    wardId: "07627",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "220",
    wardId: "07630",
    name: "Xã Phúc Sơn",
  },
  {
    districtId: "220",
    wardId: "07636",
    name: "Xã Giáo Liêm",
  },
  {
    districtId: "220",
    wardId: "07642",
    name: "Xã Cẩm Đàn",
  },
  {
    districtId: "220",
    wardId: "07645",
    name: "Xã An Lạc",
  },
  {
    districtId: "220",
    wardId: "07648",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "220",
    wardId: "07651",
    name: "Xã Yên Định",
  },
  {
    districtId: "220",
    wardId: "07654",
    name: "Xã Lệ Viễn",
  },
  {
    districtId: "220",
    wardId: "07660",
    name: "Xã An Bá",
  },
  {
    districtId: "220",
    wardId: "07663",
    name: "Xã Tuấn Đạo",
  },
  {
    districtId: "220",
    wardId: "07666",
    name: "Xã Dương Hưu",
  },
  {
    districtId: "220",
    wardId: "07672",
    name: "Xã Long Sơn",
  },
  {
    districtId: "220",
    wardId: "07678",
    name: "Xã Thanh Luận",
  },
  {
    districtId: "221",
    wardId: "07681",
    name: "Thị trấn Nham Biền",
  },
  {
    districtId: "221",
    wardId: "07682",
    name: "Thị trấn Tân An",
  },
  {
    districtId: "221",
    wardId: "07684",
    name: "Xã Lão Hộ",
  },
  {
    districtId: "221",
    wardId: "07690",
    name: "Xã Hương Gián",
  },
  {
    districtId: "221",
    wardId: "07702",
    name: "Xã Quỳnh Sơn",
  },
  {
    districtId: "221",
    wardId: "07708",
    name: "Xã Nội Hoàng",
  },
  {
    districtId: "221",
    wardId: "07711",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "221",
    wardId: "07714",
    name: "Xã Xuân Phú",
  },
  {
    districtId: "221",
    wardId: "07717",
    name: "Xã Tân Liễu",
  },
  {
    districtId: "221",
    wardId: "07720",
    name: "Xã Trí Yên",
  },
  {
    districtId: "221",
    wardId: "07723",
    name: "Xã Lãng Sơn",
  },
  {
    districtId: "221",
    wardId: "07726",
    name: "Xã Yên Lư",
  },
  {
    districtId: "221",
    wardId: "07729",
    name: "Xã Tiến Dũng",
  },
  {
    districtId: "221",
    wardId: "07735",
    name: "Xã Đức Giang",
  },
  {
    districtId: "221",
    wardId: "07738",
    name: "Xã Cảnh Thụy",
  },
  {
    districtId: "221",
    wardId: "07741",
    name: "Xã Tư Mại",
  },
  {
    districtId: "221",
    wardId: "07747",
    name: "Xã Đồng Việt",
  },
  {
    districtId: "221",
    wardId: "07750",
    name: "Xã Đồng Phúc",
  },
  {
    districtId: "222",
    wardId: "07759",
    name: "Xã Thượng Lan",
  },
  {
    districtId: "222",
    wardId: "07762",
    name: "Xã Việt Tiến",
  },
  {
    districtId: "222",
    wardId: "07765",
    name: "Xã Nghĩa Trung",
  },
  {
    districtId: "222",
    wardId: "07768",
    name: "Xã Minh Đức",
  },
  {
    districtId: "222",
    wardId: "07771",
    name: "Xã Hương Mai",
  },
  {
    districtId: "222",
    wardId: "07774",
    name: "Xã Tự Lạn",
  },
  {
    districtId: "222",
    wardId: "07777",
    name: "Thị trấn Bích Động",
  },
  {
    districtId: "222",
    wardId: "07780",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "222",
    wardId: "07783",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "222",
    wardId: "07786",
    name: "Xã Tiên Sơn",
  },
  {
    districtId: "222",
    wardId: "07789",
    name: "Xã Tăng Tiến",
  },
  {
    districtId: "222",
    wardId: "07792",
    name: "Xã Quảng Minh",
  },
  {
    districtId: "222",
    wardId: "07795",
    name: "Thị trấn Nếnh",
  },
  {
    districtId: "222",
    wardId: "07798",
    name: "Xã Ninh Sơn",
  },
  {
    districtId: "222",
    wardId: "07801",
    name: "Xã Vân Trung",
  },
  {
    districtId: "222",
    wardId: "07804",
    name: "Xã Vân Hà",
  },
  {
    districtId: "222",
    wardId: "07807",
    name: "Xã Quang Châu",
  },
  {
    districtId: "223",
    wardId: "07813",
    name: "Xã Đồng Tân",
  },
  {
    districtId: "223",
    wardId: "07816",
    name: "Xã Thanh Vân",
  },
  {
    districtId: "223",
    wardId: "07819",
    name: "Xã Hoàng Lương",
  },
  {
    districtId: "223",
    wardId: "07822",
    name: "Xã Hoàng Vân",
  },
  {
    districtId: "223",
    wardId: "07825",
    name: "Xã Hoàng Thanh",
  },
  {
    districtId: "223",
    wardId: "07828",
    name: "Xã Hoàng An",
  },
  {
    districtId: "223",
    wardId: "07831",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "223",
    wardId: "07834",
    name: "Xã Thái Sơn",
  },
  {
    districtId: "223",
    wardId: "07837",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "223",
    wardId: "07840",
    name: "Thị trấn Thắng",
  },
  {
    districtId: "223",
    wardId: "07843",
    name: "Xã Quang Minh",
  },
  {
    districtId: "223",
    wardId: "07846",
    name: "Xã Lương Phong",
  },
  {
    districtId: "223",
    wardId: "07849",
    name: "Xã Hùng Sơn",
  },
  {
    districtId: "223",
    wardId: "07852",
    name: "Xã Đại Thành",
  },
  {
    districtId: "223",
    wardId: "07855",
    name: "Xã Thường Thắng",
  },
  {
    districtId: "223",
    wardId: "07858",
    name: "Xã Hợp Thịnh",
  },
  {
    districtId: "223",
    wardId: "07861",
    name: "Xã Danh Thắng",
  },
  {
    districtId: "223",
    wardId: "07864",
    name: "Xã Mai Trung",
  },
  {
    districtId: "223",
    wardId: "07867",
    name: "Xã Đoan Bái",
  },
  {
    districtId: "223",
    wardId: "07870",
    name: "Thị trấn Bắc Lý",
  },
  {
    districtId: "223",
    wardId: "07873",
    name: "Xã Xuân Cẩm",
  },
  {
    districtId: "223",
    wardId: "07876",
    name: "Xã Hương Lâm",
  },
  {
    districtId: "223",
    wardId: "07879",
    name: "Xã Đông Lỗ",
  },
  {
    districtId: "223",
    wardId: "07882",
    name: "Xã Châu Minh",
  },
  {
    districtId: "223",
    wardId: "07885",
    name: "Xã Mai Đình",
  },
  {
    districtId: "227",
    wardId: "07888",
    name: "Phường Dữu Lâu",
  },
  {
    districtId: "227",
    wardId: "07891",
    name: "Phường Vân Cơ",
  },
  {
    districtId: "227",
    wardId: "07894",
    name: "Phường Nông Trang",
  },
  {
    districtId: "227",
    wardId: "07897",
    name: "Phường Tân Dân",
  },
  {
    districtId: "227",
    wardId: "07900",
    name: "Phường Gia Cẩm",
  },
  {
    districtId: "227",
    wardId: "07903",
    name: "Phường Tiên Cát",
  },
  {
    districtId: "227",
    wardId: "07906",
    name: "Phường Thọ Sơn",
  },
  {
    districtId: "227",
    wardId: "07909",
    name: "Phường Thanh Miếu",
  },
  {
    districtId: "227",
    wardId: "07912",
    name: "Phường Bạch Hạc",
  },
  {
    districtId: "227",
    wardId: "07915",
    name: "Phường Bến Gót",
  },
  {
    districtId: "227",
    wardId: "07918",
    name: "Phường Vân Phú",
  },
  {
    districtId: "227",
    wardId: "07921",
    name: "Xã Phượng Lâu",
  },
  {
    districtId: "227",
    wardId: "07924",
    name: "Xã Thụy Vân",
  },
  {
    districtId: "227",
    wardId: "07927",
    name: "Phường Minh Phương",
  },
  {
    districtId: "227",
    wardId: "07930",
    name: "Xã Trưng Vương",
  },
  {
    districtId: "227",
    wardId: "07933",
    name: "Phường Minh Nông",
  },
  {
    districtId: "227",
    wardId: "07936",
    name: "Xã Sông Lô",
  },
  {
    districtId: "227",
    wardId: "08281",
    name: "Xã Kim Đức",
  },
  {
    districtId: "227",
    wardId: "08287",
    name: "Xã Hùng Lô",
  },
  {
    districtId: "227",
    wardId: "08503",
    name: "Xã Hy Cương",
  },
  {
    districtId: "227",
    wardId: "08506",
    name: "Xã Chu Hóa",
  },
  {
    districtId: "227",
    wardId: "08515",
    name: "Xã Thanh Đình",
  },
  {
    districtId: "228",
    wardId: "07942",
    name: "Phường Hùng Vương",
  },
  {
    districtId: "228",
    wardId: "07945",
    name: "Phường Phong Châu",
  },
  {
    districtId: "228",
    wardId: "07948",
    name: "Phường Âu Cơ",
  },
  {
    districtId: "228",
    wardId: "07951",
    name: "Xã Hà Lộc",
  },
  {
    districtId: "228",
    wardId: "07954",
    name: "Xã Phú Hộ",
  },
  {
    districtId: "228",
    wardId: "07957",
    name: "Xã Văn Lung",
  },
  {
    districtId: "228",
    wardId: "07960",
    name: "Xã Thanh Minh",
  },
  {
    districtId: "228",
    wardId: "07963",
    name: "Xã Hà Thạch",
  },
  {
    districtId: "228",
    wardId: "07966",
    name: "Phường Thanh Vinh",
  },
  {
    districtId: "230",
    wardId: "07969",
    name: "Thị trấn Đoan Hùng",
  },
  {
    districtId: "230",
    wardId: "07975",
    name: "Xã Hùng Xuyên",
  },
  {
    districtId: "230",
    wardId: "07981",
    name: "Xã Bằng Luân",
  },
  {
    districtId: "230",
    wardId: "07984",
    name: "Xã Vân Du",
  },
  {
    districtId: "230",
    wardId: "07987",
    name: "Xã Phú Lâm",
  },
  {
    districtId: "230",
    wardId: "07993",
    name: "Xã Minh Lương",
  },
  {
    districtId: "230",
    wardId: "07996",
    name: "Xã Bằng Doãn",
  },
  {
    districtId: "230",
    wardId: "07999",
    name: "Xã Chí Đám",
  },
  {
    districtId: "230",
    wardId: "08005",
    name: "Xã Phúc Lai",
  },
  {
    districtId: "230",
    wardId: "08008",
    name: "Xã Ngọc Quan",
  },
  {
    districtId: "230",
    wardId: "08014",
    name: "Xã Hợp Nhất",
  },
  {
    districtId: "230",
    wardId: "08017",
    name: "Xã Sóc Đăng",
  },
  {
    districtId: "230",
    wardId: "08023",
    name: "Xã Tây Cốc",
  },
  {
    districtId: "230",
    wardId: "08026",
    name: "Xã Yên Kiện",
  },
  {
    districtId: "230",
    wardId: "08029",
    name: "Xã Hùng Long",
  },
  {
    districtId: "230",
    wardId: "08032",
    name: "Xã Vụ Quang",
  },
  {
    districtId: "230",
    wardId: "08035",
    name: "Xã Vân Đồn",
  },
  {
    districtId: "230",
    wardId: "08038",
    name: "Xã Tiêu Sơn",
  },
  {
    districtId: "230",
    wardId: "08041",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "230",
    wardId: "08044",
    name: "Xã Minh Phú",
  },
  {
    districtId: "230",
    wardId: "08047",
    name: "Xã Chân Mộng",
  },
  {
    districtId: "230",
    wardId: "08050",
    name: "Xã Ca Đình",
  },
  {
    districtId: "231",
    wardId: "08053",
    name: "Thị trấn Hạ Hoà",
  },
  {
    districtId: "231",
    wardId: "08056",
    name: "Xã Đại Phạm",
  },
  {
    districtId: "231",
    wardId: "08062",
    name: "Xã Đan Thượng",
  },
  {
    districtId: "231",
    wardId: "08065",
    name: "Xã Hà Lương",
  },
  {
    districtId: "231",
    wardId: "08071",
    name: "Xã Tứ Hiệp",
  },
  {
    districtId: "231",
    wardId: "08080",
    name: "Xã Hiền Lương",
  },
  {
    districtId: "231",
    wardId: "08089",
    name: "Xã Phương Viên",
  },
  {
    districtId: "231",
    wardId: "08092",
    name: "Xã Gia Điền",
  },
  {
    districtId: "231",
    wardId: "08095",
    name: "Xã Ấm Hạ",
  },
  {
    districtId: "231",
    wardId: "08104",
    name: "Xã Hương Xạ",
  },
  {
    districtId: "231",
    wardId: "08110",
    name: "Xã Xuân Áng",
  },
  {
    districtId: "231",
    wardId: "08113",
    name: "Xã Yên Kỳ",
  },
  {
    districtId: "231",
    wardId: "08119",
    name: "Xã Minh Hạc",
  },
  {
    districtId: "231",
    wardId: "08122",
    name: "Xã Lang Sơn",
  },
  {
    districtId: "231",
    wardId: "08125",
    name: "Xã Bằng Giã",
  },
  {
    districtId: "231",
    wardId: "08128",
    name: "Xã Yên Luật",
  },
  {
    districtId: "231",
    wardId: "08131",
    name: "Xã Vô Tranh",
  },
  {
    districtId: "231",
    wardId: "08134",
    name: "Xã Văn Lang",
  },
  {
    districtId: "231",
    wardId: "08140",
    name: "Xã Minh Côi",
  },
  {
    districtId: "231",
    wardId: "08143",
    name: "Xã Vĩnh Chân",
  },
  {
    districtId: "232",
    wardId: "08152",
    name: "Thị trấn Thanh Ba",
  },
  {
    districtId: "232",
    wardId: "08156",
    name: "Xã Vân Lĩnh",
  },
  {
    districtId: "232",
    wardId: "08158",
    name: "Xã Đông Lĩnh",
  },
  {
    districtId: "232",
    wardId: "08161",
    name: "Xã Đại An",
  },
  {
    districtId: "232",
    wardId: "08164",
    name: "Xã Hanh Cù",
  },
  {
    districtId: "232",
    wardId: "08170",
    name: "Xã Đồng Xuân",
  },
  {
    districtId: "232",
    wardId: "08173",
    name: "Xã Quảng Yên",
  },
  {
    districtId: "232",
    wardId: "08179",
    name: "Xã Ninh Dân",
  },
  {
    districtId: "232",
    wardId: "08194",
    name: "Xã Võ Lao",
  },
  {
    districtId: "232",
    wardId: "08197",
    name: "Xã Khải Xuân",
  },
  {
    districtId: "232",
    wardId: "08200",
    name: "Xã Mạn Lạn",
  },
  {
    districtId: "232",
    wardId: "08203",
    name: "Xã Hoàng Cương",
  },
  {
    districtId: "232",
    wardId: "08206",
    name: "Xã Chí Tiên",
  },
  {
    districtId: "232",
    wardId: "08209",
    name: "Xã Đông Thành",
  },
  {
    districtId: "232",
    wardId: "08215",
    name: "Xã Sơn Cương",
  },
  {
    districtId: "232",
    wardId: "08218",
    name: "Xã Thanh Hà",
  },
  {
    districtId: "232",
    wardId: "08221",
    name: "Xã Đỗ Sơn",
  },
  {
    districtId: "232",
    wardId: "08224",
    name: "Xã Đỗ Xuyên",
  },
  {
    districtId: "232",
    wardId: "08227",
    name: "Xã Lương Lỗ",
  },
  {
    districtId: "233",
    wardId: "08230",
    name: "Thị trấn Phong Châu",
  },
  {
    districtId: "233",
    wardId: "08233",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "233",
    wardId: "08234",
    name: "Xã Lệ Mỹ",
  },
  {
    districtId: "233",
    wardId: "08236",
    name: "Xã Liên Hoa",
  },
  {
    districtId: "233",
    wardId: "08239",
    name: "Xã Trạm Thản",
  },
  {
    districtId: "233",
    wardId: "08242",
    name: "Xã Trị Quận",
  },
  {
    districtId: "233",
    wardId: "08245",
    name: "Xã Trung Giáp",
  },
  {
    districtId: "233",
    wardId: "08248",
    name: "Xã Tiên Phú",
  },
  {
    districtId: "233",
    wardId: "08251",
    name: "Xã Hạ Giáp",
  },
  {
    districtId: "233",
    wardId: "08254",
    name: "Xã Bảo Thanh",
  },
  {
    districtId: "233",
    wardId: "08257",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "233",
    wardId: "08260",
    name: "Xã Gia Thanh",
  },
  {
    districtId: "233",
    wardId: "08263",
    name: "Xã Tiên Du",
  },
  {
    districtId: "233",
    wardId: "08266",
    name: "Xã Phú Nham",
  },
  {
    districtId: "233",
    wardId: "08272",
    name: "Xã An Đạo",
  },
  {
    districtId: "233",
    wardId: "08275",
    name: "Xã Bình Phú",
  },
  {
    districtId: "233",
    wardId: "08278",
    name: "Xã Phù Ninh",
  },
  {
    districtId: "234",
    wardId: "08290",
    name: "Thị trấn Yên Lập",
  },
  {
    districtId: "234",
    wardId: "08293",
    name: "Xã Mỹ Lung",
  },
  {
    districtId: "234",
    wardId: "08296",
    name: "Xã Mỹ Lương",
  },
  {
    districtId: "234",
    wardId: "08299",
    name: "Xã Lương Sơn",
  },
  {
    districtId: "234",
    wardId: "08302",
    name: "Xã Xuân An",
  },
  {
    districtId: "234",
    wardId: "08305",
    name: "Xã Xuân Viên",
  },
  {
    districtId: "234",
    wardId: "08308",
    name: "Xã Xuân Thủy",
  },
  {
    districtId: "234",
    wardId: "08311",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "234",
    wardId: "08314",
    name: "Xã Hưng Long",
  },
  {
    districtId: "234",
    wardId: "08317",
    name: "Xã Nga Hoàng",
  },
  {
    districtId: "234",
    wardId: "08320",
    name: "Xã Đồng Lạc",
  },
  {
    districtId: "234",
    wardId: "08323",
    name: "Xã Thượng Long",
  },
  {
    districtId: "234",
    wardId: "08326",
    name: "Xã Đồng Thịnh",
  },
  {
    districtId: "234",
    wardId: "08329",
    name: "Xã Phúc Khánh",
  },
  {
    districtId: "234",
    wardId: "08332",
    name: "Xã Minh Hòa",
  },
  {
    districtId: "234",
    wardId: "08335",
    name: "Xã Ngọc Lập",
  },
  {
    districtId: "234",
    wardId: "08338",
    name: "Xã Ngọc Đồng",
  },
  {
    districtId: "235",
    wardId: "08341",
    name: "Thị trấn Cẩm Khê",
  },
  {
    districtId: "235",
    wardId: "08344",
    name: "Xã Tiên Lương",
  },
  {
    districtId: "235",
    wardId: "08347",
    name: "Xã Tuy Lộc",
  },
  {
    districtId: "235",
    wardId: "08350",
    name: "Xã Ngô Xá",
  },
  {
    districtId: "235",
    wardId: "08353",
    name: "Xã Minh Tân",
  },
  {
    districtId: "235",
    wardId: "08356",
    name: "Xã Phượng Vĩ",
  },
  {
    districtId: "235",
    wardId: "08362",
    name: "Xã Thụy Liễu",
  },
  {
    districtId: "235",
    wardId: "08374",
    name: "Xã Tùng Khê",
  },
  {
    districtId: "235",
    wardId: "08377",
    name: "Xã Tam Sơn",
  },
  {
    districtId: "235",
    wardId: "08380",
    name: "Xã Văn Bán",
  },
  {
    districtId: "235",
    wardId: "08383",
    name: "Xã Cấp Dẫn",
  },
  {
    districtId: "235",
    wardId: "08389",
    name: "Xã Xương Thịnh",
  },
  {
    districtId: "235",
    wardId: "08392",
    name: "Xã Phú Khê",
  },
  {
    districtId: "235",
    wardId: "08395",
    name: "Xã Sơn Tình",
  },
  {
    districtId: "235",
    wardId: "08398",
    name: "Xã Yên Tập",
  },
  {
    districtId: "235",
    wardId: "08401",
    name: "Xã Hương Lung",
  },
  {
    districtId: "235",
    wardId: "08404",
    name: "Xã Tạ Xá",
  },
  {
    districtId: "235",
    wardId: "08407",
    name: "Xã Phú Lạc",
  },
  {
    districtId: "235",
    wardId: "08413",
    name: "Xã Chương Xá",
  },
  {
    districtId: "235",
    wardId: "08416",
    name: "Xã Hùng Việt",
  },
  {
    districtId: "235",
    wardId: "08419",
    name: "Xã Văn Khúc",
  },
  {
    districtId: "235",
    wardId: "08422",
    name: "Xã Yên Dưỡng",
  },
  {
    districtId: "235",
    wardId: "08428",
    name: "Xã Điêu Lương",
  },
  {
    districtId: "235",
    wardId: "08431",
    name: "Xã Đồng Lương",
  },
  {
    districtId: "236",
    wardId: "08434",
    name: "Thị trấn Hưng Hoá",
  },
  {
    districtId: "236",
    wardId: "08440",
    name: "Xã Hiền Quan",
  },
  {
    districtId: "236",
    wardId: "08443",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "236",
    wardId: "08446",
    name: "Xã Thanh Uyên",
  },
  {
    districtId: "236",
    wardId: "08461",
    name: "Xã Lam Sơn",
  },
  {
    districtId: "236",
    wardId: "08467",
    name: "Xã Vạn Xuân",
  },
  {
    districtId: "236",
    wardId: "08470",
    name: "Xã Quang Húc",
  },
  {
    districtId: "236",
    wardId: "08473",
    name: "Xã Hương Nộn",
  },
  {
    districtId: "236",
    wardId: "08476",
    name: "Xã Tề Lễ",
  },
  {
    districtId: "236",
    wardId: "08479",
    name: "Xã Thọ Văn",
  },
  {
    districtId: "236",
    wardId: "08482",
    name: "Xã Dị Nậu",
  },
  {
    districtId: "236",
    wardId: "08491",
    name: "Xã Dân Quyền",
  },
  {
    districtId: "237",
    wardId: "08494",
    name: "Thị trấn Lâm Thao",
  },
  {
    districtId: "237",
    wardId: "08497",
    name: "Xã Tiên Kiên",
  },
  {
    districtId: "237",
    wardId: "08498",
    name: "Thị trấn Hùng Sơn",
  },
  {
    districtId: "237",
    wardId: "08500",
    name: "Xã Xuân Lũng",
  },
  {
    districtId: "237",
    wardId: "08509",
    name: "Xã Xuân Huy",
  },
  {
    districtId: "237",
    wardId: "08512",
    name: "Xã Thạch Sơn",
  },
  {
    districtId: "237",
    wardId: "08518",
    name: "Xã Sơn Vi",
  },
  {
    districtId: "237",
    wardId: "08521",
    name: "Xã Phùng Nguyên",
  },
  {
    districtId: "237",
    wardId: "08527",
    name: "Xã Cao Xá",
  },
  {
    districtId: "237",
    wardId: "08533",
    name: "Xã Vĩnh Lại",
  },
  {
    districtId: "237",
    wardId: "08536",
    name: "Xã Tứ Xã",
  },
  {
    districtId: "237",
    wardId: "08539",
    name: "Xã Bản Nguyên",
  },
  {
    districtId: "238",
    wardId: "08542",
    name: "Thị trấn Thanh Sơn",
  },
  {
    districtId: "238",
    wardId: "08563",
    name: "Xã Sơn Hùng",
  },
  {
    districtId: "238",
    wardId: "08572",
    name: "Xã Địch Quả",
  },
  {
    districtId: "238",
    wardId: "08575",
    name: "Xã Giáp Lai",
  },
  {
    districtId: "238",
    wardId: "08581",
    name: "Xã Thục Luyện",
  },
  {
    districtId: "238",
    wardId: "08584",
    name: "Xã Võ Miếu",
  },
  {
    districtId: "238",
    wardId: "08587",
    name: "Xã Thạch Khoán",
  },
  {
    districtId: "238",
    wardId: "08602",
    name: "Xã Cự Thắng",
  },
  {
    districtId: "238",
    wardId: "08605",
    name: "Xã Tất Thắng",
  },
  {
    districtId: "238",
    wardId: "08611",
    name: "Xã Văn Miếu",
  },
  {
    districtId: "238",
    wardId: "08614",
    name: "Xã Cự Đồng",
  },
  {
    districtId: "238",
    wardId: "08623",
    name: "Xã Thắng Sơn",
  },
  {
    districtId: "238",
    wardId: "08629",
    name: "Xã Tân Minh",
  },
  {
    districtId: "238",
    wardId: "08632",
    name: "Xã Hương Cần",
  },
  {
    districtId: "238",
    wardId: "08635",
    name: "Xã Khả Cửu",
  },
  {
    districtId: "238",
    wardId: "08638",
    name: "Xã Đông Cửu",
  },
  {
    districtId: "238",
    wardId: "08641",
    name: "Xã Tân Lập",
  },
  {
    districtId: "238",
    wardId: "08644",
    name: "Xã Yên Lãng",
  },
  {
    districtId: "238",
    wardId: "08647",
    name: "Xã Yên Lương",
  },
  {
    districtId: "238",
    wardId: "08650",
    name: "Xã Thượng Cửu",
  },
  {
    districtId: "238",
    wardId: "08653",
    name: "Xã Lương Nha",
  },
  {
    districtId: "238",
    wardId: "08656",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "238",
    wardId: "08659",
    name: "Xã Tinh Nhuệ",
  },
  {
    districtId: "239",
    wardId: "08662",
    name: "Xã Đào Xá",
  },
  {
    districtId: "239",
    wardId: "08665",
    name: "Xã Thạch Đồng",
  },
  {
    districtId: "239",
    wardId: "08668",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "239",
    wardId: "08671",
    name: "Xã Tân Phương",
  },
  {
    districtId: "239",
    wardId: "08674",
    name: "Thị trấn Thanh Thủy",
  },
  {
    districtId: "239",
    wardId: "08677",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "239",
    wardId: "08680",
    name: "Xã Bảo Yên",
  },
  {
    districtId: "239",
    wardId: "08683",
    name: "Xã Đoan Hạ",
  },
  {
    districtId: "239",
    wardId: "08686",
    name: "Xã Đồng Trung",
  },
  {
    districtId: "239",
    wardId: "08689",
    name: "Xã Hoàng Xá",
  },
  {
    districtId: "239",
    wardId: "08701",
    name: "Xã Tu Vũ",
  },
  {
    districtId: "240",
    wardId: "08545",
    name: "Xã Thu Cúc",
  },
  {
    districtId: "240",
    wardId: "08548",
    name: "Xã Thạch Kiệt",
  },
  {
    districtId: "240",
    wardId: "08551",
    name: "Xã Thu Ngạc",
  },
  {
    districtId: "240",
    wardId: "08554",
    name: "Xã Kiệt Sơn",
  },
  {
    districtId: "240",
    wardId: "08557",
    name: "Xã Đồng Sơn",
  },
  {
    districtId: "240",
    wardId: "08560",
    name: "Xã Lai Đồng",
  },
  {
    districtId: "240",
    wardId: "08566",
    name: "Xã Tân Phú",
  },
  {
    districtId: "240",
    wardId: "08569",
    name: "Xã Mỹ Thuận",
  },
  {
    districtId: "240",
    wardId: "08578",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "240",
    wardId: "08590",
    name: "Xã Xuân Đài",
  },
  {
    districtId: "240",
    wardId: "08593",
    name: "Xã Minh Đài",
  },
  {
    districtId: "240",
    wardId: "08596",
    name: "Xã Văn Luông",
  },
  {
    districtId: "240",
    wardId: "08599",
    name: "Xã Xuân Sơn",
  },
  {
    districtId: "240",
    wardId: "08608",
    name: "Xã Long Cốc",
  },
  {
    districtId: "240",
    wardId: "08617",
    name: "Xã Kim Thượng",
  },
  {
    districtId: "240",
    wardId: "08620",
    name: "Xã Tam Thanh",
  },
  {
    districtId: "240",
    wardId: "08626",
    name: "Xã Vinh Tiền",
  },
  {
    districtId: "243",
    wardId: "08707",
    name: "Phường Tích Sơn",
  },
  {
    districtId: "243",
    wardId: "08710",
    name: "Phường Liên Bảo",
  },
  {
    districtId: "243",
    wardId: "08713",
    name: "Phường Hội Hợp",
  },
  {
    districtId: "243",
    wardId: "08716",
    name: "Phường Đống Đa",
  },
  {
    districtId: "243",
    wardId: "08719",
    name: "Phường Ngô Quyền",
  },
  {
    districtId: "243",
    wardId: "08722",
    name: "Phường Đồng Tâm",
  },
  {
    districtId: "243",
    wardId: "08725",
    name: "Xã Định Trung",
  },
  {
    districtId: "243",
    wardId: "08728",
    name: "Phường Khai Quang",
  },
  {
    districtId: "243",
    wardId: "08731",
    name: "Xã Thanh Trù",
  },
  {
    districtId: "244",
    wardId: "08734",
    name: "Phường Trưng Trắc",
  },
  {
    districtId: "244",
    wardId: "08737",
    name: "Phường Hùng Vương",
  },
  {
    districtId: "244",
    wardId: "08740",
    name: "Phường Trưng Nhị",
  },
  {
    districtId: "244",
    wardId: "08743",
    name: "Phường Phúc Thắng",
  },
  {
    districtId: "244",
    wardId: "08746",
    name: "Phường Xuân Hoà",
  },
  {
    districtId: "244",
    wardId: "08747",
    name: "Phường Đồng Xuân",
  },
  {
    districtId: "244",
    wardId: "08749",
    name: "Xã Ngọc Thanh",
  },
  {
    districtId: "244",
    wardId: "08752",
    name: "Xã Cao Minh",
  },
  {
    districtId: "244",
    wardId: "08755",
    name: "Phường Nam Viêm",
  },
  {
    districtId: "244",
    wardId: "08758",
    name: "Phường Tiền Châu",
  },
  {
    districtId: "246",
    wardId: "08761",
    name: "Thị trấn Lập Thạch",
  },
  {
    districtId: "246",
    wardId: "08764",
    name: "Xã Quang Sơn",
  },
  {
    districtId: "246",
    wardId: "08767",
    name: "Xã Ngọc Mỹ",
  },
  {
    districtId: "246",
    wardId: "08770",
    name: "Xã Hợp Lý",
  },
  {
    districtId: "246",
    wardId: "08785",
    name: "Xã Bắc Bình",
  },
  {
    districtId: "246",
    wardId: "08788",
    name: "Xã Thái Hòa",
  },
  {
    districtId: "246",
    wardId: "08789",
    name: "Thị trấn Hoa Sơn",
  },
  {
    districtId: "246",
    wardId: "08791",
    name: "Xã Liễn Sơn",
  },
  {
    districtId: "246",
    wardId: "08794",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "246",
    wardId: "08797",
    name: "Xã Vân Trục",
  },
  {
    districtId: "246",
    wardId: "08812",
    name: "Xã Liên Hòa",
  },
  {
    districtId: "246",
    wardId: "08815",
    name: "Xã Tử Du",
  },
  {
    districtId: "246",
    wardId: "08833",
    name: "Xã Bàn Giản",
  },
  {
    districtId: "246",
    wardId: "08836",
    name: "Xã Xuân Lôi",
  },
  {
    districtId: "246",
    wardId: "08839",
    name: "Xã Đồng Ích",
  },
  {
    districtId: "246",
    wardId: "08842",
    name: "Xã Tiên Lữ",
  },
  {
    districtId: "246",
    wardId: "08845",
    name: "Xã Văn Quán",
  },
  {
    districtId: "246",
    wardId: "08857",
    name: "Xã Đình Chu",
  },
  {
    districtId: "246",
    wardId: "08863",
    name: "Xã Triệu Đề",
  },
  {
    districtId: "246",
    wardId: "08866",
    name: "Xã Sơn Đông",
  },
  {
    districtId: "247",
    wardId: "08869",
    name: "Thị trấn Hợp Hòa",
  },
  {
    districtId: "247",
    wardId: "08872",
    name: "Xã Hoàng Hoa",
  },
  {
    districtId: "247",
    wardId: "08875",
    name: "Xã Đồng Tĩnh",
  },
  {
    districtId: "247",
    wardId: "08878",
    name: "Xã Kim Long",
  },
  {
    districtId: "247",
    wardId: "08881",
    name: "Xã Hướng Đạo",
  },
  {
    districtId: "247",
    wardId: "08884",
    name: "Xã Đạo Tú",
  },
  {
    districtId: "247",
    wardId: "08887",
    name: "Xã An Hòa",
  },
  {
    districtId: "247",
    wardId: "08890",
    name: "Xã Thanh Vân",
  },
  {
    districtId: "247",
    wardId: "08893",
    name: "Xã Duy Phiên",
  },
  {
    districtId: "247",
    wardId: "08896",
    name: "Xã Hoàng Đan",
  },
  {
    districtId: "247",
    wardId: "08899",
    name: "Xã Hoàng Lâu",
  },
  {
    districtId: "247",
    wardId: "08902",
    name: "Xã Vân Hội",
  },
  {
    districtId: "247",
    wardId: "08905",
    name: "Xã Hợp Thịnh",
  },
  {
    districtId: "248",
    wardId: "08908",
    name: "Thị trấn Tam Đảo",
  },
  {
    districtId: "248",
    wardId: "08911",
    name: "Thị trấn Hợp Châu",
  },
  {
    districtId: "248",
    wardId: "08914",
    name: "Xã Đạo Trù",
  },
  {
    districtId: "248",
    wardId: "08917",
    name: "Xã Yên Dương",
  },
  {
    districtId: "248",
    wardId: "08920",
    name: "Xã Bồ Lý",
  },
  {
    districtId: "248",
    wardId: "08923",
    name: "Thị trấn Đại Đình",
  },
  {
    districtId: "248",
    wardId: "08926",
    name: "Xã Tam Quan",
  },
  {
    districtId: "248",
    wardId: "08929",
    name: "Xã Hồ Sơn",
  },
  {
    districtId: "248",
    wardId: "08932",
    name: "Xã Minh Quang",
  },
  {
    districtId: "249",
    wardId: "08935",
    name: "Thị trấn Hương Canh",
  },
  {
    districtId: "249",
    wardId: "08936",
    name: "Thị trấn Gia Khánh",
  },
  {
    districtId: "249",
    wardId: "08938",
    name: "Xã Trung Mỹ",
  },
  {
    districtId: "249",
    wardId: "08944",
    name: "Thị trấn Bá Hiến",
  },
  {
    districtId: "249",
    wardId: "08947",
    name: "Xã Thiện Kế",
  },
  {
    districtId: "249",
    wardId: "08950",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "249",
    wardId: "08953",
    name: "Xã Tam Hợp",
  },
  {
    districtId: "249",
    wardId: "08956",
    name: "Xã Quất Lưu",
  },
  {
    districtId: "249",
    wardId: "08959",
    name: "Xã Sơn Lôi",
  },
  {
    districtId: "249",
    wardId: "08962",
    name: "Thị trấn Đạo Đức",
  },
  {
    districtId: "249",
    wardId: "08965",
    name: "Xã Tân Phong",
  },
  {
    districtId: "249",
    wardId: "08968",
    name: "Thị trấn Thanh Lãng",
  },
  {
    districtId: "249",
    wardId: "08971",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "251",
    wardId: "09025",
    name: "Thị trấn Yên Lạc",
  },
  {
    districtId: "251",
    wardId: "09028",
    name: "Xã Đồng Cương",
  },
  {
    districtId: "251",
    wardId: "09031",
    name: "Xã Đồng Văn",
  },
  {
    districtId: "251",
    wardId: "09034",
    name: "Xã Bình Định",
  },
  {
    districtId: "251",
    wardId: "09037",
    name: "Xã Trung Nguyên",
  },
  {
    districtId: "251",
    wardId: "09040",
    name: "Xã Tề Lỗ",
  },
  {
    districtId: "251",
    wardId: "09043",
    name: "Xã Tam Hồng",
  },
  {
    districtId: "251",
    wardId: "09046",
    name: "Xã Yên Đồng",
  },
  {
    districtId: "251",
    wardId: "09049",
    name: "Xã Văn Tiến",
  },
  {
    districtId: "251",
    wardId: "09052",
    name: "Xã Nguyệt Đức",
  },
  {
    districtId: "251",
    wardId: "09055",
    name: "Xã Yên Phương",
  },
  {
    districtId: "251",
    wardId: "09058",
    name: "Xã Hồng Phương",
  },
  {
    districtId: "251",
    wardId: "09061",
    name: "Xã Trung Kiên",
  },
  {
    districtId: "251",
    wardId: "09064",
    name: "Xã Liên Châu",
  },
  {
    districtId: "251",
    wardId: "09067",
    name: "Xã Đại Tự",
  },
  {
    districtId: "251",
    wardId: "09070",
    name: "Xã Hồng Châu",
  },
  {
    districtId: "251",
    wardId: "09073",
    name: "Xã Trung Hà",
  },
  {
    districtId: "252",
    wardId: "09076",
    name: "Thị trấn Vĩnh Tường",
  },
  {
    districtId: "252",
    wardId: "09079",
    name: "Xã Kim Xá",
  },
  {
    districtId: "252",
    wardId: "09082",
    name: "Xã Yên Bình",
  },
  {
    districtId: "252",
    wardId: "09085",
    name: "Xã Chấn Hưng",
  },
  {
    districtId: "252",
    wardId: "09088",
    name: "Xã Nghĩa Hưng",
  },
  {
    districtId: "252",
    wardId: "09091",
    name: "Xã Yên Lập",
  },
  {
    districtId: "252",
    wardId: "09094",
    name: "Xã Việt Xuân",
  },
  {
    districtId: "252",
    wardId: "09097",
    name: "Xã Bồ Sao",
  },
  {
    districtId: "252",
    wardId: "09100",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "252",
    wardId: "09103",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "252",
    wardId: "09106",
    name: "Xã Lũng Hoà",
  },
  {
    districtId: "252",
    wardId: "09109",
    name: "Xã Cao Đại",
  },
  {
    districtId: "252",
    wardId: "09112",
    name: "Thị Trấn Thổ Tang",
  },
  {
    districtId: "252",
    wardId: "09115",
    name: "Xã Vĩnh Sơn",
  },
  {
    districtId: "252",
    wardId: "09118",
    name: "Xã Bình Dương",
  },
  {
    districtId: "252",
    wardId: "09124",
    name: "Xã Tân Phú",
  },
  {
    districtId: "252",
    wardId: "09127",
    name: "Xã Thượng Trưng",
  },
  {
    districtId: "252",
    wardId: "09130",
    name: "Xã Vũ Di",
  },
  {
    districtId: "252",
    wardId: "09133",
    name: "Xã Lý Nhân",
  },
  {
    districtId: "252",
    wardId: "09136",
    name: "Xã Tuân Chính",
  },
  {
    districtId: "252",
    wardId: "09139",
    name: "Xã Vân Xuân",
  },
  {
    districtId: "252",
    wardId: "09142",
    name: "Xã Tam Phúc",
  },
  {
    districtId: "252",
    wardId: "09145",
    name: "Thị trấn Tứ Trưng",
  },
  {
    districtId: "252",
    wardId: "09148",
    name: "Xã Ngũ Kiên",
  },
  {
    districtId: "252",
    wardId: "09151",
    name: "Xã An Tường",
  },
  {
    districtId: "252",
    wardId: "09154",
    name: "Xã Vĩnh Thịnh",
  },
  {
    districtId: "252",
    wardId: "09157",
    name: "Xã Phú Đa",
  },
  {
    districtId: "252",
    wardId: "09160",
    name: "Xã Vĩnh Ninh",
  },
  {
    districtId: "253",
    wardId: "08773",
    name: "Xã Lãng Công",
  },
  {
    districtId: "253",
    wardId: "08776",
    name: "Xã Quang Yên",
  },
  {
    districtId: "253",
    wardId: "08779",
    name: "Xã Bạch Lưu",
  },
  {
    districtId: "253",
    wardId: "08782",
    name: "Xã Hải Lựu",
  },
  {
    districtId: "253",
    wardId: "08800",
    name: "Xã Đồng Quế",
  },
  {
    districtId: "253",
    wardId: "08803",
    name: "Xã Nhân Đạo",
  },
  {
    districtId: "253",
    wardId: "08806",
    name: "Xã Đôn Nhân",
  },
  {
    districtId: "253",
    wardId: "08809",
    name: "Xã Phương Khoan",
  },
  {
    districtId: "253",
    wardId: "08818",
    name: "Xã Tân Lập",
  },
  {
    districtId: "253",
    wardId: "08821",
    name: "Xã Nhạo Sơn",
  },
  {
    districtId: "253",
    wardId: "08824",
    name: "Thị trấn Tam Sơn",
  },
  {
    districtId: "253",
    wardId: "08827",
    name: "Xã Như Thụy",
  },
  {
    districtId: "253",
    wardId: "08830",
    name: "Xã Yên Thạch",
  },
  {
    districtId: "253",
    wardId: "08848",
    name: "Xã Đồng Thịnh",
  },
  {
    districtId: "253",
    wardId: "08851",
    name: "Xã Tứ Yên",
  },
  {
    districtId: "253",
    wardId: "08854",
    name: "Xã Đức Bác",
  },
  {
    districtId: "253",
    wardId: "08860",
    name: "Xã Cao Phong",
  },
  {
    districtId: "256",
    wardId: "09163",
    name: "Phường Vũ Ninh",
  },
  {
    districtId: "256",
    wardId: "09166",
    name: "Phường Đáp Cầu",
  },
  {
    districtId: "256",
    wardId: "09169",
    name: "Phường Thị Cầu",
  },
  {
    districtId: "256",
    wardId: "09172",
    name: "Phường Kinh Bắc",
  },
  {
    districtId: "256",
    wardId: "09175",
    name: "Phường Vệ An",
  },
  {
    districtId: "256",
    wardId: "09178",
    name: "Phường Tiền An",
  },
  {
    districtId: "256",
    wardId: "09181",
    name: "Phường Đại Phúc",
  },
  {
    districtId: "256",
    wardId: "09184",
    name: "Phường Ninh Xá",
  },
  {
    districtId: "256",
    wardId: "09187",
    name: "Phường Suối Hoa",
  },
  {
    districtId: "256",
    wardId: "09190",
    name: "Phường Võ Cường",
  },
  {
    districtId: "256",
    wardId: "09214",
    name: "Phường Hòa Long",
  },
  {
    districtId: "256",
    wardId: "09226",
    name: "Phường Vạn An",
  },
  {
    districtId: "256",
    wardId: "09235",
    name: "Phường Khúc Xuyên",
  },
  {
    districtId: "256",
    wardId: "09244",
    name: "Phường Phong Khê",
  },
  {
    districtId: "256",
    wardId: "09256",
    name: "Phường Kim Chân",
  },
  {
    districtId: "256",
    wardId: "09271",
    name: "Phường Vân Dương",
  },
  {
    districtId: "256",
    wardId: "09286",
    name: "Phường Nam Sơn",
  },
  {
    districtId: "256",
    wardId: "09325",
    name: "Phường Khắc Niệm",
  },
  {
    districtId: "256",
    wardId: "09331",
    name: "Phường Hạp Lĩnh",
  },
  {
    districtId: "258",
    wardId: "09193",
    name: "Thị trấn Chờ",
  },
  {
    districtId: "258",
    wardId: "09196",
    name: "Xã Dũng Liệt",
  },
  {
    districtId: "258",
    wardId: "09199",
    name: "Xã Tam Đa",
  },
  {
    districtId: "258",
    wardId: "09202",
    name: "Xã Tam Giang",
  },
  {
    districtId: "258",
    wardId: "09205",
    name: "Xã Yên Trung",
  },
  {
    districtId: "258",
    wardId: "09208",
    name: "Xã Thụy Hòa",
  },
  {
    districtId: "258",
    wardId: "09211",
    name: "Xã Hòa Tiến",
  },
  {
    districtId: "258",
    wardId: "09217",
    name: "Xã Đông Tiến",
  },
  {
    districtId: "258",
    wardId: "09220",
    name: "Xã Yên Phụ",
  },
  {
    districtId: "258",
    wardId: "09223",
    name: "Xã Trung Nghĩa",
  },
  {
    districtId: "258",
    wardId: "09229",
    name: "Xã Đông Phong",
  },
  {
    districtId: "258",
    wardId: "09232",
    name: "Xã Long Châu",
  },
  {
    districtId: "258",
    wardId: "09238",
    name: "Xã Văn Môn",
  },
  {
    districtId: "258",
    wardId: "09241",
    name: "Xã Đông Thọ",
  },
  {
    districtId: "259",
    wardId: "09247",
    name: "Thị trấn Phố Mới",
  },
  {
    districtId: "259",
    wardId: "09250",
    name: "Xã Việt Thống",
  },
  {
    districtId: "259",
    wardId: "09253",
    name: "Xã Đại Xuân",
  },
  {
    districtId: "259",
    wardId: "09259",
    name: "Xã Nhân Hòa",
  },
  {
    districtId: "259",
    wardId: "09262",
    name: "Xã Bằng An",
  },
  {
    districtId: "259",
    wardId: "09265",
    name: "Xã Phương Liễu",
  },
  {
    districtId: "259",
    wardId: "09268",
    name: "Xã Quế Tân",
  },
  {
    districtId: "259",
    wardId: "09274",
    name: "Xã Phù Lương",
  },
  {
    districtId: "259",
    wardId: "09277",
    name: "Xã Phù Lãng",
  },
  {
    districtId: "259",
    wardId: "09280",
    name: "Xã Phượng Mao",
  },
  {
    districtId: "259",
    wardId: "09283",
    name: "Xã Việt Hùng",
  },
  {
    districtId: "259",
    wardId: "09289",
    name: "Xã Ngọc Xá",
  },
  {
    districtId: "259",
    wardId: "09292",
    name: "Xã Châu Phong",
  },
  {
    districtId: "259",
    wardId: "09295",
    name: "Xã Bồng Lai",
  },
  {
    districtId: "259",
    wardId: "09298",
    name: "Xã Cách Bi",
  },
  {
    districtId: "259",
    wardId: "09301",
    name: "Xã Đào Viên",
  },
  {
    districtId: "259",
    wardId: "09304",
    name: "Xã Yên Giả",
  },
  {
    districtId: "259",
    wardId: "09307",
    name: "Xã Mộ Đạo",
  },
  {
    districtId: "259",
    wardId: "09310",
    name: "Xã Đức Long",
  },
  {
    districtId: "259",
    wardId: "09313",
    name: "Xã Chi Lăng",
  },
  {
    districtId: "259",
    wardId: "09316",
    name: "Xã Hán Quảng",
  },
  {
    districtId: "260",
    wardId: "09319",
    name: "Thị trấn Lim",
  },
  {
    districtId: "260",
    wardId: "09322",
    name: "Xã Phú Lâm",
  },
  {
    districtId: "260",
    wardId: "09328",
    name: "Xã Nội Duệ",
  },
  {
    districtId: "260",
    wardId: "09334",
    name: "Xã Liên Bão",
  },
  {
    districtId: "260",
    wardId: "09337",
    name: "Xã Hiên Vân",
  },
  {
    districtId: "260",
    wardId: "09340",
    name: "Xã Hoàn Sơn",
  },
  {
    districtId: "260",
    wardId: "09343",
    name: "Xã Lạc Vệ",
  },
  {
    districtId: "260",
    wardId: "09346",
    name: "Xã Việt Đoàn",
  },
  {
    districtId: "260",
    wardId: "09349",
    name: "Xã Phật Tích",
  },
  {
    districtId: "260",
    wardId: "09352",
    name: "Xã Tân Chi",
  },
  {
    districtId: "260",
    wardId: "09355",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "260",
    wardId: "09358",
    name: "Xã Tri Phương",
  },
  {
    districtId: "260",
    wardId: "09361",
    name: "Xã Minh Đạo",
  },
  {
    districtId: "260",
    wardId: "09364",
    name: "Xã Cảnh Hưng",
  },
  {
    districtId: "261",
    wardId: "09367",
    name: "Phường Đông Ngàn",
  },
  {
    districtId: "261",
    wardId: "09370",
    name: "Phường Tam Sơn",
  },
  {
    districtId: "261",
    wardId: "09373",
    name: "Phường Hương Mạc",
  },
  {
    districtId: "261",
    wardId: "09376",
    name: "Phường Tương Giang",
  },
  {
    districtId: "261",
    wardId: "09379",
    name: "Phường Phù Khê",
  },
  {
    districtId: "261",
    wardId: "09382",
    name: "Phường Đồng Kỵ",
  },
  {
    districtId: "261",
    wardId: "09383",
    name: "Phường Trang Hạ",
  },
  {
    districtId: "261",
    wardId: "09385",
    name: "Phường Đồng Nguyên",
  },
  {
    districtId: "261",
    wardId: "09388",
    name: "Phường Châu Khê",
  },
  {
    districtId: "261",
    wardId: "09391",
    name: "Phường Tân Hồng",
  },
  {
    districtId: "261",
    wardId: "09394",
    name: "Phường Đình Bảng",
  },
  {
    districtId: "261",
    wardId: "09397",
    name: "Phường Phù Chẩn",
  },
  {
    districtId: "262",
    wardId: "09400",
    name: "Thị trấn Hồ",
  },
  {
    districtId: "262",
    wardId: "09403",
    name: "Xã Hoài Thượng",
  },
  {
    districtId: "262",
    wardId: "09406",
    name: "Xã Đại Đồng Thành",
  },
  {
    districtId: "262",
    wardId: "09409",
    name: "Xã Mão Điền",
  },
  {
    districtId: "262",
    wardId: "09412",
    name: "Xã Song Hồ",
  },
  {
    districtId: "262",
    wardId: "09415",
    name: "Xã Đình Tổ",
  },
  {
    districtId: "262",
    wardId: "09418",
    name: "Xã An Bình",
  },
  {
    districtId: "262",
    wardId: "09421",
    name: "Xã Trí Quả",
  },
  {
    districtId: "262",
    wardId: "09424",
    name: "Xã Gia Đông",
  },
  {
    districtId: "262",
    wardId: "09427",
    name: "Xã Thanh Khương",
  },
  {
    districtId: "262",
    wardId: "09430",
    name: "Xã Trạm Lộ",
  },
  {
    districtId: "262",
    wardId: "09433",
    name: "Xã Xuân Lâm",
  },
  {
    districtId: "262",
    wardId: "09436",
    name: "Xã Hà Mãn",
  },
  {
    districtId: "262",
    wardId: "09439",
    name: "Xã Ngũ Thái",
  },
  {
    districtId: "262",
    wardId: "09442",
    name: "Xã Nguyệt Đức",
  },
  {
    districtId: "262",
    wardId: "09445",
    name: "Xã Ninh Xá",
  },
  {
    districtId: "262",
    wardId: "09448",
    name: "Xã Nghĩa Đạo",
  },
  {
    districtId: "262",
    wardId: "09451",
    name: "Xã Song Liễu",
  },
  {
    districtId: "263",
    wardId: "09454",
    name: "Thị trấn Gia Bình",
  },
  {
    districtId: "263",
    wardId: "09457",
    name: "Xã Vạn Ninh",
  },
  {
    districtId: "263",
    wardId: "09460",
    name: "Xã Thái Bảo",
  },
  {
    districtId: "263",
    wardId: "09463",
    name: "Xã Giang Sơn",
  },
  {
    districtId: "263",
    wardId: "09466",
    name: "Xã Cao Đức",
  },
  {
    districtId: "263",
    wardId: "09469",
    name: "Xã Đại Lai",
  },
  {
    districtId: "263",
    wardId: "09472",
    name: "Xã Song Giang",
  },
  {
    districtId: "263",
    wardId: "09475",
    name: "Xã Bình Dương",
  },
  {
    districtId: "263",
    wardId: "09478",
    name: "Xã Lãng Ngâm",
  },
  {
    districtId: "263",
    wardId: "09481",
    name: "Xã Nhân Thắng",
  },
  {
    districtId: "263",
    wardId: "09484",
    name: "Xã Xuân Lai",
  },
  {
    districtId: "263",
    wardId: "09487",
    name: "Xã Đông Cứu",
  },
  {
    districtId: "263",
    wardId: "09490",
    name: "Xã Đại Bái",
  },
  {
    districtId: "263",
    wardId: "09493",
    name: "Xã Quỳnh Phú",
  },
  {
    districtId: "264",
    wardId: "09496",
    name: "Thị trấn Thứa",
  },
  {
    districtId: "264",
    wardId: "09499",
    name: "Xã An Thịnh",
  },
  {
    districtId: "264",
    wardId: "09502",
    name: "Xã Trung Kênh",
  },
  {
    districtId: "264",
    wardId: "09505",
    name: "Xã Phú Hòa",
  },
  {
    districtId: "264",
    wardId: "09508",
    name: "Xã Mỹ Hương",
  },
  {
    districtId: "264",
    wardId: "09511",
    name: "Xã Tân Lãng",
  },
  {
    districtId: "264",
    wardId: "09514",
    name: "Xã Quảng Phú",
  },
  {
    districtId: "264",
    wardId: "09517",
    name: "Xã Trừng Xá",
  },
  {
    districtId: "264",
    wardId: "09520",
    name: "Xã Lai Hạ",
  },
  {
    districtId: "264",
    wardId: "09523",
    name: "Xã Trung Chính",
  },
  {
    districtId: "264",
    wardId: "09526",
    name: "Xã Minh Tân",
  },
  {
    districtId: "264",
    wardId: "09529",
    name: "Xã Bình Định",
  },
  {
    districtId: "264",
    wardId: "09532",
    name: "Xã Phú Lương",
  },
  {
    districtId: "264",
    wardId: "09535",
    name: "Xã Lâm Thao",
  },
  {
    districtId: "288",
    wardId: "10507",
    name: "Phường Cẩm Thượng",
  },
  {
    districtId: "288",
    wardId: "10510",
    name: "Phường Bình Hàn",
  },
  {
    districtId: "288",
    wardId: "10513",
    name: "Phường Ngọc Châu",
  },
  {
    districtId: "288",
    wardId: "10514",
    name: "Phường Nhị Châu",
  },
  {
    districtId: "288",
    wardId: "10516",
    name: "Phường Quang Trung",
  },
  {
    districtId: "288",
    wardId: "10519",
    name: "Phường Nguyễn Trãi",
  },
  {
    districtId: "288",
    wardId: "10522",
    name: "Phường Phạm Ngũ Lão",
  },
  {
    districtId: "288",
    wardId: "10525",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "288",
    wardId: "10528",
    name: "Phường Trần Phú",
  },
  {
    districtId: "288",
    wardId: "10531",
    name: "Phường Thanh Bình",
  },
  {
    districtId: "288",
    wardId: "10532",
    name: "Phường Tân Bình",
  },
  {
    districtId: "288",
    wardId: "10534",
    name: "Phường Lê Thanh Nghị",
  },
  {
    districtId: "288",
    wardId: "10537",
    name: "Phường Hải Tân",
  },
  {
    districtId: "288",
    wardId: "10540",
    name: "Phường Tứ Minh",
  },
  {
    districtId: "288",
    wardId: "10543",
    name: "Phường Việt Hoà",
  },
  {
    districtId: "288",
    wardId: "10660",
    name: "Phường Ái Quốc",
  },
  {
    districtId: "288",
    wardId: "10663",
    name: "Xã An Thượng",
  },
  {
    districtId: "288",
    wardId: "10672",
    name: "Phường Nam Đồng",
  },
  {
    districtId: "288",
    wardId: "10822",
    name: "Xã Quyết Thắng",
  },
  {
    districtId: "288",
    wardId: "10837",
    name: "Xã Tiền Tiến",
  },
  {
    districtId: "288",
    wardId: "11002",
    name: "Phường Thạch Khôi",
  },
  {
    districtId: "288",
    wardId: "11005",
    name: "Xã Liên Hồng",
  },
  {
    districtId: "288",
    wardId: "11011",
    name: "Phường Tân Hưng",
  },
  {
    districtId: "288",
    wardId: "11017",
    name: "Xã Gia Xuyên",
  },
  {
    districtId: "288",
    wardId: "11077",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "290",
    wardId: "10546",
    name: "Phường Phả Lại",
  },
  {
    districtId: "290",
    wardId: "10549",
    name: "Phường Sao Đỏ",
  },
  {
    districtId: "290",
    wardId: "10552",
    name: "Phường Bến Tắm",
  },
  {
    districtId: "290",
    wardId: "10555",
    name: "Xã Hoàng Hoa Thám",
  },
  {
    districtId: "290",
    wardId: "10558",
    name: "Xã Bắc An",
  },
  {
    districtId: "290",
    wardId: "10561",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "290",
    wardId: "10564",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "290",
    wardId: "10567",
    name: "Phường Hoàng Tiến",
  },
  {
    districtId: "290",
    wardId: "10570",
    name: "Phường Cộng Hoà",
  },
  {
    districtId: "290",
    wardId: "10573",
    name: "Phường Hoàng Tân",
  },
  {
    districtId: "290",
    wardId: "10576",
    name: "Phường Cổ Thành",
  },
  {
    districtId: "290",
    wardId: "10579",
    name: "Phường Văn An",
  },
  {
    districtId: "290",
    wardId: "10582",
    name: "Phường Chí Minh",
  },
  {
    districtId: "290",
    wardId: "10585",
    name: "Phường Văn Đức",
  },
  {
    districtId: "290",
    wardId: "10588",
    name: "Phường Thái Học",
  },
  {
    districtId: "290",
    wardId: "10591",
    name: "Xã Nhân Huệ",
  },
  {
    districtId: "290",
    wardId: "10594",
    name: "Phường An Lạc",
  },
  {
    districtId: "290",
    wardId: "10600",
    name: "Phường Đồng Lạc",
  },
  {
    districtId: "290",
    wardId: "10603",
    name: "Phường Tân Dân",
  },
  {
    districtId: "291",
    wardId: "10606",
    name: "Thị trấn Nam Sách",
  },
  {
    districtId: "291",
    wardId: "10609",
    name: "Xã Nam Hưng",
  },
  {
    districtId: "291",
    wardId: "10612",
    name: "Xã Nam Tân",
  },
  {
    districtId: "291",
    wardId: "10615",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "291",
    wardId: "10618",
    name: "Xã Hiệp Cát",
  },
  {
    districtId: "291",
    wardId: "10621",
    name: "Xã Thanh Quang",
  },
  {
    districtId: "291",
    wardId: "10624",
    name: "Xã Quốc Tuấn",
  },
  {
    districtId: "291",
    wardId: "10627",
    name: "Xã Nam Chính",
  },
  {
    districtId: "291",
    wardId: "10630",
    name: "Xã An Bình",
  },
  {
    districtId: "291",
    wardId: "10633",
    name: "Xã Nam Trung",
  },
  {
    districtId: "291",
    wardId: "10636",
    name: "Xã An Sơn",
  },
  {
    districtId: "291",
    wardId: "10639",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "291",
    wardId: "10642",
    name: "Xã Thái Tân",
  },
  {
    districtId: "291",
    wardId: "10645",
    name: "Xã An Lâm",
  },
  {
    districtId: "291",
    wardId: "10648",
    name: "Xã Phú Điền",
  },
  {
    districtId: "291",
    wardId: "10651",
    name: "Xã Nam Hồng",
  },
  {
    districtId: "291",
    wardId: "10654",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "291",
    wardId: "10657",
    name: "Xã Đồng Lạc",
  },
  {
    districtId: "291",
    wardId: "10666",
    name: "Xã Minh Tân",
  },
  {
    districtId: "292",
    wardId: "10675",
    name: "Phường An Lưu",
  },
  {
    districtId: "292",
    wardId: "10678",
    name: "Xã Bạch Đằng",
  },
  {
    districtId: "292",
    wardId: "10681",
    name: "Phường Thất Hùng",
  },
  {
    districtId: "292",
    wardId: "10684",
    name: "Xã Lê Ninh",
  },
  {
    districtId: "292",
    wardId: "10687",
    name: "Xã Hoành Sơn",
  },
  {
    districtId: "292",
    wardId: "10693",
    name: "Phường Phạm Thái",
  },
  {
    districtId: "292",
    wardId: "10696",
    name: "Phường Duy Tân",
  },
  {
    districtId: "292",
    wardId: "10699",
    name: "Phường Tân Dân",
  },
  {
    districtId: "292",
    wardId: "10702",
    name: "Phường Minh Tân",
  },
  {
    districtId: "292",
    wardId: "10705",
    name: "Xã Quang Thành",
  },
  {
    districtId: "292",
    wardId: "10708",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "292",
    wardId: "10714",
    name: "Phường Phú Thứ",
  },
  {
    districtId: "292",
    wardId: "10717",
    name: "Xã Thăng Long",
  },
  {
    districtId: "292",
    wardId: "10720",
    name: "Xã Lạc Long",
  },
  {
    districtId: "292",
    wardId: "10723",
    name: "Phường An Sinh",
  },
  {
    districtId: "292",
    wardId: "10726",
    name: "Phường Hiệp Sơn",
  },
  {
    districtId: "292",
    wardId: "10729",
    name: "Xã Thượng Quận",
  },
  {
    districtId: "292",
    wardId: "10732",
    name: "Phường An Phụ",
  },
  {
    districtId: "292",
    wardId: "10735",
    name: "Phường Hiệp An",
  },
  {
    districtId: "292",
    wardId: "10738",
    name: "Phường Long Xuyên",
  },
  {
    districtId: "292",
    wardId: "10741",
    name: "Phường Thái Thịnh",
  },
  {
    districtId: "292",
    wardId: "10744",
    name: "Phường Hiến Thành",
  },
  {
    districtId: "292",
    wardId: "10747",
    name: "Xã Minh Hòa",
  },
  {
    districtId: "293",
    wardId: "10750",
    name: "Thị trấn Phú Thái",
  },
  {
    districtId: "293",
    wardId: "10753",
    name: "Xã Lai Vu",
  },
  {
    districtId: "293",
    wardId: "10756",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "293",
    wardId: "10759",
    name: "Xã Thượng Vũ",
  },
  {
    districtId: "293",
    wardId: "10762",
    name: "Xã Cổ Dũng",
  },
  {
    districtId: "293",
    wardId: "10768",
    name: "Xã Tuấn Việt",
  },
  {
    districtId: "293",
    wardId: "10771",
    name: "Xã Kim Xuyên",
  },
  {
    districtId: "293",
    wardId: "10774",
    name: "Xã Phúc Thành A",
  },
  {
    districtId: "293",
    wardId: "10777",
    name: "Xã Ngũ Phúc",
  },
  {
    districtId: "293",
    wardId: "10780",
    name: "Xã Kim Anh",
  },
  {
    districtId: "293",
    wardId: "10783",
    name: "Xã Kim Liên",
  },
  {
    districtId: "293",
    wardId: "10786",
    name: "Xã Kim Tân",
  },
  {
    districtId: "293",
    wardId: "10792",
    name: "Xã Kim Đính",
  },
  {
    districtId: "293",
    wardId: "10798",
    name: "Xã Bình Dân",
  },
  {
    districtId: "293",
    wardId: "10801",
    name: "Xã Tam Kỳ",
  },
  {
    districtId: "293",
    wardId: "10804",
    name: "Xã Đồng Cẩm",
  },
  {
    districtId: "293",
    wardId: "10807",
    name: "Xã Liên Hòa",
  },
  {
    districtId: "293",
    wardId: "10810",
    name: "Xã Đại Đức",
  },
  {
    districtId: "294",
    wardId: "10813",
    name: "Thị trấn Thanh Hà",
  },
  {
    districtId: "294",
    wardId: "10816",
    name: "Xã Hồng Lạc",
  },
  {
    districtId: "294",
    wardId: "10819",
    name: "Xã Việt Hồng",
  },
  {
    districtId: "294",
    wardId: "10825",
    name: "Xã Tân Việt",
  },
  {
    districtId: "294",
    wardId: "10828",
    name: "Xã Cẩm Chế",
  },
  {
    districtId: "294",
    wardId: "10831",
    name: "Xã Thanh An",
  },
  {
    districtId: "294",
    wardId: "10834",
    name: "Xã Thanh Lang",
  },
  {
    districtId: "294",
    wardId: "10840",
    name: "Xã Tân An",
  },
  {
    districtId: "294",
    wardId: "10843",
    name: "Xã Liên Mạc",
  },
  {
    districtId: "294",
    wardId: "10846",
    name: "Xã Thanh Hải",
  },
  {
    districtId: "294",
    wardId: "10849",
    name: "Xã Thanh Khê",
  },
  {
    districtId: "294",
    wardId: "10852",
    name: "Xã Thanh Xá",
  },
  {
    districtId: "294",
    wardId: "10855",
    name: "Xã Thanh Xuân",
  },
  {
    districtId: "294",
    wardId: "10861",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "294",
    wardId: "10864",
    name: "Xã An Phượng",
  },
  {
    districtId: "294",
    wardId: "10867",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "294",
    wardId: "10876",
    name: "Xã Thanh Quang",
  },
  {
    districtId: "294",
    wardId: "10879",
    name: "Xã Thanh Hồng",
  },
  {
    districtId: "294",
    wardId: "10882",
    name: "Xã Thanh Cường",
  },
  {
    districtId: "294",
    wardId: "10885",
    name: "Xã Vĩnh Lập",
  },
  {
    districtId: "295",
    wardId: "10888",
    name: "Thị trấn Cẩm Giang",
  },
  {
    districtId: "295",
    wardId: "10891",
    name: "Thị trấn Lai Cách",
  },
  {
    districtId: "295",
    wardId: "10894",
    name: "Xã Cẩm Hưng",
  },
  {
    districtId: "295",
    wardId: "10897",
    name: "Xã Cẩm Hoàng",
  },
  {
    districtId: "295",
    wardId: "10900",
    name: "Xã Cẩm Văn",
  },
  {
    districtId: "295",
    wardId: "10903",
    name: "Xã Ngọc Liên",
  },
  {
    districtId: "295",
    wardId: "10906",
    name: "Xã Thạch Lỗi",
  },
  {
    districtId: "295",
    wardId: "10909",
    name: "Xã Cẩm Vũ",
  },
  {
    districtId: "295",
    wardId: "10912",
    name: "Xã Đức Chính",
  },
  {
    districtId: "295",
    wardId: "10918",
    name: "Xã Định Sơn",
  },
  {
    districtId: "295",
    wardId: "10924",
    name: "Xã Lương Điền",
  },
  {
    districtId: "295",
    wardId: "10927",
    name: "Xã Cao An",
  },
  {
    districtId: "295",
    wardId: "10930",
    name: "Xã Tân Trường",
  },
  {
    districtId: "295",
    wardId: "10933",
    name: "Xã Cẩm Phúc",
  },
  {
    districtId: "295",
    wardId: "10936",
    name: "Xã Cẩm Điền",
  },
  {
    districtId: "295",
    wardId: "10939",
    name: "Xã Cẩm Đông",
  },
  {
    districtId: "295",
    wardId: "10942",
    name: "Xã Cẩm Đoài",
  },
  {
    districtId: "296",
    wardId: "10945",
    name: "Thị trấn Kẻ Sặt",
  },
  {
    districtId: "296",
    wardId: "10951",
    name: "Xã Vĩnh Hưng",
  },
  {
    districtId: "296",
    wardId: "10954",
    name: "Xã Hùng Thắng",
  },
  {
    districtId: "296",
    wardId: "10960",
    name: "Xã Vĩnh Hồng",
  },
  {
    districtId: "296",
    wardId: "10963",
    name: "Xã Long Xuyên",
  },
  {
    districtId: "296",
    wardId: "10966",
    name: "Xã Tân Việt",
  },
  {
    districtId: "296",
    wardId: "10969",
    name: "Xã Thúc Kháng",
  },
  {
    districtId: "296",
    wardId: "10972",
    name: "Xã Tân Hồng",
  },
  {
    districtId: "296",
    wardId: "10975",
    name: "Xã Bình Minh",
  },
  {
    districtId: "296",
    wardId: "10978",
    name: "Xã Hồng Khê",
  },
  {
    districtId: "296",
    wardId: "10981",
    name: "Xã Thái Học",
  },
  {
    districtId: "296",
    wardId: "10984",
    name: "Xã Cổ Bì",
  },
  {
    districtId: "296",
    wardId: "10987",
    name: "Xã Nhân Quyền",
  },
  {
    districtId: "296",
    wardId: "10990",
    name: "Xã Thái Dương",
  },
  {
    districtId: "296",
    wardId: "10993",
    name: "Xã Thái Hòa",
  },
  {
    districtId: "296",
    wardId: "10996",
    name: "Xã Bình Xuyên",
  },
  {
    districtId: "297",
    wardId: "10999",
    name: "Thị trấn Gia Lộc",
  },
  {
    districtId: "297",
    wardId: "11008",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "297",
    wardId: "11020",
    name: "Xã Yết Kiêu",
  },
  {
    districtId: "297",
    wardId: "11029",
    name: "Xã Gia Tân",
  },
  {
    districtId: "297",
    wardId: "11032",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "297",
    wardId: "11035",
    name: "Xã Gia Khánh",
  },
  {
    districtId: "297",
    wardId: "11038",
    name: "Xã Gia Lương",
  },
  {
    districtId: "297",
    wardId: "11041",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "297",
    wardId: "11044",
    name: "Xã Toàn Thắng",
  },
  {
    districtId: "297",
    wardId: "11047",
    name: "Xã Hoàng Diệu",
  },
  {
    districtId: "297",
    wardId: "11050",
    name: "Xã Hồng Hưng",
  },
  {
    districtId: "297",
    wardId: "11053",
    name: "Xã Phạm Trấn",
  },
  {
    districtId: "297",
    wardId: "11056",
    name: "Xã Đoàn Thượng",
  },
  {
    districtId: "297",
    wardId: "11059",
    name: "Xã Thống Kênh",
  },
  {
    districtId: "297",
    wardId: "11062",
    name: "Xã Quang Minh",
  },
  {
    districtId: "297",
    wardId: "11065",
    name: "Xã Đồng Quang",
  },
  {
    districtId: "297",
    wardId: "11068",
    name: "Xã Nhật Tân",
  },
  {
    districtId: "297",
    wardId: "11071",
    name: "Xã Đức Xương",
  },
  {
    districtId: "298",
    wardId: "11074",
    name: "Thị trấn Tứ Kỳ",
  },
  {
    districtId: "298",
    wardId: "11083",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "298",
    wardId: "11086",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "298",
    wardId: "11089",
    name: "Xã Ngọc Kỳ",
  },
  {
    districtId: "298",
    wardId: "11092",
    name: "Xã Bình Lăng",
  },
  {
    districtId: "298",
    wardId: "11095",
    name: "Xã Chí Minh",
  },
  {
    districtId: "298",
    wardId: "11098",
    name: "Xã Tái Sơn",
  },
  {
    districtId: "298",
    wardId: "11101",
    name: "Xã Quang Phục",
  },
  {
    districtId: "298",
    wardId: "11110",
    name: "Xã Dân Chủ",
  },
  {
    districtId: "298",
    wardId: "11113",
    name: "Xã Tân Kỳ",
  },
  {
    districtId: "298",
    wardId: "11116",
    name: "Xã Quang Khải",
  },
  {
    districtId: "298",
    wardId: "11119",
    name: "Xã Đại Hợp",
  },
  {
    districtId: "298",
    wardId: "11122",
    name: "Xã Quảng Nghiệp",
  },
  {
    districtId: "298",
    wardId: "11125",
    name: "Xã An Thanh",
  },
  {
    districtId: "298",
    wardId: "11128",
    name: "Xã Minh Đức",
  },
  {
    districtId: "298",
    wardId: "11131",
    name: "Xã Văn Tố",
  },
  {
    districtId: "298",
    wardId: "11134",
    name: "Xã Quang Trung",
  },
  {
    districtId: "298",
    wardId: "11137",
    name: "Xã Phượng Kỳ",
  },
  {
    districtId: "298",
    wardId: "11140",
    name: "Xã Cộng Lạc",
  },
  {
    districtId: "298",
    wardId: "11143",
    name: "Xã Tiên Động",
  },
  {
    districtId: "298",
    wardId: "11146",
    name: "Xã Nguyên Giáp",
  },
  {
    districtId: "298",
    wardId: "11149",
    name: "Xã Hà Kỳ",
  },
  {
    districtId: "298",
    wardId: "11152",
    name: "Xã Hà Thanh",
  },
  {
    districtId: "299",
    wardId: "11155",
    name: "Thị trấn Ninh Giang",
  },
  {
    districtId: "299",
    wardId: "11161",
    name: "Xã Ứng Hoè",
  },
  {
    districtId: "299",
    wardId: "11164",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "299",
    wardId: "11167",
    name: "Xã Hồng Đức",
  },
  {
    districtId: "299",
    wardId: "11173",
    name: "Xã An Đức",
  },
  {
    districtId: "299",
    wardId: "11176",
    name: "Xã Vạn Phúc",
  },
  {
    districtId: "299",
    wardId: "11179",
    name: "Xã Tân Hương",
  },
  {
    districtId: "299",
    wardId: "11185",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "299",
    wardId: "11188",
    name: "Xã Đông Xuyên",
  },
  {
    districtId: "299",
    wardId: "11197",
    name: "Xã Tân Phong",
  },
  {
    districtId: "299",
    wardId: "11200",
    name: "Xã Ninh Hải",
  },
  {
    districtId: "299",
    wardId: "11203",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "299",
    wardId: "11206",
    name: "Xã Tân Quang",
  },
  {
    districtId: "299",
    wardId: "11209",
    name: "Xã Kiến Quốc",
  },
  {
    districtId: "299",
    wardId: "11215",
    name: "Xã Hồng Dụ",
  },
  {
    districtId: "299",
    wardId: "11218",
    name: "Xã Văn Hội",
  },
  {
    districtId: "299",
    wardId: "11224",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "299",
    wardId: "11227",
    name: "Xã Hiệp Lực",
  },
  {
    districtId: "299",
    wardId: "11230",
    name: "Xã Hồng Phúc",
  },
  {
    districtId: "299",
    wardId: "11233",
    name: "Xã Hưng Long",
  },
  {
    districtId: "300",
    wardId: "11239",
    name: "Thị trấn Thanh Miện",
  },
  {
    districtId: "300",
    wardId: "11242",
    name: "Xã Thanh Tùng",
  },
  {
    districtId: "300",
    wardId: "11245",
    name: "Xã Phạm Kha",
  },
  {
    districtId: "300",
    wardId: "11248",
    name: "Xã Ngô Quyền",
  },
  {
    districtId: "300",
    wardId: "11251",
    name: "Xã Đoàn Tùng",
  },
  {
    districtId: "300",
    wardId: "11254",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "300",
    wardId: "11257",
    name: "Xã Tân Trào",
  },
  {
    districtId: "300",
    wardId: "11260",
    name: "Xã Lam Sơn",
  },
  {
    districtId: "300",
    wardId: "11263",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "300",
    wardId: "11266",
    name: "Xã Lê Hồng",
  },
  {
    districtId: "300",
    wardId: "11269",
    name: "Xã Tứ Cường",
  },
  {
    districtId: "300",
    wardId: "11275",
    name: "Xã Ngũ Hùng",
  },
  {
    districtId: "300",
    wardId: "11278",
    name: "Xã Cao Thắng",
  },
  {
    districtId: "300",
    wardId: "11281",
    name: "Xã Chi Lăng Bắc",
  },
  {
    districtId: "300",
    wardId: "11284",
    name: "Xã Chi Lăng Nam",
  },
  {
    districtId: "300",
    wardId: "11287",
    name: "Xã Thanh Giang",
  },
  {
    districtId: "300",
    wardId: "11293",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "303",
    wardId: "11296",
    name: "Phường Quán Toan",
  },
  {
    districtId: "303",
    wardId: "11299",
    name: "Phường Hùng Vương",
  },
  {
    districtId: "303",
    wardId: "11302",
    name: "Phường Sở Dầu",
  },
  {
    districtId: "303",
    wardId: "11305",
    name: "Phường Thượng Lý",
  },
  {
    districtId: "303",
    wardId: "11308",
    name: "Phường Hạ Lý",
  },
  {
    districtId: "303",
    wardId: "11311",
    name: "Phường Minh Khai",
  },
  {
    districtId: "303",
    wardId: "11314",
    name: "Phường Trại Chuối",
  },
  {
    districtId: "303",
    wardId: "11320",
    name: "Phường Hoàng Văn Thụ",
  },
  {
    districtId: "303",
    wardId: "11323",
    name: "Phường Phan Bội Châu",
  },
  {
    districtId: "304",
    wardId: "11329",
    name: "Phường Máy Chai",
  },
  {
    districtId: "304",
    wardId: "11332",
    name: "Phường Máy Tơ",
  },
  {
    districtId: "304",
    wardId: "11335",
    name: "Phường Vạn Mỹ",
  },
  {
    districtId: "304",
    wardId: "11338",
    name: "Phường Cầu Tre",
  },
  {
    districtId: "304",
    wardId: "11341",
    name: "Phường Lạc Viên",
  },
  {
    districtId: "304",
    wardId: "11347",
    name: "Phường Gia Viên",
  },
  {
    districtId: "304",
    wardId: "11350",
    name: "Phường Đông Khê",
  },
  {
    districtId: "304",
    wardId: "11353",
    name: "Phường Cầu Đất",
  },
  {
    districtId: "304",
    wardId: "11356",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "304",
    wardId: "11359",
    name: "Phường Đằng Giang",
  },
  {
    districtId: "304",
    wardId: "11362",
    name: "Phường Lạch Tray",
  },
  {
    districtId: "304",
    wardId: "11365",
    name: "Phường Đổng Quốc Bình",
  },
  {
    districtId: "305",
    wardId: "11368",
    name: "Phường Cát Dài",
  },
  {
    districtId: "305",
    wardId: "11371",
    name: "Phường An Biên",
  },
  {
    districtId: "305",
    wardId: "11374",
    name: "Phường Lam Sơn",
  },
  {
    districtId: "305",
    wardId: "11377",
    name: "Phường An Dương",
  },
  {
    districtId: "305",
    wardId: "11380",
    name: "Phường Trần Nguyên Hãn",
  },
  {
    districtId: "305",
    wardId: "11383",
    name: "Phường Hồ Nam",
  },
  {
    districtId: "305",
    wardId: "11386",
    name: "Phường Trại Cau",
  },
  {
    districtId: "305",
    wardId: "11389",
    name: "Phường Dư Hàng",
  },
  {
    districtId: "305",
    wardId: "11392",
    name: "Phường Hàng Kênh",
  },
  {
    districtId: "305",
    wardId: "11395",
    name: "Phường Đông Hải",
  },
  {
    districtId: "305",
    wardId: "11398",
    name: "Phường Niệm Nghĩa",
  },
  {
    districtId: "305",
    wardId: "11401",
    name: "Phường Nghĩa Xá",
  },
  {
    districtId: "305",
    wardId: "11404",
    name: "Phường Dư Hàng Kênh",
  },
  {
    districtId: "305",
    wardId: "11405",
    name: "Phường Kênh Dương",
  },
  {
    districtId: "305",
    wardId: "11407",
    name: "Phường Vĩnh Niệm",
  },
  {
    districtId: "306",
    wardId: "11410",
    name: "Phường Đông Hải 1",
  },
  {
    districtId: "306",
    wardId: "11411",
    name: "Phường Đông Hải 2",
  },
  {
    districtId: "306",
    wardId: "11413",
    name: "Phường Đằng Lâm",
  },
  {
    districtId: "306",
    wardId: "11414",
    name: "Phường Thành Tô",
  },
  {
    districtId: "306",
    wardId: "11416",
    name: "Phường Đằng Hải",
  },
  {
    districtId: "306",
    wardId: "11419",
    name: "Phường Nam Hải",
  },
  {
    districtId: "306",
    wardId: "11422",
    name: "Phường Cát Bi",
  },
  {
    districtId: "306",
    wardId: "11425",
    name: "Phường Tràng Cát",
  },
  {
    districtId: "307",
    wardId: "11428",
    name: "Phường Quán Trữ",
  },
  {
    districtId: "307",
    wardId: "11429",
    name: "Phường Lãm Hà",
  },
  {
    districtId: "307",
    wardId: "11431",
    name: "Phường Đồng Hoà",
  },
  {
    districtId: "307",
    wardId: "11434",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "307",
    wardId: "11437",
    name: "Phường Nam Sơn",
  },
  {
    districtId: "307",
    wardId: "11440",
    name: "Phường Ngọc Sơn",
  },
  {
    districtId: "307",
    wardId: "11443",
    name: "Phường Trần Thành Ngọ",
  },
  {
    districtId: "307",
    wardId: "11446",
    name: "Phường Văn Đẩu",
  },
  {
    districtId: "307",
    wardId: "11449",
    name: "Phường Phù Liễn",
  },
  {
    districtId: "307",
    wardId: "11452",
    name: "Phường Tràng Minh",
  },
  {
    districtId: "308",
    wardId: "11455",
    name: "Phường Ngọc Xuyên",
  },
  {
    districtId: "308",
    wardId: "11458",
    name: "Phường Hải Sơn",
  },
  {
    districtId: "308",
    wardId: "11461",
    name: "Phường Vạn Hương",
  },
  {
    districtId: "308",
    wardId: "11465",
    name: "Phường Minh Đức",
  },
  {
    districtId: "308",
    wardId: "11467",
    name: "Phường Bàng La",
  },
  {
    districtId: "308",
    wardId: "11737",
    name: "Phường Hợp Đức",
  },
  {
    districtId: "309",
    wardId: "11683",
    name: "Phường Đa Phúc",
  },
  {
    districtId: "309",
    wardId: "11686",
    name: "Phường Hưng Đạo",
  },
  {
    districtId: "309",
    wardId: "11689",
    name: "Phường Anh Dũng",
  },
  {
    districtId: "309",
    wardId: "11692",
    name: "Phường Hải Thành",
  },
  {
    districtId: "309",
    wardId: "11707",
    name: "Phường Hoà Nghĩa",
  },
  {
    districtId: "309",
    wardId: "11740",
    name: "Phường Tân Thành",
  },
  {
    districtId: "311",
    wardId: "11470",
    name: "Thị trấn Núi Đèo",
  },
  {
    districtId: "311",
    wardId: "11473",
    name: "Thị trấn Minh Đức",
  },
  {
    districtId: "311",
    wardId: "11476",
    name: "Xã Lại Xuân",
  },
  {
    districtId: "311",
    wardId: "11479",
    name: "Xã An Sơn",
  },
  {
    districtId: "311",
    wardId: "11482",
    name: "Xã Kỳ Sơn",
  },
  {
    districtId: "311",
    wardId: "11485",
    name: "Xã Liên Khê",
  },
  {
    districtId: "311",
    wardId: "11488",
    name: "Xã Lưu Kiếm",
  },
  {
    districtId: "311",
    wardId: "11491",
    name: "Xã Lưu Kỳ",
  },
  {
    districtId: "311",
    wardId: "11494",
    name: "Xã Gia Minh",
  },
  {
    districtId: "311",
    wardId: "11497",
    name: "Xã Gia Đức",
  },
  {
    districtId: "311",
    wardId: "11500",
    name: "Xã Minh Tân",
  },
  {
    districtId: "311",
    wardId: "11503",
    name: "Xã Phù Ninh",
  },
  {
    districtId: "311",
    wardId: "11506",
    name: "Xã Quảng Thanh",
  },
  {
    districtId: "311",
    wardId: "11509",
    name: "Xã Chính Mỹ",
  },
  {
    districtId: "311",
    wardId: "11512",
    name: "Xã Kênh Giang",
  },
  {
    districtId: "311",
    wardId: "11515",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "311",
    wardId: "11518",
    name: "Xã Cao Nhân",
  },
  {
    districtId: "311",
    wardId: "11521",
    name: "Xã Mỹ Đồng",
  },
  {
    districtId: "311",
    wardId: "11524",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "311",
    wardId: "11527",
    name: "Xã Hoà Bình",
  },
  {
    districtId: "311",
    wardId: "11530",
    name: "Xã Trung Hà",
  },
  {
    districtId: "311",
    wardId: "11533",
    name: "Xã An Lư",
  },
  {
    districtId: "311",
    wardId: "11536",
    name: "Xã Thuỷ Triều",
  },
  {
    districtId: "311",
    wardId: "11539",
    name: "Xã Ngũ Lão",
  },
  {
    districtId: "311",
    wardId: "11542",
    name: "Xã Phục Lễ",
  },
  {
    districtId: "311",
    wardId: "11545",
    name: "Xã Tam Hưng",
  },
  {
    districtId: "311",
    wardId: "11548",
    name: "Xã Phả Lễ",
  },
  {
    districtId: "311",
    wardId: "11551",
    name: "Xã Lập Lễ",
  },
  {
    districtId: "311",
    wardId: "11554",
    name: "Xã Kiền Bái",
  },
  {
    districtId: "311",
    wardId: "11557",
    name: "Xã Thiên Hương",
  },
  {
    districtId: "311",
    wardId: "11560",
    name: "Xã Thuỷ Sơn",
  },
  {
    districtId: "311",
    wardId: "11563",
    name: "Xã Thuỷ Đường",
  },
  {
    districtId: "311",
    wardId: "11566",
    name: "Xã Hoàng Động",
  },
  {
    districtId: "311",
    wardId: "11569",
    name: "Xã Lâm Động",
  },
  {
    districtId: "311",
    wardId: "11572",
    name: "Xã Hoa Động",
  },
  {
    districtId: "311",
    wardId: "11575",
    name: "Xã Tân Dương",
  },
  {
    districtId: "311",
    wardId: "11578",
    name: "Xã Dương Quan",
  },
  {
    districtId: "312",
    wardId: "11581",
    name: "Thị trấn An Dương",
  },
  {
    districtId: "312",
    wardId: "11584",
    name: "Xã Lê Thiện",
  },
  {
    districtId: "312",
    wardId: "11587",
    name: "Xã Đại Bản",
  },
  {
    districtId: "312",
    wardId: "11590",
    name: "Xã An Hoà",
  },
  {
    districtId: "312",
    wardId: "11593",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "312",
    wardId: "11596",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "312",
    wardId: "11599",
    name: "Xã An Hưng",
  },
  {
    districtId: "312",
    wardId: "11602",
    name: "Xã An Hồng",
  },
  {
    districtId: "312",
    wardId: "11605",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "312",
    wardId: "11608",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "312",
    wardId: "11611",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "312",
    wardId: "11614",
    name: "Xã Đặng Cương",
  },
  {
    districtId: "312",
    wardId: "11617",
    name: "Xã Đồng Thái",
  },
  {
    districtId: "312",
    wardId: "11620",
    name: "Xã Quốc Tuấn",
  },
  {
    districtId: "312",
    wardId: "11623",
    name: "Xã An Đồng",
  },
  {
    districtId: "312",
    wardId: "11626",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "313",
    wardId: "11629",
    name: "Thị trấn An Lão",
  },
  {
    districtId: "313",
    wardId: "11632",
    name: "Xã Bát Trang",
  },
  {
    districtId: "313",
    wardId: "11635",
    name: "Xã Trường Thọ",
  },
  {
    districtId: "313",
    wardId: "11638",
    name: "Xã Trường Thành",
  },
  {
    districtId: "313",
    wardId: "11641",
    name: "Xã An Tiến",
  },
  {
    districtId: "313",
    wardId: "11644",
    name: "Xã Quang Hưng",
  },
  {
    districtId: "313",
    wardId: "11647",
    name: "Xã Quang Trung",
  },
  {
    districtId: "313",
    wardId: "11650",
    name: "Xã Quốc Tuấn",
  },
  {
    districtId: "313",
    wardId: "11653",
    name: "Xã An Thắng",
  },
  {
    districtId: "313",
    wardId: "11656",
    name: "Thị trấn Trường Sơn",
  },
  {
    districtId: "313",
    wardId: "11659",
    name: "Xã Tân Dân",
  },
  {
    districtId: "313",
    wardId: "11662",
    name: "Xã Thái Sơn",
  },
  {
    districtId: "313",
    wardId: "11665",
    name: "Xã Tân Viên",
  },
  {
    districtId: "313",
    wardId: "11668",
    name: "Xã Mỹ Đức",
  },
  {
    districtId: "313",
    wardId: "11671",
    name: "Xã Chiến Thắng",
  },
  {
    districtId: "313",
    wardId: "11674",
    name: "Xã An Thọ",
  },
  {
    districtId: "313",
    wardId: "11677",
    name: "Xã An Thái",
  },
  {
    districtId: "314",
    wardId: "11680",
    name: "Thị trấn Núi Đối",
  },
  {
    districtId: "314",
    wardId: "11695",
    name: "Xã Đông Phương",
  },
  {
    districtId: "314",
    wardId: "11698",
    name: "Xã Thuận Thiên",
  },
  {
    districtId: "314",
    wardId: "11701",
    name: "Xã Hữu Bằng",
  },
  {
    districtId: "314",
    wardId: "11704",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "314",
    wardId: "11710",
    name: "Xã Ngũ Phúc",
  },
  {
    districtId: "314",
    wardId: "11713",
    name: "Xã Kiến Quốc",
  },
  {
    districtId: "314",
    wardId: "11716",
    name: "Xã Du Lễ",
  },
  {
    districtId: "314",
    wardId: "11719",
    name: "Xã Thuỵ Hương",
  },
  {
    districtId: "314",
    wardId: "11722",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "314",
    wardId: "11725",
    name: "Xã Minh Tân",
  },
  {
    districtId: "314",
    wardId: "11728",
    name: "Xã Đại Hà",
  },
  {
    districtId: "314",
    wardId: "11731",
    name: "Xã Ngũ Đoan",
  },
  {
    districtId: "314",
    wardId: "11734",
    name: "Xã Tân Phong",
  },
  {
    districtId: "314",
    wardId: "11743",
    name: "Xã Tân Trào",
  },
  {
    districtId: "314",
    wardId: "11746",
    name: "Xã Đoàn Xá",
  },
  {
    districtId: "314",
    wardId: "11749",
    name: "Xã Tú Sơn",
  },
  {
    districtId: "314",
    wardId: "11752",
    name: "Xã Đại Hợp",
  },
  {
    districtId: "315",
    wardId: "11755",
    name: "Thị trấn Tiên Lãng",
  },
  {
    districtId: "315",
    wardId: "11758",
    name: "Xã Đại Thắng",
  },
  {
    districtId: "315",
    wardId: "11761",
    name: "Xã Tiên Cường",
  },
  {
    districtId: "315",
    wardId: "11764",
    name: "Xã Tự Cường",
  },
  {
    districtId: "315",
    wardId: "11770",
    name: "Xã Quyết Tiến",
  },
  {
    districtId: "315",
    wardId: "11773",
    name: "Xã Khởi Nghĩa",
  },
  {
    districtId: "315",
    wardId: "11776",
    name: "Xã Tiên Thanh",
  },
  {
    districtId: "315",
    wardId: "11779",
    name: "Xã Cấp Tiến",
  },
  {
    districtId: "315",
    wardId: "11782",
    name: "Xã Kiến Thiết",
  },
  {
    districtId: "315",
    wardId: "11785",
    name: "Xã Đoàn Lập",
  },
  {
    districtId: "315",
    wardId: "11788",
    name: "Xã Bạch Đằng",
  },
  {
    districtId: "315",
    wardId: "11791",
    name: "Xã Quang Phục",
  },
  {
    districtId: "315",
    wardId: "11794",
    name: "Xã Toàn Thắng",
  },
  {
    districtId: "315",
    wardId: "11797",
    name: "Xã Tiên Thắng",
  },
  {
    districtId: "315",
    wardId: "11800",
    name: "Xã Tiên Minh",
  },
  {
    districtId: "315",
    wardId: "11803",
    name: "Xã Bắc Hưng",
  },
  {
    districtId: "315",
    wardId: "11806",
    name: "Xã Nam Hưng",
  },
  {
    districtId: "315",
    wardId: "11809",
    name: "Xã Hùng Thắng",
  },
  {
    districtId: "315",
    wardId: "11812",
    name: "Xã Tây Hưng",
  },
  {
    districtId: "315",
    wardId: "11815",
    name: "Xã Đông Hưng",
  },
  {
    districtId: "315",
    wardId: "11821",
    name: "Xã Vinh Quang",
  },
  {
    districtId: "316",
    wardId: "11824",
    name: "Thị trấn Vĩnh Bảo",
  },
  {
    districtId: "316",
    wardId: "11827",
    name: "Xã Dũng Tiến",
  },
  {
    districtId: "316",
    wardId: "11830",
    name: "Xã Giang Biên",
  },
  {
    districtId: "316",
    wardId: "11833",
    name: "Xã Thắng Thuỷ",
  },
  {
    districtId: "316",
    wardId: "11836",
    name: "Xã Trung Lập",
  },
  {
    districtId: "316",
    wardId: "11839",
    name: "Xã Việt Tiến",
  },
  {
    districtId: "316",
    wardId: "11842",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "316",
    wardId: "11845",
    name: "Xã Vĩnh Long",
  },
  {
    districtId: "316",
    wardId: "11848",
    name: "Xã Hiệp Hoà",
  },
  {
    districtId: "316",
    wardId: "11851",
    name: "Xã Hùng Tiến",
  },
  {
    districtId: "316",
    wardId: "11854",
    name: "Xã An Hoà",
  },
  {
    districtId: "316",
    wardId: "11857",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "316",
    wardId: "11860",
    name: "Xã Tân Liên",
  },
  {
    districtId: "316",
    wardId: "11863",
    name: "Xã Nhân Hoà",
  },
  {
    districtId: "316",
    wardId: "11866",
    name: "Xã Tam Đa",
  },
  {
    districtId: "316",
    wardId: "11869",
    name: "Xã Hưng Nhân",
  },
  {
    districtId: "316",
    wardId: "11872",
    name: "Xã Vinh Quang",
  },
  {
    districtId: "316",
    wardId: "11875",
    name: "Xã Đồng Minh",
  },
  {
    districtId: "316",
    wardId: "11878",
    name: "Xã Thanh Lương",
  },
  {
    districtId: "316",
    wardId: "11881",
    name: "Xã Liên Am",
  },
  {
    districtId: "316",
    wardId: "11884",
    name: "Xã Lý Học",
  },
  {
    districtId: "316",
    wardId: "11887",
    name: "Xã Tam Cường",
  },
  {
    districtId: "316",
    wardId: "11890",
    name: "Xã Hoà Bình",
  },
  {
    districtId: "316",
    wardId: "11893",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "316",
    wardId: "11896",
    name: "Xã Vĩnh Phong",
  },
  {
    districtId: "316",
    wardId: "11899",
    name: "Xã Cộng Hiền",
  },
  {
    districtId: "316",
    wardId: "11902",
    name: "Xã Cao Minh",
  },
  {
    districtId: "316",
    wardId: "11905",
    name: "Xã Cổ Am",
  },
  {
    districtId: "316",
    wardId: "11908",
    name: "Xã Vĩnh Tiến",
  },
  {
    districtId: "316",
    wardId: "11911",
    name: "Xã Trấn Dương",
  },
  {
    districtId: "317",
    wardId: "11914",
    name: "Thị trấn Cát Bà",
  },
  {
    districtId: "317",
    wardId: "11917",
    name: "Thị trấn Cát Hải",
  },
  {
    districtId: "317",
    wardId: "11920",
    name: "Xã Nghĩa Lộ",
  },
  {
    districtId: "317",
    wardId: "11923",
    name: "Xã Đồng Bài",
  },
  {
    districtId: "317",
    wardId: "11926",
    name: "Xã Hoàng Châu",
  },
  {
    districtId: "317",
    wardId: "11929",
    name: "Xã Văn Phong",
  },
  {
    districtId: "317",
    wardId: "11932",
    name: "Xã Phù Long",
  },
  {
    districtId: "317",
    wardId: "11935",
    name: "Xã Gia Luận",
  },
  {
    districtId: "317",
    wardId: "11938",
    name: "Xã Hiền Hào",
  },
  {
    districtId: "317",
    wardId: "11941",
    name: "Xã Trân Châu",
  },
  {
    districtId: "317",
    wardId: "11944",
    name: "Xã Việt Hải",
  },
  {
    districtId: "317",
    wardId: "11947",
    name: "Xã Xuân Đám",
  },
  {
    districtId: "318",
    wardId: "",
    name: "",
  },
  {
    districtId: "323",
    wardId: "11950",
    name: "Phường Lam Sơn",
  },
  {
    districtId: "323",
    wardId: "11953",
    name: "Phường Hiến Nam",
  },
  {
    districtId: "323",
    wardId: "11956",
    name: "Phường An Tảo",
  },
  {
    districtId: "323",
    wardId: "11959",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "323",
    wardId: "11962",
    name: "Phường Minh Khai",
  },
  {
    districtId: "323",
    wardId: "11965",
    name: "Phường Quang Trung",
  },
  {
    districtId: "323",
    wardId: "11968",
    name: "Phường Hồng Châu",
  },
  {
    districtId: "323",
    wardId: "11971",
    name: "Xã Trung Nghĩa",
  },
  {
    districtId: "323",
    wardId: "11974",
    name: "Xã Liên Phương",
  },
  {
    districtId: "323",
    wardId: "11977",
    name: "Xã Hồng Nam",
  },
  {
    districtId: "323",
    wardId: "11980",
    name: "Xã Quảng Châu",
  },
  {
    districtId: "323",
    wardId: "11983",
    name: "Xã Bảo Khê",
  },
  {
    districtId: "323",
    wardId: "12331",
    name: "Xã Phú Cường",
  },
  {
    districtId: "323",
    wardId: "12334",
    name: "Xã Hùng Cường",
  },
  {
    districtId: "323",
    wardId: "12382",
    name: "Xã Phương Chiểu",
  },
  {
    districtId: "323",
    wardId: "12385",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "323",
    wardId: "12388",
    name: "Xã Hoàng Hanh",
  },
  {
    districtId: "325",
    wardId: "11986",
    name: "Thị trấn Như Quỳnh",
  },
  {
    districtId: "325",
    wardId: "11989",
    name: "Xã Lạc Đạo",
  },
  {
    districtId: "325",
    wardId: "11992",
    name: "Xã Chỉ Đạo",
  },
  {
    districtId: "325",
    wardId: "11995",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "325",
    wardId: "11998",
    name: "Xã Việt Hưng",
  },
  {
    districtId: "325",
    wardId: "12001",
    name: "Xã Tân Quang",
  },
  {
    districtId: "325",
    wardId: "12004",
    name: "Xã Đình Dù",
  },
  {
    districtId: "325",
    wardId: "12007",
    name: "Xã Minh Hải",
  },
  {
    districtId: "325",
    wardId: "12010",
    name: "Xã Lương Tài",
  },
  {
    districtId: "325",
    wardId: "12013",
    name: "Xã Trưng Trắc",
  },
  {
    districtId: "325",
    wardId: "12016",
    name: "Xã Lạc Hồng",
  },
  {
    districtId: "326",
    wardId: "12019",
    name: "Thị trấn Văn Giang",
  },
  {
    districtId: "326",
    wardId: "12022",
    name: "Xã Xuân Quan",
  },
  {
    districtId: "326",
    wardId: "12025",
    name: "Xã Cửu Cao",
  },
  {
    districtId: "326",
    wardId: "12028",
    name: "Xã Phụng Công",
  },
  {
    districtId: "326",
    wardId: "12031",
    name: "Xã Nghĩa Trụ",
  },
  {
    districtId: "326",
    wardId: "12034",
    name: "Xã Long Hưng",
  },
  {
    districtId: "326",
    wardId: "12037",
    name: "Xã Vĩnh Khúc",
  },
  {
    districtId: "326",
    wardId: "12040",
    name: "Xã Liên Nghĩa",
  },
  {
    districtId: "326",
    wardId: "12043",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "326",
    wardId: "12046",
    name: "Xã Thắng Lợi",
  },
  {
    districtId: "326",
    wardId: "12049",
    name: "Xã Mễ Sở",
  },
  {
    districtId: "327",
    wardId: "12052",
    name: "Thị trấn Yên Mỹ",
  },
  {
    districtId: "327",
    wardId: "12055",
    name: "Xã Giai Phạm",
  },
  {
    districtId: "327",
    wardId: "12058",
    name: "Xã Nghĩa Hiệp",
  },
  {
    districtId: "327",
    wardId: "12061",
    name: "Xã Đồng Than",
  },
  {
    districtId: "327",
    wardId: "12064",
    name: "Xã Ngọc Long",
  },
  {
    districtId: "327",
    wardId: "12067",
    name: "Xã Liêu Xá",
  },
  {
    districtId: "327",
    wardId: "12070",
    name: "Xã Hoàn Long",
  },
  {
    districtId: "327",
    wardId: "12073",
    name: "Xã Tân Lập",
  },
  {
    districtId: "327",
    wardId: "12076",
    name: "Xã Thanh Long",
  },
  {
    districtId: "327",
    wardId: "12079",
    name: "Xã Yên Phú",
  },
  {
    districtId: "327",
    wardId: "12082",
    name: "Xã Việt Cường",
  },
  {
    districtId: "327",
    wardId: "12085",
    name: "Xã Trung Hòa",
  },
  {
    districtId: "327",
    wardId: "12088",
    name: "Xã Yên Hòa",
  },
  {
    districtId: "327",
    wardId: "12091",
    name: "Xã Minh Châu",
  },
  {
    districtId: "327",
    wardId: "12094",
    name: "Xã Trung Hưng",
  },
  {
    districtId: "327",
    wardId: "12097",
    name: "Xã Lý Thường Kiệt",
  },
  {
    districtId: "327",
    wardId: "12100",
    name: "Xã Tân Việt",
  },
  {
    districtId: "328",
    wardId: "12103",
    name: "Phường Bần Yên Nhân",
  },
  {
    districtId: "328",
    wardId: "12106",
    name: "Phường Phan Đình Phùng",
  },
  {
    districtId: "328",
    wardId: "12109",
    name: "Xã Cẩm Xá",
  },
  {
    districtId: "328",
    wardId: "12112",
    name: "Xã Dương Quang",
  },
  {
    districtId: "328",
    wardId: "12115",
    name: "Xã Hòa Phong",
  },
  {
    districtId: "328",
    wardId: "12118",
    name: "Phường Nhân Hòa",
  },
  {
    districtId: "328",
    wardId: "12121",
    name: "Phường Dị Sử",
  },
  {
    districtId: "328",
    wardId: "12124",
    name: "Phường Bạch Sam",
  },
  {
    districtId: "328",
    wardId: "12127",
    name: "Phường Minh Đức",
  },
  {
    districtId: "328",
    wardId: "12130",
    name: "Phường Phùng Chí Kiên",
  },
  {
    districtId: "328",
    wardId: "12133",
    name: "Xã Xuân Dục",
  },
  {
    districtId: "328",
    wardId: "12136",
    name: "Xã Ngọc Lâm",
  },
  {
    districtId: "328",
    wardId: "12139",
    name: "Xã Hưng Long",
  },
  {
    districtId: "329",
    wardId: "12142",
    name: "Thị trấn Ân Thi",
  },
  {
    districtId: "329",
    wardId: "12145",
    name: "Xã Phù Ủng",
  },
  {
    districtId: "329",
    wardId: "12148",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "329",
    wardId: "12151",
    name: "Xã Bãi Sậy",
  },
  {
    districtId: "329",
    wardId: "12154",
    name: "Xã Đào Dương",
  },
  {
    districtId: "329",
    wardId: "12157",
    name: "Xã Tân Phúc",
  },
  {
    districtId: "329",
    wardId: "12160",
    name: "Xã Vân Du",
  },
  {
    districtId: "329",
    wardId: "12163",
    name: "Xã Quang Vinh",
  },
  {
    districtId: "329",
    wardId: "12166",
    name: "Xã Xuân Trúc",
  },
  {
    districtId: "329",
    wardId: "12169",
    name: "Xã Hoàng Hoa Thám",
  },
  {
    districtId: "329",
    wardId: "12172",
    name: "Xã Quảng Lãng",
  },
  {
    districtId: "329",
    wardId: "12175",
    name: "Xã Văn Nhuệ",
  },
  {
    districtId: "329",
    wardId: "12178",
    name: "Xã Đặng Lễ",
  },
  {
    districtId: "329",
    wardId: "12181",
    name: "Xã Cẩm Ninh",
  },
  {
    districtId: "329",
    wardId: "12184",
    name: "Xã Nguyễn Trãi",
  },
  {
    districtId: "329",
    wardId: "12187",
    name: "Xã Đa Lộc",
  },
  {
    districtId: "329",
    wardId: "12190",
    name: "Xã Hồ Tùng Mậu",
  },
  {
    districtId: "329",
    wardId: "12193",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "329",
    wardId: "12196",
    name: "Xã Hồng Vân",
  },
  {
    districtId: "329",
    wardId: "12199",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "329",
    wardId: "12202",
    name: "Xã Hạ Lễ",
  },
  {
    districtId: "330",
    wardId: "12205",
    name: "Thị trấn Khoái Châu",
  },
  {
    districtId: "330",
    wardId: "12208",
    name: "Xã Đông Tảo",
  },
  {
    districtId: "330",
    wardId: "12211",
    name: "Xã Bình Minh",
  },
  {
    districtId: "330",
    wardId: "12214",
    name: "Xã Dạ Trạch",
  },
  {
    districtId: "330",
    wardId: "12217",
    name: "Xã Hàm Tử",
  },
  {
    districtId: "330",
    wardId: "12220",
    name: "Xã Ông Đình",
  },
  {
    districtId: "330",
    wardId: "12223",
    name: "Xã Tân Dân",
  },
  {
    districtId: "330",
    wardId: "12226",
    name: "Xã Tứ Dân",
  },
  {
    districtId: "330",
    wardId: "12229",
    name: "Xã An Vĩ",
  },
  {
    districtId: "330",
    wardId: "12232",
    name: "Xã Đông Kết",
  },
  {
    districtId: "330",
    wardId: "12235",
    name: "Xã Bình Kiều",
  },
  {
    districtId: "330",
    wardId: "12238",
    name: "Xã Dân Tiến",
  },
  {
    districtId: "330",
    wardId: "12241",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "330",
    wardId: "12244",
    name: "Xã Hồng Tiến",
  },
  {
    districtId: "330",
    wardId: "12247",
    name: "Xã Tân Châu",
  },
  {
    districtId: "330",
    wardId: "12250",
    name: "Xã Liên Khê",
  },
  {
    districtId: "330",
    wardId: "12253",
    name: "Xã Phùng Hưng",
  },
  {
    districtId: "330",
    wardId: "12256",
    name: "Xã Việt Hòa",
  },
  {
    districtId: "330",
    wardId: "12259",
    name: "Xã Đông Ninh",
  },
  {
    districtId: "330",
    wardId: "12262",
    name: "Xã Đại Tập",
  },
  {
    districtId: "330",
    wardId: "12265",
    name: "Xã Chí Tân",
  },
  {
    districtId: "330",
    wardId: "12268",
    name: "Xã Đại Hưng",
  },
  {
    districtId: "330",
    wardId: "12271",
    name: "Xã Thuần Hưng",
  },
  {
    districtId: "330",
    wardId: "12274",
    name: "Xã Thành Công",
  },
  {
    districtId: "330",
    wardId: "12277",
    name: "Xã Nhuế Dương",
  },
  {
    districtId: "331",
    wardId: "12280",
    name: "Thị trấn Lương Bằng",
  },
  {
    districtId: "331",
    wardId: "12283",
    name: "Xã Nghĩa Dân",
  },
  {
    districtId: "331",
    wardId: "12286",
    name: "Xã Toàn Thắng",
  },
  {
    districtId: "331",
    wardId: "12289",
    name: "Xã Vĩnh Xá",
  },
  {
    districtId: "331",
    wardId: "12292",
    name: "Xã Phạm Ngũ Lão",
  },
  {
    districtId: "331",
    wardId: "12295",
    name: "Xã Thọ Vinh",
  },
  {
    districtId: "331",
    wardId: "12298",
    name: "Xã Đồng Thanh",
  },
  {
    districtId: "331",
    wardId: "12301",
    name: "Xã Song Mai",
  },
  {
    districtId: "331",
    wardId: "12304",
    name: "Xã Chính Nghĩa",
  },
  {
    districtId: "331",
    wardId: "12307",
    name: "Xã Nhân La",
  },
  {
    districtId: "331",
    wardId: "12310",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "331",
    wardId: "12313",
    name: "Xã Mai Động",
  },
  {
    districtId: "331",
    wardId: "12316",
    name: "Xã Đức Hợp",
  },
  {
    districtId: "331",
    wardId: "12319",
    name: "Xã Hùng An",
  },
  {
    districtId: "331",
    wardId: "12322",
    name: "Xã Ngọc Thanh",
  },
  {
    districtId: "331",
    wardId: "12325",
    name: "Xã Vũ Xá",
  },
  {
    districtId: "331",
    wardId: "12328",
    name: "Xã Hiệp Cường",
  },
  {
    districtId: "332",
    wardId: "12337",
    name: "Thị trấn Vương",
  },
  {
    districtId: "332",
    wardId: "12340",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "332",
    wardId: "12343",
    name: "Xã Ngô Quyền",
  },
  {
    districtId: "332",
    wardId: "12346",
    name: "Xã Nhật Tân",
  },
  {
    districtId: "332",
    wardId: "12349",
    name: "Xã Dị Chế",
  },
  {
    districtId: "332",
    wardId: "12352",
    name: "Xã Lệ Xá",
  },
  {
    districtId: "332",
    wardId: "12355",
    name: "Xã An Viên",
  },
  {
    districtId: "332",
    wardId: "12358",
    name: "Xã Đức Thắng",
  },
  {
    districtId: "332",
    wardId: "12361",
    name: "Xã Trung Dũng",
  },
  {
    districtId: "332",
    wardId: "12364",
    name: "Xã Hải Triều",
  },
  {
    districtId: "332",
    wardId: "12367",
    name: "Xã Thủ Sỹ",
  },
  {
    districtId: "332",
    wardId: "12370",
    name: "Xã Thiện Phiến",
  },
  {
    districtId: "332",
    wardId: "12373",
    name: "Xã Thụy Lôi",
  },
  {
    districtId: "332",
    wardId: "12376",
    name: "Xã Cương Chính",
  },
  {
    districtId: "332",
    wardId: "12379",
    name: "Xã Minh Phượng",
  },
  {
    districtId: "333",
    wardId: "12391",
    name: "Thị trấn Trần Cao",
  },
  {
    districtId: "333",
    wardId: "12394",
    name: "Xã Minh Tân",
  },
  {
    districtId: "333",
    wardId: "12397",
    name: "Xã Phan Sào Nam",
  },
  {
    districtId: "333",
    wardId: "12400",
    name: "Xã Quang Hưng",
  },
  {
    districtId: "333",
    wardId: "12403",
    name: "Xã Minh Hoàng",
  },
  {
    districtId: "333",
    wardId: "12406",
    name: "Xã Đoàn Đào",
  },
  {
    districtId: "333",
    wardId: "12409",
    name: "Xã Tống Phan",
  },
  {
    districtId: "333",
    wardId: "12412",
    name: "Xã Đình Cao",
  },
  {
    districtId: "333",
    wardId: "12415",
    name: "Xã Nhật Quang",
  },
  {
    districtId: "333",
    wardId: "12418",
    name: "Xã Tiền Tiến",
  },
  {
    districtId: "333",
    wardId: "12421",
    name: "Xã Tam Đa",
  },
  {
    districtId: "333",
    wardId: "12424",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "333",
    wardId: "12427",
    name: "Xã Nguyên Hòa",
  },
  {
    districtId: "333",
    wardId: "12430",
    name: "Xã Tống Trân",
  },
  {
    districtId: "336",
    wardId: "12433",
    name: "Phường Lê Hồng Phong",
  },
  {
    districtId: "336",
    wardId: "12436",
    name: "Phường Bồ Xuyên",
  },
  {
    districtId: "336",
    wardId: "12439",
    name: "Phường Đề Thám",
  },
  {
    districtId: "336",
    wardId: "12442",
    name: "Phường Kỳ Bá",
  },
  {
    districtId: "336",
    wardId: "12445",
    name: "Phường Quang Trung",
  },
  {
    districtId: "336",
    wardId: "12448",
    name: "Phường Phú Khánh",
  },
  {
    districtId: "336",
    wardId: "12451",
    name: "Phường Tiền Phong",
  },
  {
    districtId: "336",
    wardId: "12452",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "336",
    wardId: "12454",
    name: "Phường Trần Lãm",
  },
  {
    districtId: "336",
    wardId: "12457",
    name: "Xã Đông Hòa",
  },
  {
    districtId: "336",
    wardId: "12460",
    name: "Phường Hoàng Diệu",
  },
  {
    districtId: "336",
    wardId: "12463",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "336",
    wardId: "12466",
    name: "Xã Vũ Phúc",
  },
  {
    districtId: "336",
    wardId: "12469",
    name: "Xã Vũ Chính",
  },
  {
    districtId: "336",
    wardId: "12817",
    name: "Xã Đông Mỹ",
  },
  {
    districtId: "336",
    wardId: "12820",
    name: "Xã Đông Thọ",
  },
  {
    districtId: "336",
    wardId: "13084",
    name: "Xã Vũ Đông",
  },
  {
    districtId: "336",
    wardId: "13108",
    name: "Xã Vũ Lạc",
  },
  {
    districtId: "336",
    wardId: "13225",
    name: "Xã Tân Bình",
  },
  {
    districtId: "338",
    wardId: "12472",
    name: "Thị trấn Quỳnh Côi",
  },
  {
    districtId: "338",
    wardId: "12475",
    name: "Xã An Khê",
  },
  {
    districtId: "338",
    wardId: "12478",
    name: "Xã An Đồng",
  },
  {
    districtId: "338",
    wardId: "12481",
    name: "Xã Quỳnh Hoa",
  },
  {
    districtId: "338",
    wardId: "12484",
    name: "Xã Quỳnh Lâm",
  },
  {
    districtId: "338",
    wardId: "12487",
    name: "Xã Quỳnh Thọ",
  },
  {
    districtId: "338",
    wardId: "12490",
    name: "Xã An Hiệp",
  },
  {
    districtId: "338",
    wardId: "12493",
    name: "Xã Quỳnh Hoàng",
  },
  {
    districtId: "338",
    wardId: "12496",
    name: "Xã Quỳnh Giao",
  },
  {
    districtId: "338",
    wardId: "12499",
    name: "Xã An Thái",
  },
  {
    districtId: "338",
    wardId: "12502",
    name: "Xã An Cầu",
  },
  {
    districtId: "338",
    wardId: "12505",
    name: "Xã Quỳnh Hồng",
  },
  {
    districtId: "338",
    wardId: "12508",
    name: "Xã Quỳnh Khê",
  },
  {
    districtId: "338",
    wardId: "12511",
    name: "Xã Quỳnh Minh",
  },
  {
    districtId: "338",
    wardId: "12514",
    name: "Xã An Ninh",
  },
  {
    districtId: "338",
    wardId: "12517",
    name: "Xã Quỳnh Ngọc",
  },
  {
    districtId: "338",
    wardId: "12520",
    name: "Xã Quỳnh Hải",
  },
  {
    districtId: "338",
    wardId: "12523",
    name: "Thị trấn An Bài",
  },
  {
    districtId: "338",
    wardId: "12526",
    name: "Xã An Ấp",
  },
  {
    districtId: "338",
    wardId: "12529",
    name: "Xã Quỳnh Hội",
  },
  {
    districtId: "338",
    wardId: "12532",
    name: "Xã Châu Sơn",
  },
  {
    districtId: "338",
    wardId: "12535",
    name: "Xã Quỳnh Mỹ",
  },
  {
    districtId: "338",
    wardId: "12538",
    name: "Xã An Quí",
  },
  {
    districtId: "338",
    wardId: "12541",
    name: "Xã An Thanh",
  },
  {
    districtId: "338",
    wardId: "12547",
    name: "Xã An Vũ",
  },
  {
    districtId: "338",
    wardId: "12550",
    name: "Xã An Lễ",
  },
  {
    districtId: "338",
    wardId: "12553",
    name: "Xã Quỳnh Hưng",
  },
  {
    districtId: "338",
    wardId: "12556",
    name: "Xã Quỳnh Bảo",
  },
  {
    districtId: "338",
    wardId: "12559",
    name: "Xã An Mỹ",
  },
  {
    districtId: "338",
    wardId: "12562",
    name: "Xã Quỳnh Nguyên",
  },
  {
    districtId: "338",
    wardId: "12565",
    name: "Xã An Vinh",
  },
  {
    districtId: "338",
    wardId: "12568",
    name: "Xã Quỳnh Xá",
  },
  {
    districtId: "338",
    wardId: "12571",
    name: "Xã An Dục",
  },
  {
    districtId: "338",
    wardId: "12574",
    name: "Xã Đông Hải",
  },
  {
    districtId: "338",
    wardId: "12577",
    name: "Xã Quỳnh Trang",
  },
  {
    districtId: "338",
    wardId: "12580",
    name: "Xã An Tràng",
  },
  {
    districtId: "338",
    wardId: "12583",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "339",
    wardId: "12586",
    name: "Thị trấn Hưng Hà",
  },
  {
    districtId: "339",
    wardId: "12589",
    name: "Xã Điệp Nông",
  },
  {
    districtId: "339",
    wardId: "12592",
    name: "Xã Tân Lễ",
  },
  {
    districtId: "339",
    wardId: "12595",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "339",
    wardId: "12598",
    name: "Xã Dân Chủ",
  },
  {
    districtId: "339",
    wardId: "12601",
    name: "Xã Canh Tân",
  },
  {
    districtId: "339",
    wardId: "12604",
    name: "Xã Hòa Tiến",
  },
  {
    districtId: "339",
    wardId: "12607",
    name: "Xã Hùng Dũng",
  },
  {
    districtId: "339",
    wardId: "12610",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "339",
    wardId: "12613",
    name: "Thị trấn Hưng Nhân",
  },
  {
    districtId: "339",
    wardId: "12616",
    name: "Xã Đoan Hùng",
  },
  {
    districtId: "339",
    wardId: "12619",
    name: "Xã Duyên Hải",
  },
  {
    districtId: "339",
    wardId: "12622",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "339",
    wardId: "12625",
    name: "Xã Văn Cẩm",
  },
  {
    districtId: "339",
    wardId: "12628",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "339",
    wardId: "12631",
    name: "Xã Đông Đô",
  },
  {
    districtId: "339",
    wardId: "12634",
    name: "Xã Phúc Khánh",
  },
  {
    districtId: "339",
    wardId: "12637",
    name: "Xã Liên Hiệp",
  },
  {
    districtId: "339",
    wardId: "12640",
    name: "Xã Tây Đô",
  },
  {
    districtId: "339",
    wardId: "12643",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "339",
    wardId: "12646",
    name: "Xã Tiến Đức",
  },
  {
    districtId: "339",
    wardId: "12649",
    name: "Xã Thái Hưng",
  },
  {
    districtId: "339",
    wardId: "12652",
    name: "Xã Thái Phương",
  },
  {
    districtId: "339",
    wardId: "12655",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "339",
    wardId: "12656",
    name: "Xã Chi Lăng",
  },
  {
    districtId: "339",
    wardId: "12658",
    name: "Xã Minh Khai",
  },
  {
    districtId: "339",
    wardId: "12661",
    name: "Xã Hồng An",
  },
  {
    districtId: "339",
    wardId: "12664",
    name: "Xã Kim Chung",
  },
  {
    districtId: "339",
    wardId: "12667",
    name: "Xã Hồng Lĩnh",
  },
  {
    districtId: "339",
    wardId: "12670",
    name: "Xã Minh Tân",
  },
  {
    districtId: "339",
    wardId: "12673",
    name: "Xã Văn Lang",
  },
  {
    districtId: "339",
    wardId: "12676",
    name: "Xã Độc Lập",
  },
  {
    districtId: "339",
    wardId: "12679",
    name: "Xã Chí Hòa",
  },
  {
    districtId: "339",
    wardId: "12682",
    name: "Xã Minh Hòa",
  },
  {
    districtId: "339",
    wardId: "12685",
    name: "Xã Hồng Minh",
  },
  {
    districtId: "340",
    wardId: "12688",
    name: "Thị trấn Đông Hưng",
  },
  {
    districtId: "340",
    wardId: "12691",
    name: "Xã Đô Lương",
  },
  {
    districtId: "340",
    wardId: "12694",
    name: "Xã Đông Phương",
  },
  {
    districtId: "340",
    wardId: "12697",
    name: "Xã Liên Giang",
  },
  {
    districtId: "340",
    wardId: "12700",
    name: "Xã An Châu",
  },
  {
    districtId: "340",
    wardId: "12703",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "340",
    wardId: "12706",
    name: "Xã Đông Cường",
  },
  {
    districtId: "340",
    wardId: "12709",
    name: "Xã Phú Lương",
  },
  {
    districtId: "340",
    wardId: "12712",
    name: "Xã Mê Linh",
  },
  {
    districtId: "340",
    wardId: "12715",
    name: "Xã Lô Giang",
  },
  {
    districtId: "340",
    wardId: "12718",
    name: "Xã Đông La",
  },
  {
    districtId: "340",
    wardId: "12721",
    name: "Xã Minh Tân",
  },
  {
    districtId: "340",
    wardId: "12724",
    name: "Xã Đông Xá",
  },
  {
    districtId: "340",
    wardId: "12727",
    name: "Xã Chương Dương",
  },
  {
    districtId: "340",
    wardId: "12730",
    name: "Xã Nguyên Xá",
  },
  {
    districtId: "340",
    wardId: "12733",
    name: "Xã Phong Châu",
  },
  {
    districtId: "340",
    wardId: "12736",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "340",
    wardId: "12739",
    name: "Xã Hồng Việt",
  },
  {
    districtId: "340",
    wardId: "12745",
    name: "Xã Hà Giang",
  },
  {
    districtId: "340",
    wardId: "12748",
    name: "Xã Đông Kinh",
  },
  {
    districtId: "340",
    wardId: "12751",
    name: "Xã Đông Hợp",
  },
  {
    districtId: "340",
    wardId: "12754",
    name: "Xã Thăng Long",
  },
  {
    districtId: "340",
    wardId: "12757",
    name: "Xã Đông Các",
  },
  {
    districtId: "340",
    wardId: "12760",
    name: "Xã Phú Châu",
  },
  {
    districtId: "340",
    wardId: "12763",
    name: "Xã Liên Hoa",
  },
  {
    districtId: "340",
    wardId: "12769",
    name: "Xã Đông Tân",
  },
  {
    districtId: "340",
    wardId: "12772",
    name: "Xã Đông Vinh",
  },
  {
    districtId: "340",
    wardId: "12775",
    name: "Xã Đông Động",
  },
  {
    districtId: "340",
    wardId: "12778",
    name: "Xã Hồng Bạch",
  },
  {
    districtId: "340",
    wardId: "12784",
    name: "Xã Trọng Quan",
  },
  {
    districtId: "340",
    wardId: "12790",
    name: "Xã Hồng Giang",
  },
  {
    districtId: "340",
    wardId: "12793",
    name: "Xã Đông Quan",
  },
  {
    districtId: "340",
    wardId: "12796",
    name: "Xã Đông Quang",
  },
  {
    districtId: "340",
    wardId: "12799",
    name: "Xã Đông Xuân",
  },
  {
    districtId: "340",
    wardId: "12802",
    name: "Xã Đông Á",
  },
  {
    districtId: "340",
    wardId: "12808",
    name: "Xã Đông Hoàng",
  },
  {
    districtId: "340",
    wardId: "12811",
    name: "Xã Đông Dương",
  },
  {
    districtId: "340",
    wardId: "12823",
    name: "Xã Minh Phú",
  },
  {
    districtId: "341",
    wardId: "12826",
    name: "Thị trấn Diêm Điền",
  },
  {
    districtId: "341",
    wardId: "12832",
    name: "Xã Thụy Trường",
  },
  {
    districtId: "341",
    wardId: "12841",
    name: "Xã Hồng Dũng",
  },
  {
    districtId: "341",
    wardId: "12844",
    name: "Xã Thụy Quỳnh",
  },
  {
    districtId: "341",
    wardId: "12847",
    name: "Xã An Tân",
  },
  {
    districtId: "341",
    wardId: "12850",
    name: "Xã Thụy Ninh",
  },
  {
    districtId: "341",
    wardId: "12853",
    name: "Xã Thụy Hưng",
  },
  {
    districtId: "341",
    wardId: "12856",
    name: "Xã Thụy Việt",
  },
  {
    districtId: "341",
    wardId: "12859",
    name: "Xã Thụy Văn",
  },
  {
    districtId: "341",
    wardId: "12862",
    name: "Xã Thụy Xuân",
  },
  {
    districtId: "341",
    wardId: "12865",
    name: "Xã Dương Phúc",
  },
  {
    districtId: "341",
    wardId: "12868",
    name: "Xã Thụy Trình",
  },
  {
    districtId: "341",
    wardId: "12871",
    name: "Xã Thụy Bình",
  },
  {
    districtId: "341",
    wardId: "12874",
    name: "Xã Thụy Chính",
  },
  {
    districtId: "341",
    wardId: "12877",
    name: "Xã Thụy Dân",
  },
  {
    districtId: "341",
    wardId: "12880",
    name: "Xã Thụy Hải",
  },
  {
    districtId: "341",
    wardId: "12889",
    name: "Xã Thụy Liên",
  },
  {
    districtId: "341",
    wardId: "12892",
    name: "Xã Thụy Duyên",
  },
  {
    districtId: "341",
    wardId: "12898",
    name: "Xã Thụy Thanh",
  },
  {
    districtId: "341",
    wardId: "12901",
    name: "Xã Thụy Sơn",
  },
  {
    districtId: "341",
    wardId: "12904",
    name: "Xã Thụy Phong",
  },
  {
    districtId: "341",
    wardId: "12907",
    name: "Xã Thái Thượng",
  },
  {
    districtId: "341",
    wardId: "12910",
    name: "Xã Thái Nguyên",
  },
  {
    districtId: "341",
    wardId: "12916",
    name: "Xã Dương Hồng  Thủy",
  },
  {
    districtId: "341",
    wardId: "12919",
    name: "Xã Thái Giang",
  },
  {
    districtId: "341",
    wardId: "12922",
    name: "Xã Hòa An",
  },
  {
    districtId: "341",
    wardId: "12925",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "341",
    wardId: "12934",
    name: "Xã Thái Phúc",
  },
  {
    districtId: "341",
    wardId: "12937",
    name: "Xã Thái Hưng",
  },
  {
    districtId: "341",
    wardId: "12940",
    name: "Xã Thái Đô",
  },
  {
    districtId: "341",
    wardId: "12943",
    name: "Xã Thái Xuyên",
  },
  {
    districtId: "341",
    wardId: "12949",
    name: "Xã  Mỹ Lộc",
  },
  {
    districtId: "341",
    wardId: "12958",
    name: "Xã Tân Học",
  },
  {
    districtId: "341",
    wardId: "12961",
    name: "Xã Thái Thịnh",
  },
  {
    districtId: "341",
    wardId: "12964",
    name: "Xã Thuần Thành",
  },
  {
    districtId: "341",
    wardId: "12967",
    name: "Xã Thái Thọ",
  },
  {
    districtId: "342",
    wardId: "12970",
    name: "Thị trấn Tiền Hải",
  },
  {
    districtId: "342",
    wardId: "12976",
    name: "Xã Đông Trà",
  },
  {
    districtId: "342",
    wardId: "12979",
    name: "Xã Đông Long",
  },
  {
    districtId: "342",
    wardId: "12982",
    name: "Xã Đông Quí",
  },
  {
    districtId: "342",
    wardId: "12985",
    name: "Xã Vũ Lăng",
  },
  {
    districtId: "342",
    wardId: "12988",
    name: "Xã Đông Xuyên",
  },
  {
    districtId: "342",
    wardId: "12991",
    name: "Xã Tây Lương",
  },
  {
    districtId: "342",
    wardId: "12994",
    name: "Xã Tây Ninh",
  },
  {
    districtId: "342",
    wardId: "12997",
    name: "Xã Đông Trung",
  },
  {
    districtId: "342",
    wardId: "13000",
    name: "Xã Đông Hoàng",
  },
  {
    districtId: "342",
    wardId: "13003",
    name: "Xã Đông Minh",
  },
  {
    districtId: "342",
    wardId: "13009",
    name: "Xã Đông Phong",
  },
  {
    districtId: "342",
    wardId: "13012",
    name: "Xã An Ninh",
  },
  {
    districtId: "342",
    wardId: "13018",
    name: "Xã Đông Cơ",
  },
  {
    districtId: "342",
    wardId: "13021",
    name: "Xã Tây Giang",
  },
  {
    districtId: "342",
    wardId: "13024",
    name: "Xã Đông Lâm",
  },
  {
    districtId: "342",
    wardId: "13027",
    name: "Xã Phương Công",
  },
  {
    districtId: "342",
    wardId: "13030",
    name: "Xã Tây Phong",
  },
  {
    districtId: "342",
    wardId: "13033",
    name: "Xã Tây Tiến",
  },
  {
    districtId: "342",
    wardId: "13036",
    name: "Xã Nam Cường",
  },
  {
    districtId: "342",
    wardId: "13039",
    name: "Xã Vân Trường",
  },
  {
    districtId: "342",
    wardId: "13042",
    name: "Xã Nam Thắng",
  },
  {
    districtId: "342",
    wardId: "13045",
    name: "Xã Nam Chính",
  },
  {
    districtId: "342",
    wardId: "13048",
    name: "Xã Bắc Hải",
  },
  {
    districtId: "342",
    wardId: "13051",
    name: "Xã Nam Thịnh",
  },
  {
    districtId: "342",
    wardId: "13054",
    name: "Xã Nam Hà",
  },
  {
    districtId: "342",
    wardId: "13057",
    name: "Xã Nam Thanh",
  },
  {
    districtId: "342",
    wardId: "13060",
    name: "Xã Nam Trung",
  },
  {
    districtId: "342",
    wardId: "13063",
    name: "Xã Nam Hồng",
  },
  {
    districtId: "342",
    wardId: "13066",
    name: "Xã Nam Hưng",
  },
  {
    districtId: "342",
    wardId: "13069",
    name: "Xã Nam Hải",
  },
  {
    districtId: "342",
    wardId: "13072",
    name: "Xã Nam Phú",
  },
  {
    districtId: "343",
    wardId: "13075",
    name: "Thị trấn Kiến Xương",
  },
  {
    districtId: "343",
    wardId: "13078",
    name: "Xã Trà Giang",
  },
  {
    districtId: "343",
    wardId: "13081",
    name: "Xã Quốc Tuấn",
  },
  {
    districtId: "343",
    wardId: "13087",
    name: "Xã An Bình",
  },
  {
    districtId: "343",
    wardId: "13090",
    name: "Xã Tây Sơn",
  },
  {
    districtId: "343",
    wardId: "13093",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "343",
    wardId: "13096",
    name: "Xã Bình Nguyên",
  },
  {
    districtId: "343",
    wardId: "13102",
    name: "Xã Lê Lợi",
  },
  {
    districtId: "343",
    wardId: "13111",
    name: "Xã Vũ Lễ",
  },
  {
    districtId: "343",
    wardId: "13114",
    name: "Xã Thanh Tân",
  },
  {
    districtId: "343",
    wardId: "13117",
    name: "Xã Thượng Hiền",
  },
  {
    districtId: "343",
    wardId: "13120",
    name: "Xã Nam Cao",
  },
  {
    districtId: "343",
    wardId: "13123",
    name: "Xã Đình Phùng",
  },
  {
    districtId: "343",
    wardId: "13126",
    name: "Xã Vũ Ninh",
  },
  {
    districtId: "343",
    wardId: "13129",
    name: "Xã Vũ An",
  },
  {
    districtId: "343",
    wardId: "13132",
    name: "Xã Quang Lịch",
  },
  {
    districtId: "343",
    wardId: "13135",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "343",
    wardId: "13138",
    name: "Xã Bình Minh",
  },
  {
    districtId: "343",
    wardId: "13141",
    name: "Xã Vũ Quí",
  },
  {
    districtId: "343",
    wardId: "13144",
    name: "Xã Quang Bình",
  },
  {
    districtId: "343",
    wardId: "13150",
    name: "Xã Vũ Trung",
  },
  {
    districtId: "343",
    wardId: "13153",
    name: "Xã Vũ Thắng",
  },
  {
    districtId: "343",
    wardId: "13156",
    name: "Xã Vũ Công",
  },
  {
    districtId: "343",
    wardId: "13159",
    name: "Xã Vũ Hòa",
  },
  {
    districtId: "343",
    wardId: "13162",
    name: "Xã Quang Minh",
  },
  {
    districtId: "343",
    wardId: "13165",
    name: "Xã Quang Trung",
  },
  {
    districtId: "343",
    wardId: "13171",
    name: "Xã Minh Quang",
  },
  {
    districtId: "343",
    wardId: "13174",
    name: "Xã Vũ Bình",
  },
  {
    districtId: "343",
    wardId: "13177",
    name: "Xã Minh Tân",
  },
  {
    districtId: "343",
    wardId: "13180",
    name: "Xã Nam Bình",
  },
  {
    districtId: "343",
    wardId: "13183",
    name: "Xã Bình Thanh",
  },
  {
    districtId: "343",
    wardId: "13186",
    name: "Xã Bình Định",
  },
  {
    districtId: "343",
    wardId: "13189",
    name: "Xã Hồng Tiến",
  },
  {
    districtId: "344",
    wardId: "13192",
    name: "Thị trấn Vũ Thư",
  },
  {
    districtId: "344",
    wardId: "13195",
    name: "Xã Hồng Lý",
  },
  {
    districtId: "344",
    wardId: "13198",
    name: "Xã Đồng Thanh",
  },
  {
    districtId: "344",
    wardId: "13201",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "344",
    wardId: "13204",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "344",
    wardId: "13207",
    name: "Xã Phúc Thành",
  },
  {
    districtId: "344",
    wardId: "13210",
    name: "Xã Tân Phong",
  },
  {
    districtId: "344",
    wardId: "13213",
    name: "Xã Song Lãng",
  },
  {
    districtId: "344",
    wardId: "13216",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "344",
    wardId: "13219",
    name: "Xã Việt Hùng",
  },
  {
    districtId: "344",
    wardId: "13222",
    name: "Xã Minh Lãng",
  },
  {
    districtId: "344",
    wardId: "13228",
    name: "Xã Minh Khai",
  },
  {
    districtId: "344",
    wardId: "13231",
    name: "Xã Dũng Nghĩa",
  },
  {
    districtId: "344",
    wardId: "13234",
    name: "Xã Minh Quang",
  },
  {
    districtId: "344",
    wardId: "13237",
    name: "Xã Tam Quang",
  },
  {
    districtId: "344",
    wardId: "13240",
    name: "Xã Tân Lập",
  },
  {
    districtId: "344",
    wardId: "13243",
    name: "Xã Bách Thuận",
  },
  {
    districtId: "344",
    wardId: "13246",
    name: "Xã Tự Tân",
  },
  {
    districtId: "344",
    wardId: "13249",
    name: "Xã Song An",
  },
  {
    districtId: "344",
    wardId: "13252",
    name: "Xã Trung An",
  },
  {
    districtId: "344",
    wardId: "13255",
    name: "Xã Vũ Hội",
  },
  {
    districtId: "344",
    wardId: "13258",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "344",
    wardId: "13261",
    name: "Xã Nguyên Xá",
  },
  {
    districtId: "344",
    wardId: "13264",
    name: "Xã Việt Thuận",
  },
  {
    districtId: "344",
    wardId: "13267",
    name: "Xã Vũ Vinh",
  },
  {
    districtId: "344",
    wardId: "13270",
    name: "Xã Vũ Đoài",
  },
  {
    districtId: "344",
    wardId: "13273",
    name: "Xã Vũ Tiến",
  },
  {
    districtId: "344",
    wardId: "13276",
    name: "Xã Vũ Vân",
  },
  {
    districtId: "344",
    wardId: "13279",
    name: "Xã Duy Nhất",
  },
  {
    districtId: "344",
    wardId: "13282",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "347",
    wardId: "13285",
    name: "Phường Quang Trung",
  },
  {
    districtId: "347",
    wardId: "13288",
    name: "Phường Lương Khánh Thiện",
  },
  {
    districtId: "347",
    wardId: "13291",
    name: "Phường Lê Hồng Phong",
  },
  {
    districtId: "347",
    wardId: "13294",
    name: "Phường Minh Khai",
  },
  {
    districtId: "347",
    wardId: "13297",
    name: "Phường Hai Bà Trưng",
  },
  {
    districtId: "347",
    wardId: "13300",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "347",
    wardId: "13303",
    name: "Phường Lam Hạ",
  },
  {
    districtId: "347",
    wardId: "13306",
    name: "Xã Phù Vân",
  },
  {
    districtId: "347",
    wardId: "13309",
    name: "Phường Liêm Chính",
  },
  {
    districtId: "347",
    wardId: "13312",
    name: "Xã Liêm Chung",
  },
  {
    districtId: "347",
    wardId: "13315",
    name: "Phường Thanh Châu",
  },
  {
    districtId: "347",
    wardId: "13318",
    name: "Phường Châu Sơn",
  },
  {
    districtId: "347",
    wardId: "13366",
    name: "Xã Tiên Tân",
  },
  {
    districtId: "347",
    wardId: "13372",
    name: "Xã Tiên Hiệp",
  },
  {
    districtId: "347",
    wardId: "13381",
    name: "Xã Tiên Hải",
  },
  {
    districtId: "347",
    wardId: "13426",
    name: "Xã Kim Bình",
  },
  {
    districtId: "347",
    wardId: "13444",
    name: "Xã Liêm Tuyền",
  },
  {
    districtId: "347",
    wardId: "13447",
    name: "Xã Liêm Tiết",
  },
  {
    districtId: "347",
    wardId: "13459",
    name: "Phường Thanh Tuyền",
  },
  {
    districtId: "347",
    wardId: "13507",
    name: "Xã Đinh Xá",
  },
  {
    districtId: "347",
    wardId: "13513",
    name: "Xã Trịnh Xá",
  },
  {
    districtId: "349",
    wardId: "13321",
    name: "Phường Đồng Văn",
  },
  {
    districtId: "349",
    wardId: "13324",
    name: "Phường Hòa Mạc",
  },
  {
    districtId: "349",
    wardId: "13327",
    name: "Xã Mộc Bắc",
  },
  {
    districtId: "349",
    wardId: "13330",
    name: "Phường Châu Giang",
  },
  {
    districtId: "349",
    wardId: "13333",
    name: "Phường Bạch Thượng",
  },
  {
    districtId: "349",
    wardId: "13336",
    name: "Phường Duy Minh",
  },
  {
    districtId: "349",
    wardId: "13339",
    name: "Xã Mộc Nam",
  },
  {
    districtId: "349",
    wardId: "13342",
    name: "Phường Duy Hải",
  },
  {
    districtId: "349",
    wardId: "13345",
    name: "Xã Chuyên Ngoại",
  },
  {
    districtId: "349",
    wardId: "13348",
    name: "Phường Yên Bắc",
  },
  {
    districtId: "349",
    wardId: "13351",
    name: "Xã Trác Văn",
  },
  {
    districtId: "349",
    wardId: "13354",
    name: "Phường Tiên Nội",
  },
  {
    districtId: "349",
    wardId: "13357",
    name: "Phường Hoàng Đông",
  },
  {
    districtId: "349",
    wardId: "13360",
    name: "Xã Yên Nam",
  },
  {
    districtId: "349",
    wardId: "13363",
    name: "Xã Tiên Ngoại",
  },
  {
    districtId: "349",
    wardId: "13369",
    name: "Xã Tiên Sơn",
  },
  {
    districtId: "350",
    wardId: "13384",
    name: "Thị trấn Quế",
  },
  {
    districtId: "350",
    wardId: "13387",
    name: "Xã Nguyễn Úy",
  },
  {
    districtId: "350",
    wardId: "13390",
    name: "Xã Đại Cương",
  },
  {
    districtId: "350",
    wardId: "13393",
    name: "Xã Lê Hồ",
  },
  {
    districtId: "350",
    wardId: "13396",
    name: "Xã Tượng Lĩnh",
  },
  {
    districtId: "350",
    wardId: "13399",
    name: "Xã Nhật Tựu",
  },
  {
    districtId: "350",
    wardId: "13402",
    name: "Xã Nhật Tân",
  },
  {
    districtId: "350",
    wardId: "13405",
    name: "Xã Đồng Hóa",
  },
  {
    districtId: "350",
    wardId: "13408",
    name: "Xã Hoàng Tây",
  },
  {
    districtId: "350",
    wardId: "13411",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "350",
    wardId: "13414",
    name: "Xã Thụy Lôi",
  },
  {
    districtId: "350",
    wardId: "13417",
    name: "Xã Văn Xá",
  },
  {
    districtId: "350",
    wardId: "13420",
    name: "Xã Khả Phong",
  },
  {
    districtId: "350",
    wardId: "13423",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "350",
    wardId: "13429",
    name: "Thị trấn Ba Sao",
  },
  {
    districtId: "350",
    wardId: "13432",
    name: "Xã Liên Sơn",
  },
  {
    districtId: "350",
    wardId: "13435",
    name: "Xã Thi Sơn",
  },
  {
    districtId: "350",
    wardId: "13438",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "351",
    wardId: "13441",
    name: "Thị trấn Kiện Khê",
  },
  {
    districtId: "351",
    wardId: "13450",
    name: "Xã Liêm Phong",
  },
  {
    districtId: "351",
    wardId: "13453",
    name: "Xã Thanh Hà",
  },
  {
    districtId: "351",
    wardId: "13456",
    name: "Xã Liêm Cần",
  },
  {
    districtId: "351",
    wardId: "13465",
    name: "Xã Liêm Thuận",
  },
  {
    districtId: "351",
    wardId: "13468",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "351",
    wardId: "13471",
    name: "Xã Thanh Phong",
  },
  {
    districtId: "351",
    wardId: "13474",
    name: "Thị trấn Tân Thanh",
  },
  {
    districtId: "351",
    wardId: "13477",
    name: "Xã Thanh Tân",
  },
  {
    districtId: "351",
    wardId: "13480",
    name: "Xã Liêm Túc",
  },
  {
    districtId: "351",
    wardId: "13483",
    name: "Xã Liêm Sơn",
  },
  {
    districtId: "351",
    wardId: "13486",
    name: "Xã Thanh Hương",
  },
  {
    districtId: "351",
    wardId: "13489",
    name: "Xã Thanh Nghị",
  },
  {
    districtId: "351",
    wardId: "13492",
    name: "Xã Thanh Tâm",
  },
  {
    districtId: "351",
    wardId: "13495",
    name: "Xã Thanh Nguyên",
  },
  {
    districtId: "351",
    wardId: "13498",
    name: "Xã Thanh Hải",
  },
  {
    districtId: "352",
    wardId: "13501",
    name: "Thị trấn Bình Mỹ",
  },
  {
    districtId: "352",
    wardId: "13504",
    name: "Xã Bình Nghĩa",
  },
  {
    districtId: "352",
    wardId: "13510",
    name: "Xã Tràng An",
  },
  {
    districtId: "352",
    wardId: "13516",
    name: "Xã Đồng Du",
  },
  {
    districtId: "352",
    wardId: "13519",
    name: "Xã Ngọc Lũ",
  },
  {
    districtId: "352",
    wardId: "13522",
    name: "Xã Hưng Công",
  },
  {
    districtId: "352",
    wardId: "13525",
    name: "Xã Đồn Xá",
  },
  {
    districtId: "352",
    wardId: "13528",
    name: "Xã An Ninh",
  },
  {
    districtId: "352",
    wardId: "13531",
    name: "Xã Bồ Đề",
  },
  {
    districtId: "352",
    wardId: "13534",
    name: "Xã Bối Cầu",
  },
  {
    districtId: "352",
    wardId: "13540",
    name: "Xã An Nội",
  },
  {
    districtId: "352",
    wardId: "13543",
    name: "Xã Vũ Bản",
  },
  {
    districtId: "352",
    wardId: "13546",
    name: "Xã Trung Lương",
  },
  {
    districtId: "352",
    wardId: "13552",
    name: "Xã An Đổ",
  },
  {
    districtId: "352",
    wardId: "13555",
    name: "Xã La Sơn",
  },
  {
    districtId: "352",
    wardId: "13558",
    name: "Xã Tiêu Động",
  },
  {
    districtId: "352",
    wardId: "13561",
    name: "Xã An Lão",
  },
  {
    districtId: "353",
    wardId: "13567",
    name: "Xã Hợp Lý",
  },
  {
    districtId: "353",
    wardId: "13570",
    name: "Xã Nguyên Lý",
  },
  {
    districtId: "353",
    wardId: "13573",
    name: "Xã Chính Lý",
  },
  {
    districtId: "353",
    wardId: "13576",
    name: "Xã Chân Lý",
  },
  {
    districtId: "353",
    wardId: "13579",
    name: "Xã Đạo Lý",
  },
  {
    districtId: "353",
    wardId: "13582",
    name: "Xã Công Lý",
  },
  {
    districtId: "353",
    wardId: "13585",
    name: "Xã Văn Lý",
  },
  {
    districtId: "353",
    wardId: "13588",
    name: "Xã Bắc Lý",
  },
  {
    districtId: "353",
    wardId: "13591",
    name: "Xã Đức Lý",
  },
  {
    districtId: "353",
    wardId: "13594",
    name: "Xã Trần Hưng Đạo",
  },
  {
    districtId: "353",
    wardId: "13597",
    name: "Thị trấn Vĩnh Trụ",
  },
  {
    districtId: "353",
    wardId: "13600",
    name: "Xã Nhân Thịnh",
  },
  {
    districtId: "353",
    wardId: "13606",
    name: "Xã Nhân Khang",
  },
  {
    districtId: "353",
    wardId: "13609",
    name: "Xã Nhân Mỹ",
  },
  {
    districtId: "353",
    wardId: "13612",
    name: "Xã Nhân Nghĩa",
  },
  {
    districtId: "353",
    wardId: "13615",
    name: "Xã Nhân Chính",
  },
  {
    districtId: "353",
    wardId: "13618",
    name: "Xã Nhân Bình",
  },
  {
    districtId: "353",
    wardId: "13621",
    name: "Xã Phú Phúc",
  },
  {
    districtId: "353",
    wardId: "13624",
    name: "Xã Xuân Khê",
  },
  {
    districtId: "353",
    wardId: "13627",
    name: "Xã Tiến Thắng",
  },
  {
    districtId: "353",
    wardId: "13630",
    name: "Xã Hòa Hậu",
  },
  {
    districtId: "356",
    wardId: "13633",
    name: "Phường Hạ Long",
  },
  {
    districtId: "356",
    wardId: "13636",
    name: "Phường Trần Tế Xương",
  },
  {
    districtId: "356",
    wardId: "13639",
    name: "Phường Vị Hoàng",
  },
  {
    districtId: "356",
    wardId: "13642",
    name: "Phường Vị Xuyên",
  },
  {
    districtId: "356",
    wardId: "13645",
    name: "Phường Quang Trung",
  },
  {
    districtId: "356",
    wardId: "13648",
    name: "Phường Cửa Bắc",
  },
  {
    districtId: "356",
    wardId: "13651",
    name: "Phường Nguyễn Du",
  },
  {
    districtId: "356",
    wardId: "13654",
    name: "Phường Bà Triệu",
  },
  {
    districtId: "356",
    wardId: "13657",
    name: "Phường Trường Thi",
  },
  {
    districtId: "356",
    wardId: "13660",
    name: "Phường Phan Đình Phùng",
  },
  {
    districtId: "356",
    wardId: "13663",
    name: "Phường Ngô Quyền",
  },
  {
    districtId: "356",
    wardId: "13666",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "356",
    wardId: "13669",
    name: "Phường Trần Đăng Ninh",
  },
  {
    districtId: "356",
    wardId: "13672",
    name: "Phường Năng Tĩnh",
  },
  {
    districtId: "356",
    wardId: "13675",
    name: "Phường Văn Miếu",
  },
  {
    districtId: "356",
    wardId: "13678",
    name: "Phường Trần Quang Khải",
  },
  {
    districtId: "356",
    wardId: "13681",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "356",
    wardId: "13684",
    name: "Phường Lộc Hạ",
  },
  {
    districtId: "356",
    wardId: "13687",
    name: "Phường Lộc Vượng",
  },
  {
    districtId: "356",
    wardId: "13690",
    name: "Phường Cửa Nam",
  },
  {
    districtId: "356",
    wardId: "13693",
    name: "Phường Lộc Hòa",
  },
  {
    districtId: "356",
    wardId: "13696",
    name: "Xã Nam Phong",
  },
  {
    districtId: "356",
    wardId: "13699",
    name: "Phường Mỹ Xá",
  },
  {
    districtId: "356",
    wardId: "13702",
    name: "Xã Lộc An",
  },
  {
    districtId: "356",
    wardId: "13705",
    name: "Xã Nam Vân",
  },
  {
    districtId: "358",
    wardId: "13708",
    name: "Thị trấn Mỹ Lộc",
  },
  {
    districtId: "358",
    wardId: "13711",
    name: "Xã Mỹ Hà",
  },
  {
    districtId: "358",
    wardId: "13714",
    name: "Xã Mỹ Tiến",
  },
  {
    districtId: "358",
    wardId: "13717",
    name: "Xã Mỹ Thắng",
  },
  {
    districtId: "358",
    wardId: "13720",
    name: "Xã Mỹ Trung",
  },
  {
    districtId: "358",
    wardId: "13723",
    name: "Xã Mỹ Tân",
  },
  {
    districtId: "358",
    wardId: "13726",
    name: "Xã Mỹ Phúc",
  },
  {
    districtId: "358",
    wardId: "13729",
    name: "Xã Mỹ Hưng",
  },
  {
    districtId: "358",
    wardId: "13732",
    name: "Xã Mỹ Thuận",
  },
  {
    districtId: "358",
    wardId: "13735",
    name: "Xã Mỹ Thịnh",
  },
  {
    districtId: "358",
    wardId: "13738",
    name: "Xã Mỹ Thành",
  },
  {
    districtId: "359",
    wardId: "13741",
    name: "Thị trấn Gôi",
  },
  {
    districtId: "359",
    wardId: "13744",
    name: "Xã Minh Thuận",
  },
  {
    districtId: "359",
    wardId: "13747",
    name: "Xã Hiển Khánh",
  },
  {
    districtId: "359",
    wardId: "13750",
    name: "Xã Tân Khánh",
  },
  {
    districtId: "359",
    wardId: "13753",
    name: "Xã Hợp Hưng",
  },
  {
    districtId: "359",
    wardId: "13756",
    name: "Xã Đại An",
  },
  {
    districtId: "359",
    wardId: "13759",
    name: "Xã Tân Thành",
  },
  {
    districtId: "359",
    wardId: "13762",
    name: "Xã Cộng Hòa",
  },
  {
    districtId: "359",
    wardId: "13765",
    name: "Xã Trung Thành",
  },
  {
    districtId: "359",
    wardId: "13768",
    name: "Xã Quang Trung",
  },
  {
    districtId: "359",
    wardId: "13771",
    name: "Xã Minh Tân",
  },
  {
    districtId: "359",
    wardId: "13774",
    name: "Xã Liên Bảo",
  },
  {
    districtId: "359",
    wardId: "13777",
    name: "Xã Thành Lợi",
  },
  {
    districtId: "359",
    wardId: "13780",
    name: "Xã Kim Thái",
  },
  {
    districtId: "359",
    wardId: "13783",
    name: "Xã Liên Minh",
  },
  {
    districtId: "359",
    wardId: "13786",
    name: "Xã Đại Thắng",
  },
  {
    districtId: "359",
    wardId: "13789",
    name: "Xã Tam Thanh",
  },
  {
    districtId: "359",
    wardId: "13792",
    name: "Xã Vĩnh Hào",
  },
  {
    districtId: "360",
    wardId: "13795",
    name: "Thị trấn Lâm",
  },
  {
    districtId: "360",
    wardId: "13798",
    name: "Xã Yên Trung",
  },
  {
    districtId: "360",
    wardId: "13801",
    name: "Xã Yên Thành",
  },
  {
    districtId: "360",
    wardId: "13804",
    name: "Xã Yên Tân",
  },
  {
    districtId: "360",
    wardId: "13807",
    name: "Xã Yên Lợi",
  },
  {
    districtId: "360",
    wardId: "13810",
    name: "Xã Yên Thọ",
  },
  {
    districtId: "360",
    wardId: "13813",
    name: "Xã Yên Nghĩa",
  },
  {
    districtId: "360",
    wardId: "13816",
    name: "Xã Yên Minh",
  },
  {
    districtId: "360",
    wardId: "13819",
    name: "Xã Yên Phương",
  },
  {
    districtId: "360",
    wardId: "13822",
    name: "Xã Yên Chính",
  },
  {
    districtId: "360",
    wardId: "13825",
    name: "Xã Yên Bình",
  },
  {
    districtId: "360",
    wardId: "13828",
    name: "Xã Yên Phú",
  },
  {
    districtId: "360",
    wardId: "13831",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "360",
    wardId: "13834",
    name: "Xã Yên Dương",
  },
  {
    districtId: "360",
    wardId: "13840",
    name: "Xã Yên Hưng",
  },
  {
    districtId: "360",
    wardId: "13843",
    name: "Xã Yên Khánh",
  },
  {
    districtId: "360",
    wardId: "13846",
    name: "Xã Yên Phong",
  },
  {
    districtId: "360",
    wardId: "13849",
    name: "Xã Yên Ninh",
  },
  {
    districtId: "360",
    wardId: "13852",
    name: "Xã Yên Lương",
  },
  {
    districtId: "360",
    wardId: "13855",
    name: "Xã Yên Hồng",
  },
  {
    districtId: "360",
    wardId: "13858",
    name: "Xã Yên Quang",
  },
  {
    districtId: "360",
    wardId: "13861",
    name: "Xã Yên Tiến",
  },
  {
    districtId: "360",
    wardId: "13864",
    name: "Xã Yên Thắng",
  },
  {
    districtId: "360",
    wardId: "13867",
    name: "Xã Yên Phúc",
  },
  {
    districtId: "360",
    wardId: "13870",
    name: "Xã Yên Cường",
  },
  {
    districtId: "360",
    wardId: "13873",
    name: "Xã Yên Lộc",
  },
  {
    districtId: "360",
    wardId: "13876",
    name: "Xã Yên Bằng",
  },
  {
    districtId: "360",
    wardId: "13879",
    name: "Xã Yên Đồng",
  },
  {
    districtId: "360",
    wardId: "13882",
    name: "Xã Yên Khang",
  },
  {
    districtId: "360",
    wardId: "13885",
    name: "Xã Yên Nhân",
  },
  {
    districtId: "360",
    wardId: "13888",
    name: "Xã Yên Trị",
  },
  {
    districtId: "361",
    wardId: "13891",
    name: "Thị trấn Liễu Đề",
  },
  {
    districtId: "361",
    wardId: "13894",
    name: "Thị trấn Rạng Đông",
  },
  {
    districtId: "361",
    wardId: "13897",
    name: "Xã Nghĩa Đồng",
  },
  {
    districtId: "361",
    wardId: "13900",
    name: "Xã Nghĩa Thịnh",
  },
  {
    districtId: "361",
    wardId: "13903",
    name: "Xã Nghĩa Minh",
  },
  {
    districtId: "361",
    wardId: "13906",
    name: "Xã Nghĩa Thái",
  },
  {
    districtId: "361",
    wardId: "13909",
    name: "Xã Hoàng Nam",
  },
  {
    districtId: "361",
    wardId: "13912",
    name: "Xã Nghĩa Châu",
  },
  {
    districtId: "361",
    wardId: "13915",
    name: "Xã Nghĩa Trung",
  },
  {
    districtId: "361",
    wardId: "13918",
    name: "Xã Nghĩa Sơn",
  },
  {
    districtId: "361",
    wardId: "13921",
    name: "Xã Nghĩa Lạc",
  },
  {
    districtId: "361",
    wardId: "13924",
    name: "Xã Nghĩa Hồng",
  },
  {
    districtId: "361",
    wardId: "13927",
    name: "Xã Nghĩa Phong",
  },
  {
    districtId: "361",
    wardId: "13930",
    name: "Xã Nghĩa Phú",
  },
  {
    districtId: "361",
    wardId: "13933",
    name: "Xã Nghĩa Bình",
  },
  {
    districtId: "361",
    wardId: "13936",
    name: "Thị trấn Quỹ Nhất",
  },
  {
    districtId: "361",
    wardId: "13939",
    name: "Xã Nghĩa Tân",
  },
  {
    districtId: "361",
    wardId: "13942",
    name: "Xã Nghĩa Hùng",
  },
  {
    districtId: "361",
    wardId: "13945",
    name: "Xã Nghĩa Lâm",
  },
  {
    districtId: "361",
    wardId: "13948",
    name: "Xã Nghĩa Thành",
  },
  {
    districtId: "361",
    wardId: "13951",
    name: "Xã Phúc Thắng",
  },
  {
    districtId: "361",
    wardId: "13954",
    name: "Xã Nghĩa Lợi",
  },
  {
    districtId: "361",
    wardId: "13957",
    name: "Xã Nghĩa Hải",
  },
  {
    districtId: "361",
    wardId: "13963",
    name: "Xã Nam Điền",
  },
  {
    districtId: "362",
    wardId: "13966",
    name: "Thị trấn Nam Giang",
  },
  {
    districtId: "362",
    wardId: "13969",
    name: "Xã Nam Mỹ",
  },
  {
    districtId: "362",
    wardId: "13972",
    name: "Xã Điền Xá",
  },
  {
    districtId: "362",
    wardId: "13975",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "362",
    wardId: "13978",
    name: "Xã Nam Thắng",
  },
  {
    districtId: "362",
    wardId: "13981",
    name: "Xã Nam Toàn",
  },
  {
    districtId: "362",
    wardId: "13984",
    name: "Xã Hồng Quang",
  },
  {
    districtId: "362",
    wardId: "13987",
    name: "Xã Tân Thịnh",
  },
  {
    districtId: "362",
    wardId: "13990",
    name: "Xã Nam Cường",
  },
  {
    districtId: "362",
    wardId: "13993",
    name: "Xã Nam Hồng",
  },
  {
    districtId: "362",
    wardId: "13996",
    name: "Xã Nam Hùng",
  },
  {
    districtId: "362",
    wardId: "13999",
    name: "Xã Nam Hoa",
  },
  {
    districtId: "362",
    wardId: "14002",
    name: "Xã Nam Dương",
  },
  {
    districtId: "362",
    wardId: "14005",
    name: "Xã Nam Thanh",
  },
  {
    districtId: "362",
    wardId: "14008",
    name: "Xã Nam Lợi",
  },
  {
    districtId: "362",
    wardId: "14011",
    name: "Xã Bình Minh",
  },
  {
    districtId: "362",
    wardId: "14014",
    name: "Xã Đồng Sơn",
  },
  {
    districtId: "362",
    wardId: "14017",
    name: "Xã Nam Tiến",
  },
  {
    districtId: "362",
    wardId: "14020",
    name: "Xã Nam Hải",
  },
  {
    districtId: "362",
    wardId: "14023",
    name: "Xã Nam Thái",
  },
  {
    districtId: "363",
    wardId: "14026",
    name: "Thị trấn Cổ Lễ",
  },
  {
    districtId: "363",
    wardId: "14029",
    name: "Xã Phương Định",
  },
  {
    districtId: "363",
    wardId: "14032",
    name: "Xã Trực Chính",
  },
  {
    districtId: "363",
    wardId: "14035",
    name: "Xã Trung Đông",
  },
  {
    districtId: "363",
    wardId: "14038",
    name: "Xã Liêm Hải",
  },
  {
    districtId: "363",
    wardId: "14041",
    name: "Xã Trực Tuấn",
  },
  {
    districtId: "363",
    wardId: "14044",
    name: "Xã Việt Hùng",
  },
  {
    districtId: "363",
    wardId: "14047",
    name: "Xã Trực Đạo",
  },
  {
    districtId: "363",
    wardId: "14050",
    name: "Xã Trực Hưng",
  },
  {
    districtId: "363",
    wardId: "14053",
    name: "Xã Trực Nội",
  },
  {
    districtId: "363",
    wardId: "14056",
    name: "Thị trấn Cát Thành",
  },
  {
    districtId: "363",
    wardId: "14059",
    name: "Xã Trực Thanh",
  },
  {
    districtId: "363",
    wardId: "14062",
    name: "Xã Trực Khang",
  },
  {
    districtId: "363",
    wardId: "14065",
    name: "Xã Trực Thuận",
  },
  {
    districtId: "363",
    wardId: "14068",
    name: "Xã Trực Mỹ",
  },
  {
    districtId: "363",
    wardId: "14071",
    name: "Xã Trực Đại",
  },
  {
    districtId: "363",
    wardId: "14074",
    name: "Xã Trực Cường",
  },
  {
    districtId: "363",
    wardId: "14077",
    name: "Thị trấn Ninh Cường",
  },
  {
    districtId: "363",
    wardId: "14080",
    name: "Xã Trực Thái",
  },
  {
    districtId: "363",
    wardId: "14083",
    name: "Xã Trực Hùng",
  },
  {
    districtId: "363",
    wardId: "14086",
    name: "Xã Trực Thắng",
  },
  {
    districtId: "364",
    wardId: "14089",
    name: "Thị trấn Xuân Trường",
  },
  {
    districtId: "364",
    wardId: "14092",
    name: "Xã Xuân Châu",
  },
  {
    districtId: "364",
    wardId: "14095",
    name: "Xã Xuân Hồng",
  },
  {
    districtId: "364",
    wardId: "14098",
    name: "Xã Xuân Thành",
  },
  {
    districtId: "364",
    wardId: "14101",
    name: "Xã Xuân Thượng",
  },
  {
    districtId: "364",
    wardId: "14104",
    name: "Xã Xuân Phong",
  },
  {
    districtId: "364",
    wardId: "14107",
    name: "Xã Xuân Đài",
  },
  {
    districtId: "364",
    wardId: "14110",
    name: "Xã Xuân Tân",
  },
  {
    districtId: "364",
    wardId: "14113",
    name: "Xã Xuân Thủy",
  },
  {
    districtId: "364",
    wardId: "14116",
    name: "Xã Xuân Ngọc",
  },
  {
    districtId: "364",
    wardId: "14119",
    name: "Xã Xuân Bắc",
  },
  {
    districtId: "364",
    wardId: "14122",
    name: "Xã Xuân Phương",
  },
  {
    districtId: "364",
    wardId: "14125",
    name: "Xã Thọ Nghiệp",
  },
  {
    districtId: "364",
    wardId: "14128",
    name: "Xã Xuân Phú",
  },
  {
    districtId: "364",
    wardId: "14131",
    name: "Xã Xuân Trung",
  },
  {
    districtId: "364",
    wardId: "14134",
    name: "Xã Xuân Vinh",
  },
  {
    districtId: "364",
    wardId: "14137",
    name: "Xã Xuân Kiên",
  },
  {
    districtId: "364",
    wardId: "14140",
    name: "Xã Xuân Tiến",
  },
  {
    districtId: "364",
    wardId: "14143",
    name: "Xã Xuân Ninh",
  },
  {
    districtId: "364",
    wardId: "14146",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "365",
    wardId: "14149",
    name: "Thị trấn Ngô Đồng",
  },
  {
    districtId: "365",
    wardId: "14152",
    name: "Thị trấn Quất Lâm",
  },
  {
    districtId: "365",
    wardId: "14155",
    name: "Xã Giao Hương",
  },
  {
    districtId: "365",
    wardId: "14158",
    name: "Xã Hồng Thuận",
  },
  {
    districtId: "365",
    wardId: "14161",
    name: "Xã Giao Thiện",
  },
  {
    districtId: "365",
    wardId: "14164",
    name: "Xã Giao Thanh",
  },
  {
    districtId: "365",
    wardId: "14167",
    name: "Xã Hoành Sơn",
  },
  {
    districtId: "365",
    wardId: "14170",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "365",
    wardId: "14173",
    name: "Xã Giao Tiến",
  },
  {
    districtId: "365",
    wardId: "14176",
    name: "Xã Giao Hà",
  },
  {
    districtId: "365",
    wardId: "14179",
    name: "Xã Giao Nhân",
  },
  {
    districtId: "365",
    wardId: "14182",
    name: "Xã Giao An",
  },
  {
    districtId: "365",
    wardId: "14185",
    name: "Xã Giao Lạc",
  },
  {
    districtId: "365",
    wardId: "14188",
    name: "Xã Giao Châu",
  },
  {
    districtId: "365",
    wardId: "14191",
    name: "Xã Giao Tân",
  },
  {
    districtId: "365",
    wardId: "14194",
    name: "Xã Giao Yến",
  },
  {
    districtId: "365",
    wardId: "14197",
    name: "Xã Giao Xuân",
  },
  {
    districtId: "365",
    wardId: "14200",
    name: "Xã Giao Thịnh",
  },
  {
    districtId: "365",
    wardId: "14203",
    name: "Xã Giao Hải",
  },
  {
    districtId: "365",
    wardId: "14206",
    name: "Xã Bạch Long",
  },
  {
    districtId: "365",
    wardId: "14209",
    name: "Xã Giao Long",
  },
  {
    districtId: "365",
    wardId: "14212",
    name: "Xã Giao Phong",
  },
  {
    districtId: "366",
    wardId: "14215",
    name: "Thị trấn Yên Định",
  },
  {
    districtId: "366",
    wardId: "14218",
    name: "Thị trấn Cồn",
  },
  {
    districtId: "366",
    wardId: "14221",
    name: "Thị trấn Thịnh Long",
  },
  {
    districtId: "366",
    wardId: "14224",
    name: "Xã Hải Nam",
  },
  {
    districtId: "366",
    wardId: "14227",
    name: "Xã Hải Trung",
  },
  {
    districtId: "366",
    wardId: "14230",
    name: "Xã Hải Vân",
  },
  {
    districtId: "366",
    wardId: "14233",
    name: "Xã Hải Minh",
  },
  {
    districtId: "366",
    wardId: "14236",
    name: "Xã Hải Anh",
  },
  {
    districtId: "366",
    wardId: "14239",
    name: "Xã Hải Hưng",
  },
  {
    districtId: "366",
    wardId: "14242",
    name: "Xã Hải Bắc",
  },
  {
    districtId: "366",
    wardId: "14245",
    name: "Xã Hải Phúc",
  },
  {
    districtId: "366",
    wardId: "14248",
    name: "Xã Hải Thanh",
  },
  {
    districtId: "366",
    wardId: "14251",
    name: "Xã Hải Hà",
  },
  {
    districtId: "366",
    wardId: "14254",
    name: "Xã Hải Long",
  },
  {
    districtId: "366",
    wardId: "14257",
    name: "Xã Hải Phương",
  },
  {
    districtId: "366",
    wardId: "14260",
    name: "Xã Hải Đường",
  },
  {
    districtId: "366",
    wardId: "14263",
    name: "Xã Hải Lộc",
  },
  {
    districtId: "366",
    wardId: "14266",
    name: "Xã Hải Quang",
  },
  {
    districtId: "366",
    wardId: "14269",
    name: "Xã Hải Đông",
  },
  {
    districtId: "366",
    wardId: "14272",
    name: "Xã Hải Sơn",
  },
  {
    districtId: "366",
    wardId: "14275",
    name: "Xã Hải Tân",
  },
  {
    districtId: "366",
    wardId: "14281",
    name: "Xã Hải Phong",
  },
  {
    districtId: "366",
    wardId: "14284",
    name: "Xã Hải An",
  },
  {
    districtId: "366",
    wardId: "14287",
    name: "Xã Hải Tây",
  },
  {
    districtId: "366",
    wardId: "14290",
    name: "Xã Hải Lý",
  },
  {
    districtId: "366",
    wardId: "14293",
    name: "Xã Hải Phú",
  },
  {
    districtId: "366",
    wardId: "14296",
    name: "Xã Hải Giang",
  },
  {
    districtId: "366",
    wardId: "14299",
    name: "Xã Hải Cường",
  },
  {
    districtId: "366",
    wardId: "14302",
    name: "Xã Hải Ninh",
  },
  {
    districtId: "366",
    wardId: "14305",
    name: "Xã Hải Chính",
  },
  {
    districtId: "366",
    wardId: "14308",
    name: "Xã Hải Xuân",
  },
  {
    districtId: "366",
    wardId: "14311",
    name: "Xã Hải Châu",
  },
  {
    districtId: "366",
    wardId: "14314",
    name: "Xã Hải Triều",
  },
  {
    districtId: "366",
    wardId: "14317",
    name: "Xã Hải Hòa",
  },
  {
    districtId: "369",
    wardId: "14320",
    name: "Phường Đông Thành",
  },
  {
    districtId: "369",
    wardId: "14323",
    name: "Phường Tân Thành",
  },
  {
    districtId: "369",
    wardId: "14326",
    name: "Phường Thanh Bình",
  },
  {
    districtId: "369",
    wardId: "14329",
    name: "Phường Vân Giang",
  },
  {
    districtId: "369",
    wardId: "14332",
    name: "Phường Bích Đào",
  },
  {
    districtId: "369",
    wardId: "14335",
    name: "Phường Phúc Thành",
  },
  {
    districtId: "369",
    wardId: "14338",
    name: "Phường Nam Bình",
  },
  {
    districtId: "369",
    wardId: "14341",
    name: "Phường Nam Thành",
  },
  {
    districtId: "369",
    wardId: "14344",
    name: "Phường Ninh Khánh",
  },
  {
    districtId: "369",
    wardId: "14347",
    name: "Xã Ninh Nhất",
  },
  {
    districtId: "369",
    wardId: "14350",
    name: "Xã Ninh Tiến",
  },
  {
    districtId: "369",
    wardId: "14353",
    name: "Xã Ninh Phúc",
  },
  {
    districtId: "369",
    wardId: "14356",
    name: "Phường Ninh Sơn",
  },
  {
    districtId: "369",
    wardId: "14359",
    name: "Phường Ninh Phong",
  },
  {
    districtId: "370",
    wardId: "14362",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "370",
    wardId: "14365",
    name: "Phường Trung Sơn",
  },
  {
    districtId: "370",
    wardId: "14368",
    name: "Phường Nam Sơn",
  },
  {
    districtId: "370",
    wardId: "14369",
    name: "Phường Tây Sơn",
  },
  {
    districtId: "370",
    wardId: "14371",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "370",
    wardId: "14374",
    name: "Phường Yên Bình",
  },
  {
    districtId: "370",
    wardId: "14375",
    name: "Phường Tân Bình",
  },
  {
    districtId: "370",
    wardId: "14377",
    name: "Xã Quang Sơn",
  },
  {
    districtId: "370",
    wardId: "14380",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "372",
    wardId: "14383",
    name: "Thị trấn Nho Quan",
  },
  {
    districtId: "372",
    wardId: "14386",
    name: "Xã Xích Thổ",
  },
  {
    districtId: "372",
    wardId: "14389",
    name: "Xã Gia Lâm",
  },
  {
    districtId: "372",
    wardId: "14392",
    name: "Xã Gia Sơn",
  },
  {
    districtId: "372",
    wardId: "14395",
    name: "Xã Thạch Bình",
  },
  {
    districtId: "372",
    wardId: "14398",
    name: "Xã Gia Thủy",
  },
  {
    districtId: "372",
    wardId: "14401",
    name: "Xã Gia Tường",
  },
  {
    districtId: "372",
    wardId: "14404",
    name: "Xã Cúc Phương",
  },
  {
    districtId: "372",
    wardId: "14407",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "372",
    wardId: "14410",
    name: "Xã Đức Long",
  },
  {
    districtId: "372",
    wardId: "14413",
    name: "Xã Lạc Vân",
  },
  {
    districtId: "372",
    wardId: "14416",
    name: "Xã Đồng Phong",
  },
  {
    districtId: "372",
    wardId: "14419",
    name: "Xã Yên Quang",
  },
  {
    districtId: "372",
    wardId: "14422",
    name: "Xã Lạng Phong",
  },
  {
    districtId: "372",
    wardId: "14425",
    name: "Xã Thượng Hòa",
  },
  {
    districtId: "372",
    wardId: "14428",
    name: "Xã Văn Phong",
  },
  {
    districtId: "372",
    wardId: "14431",
    name: "Xã Văn Phương",
  },
  {
    districtId: "372",
    wardId: "14434",
    name: "Xã Thanh Lạc",
  },
  {
    districtId: "372",
    wardId: "14437",
    name: "Xã Sơn Lai",
  },
  {
    districtId: "372",
    wardId: "14440",
    name: "Xã Sơn Thành",
  },
  {
    districtId: "372",
    wardId: "14443",
    name: "Xã Văn Phú",
  },
  {
    districtId: "372",
    wardId: "14446",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "372",
    wardId: "14449",
    name: "Xã Kỳ Phú",
  },
  {
    districtId: "372",
    wardId: "14452",
    name: "Xã Quỳnh Lưu",
  },
  {
    districtId: "372",
    wardId: "14455",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "372",
    wardId: "14458",
    name: "Xã Phú Long",
  },
  {
    districtId: "372",
    wardId: "14461",
    name: "Xã Quảng Lạc",
  },
  {
    districtId: "373",
    wardId: "14464",
    name: "Thị trấn Me",
  },
  {
    districtId: "373",
    wardId: "14467",
    name: "Xã Gia Hòa",
  },
  {
    districtId: "373",
    wardId: "14470",
    name: "Xã Gia Hưng",
  },
  {
    districtId: "373",
    wardId: "14473",
    name: "Xã Liên Sơn",
  },
  {
    districtId: "373",
    wardId: "14476",
    name: "Xã Gia Thanh",
  },
  {
    districtId: "373",
    wardId: "14479",
    name: "Xã Gia Vân",
  },
  {
    districtId: "373",
    wardId: "14482",
    name: "Xã Gia Phú",
  },
  {
    districtId: "373",
    wardId: "14485",
    name: "Xã Gia Xuân",
  },
  {
    districtId: "373",
    wardId: "14488",
    name: "Xã Gia Lập",
  },
  {
    districtId: "373",
    wardId: "14491",
    name: "Xã Gia Vượng",
  },
  {
    districtId: "373",
    wardId: "14494",
    name: "Xã Gia Trấn",
  },
  {
    districtId: "373",
    wardId: "14497",
    name: "Xã Gia Thịnh",
  },
  {
    districtId: "373",
    wardId: "14500",
    name: "Xã Gia Phương",
  },
  {
    districtId: "373",
    wardId: "14503",
    name: "Xã Gia Tân",
  },
  {
    districtId: "373",
    wardId: "14506",
    name: "Xã Gia Thắng",
  },
  {
    districtId: "373",
    wardId: "14509",
    name: "Xã Gia Trung",
  },
  {
    districtId: "373",
    wardId: "14512",
    name: "Xã Gia Minh",
  },
  {
    districtId: "373",
    wardId: "14515",
    name: "Xã Gia Lạc",
  },
  {
    districtId: "373",
    wardId: "14518",
    name: "Xã Gia Tiến",
  },
  {
    districtId: "373",
    wardId: "14521",
    name: "Xã Gia Sinh",
  },
  {
    districtId: "373",
    wardId: "14524",
    name: "Xã Gia Phong",
  },
  {
    districtId: "374",
    wardId: "14527",
    name: "Thị trấn Thiên Tôn",
  },
  {
    districtId: "374",
    wardId: "14530",
    name: "Xã Ninh Giang",
  },
  {
    districtId: "374",
    wardId: "14533",
    name: "Xã Trường Yên",
  },
  {
    districtId: "374",
    wardId: "14536",
    name: "Xã Ninh Khang",
  },
  {
    districtId: "374",
    wardId: "14539",
    name: "Xã Ninh Mỹ",
  },
  {
    districtId: "374",
    wardId: "14542",
    name: "Xã Ninh Hòa",
  },
  {
    districtId: "374",
    wardId: "14545",
    name: "Xã Ninh Xuân",
  },
  {
    districtId: "374",
    wardId: "14548",
    name: "Xã Ninh Hải",
  },
  {
    districtId: "374",
    wardId: "14551",
    name: "Xã Ninh Thắng",
  },
  {
    districtId: "374",
    wardId: "14554",
    name: "Xã Ninh Vân",
  },
  {
    districtId: "374",
    wardId: "14557",
    name: "Xã Ninh An",
  },
  {
    districtId: "375",
    wardId: "14560",
    name: "Thị trấn Yên Ninh",
  },
  {
    districtId: "375",
    wardId: "14563",
    name: "Xã Khánh Tiên",
  },
  {
    districtId: "375",
    wardId: "14566",
    name: "Xã Khánh Phú",
  },
  {
    districtId: "375",
    wardId: "14569",
    name: "Xã Khánh Hòa",
  },
  {
    districtId: "375",
    wardId: "14572",
    name: "Xã Khánh Lợi",
  },
  {
    districtId: "375",
    wardId: "14575",
    name: "Xã Khánh An",
  },
  {
    districtId: "375",
    wardId: "14578",
    name: "Xã Khánh Cường",
  },
  {
    districtId: "375",
    wardId: "14581",
    name: "Xã Khánh Cư",
  },
  {
    districtId: "375",
    wardId: "14584",
    name: "Xã Khánh Thiện",
  },
  {
    districtId: "375",
    wardId: "14587",
    name: "Xã Khánh Hải",
  },
  {
    districtId: "375",
    wardId: "14590",
    name: "Xã Khánh Trung",
  },
  {
    districtId: "375",
    wardId: "14593",
    name: "Xã Khánh Mậu",
  },
  {
    districtId: "375",
    wardId: "14596",
    name: "Xã Khánh Vân",
  },
  {
    districtId: "375",
    wardId: "14599",
    name: "Xã Khánh Hội",
  },
  {
    districtId: "375",
    wardId: "14602",
    name: "Xã Khánh Công",
  },
  {
    districtId: "375",
    wardId: "14608",
    name: "Xã Khánh Thành",
  },
  {
    districtId: "375",
    wardId: "14611",
    name: "Xã Khánh Nhạc",
  },
  {
    districtId: "375",
    wardId: "14614",
    name: "Xã Khánh Thủy",
  },
  {
    districtId: "375",
    wardId: "14617",
    name: "Xã Khánh Hồng",
  },
  {
    districtId: "376",
    wardId: "14620",
    name: "Thị trấn Phát Diệm",
  },
  {
    districtId: "376",
    wardId: "14623",
    name: "Thị trấn Bình Minh",
  },
  {
    districtId: "376",
    wardId: "14629",
    name: "Xã Hồi Ninh",
  },
  {
    districtId: "376",
    wardId: "14632",
    name: "Xã Xuân Chính",
  },
  {
    districtId: "376",
    wardId: "14635",
    name: "Xã Kim Định",
  },
  {
    districtId: "376",
    wardId: "14638",
    name: "Xã Ân Hòa",
  },
  {
    districtId: "376",
    wardId: "14641",
    name: "Xã Hùng Tiến",
  },
  {
    districtId: "376",
    wardId: "14647",
    name: "Xã Quang Thiện",
  },
  {
    districtId: "376",
    wardId: "14650",
    name: "Xã Như Hòa",
  },
  {
    districtId: "376",
    wardId: "14653",
    name: "Xã Chất Bình",
  },
  {
    districtId: "376",
    wardId: "14656",
    name: "Xã Đồng Hướng",
  },
  {
    districtId: "376",
    wardId: "14659",
    name: "Xã Kim Chính",
  },
  {
    districtId: "376",
    wardId: "14662",
    name: "Xã Thượng Kiệm",
  },
  {
    districtId: "376",
    wardId: "14665",
    name: "Xã Lưu Phương",
  },
  {
    districtId: "376",
    wardId: "14668",
    name: "Xã Tân Thành",
  },
  {
    districtId: "376",
    wardId: "14671",
    name: "Xã Yên Lộc",
  },
  {
    districtId: "376",
    wardId: "14674",
    name: "Xã Lai Thành",
  },
  {
    districtId: "376",
    wardId: "14677",
    name: "Xã Định Hóa",
  },
  {
    districtId: "376",
    wardId: "14680",
    name: "Xã Văn Hải",
  },
  {
    districtId: "376",
    wardId: "14683",
    name: "Xã Kim Tân",
  },
  {
    districtId: "376",
    wardId: "14686",
    name: "Xã Kim Mỹ",
  },
  {
    districtId: "376",
    wardId: "14689",
    name: "Xã Cồn Thoi",
  },
  {
    districtId: "376",
    wardId: "14692",
    name: "Xã Kim Hải",
  },
  {
    districtId: "376",
    wardId: "14695",
    name: "Xã Kim Trung",
  },
  {
    districtId: "376",
    wardId: "14698",
    name: "Xã Kim Đông",
  },
  {
    districtId: "377",
    wardId: "14701",
    name: "Thị trấn Yên Thịnh",
  },
  {
    districtId: "377",
    wardId: "14704",
    name: "Xã Khánh Thượng",
  },
  {
    districtId: "377",
    wardId: "14707",
    name: "Xã Khánh Dương",
  },
  {
    districtId: "377",
    wardId: "14710",
    name: "Xã Mai Sơn",
  },
  {
    districtId: "377",
    wardId: "14713",
    name: "Xã Khánh Thịnh",
  },
  {
    districtId: "377",
    wardId: "14719",
    name: "Xã Yên Phong",
  },
  {
    districtId: "377",
    wardId: "14722",
    name: "Xã Yên Hòa",
  },
  {
    districtId: "377",
    wardId: "14725",
    name: "Xã Yên Thắng",
  },
  {
    districtId: "377",
    wardId: "14728",
    name: "Xã Yên Từ",
  },
  {
    districtId: "377",
    wardId: "14731",
    name: "Xã Yên Hưng",
  },
  {
    districtId: "377",
    wardId: "14734",
    name: "Xã Yên Thành",
  },
  {
    districtId: "377",
    wardId: "14737",
    name: "Xã Yên Nhân",
  },
  {
    districtId: "377",
    wardId: "14740",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "377",
    wardId: "14743",
    name: "Xã Yên Mạc",
  },
  {
    districtId: "377",
    wardId: "14746",
    name: "Xã Yên Đồng",
  },
  {
    districtId: "377",
    wardId: "14749",
    name: "Xã Yên Thái",
  },
  {
    districtId: "377",
    wardId: "14752",
    name: "Xã Yên Lâm",
  },
  {
    districtId: "380",
    wardId: "14755",
    name: "Phường Hàm Rồng",
  },
  {
    districtId: "380",
    wardId: "14758",
    name: "Phường Đông Thọ",
  },
  {
    districtId: "380",
    wardId: "14761",
    name: "Phường Nam Ngạn",
  },
  {
    districtId: "380",
    wardId: "14764",
    name: "Phường Trường Thi",
  },
  {
    districtId: "380",
    wardId: "14767",
    name: "Phường Điện Biên",
  },
  {
    districtId: "380",
    wardId: "14770",
    name: "Phường Phú Sơn",
  },
  {
    districtId: "380",
    wardId: "14773",
    name: "Phường Lam Sơn",
  },
  {
    districtId: "380",
    wardId: "14776",
    name: "Phường Ba Đình",
  },
  {
    districtId: "380",
    wardId: "14779",
    name: "Phường Ngọc Trạo",
  },
  {
    districtId: "380",
    wardId: "14782",
    name: "Phường Đông Vệ",
  },
  {
    districtId: "380",
    wardId: "14785",
    name: "Phường Đông Sơn",
  },
  {
    districtId: "380",
    wardId: "14788",
    name: "Phường Tân Sơn",
  },
  {
    districtId: "380",
    wardId: "14791",
    name: "Phường Đông Cương",
  },
  {
    districtId: "380",
    wardId: "14794",
    name: "Phường Đông Hương",
  },
  {
    districtId: "380",
    wardId: "14797",
    name: "Phường Đông Hải",
  },
  {
    districtId: "380",
    wardId: "14800",
    name: "Phường Quảng Hưng",
  },
  {
    districtId: "380",
    wardId: "14803",
    name: "Phường Quảng Thắng",
  },
  {
    districtId: "380",
    wardId: "14806",
    name: "Phường Quảng Thành",
  },
  {
    districtId: "380",
    wardId: "15850",
    name: "Xã Thiệu Vân",
  },
  {
    districtId: "380",
    wardId: "15856",
    name: "Phường Thiệu Khánh",
  },
  {
    districtId: "380",
    wardId: "15859",
    name: "Phường Thiệu Dương",
  },
  {
    districtId: "380",
    wardId: "15913",
    name: "Phường Tào Xuyên",
  },
  {
    districtId: "380",
    wardId: "15922",
    name: "Phường Long Anh",
  },
  {
    districtId: "380",
    wardId: "15925",
    name: "Xã Hoằng Quang",
  },
  {
    districtId: "380",
    wardId: "15970",
    name: "Xã Hoằng Đại",
  },
  {
    districtId: "380",
    wardId: "16396",
    name: "Phường Đông Lĩnh",
  },
  {
    districtId: "380",
    wardId: "16429",
    name: "Xã Đông Vinh",
  },
  {
    districtId: "380",
    wardId: "16432",
    name: "Phường Đông Tân",
  },
  {
    districtId: "380",
    wardId: "16435",
    name: "Phường An Hưng",
  },
  {
    districtId: "380",
    wardId: "16441",
    name: "Phường Quảng Thịnh",
  },
  {
    districtId: "380",
    wardId: "16459",
    name: "Phường Quảng Đông",
  },
  {
    districtId: "380",
    wardId: "16507",
    name: "Phường Quảng Cát",
  },
  {
    districtId: "380",
    wardId: "16522",
    name: "Phường Quảng Phú",
  },
  {
    districtId: "380",
    wardId: "16525",
    name: "Phường Quảng Tâm",
  },
  {
    districtId: "381",
    wardId: "14809",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "381",
    wardId: "14812",
    name: "Phường Ba Đình",
  },
  {
    districtId: "381",
    wardId: "14815",
    name: "Phường Lam Sơn",
  },
  {
    districtId: "381",
    wardId: "14818",
    name: "Phường Ngọc Trạo",
  },
  {
    districtId: "381",
    wardId: "14821",
    name: "Phường Đông Sơn",
  },
  {
    districtId: "381",
    wardId: "14823",
    name: "Phường Phú Sơn",
  },
  {
    districtId: "381",
    wardId: "14824",
    name: "Xã Quang Trung",
  },
  {
    districtId: "382",
    wardId: "14830",
    name: "Phường Trung Sơn",
  },
  {
    districtId: "382",
    wardId: "14833",
    name: "Phường Bắc Sơn",
  },
  {
    districtId: "382",
    wardId: "14836",
    name: "Phường Trường Sơn",
  },
  {
    districtId: "382",
    wardId: "14839",
    name: "Phường Quảng Cư",
  },
  {
    districtId: "382",
    wardId: "14842",
    name: "Phường Quảng Tiến",
  },
  {
    districtId: "382",
    wardId: "16513",
    name: "Xã Quảng Minh",
  },
  {
    districtId: "382",
    wardId: "16516",
    name: "Xã Quảng Hùng",
  },
  {
    districtId: "382",
    wardId: "16528",
    name: "Phường Quảng Thọ",
  },
  {
    districtId: "382",
    wardId: "16531",
    name: "Phường Quảng Châu",
  },
  {
    districtId: "382",
    wardId: "16534",
    name: "Phường Quảng Vinh",
  },
  {
    districtId: "382",
    wardId: "16537",
    name: "Xã Quảng Đại",
  },
  {
    districtId: "384",
    wardId: "14845",
    name: "Thị trấn Mường Lát",
  },
  {
    districtId: "384",
    wardId: "14848",
    name: "Xã Tam Chung",
  },
  {
    districtId: "384",
    wardId: "14854",
    name: "Xã Mường Lý",
  },
  {
    districtId: "384",
    wardId: "14857",
    name: "Xã Trung Lý",
  },
  {
    districtId: "384",
    wardId: "14860",
    name: "Xã Quang Chiểu",
  },
  {
    districtId: "384",
    wardId: "14863",
    name: "Xã Pù Nhi",
  },
  {
    districtId: "384",
    wardId: "14864",
    name: "Xã Nhi Sơn",
  },
  {
    districtId: "384",
    wardId: "14866",
    name: "Xã Mường Chanh",
  },
  {
    districtId: "385",
    wardId: "14869",
    name: "Thị trấn Hồi Xuân",
  },
  {
    districtId: "385",
    wardId: "14872",
    name: "Xã Thành Sơn",
  },
  {
    districtId: "385",
    wardId: "14875",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "385",
    wardId: "14878",
    name: "Xã Phú Thanh",
  },
  {
    districtId: "385",
    wardId: "14881",
    name: "Xã Trung Thành",
  },
  {
    districtId: "385",
    wardId: "14884",
    name: "Xã Phú Lệ",
  },
  {
    districtId: "385",
    wardId: "14887",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "385",
    wardId: "14890",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "385",
    wardId: "14896",
    name: "Xã Hiền Chung",
  },
  {
    districtId: "385",
    wardId: "14899",
    name: "Xã Hiền Kiệt",
  },
  {
    districtId: "385",
    wardId: "14902",
    name: "Xã Nam Tiến",
  },
  {
    districtId: "385",
    wardId: "14908",
    name: "Xã Thiên Phủ",
  },
  {
    districtId: "385",
    wardId: "14911",
    name: "Xã Phú Nghiêm",
  },
  {
    districtId: "385",
    wardId: "14914",
    name: "Xã Nam Xuân",
  },
  {
    districtId: "385",
    wardId: "14917",
    name: "Xã Nam Động",
  },
  {
    districtId: "386",
    wardId: "14923",
    name: "Thị trấn Cành Nàng",
  },
  {
    districtId: "386",
    wardId: "14926",
    name: "Xã Điền Thượng",
  },
  {
    districtId: "386",
    wardId: "14929",
    name: "Xã Điền Hạ",
  },
  {
    districtId: "386",
    wardId: "14932",
    name: "Xã Điền Quang",
  },
  {
    districtId: "386",
    wardId: "14935",
    name: "Xã Điền Trung",
  },
  {
    districtId: "386",
    wardId: "14938",
    name: "Xã Thành Sơn",
  },
  {
    districtId: "386",
    wardId: "14941",
    name: "Xã Lương Ngoại",
  },
  {
    districtId: "386",
    wardId: "14944",
    name: "Xã Ái Thượng",
  },
  {
    districtId: "386",
    wardId: "14947",
    name: "Xã Lương Nội",
  },
  {
    districtId: "386",
    wardId: "14950",
    name: "Xã Điền Lư",
  },
  {
    districtId: "386",
    wardId: "14953",
    name: "Xã Lương Trung",
  },
  {
    districtId: "386",
    wardId: "14956",
    name: "Xã Lũng Niêm",
  },
  {
    districtId: "386",
    wardId: "14959",
    name: "Xã Lũng Cao",
  },
  {
    districtId: "386",
    wardId: "14962",
    name: "Xã Hạ Trung",
  },
  {
    districtId: "386",
    wardId: "14965",
    name: "Xã Cổ Lũng",
  },
  {
    districtId: "386",
    wardId: "14968",
    name: "Xã Thành Lâm",
  },
  {
    districtId: "386",
    wardId: "14971",
    name: "Xã Ban Công",
  },
  {
    districtId: "386",
    wardId: "14974",
    name: "Xã Kỳ Tân",
  },
  {
    districtId: "386",
    wardId: "14977",
    name: "Xã Văn Nho",
  },
  {
    districtId: "386",
    wardId: "14980",
    name: "Xã Thiết Ống",
  },
  {
    districtId: "386",
    wardId: "14986",
    name: "Xã Thiết Kế",
  },
  {
    districtId: "387",
    wardId: "14995",
    name: "Xã Trung Xuân",
  },
  {
    districtId: "387",
    wardId: "14998",
    name: "Xã Trung Thượng",
  },
  {
    districtId: "387",
    wardId: "14999",
    name: "Xã Trung Tiến",
  },
  {
    districtId: "387",
    wardId: "15001",
    name: "Xã Trung Hạ",
  },
  {
    districtId: "387",
    wardId: "15004",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "387",
    wardId: "15007",
    name: "Xã Tam Thanh",
  },
  {
    districtId: "387",
    wardId: "15010",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "387",
    wardId: "15013",
    name: "Xã Na Mèo",
  },
  {
    districtId: "387",
    wardId: "15016",
    name: "Thị trấn Sơn Lư",
  },
  {
    districtId: "387",
    wardId: "15019",
    name: "Xã Tam Lư",
  },
  {
    districtId: "387",
    wardId: "15022",
    name: "Xã Sơn Điện",
  },
  {
    districtId: "387",
    wardId: "15025",
    name: "Xã Mường Mìn",
  },
  {
    districtId: "388",
    wardId: "15031",
    name: "Xã Yên Khương",
  },
  {
    districtId: "388",
    wardId: "15034",
    name: "Xã Yên Thắng",
  },
  {
    districtId: "388",
    wardId: "15037",
    name: "Xã Trí Nang",
  },
  {
    districtId: "388",
    wardId: "15040",
    name: "Xã Giao An",
  },
  {
    districtId: "388",
    wardId: "15043",
    name: "Xã Giao Thiện",
  },
  {
    districtId: "388",
    wardId: "15046",
    name: "Xã Tân Phúc",
  },
  {
    districtId: "388",
    wardId: "15049",
    name: "Xã Tam Văn",
  },
  {
    districtId: "388",
    wardId: "15052",
    name: "Xã Lâm Phú",
  },
  {
    districtId: "388",
    wardId: "15055",
    name: "Thị trấn Lang Chánh",
  },
  {
    districtId: "388",
    wardId: "15058",
    name: "Xã Đồng Lương",
  },
  {
    districtId: "389",
    wardId: "15061",
    name: "Thị Trấn Ngọc Lặc",
  },
  {
    districtId: "389",
    wardId: "15064",
    name: "Xã Lam Sơn",
  },
  {
    districtId: "389",
    wardId: "15067",
    name: "Xã Mỹ Tân",
  },
  {
    districtId: "389",
    wardId: "15070",
    name: "Xã Thúy Sơn",
  },
  {
    districtId: "389",
    wardId: "15073",
    name: "Xã Thạch Lập",
  },
  {
    districtId: "389",
    wardId: "15076",
    name: "Xã Vân Âm",
  },
  {
    districtId: "389",
    wardId: "15079",
    name: "Xã Cao Ngọc",
  },
  {
    districtId: "389",
    wardId: "15085",
    name: "Xã Quang Trung",
  },
  {
    districtId: "389",
    wardId: "15088",
    name: "Xã Đồng Thịnh",
  },
  {
    districtId: "389",
    wardId: "15091",
    name: "Xã Ngọc Liên",
  },
  {
    districtId: "389",
    wardId: "15094",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "389",
    wardId: "15097",
    name: "Xã Lộc Thịnh",
  },
  {
    districtId: "389",
    wardId: "15100",
    name: "Xã Cao Thịnh",
  },
  {
    districtId: "389",
    wardId: "15103",
    name: "Xã Ngọc Trung",
  },
  {
    districtId: "389",
    wardId: "15106",
    name: "Xã Phùng Giáo",
  },
  {
    districtId: "389",
    wardId: "15109",
    name: "Xã Phùng Minh",
  },
  {
    districtId: "389",
    wardId: "15112",
    name: "Xã Phúc Thịnh",
  },
  {
    districtId: "389",
    wardId: "15115",
    name: "Xã Nguyệt Ấn",
  },
  {
    districtId: "389",
    wardId: "15118",
    name: "Xã Kiên Thọ",
  },
  {
    districtId: "389",
    wardId: "15121",
    name: "Xã Minh Tiến",
  },
  {
    districtId: "389",
    wardId: "15124",
    name: "Xã Minh Sơn",
  },
  {
    districtId: "390",
    wardId: "15127",
    name: "Thị trấn Phong Sơn",
  },
  {
    districtId: "390",
    wardId: "15133",
    name: "Xã Cẩm Thành",
  },
  {
    districtId: "390",
    wardId: "15136",
    name: "Xã Cẩm Quý",
  },
  {
    districtId: "390",
    wardId: "15139",
    name: "Xã Cẩm Lương",
  },
  {
    districtId: "390",
    wardId: "15142",
    name: "Xã Cẩm Thạch",
  },
  {
    districtId: "390",
    wardId: "15145",
    name: "Xã Cẩm Liên",
  },
  {
    districtId: "390",
    wardId: "15148",
    name: "Xã Cẩm Giang",
  },
  {
    districtId: "390",
    wardId: "15151",
    name: "Xã Cẩm Bình",
  },
  {
    districtId: "390",
    wardId: "15154",
    name: "Xã Cẩm Tú",
  },
  {
    districtId: "390",
    wardId: "15160",
    name: "Xã Cẩm Châu",
  },
  {
    districtId: "390",
    wardId: "15163",
    name: "Xã Cẩm Tâm",
  },
  {
    districtId: "390",
    wardId: "15169",
    name: "Xã Cẩm Ngọc",
  },
  {
    districtId: "390",
    wardId: "15172",
    name: "Xã Cẩm Long",
  },
  {
    districtId: "390",
    wardId: "15175",
    name: "Xã Cẩm Yên",
  },
  {
    districtId: "390",
    wardId: "15178",
    name: "Xã Cẩm Tân",
  },
  {
    districtId: "390",
    wardId: "15181",
    name: "Xã Cẩm Phú",
  },
  {
    districtId: "390",
    wardId: "15184",
    name: "Xã Cẩm Vân",
  },
  {
    districtId: "391",
    wardId: "15187",
    name: "Thị trấn Kim Tân",
  },
  {
    districtId: "391",
    wardId: "15190",
    name: "Thị trấn Vân Du",
  },
  {
    districtId: "391",
    wardId: "15196",
    name: "Xã Thạch Lâm",
  },
  {
    districtId: "391",
    wardId: "15199",
    name: "Xã Thạch Quảng",
  },
  {
    districtId: "391",
    wardId: "15202",
    name: "Xã Thạch Tượng",
  },
  {
    districtId: "391",
    wardId: "15205",
    name: "Xã Thạch Cẩm",
  },
  {
    districtId: "391",
    wardId: "15208",
    name: "Xã Thạch Sơn",
  },
  {
    districtId: "391",
    wardId: "15211",
    name: "Xã Thạch Bình",
  },
  {
    districtId: "391",
    wardId: "15214",
    name: "Xã Thạch Định",
  },
  {
    districtId: "391",
    wardId: "15217",
    name: "Xã Thạch Đồng",
  },
  {
    districtId: "391",
    wardId: "15220",
    name: "Xã Thạch Long",
  },
  {
    districtId: "391",
    wardId: "15223",
    name: "Xã Thành Mỹ",
  },
  {
    districtId: "391",
    wardId: "15226",
    name: "Xã Thành Yên",
  },
  {
    districtId: "391",
    wardId: "15229",
    name: "Xã Thành Vinh",
  },
  {
    districtId: "391",
    wardId: "15232",
    name: "Xã Thành Minh",
  },
  {
    districtId: "391",
    wardId: "15235",
    name: "Xã Thành Công",
  },
  {
    districtId: "391",
    wardId: "15238",
    name: "Xã Thành Tân",
  },
  {
    districtId: "391",
    wardId: "15241",
    name: "Xã Thành Trực",
  },
  {
    districtId: "391",
    wardId: "15247",
    name: "Xã Thành Tâm",
  },
  {
    districtId: "391",
    wardId: "15250",
    name: "Xã Thành An",
  },
  {
    districtId: "391",
    wardId: "15253",
    name: "Xã Thành Thọ",
  },
  {
    districtId: "391",
    wardId: "15256",
    name: "Xã Thành Tiến",
  },
  {
    districtId: "391",
    wardId: "15259",
    name: "Xã Thành Long",
  },
  {
    districtId: "391",
    wardId: "15265",
    name: "Xã Thành Hưng",
  },
  {
    districtId: "391",
    wardId: "15268",
    name: "Xã Ngọc Trạo",
  },
  {
    districtId: "392",
    wardId: "15271",
    name: "Thị trấn Hà Trung",
  },
  {
    districtId: "392",
    wardId: "15274",
    name: "Xã Hà Long",
  },
  {
    districtId: "392",
    wardId: "15277",
    name: "Xã Hà Vinh",
  },
  {
    districtId: "392",
    wardId: "15280",
    name: "Xã Hà Bắc",
  },
  {
    districtId: "392",
    wardId: "15283",
    name: "Xã Hoạt Giang",
  },
  {
    districtId: "392",
    wardId: "15286",
    name: "Xã Yên Dương",
  },
  {
    districtId: "392",
    wardId: "15292",
    name: "Xã Hà Giang",
  },
  {
    districtId: "392",
    wardId: "15298",
    name: "Xã Lĩnh Toại",
  },
  {
    districtId: "392",
    wardId: "15304",
    name: "Xã Hà Ngọc",
  },
  {
    districtId: "392",
    wardId: "15307",
    name: "Xã Yến Sơn",
  },
  {
    districtId: "392",
    wardId: "15313",
    name: "Xã Hà Sơn",
  },
  {
    districtId: "392",
    wardId: "15316",
    name: "Xã Hà Lĩnh",
  },
  {
    districtId: "392",
    wardId: "15319",
    name: "Xã Hà Đông",
  },
  {
    districtId: "392",
    wardId: "15322",
    name: "Xã Hà Tân",
  },
  {
    districtId: "392",
    wardId: "15325",
    name: "Xã Hà Tiến",
  },
  {
    districtId: "392",
    wardId: "15328",
    name: "Xã Hà Bình",
  },
  {
    districtId: "392",
    wardId: "15331",
    name: "Xã Hà Lai",
  },
  {
    districtId: "392",
    wardId: "15334",
    name: "Xã Hà Châu",
  },
  {
    districtId: "392",
    wardId: "15340",
    name: "Xã Hà Thái",
  },
  {
    districtId: "392",
    wardId: "15343",
    name: "Xã Hà Hải",
  },
  {
    districtId: "393",
    wardId: "15349",
    name: "Thị trấn Vĩnh Lộc",
  },
  {
    districtId: "393",
    wardId: "15352",
    name: "Xã Vĩnh Quang",
  },
  {
    districtId: "393",
    wardId: "15355",
    name: "Xã Vĩnh Yên",
  },
  {
    districtId: "393",
    wardId: "15358",
    name: "Xã Vĩnh Tiến",
  },
  {
    districtId: "393",
    wardId: "15361",
    name: "Xã Vĩnh Long",
  },
  {
    districtId: "393",
    wardId: "15364",
    name: "Xã Vĩnh Phúc",
  },
  {
    districtId: "393",
    wardId: "15367",
    name: "Xã Vĩnh Hưng",
  },
  {
    districtId: "393",
    wardId: "15376",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "393",
    wardId: "15379",
    name: "Xã Vĩnh Hùng",
  },
  {
    districtId: "393",
    wardId: "15382",
    name: "Xã Minh Tân",
  },
  {
    districtId: "393",
    wardId: "15385",
    name: "Xã Ninh Khang",
  },
  {
    districtId: "393",
    wardId: "15388",
    name: "Xã Vĩnh Thịnh",
  },
  {
    districtId: "393",
    wardId: "15391",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "394",
    wardId: "15397",
    name: "Thị trấn Thống Nhất",
  },
  {
    districtId: "394",
    wardId: "15403",
    name: "Thị trấn Yên Lâm",
  },
  {
    districtId: "394",
    wardId: "15406",
    name: "Xã Yên Tâm",
  },
  {
    districtId: "394",
    wardId: "15409",
    name: "Xã Yên Phú",
  },
  {
    districtId: "394",
    wardId: "15412",
    name: "Thị trấn Quý Lộc",
  },
  {
    districtId: "394",
    wardId: "15415",
    name: "Xã Yên Thọ",
  },
  {
    districtId: "394",
    wardId: "15418",
    name: "Xã Yên Trung",
  },
  {
    districtId: "394",
    wardId: "15421",
    name: "Xã Yên Trường",
  },
  {
    districtId: "394",
    wardId: "15427",
    name: "Xã Yên Phong",
  },
  {
    districtId: "394",
    wardId: "15430",
    name: "Xã Yên Thái",
  },
  {
    districtId: "394",
    wardId: "15433",
    name: "Xã Yên Hùng",
  },
  {
    districtId: "394",
    wardId: "15436",
    name: "Xã Yên Thịnh",
  },
  {
    districtId: "394",
    wardId: "15439",
    name: "Xã Yên Ninh",
  },
  {
    districtId: "394",
    wardId: "15442",
    name: "Xã Yên Lạc",
  },
  {
    districtId: "394",
    wardId: "15445",
    name: "Xã Định Tăng",
  },
  {
    districtId: "394",
    wardId: "15448",
    name: "Xã Định Hòa",
  },
  {
    districtId: "394",
    wardId: "15451",
    name: "Xã Định Thành",
  },
  {
    districtId: "394",
    wardId: "15454",
    name: "Xã Định Công",
  },
  {
    districtId: "394",
    wardId: "15457",
    name: "Xã Định Tân",
  },
  {
    districtId: "394",
    wardId: "15460",
    name: "Xã Định Tiến",
  },
  {
    districtId: "394",
    wardId: "15463",
    name: "Xã Định Long",
  },
  {
    districtId: "394",
    wardId: "15466",
    name: "Xã Định Liên",
  },
  {
    districtId: "394",
    wardId: "15469",
    name: "Thị trấn Quán Lào",
  },
  {
    districtId: "394",
    wardId: "15472",
    name: "Xã Định Hưng",
  },
  {
    districtId: "394",
    wardId: "15475",
    name: "Xã Định Hải",
  },
  {
    districtId: "394",
    wardId: "15478",
    name: "Xã Định Bình",
  },
  {
    districtId: "395",
    wardId: "15493",
    name: "Xã Xuân Hồng",
  },
  {
    districtId: "395",
    wardId: "15499",
    name: "Thị trấn Thọ Xuân",
  },
  {
    districtId: "395",
    wardId: "15502",
    name: "Xã Bắc Lương",
  },
  {
    districtId: "395",
    wardId: "15505",
    name: "Xã Nam Giang",
  },
  {
    districtId: "395",
    wardId: "15508",
    name: "Xã Xuân Phong",
  },
  {
    districtId: "395",
    wardId: "15511",
    name: "Xã Thọ Lộc",
  },
  {
    districtId: "395",
    wardId: "15514",
    name: "Xã Xuân Trường",
  },
  {
    districtId: "395",
    wardId: "15517",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "395",
    wardId: "15520",
    name: "Xã Thọ Hải",
  },
  {
    districtId: "395",
    wardId: "15523",
    name: "Xã Tây Hồ",
  },
  {
    districtId: "395",
    wardId: "15526",
    name: "Xã Xuân Giang",
  },
  {
    districtId: "395",
    wardId: "15532",
    name: "Xã Xuân Sinh",
  },
  {
    districtId: "395",
    wardId: "15535",
    name: "Xã Xuân Hưng",
  },
  {
    districtId: "395",
    wardId: "15538",
    name: "Xã Thọ Diên",
  },
  {
    districtId: "395",
    wardId: "15541",
    name: "Xã Thọ Lâm",
  },
  {
    districtId: "395",
    wardId: "15544",
    name: "Xã Thọ Xương",
  },
  {
    districtId: "395",
    wardId: "15547",
    name: "Xã Xuân Bái",
  },
  {
    districtId: "395",
    wardId: "15550",
    name: "Xã Xuân Phú",
  },
  {
    districtId: "395",
    wardId: "15553",
    name: "Thị trấn Sao Vàng",
  },
  {
    districtId: "395",
    wardId: "15556",
    name: "Thị trấn Lam Sơn",
  },
  {
    districtId: "395",
    wardId: "15559",
    name: "Xã Xuân Thiên",
  },
  {
    districtId: "395",
    wardId: "15565",
    name: "Xã Thuận Minh",
  },
  {
    districtId: "395",
    wardId: "15568",
    name: "Xã Thọ Lập",
  },
  {
    districtId: "395",
    wardId: "15571",
    name: "Xã Quảng Phú",
  },
  {
    districtId: "395",
    wardId: "15574",
    name: "Xã Xuân Tín",
  },
  {
    districtId: "395",
    wardId: "15577",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "395",
    wardId: "15583",
    name: "Xã Xuân Lai",
  },
  {
    districtId: "395",
    wardId: "15586",
    name: "Xã Xuân Lập",
  },
  {
    districtId: "395",
    wardId: "15592",
    name: "Xã Xuân Minh",
  },
  {
    districtId: "395",
    wardId: "15598",
    name: "Xã Trường Xuân",
  },
  {
    districtId: "396",
    wardId: "15607",
    name: "Xã Bát Mọt",
  },
  {
    districtId: "396",
    wardId: "15610",
    name: "Xã Yên Nhân",
  },
  {
    districtId: "396",
    wardId: "15619",
    name: "Xã Xuân Lẹ",
  },
  {
    districtId: "396",
    wardId: "15622",
    name: "Xã Vạn Xuân",
  },
  {
    districtId: "396",
    wardId: "15628",
    name: "Xã Lương Sơn",
  },
  {
    districtId: "396",
    wardId: "15631",
    name: "Xã Xuân Cao",
  },
  {
    districtId: "396",
    wardId: "15634",
    name: "Xã Luận Thành",
  },
  {
    districtId: "396",
    wardId: "15637",
    name: "Xã Luận Khê",
  },
  {
    districtId: "396",
    wardId: "15640",
    name: "Xã Xuân Thắng",
  },
  {
    districtId: "396",
    wardId: "15643",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "396",
    wardId: "15646",
    name: "Thị trấn Thường Xuân",
  },
  {
    districtId: "396",
    wardId: "15649",
    name: "Xã Xuân Dương",
  },
  {
    districtId: "396",
    wardId: "15652",
    name: "Xã Thọ Thanh",
  },
  {
    districtId: "396",
    wardId: "15655",
    name: "Xã Ngọc Phụng",
  },
  {
    districtId: "396",
    wardId: "15658",
    name: "Xã Xuân Chinh",
  },
  {
    districtId: "396",
    wardId: "15661",
    name: "Xã Tân Thành",
  },
  {
    districtId: "397",
    wardId: "15664",
    name: "Thị trấn Triệu Sơn",
  },
  {
    districtId: "397",
    wardId: "15667",
    name: "Xã Thọ Sơn",
  },
  {
    districtId: "397",
    wardId: "15670",
    name: "Xã Thọ Bình",
  },
  {
    districtId: "397",
    wardId: "15673",
    name: "Xã Thọ Tiến",
  },
  {
    districtId: "397",
    wardId: "15676",
    name: "Xã Hợp Lý",
  },
  {
    districtId: "397",
    wardId: "15679",
    name: "Xã Hợp Tiến",
  },
  {
    districtId: "397",
    wardId: "15682",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "397",
    wardId: "15685",
    name: "Xã Triệu Thành",
  },
  {
    districtId: "397",
    wardId: "15688",
    name: "Xã Hợp Thắng",
  },
  {
    districtId: "397",
    wardId: "15691",
    name: "Xã Minh Sơn",
  },
  {
    districtId: "397",
    wardId: "15700",
    name: "Xã Dân Lực",
  },
  {
    districtId: "397",
    wardId: "15703",
    name: "Xã Dân Lý",
  },
  {
    districtId: "397",
    wardId: "15706",
    name: "Xã Dân Quyền",
  },
  {
    districtId: "397",
    wardId: "15709",
    name: "Xã An Nông",
  },
  {
    districtId: "397",
    wardId: "15712",
    name: "Xã Văn Sơn",
  },
  {
    districtId: "397",
    wardId: "15715",
    name: "Xã Thái Hòa",
  },
  {
    districtId: "397",
    wardId: "15718",
    name: "Thị trấn Nưa",
  },
  {
    districtId: "397",
    wardId: "15721",
    name: "Xã Đồng Lợi",
  },
  {
    districtId: "397",
    wardId: "15724",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "397",
    wardId: "15727",
    name: "Xã Đồng Thắng",
  },
  {
    districtId: "397",
    wardId: "15730",
    name: "Xã Tiến Nông",
  },
  {
    districtId: "397",
    wardId: "15733",
    name: "Xã Khuyến Nông",
  },
  {
    districtId: "397",
    wardId: "15736",
    name: "Xã Xuân Thịnh",
  },
  {
    districtId: "397",
    wardId: "15739",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "397",
    wardId: "15742",
    name: "Xã Thọ Dân",
  },
  {
    districtId: "397",
    wardId: "15745",
    name: "Xã Xuân Thọ",
  },
  {
    districtId: "397",
    wardId: "15748",
    name: "Xã Thọ Tân",
  },
  {
    districtId: "397",
    wardId: "15751",
    name: "Xã Thọ Ngọc",
  },
  {
    districtId: "397",
    wardId: "15754",
    name: "Xã Thọ Cường",
  },
  {
    districtId: "397",
    wardId: "15757",
    name: "Xã Thọ Phú",
  },
  {
    districtId: "397",
    wardId: "15760",
    name: "Xã Thọ Vực",
  },
  {
    districtId: "397",
    wardId: "15763",
    name: "Xã Thọ Thế",
  },
  {
    districtId: "397",
    wardId: "15766",
    name: "Xã Nông Trường",
  },
  {
    districtId: "397",
    wardId: "15769",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "398",
    wardId: "15772",
    name: "Thị trấn Thiệu Hóa",
  },
  {
    districtId: "398",
    wardId: "15775",
    name: "Xã Thiệu Ngọc",
  },
  {
    districtId: "398",
    wardId: "15778",
    name: "Xã Thiệu Vũ",
  },
  {
    districtId: "398",
    wardId: "15781",
    name: "Xã Thiệu Phúc",
  },
  {
    districtId: "398",
    wardId: "15784",
    name: "Xã Thiệu Tiến",
  },
  {
    districtId: "398",
    wardId: "15787",
    name: "Xã Thiệu Công",
  },
  {
    districtId: "398",
    wardId: "15790",
    name: "Xã Thiệu Phú",
  },
  {
    districtId: "398",
    wardId: "15793",
    name: "Xã Thiệu Long",
  },
  {
    districtId: "398",
    wardId: "15796",
    name: "Xã Thiệu Giang",
  },
  {
    districtId: "398",
    wardId: "15799",
    name: "Xã Thiệu Duy",
  },
  {
    districtId: "398",
    wardId: "15802",
    name: "Xã Thiệu Nguyên",
  },
  {
    districtId: "398",
    wardId: "15805",
    name: "Xã Thiệu Hợp",
  },
  {
    districtId: "398",
    wardId: "15808",
    name: "Xã Thiệu Thịnh",
  },
  {
    districtId: "398",
    wardId: "15811",
    name: "Xã Thiệu Quang",
  },
  {
    districtId: "398",
    wardId: "15814",
    name: "Xã Thiệu Thành",
  },
  {
    districtId: "398",
    wardId: "15817",
    name: "Xã Thiệu Toán",
  },
  {
    districtId: "398",
    wardId: "15820",
    name: "Xã Thiệu Chính",
  },
  {
    districtId: "398",
    wardId: "15823",
    name: "Xã Thiệu Hòa",
  },
  {
    districtId: "398",
    wardId: "15829",
    name: "Xã Minh Tâm",
  },
  {
    districtId: "398",
    wardId: "15832",
    name: "Xã Thiệu Viên",
  },
  {
    districtId: "398",
    wardId: "15835",
    name: "Xã Thiệu Lý",
  },
  {
    districtId: "398",
    wardId: "15838",
    name: "Xã Thiệu Vận",
  },
  {
    districtId: "398",
    wardId: "15841",
    name: "Xã Thiệu Trung",
  },
  {
    districtId: "398",
    wardId: "15847",
    name: "Xã Tân Châu",
  },
  {
    districtId: "398",
    wardId: "15853",
    name: "Xã Thiệu Giao",
  },
  {
    districtId: "399",
    wardId: "15865",
    name: "Thị trấn Bút Sơn",
  },
  {
    districtId: "399",
    wardId: "15871",
    name: "Xã Hoằng Giang",
  },
  {
    districtId: "399",
    wardId: "15877",
    name: "Xã Hoằng Xuân",
  },
  {
    districtId: "399",
    wardId: "15880",
    name: "Xã Hoằng Phượng",
  },
  {
    districtId: "399",
    wardId: "15883",
    name: "Xã Hoằng Phú",
  },
  {
    districtId: "399",
    wardId: "15886",
    name: "Xã Hoằng Quỳ",
  },
  {
    districtId: "399",
    wardId: "15889",
    name: "Xã Hoằng Kim",
  },
  {
    districtId: "399",
    wardId: "15892",
    name: "Xã Hoằng Trung",
  },
  {
    districtId: "399",
    wardId: "15895",
    name: "Xã Hoằng Trinh",
  },
  {
    districtId: "399",
    wardId: "15901",
    name: "Xã Hoằng Sơn",
  },
  {
    districtId: "399",
    wardId: "15907",
    name: "Xã Hoằng Cát",
  },
  {
    districtId: "399",
    wardId: "15910",
    name: "Xã Hoằng Xuyên",
  },
  {
    districtId: "399",
    wardId: "15916",
    name: "Xã Hoằng Quý",
  },
  {
    districtId: "399",
    wardId: "15919",
    name: "Xã Hoằng Hợp",
  },
  {
    districtId: "399",
    wardId: "15928",
    name: "Xã Hoằng Đức",
  },
  {
    districtId: "399",
    wardId: "15937",
    name: "Xã Hoằng Hà",
  },
  {
    districtId: "399",
    wardId: "15940",
    name: "Xã Hoằng Đạt",
  },
  {
    districtId: "399",
    wardId: "15946",
    name: "Xã Hoằng Đạo",
  },
  {
    districtId: "399",
    wardId: "15949",
    name: "Xã Hoằng Thắng",
  },
  {
    districtId: "399",
    wardId: "15952",
    name: "Xã Hoằng Đồng",
  },
  {
    districtId: "399",
    wardId: "15955",
    name: "Xã Hoằng Thái",
  },
  {
    districtId: "399",
    wardId: "15958",
    name: "Xã Hoằng Thịnh",
  },
  {
    districtId: "399",
    wardId: "15961",
    name: "Xã Hoằng Thành",
  },
  {
    districtId: "399",
    wardId: "15964",
    name: "Xã Hoằng Lộc",
  },
  {
    districtId: "399",
    wardId: "15967",
    name: "Xã Hoằng Trạch",
  },
  {
    districtId: "399",
    wardId: "15973",
    name: "Xã Hoằng Phong",
  },
  {
    districtId: "399",
    wardId: "15976",
    name: "Xã Hoằng Lưu",
  },
  {
    districtId: "399",
    wardId: "15979",
    name: "Xã Hoằng Châu",
  },
  {
    districtId: "399",
    wardId: "15982",
    name: "Xã Hoằng Tân",
  },
  {
    districtId: "399",
    wardId: "15985",
    name: "Xã Hoằng Yến",
  },
  {
    districtId: "399",
    wardId: "15988",
    name: "Xã Hoằng Tiến",
  },
  {
    districtId: "399",
    wardId: "15991",
    name: "Xã Hoằng Hải",
  },
  {
    districtId: "399",
    wardId: "15994",
    name: "Xã Hoằng Ngọc",
  },
  {
    districtId: "399",
    wardId: "15997",
    name: "Xã Hoằng Đông",
  },
  {
    districtId: "399",
    wardId: "16000",
    name: "Xã Hoằng Thanh",
  },
  {
    districtId: "399",
    wardId: "16003",
    name: "Xã Hoằng Phụ",
  },
  {
    districtId: "399",
    wardId: "16006",
    name: "Xã Hoằng Trường",
  },
  {
    districtId: "400",
    wardId: "16012",
    name: "Thị trấn Hậu Lộc",
  },
  {
    districtId: "400",
    wardId: "16015",
    name: "Xã Đồng Lộc",
  },
  {
    districtId: "400",
    wardId: "16018",
    name: "Xã Đại Lộc",
  },
  {
    districtId: "400",
    wardId: "16021",
    name: "Xã Triệu Lộc",
  },
  {
    districtId: "400",
    wardId: "16027",
    name: "Xã Tiến Lộc",
  },
  {
    districtId: "400",
    wardId: "16030",
    name: "Xã Lộc Sơn",
  },
  {
    districtId: "400",
    wardId: "16033",
    name: "Xã Cầu Lộc",
  },
  {
    districtId: "400",
    wardId: "16036",
    name: "Xã Thành Lộc",
  },
  {
    districtId: "400",
    wardId: "16039",
    name: "Xã Tuy Lộc",
  },
  {
    districtId: "400",
    wardId: "16042",
    name: "Xã Phong Lộc",
  },
  {
    districtId: "400",
    wardId: "16045",
    name: "Xã Mỹ Lộc",
  },
  {
    districtId: "400",
    wardId: "16048",
    name: "Xã Thuần Lộc",
  },
  {
    districtId: "400",
    wardId: "16057",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "400",
    wardId: "16063",
    name: "Xã Hoa Lộc",
  },
  {
    districtId: "400",
    wardId: "16066",
    name: "Xã Liên Lộc",
  },
  {
    districtId: "400",
    wardId: "16069",
    name: "Xã Quang Lộc",
  },
  {
    districtId: "400",
    wardId: "16072",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "400",
    wardId: "16075",
    name: "Xã Hòa Lộc",
  },
  {
    districtId: "400",
    wardId: "16078",
    name: "Xã Minh Lộc",
  },
  {
    districtId: "400",
    wardId: "16081",
    name: "Xã Hưng Lộc",
  },
  {
    districtId: "400",
    wardId: "16084",
    name: "Xã Hải Lộc",
  },
  {
    districtId: "400",
    wardId: "16087",
    name: "Xã Đa Lộc",
  },
  {
    districtId: "400",
    wardId: "16090",
    name: "Xã Ngư Lộc",
  },
  {
    districtId: "401",
    wardId: "16093",
    name: "Thị trấn Nga Sơn",
  },
  {
    districtId: "401",
    wardId: "16096",
    name: "Xã Ba Đình",
  },
  {
    districtId: "401",
    wardId: "16099",
    name: "Xã Nga Vịnh",
  },
  {
    districtId: "401",
    wardId: "16102",
    name: "Xã Nga Văn",
  },
  {
    districtId: "401",
    wardId: "16105",
    name: "Xã Nga Thiện",
  },
  {
    districtId: "401",
    wardId: "16108",
    name: "Xã Nga Tiến",
  },
  {
    districtId: "401",
    wardId: "16114",
    name: "Xã Nga Phượng",
  },
  {
    districtId: "401",
    wardId: "16117",
    name: "Xã Nga Trung",
  },
  {
    districtId: "401",
    wardId: "16120",
    name: "Xã Nga Bạch",
  },
  {
    districtId: "401",
    wardId: "16123",
    name: "Xã Nga Thanh",
  },
  {
    districtId: "401",
    wardId: "16132",
    name: "Xã Nga Yên",
  },
  {
    districtId: "401",
    wardId: "16135",
    name: "Xã Nga Giáp",
  },
  {
    districtId: "401",
    wardId: "16138",
    name: "Xã Nga Hải",
  },
  {
    districtId: "401",
    wardId: "16141",
    name: "Xã Nga Thành",
  },
  {
    districtId: "401",
    wardId: "16144",
    name: "Xã Nga An",
  },
  {
    districtId: "401",
    wardId: "16147",
    name: "Xã Nga Phú",
  },
  {
    districtId: "401",
    wardId: "16150",
    name: "Xã Nga Điền",
  },
  {
    districtId: "401",
    wardId: "16153",
    name: "Xã Nga Tân",
  },
  {
    districtId: "401",
    wardId: "16156",
    name: "Xã Nga Thủy",
  },
  {
    districtId: "401",
    wardId: "16159",
    name: "Xã Nga Liên",
  },
  {
    districtId: "401",
    wardId: "16162",
    name: "Xã Nga Thái",
  },
  {
    districtId: "401",
    wardId: "16165",
    name: "Xã Nga Thạch",
  },
  {
    districtId: "401",
    wardId: "16168",
    name: "Xã Nga Thắng",
  },
  {
    districtId: "401",
    wardId: "16171",
    name: "Xã Nga Trường",
  },
  {
    districtId: "402",
    wardId: "16174",
    name: "Thị trấn Yên Cát",
  },
  {
    districtId: "402",
    wardId: "16177",
    name: "Xã Bãi Trành",
  },
  {
    districtId: "402",
    wardId: "16180",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "402",
    wardId: "16183",
    name: "Xã Xuân Bình",
  },
  {
    districtId: "402",
    wardId: "16186",
    name: "Xã Hóa Quỳ",
  },
  {
    districtId: "402",
    wardId: "16195",
    name: "Xã Cát Vân",
  },
  {
    districtId: "402",
    wardId: "16198",
    name: "Xã Cát Tân",
  },
  {
    districtId: "402",
    wardId: "16201",
    name: "Xã Tân Bình",
  },
  {
    districtId: "402",
    wardId: "16204",
    name: "Xã Bình Lương",
  },
  {
    districtId: "402",
    wardId: "16207",
    name: "Xã Thanh Quân",
  },
  {
    districtId: "402",
    wardId: "16210",
    name: "Xã Thanh Xuân",
  },
  {
    districtId: "402",
    wardId: "16213",
    name: "Xã Thanh Hòa",
  },
  {
    districtId: "402",
    wardId: "16216",
    name: "Xã Thanh Phong",
  },
  {
    districtId: "402",
    wardId: "16219",
    name: "Xã Thanh Lâm",
  },
  {
    districtId: "402",
    wardId: "16222",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "402",
    wardId: "16225",
    name: "Xã Thượng Ninh",
  },
  {
    districtId: "403",
    wardId: "16228",
    name: "Thị trấn Bến Sung",
  },
  {
    districtId: "403",
    wardId: "16231",
    name: "Xã Cán Khê",
  },
  {
    districtId: "403",
    wardId: "16234",
    name: "Xã Xuân Du",
  },
  {
    districtId: "403",
    wardId: "16240",
    name: "Xã Phượng Nghi",
  },
  {
    districtId: "403",
    wardId: "16243",
    name: "Xã Mậu Lâm",
  },
  {
    districtId: "403",
    wardId: "16246",
    name: "Xã Xuân Khang",
  },
  {
    districtId: "403",
    wardId: "16249",
    name: "Xã Phú Nhuận",
  },
  {
    districtId: "403",
    wardId: "16252",
    name: "Xã Hải Long",
  },
  {
    districtId: "403",
    wardId: "16258",
    name: "Xã Xuân Thái",
  },
  {
    districtId: "403",
    wardId: "16261",
    name: "Xã Xuân Phúc",
  },
  {
    districtId: "403",
    wardId: "16264",
    name: "Xã Yên Thọ",
  },
  {
    districtId: "403",
    wardId: "16267",
    name: "Xã Yên Lạc",
  },
  {
    districtId: "403",
    wardId: "16273",
    name: "Xã Thanh Tân",
  },
  {
    districtId: "403",
    wardId: "16276",
    name: "Xã Thanh Kỳ",
  },
  {
    districtId: "404",
    wardId: "16279",
    name: "Thị trấn Nông Cống",
  },
  {
    districtId: "404",
    wardId: "16282",
    name: "Xã Tân Phúc",
  },
  {
    districtId: "404",
    wardId: "16285",
    name: "Xã Tân Thọ",
  },
  {
    districtId: "404",
    wardId: "16288",
    name: "Xã Hoàng Sơn",
  },
  {
    districtId: "404",
    wardId: "16291",
    name: "Xã Tân Khang",
  },
  {
    districtId: "404",
    wardId: "16294",
    name: "Xã Hoàng Giang",
  },
  {
    districtId: "404",
    wardId: "16297",
    name: "Xã Trung Chính",
  },
  {
    districtId: "404",
    wardId: "16303",
    name: "Xã Trung Thành",
  },
  {
    districtId: "404",
    wardId: "16309",
    name: "Xã Tế Thắng",
  },
  {
    districtId: "404",
    wardId: "16315",
    name: "Xã Tế Lợi",
  },
  {
    districtId: "404",
    wardId: "16318",
    name: "Xã Tế Nông",
  },
  {
    districtId: "404",
    wardId: "16321",
    name: "Xã Minh Nghĩa",
  },
  {
    districtId: "404",
    wardId: "16324",
    name: "Xã Minh Khôi",
  },
  {
    districtId: "404",
    wardId: "16327",
    name: "Xã Vạn Hòa",
  },
  {
    districtId: "404",
    wardId: "16330",
    name: "Xã Trường Trung",
  },
  {
    districtId: "404",
    wardId: "16333",
    name: "Xã Vạn Thắng",
  },
  {
    districtId: "404",
    wardId: "16336",
    name: "Xã Trường Giang",
  },
  {
    districtId: "404",
    wardId: "16339",
    name: "Xã Vạn Thiện",
  },
  {
    districtId: "404",
    wardId: "16342",
    name: "Xã Thăng Long",
  },
  {
    districtId: "404",
    wardId: "16345",
    name: "Xã Trường Minh",
  },
  {
    districtId: "404",
    wardId: "16348",
    name: "Xã Trường Sơn",
  },
  {
    districtId: "404",
    wardId: "16351",
    name: "Xã Thăng Bình",
  },
  {
    districtId: "404",
    wardId: "16354",
    name: "Xã Công Liêm",
  },
  {
    districtId: "404",
    wardId: "16357",
    name: "Xã Tượng Văn",
  },
  {
    districtId: "404",
    wardId: "16360",
    name: "Xã Thăng Thọ",
  },
  {
    districtId: "404",
    wardId: "16363",
    name: "Xã Tượng Lĩnh",
  },
  {
    districtId: "404",
    wardId: "16366",
    name: "Xã Tượng Sơn",
  },
  {
    districtId: "404",
    wardId: "16369",
    name: "Xã Công Chính",
  },
  {
    districtId: "404",
    wardId: "16375",
    name: "Xã Yên Mỹ",
  },
  {
    districtId: "405",
    wardId: "16378",
    name: "Thị trấn Rừng Thông",
  },
  {
    districtId: "405",
    wardId: "16381",
    name: "Xã Đông Hoàng",
  },
  {
    districtId: "405",
    wardId: "16384",
    name: "Xã Đông Ninh",
  },
  {
    districtId: "405",
    wardId: "16390",
    name: "Xã Đông Hòa",
  },
  {
    districtId: "405",
    wardId: "16393",
    name: "Xã Đông Yên",
  },
  {
    districtId: "405",
    wardId: "16399",
    name: "Xã Đông Minh",
  },
  {
    districtId: "405",
    wardId: "16402",
    name: "Xã Đông Thanh",
  },
  {
    districtId: "405",
    wardId: "16405",
    name: "Xã Đông Tiến",
  },
  {
    districtId: "405",
    wardId: "16408",
    name: "Xã Đông Khê",
  },
  {
    districtId: "405",
    wardId: "16414",
    name: "Xã Đông Thịnh",
  },
  {
    districtId: "405",
    wardId: "16417",
    name: "Xã Đông Văn",
  },
  {
    districtId: "405",
    wardId: "16420",
    name: "Xã Đông Phú",
  },
  {
    districtId: "405",
    wardId: "16423",
    name: "Xã Đông Nam",
  },
  {
    districtId: "405",
    wardId: "16426",
    name: "Xã Đông Quang",
  },
  {
    districtId: "406",
    wardId: "16438",
    name: "Thị trấn Tân Phong",
  },
  {
    districtId: "406",
    wardId: "16447",
    name: "Xã Quảng Trạch",
  },
  {
    districtId: "406",
    wardId: "16453",
    name: "Xã Quảng Đức",
  },
  {
    districtId: "406",
    wardId: "16456",
    name: "Xã Quảng Định",
  },
  {
    districtId: "406",
    wardId: "16462",
    name: "Xã Quảng Nhân",
  },
  {
    districtId: "406",
    wardId: "16465",
    name: "Xã Quảng Ninh",
  },
  {
    districtId: "406",
    wardId: "16468",
    name: "Xã Quảng Bình",
  },
  {
    districtId: "406",
    wardId: "16471",
    name: "Xã Quảng Hợp",
  },
  {
    districtId: "406",
    wardId: "16474",
    name: "Xã Quảng Văn",
  },
  {
    districtId: "406",
    wardId: "16477",
    name: "Xã Quảng Long",
  },
  {
    districtId: "406",
    wardId: "16480",
    name: "Xã Quảng Yên",
  },
  {
    districtId: "406",
    wardId: "16483",
    name: "Xã Quảng Hòa",
  },
  {
    districtId: "406",
    wardId: "16489",
    name: "Xã Quảng Khê",
  },
  {
    districtId: "406",
    wardId: "16492",
    name: "Xã Quảng Trung",
  },
  {
    districtId: "406",
    wardId: "16495",
    name: "Xã Quảng Chính",
  },
  {
    districtId: "406",
    wardId: "16498",
    name: "Xã Quảng Ngọc",
  },
  {
    districtId: "406",
    wardId: "16501",
    name: "Xã Quảng Trường",
  },
  {
    districtId: "406",
    wardId: "16510",
    name: "Xã Quảng Phúc",
  },
  {
    districtId: "406",
    wardId: "16519",
    name: "Xã Quảng Giao",
  },
  {
    districtId: "406",
    wardId: "16540",
    name: "Xã Quảng Hải",
  },
  {
    districtId: "406",
    wardId: "16543",
    name: "Xã Quảng Lưu",
  },
  {
    districtId: "406",
    wardId: "16546",
    name: "Xã Quảng Lộc",
  },
  {
    districtId: "406",
    wardId: "16549",
    name: "Xã Tiên Trang",
  },
  {
    districtId: "406",
    wardId: "16552",
    name: "Xã Quảng Nham",
  },
  {
    districtId: "406",
    wardId: "16555",
    name: "Xã Quảng Thạch",
  },
  {
    districtId: "406",
    wardId: "16558",
    name: "Xã Quảng Thái",
  },
  {
    districtId: "407",
    wardId: "16561",
    name: "Phường Hải Hòa",
  },
  {
    districtId: "407",
    wardId: "16564",
    name: "Phường Hải Châu",
  },
  {
    districtId: "407",
    wardId: "16567",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "407",
    wardId: "16570",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "407",
    wardId: "16576",
    name: "Phường Hải Ninh",
  },
  {
    districtId: "407",
    wardId: "16579",
    name: "Xã Anh Sơn",
  },
  {
    districtId: "407",
    wardId: "16582",
    name: "Xã Ngọc Lĩnh",
  },
  {
    districtId: "407",
    wardId: "16585",
    name: "Phường Hải An",
  },
  {
    districtId: "407",
    wardId: "16591",
    name: "Xã Các Sơn",
  },
  {
    districtId: "407",
    wardId: "16594",
    name: "Phường Tân Dân",
  },
  {
    districtId: "407",
    wardId: "16597",
    name: "Phường Hải Lĩnh",
  },
  {
    districtId: "407",
    wardId: "16600",
    name: "Xã Định Hải",
  },
  {
    districtId: "407",
    wardId: "16603",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "407",
    wardId: "16606",
    name: "Phường Ninh Hải",
  },
  {
    districtId: "407",
    wardId: "16609",
    name: "Phường Nguyên Bình",
  },
  {
    districtId: "407",
    wardId: "16612",
    name: "Xã Hải Nhân",
  },
  {
    districtId: "407",
    wardId: "16618",
    name: "Phường Bình Minh",
  },
  {
    districtId: "407",
    wardId: "16621",
    name: "Phường Hải Thanh",
  },
  {
    districtId: "407",
    wardId: "16624",
    name: "Xã Phú Lâm",
  },
  {
    districtId: "407",
    wardId: "16627",
    name: "Phường Xuân Lâm",
  },
  {
    districtId: "407",
    wardId: "16630",
    name: "Phường Trúc Lâm",
  },
  {
    districtId: "407",
    wardId: "16633",
    name: "Phường Hải Bình",
  },
  {
    districtId: "407",
    wardId: "16636",
    name: "Xã Tân Trường",
  },
  {
    districtId: "407",
    wardId: "16639",
    name: "Xã Tùng Lâm",
  },
  {
    districtId: "407",
    wardId: "16642",
    name: "Phường Tĩnh Hải",
  },
  {
    districtId: "407",
    wardId: "16645",
    name: "Phường Mai Lâm",
  },
  {
    districtId: "407",
    wardId: "16648",
    name: "Xã Trường Lâm",
  },
  {
    districtId: "407",
    wardId: "16651",
    name: "Xã Hải Yến",
  },
  {
    districtId: "407",
    wardId: "16654",
    name: "Phường Hải Thượng",
  },
  {
    districtId: "407",
    wardId: "16657",
    name: "Xã Nghi Sơn",
  },
  {
    districtId: "407",
    wardId: "16660",
    name: "Xã Hải Hà",
  },
  {
    districtId: "412",
    wardId: "16663",
    name: "Phường Đông Vĩnh",
  },
  {
    districtId: "412",
    wardId: "16666",
    name: "Phường Hà Huy Tập",
  },
  {
    districtId: "412",
    wardId: "16669",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "412",
    wardId: "16670",
    name: "Phường Quán Bàu",
  },
  {
    districtId: "412",
    wardId: "16672",
    name: "Phường Hưng Bình",
  },
  {
    districtId: "412",
    wardId: "16673",
    name: "Phường Hưng Phúc",
  },
  {
    districtId: "412",
    wardId: "16675",
    name: "Phường Hưng Dũng",
  },
  {
    districtId: "412",
    wardId: "16678",
    name: "Phường Cửa Nam",
  },
  {
    districtId: "412",
    wardId: "16681",
    name: "Phường Quang Trung",
  },
  {
    districtId: "412",
    wardId: "16684",
    name: "Phường Đội Cung",
  },
  {
    districtId: "412",
    wardId: "16687",
    name: "Phường Lê Mao",
  },
  {
    districtId: "412",
    wardId: "16690",
    name: "Phường Trường Thi",
  },
  {
    districtId: "412",
    wardId: "16693",
    name: "Phường Bến Thủy",
  },
  {
    districtId: "412",
    wardId: "16696",
    name: "Phường Hồng Sơn",
  },
  {
    districtId: "412",
    wardId: "16699",
    name: "Phường Trung Đô",
  },
  {
    districtId: "412",
    wardId: "16702",
    name: "Xã Nghi Phú",
  },
  {
    districtId: "412",
    wardId: "16705",
    name: "Xã Hưng Đông",
  },
  {
    districtId: "412",
    wardId: "16708",
    name: "Xã Hưng Lộc",
  },
  {
    districtId: "412",
    wardId: "16711",
    name: "Xã Hưng Hòa",
  },
  {
    districtId: "412",
    wardId: "16714",
    name: "Phường Vinh Tân",
  },
  {
    districtId: "412",
    wardId: "17908",
    name: "Xã Nghi Liên",
  },
  {
    districtId: "412",
    wardId: "17914",
    name: "Xã Nghi Ân",
  },
  {
    districtId: "412",
    wardId: "17920",
    name: "Xã Nghi Kim",
  },
  {
    districtId: "412",
    wardId: "17923",
    name: "Xã Nghi Đức",
  },
  {
    districtId: "412",
    wardId: "18013",
    name: "Xã Hưng Chính",
  },
  {
    districtId: "413",
    wardId: "16717",
    name: "Phường Nghi Thuỷ",
  },
  {
    districtId: "413",
    wardId: "16720",
    name: "Phường Nghi Tân",
  },
  {
    districtId: "413",
    wardId: "16723",
    name: "Phường Thu Thuỷ",
  },
  {
    districtId: "413",
    wardId: "16726",
    name: "Phường Nghi Hòa",
  },
  {
    districtId: "413",
    wardId: "16729",
    name: "Phường Nghi Hải",
  },
  {
    districtId: "413",
    wardId: "16732",
    name: "Phường Nghi Hương",
  },
  {
    districtId: "413",
    wardId: "16735",
    name: "Phường Nghi Thu",
  },
  {
    districtId: "414",
    wardId: "16939",
    name: "Phường Hoà Hiếu",
  },
  {
    districtId: "414",
    wardId: "16993",
    name: "Phường Quang Phong",
  },
  {
    districtId: "414",
    wardId: "16994",
    name: "Phường Quang Tiến",
  },
  {
    districtId: "414",
    wardId: "17003",
    name: "Phường Long Sơn",
  },
  {
    districtId: "414",
    wardId: "17005",
    name: "Xã Nghĩa Tiến",
  },
  {
    districtId: "414",
    wardId: "17008",
    name: "Xã Nghĩa Mỹ",
  },
  {
    districtId: "414",
    wardId: "17011",
    name: "Xã Tây Hiếu",
  },
  {
    districtId: "414",
    wardId: "17014",
    name: "Xã Nghĩa Thuận",
  },
  {
    districtId: "414",
    wardId: "17017",
    name: "Xã Đông Hiếu",
  },
  {
    districtId: "415",
    wardId: "16738",
    name: "Thị trấn Kim Sơn",
  },
  {
    districtId: "415",
    wardId: "16741",
    name: "Xã Thông Thụ",
  },
  {
    districtId: "415",
    wardId: "16744",
    name: "Xã Đồng Văn",
  },
  {
    districtId: "415",
    wardId: "16747",
    name: "Xã Hạnh Dịch",
  },
  {
    districtId: "415",
    wardId: "16750",
    name: "Xã Tiền Phong",
  },
  {
    districtId: "415",
    wardId: "16753",
    name: "Xã Nậm Giải",
  },
  {
    districtId: "415",
    wardId: "16756",
    name: "Xã Tri Lễ",
  },
  {
    districtId: "415",
    wardId: "16759",
    name: "Xã Châu Kim",
  },
  {
    districtId: "415",
    wardId: "16763",
    name: "Xã Mường Nọc",
  },
  {
    districtId: "415",
    wardId: "16765",
    name: "Xã Châu Thôn",
  },
  {
    districtId: "415",
    wardId: "16768",
    name: "Xã Nậm Nhoóng",
  },
  {
    districtId: "415",
    wardId: "16771",
    name: "Xã Quang Phong",
  },
  {
    districtId: "415",
    wardId: "16774",
    name: "Xã Căm Muộn",
  },
  {
    districtId: "416",
    wardId: "16777",
    name: "Thị trấn Tân Lạc",
  },
  {
    districtId: "416",
    wardId: "16780",
    name: "Xã Châu Bính",
  },
  {
    districtId: "416",
    wardId: "16783",
    name: "Xã Châu Thuận",
  },
  {
    districtId: "416",
    wardId: "16786",
    name: "Xã Châu Hội",
  },
  {
    districtId: "416",
    wardId: "16789",
    name: "Xã Châu Nga",
  },
  {
    districtId: "416",
    wardId: "16792",
    name: "Xã Châu Tiến",
  },
  {
    districtId: "416",
    wardId: "16795",
    name: "Xã Châu Hạnh",
  },
  {
    districtId: "416",
    wardId: "16798",
    name: "Xã Châu Thắng",
  },
  {
    districtId: "416",
    wardId: "16801",
    name: "Xã Châu Phong",
  },
  {
    districtId: "416",
    wardId: "16804",
    name: "Xã Châu Bình",
  },
  {
    districtId: "416",
    wardId: "16807",
    name: "Xã Châu Hoàn",
  },
  {
    districtId: "416",
    wardId: "16810",
    name: "Xã Diên Lãm",
  },
  {
    districtId: "417",
    wardId: "16813",
    name: "Thị trấn Mường Xén",
  },
  {
    districtId: "417",
    wardId: "16816",
    name: "Xã Mỹ Lý",
  },
  {
    districtId: "417",
    wardId: "16819",
    name: "Xã Bắc Lý",
  },
  {
    districtId: "417",
    wardId: "16822",
    name: "Xã Keng Đu",
  },
  {
    districtId: "417",
    wardId: "16825",
    name: "Xã Đoọc Mạy",
  },
  {
    districtId: "417",
    wardId: "16828",
    name: "Xã Huồi Tụ",
  },
  {
    districtId: "417",
    wardId: "16831",
    name: "Xã Mường Lống",
  },
  {
    districtId: "417",
    wardId: "16834",
    name: "Xã Na Loi",
  },
  {
    districtId: "417",
    wardId: "16837",
    name: "Xã Nậm Cắn",
  },
  {
    districtId: "417",
    wardId: "16840",
    name: "Xã Bảo Nam",
  },
  {
    districtId: "417",
    wardId: "16843",
    name: "Xã Phà Đánh",
  },
  {
    districtId: "417",
    wardId: "16846",
    name: "Xã Bảo Thắng",
  },
  {
    districtId: "417",
    wardId: "16849",
    name: "Xã Hữu Lập",
  },
  {
    districtId: "417",
    wardId: "16852",
    name: "Xã Tà Cạ",
  },
  {
    districtId: "417",
    wardId: "16855",
    name: "Xã Chiêu Lưu",
  },
  {
    districtId: "417",
    wardId: "16858",
    name: "Xã Mường Típ",
  },
  {
    districtId: "417",
    wardId: "16861",
    name: "Xã Hữu Kiệm",
  },
  {
    districtId: "417",
    wardId: "16864",
    name: "Xã Tây Sơn",
  },
  {
    districtId: "417",
    wardId: "16867",
    name: "Xã Mường Ải",
  },
  {
    districtId: "417",
    wardId: "16870",
    name: "Xã Na Ngoi",
  },
  {
    districtId: "417",
    wardId: "16873",
    name: "Xã Nậm Càn",
  },
  {
    districtId: "418",
    wardId: "16876",
    name: "Thị trấn Thạch Giám",
  },
  {
    districtId: "418",
    wardId: "16879",
    name: "Xã Mai Sơn",
  },
  {
    districtId: "418",
    wardId: "16882",
    name: "Xã Nhôn Mai",
  },
  {
    districtId: "418",
    wardId: "16885",
    name: "Xã Hữu Khuông",
  },
  {
    districtId: "418",
    wardId: "16900",
    name: "Xã Yên Tĩnh",
  },
  {
    districtId: "418",
    wardId: "16903",
    name: "Xã Nga My",
  },
  {
    districtId: "418",
    wardId: "16904",
    name: "Xã Xiêng My",
  },
  {
    districtId: "418",
    wardId: "16906",
    name: "Xã Lưỡng Minh",
  },
  {
    districtId: "418",
    wardId: "16909",
    name: "Xã Yên Hòa",
  },
  {
    districtId: "418",
    wardId: "16912",
    name: "Xã Yên Na",
  },
  {
    districtId: "418",
    wardId: "16915",
    name: "Xã Lưu Kiền",
  },
  {
    districtId: "418",
    wardId: "16921",
    name: "Xã Xá Lượng",
  },
  {
    districtId: "418",
    wardId: "16924",
    name: "Xã Tam Thái",
  },
  {
    districtId: "418",
    wardId: "16927",
    name: "Xã Tam Đình",
  },
  {
    districtId: "418",
    wardId: "16930",
    name: "Xã Yên Thắng",
  },
  {
    districtId: "418",
    wardId: "16933",
    name: "Xã Tam Quang",
  },
  {
    districtId: "418",
    wardId: "16936",
    name: "Xã Tam Hợp",
  },
  {
    districtId: "419",
    wardId: "16941",
    name: "Thị trấn Nghĩa Đàn",
  },
  {
    districtId: "419",
    wardId: "16942",
    name: "Xã Nghĩa Mai",
  },
  {
    districtId: "419",
    wardId: "16945",
    name: "Xã Nghĩa Yên",
  },
  {
    districtId: "419",
    wardId: "16948",
    name: "Xã Nghĩa Lạc",
  },
  {
    districtId: "419",
    wardId: "16951",
    name: "Xã Nghĩa Lâm",
  },
  {
    districtId: "419",
    wardId: "16954",
    name: "Xã Nghĩa Sơn",
  },
  {
    districtId: "419",
    wardId: "16957",
    name: "Xã Nghĩa Lợi",
  },
  {
    districtId: "419",
    wardId: "16960",
    name: "Xã Nghĩa Bình",
  },
  {
    districtId: "419",
    wardId: "16963",
    name: "Xã Nghĩa Thọ",
  },
  {
    districtId: "419",
    wardId: "16966",
    name: "Xã Nghĩa Minh",
  },
  {
    districtId: "419",
    wardId: "16969",
    name: "Xã Nghĩa Phú",
  },
  {
    districtId: "419",
    wardId: "16972",
    name: "Xã Nghĩa Hưng",
  },
  {
    districtId: "419",
    wardId: "16975",
    name: "Xã Nghĩa Hồng",
  },
  {
    districtId: "419",
    wardId: "16978",
    name: "Xã Nghĩa Thịnh",
  },
  {
    districtId: "419",
    wardId: "16981",
    name: "Xã Nghĩa Trung",
  },
  {
    districtId: "419",
    wardId: "16984",
    name: "Xã Nghĩa Hội",
  },
  {
    districtId: "419",
    wardId: "16987",
    name: "Xã Nghĩa Thành",
  },
  {
    districtId: "419",
    wardId: "16996",
    name: "Xã Nghĩa Hiếu",
  },
  {
    districtId: "419",
    wardId: "17020",
    name: "Xã Nghĩa Đức",
  },
  {
    districtId: "419",
    wardId: "17023",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "419",
    wardId: "17026",
    name: "Xã Nghĩa Long",
  },
  {
    districtId: "419",
    wardId: "17029",
    name: "Xã Nghĩa Lộc",
  },
  {
    districtId: "419",
    wardId: "17032",
    name: "Xã Nghĩa Khánh",
  },
  {
    districtId: "420",
    wardId: "17035",
    name: "Thị trấn Quỳ Hợp",
  },
  {
    districtId: "420",
    wardId: "17038",
    name: "Xã Yên Hợp",
  },
  {
    districtId: "420",
    wardId: "17041",
    name: "Xã Châu Tiến",
  },
  {
    districtId: "420",
    wardId: "17044",
    name: "Xã Châu Hồng",
  },
  {
    districtId: "420",
    wardId: "17047",
    name: "Xã Đồng Hợp",
  },
  {
    districtId: "420",
    wardId: "17050",
    name: "Xã Châu Thành",
  },
  {
    districtId: "420",
    wardId: "17053",
    name: "Xã Liên Hợp",
  },
  {
    districtId: "420",
    wardId: "17056",
    name: "Xã Châu Lộc",
  },
  {
    districtId: "420",
    wardId: "17059",
    name: "Xã Tam Hợp",
  },
  {
    districtId: "420",
    wardId: "17062",
    name: "Xã Châu Cường",
  },
  {
    districtId: "420",
    wardId: "17065",
    name: "Xã Châu Quang",
  },
  {
    districtId: "420",
    wardId: "17068",
    name: "Xã Thọ Hợp",
  },
  {
    districtId: "420",
    wardId: "17071",
    name: "Xã Minh Hợp",
  },
  {
    districtId: "420",
    wardId: "17074",
    name: "Xã Nghĩa Xuân",
  },
  {
    districtId: "420",
    wardId: "17077",
    name: "Xã Châu Thái",
  },
  {
    districtId: "420",
    wardId: "17080",
    name: "Xã Châu Đình",
  },
  {
    districtId: "420",
    wardId: "17083",
    name: "Xã Văn Lợi",
  },
  {
    districtId: "420",
    wardId: "17086",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "420",
    wardId: "17089",
    name: "Xã Châu Lý",
  },
  {
    districtId: "420",
    wardId: "17092",
    name: "Xã Hạ Sơn",
  },
  {
    districtId: "420",
    wardId: "17095",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "421",
    wardId: "17098",
    name: "Thị trấn Cầu Giát",
  },
  {
    districtId: "421",
    wardId: "17101",
    name: "Xã Quỳnh Thắng",
  },
  {
    districtId: "421",
    wardId: "17119",
    name: "Xã Quỳnh Tân",
  },
  {
    districtId: "421",
    wardId: "17122",
    name: "Xã Quỳnh Châu",
  },
  {
    districtId: "421",
    wardId: "17140",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "421",
    wardId: "17143",
    name: "Xã Quỳnh Văn",
  },
  {
    districtId: "421",
    wardId: "17146",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "421",
    wardId: "17149",
    name: "Xã Quỳnh Tam",
  },
  {
    districtId: "421",
    wardId: "17152",
    name: "Xã Quỳnh Hoa",
  },
  {
    districtId: "421",
    wardId: "17155",
    name: "Xã Quỳnh Thạch",
  },
  {
    districtId: "421",
    wardId: "17158",
    name: "Xã Quỳnh Bảng",
  },
  {
    districtId: "421",
    wardId: "17161",
    name: "Xã Quỳnh Mỹ",
  },
  {
    districtId: "421",
    wardId: "17164",
    name: "Xã Quỳnh Thanh",
  },
  {
    districtId: "421",
    wardId: "17167",
    name: "Xã Quỳnh Hậu",
  },
  {
    districtId: "421",
    wardId: "17170",
    name: "Xã Quỳnh Lâm",
  },
  {
    districtId: "421",
    wardId: "17173",
    name: "Xã Quỳnh Đôi",
  },
  {
    districtId: "421",
    wardId: "17176",
    name: "Xã Quỳnh Lương",
  },
  {
    districtId: "421",
    wardId: "17179",
    name: "Xã Quỳnh Hồng",
  },
  {
    districtId: "421",
    wardId: "17182",
    name: "Xã Quỳnh Yên",
  },
  {
    districtId: "421",
    wardId: "17185",
    name: "Xã Quỳnh Bá",
  },
  {
    districtId: "421",
    wardId: "17188",
    name: "Xã Quỳnh Minh",
  },
  {
    districtId: "421",
    wardId: "17191",
    name: "Xã Quỳnh Diễn",
  },
  {
    districtId: "421",
    wardId: "17194",
    name: "Xã Quỳnh Hưng",
  },
  {
    districtId: "421",
    wardId: "17197",
    name: "Xã Quỳnh Giang",
  },
  {
    districtId: "421",
    wardId: "17200",
    name: "Xã Quỳnh Ngọc",
  },
  {
    districtId: "421",
    wardId: "17203",
    name: "Xã Quỳnh Nghĩa",
  },
  {
    districtId: "421",
    wardId: "17206",
    name: "Xã An Hòa",
  },
  {
    districtId: "421",
    wardId: "17209",
    name: "Xã Tiến Thủy",
  },
  {
    districtId: "421",
    wardId: "17212",
    name: "Xã Sơn Hải",
  },
  {
    districtId: "421",
    wardId: "17215",
    name: "Xã Quỳnh Thọ",
  },
  {
    districtId: "421",
    wardId: "17218",
    name: "Xã Quỳnh Thuận",
  },
  {
    districtId: "421",
    wardId: "17221",
    name: "Xã Quỳnh Long",
  },
  {
    districtId: "421",
    wardId: "17224",
    name: "Xã Tân Thắng",
  },
  {
    districtId: "422",
    wardId: "17227",
    name: "Thị trấn Con Cuông",
  },
  {
    districtId: "422",
    wardId: "17230",
    name: "Xã Bình Chuẩn",
  },
  {
    districtId: "422",
    wardId: "17233",
    name: "Xã Lạng Khê",
  },
  {
    districtId: "422",
    wardId: "17236",
    name: "Xã Cam Lâm",
  },
  {
    districtId: "422",
    wardId: "17239",
    name: "Xã Thạch Ngàn",
  },
  {
    districtId: "422",
    wardId: "17242",
    name: "Xã Đôn Phục",
  },
  {
    districtId: "422",
    wardId: "17245",
    name: "Xã Mậu Đức",
  },
  {
    districtId: "422",
    wardId: "17248",
    name: "Xã Châu Khê",
  },
  {
    districtId: "422",
    wardId: "17251",
    name: "Xã Chi Khê",
  },
  {
    districtId: "422",
    wardId: "17254",
    name: "Xã Bồng Khê",
  },
  {
    districtId: "422",
    wardId: "17257",
    name: "Xã Yên Khê",
  },
  {
    districtId: "422",
    wardId: "17260",
    name: "Xã Lục Dạ",
  },
  {
    districtId: "422",
    wardId: "17263",
    name: "Xã Môn Sơn",
  },
  {
    districtId: "423",
    wardId: "17266",
    name: "Thị trấn Tân Kỳ",
  },
  {
    districtId: "423",
    wardId: "17269",
    name: "Xã Tân Hợp",
  },
  {
    districtId: "423",
    wardId: "17272",
    name: "Xã Tân Phú",
  },
  {
    districtId: "423",
    wardId: "17275",
    name: "Xã Tân Xuân",
  },
  {
    districtId: "423",
    wardId: "17278",
    name: "Xã Giai Xuân",
  },
  {
    districtId: "423",
    wardId: "17281",
    name: "Xã Nghĩa Bình",
  },
  {
    districtId: "423",
    wardId: "17284",
    name: "Xã Nghĩa Đồng",
  },
  {
    districtId: "423",
    wardId: "17287",
    name: "Xã Đồng Văn",
  },
  {
    districtId: "423",
    wardId: "17290",
    name: "Xã Nghĩa Thái",
  },
  {
    districtId: "423",
    wardId: "17293",
    name: "Xã Nghĩa Hợp",
  },
  {
    districtId: "423",
    wardId: "17296",
    name: "Xã Nghĩa Hoàn",
  },
  {
    districtId: "423",
    wardId: "17299",
    name: "Xã Nghĩa Phúc",
  },
  {
    districtId: "423",
    wardId: "17302",
    name: "Xã Tiên Kỳ",
  },
  {
    districtId: "423",
    wardId: "17305",
    name: "Xã Tân An",
  },
  {
    districtId: "423",
    wardId: "17308",
    name: "Xã Nghĩa Dũng",
  },
  {
    districtId: "423",
    wardId: "17311",
    name: "Xã Tân Long",
  },
  {
    districtId: "423",
    wardId: "17314",
    name: "Xã Kỳ Sơn",
  },
  {
    districtId: "423",
    wardId: "17317",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "423",
    wardId: "17320",
    name: "Xã Kỳ Tân",
  },
  {
    districtId: "423",
    wardId: "17323",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "423",
    wardId: "17325",
    name: "Xã Tân Hương",
  },
  {
    districtId: "423",
    wardId: "17326",
    name: "Xã Nghĩa Hành",
  },
  {
    districtId: "424",
    wardId: "17329",
    name: "Thị trấn Anh Sơn",
  },
  {
    districtId: "424",
    wardId: "17332",
    name: "Xã Thọ Sơn",
  },
  {
    districtId: "424",
    wardId: "17335",
    name: "Xã Thành Sơn",
  },
  {
    districtId: "424",
    wardId: "17338",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "424",
    wardId: "17341",
    name: "Xã Tam Sơn",
  },
  {
    districtId: "424",
    wardId: "17344",
    name: "Xã Đỉnh Sơn",
  },
  {
    districtId: "424",
    wardId: "17347",
    name: "Xã Hùng Sơn",
  },
  {
    districtId: "424",
    wardId: "17350",
    name: "Xã Cẩm Sơn",
  },
  {
    districtId: "424",
    wardId: "17353",
    name: "Xã Đức Sơn",
  },
  {
    districtId: "424",
    wardId: "17356",
    name: "Xã Tường Sơn",
  },
  {
    districtId: "424",
    wardId: "17357",
    name: "Xã Hoa Sơn",
  },
  {
    districtId: "424",
    wardId: "17359",
    name: "Xã Tào Sơn",
  },
  {
    districtId: "424",
    wardId: "17362",
    name: "Xã Vĩnh Sơn",
  },
  {
    districtId: "424",
    wardId: "17365",
    name: "Xã Lạng Sơn",
  },
  {
    districtId: "424",
    wardId: "17368",
    name: "Xã Hội Sơn",
  },
  {
    districtId: "424",
    wardId: "17371",
    name: "Xã Thạch Sơn",
  },
  {
    districtId: "424",
    wardId: "17374",
    name: "Xã Phúc Sơn",
  },
  {
    districtId: "424",
    wardId: "17377",
    name: "Xã Long Sơn",
  },
  {
    districtId: "424",
    wardId: "17380",
    name: "Xã Khai Sơn",
  },
  {
    districtId: "424",
    wardId: "17383",
    name: "Xã Lĩnh Sơn",
  },
  {
    districtId: "424",
    wardId: "17386",
    name: "Xã Cao Sơn",
  },
  {
    districtId: "425",
    wardId: "17389",
    name: "Thị trấn Diễn Châu",
  },
  {
    districtId: "425",
    wardId: "17392",
    name: "Xã Diễn Lâm",
  },
  {
    districtId: "425",
    wardId: "17395",
    name: "Xã Diễn Đoài",
  },
  {
    districtId: "425",
    wardId: "17398",
    name: "Xã Diễn Trường",
  },
  {
    districtId: "425",
    wardId: "17401",
    name: "Xã Diễn Yên",
  },
  {
    districtId: "425",
    wardId: "17404",
    name: "Xã Diễn Hoàng",
  },
  {
    districtId: "425",
    wardId: "17407",
    name: "Xã Diễn Hùng",
  },
  {
    districtId: "425",
    wardId: "17410",
    name: "Xã Diễn Mỹ",
  },
  {
    districtId: "425",
    wardId: "17413",
    name: "Xã Diễn Hồng",
  },
  {
    districtId: "425",
    wardId: "17416",
    name: "Xã Diễn Phong",
  },
  {
    districtId: "425",
    wardId: "17419",
    name: "Xã Diễn Hải",
  },
  {
    districtId: "425",
    wardId: "17422",
    name: "Xã Diễn Tháp",
  },
  {
    districtId: "425",
    wardId: "17425",
    name: "Xã Diễn Liên",
  },
  {
    districtId: "425",
    wardId: "17428",
    name: "Xã Diễn Vạn",
  },
  {
    districtId: "425",
    wardId: "17431",
    name: "Xã Diễn Kim",
  },
  {
    districtId: "425",
    wardId: "17434",
    name: "Xã Diễn Kỷ",
  },
  {
    districtId: "425",
    wardId: "17437",
    name: "Xã Diễn Xuân",
  },
  {
    districtId: "425",
    wardId: "17440",
    name: "Xã Diễn Thái",
  },
  {
    districtId: "425",
    wardId: "17443",
    name: "Xã Diễn Đồng",
  },
  {
    districtId: "425",
    wardId: "17446",
    name: "Xã Diễn Bích",
  },
  {
    districtId: "425",
    wardId: "17449",
    name: "Xã Diễn Hạnh",
  },
  {
    districtId: "425",
    wardId: "17452",
    name: "Xã Diễn Ngọc",
  },
  {
    districtId: "425",
    wardId: "17455",
    name: "Xã Diễn Quảng",
  },
  {
    districtId: "425",
    wardId: "17458",
    name: "Xã Diễn Nguyên",
  },
  {
    districtId: "425",
    wardId: "17461",
    name: "Xã Diễn Hoa",
  },
  {
    districtId: "425",
    wardId: "17464",
    name: "Xã Diễn Thành",
  },
  {
    districtId: "425",
    wardId: "17467",
    name: "Xã Diễn Phúc",
  },
  {
    districtId: "425",
    wardId: "17476",
    name: "Xã Diễn Cát",
  },
  {
    districtId: "425",
    wardId: "17479",
    name: "Xã Diễn Thịnh",
  },
  {
    districtId: "425",
    wardId: "17482",
    name: "Xã Diễn Tân",
  },
  {
    districtId: "425",
    wardId: "17485",
    name: "Xã Minh Châu",
  },
  {
    districtId: "425",
    wardId: "17488",
    name: "Xã Diễn Thọ",
  },
  {
    districtId: "425",
    wardId: "17491",
    name: "Xã Diễn Lợi",
  },
  {
    districtId: "425",
    wardId: "17494",
    name: "Xã Diễn Lộc",
  },
  {
    districtId: "425",
    wardId: "17497",
    name: "Xã Diễn Trung",
  },
  {
    districtId: "425",
    wardId: "17500",
    name: "Xã Diễn An",
  },
  {
    districtId: "425",
    wardId: "17503",
    name: "Xã Diễn Phú",
  },
  {
    districtId: "426",
    wardId: "17506",
    name: "Thị trấn Yên Thành",
  },
  {
    districtId: "426",
    wardId: "17509",
    name: "Xã Mã Thành",
  },
  {
    districtId: "426",
    wardId: "17510",
    name: "Xã Tiến Thành",
  },
  {
    districtId: "426",
    wardId: "17512",
    name: "Xã Lăng Thành",
  },
  {
    districtId: "426",
    wardId: "17515",
    name: "Xã Tân Thành",
  },
  {
    districtId: "426",
    wardId: "17518",
    name: "Xã Đức Thành",
  },
  {
    districtId: "426",
    wardId: "17521",
    name: "Xã Kim Thành",
  },
  {
    districtId: "426",
    wardId: "17524",
    name: "Xã Hậu Thành",
  },
  {
    districtId: "426",
    wardId: "17525",
    name: "Xã Hùng Thành",
  },
  {
    districtId: "426",
    wardId: "17527",
    name: "Xã Đô Thành",
  },
  {
    districtId: "426",
    wardId: "17530",
    name: "Xã Thọ Thành",
  },
  {
    districtId: "426",
    wardId: "17533",
    name: "Xã Quang Thành",
  },
  {
    districtId: "426",
    wardId: "17536",
    name: "Xã Tây Thành",
  },
  {
    districtId: "426",
    wardId: "17539",
    name: "Xã Phúc Thành",
  },
  {
    districtId: "426",
    wardId: "17542",
    name: "Xã Hồng Thành",
  },
  {
    districtId: "426",
    wardId: "17545",
    name: "Xã Đồng Thành",
  },
  {
    districtId: "426",
    wardId: "17548",
    name: "Xã Phú Thành",
  },
  {
    districtId: "426",
    wardId: "17551",
    name: "Xã Hoa Thành",
  },
  {
    districtId: "426",
    wardId: "17554",
    name: "Xã Tăng Thành",
  },
  {
    districtId: "426",
    wardId: "17557",
    name: "Xã Văn Thành",
  },
  {
    districtId: "426",
    wardId: "17560",
    name: "Xã Thịnh Thành",
  },
  {
    districtId: "426",
    wardId: "17563",
    name: "Xã Hợp Thành",
  },
  {
    districtId: "426",
    wardId: "17566",
    name: "Xã Xuân Thành",
  },
  {
    districtId: "426",
    wardId: "17569",
    name: "Xã Bắc Thành",
  },
  {
    districtId: "426",
    wardId: "17572",
    name: "Xã Nhân Thành",
  },
  {
    districtId: "426",
    wardId: "17575",
    name: "Xã Trung Thành",
  },
  {
    districtId: "426",
    wardId: "17578",
    name: "Xã Long Thành",
  },
  {
    districtId: "426",
    wardId: "17581",
    name: "Xã Minh Thành",
  },
  {
    districtId: "426",
    wardId: "17584",
    name: "Xã Nam Thành",
  },
  {
    districtId: "426",
    wardId: "17587",
    name: "Xã Vĩnh Thành",
  },
  {
    districtId: "426",
    wardId: "17590",
    name: "Xã Lý Thành",
  },
  {
    districtId: "426",
    wardId: "17593",
    name: "Xã Khánh Thành",
  },
  {
    districtId: "426",
    wardId: "17596",
    name: "Xã Viên Thành",
  },
  {
    districtId: "426",
    wardId: "17599",
    name: "Xã Đại Thành",
  },
  {
    districtId: "426",
    wardId: "17602",
    name: "Xã Liên Thành",
  },
  {
    districtId: "426",
    wardId: "17605",
    name: "Xã Bảo Thành",
  },
  {
    districtId: "426",
    wardId: "17608",
    name: "Xã Mỹ Thành",
  },
  {
    districtId: "426",
    wardId: "17611",
    name: "Xã Công Thành",
  },
  {
    districtId: "426",
    wardId: "17614",
    name: "Xã Sơn Thành",
  },
  {
    districtId: "427",
    wardId: "17617",
    name: "Thị trấn Đô Lương",
  },
  {
    districtId: "427",
    wardId: "17619",
    name: "Xã Giang Sơn Đông",
  },
  {
    districtId: "427",
    wardId: "17620",
    name: "Xã Giang Sơn Tây",
  },
  {
    districtId: "427",
    wardId: "17623",
    name: "Xã Lam Sơn",
  },
  {
    districtId: "427",
    wardId: "17626",
    name: "Xã Bồi Sơn",
  },
  {
    districtId: "427",
    wardId: "17629",
    name: "Xã Hồng Sơn",
  },
  {
    districtId: "427",
    wardId: "17632",
    name: "Xã Bài Sơn",
  },
  {
    districtId: "427",
    wardId: "17635",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "427",
    wardId: "17638",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "427",
    wardId: "17641",
    name: "Xã Tràng Sơn",
  },
  {
    districtId: "427",
    wardId: "17644",
    name: "Xã Thượng Sơn",
  },
  {
    districtId: "427",
    wardId: "17647",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "427",
    wardId: "17650",
    name: "Xã Đặng Sơn",
  },
  {
    districtId: "427",
    wardId: "17653",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "427",
    wardId: "17656",
    name: "Xã Nam Sơn",
  },
  {
    districtId: "427",
    wardId: "17659",
    name: "Xã Lưu Sơn",
  },
  {
    districtId: "427",
    wardId: "17662",
    name: "Xã Yên Sơn",
  },
  {
    districtId: "427",
    wardId: "17665",
    name: "Xã Văn Sơn",
  },
  {
    districtId: "427",
    wardId: "17668",
    name: "Xã Đà Sơn",
  },
  {
    districtId: "427",
    wardId: "17671",
    name: "Xã Lạc Sơn",
  },
  {
    districtId: "427",
    wardId: "17674",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "427",
    wardId: "17677",
    name: "Xã Thái Sơn",
  },
  {
    districtId: "427",
    wardId: "17680",
    name: "Xã Quang Sơn",
  },
  {
    districtId: "427",
    wardId: "17683",
    name: "Xã Thịnh Sơn",
  },
  {
    districtId: "427",
    wardId: "17686",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "427",
    wardId: "17689",
    name: "Xã Xuân Sơn",
  },
  {
    districtId: "427",
    wardId: "17692",
    name: "Xã Minh Sơn",
  },
  {
    districtId: "427",
    wardId: "17695",
    name: "Xã Thuận Sơn",
  },
  {
    districtId: "427",
    wardId: "17698",
    name: "Xã Nhân Sơn",
  },
  {
    districtId: "427",
    wardId: "17701",
    name: "Xã Hiến Sơn",
  },
  {
    districtId: "427",
    wardId: "17704",
    name: "Xã Mỹ Sơn",
  },
  {
    districtId: "427",
    wardId: "17707",
    name: "Xã Trù Sơn",
  },
  {
    districtId: "427",
    wardId: "17710",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "428",
    wardId: "17713",
    name: "Thị trấn Thanh Chương",
  },
  {
    districtId: "428",
    wardId: "17716",
    name: "Xã Cát Văn",
  },
  {
    districtId: "428",
    wardId: "17719",
    name: "Xã Thanh Nho",
  },
  {
    districtId: "428",
    wardId: "17722",
    name: "Xã Hạnh Lâm",
  },
  {
    districtId: "428",
    wardId: "17723",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "428",
    wardId: "17725",
    name: "Xã Thanh Hòa",
  },
  {
    districtId: "428",
    wardId: "17728",
    name: "Xã Phong Thịnh",
  },
  {
    districtId: "428",
    wardId: "17731",
    name: "Xã Thanh Phong",
  },
  {
    districtId: "428",
    wardId: "17734",
    name: "Xã Thanh Mỹ",
  },
  {
    districtId: "428",
    wardId: "17737",
    name: "Xã Thanh Tiên",
  },
  {
    districtId: "428",
    wardId: "17743",
    name: "Xã Thanh Liên",
  },
  {
    districtId: "428",
    wardId: "17749",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "428",
    wardId: "17752",
    name: "Xã Thanh Đồng",
  },
  {
    districtId: "428",
    wardId: "17755",
    name: "Xã Thanh Ngọc",
  },
  {
    districtId: "428",
    wardId: "17758",
    name: "Xã Thanh Hương",
  },
  {
    districtId: "428",
    wardId: "17759",
    name: "Xã Ngọc Lâm",
  },
  {
    districtId: "428",
    wardId: "17761",
    name: "Xã Thanh Lĩnh",
  },
  {
    districtId: "428",
    wardId: "17764",
    name: "Xã Đồng Văn",
  },
  {
    districtId: "428",
    wardId: "17767",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "428",
    wardId: "17770",
    name: "Xã Thanh Thịnh",
  },
  {
    districtId: "428",
    wardId: "17773",
    name: "Xã Thanh An",
  },
  {
    districtId: "428",
    wardId: "17776",
    name: "Xã Thanh Chi",
  },
  {
    districtId: "428",
    wardId: "17779",
    name: "Xã Xuân Tường",
  },
  {
    districtId: "428",
    wardId: "17782",
    name: "Xã Thanh Dương",
  },
  {
    districtId: "428",
    wardId: "17785",
    name: "Xã Thanh Lương",
  },
  {
    districtId: "428",
    wardId: "17788",
    name: "Xã Thanh Khê",
  },
  {
    districtId: "428",
    wardId: "17791",
    name: "Xã Võ Liệt",
  },
  {
    districtId: "428",
    wardId: "17794",
    name: "Xã Thanh Long",
  },
  {
    districtId: "428",
    wardId: "17797",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "428",
    wardId: "17800",
    name: "Xã Thanh Khai",
  },
  {
    districtId: "428",
    wardId: "17803",
    name: "Xã Thanh Yên",
  },
  {
    districtId: "428",
    wardId: "17806",
    name: "Xã Thanh Hà",
  },
  {
    districtId: "428",
    wardId: "17809",
    name: "Xã Thanh Giang",
  },
  {
    districtId: "428",
    wardId: "17812",
    name: "Xã Thanh Tùng",
  },
  {
    districtId: "428",
    wardId: "17815",
    name: "Xã Thanh Lâm",
  },
  {
    districtId: "428",
    wardId: "17818",
    name: "Xã Thanh Mai",
  },
  {
    districtId: "428",
    wardId: "17821",
    name: "Xã Thanh Xuân",
  },
  {
    districtId: "428",
    wardId: "17824",
    name: "Xã Thanh Đức",
  },
  {
    districtId: "429",
    wardId: "17827",
    name: "Thị trấn Quán Hành",
  },
  {
    districtId: "429",
    wardId: "17830",
    name: "Xã Nghi Văn",
  },
  {
    districtId: "429",
    wardId: "17833",
    name: "Xã Nghi Yên",
  },
  {
    districtId: "429",
    wardId: "17836",
    name: "Xã Nghi Tiến",
  },
  {
    districtId: "429",
    wardId: "17839",
    name: "Xã Nghi Hưng",
  },
  {
    districtId: "429",
    wardId: "17842",
    name: "Xã Nghi Đồng",
  },
  {
    districtId: "429",
    wardId: "17845",
    name: "Xã Nghi Thiết",
  },
  {
    districtId: "429",
    wardId: "17848",
    name: "Xã Nghi Lâm",
  },
  {
    districtId: "429",
    wardId: "17851",
    name: "Xã Nghi Quang",
  },
  {
    districtId: "429",
    wardId: "17854",
    name: "Xã Nghi Kiều",
  },
  {
    districtId: "429",
    wardId: "17857",
    name: "Xã Nghi Mỹ",
  },
  {
    districtId: "429",
    wardId: "17860",
    name: "Xã Nghi Phương",
  },
  {
    districtId: "429",
    wardId: "17863",
    name: "Xã Nghi Thuận",
  },
  {
    districtId: "429",
    wardId: "17866",
    name: "Xã Nghi Long",
  },
  {
    districtId: "429",
    wardId: "17869",
    name: "Xã Nghi Xá",
  },
  {
    districtId: "429",
    wardId: "17875",
    name: "Xã Nghi Hoa",
  },
  {
    districtId: "429",
    wardId: "17878",
    name: "Xã Khánh Hợp",
  },
  {
    districtId: "429",
    wardId: "17881",
    name: "Xã Nghi Thịnh",
  },
  {
    districtId: "429",
    wardId: "17884",
    name: "Xã Nghi Công Bắc",
  },
  {
    districtId: "429",
    wardId: "17887",
    name: "Xã Nghi Công Nam",
  },
  {
    districtId: "429",
    wardId: "17890",
    name: "Xã Nghi Thạch",
  },
  {
    districtId: "429",
    wardId: "17893",
    name: "Xã Nghi Trung",
  },
  {
    districtId: "429",
    wardId: "17896",
    name: "Xã Nghi Trường",
  },
  {
    districtId: "429",
    wardId: "17899",
    name: "Xã Nghi Diên",
  },
  {
    districtId: "429",
    wardId: "17902",
    name: "Xã Nghi Phong",
  },
  {
    districtId: "429",
    wardId: "17905",
    name: "Xã Nghi Xuân",
  },
  {
    districtId: "429",
    wardId: "17911",
    name: "Xã Nghi Vạn",
  },
  {
    districtId: "429",
    wardId: "17917",
    name: "Xã Phúc Thọ",
  },
  {
    districtId: "429",
    wardId: "17926",
    name: "Xã Nghi Thái",
  },
  {
    districtId: "430",
    wardId: "17932",
    name: "Xã Nam Hưng",
  },
  {
    districtId: "430",
    wardId: "17935",
    name: "Xã Nam Nghĩa",
  },
  {
    districtId: "430",
    wardId: "17938",
    name: "Xã Nam Thanh",
  },
  {
    districtId: "430",
    wardId: "17941",
    name: "Xã Nam Anh",
  },
  {
    districtId: "430",
    wardId: "17944",
    name: "Xã Nam Xuân",
  },
  {
    districtId: "430",
    wardId: "17947",
    name: "Xã Nam Thái",
  },
  {
    districtId: "430",
    wardId: "17950",
    name: "Thị trấn Nam Đàn",
  },
  {
    districtId: "430",
    wardId: "17953",
    name: "Xã Nam Lĩnh",
  },
  {
    districtId: "430",
    wardId: "17956",
    name: "Xã Nam Giang",
  },
  {
    districtId: "430",
    wardId: "17959",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "430",
    wardId: "17962",
    name: "Xã Hùng Tiến",
  },
  {
    districtId: "430",
    wardId: "17968",
    name: "Xã Thượng Tân Lộc",
  },
  {
    districtId: "430",
    wardId: "17971",
    name: "Xã Kim Liên",
  },
  {
    districtId: "430",
    wardId: "17977",
    name: "Xã Hồng Long",
  },
  {
    districtId: "430",
    wardId: "17980",
    name: "Xã Xuân Lâm",
  },
  {
    districtId: "430",
    wardId: "17983",
    name: "Xã Nam Cát",
  },
  {
    districtId: "430",
    wardId: "17986",
    name: "Xã Khánh Sơn",
  },
  {
    districtId: "430",
    wardId: "17989",
    name: "Xã Trung Phúc Cường",
  },
  {
    districtId: "430",
    wardId: "17998",
    name: "Xã Nam Kim",
  },
  {
    districtId: "431",
    wardId: "18001",
    name: "Thị trấn Hưng Nguyên",
  },
  {
    districtId: "431",
    wardId: "18004",
    name: "Xã Hưng Trung",
  },
  {
    districtId: "431",
    wardId: "18007",
    name: "Xã Hưng Yên",
  },
  {
    districtId: "431",
    wardId: "18008",
    name: "Xã Hưng Yên Bắc",
  },
  {
    districtId: "431",
    wardId: "18010",
    name: "Xã Hưng Tây",
  },
  {
    districtId: "431",
    wardId: "18016",
    name: "Xã Hưng Đạo",
  },
  {
    districtId: "431",
    wardId: "18019",
    name: "Xã Hưng Mỹ",
  },
  {
    districtId: "431",
    wardId: "18022",
    name: "Xã Hưng Thịnh",
  },
  {
    districtId: "431",
    wardId: "18025",
    name: "Xã Hưng Lĩnh",
  },
  {
    districtId: "431",
    wardId: "18028",
    name: "Xã Hưng Thông",
  },
  {
    districtId: "431",
    wardId: "18031",
    name: "Xã Hưng Tân",
  },
  {
    districtId: "431",
    wardId: "18034",
    name: "Xã Hưng Lợi",
  },
  {
    districtId: "431",
    wardId: "18037",
    name: "Xã Hưng Nghĩa",
  },
  {
    districtId: "431",
    wardId: "18040",
    name: "Xã Hưng Phúc",
  },
  {
    districtId: "431",
    wardId: "18043",
    name: "Xã Long Xá",
  },
  {
    districtId: "431",
    wardId: "18052",
    name: "Xã Châu Nhân",
  },
  {
    districtId: "431",
    wardId: "18055",
    name: "Xã Xuân Lam",
  },
  {
    districtId: "431",
    wardId: "18064",
    name: "Xã Hưng Thành",
  },
  {
    districtId: "432",
    wardId: "17104",
    name: "Xã Quỳnh Vinh",
  },
  {
    districtId: "432",
    wardId: "17107",
    name: "Xã Quỳnh Lộc",
  },
  {
    districtId: "432",
    wardId: "17110",
    name: "Phường Quỳnh Thiện",
  },
  {
    districtId: "432",
    wardId: "17113",
    name: "Xã Quỳnh Lập",
  },
  {
    districtId: "432",
    wardId: "17116",
    name: "Xã Quỳnh Trang",
  },
  {
    districtId: "432",
    wardId: "17125",
    name: "Phường Mai Hùng",
  },
  {
    districtId: "432",
    wardId: "17128",
    name: "Phường Quỳnh Dị",
  },
  {
    districtId: "432",
    wardId: "17131",
    name: "Phường Quỳnh Xuân",
  },
  {
    districtId: "432",
    wardId: "17134",
    name: "Phường Quỳnh Phương",
  },
  {
    districtId: "432",
    wardId: "17137",
    name: "Xã Quỳnh Liên",
  },
  {
    districtId: "436",
    wardId: "18070",
    name: "Phường Trần Phú",
  },
  {
    districtId: "436",
    wardId: "18073",
    name: "Phường Nam Hà",
  },
  {
    districtId: "436",
    wardId: "18076",
    name: "Phường Bắc Hà",
  },
  {
    districtId: "436",
    wardId: "18077",
    name: "Phường Nguyễn Du",
  },
  {
    districtId: "436",
    wardId: "18079",
    name: "Phường Tân Giang",
  },
  {
    districtId: "436",
    wardId: "18082",
    name: "Phường Đại Nài",
  },
  {
    districtId: "436",
    wardId: "18085",
    name: "Phường Hà Huy Tập",
  },
  {
    districtId: "436",
    wardId: "18088",
    name: "Xã Thạch Trung",
  },
  {
    districtId: "436",
    wardId: "18091",
    name: "Phường Thạch Quý",
  },
  {
    districtId: "436",
    wardId: "18094",
    name: "Phường Thạch Linh",
  },
  {
    districtId: "436",
    wardId: "18097",
    name: "Phường Văn Yên",
  },
  {
    districtId: "436",
    wardId: "18100",
    name: "Xã Thạch Hạ",
  },
  {
    districtId: "436",
    wardId: "18103",
    name: "Xã Đồng Môn",
  },
  {
    districtId: "436",
    wardId: "18109",
    name: "Xã Thạch Hưng",
  },
  {
    districtId: "436",
    wardId: "18112",
    name: "Xã Thạch Bình",
  },
  {
    districtId: "437",
    wardId: "18115",
    name: "Phường Bắc Hồng",
  },
  {
    districtId: "437",
    wardId: "18118",
    name: "Phường Nam Hồng",
  },
  {
    districtId: "437",
    wardId: "18121",
    name: "Phường Trung Lương",
  },
  {
    districtId: "437",
    wardId: "18124",
    name: "Phường Đức Thuận",
  },
  {
    districtId: "437",
    wardId: "18127",
    name: "Phường Đậu Liêu",
  },
  {
    districtId: "437",
    wardId: "18130",
    name: "Xã Thuận Lộc",
  },
  {
    districtId: "439",
    wardId: "18133",
    name: "Thị trấn Phố Châu",
  },
  {
    districtId: "439",
    wardId: "18136",
    name: "Thị trấn  Tây Sơn",
  },
  {
    districtId: "439",
    wardId: "18139",
    name: "Xã Sơn Hồng",
  },
  {
    districtId: "439",
    wardId: "18142",
    name: "Xã Sơn Tiến",
  },
  {
    districtId: "439",
    wardId: "18145",
    name: "Xã Sơn Lâm",
  },
  {
    districtId: "439",
    wardId: "18148",
    name: "Xã Sơn Lễ",
  },
  {
    districtId: "439",
    wardId: "18157",
    name: "Xã Sơn Giang",
  },
  {
    districtId: "439",
    wardId: "18160",
    name: "Xã Sơn Lĩnh",
  },
  {
    districtId: "439",
    wardId: "18163",
    name: "Xã An Hòa Thịnh",
  },
  {
    districtId: "439",
    wardId: "18172",
    name: "Xã Sơn Tây",
  },
  {
    districtId: "439",
    wardId: "18175",
    name: "Xã Sơn Ninh",
  },
  {
    districtId: "439",
    wardId: "18178",
    name: "Xã Sơn Châu",
  },
  {
    districtId: "439",
    wardId: "18181",
    name: "Xã Tân Mỹ Hà",
  },
  {
    districtId: "439",
    wardId: "18184",
    name: "Xã Quang Diệm",
  },
  {
    districtId: "439",
    wardId: "18187",
    name: "Xã Sơn Trung",
  },
  {
    districtId: "439",
    wardId: "18190",
    name: "Xã Sơn Bằng",
  },
  {
    districtId: "439",
    wardId: "18193",
    name: "Xã Sơn Bình",
  },
  {
    districtId: "439",
    wardId: "18196",
    name: "Xã Sơn Kim 1",
  },
  {
    districtId: "439",
    wardId: "18199",
    name: "Xã Sơn Kim 2",
  },
  {
    districtId: "439",
    wardId: "18202",
    name: "Xã Sơn Trà",
  },
  {
    districtId: "439",
    wardId: "18205",
    name: "Xã Sơn Long",
  },
  {
    districtId: "439",
    wardId: "18211",
    name: "Xã Kim Hoa",
  },
  {
    districtId: "439",
    wardId: "18214",
    name: "Xã Sơn Hàm",
  },
  {
    districtId: "439",
    wardId: "18217",
    name: "Xã Sơn Phú",
  },
  {
    districtId: "439",
    wardId: "18223",
    name: "Xã Sơn Trường",
  },
  {
    districtId: "440",
    wardId: "18229",
    name: "Thị trấn Đức Thọ",
  },
  {
    districtId: "440",
    wardId: "18235",
    name: "Xã Quang Vĩnh",
  },
  {
    districtId: "440",
    wardId: "18241",
    name: "Xã Tùng Châu",
  },
  {
    districtId: "440",
    wardId: "18244",
    name: "Xã Trường Sơn",
  },
  {
    districtId: "440",
    wardId: "18247",
    name: "Xã Liên Minh",
  },
  {
    districtId: "440",
    wardId: "18253",
    name: "Xã Yên Hồ",
  },
  {
    districtId: "440",
    wardId: "18259",
    name: "Xã Tùng Ảnh",
  },
  {
    districtId: "440",
    wardId: "18262",
    name: "Xã Bùi La Nhân",
  },
  {
    districtId: "440",
    wardId: "18274",
    name: "Xã Thanh Bình Thịnh",
  },
  {
    districtId: "440",
    wardId: "18277",
    name: "Xã Lâm Trung Thủy",
  },
  {
    districtId: "440",
    wardId: "18280",
    name: "Xã Hòa Lạc",
  },
  {
    districtId: "440",
    wardId: "18283",
    name: "Xã Tân Dân",
  },
  {
    districtId: "440",
    wardId: "18298",
    name: "Xã An Dũng",
  },
  {
    districtId: "440",
    wardId: "18304",
    name: "Xã Đức Đồng",
  },
  {
    districtId: "440",
    wardId: "18307",
    name: "Xã Đức Lạng",
  },
  {
    districtId: "440",
    wardId: "18310",
    name: "Xã Tân Hương",
  },
  {
    districtId: "441",
    wardId: "18313",
    name: "Thị trấn Vũ Quang",
  },
  {
    districtId: "441",
    wardId: "18316",
    name: "Xã Ân Phú",
  },
  {
    districtId: "441",
    wardId: "18319",
    name: "Xã Đức Giang",
  },
  {
    districtId: "441",
    wardId: "18322",
    name: "Xã Đức Lĩnh",
  },
  {
    districtId: "441",
    wardId: "18325",
    name: "Xã Thọ Điền",
  },
  {
    districtId: "441",
    wardId: "18328",
    name: "Xã Đức Hương",
  },
  {
    districtId: "441",
    wardId: "18331",
    name: "Xã Đức Bồng",
  },
  {
    districtId: "441",
    wardId: "18334",
    name: "Xã Đức Liên",
  },
  {
    districtId: "441",
    wardId: "18340",
    name: "Xã Hương Minh",
  },
  {
    districtId: "441",
    wardId: "18343",
    name: "Xã Quang Thọ",
  },
  {
    districtId: "442",
    wardId: "18352",
    name: "Thị trấn Xuân An",
  },
  {
    districtId: "442",
    wardId: "18355",
    name: "Xã Xuân Hội",
  },
  {
    districtId: "442",
    wardId: "18358",
    name: "Xã Đan Trường",
  },
  {
    districtId: "442",
    wardId: "18364",
    name: "Xã Xuân Phổ",
  },
  {
    districtId: "442",
    wardId: "18367",
    name: "Xã Xuân Hải",
  },
  {
    districtId: "442",
    wardId: "18370",
    name: "Xã Xuân Giang",
  },
  {
    districtId: "442",
    wardId: "18373",
    name: "Thị trấn Tiên Điền",
  },
  {
    districtId: "442",
    wardId: "18376",
    name: "Xã Xuân Yên",
  },
  {
    districtId: "442",
    wardId: "18379",
    name: "Xã Xuân Mỹ",
  },
  {
    districtId: "442",
    wardId: "18382",
    name: "Xã Xuân Thành",
  },
  {
    districtId: "442",
    wardId: "18385",
    name: "Xã Xuân Viên",
  },
  {
    districtId: "442",
    wardId: "18388",
    name: "Xã Xuân Hồng",
  },
  {
    districtId: "442",
    wardId: "18391",
    name: "Xã Cỗ Đạm",
  },
  {
    districtId: "442",
    wardId: "18394",
    name: "Xã Xuân Liên",
  },
  {
    districtId: "442",
    wardId: "18397",
    name: "Xã Xuân Lĩnh",
  },
  {
    districtId: "442",
    wardId: "18400",
    name: "Xã Xuân Lam",
  },
  {
    districtId: "442",
    wardId: "18403",
    name: "Xã Cương Gián",
  },
  {
    districtId: "443",
    wardId: "18406",
    name: "Thị trấn Nghèn",
  },
  {
    districtId: "443",
    wardId: "18415",
    name: "Xã Thiên Lộc",
  },
  {
    districtId: "443",
    wardId: "18418",
    name: "Xã Thuần Thiện",
  },
  {
    districtId: "443",
    wardId: "18427",
    name: "Xã Vượng Lộc",
  },
  {
    districtId: "443",
    wardId: "18433",
    name: "Xã Thanh Lộc",
  },
  {
    districtId: "443",
    wardId: "18436",
    name: "Xã Kim Song Trường",
  },
  {
    districtId: "443",
    wardId: "18439",
    name: "Xã Thường Nga",
  },
  {
    districtId: "443",
    wardId: "18445",
    name: "Xã Tùng Lộc",
  },
  {
    districtId: "443",
    wardId: "18454",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "443",
    wardId: "18463",
    name: "Xã Gia Hanh",
  },
  {
    districtId: "443",
    wardId: "18466",
    name: "Xã Khánh Vĩnh Yên",
  },
  {
    districtId: "443",
    wardId: "18472",
    name: "Xã Trung Lộc",
  },
  {
    districtId: "443",
    wardId: "18475",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "443",
    wardId: "18478",
    name: "Xã Thượng Lộc",
  },
  {
    districtId: "443",
    wardId: "18481",
    name: "Xã Quang Lộc",
  },
  {
    districtId: "443",
    wardId: "18484",
    name: "Thị trấn Đồng Lộc",
  },
  {
    districtId: "443",
    wardId: "18487",
    name: "Xã Mỹ Lộc",
  },
  {
    districtId: "443",
    wardId: "18490",
    name: "Xã Sơn Lộc",
  },
  {
    districtId: "444",
    wardId: "18496",
    name: "Thị trấn Hương Khê",
  },
  {
    districtId: "444",
    wardId: "18499",
    name: "Xã Điền Mỹ",
  },
  {
    districtId: "444",
    wardId: "18502",
    name: "Xã Hà Linh",
  },
  {
    districtId: "444",
    wardId: "18505",
    name: "Xã Hương Thủy",
  },
  {
    districtId: "444",
    wardId: "18508",
    name: "Xã Hòa Hải",
  },
  {
    districtId: "444",
    wardId: "18514",
    name: "Xã Phúc Đồng",
  },
  {
    districtId: "444",
    wardId: "18517",
    name: "Xã Hương Giang",
  },
  {
    districtId: "444",
    wardId: "18520",
    name: "Xã Lộc Yên",
  },
  {
    districtId: "444",
    wardId: "18523",
    name: "Xã Hương Bình",
  },
  {
    districtId: "444",
    wardId: "18526",
    name: "Xã Hương Long",
  },
  {
    districtId: "444",
    wardId: "18529",
    name: "Xã Phú Gia",
  },
  {
    districtId: "444",
    wardId: "18532",
    name: "Xã Gia Phố",
  },
  {
    districtId: "444",
    wardId: "18535",
    name: "Xã Phú Phong",
  },
  {
    districtId: "444",
    wardId: "18538",
    name: "Xã Hương Đô",
  },
  {
    districtId: "444",
    wardId: "18541",
    name: "Xã Hương Vĩnh",
  },
  {
    districtId: "444",
    wardId: "18544",
    name: "Xã Hương Xuân",
  },
  {
    districtId: "444",
    wardId: "18547",
    name: "Xã Phúc Trạch",
  },
  {
    districtId: "444",
    wardId: "18550",
    name: "Xã Hương Trà",
  },
  {
    districtId: "444",
    wardId: "18553",
    name: "Xã Hương Trạch",
  },
  {
    districtId: "444",
    wardId: "18556",
    name: "Xã Hương Lâm",
  },
  {
    districtId: "444",
    wardId: "18559",
    name: "Xã Hương Liên",
  },
  {
    districtId: "445",
    wardId: "18562",
    name: "Thị trấn Thạch Hà",
  },
  {
    districtId: "445",
    wardId: "18565",
    name: "Xã Ngọc Sơn",
  },
  {
    districtId: "445",
    wardId: "18571",
    name: "Xã Thạch Hải",
  },
  {
    districtId: "445",
    wardId: "18586",
    name: "Xã Thạch Kênh",
  },
  {
    districtId: "445",
    wardId: "18589",
    name: "Xã Thạch Sơn",
  },
  {
    districtId: "445",
    wardId: "18592",
    name: "Xã Thạch Liên",
  },
  {
    districtId: "445",
    wardId: "18595",
    name: "Xã Đỉnh Bàn",
  },
  {
    districtId: "445",
    wardId: "18601",
    name: "Xã Việt Tiến",
  },
  {
    districtId: "445",
    wardId: "18604",
    name: "Xã Thạch Khê",
  },
  {
    districtId: "445",
    wardId: "18607",
    name: "Xã Thạch Long",
  },
  {
    districtId: "445",
    wardId: "18619",
    name: "Xã Thạch Trị",
  },
  {
    districtId: "445",
    wardId: "18622",
    name: "Xã Thạch Lạc",
  },
  {
    districtId: "445",
    wardId: "18625",
    name: "Xã Thạch Ngọc",
  },
  {
    districtId: "445",
    wardId: "18628",
    name: "Xã Tượng Sơn",
  },
  {
    districtId: "445",
    wardId: "18631",
    name: "Xã Thạch Văn",
  },
  {
    districtId: "445",
    wardId: "18634",
    name: "Xã Lưu Vĩnh Sơn",
  },
  {
    districtId: "445",
    wardId: "18637",
    name: "Xã Thạch Thắng",
  },
  {
    districtId: "445",
    wardId: "18643",
    name: "Xã Thạch Đài",
  },
  {
    districtId: "445",
    wardId: "18649",
    name: "Xã Thạch Hội",
  },
  {
    districtId: "445",
    wardId: "18652",
    name: "Xã Tân Lâm Hương",
  },
  {
    districtId: "445",
    wardId: "18658",
    name: "Xã Thạch Xuân",
  },
  {
    districtId: "445",
    wardId: "18667",
    name: "Xã Nam Điền",
  },
  {
    districtId: "446",
    wardId: "18673",
    name: "Thị trấn Cẩm Xuyên",
  },
  {
    districtId: "446",
    wardId: "18676",
    name: "Thị trấn Thiên Cầm",
  },
  {
    districtId: "446",
    wardId: "18679",
    name: "Xã Yên Hòa",
  },
  {
    districtId: "446",
    wardId: "18682",
    name: "Xã Cẩm Dương",
  },
  {
    districtId: "446",
    wardId: "18685",
    name: "Xã Cẩm Bình",
  },
  {
    districtId: "446",
    wardId: "18691",
    name: "Xã Cẩm Vĩnh",
  },
  {
    districtId: "446",
    wardId: "18694",
    name: "Xã Cẩm Thành",
  },
  {
    districtId: "446",
    wardId: "18697",
    name: "Xã Cẩm Quang",
  },
  {
    districtId: "446",
    wardId: "18706",
    name: "Xã Cẩm Thạch",
  },
  {
    districtId: "446",
    wardId: "18709",
    name: "Xã Cẩm Nhượng",
  },
  {
    districtId: "446",
    wardId: "18712",
    name: "Xã Nam Phúc Thăng",
  },
  {
    districtId: "446",
    wardId: "18715",
    name: "Xã Cẩm Duệ",
  },
  {
    districtId: "446",
    wardId: "18721",
    name: "Xã Cẩm Lĩnh",
  },
  {
    districtId: "446",
    wardId: "18724",
    name: "Xã Cẩm Quan",
  },
  {
    districtId: "446",
    wardId: "18727",
    name: "Xã Cẩm Hà",
  },
  {
    districtId: "446",
    wardId: "18730",
    name: "Xã Cẩm Lộc",
  },
  {
    districtId: "446",
    wardId: "18733",
    name: "Xã Cẩm Hưng",
  },
  {
    districtId: "446",
    wardId: "18736",
    name: "Xã Cẩm Thịnh",
  },
  {
    districtId: "446",
    wardId: "18739",
    name: "Xã Cẩm Mỹ",
  },
  {
    districtId: "446",
    wardId: "18742",
    name: "Xã Cẩm Trung",
  },
  {
    districtId: "446",
    wardId: "18745",
    name: "Xã Cẩm Sơn",
  },
  {
    districtId: "446",
    wardId: "18748",
    name: "Xã Cẩm Lạc",
  },
  {
    districtId: "446",
    wardId: "18751",
    name: "Xã Cẩm Minh",
  },
  {
    districtId: "447",
    wardId: "18757",
    name: "Xã Kỳ Xuân",
  },
  {
    districtId: "447",
    wardId: "18760",
    name: "Xã Kỳ Bắc",
  },
  {
    districtId: "447",
    wardId: "18763",
    name: "Xã Kỳ Phú",
  },
  {
    districtId: "447",
    wardId: "18766",
    name: "Xã Kỳ Phong",
  },
  {
    districtId: "447",
    wardId: "18769",
    name: "Xã Kỳ Tiến",
  },
  {
    districtId: "447",
    wardId: "18772",
    name: "Xã Kỳ Giang",
  },
  {
    districtId: "447",
    wardId: "18775",
    name: "Xã Kỳ Đồng",
  },
  {
    districtId: "447",
    wardId: "18778",
    name: "Xã Kỳ Khang",
  },
  {
    districtId: "447",
    wardId: "18784",
    name: "Xã Kỳ Văn",
  },
  {
    districtId: "447",
    wardId: "18787",
    name: "Xã Kỳ Trung",
  },
  {
    districtId: "447",
    wardId: "18790",
    name: "Xã Kỳ Thọ",
  },
  {
    districtId: "447",
    wardId: "18793",
    name: "Xã Kỳ Tây",
  },
  {
    districtId: "447",
    wardId: "18799",
    name: "Xã Kỳ Thượng",
  },
  {
    districtId: "447",
    wardId: "18802",
    name: "Xã Kỳ Hải",
  },
  {
    districtId: "447",
    wardId: "18805",
    name: "Xã Kỳ Thư",
  },
  {
    districtId: "447",
    wardId: "18811",
    name: "Xã Kỳ Châu",
  },
  {
    districtId: "447",
    wardId: "18814",
    name: "Xã Kỳ Tân",
  },
  {
    districtId: "447",
    wardId: "18838",
    name: "Xã Lâm Hợp",
  },
  {
    districtId: "447",
    wardId: "18844",
    name: "Xã Kỳ Sơn",
  },
  {
    districtId: "447",
    wardId: "18850",
    name: "Xã Kỳ Lạc",
  },
  {
    districtId: "448",
    wardId: "18409",
    name: "Xã Tân Lộc",
  },
  {
    districtId: "448",
    wardId: "18412",
    name: "Xã Hồng Lộc",
  },
  {
    districtId: "448",
    wardId: "18421",
    name: "Xã Thịnh Lộc",
  },
  {
    districtId: "448",
    wardId: "18430",
    name: "Xã Bình An",
  },
  {
    districtId: "448",
    wardId: "18457",
    name: "Xã Ích Hậu",
  },
  {
    districtId: "448",
    wardId: "18493",
    name: "Xã Phù Lưu",
  },
  {
    districtId: "448",
    wardId: "18568",
    name: "Thị trấn Lộc Hà",
  },
  {
    districtId: "448",
    wardId: "18577",
    name: "Xã Thạch Mỹ",
  },
  {
    districtId: "448",
    wardId: "18580",
    name: "Xã Thạch Kim",
  },
  {
    districtId: "448",
    wardId: "18583",
    name: "Xã Thạch Châu",
  },
  {
    districtId: "448",
    wardId: "18598",
    name: "Xã Hộ Độ",
  },
  {
    districtId: "448",
    wardId: "18670",
    name: "Xã Mai Phụ",
  },
  {
    districtId: "449",
    wardId: "18754",
    name: "Phường Hưng Trí",
  },
  {
    districtId: "449",
    wardId: "18781",
    name: "Xã Kỳ Ninh",
  },
  {
    districtId: "449",
    wardId: "18796",
    name: "Xã Kỳ Lợi",
  },
  {
    districtId: "449",
    wardId: "18808",
    name: "Xã Kỳ Hà",
  },
  {
    districtId: "449",
    wardId: "18820",
    name: "Phường Kỳ Trinh",
  },
  {
    districtId: "449",
    wardId: "18823",
    name: "Phường Kỳ Thịnh",
  },
  {
    districtId: "449",
    wardId: "18829",
    name: "Xã Kỳ Hoa",
  },
  {
    districtId: "449",
    wardId: "18832",
    name: "Phường Kỳ Phương",
  },
  {
    districtId: "449",
    wardId: "18835",
    name: "Phường Kỳ Long",
  },
  {
    districtId: "449",
    wardId: "18841",
    name: "Phường Kỳ Liên",
  },
  {
    districtId: "449",
    wardId: "18847",
    name: "Xã Kỳ Nam",
  },
  {
    districtId: "450",
    wardId: "18853",
    name: "Phường Hải Thành",
  },
  {
    districtId: "450",
    wardId: "18856",
    name: "Phường Đồng Phú",
  },
  {
    districtId: "450",
    wardId: "18859",
    name: "Phường Bắc Lý",
  },
  {
    districtId: "450",
    wardId: "18865",
    name: "Phường Nam Lý",
  },
  {
    districtId: "450",
    wardId: "18868",
    name: "Phường Đồng Hải",
  },
  {
    districtId: "450",
    wardId: "18871",
    name: "Phường Đồng Sơn",
  },
  {
    districtId: "450",
    wardId: "18874",
    name: "Phường Phú Hải",
  },
  {
    districtId: "450",
    wardId: "18877",
    name: "Phường Bắc Nghĩa",
  },
  {
    districtId: "450",
    wardId: "18880",
    name: "Phường Đức Ninh Đông",
  },
  {
    districtId: "450",
    wardId: "18883",
    name: "Xã Quang Phú",
  },
  {
    districtId: "450",
    wardId: "18886",
    name: "Xã Lộc Ninh",
  },
  {
    districtId: "450",
    wardId: "18889",
    name: "Xã Bảo Ninh",
  },
  {
    districtId: "450",
    wardId: "18892",
    name: "Xã Nghĩa Ninh",
  },
  {
    districtId: "450",
    wardId: "18895",
    name: "Xã Thuận Đức",
  },
  {
    districtId: "450",
    wardId: "18898",
    name: "Xã Đức Ninh",
  },
  {
    districtId: "452",
    wardId: "18901",
    name: "Thị trấn Quy Đạt",
  },
  {
    districtId: "452",
    wardId: "18904",
    name: "Xã Dân Hóa",
  },
  {
    districtId: "452",
    wardId: "18907",
    name: "Xã Trọng Hóa",
  },
  {
    districtId: "452",
    wardId: "18910",
    name: "Xã Hóa Phúc",
  },
  {
    districtId: "452",
    wardId: "18913",
    name: "Xã Hồng Hóa",
  },
  {
    districtId: "452",
    wardId: "18916",
    name: "Xã Hóa Thanh",
  },
  {
    districtId: "452",
    wardId: "18919",
    name: "Xã Hóa Tiến",
  },
  {
    districtId: "452",
    wardId: "18922",
    name: "Xã Hóa Hợp",
  },
  {
    districtId: "452",
    wardId: "18925",
    name: "Xã Xuân Hóa",
  },
  {
    districtId: "452",
    wardId: "18928",
    name: "Xã Yên Hóa",
  },
  {
    districtId: "452",
    wardId: "18931",
    name: "Xã Minh Hóa",
  },
  {
    districtId: "452",
    wardId: "18934",
    name: "Xã Tân Hóa",
  },
  {
    districtId: "452",
    wardId: "18937",
    name: "Xã Hóa Sơn",
  },
  {
    districtId: "452",
    wardId: "18943",
    name: "Xã Trung Hóa",
  },
  {
    districtId: "452",
    wardId: "18946",
    name: "Xã Thượng Hóa",
  },
  {
    districtId: "453",
    wardId: "18949",
    name: "Thị trấn Đồng Lê",
  },
  {
    districtId: "453",
    wardId: "18952",
    name: "Xã Hương Hóa",
  },
  {
    districtId: "453",
    wardId: "18955",
    name: "Xã Kim Hóa",
  },
  {
    districtId: "453",
    wardId: "18958",
    name: "Xã Thanh Hóa",
  },
  {
    districtId: "453",
    wardId: "18961",
    name: "Xã Thanh Thạch",
  },
  {
    districtId: "453",
    wardId: "18964",
    name: "Xã Thuận Hóa",
  },
  {
    districtId: "453",
    wardId: "18967",
    name: "Xã Lâm Hóa",
  },
  {
    districtId: "453",
    wardId: "18970",
    name: "Xã Lê Hóa",
  },
  {
    districtId: "453",
    wardId: "18973",
    name: "Xã Sơn Hóa",
  },
  {
    districtId: "453",
    wardId: "18976",
    name: "Xã Đồng Hóa",
  },
  {
    districtId: "453",
    wardId: "18979",
    name: "Xã Ngư Hóa",
  },
  {
    districtId: "453",
    wardId: "18985",
    name: "Xã Thạch Hóa",
  },
  {
    districtId: "453",
    wardId: "18988",
    name: "Xã Đức Hóa",
  },
  {
    districtId: "453",
    wardId: "18991",
    name: "Xã Phong Hóa",
  },
  {
    districtId: "453",
    wardId: "18994",
    name: "Xã Mai Hóa",
  },
  {
    districtId: "453",
    wardId: "18997",
    name: "Xã Tiến Hóa",
  },
  {
    districtId: "453",
    wardId: "19000",
    name: "Xã Châu Hóa",
  },
  {
    districtId: "453",
    wardId: "19003",
    name: "Xã Cao Quảng",
  },
  {
    districtId: "453",
    wardId: "19006",
    name: "Xã Văn Hóa",
  },
  {
    districtId: "454",
    wardId: "19012",
    name: "Xã Quảng Hợp",
  },
  {
    districtId: "454",
    wardId: "19015",
    name: "Xã Quảng Kim",
  },
  {
    districtId: "454",
    wardId: "19018",
    name: "Xã Quảng Đông",
  },
  {
    districtId: "454",
    wardId: "19021",
    name: "Xã Quảng Phú",
  },
  {
    districtId: "454",
    wardId: "19024",
    name: "Xã Quảng Châu",
  },
  {
    districtId: "454",
    wardId: "19027",
    name: "Xã Quảng Thạch",
  },
  {
    districtId: "454",
    wardId: "19030",
    name: "Xã Quảng Lưu",
  },
  {
    districtId: "454",
    wardId: "19033",
    name: "Xã Quảng Tùng",
  },
  {
    districtId: "454",
    wardId: "19036",
    name: "Xã Cảnh Dương",
  },
  {
    districtId: "454",
    wardId: "19039",
    name: "Xã Quảng Tiến",
  },
  {
    districtId: "454",
    wardId: "19042",
    name: "Xã Quảng Hưng",
  },
  {
    districtId: "454",
    wardId: "19045",
    name: "Xã Quảng Xuân",
  },
  {
    districtId: "454",
    wardId: "19048",
    name: "Xã Cảnh Hóa",
  },
  {
    districtId: "454",
    wardId: "19051",
    name: "Xã Liên Trường",
  },
  {
    districtId: "454",
    wardId: "19057",
    name: "Xã Quảng Phương",
  },
  {
    districtId: "454",
    wardId: "19063",
    name: "Xã Phù Hóa",
  },
  {
    districtId: "454",
    wardId: "19072",
    name: "Xã Quảng Thanh",
  },
  {
    districtId: "455",
    wardId: "19111",
    name: "Thị trấn Hoàn Lão",
  },
  {
    districtId: "455",
    wardId: "19114",
    name: "Thị trấn NT Việt Trung",
  },
  {
    districtId: "455",
    wardId: "19117",
    name: "Xã Xuân Trạch",
  },
  {
    districtId: "455",
    wardId: "19120",
    name: "Xã Mỹ Trạch",
  },
  {
    districtId: "455",
    wardId: "19123",
    name: "Xã Hạ Trạch",
  },
  {
    districtId: "455",
    wardId: "19126",
    name: "Xã Bắc Trạch",
  },
  {
    districtId: "455",
    wardId: "19129",
    name: "Xã Lâm Trạch",
  },
  {
    districtId: "455",
    wardId: "19132",
    name: "Xã Thanh Trạch",
  },
  {
    districtId: "455",
    wardId: "19135",
    name: "Xã Liên Trạch",
  },
  {
    districtId: "455",
    wardId: "19138",
    name: "Xã Phúc Trạch",
  },
  {
    districtId: "455",
    wardId: "19141",
    name: "Xã Cự Nẫm",
  },
  {
    districtId: "455",
    wardId: "19144",
    name: "Xã Hải Phú",
  },
  {
    districtId: "455",
    wardId: "19147",
    name: "Xã Thượng Trạch",
  },
  {
    districtId: "455",
    wardId: "19150",
    name: "Xã Sơn Lộc",
  },
  {
    districtId: "455",
    wardId: "19156",
    name: "Xã Hưng Trạch",
  },
  {
    districtId: "455",
    wardId: "19159",
    name: "Xã Đồng Trạch",
  },
  {
    districtId: "455",
    wardId: "19162",
    name: "Xã Đức Trạch",
  },
  {
    districtId: "455",
    wardId: "19165",
    name: "Thị trấn Phong Nha",
  },
  {
    districtId: "455",
    wardId: "19168",
    name: "Xã Vạn Trạch",
  },
  {
    districtId: "455",
    wardId: "19174",
    name: "Xã Phú Định",
  },
  {
    districtId: "455",
    wardId: "19177",
    name: "Xã Trung Trạch",
  },
  {
    districtId: "455",
    wardId: "19180",
    name: "Xã Tây Trạch",
  },
  {
    districtId: "455",
    wardId: "19183",
    name: "Xã Hòa Trạch",
  },
  {
    districtId: "455",
    wardId: "19186",
    name: "Xã Đại Trạch",
  },
  {
    districtId: "455",
    wardId: "19189",
    name: "Xã Nhân Trạch",
  },
  {
    districtId: "455",
    wardId: "19192",
    name: "Xã Tân Trạch",
  },
  {
    districtId: "455",
    wardId: "19195",
    name: "Xã Nam Trạch",
  },
  {
    districtId: "455",
    wardId: "19198",
    name: "Xã Lý Trạch",
  },
  {
    districtId: "456",
    wardId: "19201",
    name: "Thị trấn Quán Hàu",
  },
  {
    districtId: "456",
    wardId: "19204",
    name: "Xã Trường Sơn",
  },
  {
    districtId: "456",
    wardId: "19207",
    name: "Xã Lương Ninh",
  },
  {
    districtId: "456",
    wardId: "19210",
    name: "Xã Vĩnh Ninh",
  },
  {
    districtId: "456",
    wardId: "19213",
    name: "Xã Võ Ninh",
  },
  {
    districtId: "456",
    wardId: "19216",
    name: "Xã Hải Ninh",
  },
  {
    districtId: "456",
    wardId: "19219",
    name: "Xã Hàm Ninh",
  },
  {
    districtId: "456",
    wardId: "19222",
    name: "Xã Duy Ninh",
  },
  {
    districtId: "456",
    wardId: "19225",
    name: "Xã Gia Ninh",
  },
  {
    districtId: "456",
    wardId: "19228",
    name: "Xã Trường Xuân",
  },
  {
    districtId: "456",
    wardId: "19231",
    name: "Xã Hiền Ninh",
  },
  {
    districtId: "456",
    wardId: "19234",
    name: "Xã Tân Ninh",
  },
  {
    districtId: "456",
    wardId: "19237",
    name: "Xã Xuân Ninh",
  },
  {
    districtId: "456",
    wardId: "19240",
    name: "Xã An Ninh",
  },
  {
    districtId: "456",
    wardId: "19243",
    name: "Xã Vạn Ninh",
  },
  {
    districtId: "457",
    wardId: "19246",
    name: "Thị trấn NT Lệ Ninh",
  },
  {
    districtId: "457",
    wardId: "19249",
    name: "Thị trấn Kiến Giang",
  },
  {
    districtId: "457",
    wardId: "19252",
    name: "Xã Hồng Thủy",
  },
  {
    districtId: "457",
    wardId: "19255",
    name: "Xã Ngư Thủy Bắc",
  },
  {
    districtId: "457",
    wardId: "19258",
    name: "Xã Hoa Thủy",
  },
  {
    districtId: "457",
    wardId: "19261",
    name: "Xã Thanh Thủy",
  },
  {
    districtId: "457",
    wardId: "19264",
    name: "Xã An Thủy",
  },
  {
    districtId: "457",
    wardId: "19267",
    name: "Xã Phong Thủy",
  },
  {
    districtId: "457",
    wardId: "19270",
    name: "Xã Cam Thủy",
  },
  {
    districtId: "457",
    wardId: "19273",
    name: "Xã Ngân Thủy",
  },
  {
    districtId: "457",
    wardId: "19276",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "457",
    wardId: "19279",
    name: "Xã Lộc Thủy",
  },
  {
    districtId: "457",
    wardId: "19285",
    name: "Xã Liên Thủy",
  },
  {
    districtId: "457",
    wardId: "19288",
    name: "Xã Hưng Thủy",
  },
  {
    districtId: "457",
    wardId: "19291",
    name: "Xã Dương Thủy",
  },
  {
    districtId: "457",
    wardId: "19294",
    name: "Xã Tân Thủy",
  },
  {
    districtId: "457",
    wardId: "19297",
    name: "Xã Phú Thủy",
  },
  {
    districtId: "457",
    wardId: "19300",
    name: "Xã Xuân Thủy",
  },
  {
    districtId: "457",
    wardId: "19303",
    name: "Xã Mỹ Thủy",
  },
  {
    districtId: "457",
    wardId: "19306",
    name: "Xã Ngư Thủy ",
  },
  {
    districtId: "457",
    wardId: "19309",
    name: "Xã Mai Thủy",
  },
  {
    districtId: "457",
    wardId: "19312",
    name: "Xã Sen Thủy",
  },
  {
    districtId: "457",
    wardId: "19315",
    name: "Xã Thái Thủy",
  },
  {
    districtId: "457",
    wardId: "19318",
    name: "Xã Kim Thủy",
  },
  {
    districtId: "457",
    wardId: "19321",
    name: "Xã Trường Thủy",
  },
  {
    districtId: "457",
    wardId: "19327",
    name: "Xã Lâm Thủy",
  },
  {
    districtId: "458",
    wardId: "19009",
    name: "Phường Ba Đồn",
  },
  {
    districtId: "458",
    wardId: "19060",
    name: "Phường Quảng Long",
  },
  {
    districtId: "458",
    wardId: "19066",
    name: "Phường Quảng Thọ",
  },
  {
    districtId: "458",
    wardId: "19069",
    name: "Xã Quảng Tiên",
  },
  {
    districtId: "458",
    wardId: "19075",
    name: "Xã Quảng Trung",
  },
  {
    districtId: "458",
    wardId: "19078",
    name: "Phường Quảng Phong",
  },
  {
    districtId: "458",
    wardId: "19081",
    name: "Phường Quảng Thuận",
  },
  {
    districtId: "458",
    wardId: "19084",
    name: "Xã Quảng Tân",
  },
  {
    districtId: "458",
    wardId: "19087",
    name: "Xã Quảng Hải",
  },
  {
    districtId: "458",
    wardId: "19090",
    name: "Xã Quảng Sơn",
  },
  {
    districtId: "458",
    wardId: "19093",
    name: "Xã Quảng Lộc",
  },
  {
    districtId: "458",
    wardId: "19096",
    name: "Xã Quảng Thủy",
  },
  {
    districtId: "458",
    wardId: "19099",
    name: "Xã Quảng Văn",
  },
  {
    districtId: "458",
    wardId: "19102",
    name: "Phường Quảng Phúc",
  },
  {
    districtId: "458",
    wardId: "19105",
    name: "Xã Quảng Hòa",
  },
  {
    districtId: "458",
    wardId: "19108",
    name: "Xã Quảng Minh",
  },
  {
    districtId: "461",
    wardId: "19330",
    name: "Phường Đông Giang",
  },
  {
    districtId: "461",
    wardId: "19333",
    name: "Phường 1",
  },
  {
    districtId: "461",
    wardId: "19336",
    name: "Phường Đông Lễ",
  },
  {
    districtId: "461",
    wardId: "19339",
    name: "Phường Đông Thanh",
  },
  {
    districtId: "461",
    wardId: "19342",
    name: "Phường 2",
  },
  {
    districtId: "461",
    wardId: "19345",
    name: "Phường 4",
  },
  {
    districtId: "461",
    wardId: "19348",
    name: "Phường 5",
  },
  {
    districtId: "461",
    wardId: "19351",
    name: "Phường Đông Lương",
  },
  {
    districtId: "461",
    wardId: "19354",
    name: "Phường 3",
  },
  {
    districtId: "462",
    wardId: "19357",
    name: "Phường 1",
  },
  {
    districtId: "462",
    wardId: "19358",
    name: "Phường An Đôn",
  },
  {
    districtId: "462",
    wardId: "19360",
    name: "Phường 2",
  },
  {
    districtId: "462",
    wardId: "19361",
    name: "Phường 3",
  },
  {
    districtId: "462",
    wardId: "19705",
    name: "Xã Hải Lệ",
  },
  {
    districtId: "464",
    wardId: "19363",
    name: "Thị trấn Hồ Xá",
  },
  {
    districtId: "464",
    wardId: "19366",
    name: "Thị trấn Bến Quan",
  },
  {
    districtId: "464",
    wardId: "19369",
    name: "Xã Vĩnh Thái",
  },
  {
    districtId: "464",
    wardId: "19372",
    name: "Xã Vĩnh Tú",
  },
  {
    districtId: "464",
    wardId: "19375",
    name: "Xã Vĩnh Chấp",
  },
  {
    districtId: "464",
    wardId: "19378",
    name: "Xã Trung Nam",
  },
  {
    districtId: "464",
    wardId: "19384",
    name: "Xã Kim Thạch",
  },
  {
    districtId: "464",
    wardId: "19387",
    name: "Xã Vĩnh Long",
  },
  {
    districtId: "464",
    wardId: "19393",
    name: "Xã Vĩnh Khê",
  },
  {
    districtId: "464",
    wardId: "19396",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "464",
    wardId: "19402",
    name: "Xã Vĩnh Thủy",
  },
  {
    districtId: "464",
    wardId: "19405",
    name: "Xã Vĩnh Lâm",
  },
  {
    districtId: "464",
    wardId: "19408",
    name: "Xã Hiền Thành",
  },
  {
    districtId: "464",
    wardId: "19414",
    name: "Thị trấn Cửa Tùng",
  },
  {
    districtId: "464",
    wardId: "19417",
    name: "Xã Vĩnh Hà",
  },
  {
    districtId: "464",
    wardId: "19420",
    name: "Xã Vĩnh Sơn",
  },
  {
    districtId: "464",
    wardId: "19423",
    name: "Xã Vĩnh Giang",
  },
  {
    districtId: "464",
    wardId: "19426",
    name: "Xã Vĩnh Ô",
  },
  {
    districtId: "465",
    wardId: "19429",
    name: "Thị trấn Khe Sanh",
  },
  {
    districtId: "465",
    wardId: "19432",
    name: "Thị trấn Lao Bảo",
  },
  {
    districtId: "465",
    wardId: "19435",
    name: "Xã Hướng Lập",
  },
  {
    districtId: "465",
    wardId: "19438",
    name: "Xã Hướng Việt",
  },
  {
    districtId: "465",
    wardId: "19441",
    name: "Xã Hướng Phùng",
  },
  {
    districtId: "465",
    wardId: "19444",
    name: "Xã Hướng Sơn",
  },
  {
    districtId: "465",
    wardId: "19447",
    name: "Xã Hướng Linh",
  },
  {
    districtId: "465",
    wardId: "19450",
    name: "Xã Tân Hợp",
  },
  {
    districtId: "465",
    wardId: "19453",
    name: "Xã Hướng Tân",
  },
  {
    districtId: "465",
    wardId: "19456",
    name: "Xã Tân Thành",
  },
  {
    districtId: "465",
    wardId: "19459",
    name: "Xã Tân Long",
  },
  {
    districtId: "465",
    wardId: "19462",
    name: "Xã Tân Lập",
  },
  {
    districtId: "465",
    wardId: "19465",
    name: "Xã Tân Liên",
  },
  {
    districtId: "465",
    wardId: "19468",
    name: "Xã Húc",
  },
  {
    districtId: "465",
    wardId: "19471",
    name: "Xã Thuận",
  },
  {
    districtId: "465",
    wardId: "19474",
    name: "Xã Hướng Lộc",
  },
  {
    districtId: "465",
    wardId: "19477",
    name: "Xã Ba Tầng",
  },
  {
    districtId: "465",
    wardId: "19480",
    name: "Xã Thanh",
  },
  {
    districtId: "465",
    wardId: "19483",
    name: "Xã  A Dơi",
  },
  {
    districtId: "465",
    wardId: "19489",
    name: "Xã Lìa",
  },
  {
    districtId: "465",
    wardId: "19492",
    name: "Xã Xy",
  },
  {
    districtId: "466",
    wardId: "19495",
    name: "Thị trấn Gio Linh",
  },
  {
    districtId: "466",
    wardId: "19496",
    name: "Thị trấn Cửa Việt",
  },
  {
    districtId: "466",
    wardId: "19498",
    name: "Xã Trung Giang",
  },
  {
    districtId: "466",
    wardId: "19501",
    name: "Xã Trung Hải",
  },
  {
    districtId: "466",
    wardId: "19504",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "466",
    wardId: "19507",
    name: "Xã Phong Bình",
  },
  {
    districtId: "466",
    wardId: "19510",
    name: "Xã Gio Mỹ",
  },
  {
    districtId: "466",
    wardId: "19519",
    name: "Xã Gio Hải",
  },
  {
    districtId: "466",
    wardId: "19522",
    name: "Xã Gio An",
  },
  {
    districtId: "466",
    wardId: "19525",
    name: "Xã Gio Châu",
  },
  {
    districtId: "466",
    wardId: "19531",
    name: "Xã Gio Việt",
  },
  {
    districtId: "466",
    wardId: "19534",
    name: "Xã Linh Trường",
  },
  {
    districtId: "466",
    wardId: "19537",
    name: "Xã Gio Sơn",
  },
  {
    districtId: "466",
    wardId: "19543",
    name: "Xã Gio Mai",
  },
  {
    districtId: "466",
    wardId: "19546",
    name: "Xã Hải Thái",
  },
  {
    districtId: "466",
    wardId: "19549",
    name: "Xã Linh Hải",
  },
  {
    districtId: "466",
    wardId: "19552",
    name: "Xã Gio Quang",
  },
  {
    districtId: "467",
    wardId: "19555",
    name: "Thị trấn Krông Klang",
  },
  {
    districtId: "467",
    wardId: "19558",
    name: "Xã Mò Ó",
  },
  {
    districtId: "467",
    wardId: "19561",
    name: "Xã Hướng Hiệp",
  },
  {
    districtId: "467",
    wardId: "19564",
    name: "Xã Đa Krông",
  },
  {
    districtId: "467",
    wardId: "19567",
    name: "Xã Triệu Nguyên",
  },
  {
    districtId: "467",
    wardId: "19570",
    name: "Xã Ba Lòng",
  },
  {
    districtId: "467",
    wardId: "19576",
    name: "Xã Ba Nang",
  },
  {
    districtId: "467",
    wardId: "19579",
    name: "Xã Tà Long",
  },
  {
    districtId: "467",
    wardId: "19582",
    name: "Xã Húc Nghì",
  },
  {
    districtId: "467",
    wardId: "19585",
    name: "Xã A Vao",
  },
  {
    districtId: "467",
    wardId: "19588",
    name: "Xã Tà Rụt",
  },
  {
    districtId: "467",
    wardId: "19591",
    name: "Xã A Bung",
  },
  {
    districtId: "467",
    wardId: "19594",
    name: "Xã A Ngo",
  },
  {
    districtId: "468",
    wardId: "19597",
    name: "Thị trấn Cam Lộ",
  },
  {
    districtId: "468",
    wardId: "19600",
    name: "Xã Cam Tuyền",
  },
  {
    districtId: "468",
    wardId: "19603",
    name: "Xã Thanh An",
  },
  {
    districtId: "468",
    wardId: "19606",
    name: "Xã Cam Thủy",
  },
  {
    districtId: "468",
    wardId: "19612",
    name: "Xã Cam Thành",
  },
  {
    districtId: "468",
    wardId: "19615",
    name: "Xã Cam Hiếu",
  },
  {
    districtId: "468",
    wardId: "19618",
    name: "Xã Cam Chính",
  },
  {
    districtId: "468",
    wardId: "19621",
    name: "Xã Cam Nghĩa",
  },
  {
    districtId: "469",
    wardId: "19624",
    name: "Thị Trấn Ái Tử",
  },
  {
    districtId: "469",
    wardId: "19627",
    name: "Xã Triệu An",
  },
  {
    districtId: "469",
    wardId: "19630",
    name: "Xã Triệu Vân",
  },
  {
    districtId: "469",
    wardId: "19633",
    name: "Xã Triệu Phước",
  },
  {
    districtId: "469",
    wardId: "19636",
    name: "Xã Triệu Độ",
  },
  {
    districtId: "469",
    wardId: "19639",
    name: "Xã Triệu Trạch",
  },
  {
    districtId: "469",
    wardId: "19642",
    name: "Xã Triệu Thuận",
  },
  {
    districtId: "469",
    wardId: "19645",
    name: "Xã Triệu Đại",
  },
  {
    districtId: "469",
    wardId: "19648",
    name: "Xã Triệu Hòa",
  },
  {
    districtId: "469",
    wardId: "19651",
    name: "Xã Triệu Lăng",
  },
  {
    districtId: "469",
    wardId: "19654",
    name: "Xã Triệu Sơn",
  },
  {
    districtId: "469",
    wardId: "19657",
    name: "Xã Triệu Long",
  },
  {
    districtId: "469",
    wardId: "19660",
    name: "Xã Triệu Tài",
  },
  {
    districtId: "469",
    wardId: "19666",
    name: "Xã Triệu Trung",
  },
  {
    districtId: "469",
    wardId: "19669",
    name: "Xã Triệu Ái",
  },
  {
    districtId: "469",
    wardId: "19672",
    name: "Xã Triệu Thượng",
  },
  {
    districtId: "469",
    wardId: "19675",
    name: "Xã Triệu Giang",
  },
  {
    districtId: "469",
    wardId: "19678",
    name: "Xã Triệu Thành",
  },
  {
    districtId: "470",
    wardId: "19681",
    name: "Thị trấn Diên Sanh",
  },
  {
    districtId: "470",
    wardId: "19684",
    name: "Xã Hải An",
  },
  {
    districtId: "470",
    wardId: "19687",
    name: "Xã Hải Ba",
  },
  {
    districtId: "470",
    wardId: "19693",
    name: "Xã Hải Quy",
  },
  {
    districtId: "470",
    wardId: "19696",
    name: "Xã Hải Quế",
  },
  {
    districtId: "470",
    wardId: "19699",
    name: "Xã Hải Hưng",
  },
  {
    districtId: "470",
    wardId: "19702",
    name: "Xã Hải Phú",
  },
  {
    districtId: "470",
    wardId: "19708",
    name: "Xã Hải Thượng",
  },
  {
    districtId: "470",
    wardId: "19711",
    name: "Xã Hải Dương",
  },
  {
    districtId: "470",
    wardId: "19714",
    name: "Xã Hải Định",
  },
  {
    districtId: "470",
    wardId: "19717",
    name: "Xã Hải Lâm",
  },
  {
    districtId: "470",
    wardId: "19726",
    name: "Xã Hải Phong",
  },
  {
    districtId: "470",
    wardId: "19729",
    name: "Xã Hải Trường",
  },
  {
    districtId: "470",
    wardId: "19735",
    name: "Xã Hải Sơn",
  },
  {
    districtId: "470",
    wardId: "19738",
    name: "Xã Hải Chánh",
  },
  {
    districtId: "470",
    wardId: "19741",
    name: "Xã Hải Khê",
  },
  {
    districtId: "471",
    wardId: "",
    name: "",
  },
  {
    districtId: "474",
    wardId: "19750",
    name: "Phường Tây Lộc",
  },
  {
    districtId: "474",
    wardId: "19753",
    name: "Phường Thuận Lộc",
  },
  {
    districtId: "474",
    wardId: "19756",
    name: "Phường Gia Hội",
  },
  {
    districtId: "474",
    wardId: "19759",
    name: "Phường Phú Hậu",
  },
  {
    districtId: "474",
    wardId: "19762",
    name: "Phường Thuận Hòa",
  },
  {
    districtId: "474",
    wardId: "19768",
    name: "Phường Đông Ba",
  },
  {
    districtId: "474",
    wardId: "19774",
    name: "Phường Kim Long",
  },
  {
    districtId: "474",
    wardId: "19777",
    name: "Phường Vỹ Dạ",
  },
  {
    districtId: "474",
    wardId: "19780",
    name: "Phường Phường Đúc",
  },
  {
    districtId: "474",
    wardId: "19783",
    name: "Phường Vĩnh Ninh",
  },
  {
    districtId: "474",
    wardId: "19786",
    name: "Phường Phú Hội",
  },
  {
    districtId: "474",
    wardId: "19789",
    name: "Phường Phú Nhuận",
  },
  {
    districtId: "474",
    wardId: "19792",
    name: "Phường Xuân Phú",
  },
  {
    districtId: "474",
    wardId: "19795",
    name: "Phường Trường An",
  },
  {
    districtId: "474",
    wardId: "19798",
    name: "Phường Phước Vĩnh",
  },
  {
    districtId: "474",
    wardId: "19801",
    name: "Phường An Cựu",
  },
  {
    districtId: "474",
    wardId: "19803",
    name: "Phường An Hòa",
  },
  {
    districtId: "474",
    wardId: "19804",
    name: "Phường Hương Sơ",
  },
  {
    districtId: "474",
    wardId: "19807",
    name: "Phường Thuỷ Biều",
  },
  {
    districtId: "474",
    wardId: "19810",
    name: "Phường Hương Long",
  },
  {
    districtId: "474",
    wardId: "19813",
    name: "Phường Thuỷ Xuân",
  },
  {
    districtId: "474",
    wardId: "19815",
    name: "Phường An Đông",
  },
  {
    districtId: "474",
    wardId: "19816",
    name: "Phường An Tây",
  },
  {
    districtId: "474",
    wardId: "19900",
    name: "Phường Thuận An",
  },
  {
    districtId: "474",
    wardId: "19906",
    name: "Xã Phú Dương",
  },
  {
    districtId: "474",
    wardId: "19909",
    name: "Xã Phú Mậu",
  },
  {
    districtId: "474",
    wardId: "19924",
    name: "Xã Phú Thanh",
  },
  {
    districtId: "474",
    wardId: "19930",
    name: "Phường Phú Thượng",
  },
  {
    districtId: "474",
    wardId: "19963",
    name: "Phường Thủy Vân",
  },
  {
    districtId: "474",
    wardId: "19981",
    name: "Xã Thủy Bằng",
  },
  {
    districtId: "474",
    wardId: "19999",
    name: "Xã Hải Dương",
  },
  {
    districtId: "474",
    wardId: "20002",
    name: "Xã Hương Phong",
  },
  {
    districtId: "474",
    wardId: "20014",
    name: "Phường Hương Vinh",
  },
  {
    districtId: "474",
    wardId: "20023",
    name: "Phường Hương An",
  },
  {
    districtId: "474",
    wardId: "20029",
    name: "Phường Hương Hồ",
  },
  {
    districtId: "474",
    wardId: "20032",
    name: "Xã Hương Thọ",
  },
  {
    districtId: "476",
    wardId: "19819",
    name: "Thị trấn Phong Điền",
  },
  {
    districtId: "476",
    wardId: "19822",
    name: "Xã Điền Hương",
  },
  {
    districtId: "476",
    wardId: "19825",
    name: "Xã Điền Môn",
  },
  {
    districtId: "476",
    wardId: "19828",
    name: "Xã Điền Lộc",
  },
  {
    districtId: "476",
    wardId: "19831",
    name: "Xã Phong Bình",
  },
  {
    districtId: "476",
    wardId: "19834",
    name: "Xã Điền Hòa",
  },
  {
    districtId: "476",
    wardId: "19837",
    name: "Xã Phong Chương",
  },
  {
    districtId: "476",
    wardId: "19840",
    name: "Xã Phong Hải",
  },
  {
    districtId: "476",
    wardId: "19843",
    name: "Xã Điền Hải",
  },
  {
    districtId: "476",
    wardId: "19846",
    name: "Xã Phong Hòa",
  },
  {
    districtId: "476",
    wardId: "19849",
    name: "Xã Phong Thu",
  },
  {
    districtId: "476",
    wardId: "19852",
    name: "Xã Phong Hiền",
  },
  {
    districtId: "476",
    wardId: "19855",
    name: "Xã Phong Mỹ",
  },
  {
    districtId: "476",
    wardId: "19858",
    name: "Xã Phong An",
  },
  {
    districtId: "476",
    wardId: "19861",
    name: "Xã Phong Xuân",
  },
  {
    districtId: "476",
    wardId: "19864",
    name: "Xã Phong Sơn",
  },
  {
    districtId: "477",
    wardId: "19867",
    name: "Thị trấn Sịa",
  },
  {
    districtId: "477",
    wardId: "19870",
    name: "Xã Quảng Thái",
  },
  {
    districtId: "477",
    wardId: "19873",
    name: "Xã Quảng Ngạn",
  },
  {
    districtId: "477",
    wardId: "19876",
    name: "Xã Quảng Lợi",
  },
  {
    districtId: "477",
    wardId: "19879",
    name: "Xã Quảng Công",
  },
  {
    districtId: "477",
    wardId: "19882",
    name: "Xã Quảng Phước",
  },
  {
    districtId: "477",
    wardId: "19885",
    name: "Xã Quảng Vinh",
  },
  {
    districtId: "477",
    wardId: "19888",
    name: "Xã Quảng An",
  },
  {
    districtId: "477",
    wardId: "19891",
    name: "Xã Quảng Thành",
  },
  {
    districtId: "477",
    wardId: "19894",
    name: "Xã Quảng Thọ",
  },
  {
    districtId: "477",
    wardId: "19897",
    name: "Xã Quảng Phú",
  },
  {
    districtId: "478",
    wardId: "19903",
    name: "Xã Phú Thuận",
  },
  {
    districtId: "478",
    wardId: "19912",
    name: "Xã Phú An",
  },
  {
    districtId: "478",
    wardId: "19915",
    name: "Xã Phú Hải",
  },
  {
    districtId: "478",
    wardId: "19918",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "478",
    wardId: "19921",
    name: "Xã Phú Diên",
  },
  {
    districtId: "478",
    wardId: "19927",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "478",
    wardId: "19933",
    name: "Xã Phú Hồ",
  },
  {
    districtId: "478",
    wardId: "19936",
    name: "Xã Vinh Xuân",
  },
  {
    districtId: "478",
    wardId: "19939",
    name: "Xã Phú Lương",
  },
  {
    districtId: "478",
    wardId: "19942",
    name: "Thị trấn Phú Đa",
  },
  {
    districtId: "478",
    wardId: "19945",
    name: "Xã Vinh Thanh",
  },
  {
    districtId: "478",
    wardId: "19948",
    name: "Xã Vinh An",
  },
  {
    districtId: "478",
    wardId: "19954",
    name: "Xã Phú Gia",
  },
  {
    districtId: "478",
    wardId: "19957",
    name: "Xã Vinh Hà",
  },
  {
    districtId: "479",
    wardId: "19960",
    name: "Phường Phú Bài",
  },
  {
    districtId: "479",
    wardId: "19966",
    name: "Xã Thủy Thanh",
  },
  {
    districtId: "479",
    wardId: "19969",
    name: "Phường Thủy Dương",
  },
  {
    districtId: "479",
    wardId: "19972",
    name: "Phường Thủy Phương",
  },
  {
    districtId: "479",
    wardId: "19975",
    name: "Phường Thủy Châu",
  },
  {
    districtId: "479",
    wardId: "19978",
    name: "Phường Thủy Lương",
  },
  {
    districtId: "479",
    wardId: "19984",
    name: "Xã Thủy Tân",
  },
  {
    districtId: "479",
    wardId: "19987",
    name: "Xã Thủy Phù",
  },
  {
    districtId: "479",
    wardId: "19990",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "479",
    wardId: "19993",
    name: "Xã Dương Hòa",
  },
  {
    districtId: "480",
    wardId: "19996",
    name: "Phường Tứ Hạ",
  },
  {
    districtId: "480",
    wardId: "20005",
    name: "Xã Hương Toàn",
  },
  {
    districtId: "480",
    wardId: "20008",
    name: "Phường Hương Vân",
  },
  {
    districtId: "480",
    wardId: "20011",
    name: "Phường Hương Văn",
  },
  {
    districtId: "480",
    wardId: "20017",
    name: "Phường Hương Xuân",
  },
  {
    districtId: "480",
    wardId: "20020",
    name: "Phường Hương Chữ",
  },
  {
    districtId: "480",
    wardId: "20026",
    name: "Xã Hương Bình",
  },
  {
    districtId: "480",
    wardId: "20035",
    name: "Xã Bình Tiến",
  },
  {
    districtId: "480",
    wardId: "20041",
    name: "Xã Bình Thành",
  },
  {
    districtId: "481",
    wardId: "20044",
    name: "Thị trấn A Lưới",
  },
  {
    districtId: "481",
    wardId: "20047",
    name: "Xã Hồng Vân",
  },
  {
    districtId: "481",
    wardId: "20050",
    name: "Xã Hồng Hạ",
  },
  {
    districtId: "481",
    wardId: "20053",
    name: "Xã Hồng Kim",
  },
  {
    districtId: "481",
    wardId: "20056",
    name: "Xã Trung Sơn",
  },
  {
    districtId: "481",
    wardId: "20059",
    name: "Xã Hương Nguyên",
  },
  {
    districtId: "481",
    wardId: "20065",
    name: "Xã Hồng Bắc",
  },
  {
    districtId: "481",
    wardId: "20068",
    name: "Xã A Ngo",
  },
  {
    districtId: "481",
    wardId: "20071",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "481",
    wardId: "20074",
    name: "Xã Phú Vinh",
  },
  {
    districtId: "481",
    wardId: "20080",
    name: "Xã Hương Phong",
  },
  {
    districtId: "481",
    wardId: "20083",
    name: "Xã Quảng Nhâm",
  },
  {
    districtId: "481",
    wardId: "20086",
    name: "Xã Hồng Thượng",
  },
  {
    districtId: "481",
    wardId: "20089",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "481",
    wardId: "20095",
    name: "Xã A Roàng",
  },
  {
    districtId: "481",
    wardId: "20098",
    name: "Xã Đông Sơn",
  },
  {
    districtId: "481",
    wardId: "20101",
    name: "Xã Lâm Đớt",
  },
  {
    districtId: "481",
    wardId: "20104",
    name: "Xã Hồng Thủy",
  },
  {
    districtId: "482",
    wardId: "20107",
    name: "Thị trấn Phú Lộc",
  },
  {
    districtId: "482",
    wardId: "20110",
    name: "Thị trấn Lăng Cô",
  },
  {
    districtId: "482",
    wardId: "20113",
    name: "Xã Vinh Mỹ",
  },
  {
    districtId: "482",
    wardId: "20116",
    name: "Xã Vinh Hưng",
  },
  {
    districtId: "482",
    wardId: "20122",
    name: "Xã Giang Hải",
  },
  {
    districtId: "482",
    wardId: "20125",
    name: "Xã Vinh Hiền",
  },
  {
    districtId: "482",
    wardId: "20128",
    name: "Xã Lộc Bổn",
  },
  {
    districtId: "482",
    wardId: "20131",
    name: "Xã Lộc Sơn",
  },
  {
    districtId: "482",
    wardId: "20134",
    name: "Xã Lộc Bình",
  },
  {
    districtId: "482",
    wardId: "20137",
    name: "Xã Lộc Vĩnh",
  },
  {
    districtId: "482",
    wardId: "20140",
    name: "Xã Lộc An",
  },
  {
    districtId: "482",
    wardId: "20143",
    name: "Xã Lộc Điền",
  },
  {
    districtId: "482",
    wardId: "20146",
    name: "Xã Lộc Thủy",
  },
  {
    districtId: "482",
    wardId: "20149",
    name: "Xã Lộc Trì",
  },
  {
    districtId: "482",
    wardId: "20152",
    name: "Xã Lộc Tiến",
  },
  {
    districtId: "482",
    wardId: "20155",
    name: "Xã Lộc Hòa",
  },
  {
    districtId: "482",
    wardId: "20158",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "483",
    wardId: "20161",
    name: "Thị trấn Khe Tre",
  },
  {
    districtId: "483",
    wardId: "20164",
    name: "Xã Hương Phú",
  },
  {
    districtId: "483",
    wardId: "20167",
    name: "Xã Hương Sơn",
  },
  {
    districtId: "483",
    wardId: "20170",
    name: "Xã Hương Lộc",
  },
  {
    districtId: "483",
    wardId: "20173",
    name: "Xã Thượng Quảng",
  },
  {
    districtId: "483",
    wardId: "20179",
    name: "Xã Hương Xuân",
  },
  {
    districtId: "483",
    wardId: "20182",
    name: "Xã Hương Hữu",
  },
  {
    districtId: "483",
    wardId: "20185",
    name: "Xã Thượng Lộ",
  },
  {
    districtId: "483",
    wardId: "20188",
    name: "Xã Thượng Long",
  },
  {
    districtId: "483",
    wardId: "20191",
    name: "Xã Thượng Nhật",
  },
  {
    districtId: "490",
    wardId: "20194",
    name: "Phường Hòa Hiệp Bắc",
  },
  {
    districtId: "490",
    wardId: "20195",
    name: "Phường Hòa Hiệp Nam",
  },
  {
    districtId: "490",
    wardId: "20197",
    name: "Phường Hòa Khánh Bắc",
  },
  {
    districtId: "490",
    wardId: "20198",
    name: "Phường Hòa Khánh Nam",
  },
  {
    districtId: "490",
    wardId: "20200",
    name: "Phường Hòa Minh",
  },
  {
    districtId: "491",
    wardId: "20203",
    name: "Phường Tam Thuận",
  },
  {
    districtId: "491",
    wardId: "20206",
    name: "Phường Thanh Khê Tây",
  },
  {
    districtId: "491",
    wardId: "20207",
    name: "Phường Thanh Khê Đông",
  },
  {
    districtId: "491",
    wardId: "20209",
    name: "Phường Xuân Hà",
  },
  {
    districtId: "491",
    wardId: "20212",
    name: "Phường Tân Chính",
  },
  {
    districtId: "491",
    wardId: "20215",
    name: "Phường Chính Gián",
  },
  {
    districtId: "491",
    wardId: "20218",
    name: "Phường Vĩnh Trung",
  },
  {
    districtId: "491",
    wardId: "20221",
    name: "Phường Thạc Gián",
  },
  {
    districtId: "491",
    wardId: "20224",
    name: "Phường An Khê",
  },
  {
    districtId: "491",
    wardId: "20225",
    name: "Phường Hòa Khê",
  },
  {
    districtId: "492",
    wardId: "20227",
    name: "Phường Thanh Bình",
  },
  {
    districtId: "492",
    wardId: "20230",
    name: "Phường Thuận Phước",
  },
  {
    districtId: "492",
    wardId: "20233",
    name: "Phường Thạch Thang",
  },
  {
    districtId: "492",
    wardId: "20236",
    name: "Phường Hải Châu  I",
  },
  {
    districtId: "492",
    wardId: "20239",
    name: "Phường Hải Châu II",
  },
  {
    districtId: "492",
    wardId: "20242",
    name: "Phường Phước Ninh",
  },
  {
    districtId: "492",
    wardId: "20245",
    name: "Phường Hòa Thuận Tây",
  },
  {
    districtId: "492",
    wardId: "20246",
    name: "Phường Hòa Thuận Đông",
  },
  {
    districtId: "492",
    wardId: "20248",
    name: "Phường Nam Dương",
  },
  {
    districtId: "492",
    wardId: "20251",
    name: "Phường Bình Hiên",
  },
  {
    districtId: "492",
    wardId: "20254",
    name: "Phường Bình Thuận",
  },
  {
    districtId: "492",
    wardId: "20257",
    name: "Phường Hòa Cường Bắc",
  },
  {
    districtId: "492",
    wardId: "20258",
    name: "Phường Hòa Cường Nam",
  },
  {
    districtId: "493",
    wardId: "20263",
    name: "Phường Thọ Quang",
  },
  {
    districtId: "493",
    wardId: "20266",
    name: "Phường Nại Hiên Đông",
  },
  {
    districtId: "493",
    wardId: "20269",
    name: "Phường Mân Thái",
  },
  {
    districtId: "493",
    wardId: "20272",
    name: "Phường An Hải Bắc",
  },
  {
    districtId: "493",
    wardId: "20275",
    name: "Phường Phước Mỹ",
  },
  {
    districtId: "493",
    wardId: "20278",
    name: "Phường An Hải Tây",
  },
  {
    districtId: "493",
    wardId: "20281",
    name: "Phường An Hải Đông",
  },
  {
    districtId: "494",
    wardId: "20284",
    name: "Phường Mỹ An",
  },
  {
    districtId: "494",
    wardId: "20285",
    name: "Phường Khuê Mỹ",
  },
  {
    districtId: "494",
    wardId: "20287",
    name: "Phường Hoà Quý",
  },
  {
    districtId: "494",
    wardId: "20290",
    name: "Phường Hoà Hải",
  },
  {
    districtId: "495",
    wardId: "20260",
    name: "Phường Khuê Trung",
  },
  {
    districtId: "495",
    wardId: "20305",
    name: "Phường Hòa Phát",
  },
  {
    districtId: "495",
    wardId: "20306",
    name: "Phường Hòa An",
  },
  {
    districtId: "495",
    wardId: "20311",
    name: "Phường Hòa Thọ Tây",
  },
  {
    districtId: "495",
    wardId: "20312",
    name: "Phường Hòa Thọ Đông",
  },
  {
    districtId: "495",
    wardId: "20314",
    name: "Phường Hòa Xuân",
  },
  {
    districtId: "497",
    wardId: "20293",
    name: "Xã Hòa Bắc",
  },
  {
    districtId: "497",
    wardId: "20296",
    name: "Xã Hòa Liên",
  },
  {
    districtId: "497",
    wardId: "20299",
    name: "Xã Hòa Ninh",
  },
  {
    districtId: "497",
    wardId: "20302",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "497",
    wardId: "20308",
    name: "Xã Hòa Nhơn",
  },
  {
    districtId: "497",
    wardId: "20317",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "497",
    wardId: "20320",
    name: "Xã Hòa Phong",
  },
  {
    districtId: "497",
    wardId: "20323",
    name: "Xã Hòa Châu",
  },
  {
    districtId: "497",
    wardId: "20326",
    name: "Xã Hòa Tiến",
  },
  {
    districtId: "497",
    wardId: "20329",
    name: "Xã Hòa Phước",
  },
  {
    districtId: "497",
    wardId: "20332",
    name: "Xã Hòa Khương",
  },
  {
    districtId: "498",
    wardId: "",
    name: "",
  },
  {
    districtId: "502",
    wardId: "20335",
    name: "Phường Tân Thạnh",
  },
  {
    districtId: "502",
    wardId: "20338",
    name: "Phường Phước Hòa",
  },
  {
    districtId: "502",
    wardId: "20341",
    name: "Phường An Mỹ",
  },
  {
    districtId: "502",
    wardId: "20344",
    name: "Phường Hòa Hương",
  },
  {
    districtId: "502",
    wardId: "20347",
    name: "Phường An Xuân",
  },
  {
    districtId: "502",
    wardId: "20350",
    name: "Phường An Sơn",
  },
  {
    districtId: "502",
    wardId: "20353",
    name: "Phường Trường Xuân",
  },
  {
    districtId: "502",
    wardId: "20356",
    name: "Phường An Phú",
  },
  {
    districtId: "502",
    wardId: "20359",
    name: "Xã Tam Thanh",
  },
  {
    districtId: "502",
    wardId: "20362",
    name: "Xã Tam Thăng",
  },
  {
    districtId: "502",
    wardId: "20371",
    name: "Xã Tam Phú",
  },
  {
    districtId: "502",
    wardId: "20375",
    name: "Phường Hoà Thuận",
  },
  {
    districtId: "502",
    wardId: "20389",
    name: "Xã Tam Ngọc",
  },
  {
    districtId: "503",
    wardId: "20398",
    name: "Phường Minh An",
  },
  {
    districtId: "503",
    wardId: "20401",
    name: "Phường Tân An",
  },
  {
    districtId: "503",
    wardId: "20404",
    name: "Phường Cẩm Phô",
  },
  {
    districtId: "503",
    wardId: "20407",
    name: "Phường Thanh Hà",
  },
  {
    districtId: "503",
    wardId: "20410",
    name: "Phường Sơn Phong",
  },
  {
    districtId: "503",
    wardId: "20413",
    name: "Phường Cẩm Châu",
  },
  {
    districtId: "503",
    wardId: "20416",
    name: "Phường Cửa Đại",
  },
  {
    districtId: "503",
    wardId: "20419",
    name: "Phường Cẩm An",
  },
  {
    districtId: "503",
    wardId: "20422",
    name: "Xã Cẩm Hà",
  },
  {
    districtId: "503",
    wardId: "20425",
    name: "Xã Cẩm Kim",
  },
  {
    districtId: "503",
    wardId: "20428",
    name: "Phường Cẩm Nam",
  },
  {
    districtId: "503",
    wardId: "20431",
    name: "Xã Cẩm Thanh",
  },
  {
    districtId: "503",
    wardId: "20434",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "504",
    wardId: "20437",
    name: "Xã Ch'ơm",
  },
  {
    districtId: "504",
    wardId: "20440",
    name: "Xã Ga Ri",
  },
  {
    districtId: "504",
    wardId: "20443",
    name: "Xã A Xan",
  },
  {
    districtId: "504",
    wardId: "20446",
    name: "Xã Tr'Hy",
  },
  {
    districtId: "504",
    wardId: "20449",
    name: "Xã Lăng",
  },
  {
    districtId: "504",
    wardId: "20452",
    name: "Xã A Nông",
  },
  {
    districtId: "504",
    wardId: "20455",
    name: "Xã A Tiêng",
  },
  {
    districtId: "504",
    wardId: "20458",
    name: "Xã Bha Lê",
  },
  {
    districtId: "504",
    wardId: "20461",
    name: "Xã A Vương",
  },
  {
    districtId: "504",
    wardId: "20464",
    name: "Xã Dang",
  },
  {
    districtId: "505",
    wardId: "20467",
    name: "Thị trấn P Rao",
  },
  {
    districtId: "505",
    wardId: "20470",
    name: "Xã Tà Lu",
  },
  {
    districtId: "505",
    wardId: "20473",
    name: "Xã Sông Kôn",
  },
  {
    districtId: "505",
    wardId: "20476",
    name: "Xã Jơ Ngây",
  },
  {
    districtId: "505",
    wardId: "20479",
    name: "Xã A Ting",
  },
  {
    districtId: "505",
    wardId: "20482",
    name: "Xã  Tư",
  },
  {
    districtId: "505",
    wardId: "20485",
    name: "Xã Ba",
  },
  {
    districtId: "505",
    wardId: "20488",
    name: "Xã A Rooi",
  },
  {
    districtId: "505",
    wardId: "20491",
    name: "Xã Za Hung",
  },
  {
    districtId: "505",
    wardId: "20494",
    name: "Xã Mà Cooi",
  },
  {
    districtId: "505",
    wardId: "20497",
    name: "Xã Ka Dăng",
  },
  {
    districtId: "506",
    wardId: "20500",
    name: "Thị Trấn Ái Nghĩa",
  },
  {
    districtId: "506",
    wardId: "20503",
    name: "Xã Đại Sơn",
  },
  {
    districtId: "506",
    wardId: "20506",
    name: "Xã Đại Lãnh",
  },
  {
    districtId: "506",
    wardId: "20509",
    name: "Xã Đại Hưng",
  },
  {
    districtId: "506",
    wardId: "20512",
    name: "Xã Đại Hồng",
  },
  {
    districtId: "506",
    wardId: "20515",
    name: "Xã Đại Đồng",
  },
  {
    districtId: "506",
    wardId: "20518",
    name: "Xã Đại Quang",
  },
  {
    districtId: "506",
    wardId: "20521",
    name: "Xã Đại Nghĩa",
  },
  {
    districtId: "506",
    wardId: "20524",
    name: "Xã Đại Hiệp",
  },
  {
    districtId: "506",
    wardId: "20527",
    name: "Xã Đại Thạnh",
  },
  {
    districtId: "506",
    wardId: "20530",
    name: "Xã Đại Chánh",
  },
  {
    districtId: "506",
    wardId: "20533",
    name: "Xã Đại Tân",
  },
  {
    districtId: "506",
    wardId: "20536",
    name: "Xã Đại Phong",
  },
  {
    districtId: "506",
    wardId: "20539",
    name: "Xã Đại Minh",
  },
  {
    districtId: "506",
    wardId: "20542",
    name: "Xã Đại Thắng",
  },
  {
    districtId: "506",
    wardId: "20545",
    name: "Xã Đại Cường",
  },
  {
    districtId: "506",
    wardId: "20547",
    name: "Xã Đại An",
  },
  {
    districtId: "506",
    wardId: "20548",
    name: "Xã Đại Hòa",
  },
  {
    districtId: "507",
    wardId: "20551",
    name: "Phường Vĩnh Điện",
  },
  {
    districtId: "507",
    wardId: "20554",
    name: "Xã Điện Tiến",
  },
  {
    districtId: "507",
    wardId: "20557",
    name: "Xã Điện Hòa",
  },
  {
    districtId: "507",
    wardId: "20560",
    name: "Xã Điện Thắng Bắc",
  },
  {
    districtId: "507",
    wardId: "20561",
    name: "Xã Điện Thắng Trung",
  },
  {
    districtId: "507",
    wardId: "20562",
    name: "Xã Điện Thắng Nam",
  },
  {
    districtId: "507",
    wardId: "20563",
    name: "Phường Điện Ngọc",
  },
  {
    districtId: "507",
    wardId: "20566",
    name: "Xã Điện Hồng",
  },
  {
    districtId: "507",
    wardId: "20569",
    name: "Xã Điện Thọ",
  },
  {
    districtId: "507",
    wardId: "20572",
    name: "Xã Điện Phước",
  },
  {
    districtId: "507",
    wardId: "20575",
    name: "Phường Điện An",
  },
  {
    districtId: "507",
    wardId: "20578",
    name: "Phường Điện Nam Bắc",
  },
  {
    districtId: "507",
    wardId: "20579",
    name: "Phường Điện Nam Trung",
  },
  {
    districtId: "507",
    wardId: "20580",
    name: "Phường Điện Nam Đông",
  },
  {
    districtId: "507",
    wardId: "20581",
    name: "Phường Điện Dương",
  },
  {
    districtId: "507",
    wardId: "20584",
    name: "Xã Điện Quang",
  },
  {
    districtId: "507",
    wardId: "20587",
    name: "Xã Điện Trung",
  },
  {
    districtId: "507",
    wardId: "20590",
    name: "Xã Điện Phong",
  },
  {
    districtId: "507",
    wardId: "20593",
    name: "Xã Điện Minh",
  },
  {
    districtId: "507",
    wardId: "20596",
    name: "Xã Điện Phương",
  },
  {
    districtId: "508",
    wardId: "20599",
    name: "Thị trấn Nam Phước",
  },
  {
    districtId: "508",
    wardId: "20602",
    name: "Xã Duy Thu",
  },
  {
    districtId: "508",
    wardId: "20605",
    name: "Xã Duy Phú",
  },
  {
    districtId: "508",
    wardId: "20608",
    name: "Xã Duy Tân",
  },
  {
    districtId: "508",
    wardId: "20611",
    name: "Xã Duy Hòa",
  },
  {
    districtId: "508",
    wardId: "20614",
    name: "Xã Duy Châu",
  },
  {
    districtId: "508",
    wardId: "20617",
    name: "Xã Duy Trinh",
  },
  {
    districtId: "508",
    wardId: "20620",
    name: "Xã Duy Sơn",
  },
  {
    districtId: "508",
    wardId: "20623",
    name: "Xã Duy Trung",
  },
  {
    districtId: "508",
    wardId: "20626",
    name: "Xã Duy Phước",
  },
  {
    districtId: "508",
    wardId: "20629",
    name: "Xã Duy Thành",
  },
  {
    districtId: "508",
    wardId: "20632",
    name: "Xã Duy Vinh",
  },
  {
    districtId: "508",
    wardId: "20635",
    name: "Xã Duy Nghĩa",
  },
  {
    districtId: "508",
    wardId: "20638",
    name: "Xã Duy Hải",
  },
  {
    districtId: "509",
    wardId: "20641",
    name: "Thị trấn Đông Phú",
  },
  {
    districtId: "509",
    wardId: "20644",
    name: "Xã Quế Xuân 1",
  },
  {
    districtId: "509",
    wardId: "20647",
    name: "Xã Quế Xuân 2",
  },
  {
    districtId: "509",
    wardId: "20650",
    name: "Xã Quế Phú",
  },
  {
    districtId: "509",
    wardId: "20651",
    name: "Thị trấn Hương An",
  },
  {
    districtId: "509",
    wardId: "20659",
    name: "Xã Quế Hiệp",
  },
  {
    districtId: "509",
    wardId: "20662",
    name: "Xã Quế Thuận",
  },
  {
    districtId: "509",
    wardId: "20665",
    name: "Xã Quế Mỹ",
  },
  {
    districtId: "509",
    wardId: "20677",
    name: "Xã Quế Long",
  },
  {
    districtId: "509",
    wardId: "20680",
    name: "Xã Quế Châu",
  },
  {
    districtId: "509",
    wardId: "20683",
    name: "Xã Quế Phong",
  },
  {
    districtId: "509",
    wardId: "20686",
    name: "Xã Quế An",
  },
  {
    districtId: "509",
    wardId: "20689",
    name: "Xã Quế Minh",
  },
  {
    districtId: "510",
    wardId: "20695",
    name: "Thị trấn Thạnh Mỹ",
  },
  {
    districtId: "510",
    wardId: "20698",
    name: "Xã Laêê",
  },
  {
    districtId: "510",
    wardId: "20699",
    name: "Xã Chơ Chun",
  },
  {
    districtId: "510",
    wardId: "20701",
    name: "Xã Zuôich",
  },
  {
    districtId: "510",
    wardId: "20702",
    name: "Xã Tà Pơơ",
  },
  {
    districtId: "510",
    wardId: "20704",
    name: "Xã La Dêê",
  },
  {
    districtId: "510",
    wardId: "20705",
    name: "Xã Đắc Tôi",
  },
  {
    districtId: "510",
    wardId: "20707",
    name: "Xã Chà Vàl",
  },
  {
    districtId: "510",
    wardId: "20710",
    name: "Xã Tà Bhinh",
  },
  {
    districtId: "510",
    wardId: "20713",
    name: "Xã Cà Dy",
  },
  {
    districtId: "510",
    wardId: "20716",
    name: "Xã Đắc Pre",
  },
  {
    districtId: "510",
    wardId: "20719",
    name: "Xã Đắc Pring",
  },
  {
    districtId: "511",
    wardId: "20722",
    name: "Thị trấn Khâm Đức",
  },
  {
    districtId: "511",
    wardId: "20725",
    name: "Xã Phước Xuân",
  },
  {
    districtId: "511",
    wardId: "20728",
    name: "Xã Phước Hiệp",
  },
  {
    districtId: "511",
    wardId: "20729",
    name: "Xã Phước Hoà",
  },
  {
    districtId: "511",
    wardId: "20731",
    name: "Xã Phước Đức",
  },
  {
    districtId: "511",
    wardId: "20734",
    name: "Xã Phước Năng",
  },
  {
    districtId: "511",
    wardId: "20737",
    name: "Xã Phước Mỹ",
  },
  {
    districtId: "511",
    wardId: "20740",
    name: "Xã Phước Chánh",
  },
  {
    districtId: "511",
    wardId: "20743",
    name: "Xã Phước Công",
  },
  {
    districtId: "511",
    wardId: "20746",
    name: "Xã Phước Kim",
  },
  {
    districtId: "511",
    wardId: "20749",
    name: "Xã Phước Lộc",
  },
  {
    districtId: "511",
    wardId: "20752",
    name: "Xã Phước Thành",
  },
  {
    districtId: "512",
    wardId: "20758",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "512",
    wardId: "20761",
    name: "Xã Hiệp Thuận",
  },
  {
    districtId: "512",
    wardId: "20764",
    name: "Xã Quế Thọ",
  },
  {
    districtId: "512",
    wardId: "20767",
    name: "Xã Bình Lâm",
  },
  {
    districtId: "512",
    wardId: "20770",
    name: "Xã Sông Trà",
  },
  {
    districtId: "512",
    wardId: "20773",
    name: "Xã Phước Trà",
  },
  {
    districtId: "512",
    wardId: "20776",
    name: "Xã Phước Gia",
  },
  {
    districtId: "512",
    wardId: "20779",
    name: "Thị trấn Tân Bình",
  },
  {
    districtId: "512",
    wardId: "20782",
    name: "Xã Quế Lưu",
  },
  {
    districtId: "512",
    wardId: "20785",
    name: "Xã Thăng Phước",
  },
  {
    districtId: "512",
    wardId: "20788",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "513",
    wardId: "20791",
    name: "Thị trấn Hà Lam",
  },
  {
    districtId: "513",
    wardId: "20794",
    name: "Xã Bình Dương",
  },
  {
    districtId: "513",
    wardId: "20797",
    name: "Xã Bình Giang",
  },
  {
    districtId: "513",
    wardId: "20800",
    name: "Xã Bình Nguyên",
  },
  {
    districtId: "513",
    wardId: "20803",
    name: "Xã Bình Phục",
  },
  {
    districtId: "513",
    wardId: "20806",
    name: "Xã Bình Triều",
  },
  {
    districtId: "513",
    wardId: "20809",
    name: "Xã Bình Đào",
  },
  {
    districtId: "513",
    wardId: "20812",
    name: "Xã Bình Minh",
  },
  {
    districtId: "513",
    wardId: "20815",
    name: "Xã Bình Lãnh",
  },
  {
    districtId: "513",
    wardId: "20818",
    name: "Xã Bình Trị",
  },
  {
    districtId: "513",
    wardId: "20821",
    name: "Xã Bình Định Bắc",
  },
  {
    districtId: "513",
    wardId: "20822",
    name: "Xã Bình Định Nam",
  },
  {
    districtId: "513",
    wardId: "20824",
    name: "Xã Bình Quý",
  },
  {
    districtId: "513",
    wardId: "20827",
    name: "Xã Bình Phú",
  },
  {
    districtId: "513",
    wardId: "20830",
    name: "Xã Bình Chánh",
  },
  {
    districtId: "513",
    wardId: "20833",
    name: "Xã Bình Tú",
  },
  {
    districtId: "513",
    wardId: "20836",
    name: "Xã Bình Sa",
  },
  {
    districtId: "513",
    wardId: "20839",
    name: "Xã Bình Hải",
  },
  {
    districtId: "513",
    wardId: "20842",
    name: "Xã Bình Quế",
  },
  {
    districtId: "513",
    wardId: "20845",
    name: "Xã Bình An",
  },
  {
    districtId: "513",
    wardId: "20848",
    name: "Xã Bình Trung",
  },
  {
    districtId: "513",
    wardId: "20851",
    name: "Xã Bình Nam",
  },
  {
    districtId: "514",
    wardId: "20854",
    name: "Thị trấn Tiên Kỳ",
  },
  {
    districtId: "514",
    wardId: "20857",
    name: "Xã Tiên Sơn",
  },
  {
    districtId: "514",
    wardId: "20860",
    name: "Xã Tiên Hà",
  },
  {
    districtId: "514",
    wardId: "20863",
    name: "Xã Tiên Cẩm",
  },
  {
    districtId: "514",
    wardId: "20866",
    name: "Xã Tiên Châu",
  },
  {
    districtId: "514",
    wardId: "20869",
    name: "Xã Tiên Lãnh",
  },
  {
    districtId: "514",
    wardId: "20872",
    name: "Xã Tiên Ngọc",
  },
  {
    districtId: "514",
    wardId: "20875",
    name: "Xã Tiên Hiệp",
  },
  {
    districtId: "514",
    wardId: "20878",
    name: "Xã Tiên Cảnh",
  },
  {
    districtId: "514",
    wardId: "20881",
    name: "Xã Tiên Mỹ",
  },
  {
    districtId: "514",
    wardId: "20884",
    name: "Xã Tiên Phong",
  },
  {
    districtId: "514",
    wardId: "20887",
    name: "Xã Tiên Thọ",
  },
  {
    districtId: "514",
    wardId: "20890",
    name: "Xã Tiên An",
  },
  {
    districtId: "514",
    wardId: "20893",
    name: "Xã Tiên Lộc",
  },
  {
    districtId: "514",
    wardId: "20896",
    name: "Xã Tiên Lập",
  },
  {
    districtId: "515",
    wardId: "20899",
    name: "Thị trấn Trà My",
  },
  {
    districtId: "515",
    wardId: "20900",
    name: "Xã Trà Sơn",
  },
  {
    districtId: "515",
    wardId: "20902",
    name: "Xã Trà Kót",
  },
  {
    districtId: "515",
    wardId: "20905",
    name: "Xã Trà Nú",
  },
  {
    districtId: "515",
    wardId: "20908",
    name: "Xã Trà Đông",
  },
  {
    districtId: "515",
    wardId: "20911",
    name: "Xã Trà Dương",
  },
  {
    districtId: "515",
    wardId: "20914",
    name: "Xã Trà Giang",
  },
  {
    districtId: "515",
    wardId: "20917",
    name: "Xã Trà Bui",
  },
  {
    districtId: "515",
    wardId: "20920",
    name: "Xã Trà Đốc",
  },
  {
    districtId: "515",
    wardId: "20923",
    name: "Xã Trà Tân",
  },
  {
    districtId: "515",
    wardId: "20926",
    name: "Xã Trà Giác",
  },
  {
    districtId: "515",
    wardId: "20929",
    name: "Xã Trà Giáp",
  },
  {
    districtId: "515",
    wardId: "20932",
    name: "Xã Trà Ka",
  },
  {
    districtId: "516",
    wardId: "20935",
    name: "Xã Trà Leng",
  },
  {
    districtId: "516",
    wardId: "20938",
    name: "Xã Trà Dơn",
  },
  {
    districtId: "516",
    wardId: "20941",
    name: "Xã Trà Tập",
  },
  {
    districtId: "516",
    wardId: "20944",
    name: "Xã Trà Mai",
  },
  {
    districtId: "516",
    wardId: "20947",
    name: "Xã Trà Cang",
  },
  {
    districtId: "516",
    wardId: "20950",
    name: "Xã Trà Linh",
  },
  {
    districtId: "516",
    wardId: "20953",
    name: "Xã Trà Nam",
  },
  {
    districtId: "516",
    wardId: "20956",
    name: "Xã Trà Don",
  },
  {
    districtId: "516",
    wardId: "20959",
    name: "Xã Trà Vân",
  },
  {
    districtId: "516",
    wardId: "20962",
    name: "Xã Trà Vinh",
  },
  {
    districtId: "517",
    wardId: "20965",
    name: "Thị trấn Núi Thành",
  },
  {
    districtId: "517",
    wardId: "20968",
    name: "Xã Tam Xuân I",
  },
  {
    districtId: "517",
    wardId: "20971",
    name: "Xã Tam Xuân II",
  },
  {
    districtId: "517",
    wardId: "20974",
    name: "Xã Tam Tiến",
  },
  {
    districtId: "517",
    wardId: "20977",
    name: "Xã Tam Sơn",
  },
  {
    districtId: "517",
    wardId: "20980",
    name: "Xã Tam Thạnh",
  },
  {
    districtId: "517",
    wardId: "20983",
    name: "Xã Tam Anh Bắc",
  },
  {
    districtId: "517",
    wardId: "20984",
    name: "Xã Tam Anh Nam",
  },
  {
    districtId: "517",
    wardId: "20986",
    name: "Xã Tam Hòa",
  },
  {
    districtId: "517",
    wardId: "20989",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "517",
    wardId: "20992",
    name: "Xã Tam Hải",
  },
  {
    districtId: "517",
    wardId: "20995",
    name: "Xã Tam Giang",
  },
  {
    districtId: "517",
    wardId: "20998",
    name: "Xã Tam Quang",
  },
  {
    districtId: "517",
    wardId: "21001",
    name: "Xã Tam Nghĩa",
  },
  {
    districtId: "517",
    wardId: "21004",
    name: "Xã Tam Mỹ Tây",
  },
  {
    districtId: "517",
    wardId: "21005",
    name: "Xã Tam Mỹ Đông",
  },
  {
    districtId: "517",
    wardId: "21007",
    name: "Xã Tam Trà",
  },
  {
    districtId: "518",
    wardId: "20364",
    name: "Thị trấn Phú Thịnh",
  },
  {
    districtId: "518",
    wardId: "20365",
    name: "Xã Tam Thành",
  },
  {
    districtId: "518",
    wardId: "20368",
    name: "Xã Tam An",
  },
  {
    districtId: "518",
    wardId: "20374",
    name: "Xã Tam Đàn",
  },
  {
    districtId: "518",
    wardId: "20377",
    name: "Xã Tam Lộc",
  },
  {
    districtId: "518",
    wardId: "20380",
    name: "Xã Tam Phước",
  },
  {
    districtId: "518",
    wardId: "20383",
    name: "Xã Tam Vinh",
  },
  {
    districtId: "518",
    wardId: "20386",
    name: "Xã Tam Thái",
  },
  {
    districtId: "518",
    wardId: "20387",
    name: "Xã Tam Đại",
  },
  {
    districtId: "518",
    wardId: "20392",
    name: "Xã Tam Dân",
  },
  {
    districtId: "518",
    wardId: "20395",
    name: "Xã Tam Lãnh",
  },
  {
    districtId: "519",
    wardId: "20656",
    name: "Xã Quế Trung",
  },
  {
    districtId: "519",
    wardId: "20668",
    name: "Xã Ninh Phước",
  },
  {
    districtId: "519",
    wardId: "20669",
    name: "Xã Phước Ninh",
  },
  {
    districtId: "519",
    wardId: "20671",
    name: "Xã Quế Lộc",
  },
  {
    districtId: "519",
    wardId: "20672",
    name: "Xã Sơn Viên",
  },
  {
    districtId: "519",
    wardId: "20692",
    name: "Xã Quế Lâm",
  },
  {
    districtId: "522",
    wardId: "21010",
    name: "Phường Lê Hồng Phong",
  },
  {
    districtId: "522",
    wardId: "21013",
    name: "Phường Trần Phú",
  },
  {
    districtId: "522",
    wardId: "21016",
    name: "Phường Quảng Phú",
  },
  {
    districtId: "522",
    wardId: "21019",
    name: "Phường Nghĩa Chánh",
  },
  {
    districtId: "522",
    wardId: "21022",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "522",
    wardId: "21025",
    name: "Phường Nguyễn Nghiêm",
  },
  {
    districtId: "522",
    wardId: "21028",
    name: "Phường Nghĩa Lộ",
  },
  {
    districtId: "522",
    wardId: "21031",
    name: "Phường Chánh Lộ",
  },
  {
    districtId: "522",
    wardId: "21034",
    name: "Xã Nghĩa Dũng",
  },
  {
    districtId: "522",
    wardId: "21037",
    name: "Xã Nghĩa Dõng",
  },
  {
    districtId: "522",
    wardId: "21172",
    name: "Phường Trương Quang Trọng",
  },
  {
    districtId: "522",
    wardId: "21187",
    name: "Xã Tịnh Hòa",
  },
  {
    districtId: "522",
    wardId: "21190",
    name: "Xã Tịnh Kỳ",
  },
  {
    districtId: "522",
    wardId: "21199",
    name: "Xã Tịnh Thiện",
  },
  {
    districtId: "522",
    wardId: "21202",
    name: "Xã Tịnh Ấn Đông",
  },
  {
    districtId: "522",
    wardId: "21208",
    name: "Xã Tịnh Châu",
  },
  {
    districtId: "522",
    wardId: "21211",
    name: "Xã Tịnh Khê",
  },
  {
    districtId: "522",
    wardId: "21214",
    name: "Xã Tịnh Long",
  },
  {
    districtId: "522",
    wardId: "21223",
    name: "Xã Tịnh Ấn Tây",
  },
  {
    districtId: "522",
    wardId: "21232",
    name: "Xã Tịnh An",
  },
  {
    districtId: "522",
    wardId: "21253",
    name: "Xã Nghĩa Phú",
  },
  {
    districtId: "522",
    wardId: "21256",
    name: "Xã Nghĩa Hà",
  },
  {
    districtId: "522",
    wardId: "21262",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "524",
    wardId: "21040",
    name: "Thị Trấn Châu Ổ",
  },
  {
    districtId: "524",
    wardId: "21043",
    name: "Xã Bình Thuận",
  },
  {
    districtId: "524",
    wardId: "21046",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "524",
    wardId: "21049",
    name: "Xã Bình Đông",
  },
  {
    districtId: "524",
    wardId: "21052",
    name: "Xã Bình Chánh",
  },
  {
    districtId: "524",
    wardId: "21055",
    name: "Xã Bình Nguyên",
  },
  {
    districtId: "524",
    wardId: "21058",
    name: "Xã Bình Khương",
  },
  {
    districtId: "524",
    wardId: "21061",
    name: "Xã Bình Trị",
  },
  {
    districtId: "524",
    wardId: "21064",
    name: "Xã Bình An",
  },
  {
    districtId: "524",
    wardId: "21067",
    name: "Xã Bình Hải",
  },
  {
    districtId: "524",
    wardId: "21070",
    name: "Xã Bình Dương",
  },
  {
    districtId: "524",
    wardId: "21073",
    name: "Xã Bình Phước",
  },
  {
    districtId: "524",
    wardId: "21079",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "524",
    wardId: "21082",
    name: "Xã Bình Trung",
  },
  {
    districtId: "524",
    wardId: "21085",
    name: "Xã Bình Minh",
  },
  {
    districtId: "524",
    wardId: "21088",
    name: "Xã Bình Long",
  },
  {
    districtId: "524",
    wardId: "21091",
    name: "Xã Bình Thanh ",
  },
  {
    districtId: "524",
    wardId: "21100",
    name: "Xã Bình Chương",
  },
  {
    districtId: "524",
    wardId: "21103",
    name: "Xã Bình Hiệp",
  },
  {
    districtId: "524",
    wardId: "21106",
    name: "Xã Bình Mỹ",
  },
  {
    districtId: "524",
    wardId: "21109",
    name: "Xã Bình Tân Phú",
  },
  {
    districtId: "524",
    wardId: "21112",
    name: "Xã Bình Châu",
  },
  {
    districtId: "525",
    wardId: "21115",
    name: "Thị trấn Trà Xuân",
  },
  {
    districtId: "525",
    wardId: "21118",
    name: "Xã Trà Giang",
  },
  {
    districtId: "525",
    wardId: "21121",
    name: "Xã Trà Thủy",
  },
  {
    districtId: "525",
    wardId: "21124",
    name: "Xã Trà Hiệp",
  },
  {
    districtId: "525",
    wardId: "21127",
    name: "Xã Trà Bình",
  },
  {
    districtId: "525",
    wardId: "21130",
    name: "Xã Trà Phú",
  },
  {
    districtId: "525",
    wardId: "21133",
    name: "Xã Trà Lâm",
  },
  {
    districtId: "525",
    wardId: "21136",
    name: "Xã Trà Tân",
  },
  {
    districtId: "525",
    wardId: "21139",
    name: "Xã Trà Sơn",
  },
  {
    districtId: "525",
    wardId: "21142",
    name: "Xã Trà Bùi",
  },
  {
    districtId: "525",
    wardId: "21145",
    name: "Xã Trà Thanh",
  },
  {
    districtId: "525",
    wardId: "21148",
    name: "Xã Sơn Trà",
  },
  {
    districtId: "525",
    wardId: "21154",
    name: "Xã Trà Phong",
  },
  {
    districtId: "525",
    wardId: "21157",
    name: "Xã Hương Trà",
  },
  {
    districtId: "525",
    wardId: "21163",
    name: "Xã Trà Xinh",
  },
  {
    districtId: "525",
    wardId: "21166",
    name: "Xã Trà Tây",
  },
  {
    districtId: "527",
    wardId: "21175",
    name: "Xã Tịnh Thọ",
  },
  {
    districtId: "527",
    wardId: "21178",
    name: "Xã Tịnh Trà",
  },
  {
    districtId: "527",
    wardId: "21181",
    name: "Xã Tịnh Phong",
  },
  {
    districtId: "527",
    wardId: "21184",
    name: "Xã Tịnh Hiệp",
  },
  {
    districtId: "527",
    wardId: "21193",
    name: "Xã Tịnh Bình",
  },
  {
    districtId: "527",
    wardId: "21196",
    name: "Xã Tịnh Đông",
  },
  {
    districtId: "527",
    wardId: "21205",
    name: "Xã Tịnh Bắc",
  },
  {
    districtId: "527",
    wardId: "21217",
    name: "Xã Tịnh Sơn",
  },
  {
    districtId: "527",
    wardId: "21220",
    name: "Xã Tịnh Hà",
  },
  {
    districtId: "527",
    wardId: "21226",
    name: "Xã Tịnh Giang",
  },
  {
    districtId: "527",
    wardId: "21229",
    name: "Xã Tịnh Minh",
  },
  {
    districtId: "528",
    wardId: "21235",
    name: "Thị trấn La Hà",
  },
  {
    districtId: "528",
    wardId: "21238",
    name: "Thị trấn Sông Vệ",
  },
  {
    districtId: "528",
    wardId: "21241",
    name: "Xã Nghĩa Lâm",
  },
  {
    districtId: "528",
    wardId: "21244",
    name: "Xã Nghĩa Thắng",
  },
  {
    districtId: "528",
    wardId: "21247",
    name: "Xã Nghĩa Thuận",
  },
  {
    districtId: "528",
    wardId: "21250",
    name: "Xã Nghĩa Kỳ",
  },
  {
    districtId: "528",
    wardId: "21259",
    name: "Xã Nghĩa Sơn",
  },
  {
    districtId: "528",
    wardId: "21268",
    name: "Xã Nghĩa Hòa",
  },
  {
    districtId: "528",
    wardId: "21271",
    name: "Xã Nghĩa Điền",
  },
  {
    districtId: "528",
    wardId: "21274",
    name: "Xã Nghĩa Thương",
  },
  {
    districtId: "528",
    wardId: "21277",
    name: "Xã Nghĩa Trung",
  },
  {
    districtId: "528",
    wardId: "21280",
    name: "Xã Nghĩa Hiệp",
  },
  {
    districtId: "528",
    wardId: "21283",
    name: "Xã Nghĩa Phương",
  },
  {
    districtId: "528",
    wardId: "21286",
    name: "Xã Nghĩa Mỹ",
  },
  {
    districtId: "529",
    wardId: "21289",
    name: "Thị trấn Di Lăng",
  },
  {
    districtId: "529",
    wardId: "21292",
    name: "Xã Sơn Hạ",
  },
  {
    districtId: "529",
    wardId: "21295",
    name: "Xã Sơn Thành",
  },
  {
    districtId: "529",
    wardId: "21298",
    name: "Xã Sơn Nham",
  },
  {
    districtId: "529",
    wardId: "21301",
    name: "Xã Sơn Bao",
  },
  {
    districtId: "529",
    wardId: "21304",
    name: "Xã Sơn Linh",
  },
  {
    districtId: "529",
    wardId: "21307",
    name: "Xã Sơn Giang",
  },
  {
    districtId: "529",
    wardId: "21310",
    name: "Xã Sơn Trung",
  },
  {
    districtId: "529",
    wardId: "21313",
    name: "Xã Sơn Thượng",
  },
  {
    districtId: "529",
    wardId: "21316",
    name: "Xã Sơn Cao",
  },
  {
    districtId: "529",
    wardId: "21319",
    name: "Xã Sơn Hải",
  },
  {
    districtId: "529",
    wardId: "21322",
    name: "Xã Sơn Thủy",
  },
  {
    districtId: "529",
    wardId: "21325",
    name: "Xã Sơn Kỳ",
  },
  {
    districtId: "529",
    wardId: "21328",
    name: "Xã Sơn Ba",
  },
  {
    districtId: "530",
    wardId: "21331",
    name: "Xã Sơn Bua",
  },
  {
    districtId: "530",
    wardId: "21334",
    name: "Xã Sơn Mùa",
  },
  {
    districtId: "530",
    wardId: "21335",
    name: "Xã Sơn Liên",
  },
  {
    districtId: "530",
    wardId: "21337",
    name: "Xã Sơn Tân",
  },
  {
    districtId: "530",
    wardId: "21338",
    name: "Xã Sơn Màu",
  },
  {
    districtId: "530",
    wardId: "21340",
    name: "Xã Sơn Dung",
  },
  {
    districtId: "530",
    wardId: "21341",
    name: "Xã Sơn Long",
  },
  {
    districtId: "530",
    wardId: "21343",
    name: "Xã Sơn Tinh",
  },
  {
    districtId: "530",
    wardId: "21346",
    name: "Xã Sơn Lập",
  },
  {
    districtId: "531",
    wardId: "21349",
    name: "Xã Long Sơn",
  },
  {
    districtId: "531",
    wardId: "21352",
    name: "Xã Long Mai",
  },
  {
    districtId: "531",
    wardId: "21355",
    name: "Xã Thanh An",
  },
  {
    districtId: "531",
    wardId: "21358",
    name: "Xã Long Môn",
  },
  {
    districtId: "531",
    wardId: "21361",
    name: "Xã Long Hiệp",
  },
  {
    districtId: "532",
    wardId: "21364",
    name: "Thị trấn Chợ Chùa",
  },
  {
    districtId: "532",
    wardId: "21367",
    name: "Xã Hành Thuận",
  },
  {
    districtId: "532",
    wardId: "21370",
    name: "Xã Hành Dũng",
  },
  {
    districtId: "532",
    wardId: "21373",
    name: "Xã Hành Trung",
  },
  {
    districtId: "532",
    wardId: "21376",
    name: "Xã Hành Nhân",
  },
  {
    districtId: "532",
    wardId: "21379",
    name: "Xã Hành Đức",
  },
  {
    districtId: "532",
    wardId: "21382",
    name: "Xã Hành Minh",
  },
  {
    districtId: "532",
    wardId: "21385",
    name: "Xã Hành Phước",
  },
  {
    districtId: "532",
    wardId: "21388",
    name: "Xã Hành Thiện",
  },
  {
    districtId: "532",
    wardId: "21391",
    name: "Xã Hành Thịnh",
  },
  {
    districtId: "532",
    wardId: "21394",
    name: "Xã Hành Tín Tây",
  },
  {
    districtId: "532",
    wardId: "21397",
    name: "Xã Hành Tín  Đông",
  },
  {
    districtId: "533",
    wardId: "21400",
    name: "Thị trấn Mộ Đức",
  },
  {
    districtId: "533",
    wardId: "21403",
    name: "Xã Đức Lợi",
  },
  {
    districtId: "533",
    wardId: "21406",
    name: "Xã Đức Thắng",
  },
  {
    districtId: "533",
    wardId: "21409",
    name: "Xã Đức Nhuận",
  },
  {
    districtId: "533",
    wardId: "21412",
    name: "Xã Đức Chánh",
  },
  {
    districtId: "533",
    wardId: "21415",
    name: "Xã Đức Hiệp",
  },
  {
    districtId: "533",
    wardId: "21418",
    name: "Xã Đức Minh",
  },
  {
    districtId: "533",
    wardId: "21421",
    name: "Xã Đức Thạnh",
  },
  {
    districtId: "533",
    wardId: "21424",
    name: "Xã Đức Hòa",
  },
  {
    districtId: "533",
    wardId: "21427",
    name: "Xã Đức Tân",
  },
  {
    districtId: "533",
    wardId: "21430",
    name: "Xã Đức Phú",
  },
  {
    districtId: "533",
    wardId: "21433",
    name: "Xã Đức Phong",
  },
  {
    districtId: "533",
    wardId: "21436",
    name: "Xã Đức Lân",
  },
  {
    districtId: "534",
    wardId: "21439",
    name: "Phường Nguyễn Nghiêm",
  },
  {
    districtId: "534",
    wardId: "21442",
    name: "Xã Phổ An",
  },
  {
    districtId: "534",
    wardId: "21445",
    name: "Xã Phổ Phong",
  },
  {
    districtId: "534",
    wardId: "21448",
    name: "Xã Phổ Thuận",
  },
  {
    districtId: "534",
    wardId: "21451",
    name: "Phường Phổ Văn",
  },
  {
    districtId: "534",
    wardId: "21454",
    name: "Phường Phổ Quang",
  },
  {
    districtId: "534",
    wardId: "21457",
    name: "Xã Phổ Nhơn",
  },
  {
    districtId: "534",
    wardId: "21460",
    name: "Phường Phổ Ninh",
  },
  {
    districtId: "534",
    wardId: "21463",
    name: "Phường Phổ Minh",
  },
  {
    districtId: "534",
    wardId: "21466",
    name: "Phường Phổ Vinh",
  },
  {
    districtId: "534",
    wardId: "21469",
    name: "Phường Phổ Hòa",
  },
  {
    districtId: "534",
    wardId: "21472",
    name: "Xã Phổ Cường",
  },
  {
    districtId: "534",
    wardId: "21475",
    name: "Xã Phổ Khánh",
  },
  {
    districtId: "534",
    wardId: "21478",
    name: "Phường Phổ Thạnh",
  },
  {
    districtId: "534",
    wardId: "21481",
    name: "Xã Phổ Châu",
  },
  {
    districtId: "535",
    wardId: "21484",
    name: "Thị trấn Ba Tơ",
  },
  {
    districtId: "535",
    wardId: "21487",
    name: "Xã Ba Điền",
  },
  {
    districtId: "535",
    wardId: "21490",
    name: "Xã Ba Vinh",
  },
  {
    districtId: "535",
    wardId: "21493",
    name: "Xã Ba Thành",
  },
  {
    districtId: "535",
    wardId: "21496",
    name: "Xã Ba Động",
  },
  {
    districtId: "535",
    wardId: "21499",
    name: "Xã Ba Dinh",
  },
  {
    districtId: "535",
    wardId: "21500",
    name: "Xã Ba Giang",
  },
  {
    districtId: "535",
    wardId: "21502",
    name: "Xã Ba Liên",
  },
  {
    districtId: "535",
    wardId: "21505",
    name: "Xã Ba Ngạc",
  },
  {
    districtId: "535",
    wardId: "21508",
    name: "Xã Ba Khâm",
  },
  {
    districtId: "535",
    wardId: "21511",
    name: "Xã Ba Cung",
  },
  {
    districtId: "535",
    wardId: "21517",
    name: "Xã Ba Tiêu",
  },
  {
    districtId: "535",
    wardId: "21520",
    name: "Xã Ba Trang",
  },
  {
    districtId: "535",
    wardId: "21523",
    name: "Xã Ba Tô",
  },
  {
    districtId: "535",
    wardId: "21526",
    name: "Xã Ba Bích",
  },
  {
    districtId: "535",
    wardId: "21529",
    name: "Xã Ba Vì",
  },
  {
    districtId: "535",
    wardId: "21532",
    name: "Xã Ba Lế",
  },
  {
    districtId: "535",
    wardId: "21535",
    name: "Xã Ba Nam",
  },
  {
    districtId: "535",
    wardId: "21538",
    name: "Xã Ba Xa",
  },
  {
    districtId: "536",
    wardId: "",
    name: "",
  },
  {
    districtId: "540",
    wardId: "21550",
    name: "Phường Nhơn Bình",
  },
  {
    districtId: "540",
    wardId: "21553",
    name: "Phường Nhơn Phú",
  },
  {
    districtId: "540",
    wardId: "21556",
    name: "Phường Đống Đa",
  },
  {
    districtId: "540",
    wardId: "21559",
    name: "Phường Trần Quang Diệu",
  },
  {
    districtId: "540",
    wardId: "21562",
    name: "Phường Hải Cảng",
  },
  {
    districtId: "540",
    wardId: "21565",
    name: "Phường Quang Trung",
  },
  {
    districtId: "540",
    wardId: "21568",
    name: "Phường Thị Nại",
  },
  {
    districtId: "540",
    wardId: "21571",
    name: "Phường Lê Hồng Phong",
  },
  {
    districtId: "540",
    wardId: "21574",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "540",
    wardId: "21577",
    name: "Phường Ngô Mây",
  },
  {
    districtId: "540",
    wardId: "21580",
    name: "Phường Lý Thường Kiệt",
  },
  {
    districtId: "540",
    wardId: "21583",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "540",
    wardId: "21586",
    name: "Phường Trần Phú",
  },
  {
    districtId: "540",
    wardId: "21589",
    name: "Phường Bùi Thị Xuân",
  },
  {
    districtId: "540",
    wardId: "21592",
    name: "Phường Nguyễn Văn Cừ",
  },
  {
    districtId: "540",
    wardId: "21595",
    name: "Phường Ghềnh Ráng",
  },
  {
    districtId: "540",
    wardId: "21598",
    name: "Xã Nhơn Lý",
  },
  {
    districtId: "540",
    wardId: "21601",
    name: "Xã Nhơn Hội",
  },
  {
    districtId: "540",
    wardId: "21604",
    name: "Xã Nhơn Hải",
  },
  {
    districtId: "540",
    wardId: "21607",
    name: "Xã Nhơn Châu",
  },
  {
    districtId: "540",
    wardId: "21991",
    name: "Xã Phước Mỹ",
  },
  {
    districtId: "542",
    wardId: "21609",
    name: "Thị trấn An Lão",
  },
  {
    districtId: "542",
    wardId: "21610",
    name: "Xã An Hưng",
  },
  {
    districtId: "542",
    wardId: "21613",
    name: "Xã An Trung",
  },
  {
    districtId: "542",
    wardId: "21616",
    name: "Xã An Dũng",
  },
  {
    districtId: "542",
    wardId: "21619",
    name: "Xã An Vinh",
  },
  {
    districtId: "542",
    wardId: "21622",
    name: "Xã An Toàn",
  },
  {
    districtId: "542",
    wardId: "21625",
    name: "Xã An Tân",
  },
  {
    districtId: "542",
    wardId: "21628",
    name: "Xã An Hòa",
  },
  {
    districtId: "542",
    wardId: "21631",
    name: "Xã An Quang",
  },
  {
    districtId: "542",
    wardId: "21634",
    name: "Xã An Nghĩa",
  },
  {
    districtId: "543",
    wardId: "21637",
    name: "Phường Tam Quan",
  },
  {
    districtId: "543",
    wardId: "21640",
    name: "Phường Bồng Sơn",
  },
  {
    districtId: "543",
    wardId: "21643",
    name: "Xã Hoài Sơn",
  },
  {
    districtId: "543",
    wardId: "21646",
    name: "Xã Hoài Châu Bắc",
  },
  {
    districtId: "543",
    wardId: "21649",
    name: "Xã Hoài Châu",
  },
  {
    districtId: "543",
    wardId: "21652",
    name: "Xã Hoài Phú",
  },
  {
    districtId: "543",
    wardId: "21655",
    name: "Phường Tam Quan Bắc",
  },
  {
    districtId: "543",
    wardId: "21658",
    name: "Phường Tam Quan Nam",
  },
  {
    districtId: "543",
    wardId: "21661",
    name: "Phường Hoài Hảo",
  },
  {
    districtId: "543",
    wardId: "21664",
    name: "Phường Hoài Thanh Tây",
  },
  {
    districtId: "543",
    wardId: "21667",
    name: "Phường Hoài Thanh",
  },
  {
    districtId: "543",
    wardId: "21670",
    name: "Phường Hoài Hương",
  },
  {
    districtId: "543",
    wardId: "21673",
    name: "Phường Hoài Tân",
  },
  {
    districtId: "543",
    wardId: "21676",
    name: "Xã Hoài Hải",
  },
  {
    districtId: "543",
    wardId: "21679",
    name: "Phường Hoài Xuân",
  },
  {
    districtId: "543",
    wardId: "21682",
    name: "Xã Hoài Mỹ",
  },
  {
    districtId: "543",
    wardId: "21685",
    name: "Phường Hoài Đức",
  },
  {
    districtId: "544",
    wardId: "21688",
    name: "Thị trấn Tăng Bạt Hổ",
  },
  {
    districtId: "544",
    wardId: "21690",
    name: "Xã Ân Hảo Tây",
  },
  {
    districtId: "544",
    wardId: "21691",
    name: "Xã Ân Hảo Đông",
  },
  {
    districtId: "544",
    wardId: "21694",
    name: "Xã Ân Sơn",
  },
  {
    districtId: "544",
    wardId: "21697",
    name: "Xã Ân Mỹ",
  },
  {
    districtId: "544",
    wardId: "21700",
    name: "Xã Đak Mang",
  },
  {
    districtId: "544",
    wardId: "21703",
    name: "Xã Ân Tín",
  },
  {
    districtId: "544",
    wardId: "21706",
    name: "Xã Ân Thạnh",
  },
  {
    districtId: "544",
    wardId: "21709",
    name: "Xã Ân Phong",
  },
  {
    districtId: "544",
    wardId: "21712",
    name: "Xã Ân Đức",
  },
  {
    districtId: "544",
    wardId: "21715",
    name: "Xã Ân Hữu",
  },
  {
    districtId: "544",
    wardId: "21718",
    name: "Xã Bok Tới",
  },
  {
    districtId: "544",
    wardId: "21721",
    name: "Xã Ân Tường Tây",
  },
  {
    districtId: "544",
    wardId: "21724",
    name: "Xã Ân Tường Đông",
  },
  {
    districtId: "544",
    wardId: "21727",
    name: "Xã Ân Nghĩa",
  },
  {
    districtId: "545",
    wardId: "21730",
    name: "Thị trấn Phù Mỹ",
  },
  {
    districtId: "545",
    wardId: "21733",
    name: "Thị trấn Bình Dương",
  },
  {
    districtId: "545",
    wardId: "21736",
    name: "Xã Mỹ Đức",
  },
  {
    districtId: "545",
    wardId: "21739",
    name: "Xã Mỹ Châu",
  },
  {
    districtId: "545",
    wardId: "21742",
    name: "Xã Mỹ Thắng",
  },
  {
    districtId: "545",
    wardId: "21745",
    name: "Xã Mỹ Lộc",
  },
  {
    districtId: "545",
    wardId: "21748",
    name: "Xã Mỹ Lợi",
  },
  {
    districtId: "545",
    wardId: "21751",
    name: "Xã Mỹ An",
  },
  {
    districtId: "545",
    wardId: "21754",
    name: "Xã Mỹ Phong",
  },
  {
    districtId: "545",
    wardId: "21757",
    name: "Xã Mỹ Trinh",
  },
  {
    districtId: "545",
    wardId: "21760",
    name: "Xã Mỹ Thọ",
  },
  {
    districtId: "545",
    wardId: "21763",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "545",
    wardId: "21766",
    name: "Xã Mỹ Thành",
  },
  {
    districtId: "545",
    wardId: "21769",
    name: "Xã Mỹ Chánh",
  },
  {
    districtId: "545",
    wardId: "21772",
    name: "Xã Mỹ Quang",
  },
  {
    districtId: "545",
    wardId: "21775",
    name: "Xã Mỹ Hiệp",
  },
  {
    districtId: "545",
    wardId: "21778",
    name: "Xã Mỹ Tài",
  },
  {
    districtId: "545",
    wardId: "21781",
    name: "Xã Mỹ Cát",
  },
  {
    districtId: "545",
    wardId: "21784",
    name: "Xã Mỹ Chánh Tây",
  },
  {
    districtId: "546",
    wardId: "21786",
    name: "Thị trấn Vĩnh Thạnh",
  },
  {
    districtId: "546",
    wardId: "21787",
    name: "Xã Vĩnh Sơn",
  },
  {
    districtId: "546",
    wardId: "21790",
    name: "Xã Vĩnh Kim",
  },
  {
    districtId: "546",
    wardId: "21796",
    name: "Xã Vĩnh Hiệp",
  },
  {
    districtId: "546",
    wardId: "21799",
    name: "Xã Vĩnh Hảo",
  },
  {
    districtId: "546",
    wardId: "21801",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "546",
    wardId: "21802",
    name: "Xã Vĩnh Thịnh",
  },
  {
    districtId: "546",
    wardId: "21804",
    name: "Xã Vĩnh Thuận",
  },
  {
    districtId: "546",
    wardId: "21805",
    name: "Xã Vĩnh Quang",
  },
  {
    districtId: "547",
    wardId: "21808",
    name: "Thị trấn Phú Phong",
  },
  {
    districtId: "547",
    wardId: "21811",
    name: "Xã Bình Tân",
  },
  {
    districtId: "547",
    wardId: "21814",
    name: "Xã Tây Thuận",
  },
  {
    districtId: "547",
    wardId: "21817",
    name: "Xã Bình Thuận",
  },
  {
    districtId: "547",
    wardId: "21820",
    name: "Xã Tây Giang",
  },
  {
    districtId: "547",
    wardId: "21823",
    name: "Xã Bình Thành",
  },
  {
    districtId: "547",
    wardId: "21826",
    name: "Xã Tây An",
  },
  {
    districtId: "547",
    wardId: "21829",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "547",
    wardId: "21832",
    name: "Xã Tây Bình",
  },
  {
    districtId: "547",
    wardId: "21835",
    name: "Xã Bình Tường",
  },
  {
    districtId: "547",
    wardId: "21838",
    name: "Xã Tây Vinh",
  },
  {
    districtId: "547",
    wardId: "21841",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "547",
    wardId: "21844",
    name: "Xã Tây Xuân",
  },
  {
    districtId: "547",
    wardId: "21847",
    name: "Xã Bình Nghi",
  },
  {
    districtId: "547",
    wardId: "21850",
    name: "Xã Tây Phú",
  },
  {
    districtId: "548",
    wardId: "21853",
    name: "Thị trấn Ngô Mây",
  },
  {
    districtId: "548",
    wardId: "21856",
    name: "Xã Cát Sơn",
  },
  {
    districtId: "548",
    wardId: "21859",
    name: "Xã Cát Minh",
  },
  {
    districtId: "548",
    wardId: "21862",
    name: "Xã Cát Khánh",
  },
  {
    districtId: "548",
    wardId: "21865",
    name: "Xã Cát Tài",
  },
  {
    districtId: "548",
    wardId: "21868",
    name: "Xã Cát Lâm",
  },
  {
    districtId: "548",
    wardId: "21871",
    name: "Xã Cát Hanh",
  },
  {
    districtId: "548",
    wardId: "21874",
    name: "Xã Cát Thành",
  },
  {
    districtId: "548",
    wardId: "21877",
    name: "Xã Cát Trinh",
  },
  {
    districtId: "548",
    wardId: "21880",
    name: "Xã Cát Hải",
  },
  {
    districtId: "548",
    wardId: "21883",
    name: "Xã Cát Hiệp",
  },
  {
    districtId: "548",
    wardId: "21886",
    name: "Xã Cát Nhơn",
  },
  {
    districtId: "548",
    wardId: "21889",
    name: "Xã Cát Hưng",
  },
  {
    districtId: "548",
    wardId: "21892",
    name: "Xã Cát Tường",
  },
  {
    districtId: "548",
    wardId: "21895",
    name: "Xã Cát Tân",
  },
  {
    districtId: "548",
    wardId: "21898",
    name: "Thị trấn Cát Tiến",
  },
  {
    districtId: "548",
    wardId: "21901",
    name: "Xã Cát Thắng",
  },
  {
    districtId: "548",
    wardId: "21904",
    name: "Xã Cát Chánh",
  },
  {
    districtId: "549",
    wardId: "21907",
    name: "Phường Bình Định",
  },
  {
    districtId: "549",
    wardId: "21910",
    name: "Phường Đập Đá",
  },
  {
    districtId: "549",
    wardId: "21913",
    name: "Xã Nhơn Mỹ",
  },
  {
    districtId: "549",
    wardId: "21916",
    name: "Phường Nhơn Thành",
  },
  {
    districtId: "549",
    wardId: "21919",
    name: "Xã Nhơn Hạnh",
  },
  {
    districtId: "549",
    wardId: "21922",
    name: "Xã Nhơn Hậu",
  },
  {
    districtId: "549",
    wardId: "21925",
    name: "Xã Nhơn Phong",
  },
  {
    districtId: "549",
    wardId: "21928",
    name: "Xã Nhơn An",
  },
  {
    districtId: "549",
    wardId: "21931",
    name: "Xã Nhơn Phúc",
  },
  {
    districtId: "549",
    wardId: "21934",
    name: "Phường Nhơn Hưng",
  },
  {
    districtId: "549",
    wardId: "21937",
    name: "Xã Nhơn Khánh",
  },
  {
    districtId: "549",
    wardId: "21940",
    name: "Xã Nhơn Lộc",
  },
  {
    districtId: "549",
    wardId: "21943",
    name: "Phường Nhơn Hoà",
  },
  {
    districtId: "549",
    wardId: "21946",
    name: "Xã Nhơn Tân",
  },
  {
    districtId: "549",
    wardId: "21949",
    name: "Xã Nhơn Thọ",
  },
  {
    districtId: "550",
    wardId: "21952",
    name: "Thị trấn Tuy Phước",
  },
  {
    districtId: "550",
    wardId: "21955",
    name: "Thị trấn Diêu Trì",
  },
  {
    districtId: "550",
    wardId: "21958",
    name: "Xã Phước Thắng",
  },
  {
    districtId: "550",
    wardId: "21961",
    name: "Xã Phước Hưng",
  },
  {
    districtId: "550",
    wardId: "21964",
    name: "Xã Phước Quang",
  },
  {
    districtId: "550",
    wardId: "21967",
    name: "Xã Phước Hòa",
  },
  {
    districtId: "550",
    wardId: "21970",
    name: "Xã Phước Sơn",
  },
  {
    districtId: "550",
    wardId: "21973",
    name: "Xã Phước Hiệp",
  },
  {
    districtId: "550",
    wardId: "21976",
    name: "Xã Phước Lộc",
  },
  {
    districtId: "550",
    wardId: "21979",
    name: "Xã Phước Nghĩa",
  },
  {
    districtId: "550",
    wardId: "21982",
    name: "Xã Phước Thuận",
  },
  {
    districtId: "550",
    wardId: "21985",
    name: "Xã Phước An",
  },
  {
    districtId: "550",
    wardId: "21988",
    name: "Xã Phước Thành",
  },
  {
    districtId: "551",
    wardId: "21994",
    name: "Thị trấn Vân Canh",
  },
  {
    districtId: "551",
    wardId: "21997",
    name: "Xã Canh Liên",
  },
  {
    districtId: "551",
    wardId: "22000",
    name: "Xã Canh Hiệp",
  },
  {
    districtId: "551",
    wardId: "22003",
    name: "Xã Canh Vinh",
  },
  {
    districtId: "551",
    wardId: "22006",
    name: "Xã Canh Hiển",
  },
  {
    districtId: "551",
    wardId: "22009",
    name: "Xã Canh Thuận",
  },
  {
    districtId: "551",
    wardId: "22012",
    name: "Xã Canh Hòa",
  },
  {
    districtId: "555",
    wardId: "22015",
    name: "Phường 1",
  },
  {
    districtId: "555",
    wardId: "22018",
    name: "Phường 8",
  },
  {
    districtId: "555",
    wardId: "22021",
    name: "Phường 2",
  },
  {
    districtId: "555",
    wardId: "22024",
    name: "Phường 9",
  },
  {
    districtId: "555",
    wardId: "22027",
    name: "Phường 3",
  },
  {
    districtId: "555",
    wardId: "22030",
    name: "Phường 4",
  },
  {
    districtId: "555",
    wardId: "22033",
    name: "Phường 5",
  },
  {
    districtId: "555",
    wardId: "22036",
    name: "Phường 7",
  },
  {
    districtId: "555",
    wardId: "22039",
    name: "Phường 6",
  },
  {
    districtId: "555",
    wardId: "22040",
    name: "Phường Phú Thạnh",
  },
  {
    districtId: "555",
    wardId: "22041",
    name: "Phường Phú Đông",
  },
  {
    districtId: "555",
    wardId: "22042",
    name: "Xã Hòa Kiến",
  },
  {
    districtId: "555",
    wardId: "22045",
    name: "Xã Bình Kiến",
  },
  {
    districtId: "555",
    wardId: "22048",
    name: "Xã Bình Ngọc",
  },
  {
    districtId: "555",
    wardId: "22162",
    name: "Xã An Phú",
  },
  {
    districtId: "555",
    wardId: "22240",
    name: "Phường Phú Lâm",
  },
  {
    districtId: "557",
    wardId: "22051",
    name: "Phường Xuân Phú",
  },
  {
    districtId: "557",
    wardId: "22052",
    name: "Xã Xuân Lâm",
  },
  {
    districtId: "557",
    wardId: "22053",
    name: "Phường Xuân Thành",
  },
  {
    districtId: "557",
    wardId: "22054",
    name: "Xã Xuân Hải",
  },
  {
    districtId: "557",
    wardId: "22057",
    name: "Xã Xuân Lộc",
  },
  {
    districtId: "557",
    wardId: "22060",
    name: "Xã Xuân Bình",
  },
  {
    districtId: "557",
    wardId: "22066",
    name: "Xã Xuân Cảnh",
  },
  {
    districtId: "557",
    wardId: "22069",
    name: "Xã Xuân Thịnh",
  },
  {
    districtId: "557",
    wardId: "22072",
    name: "Xã Xuân Phương",
  },
  {
    districtId: "557",
    wardId: "22073",
    name: "Phường Xuân Yên",
  },
  {
    districtId: "557",
    wardId: "22075",
    name: "Xã Xuân Thọ 1",
  },
  {
    districtId: "557",
    wardId: "22076",
    name: "Phường Xuân Đài",
  },
  {
    districtId: "557",
    wardId: "22078",
    name: "Xã Xuân Thọ 2",
  },
  {
    districtId: "558",
    wardId: "22081",
    name: "Thị trấn La Hai",
  },
  {
    districtId: "558",
    wardId: "22084",
    name: "Xã Đa Lộc",
  },
  {
    districtId: "558",
    wardId: "22087",
    name: "Xã Phú Mỡ",
  },
  {
    districtId: "558",
    wardId: "22090",
    name: "Xã Xuân Lãnh",
  },
  {
    districtId: "558",
    wardId: "22093",
    name: "Xã Xuân Long",
  },
  {
    districtId: "558",
    wardId: "22096",
    name: "Xã Xuân Quang 1",
  },
  {
    districtId: "558",
    wardId: "22099",
    name: "Xã Xuân Sơn Bắc",
  },
  {
    districtId: "558",
    wardId: "22102",
    name: "Xã Xuân Quang 2",
  },
  {
    districtId: "558",
    wardId: "22105",
    name: "Xã Xuân Sơn Nam",
  },
  {
    districtId: "558",
    wardId: "22108",
    name: "Xã Xuân Quang 3",
  },
  {
    districtId: "558",
    wardId: "22111",
    name: "Xã Xuân Phước",
  },
  {
    districtId: "559",
    wardId: "22114",
    name: "Thị trấn Chí Thạnh",
  },
  {
    districtId: "559",
    wardId: "22117",
    name: "Xã An Dân",
  },
  {
    districtId: "559",
    wardId: "22120",
    name: "Xã An Ninh Tây",
  },
  {
    districtId: "559",
    wardId: "22123",
    name: "Xã An Ninh Đông",
  },
  {
    districtId: "559",
    wardId: "22126",
    name: "Xã An Thạch",
  },
  {
    districtId: "559",
    wardId: "22129",
    name: "Xã An Định",
  },
  {
    districtId: "559",
    wardId: "22132",
    name: "Xã An Nghiệp",
  },
  {
    districtId: "559",
    wardId: "22138",
    name: "Xã An Cư",
  },
  {
    districtId: "559",
    wardId: "22141",
    name: "Xã An Xuân",
  },
  {
    districtId: "559",
    wardId: "22144",
    name: "Xã An Lĩnh",
  },
  {
    districtId: "559",
    wardId: "22147",
    name: "Xã An Hòa Hải",
  },
  {
    districtId: "559",
    wardId: "22150",
    name: "Xã An Hiệp",
  },
  {
    districtId: "559",
    wardId: "22153",
    name: "Xã An Mỹ",
  },
  {
    districtId: "559",
    wardId: "22156",
    name: "Xã An Chấn",
  },
  {
    districtId: "559",
    wardId: "22159",
    name: "Xã An Thọ",
  },
  {
    districtId: "560",
    wardId: "22165",
    name: "Thị trấn Củng Sơn",
  },
  {
    districtId: "560",
    wardId: "22168",
    name: "Xã Phước Tân",
  },
  {
    districtId: "560",
    wardId: "22171",
    name: "Xã Sơn Hội",
  },
  {
    districtId: "560",
    wardId: "22174",
    name: "Xã Sơn Định",
  },
  {
    districtId: "560",
    wardId: "22177",
    name: "Xã Sơn Long",
  },
  {
    districtId: "560",
    wardId: "22180",
    name: "Xã Cà Lúi",
  },
  {
    districtId: "560",
    wardId: "22183",
    name: "Xã Sơn Phước",
  },
  {
    districtId: "560",
    wardId: "22186",
    name: "Xã Sơn Xuân",
  },
  {
    districtId: "560",
    wardId: "22189",
    name: "Xã Sơn Nguyên",
  },
  {
    districtId: "560",
    wardId: "22192",
    name: "Xã Eachà Rang",
  },
  {
    districtId: "560",
    wardId: "22195",
    name: "Xã Krông Pa",
  },
  {
    districtId: "560",
    wardId: "22198",
    name: "Xã Suối Bạc",
  },
  {
    districtId: "560",
    wardId: "22201",
    name: "Xã Sơn Hà",
  },
  {
    districtId: "560",
    wardId: "22204",
    name: "Xã Suối Trai",
  },
  {
    districtId: "561",
    wardId: "22207",
    name: "Thị trấn Hai Riêng",
  },
  {
    districtId: "561",
    wardId: "22210",
    name: "Xã Ea Lâm",
  },
  {
    districtId: "561",
    wardId: "22213",
    name: "Xã Đức Bình Tây",
  },
  {
    districtId: "561",
    wardId: "22216",
    name: "Xã Ea Bá",
  },
  {
    districtId: "561",
    wardId: "22219",
    name: "Xã Sơn Giang",
  },
  {
    districtId: "561",
    wardId: "22222",
    name: "Xã Đức Bình Đông",
  },
  {
    districtId: "561",
    wardId: "22225",
    name: "Xã EaBar",
  },
  {
    districtId: "561",
    wardId: "22228",
    name: "Xã EaBia",
  },
  {
    districtId: "561",
    wardId: "22231",
    name: "Xã EaTrol",
  },
  {
    districtId: "561",
    wardId: "22234",
    name: "Xã Sông Hinh",
  },
  {
    districtId: "561",
    wardId: "22237",
    name: "Xã Ealy",
  },
  {
    districtId: "562",
    wardId: "22249",
    name: "Xã Sơn Thành Tây",
  },
  {
    districtId: "562",
    wardId: "22250",
    name: "Xã Sơn Thành Đông",
  },
  {
    districtId: "562",
    wardId: "22252",
    name: "Xã Hòa Bình 1",
  },
  {
    districtId: "562",
    wardId: "22255",
    name: "Thị trấn Phú Thứ",
  },
  {
    districtId: "562",
    wardId: "22264",
    name: "Xã Hòa Phong",
  },
  {
    districtId: "562",
    wardId: "22270",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "562",
    wardId: "22273",
    name: "Xã Hòa Tân Tây",
  },
  {
    districtId: "562",
    wardId: "22276",
    name: "Xã Hòa Đồng",
  },
  {
    districtId: "562",
    wardId: "22285",
    name: "Xã Hòa Mỹ Đông",
  },
  {
    districtId: "562",
    wardId: "22288",
    name: "Xã Hòa Mỹ Tây",
  },
  {
    districtId: "562",
    wardId: "22294",
    name: "Xã Hòa Thịnh",
  },
  {
    districtId: "563",
    wardId: "22303",
    name: "Xã Hòa Quang Bắc",
  },
  {
    districtId: "563",
    wardId: "22306",
    name: "Xã Hòa Quang Nam",
  },
  {
    districtId: "563",
    wardId: "22309",
    name: "Xã Hòa Hội",
  },
  {
    districtId: "563",
    wardId: "22312",
    name: "Xã Hòa Trị",
  },
  {
    districtId: "563",
    wardId: "22315",
    name: "Xã Hòa An",
  },
  {
    districtId: "563",
    wardId: "22318",
    name: "Xã Hòa Định Đông",
  },
  {
    districtId: "563",
    wardId: "22319",
    name: "Thị Trấn Phú Hoà",
  },
  {
    districtId: "563",
    wardId: "22321",
    name: "Xã Hòa Định Tây",
  },
  {
    districtId: "563",
    wardId: "22324",
    name: "Xã Hòa Thắng",
  },
  {
    districtId: "564",
    wardId: "22243",
    name: "Xã Hòa Thành",
  },
  {
    districtId: "564",
    wardId: "22246",
    name: "Phường Hòa Hiệp Bắc",
  },
  {
    districtId: "564",
    wardId: "22258",
    name: "Phường Hoà Vinh",
  },
  {
    districtId: "564",
    wardId: "22261",
    name: "Phường Hoà Hiệp Trung",
  },
  {
    districtId: "564",
    wardId: "22267",
    name: "Xã Hòa Tân Đông",
  },
  {
    districtId: "564",
    wardId: "22279",
    name: "Phường Hòa Xuân Tây",
  },
  {
    districtId: "564",
    wardId: "22282",
    name: "Phường Hòa Hiệp Nam",
  },
  {
    districtId: "564",
    wardId: "22291",
    name: "Xã Hòa Xuân Đông",
  },
  {
    districtId: "564",
    wardId: "22297",
    name: "Xã Hòa Tâm",
  },
  {
    districtId: "564",
    wardId: "22300",
    name: "Xã Hòa Xuân Nam",
  },
  {
    districtId: "568",
    wardId: "22327",
    name: "Phường Vĩnh Hòa",
  },
  {
    districtId: "568",
    wardId: "22330",
    name: "Phường Vĩnh Hải",
  },
  {
    districtId: "568",
    wardId: "22333",
    name: "Phường Vĩnh Phước",
  },
  {
    districtId: "568",
    wardId: "22336",
    name: "Phường Ngọc Hiệp",
  },
  {
    districtId: "568",
    wardId: "22339",
    name: "Phường Vĩnh Thọ",
  },
  {
    districtId: "568",
    wardId: "22342",
    name: "Phường Xương Huân",
  },
  {
    districtId: "568",
    wardId: "22345",
    name: "Phường Vạn Thắng",
  },
  {
    districtId: "568",
    wardId: "22348",
    name: "Phường Vạn Thạnh",
  },
  {
    districtId: "568",
    wardId: "22351",
    name: "Phường Phương Sài",
  },
  {
    districtId: "568",
    wardId: "22354",
    name: "Phường Phương Sơn",
  },
  {
    districtId: "568",
    wardId: "22357",
    name: "Phường Phước Hải",
  },
  {
    districtId: "568",
    wardId: "22360",
    name: "Phường Phước Tân",
  },
  {
    districtId: "568",
    wardId: "22363",
    name: "Phường Lộc Thọ",
  },
  {
    districtId: "568",
    wardId: "22366",
    name: "Phường Phước Tiến",
  },
  {
    districtId: "568",
    wardId: "22369",
    name: "Phường Tân Lập",
  },
  {
    districtId: "568",
    wardId: "22372",
    name: "Phường Phước Hòa",
  },
  {
    districtId: "568",
    wardId: "22375",
    name: "Phường Vĩnh Nguyên",
  },
  {
    districtId: "568",
    wardId: "22378",
    name: "Phường Phước Long",
  },
  {
    districtId: "568",
    wardId: "22381",
    name: "Phường Vĩnh Trường",
  },
  {
    districtId: "568",
    wardId: "22384",
    name: "Xã Vĩnh Lương",
  },
  {
    districtId: "568",
    wardId: "22387",
    name: "Xã Vĩnh Phương",
  },
  {
    districtId: "568",
    wardId: "22390",
    name: "Xã Vĩnh Ngọc",
  },
  {
    districtId: "568",
    wardId: "22393",
    name: "Xã Vĩnh Thạnh",
  },
  {
    districtId: "568",
    wardId: "22396",
    name: "Xã Vĩnh Trung",
  },
  {
    districtId: "568",
    wardId: "22399",
    name: "Xã Vĩnh Hiệp",
  },
  {
    districtId: "568",
    wardId: "22402",
    name: "Xã Vĩnh Thái",
  },
  {
    districtId: "568",
    wardId: "22405",
    name: "Xã Phước Đồng",
  },
  {
    districtId: "569",
    wardId: "22408",
    name: "Phường Cam Nghĩa",
  },
  {
    districtId: "569",
    wardId: "22411",
    name: "Phường Cam Phúc Bắc",
  },
  {
    districtId: "569",
    wardId: "22414",
    name: "Phường Cam Phúc Nam",
  },
  {
    districtId: "569",
    wardId: "22417",
    name: "Phường Cam Lộc",
  },
  {
    districtId: "569",
    wardId: "22420",
    name: "Phường Cam Phú",
  },
  {
    districtId: "569",
    wardId: "22423",
    name: "Phường Ba Ngòi",
  },
  {
    districtId: "569",
    wardId: "22426",
    name: "Phường Cam Thuận",
  },
  {
    districtId: "569",
    wardId: "22429",
    name: "Phường Cam Lợi",
  },
  {
    districtId: "569",
    wardId: "22432",
    name: "Phường Cam Linh",
  },
  {
    districtId: "569",
    wardId: "22468",
    name: "Xã Cam Thành Nam",
  },
  {
    districtId: "569",
    wardId: "22474",
    name: "Xã Cam Phước Đông",
  },
  {
    districtId: "569",
    wardId: "22477",
    name: "Xã Cam Thịnh Tây",
  },
  {
    districtId: "569",
    wardId: "22480",
    name: "Xã Cam Thịnh Đông",
  },
  {
    districtId: "569",
    wardId: "22483",
    name: "Xã Cam Lập",
  },
  {
    districtId: "569",
    wardId: "22486",
    name: "Xã Cam Bình",
  },
  {
    districtId: "570",
    wardId: "22435",
    name: "Xã Cam Tân",
  },
  {
    districtId: "570",
    wardId: "22438",
    name: "Xã Cam Hòa",
  },
  {
    districtId: "570",
    wardId: "22441",
    name: "Xã Cam Hải Đông",
  },
  {
    districtId: "570",
    wardId: "22444",
    name: "Xã Cam Hải Tây",
  },
  {
    districtId: "570",
    wardId: "22447",
    name: "Xã Sơn Tân",
  },
  {
    districtId: "570",
    wardId: "22450",
    name: "Xã Cam Hiệp Bắc",
  },
  {
    districtId: "570",
    wardId: "22453",
    name: "Thị trấn Cam Đức",
  },
  {
    districtId: "570",
    wardId: "22456",
    name: "Xã Cam Hiệp Nam",
  },
  {
    districtId: "570",
    wardId: "22459",
    name: "Xã Cam Phước Tây",
  },
  {
    districtId: "570",
    wardId: "22462",
    name: "Xã Cam Thành Bắc",
  },
  {
    districtId: "570",
    wardId: "22465",
    name: "Xã Cam An Bắc",
  },
  {
    districtId: "570",
    wardId: "22471",
    name: "Xã Cam An Nam",
  },
  {
    districtId: "570",
    wardId: "22708",
    name: "Xã Suối Cát",
  },
  {
    districtId: "570",
    wardId: "22711",
    name: "Xã Suối Tân",
  },
  {
    districtId: "571",
    wardId: "22489",
    name: "Thị trấn Vạn Giã",
  },
  {
    districtId: "571",
    wardId: "22492",
    name: "Xã Đại Lãnh",
  },
  {
    districtId: "571",
    wardId: "22495",
    name: "Xã Vạn Phước",
  },
  {
    districtId: "571",
    wardId: "22498",
    name: "Xã Vạn Long",
  },
  {
    districtId: "571",
    wardId: "22501",
    name: "Xã Vạn Bình",
  },
  {
    districtId: "571",
    wardId: "22504",
    name: "Xã Vạn Thọ",
  },
  {
    districtId: "571",
    wardId: "22507",
    name: "Xã Vạn Khánh",
  },
  {
    districtId: "571",
    wardId: "22510",
    name: "Xã Vạn Phú",
  },
  {
    districtId: "571",
    wardId: "22513",
    name: "Xã Vạn Lương",
  },
  {
    districtId: "571",
    wardId: "22516",
    name: "Xã Vạn Thắng",
  },
  {
    districtId: "571",
    wardId: "22519",
    name: "Xã Vạn Thạnh",
  },
  {
    districtId: "571",
    wardId: "22522",
    name: "Xã Xuân Sơn",
  },
  {
    districtId: "571",
    wardId: "22525",
    name: "Xã Vạn Hưng",
  },
  {
    districtId: "572",
    wardId: "22528",
    name: "Phường Ninh Hiệp",
  },
  {
    districtId: "572",
    wardId: "22531",
    name: "Xã Ninh Sơn",
  },
  {
    districtId: "572",
    wardId: "22534",
    name: "Xã Ninh Tây",
  },
  {
    districtId: "572",
    wardId: "22537",
    name: "Xã Ninh Thượng",
  },
  {
    districtId: "572",
    wardId: "22540",
    name: "Xã Ninh An",
  },
  {
    districtId: "572",
    wardId: "22543",
    name: "Phường Ninh Hải",
  },
  {
    districtId: "572",
    wardId: "22546",
    name: "Xã Ninh Thọ",
  },
  {
    districtId: "572",
    wardId: "22549",
    name: "Xã Ninh Trung",
  },
  {
    districtId: "572",
    wardId: "22552",
    name: "Xã Ninh Sim",
  },
  {
    districtId: "572",
    wardId: "22555",
    name: "Xã Ninh Xuân",
  },
  {
    districtId: "572",
    wardId: "22558",
    name: "Xã Ninh Thân",
  },
  {
    districtId: "572",
    wardId: "22561",
    name: "Phường Ninh Diêm",
  },
  {
    districtId: "572",
    wardId: "22564",
    name: "Xã Ninh Đông",
  },
  {
    districtId: "572",
    wardId: "22567",
    name: "Phường Ninh Thủy",
  },
  {
    districtId: "572",
    wardId: "22570",
    name: "Phường Ninh Đa",
  },
  {
    districtId: "572",
    wardId: "22573",
    name: "Xã Ninh Phụng",
  },
  {
    districtId: "572",
    wardId: "22576",
    name: "Xã Ninh Bình",
  },
  {
    districtId: "572",
    wardId: "22579",
    name: "Xã Ninh Phước",
  },
  {
    districtId: "572",
    wardId: "22582",
    name: "Xã Ninh Phú",
  },
  {
    districtId: "572",
    wardId: "22585",
    name: "Xã Ninh Tân",
  },
  {
    districtId: "572",
    wardId: "22588",
    name: "Xã Ninh Quang",
  },
  {
    districtId: "572",
    wardId: "22591",
    name: "Phường Ninh Giang",
  },
  {
    districtId: "572",
    wardId: "22594",
    name: "Phường Ninh Hà",
  },
  {
    districtId: "572",
    wardId: "22597",
    name: "Xã Ninh Hưng",
  },
  {
    districtId: "572",
    wardId: "22600",
    name: "Xã Ninh Lộc",
  },
  {
    districtId: "572",
    wardId: "22603",
    name: "Xã Ninh Ích",
  },
  {
    districtId: "572",
    wardId: "22606",
    name: "Xã Ninh Vân",
  },
  {
    districtId: "573",
    wardId: "22609",
    name: "Thị trấn Khánh Vĩnh",
  },
  {
    districtId: "573",
    wardId: "22612",
    name: "Xã Khánh Hiệp",
  },
  {
    districtId: "573",
    wardId: "22615",
    name: "Xã Khánh Bình",
  },
  {
    districtId: "573",
    wardId: "22618",
    name: "Xã Khánh Trung",
  },
  {
    districtId: "573",
    wardId: "22621",
    name: "Xã Khánh Đông",
  },
  {
    districtId: "573",
    wardId: "22624",
    name: "Xã Khánh Thượng",
  },
  {
    districtId: "573",
    wardId: "22627",
    name: "Xã Khánh Nam",
  },
  {
    districtId: "573",
    wardId: "22630",
    name: "Xã Sông Cầu",
  },
  {
    districtId: "573",
    wardId: "22633",
    name: "Xã Giang Ly",
  },
  {
    districtId: "573",
    wardId: "22636",
    name: "Xã Cầu Bà",
  },
  {
    districtId: "573",
    wardId: "22639",
    name: "Xã Liên Sang",
  },
  {
    districtId: "573",
    wardId: "22642",
    name: "Xã Khánh Thành",
  },
  {
    districtId: "573",
    wardId: "22645",
    name: "Xã Khánh Phú",
  },
  {
    districtId: "573",
    wardId: "22648",
    name: "Xã Sơn Thái",
  },
  {
    districtId: "574",
    wardId: "22651",
    name: "Thị trấn Diên Khánh",
  },
  {
    districtId: "574",
    wardId: "22654",
    name: "Xã Diên Lâm",
  },
  {
    districtId: "574",
    wardId: "22657",
    name: "Xã Diên Điền",
  },
  {
    districtId: "574",
    wardId: "22660",
    name: "Xã Diên Xuân",
  },
  {
    districtId: "574",
    wardId: "22663",
    name: "Xã Diên Sơn",
  },
  {
    districtId: "574",
    wardId: "22666",
    name: "Xã Diên Đồng",
  },
  {
    districtId: "574",
    wardId: "22669",
    name: "Xã Diên Phú",
  },
  {
    districtId: "574",
    wardId: "22672",
    name: "Xã Diên Thọ",
  },
  {
    districtId: "574",
    wardId: "22675",
    name: "Xã Diên Phước",
  },
  {
    districtId: "574",
    wardId: "22678",
    name: "Xã Diên Lạc",
  },
  {
    districtId: "574",
    wardId: "22681",
    name: "Xã Diên Tân",
  },
  {
    districtId: "574",
    wardId: "22684",
    name: "Xã Diên Hòa",
  },
  {
    districtId: "574",
    wardId: "22687",
    name: "Xã Diên Thạnh",
  },
  {
    districtId: "574",
    wardId: "22690",
    name: "Xã Diên Toàn",
  },
  {
    districtId: "574",
    wardId: "22693",
    name: "Xã Diên An",
  },
  {
    districtId: "574",
    wardId: "22696",
    name: "Xã Bình Lộc",
  },
  {
    districtId: "574",
    wardId: "22702",
    name: "Xã Suối Hiệp",
  },
  {
    districtId: "574",
    wardId: "22705",
    name: "Xã Suối Tiên",
  },
  {
    districtId: "575",
    wardId: "22714",
    name: "Thị trấn Tô Hạp",
  },
  {
    districtId: "575",
    wardId: "22717",
    name: "Xã Thành Sơn",
  },
  {
    districtId: "575",
    wardId: "22720",
    name: "Xã Sơn Lâm",
  },
  {
    districtId: "575",
    wardId: "22723",
    name: "Xã Sơn Hiệp",
  },
  {
    districtId: "575",
    wardId: "22726",
    name: "Xã Sơn Bình",
  },
  {
    districtId: "575",
    wardId: "22729",
    name: "Xã Sơn Trung",
  },
  {
    districtId: "575",
    wardId: "22732",
    name: "Xã Ba Cụm Bắc",
  },
  {
    districtId: "575",
    wardId: "22735",
    name: "Xã Ba Cụm Nam",
  },
  {
    districtId: "576",
    wardId: "22736",
    name: "Thị trấn Trường Sa",
  },
  {
    districtId: "576",
    wardId: "22737",
    name: "Xã Song Tử Tây",
  },
  {
    districtId: "576",
    wardId: "22739",
    name: "Xã Sinh Tồn",
  },
  {
    districtId: "582",
    wardId: "22738",
    name: "Phường Đô Vinh",
  },
  {
    districtId: "582",
    wardId: "22741",
    name: "Phường Phước Mỹ",
  },
  {
    districtId: "582",
    wardId: "22744",
    name: "Phường Bảo An",
  },
  {
    districtId: "582",
    wardId: "22747",
    name: "Phường Phủ Hà",
  },
  {
    districtId: "582",
    wardId: "22750",
    name: "Phường Thanh Sơn",
  },
  {
    districtId: "582",
    wardId: "22753",
    name: "Phường Mỹ Hương",
  },
  {
    districtId: "582",
    wardId: "22756",
    name: "Phường Tấn Tài",
  },
  {
    districtId: "582",
    wardId: "22759",
    name: "Phường Kinh Dinh",
  },
  {
    districtId: "582",
    wardId: "22762",
    name: "Phường Đạo Long",
  },
  {
    districtId: "582",
    wardId: "22765",
    name: "Phường Đài Sơn",
  },
  {
    districtId: "582",
    wardId: "22768",
    name: "Phường Đông Hải",
  },
  {
    districtId: "582",
    wardId: "22771",
    name: "Phường Mỹ Đông",
  },
  {
    districtId: "582",
    wardId: "22774",
    name: "Xã Thành Hải",
  },
  {
    districtId: "582",
    wardId: "22777",
    name: "Phường Văn Hải",
  },
  {
    districtId: "582",
    wardId: "22779",
    name: "Phường Mỹ Bình",
  },
  {
    districtId: "582",
    wardId: "22780",
    name: "Phường Mỹ Hải",
  },
  {
    districtId: "584",
    wardId: "22783",
    name: "Xã Phước Bình",
  },
  {
    districtId: "584",
    wardId: "22786",
    name: "Xã Phước Hòa",
  },
  {
    districtId: "584",
    wardId: "22789",
    name: "Xã Phước Tân",
  },
  {
    districtId: "584",
    wardId: "22792",
    name: "Xã Phước Tiến",
  },
  {
    districtId: "584",
    wardId: "22795",
    name: "Xã Phước Thắng",
  },
  {
    districtId: "584",
    wardId: "22798",
    name: "Xã Phước Thành",
  },
  {
    districtId: "584",
    wardId: "22801",
    name: "Xã Phước Đại",
  },
  {
    districtId: "584",
    wardId: "22804",
    name: "Xã Phước Chính",
  },
  {
    districtId: "584",
    wardId: "22807",
    name: "Xã Phước Trung",
  },
  {
    districtId: "585",
    wardId: "22810",
    name: "Thị trấn Tân Sơn",
  },
  {
    districtId: "585",
    wardId: "22813",
    name: "Xã Lâm Sơn",
  },
  {
    districtId: "585",
    wardId: "22816",
    name: "Xã Lương Sơn",
  },
  {
    districtId: "585",
    wardId: "22819",
    name: "Xã Quảng Sơn",
  },
  {
    districtId: "585",
    wardId: "22822",
    name: "Xã Mỹ Sơn",
  },
  {
    districtId: "585",
    wardId: "22825",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "585",
    wardId: "22828",
    name: "Xã Ma Nới",
  },
  {
    districtId: "585",
    wardId: "22831",
    name: "Xã Nhơn Sơn",
  },
  {
    districtId: "586",
    wardId: "22834",
    name: "Thị trấn Khánh Hải",
  },
  {
    districtId: "586",
    wardId: "22846",
    name: "Xã Vĩnh Hải",
  },
  {
    districtId: "586",
    wardId: "22852",
    name: "Xã Phương Hải",
  },
  {
    districtId: "586",
    wardId: "22855",
    name: "Xã Tân Hải",
  },
  {
    districtId: "586",
    wardId: "22858",
    name: "Xã Xuân Hải",
  },
  {
    districtId: "586",
    wardId: "22861",
    name: "Xã Hộ Hải",
  },
  {
    districtId: "586",
    wardId: "22864",
    name: "Xã Tri Hải",
  },
  {
    districtId: "586",
    wardId: "22867",
    name: "Xã Nhơn Hải",
  },
  {
    districtId: "586",
    wardId: "22868",
    name: "Xã Thanh Hải",
  },
  {
    districtId: "587",
    wardId: "22870",
    name: "Thị trấn Phước Dân",
  },
  {
    districtId: "587",
    wardId: "22873",
    name: "Xã Phước Sơn",
  },
  {
    districtId: "587",
    wardId: "22876",
    name: "Xã Phước Thái",
  },
  {
    districtId: "587",
    wardId: "22879",
    name: "Xã Phước Hậu",
  },
  {
    districtId: "587",
    wardId: "22882",
    name: "Xã Phước Thuận",
  },
  {
    districtId: "587",
    wardId: "22888",
    name: "Xã An Hải",
  },
  {
    districtId: "587",
    wardId: "22891",
    name: "Xã Phước Hữu",
  },
  {
    districtId: "587",
    wardId: "22894",
    name: "Xã Phước Hải",
  },
  {
    districtId: "587",
    wardId: "22912",
    name: "Xã Phước Vinh",
  },
  {
    districtId: "588",
    wardId: "22837",
    name: "Xã Phước Chiến",
  },
  {
    districtId: "588",
    wardId: "22840",
    name: "Xã Công Hải",
  },
  {
    districtId: "588",
    wardId: "22843",
    name: "Xã Phước Kháng",
  },
  {
    districtId: "588",
    wardId: "22849",
    name: "Xã Lợi Hải",
  },
  {
    districtId: "588",
    wardId: "22853",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "588",
    wardId: "22856",
    name: "Xã Bắc Phong",
  },
  {
    districtId: "589",
    wardId: "22885",
    name: "Xã Phước Hà",
  },
  {
    districtId: "589",
    wardId: "22897",
    name: "Xã Phước Nam",
  },
  {
    districtId: "589",
    wardId: "22898",
    name: "Xã Phước Ninh",
  },
  {
    districtId: "589",
    wardId: "22900",
    name: "Xã Nhị Hà",
  },
  {
    districtId: "589",
    wardId: "22903",
    name: "Xã Phước Dinh",
  },
  {
    districtId: "589",
    wardId: "22906",
    name: "Xã Phước Minh",
  },
  {
    districtId: "589",
    wardId: "22909",
    name: "Xã Phước Diêm",
  },
  {
    districtId: "589",
    wardId: "22910",
    name: "Xã Cà Ná",
  },
  {
    districtId: "593",
    wardId: "22915",
    name: "Phường Mũi Né",
  },
  {
    districtId: "593",
    wardId: "22918",
    name: "Phường Hàm Tiến",
  },
  {
    districtId: "593",
    wardId: "22921",
    name: "Phường Phú Hài",
  },
  {
    districtId: "593",
    wardId: "22924",
    name: "Phường Phú Thủy",
  },
  {
    districtId: "593",
    wardId: "22927",
    name: "Phường Phú Tài",
  },
  {
    districtId: "593",
    wardId: "22930",
    name: "Phường Phú Trinh",
  },
  {
    districtId: "593",
    wardId: "22933",
    name: "Phường Xuân An",
  },
  {
    districtId: "593",
    wardId: "22936",
    name: "Phường Thanh Hải",
  },
  {
    districtId: "593",
    wardId: "22939",
    name: "Phường Bình Hưng",
  },
  {
    districtId: "593",
    wardId: "22942",
    name: "Phường Đức Nghĩa",
  },
  {
    districtId: "593",
    wardId: "22945",
    name: "Phường Lạc Đạo",
  },
  {
    districtId: "593",
    wardId: "22948",
    name: "Phường Đức Thắng",
  },
  {
    districtId: "593",
    wardId: "22951",
    name: "Phường Hưng Long",
  },
  {
    districtId: "593",
    wardId: "22954",
    name: "Phường Đức Long",
  },
  {
    districtId: "593",
    wardId: "22957",
    name: "Xã Thiện Nghiệp",
  },
  {
    districtId: "593",
    wardId: "22960",
    name: "Xã Phong Nẫm",
  },
  {
    districtId: "593",
    wardId: "22963",
    name: "Xã Tiến Lợi",
  },
  {
    districtId: "593",
    wardId: "22966",
    name: "Xã Tiến Thành",
  },
  {
    districtId: "594",
    wardId: "23231",
    name: "Phường Phước Hội",
  },
  {
    districtId: "594",
    wardId: "23232",
    name: "Phường Phước Lộc",
  },
  {
    districtId: "594",
    wardId: "23234",
    name: "Phường Tân Thiện",
  },
  {
    districtId: "594",
    wardId: "23235",
    name: "Phường Tân An",
  },
  {
    districtId: "594",
    wardId: "23237",
    name: "Phường Bình Tân",
  },
  {
    districtId: "594",
    wardId: "23245",
    name: "Xã Tân Hải",
  },
  {
    districtId: "594",
    wardId: "23246",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "594",
    wardId: "23248",
    name: "Xã Tân Bình",
  },
  {
    districtId: "594",
    wardId: "23268",
    name: "Xã Tân Phước",
  },
  {
    districtId: "595",
    wardId: "22969",
    name: "Thị trấn Liên Hương",
  },
  {
    districtId: "595",
    wardId: "22972",
    name: "Thị trấn Phan Rí Cửa",
  },
  {
    districtId: "595",
    wardId: "22975",
    name: "Xã Phan Dũng",
  },
  {
    districtId: "595",
    wardId: "22978",
    name: "Xã Phong Phú",
  },
  {
    districtId: "595",
    wardId: "22981",
    name: "Xã Vĩnh Hảo",
  },
  {
    districtId: "595",
    wardId: "22984",
    name: "Xã Vĩnh Tân",
  },
  {
    districtId: "595",
    wardId: "22987",
    name: "Xã Phú Lạc",
  },
  {
    districtId: "595",
    wardId: "22990",
    name: "Xã Phước Thể",
  },
  {
    districtId: "595",
    wardId: "22993",
    name: "Xã Hòa Minh",
  },
  {
    districtId: "595",
    wardId: "22996",
    name: "Xã Chí Công",
  },
  {
    districtId: "595",
    wardId: "22999",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "596",
    wardId: "23005",
    name: "Thị trấn Chợ Lầu",
  },
  {
    districtId: "596",
    wardId: "23008",
    name: "Xã Phan Sơn",
  },
  {
    districtId: "596",
    wardId: "23011",
    name: "Xã Phan Lâm",
  },
  {
    districtId: "596",
    wardId: "23014",
    name: "Xã Bình An",
  },
  {
    districtId: "596",
    wardId: "23017",
    name: "Xã Phan Điền",
  },
  {
    districtId: "596",
    wardId: "23020",
    name: "Xã Hải Ninh",
  },
  {
    districtId: "596",
    wardId: "23023",
    name: "Xã Sông Lũy",
  },
  {
    districtId: "596",
    wardId: "23026",
    name: "Xã Phan Tiến",
  },
  {
    districtId: "596",
    wardId: "23029",
    name: "Xã Sông Bình",
  },
  {
    districtId: "596",
    wardId: "23032",
    name: "Thị trấn Lương Sơn",
  },
  {
    districtId: "596",
    wardId: "23035",
    name: "Xã Phan Hòa",
  },
  {
    districtId: "596",
    wardId: "23038",
    name: "Xã Phan Thanh",
  },
  {
    districtId: "596",
    wardId: "23041",
    name: "Xã Hồng Thái",
  },
  {
    districtId: "596",
    wardId: "23044",
    name: "Xã Phan Hiệp",
  },
  {
    districtId: "596",
    wardId: "23047",
    name: "Xã Bình Tân",
  },
  {
    districtId: "596",
    wardId: "23050",
    name: "Xã Phan Rí Thành",
  },
  {
    districtId: "596",
    wardId: "23053",
    name: "Xã Hòa Thắng",
  },
  {
    districtId: "596",
    wardId: "23056",
    name: "Xã Hồng Phong",
  },
  {
    districtId: "597",
    wardId: "23059",
    name: "Thị trấn Ma Lâm",
  },
  {
    districtId: "597",
    wardId: "23062",
    name: "Thị trấn Phú Long",
  },
  {
    districtId: "597",
    wardId: "23065",
    name: "Xã La Dạ",
  },
  {
    districtId: "597",
    wardId: "23068",
    name: "Xã Đông Tiến",
  },
  {
    districtId: "597",
    wardId: "23071",
    name: "Xã Thuận Hòa",
  },
  {
    districtId: "597",
    wardId: "23074",
    name: "Xã Đông Giang",
  },
  {
    districtId: "597",
    wardId: "23077",
    name: "Xã Hàm Phú",
  },
  {
    districtId: "597",
    wardId: "23080",
    name: "Xã Hồng Liêm",
  },
  {
    districtId: "597",
    wardId: "23083",
    name: "Xã Thuận Minh",
  },
  {
    districtId: "597",
    wardId: "23086",
    name: "Xã Hồng Sơn",
  },
  {
    districtId: "597",
    wardId: "23089",
    name: "Xã Hàm Trí",
  },
  {
    districtId: "597",
    wardId: "23092",
    name: "Xã Hàm Đức",
  },
  {
    districtId: "597",
    wardId: "23095",
    name: "Xã Hàm Liêm",
  },
  {
    districtId: "597",
    wardId: "23098",
    name: "Xã Hàm Chính",
  },
  {
    districtId: "597",
    wardId: "23101",
    name: "Xã Hàm Hiệp",
  },
  {
    districtId: "597",
    wardId: "23104",
    name: "Xã Hàm Thắng",
  },
  {
    districtId: "597",
    wardId: "23107",
    name: "Xã Đa Mi",
  },
  {
    districtId: "598",
    wardId: "23110",
    name: "Thị trấn Thuận Nam",
  },
  {
    districtId: "598",
    wardId: "23113",
    name: "Xã Mỹ Thạnh",
  },
  {
    districtId: "598",
    wardId: "23116",
    name: "Xã Hàm Cần",
  },
  {
    districtId: "598",
    wardId: "23119",
    name: "Xã Mương Mán",
  },
  {
    districtId: "598",
    wardId: "23122",
    name: "Xã Hàm Thạnh",
  },
  {
    districtId: "598",
    wardId: "23125",
    name: "Xã Hàm Kiệm",
  },
  {
    districtId: "598",
    wardId: "23128",
    name: "Xã Hàm Cường",
  },
  {
    districtId: "598",
    wardId: "23131",
    name: "Xã Hàm Mỹ",
  },
  {
    districtId: "598",
    wardId: "23134",
    name: "Xã Tân Lập",
  },
  {
    districtId: "598",
    wardId: "23137",
    name: "Xã Hàm Minh",
  },
  {
    districtId: "598",
    wardId: "23140",
    name: "Xã Thuận Quí",
  },
  {
    districtId: "598",
    wardId: "23143",
    name: "Xã Tân Thuận",
  },
  {
    districtId: "598",
    wardId: "23146",
    name: "Xã Tân Thành",
  },
  {
    districtId: "599",
    wardId: "23149",
    name: "Thị trấn Lạc Tánh",
  },
  {
    districtId: "599",
    wardId: "23152",
    name: "Xã Bắc Ruộng",
  },
  {
    districtId: "599",
    wardId: "23158",
    name: "Xã Nghị Đức",
  },
  {
    districtId: "599",
    wardId: "23161",
    name: "Xã La Ngâu",
  },
  {
    districtId: "599",
    wardId: "23164",
    name: "Xã Huy Khiêm",
  },
  {
    districtId: "599",
    wardId: "23167",
    name: "Xã Măng Tố",
  },
  {
    districtId: "599",
    wardId: "23170",
    name: "Xã Đức Phú",
  },
  {
    districtId: "599",
    wardId: "23173",
    name: "Xã Đồng Kho",
  },
  {
    districtId: "599",
    wardId: "23176",
    name: "Xã Gia An",
  },
  {
    districtId: "599",
    wardId: "23179",
    name: "Xã Đức Bình",
  },
  {
    districtId: "599",
    wardId: "23182",
    name: "Xã Gia Huynh",
  },
  {
    districtId: "599",
    wardId: "23185",
    name: "Xã Đức Thuận",
  },
  {
    districtId: "599",
    wardId: "23188",
    name: "Xã Suối Kiết",
  },
  {
    districtId: "600",
    wardId: "23191",
    name: "Thị trấn Võ Xu",
  },
  {
    districtId: "600",
    wardId: "23194",
    name: "Thị trấn Đức Tài",
  },
  {
    districtId: "600",
    wardId: "23197",
    name: "Xã Đa Kai",
  },
  {
    districtId: "600",
    wardId: "23200",
    name: "Xã Sùng Nhơn",
  },
  {
    districtId: "600",
    wardId: "23203",
    name: "Xã Mê Pu",
  },
  {
    districtId: "600",
    wardId: "23206",
    name: "Xã Nam Chính",
  },
  {
    districtId: "600",
    wardId: "23212",
    name: "Xã Đức Hạnh",
  },
  {
    districtId: "600",
    wardId: "23215",
    name: "Xã Đức Tín",
  },
  {
    districtId: "600",
    wardId: "23218",
    name: "Xã Vũ Hoà",
  },
  {
    districtId: "600",
    wardId: "23221",
    name: "Xã Tân Hà",
  },
  {
    districtId: "600",
    wardId: "23224",
    name: "Xã Đông Hà",
  },
  {
    districtId: "600",
    wardId: "23227",
    name: "Xã Trà Tân",
  },
  {
    districtId: "601",
    wardId: "23230",
    name: "Thị trấn Tân Minh",
  },
  {
    districtId: "601",
    wardId: "23236",
    name: "Thị trấn Tân Nghĩa",
  },
  {
    districtId: "601",
    wardId: "23239",
    name: "Xã Sông Phan",
  },
  {
    districtId: "601",
    wardId: "23242",
    name: "Xã Tân Phúc",
  },
  {
    districtId: "601",
    wardId: "23251",
    name: "Xã Tân Đức",
  },
  {
    districtId: "601",
    wardId: "23254",
    name: "Xã Tân Thắng",
  },
  {
    districtId: "601",
    wardId: "23255",
    name: "Xã Thắng Hải",
  },
  {
    districtId: "601",
    wardId: "23257",
    name: "Xã Tân Hà",
  },
  {
    districtId: "601",
    wardId: "23260",
    name: "Xã Tân Xuân",
  },
  {
    districtId: "601",
    wardId: "23266",
    name: "Xã Sơn Mỹ",
  },
  {
    districtId: "602",
    wardId: "23272",
    name: "Xã Ngũ Phụng",
  },
  {
    districtId: "602",
    wardId: "23275",
    name: "Xã Long Hải",
  },
  {
    districtId: "602",
    wardId: "23278",
    name: "Xã Tam Thanh",
  },
  {
    districtId: "608",
    wardId: "23281",
    name: "Phường Quang Trung",
  },
  {
    districtId: "608",
    wardId: "23284",
    name: "Phường Duy Tân",
  },
  {
    districtId: "608",
    wardId: "23287",
    name: "Phường Quyết Thắng",
  },
  {
    districtId: "608",
    wardId: "23290",
    name: "Phường Trường Chinh",
  },
  {
    districtId: "608",
    wardId: "23293",
    name: "Phường Thắng Lợi",
  },
  {
    districtId: "608",
    wardId: "23296",
    name: "Phường Ngô Mây",
  },
  {
    districtId: "608",
    wardId: "23299",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "608",
    wardId: "23302",
    name: "Phường Lê Lợi",
  },
  {
    districtId: "608",
    wardId: "23305",
    name: "Phường Nguyễn Trãi",
  },
  {
    districtId: "608",
    wardId: "23308",
    name: "Phường Trần Hưng Đạo",
  },
  {
    districtId: "608",
    wardId: "23311",
    name: "Xã Đắk Cấm",
  },
  {
    districtId: "608",
    wardId: "23314",
    name: "Xã Kroong",
  },
  {
    districtId: "608",
    wardId: "23317",
    name: "Xã Ngọk Bay",
  },
  {
    districtId: "608",
    wardId: "23320",
    name: "Xã Vinh Quang",
  },
  {
    districtId: "608",
    wardId: "23323",
    name: "Xã Đắk Blà",
  },
  {
    districtId: "608",
    wardId: "23326",
    name: "Xã Ia Chim",
  },
  {
    districtId: "608",
    wardId: "23327",
    name: "Xã Đăk Năng",
  },
  {
    districtId: "608",
    wardId: "23329",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "608",
    wardId: "23332",
    name: "Xã Chư Hreng",
  },
  {
    districtId: "608",
    wardId: "23335",
    name: "Xã Đắk Rơ Wa",
  },
  {
    districtId: "608",
    wardId: "23338",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "610",
    wardId: "23341",
    name: "Thị trấn Đắk Glei",
  },
  {
    districtId: "610",
    wardId: "23344",
    name: "Xã Đắk Blô",
  },
  {
    districtId: "610",
    wardId: "23347",
    name: "Xã Đắk Man",
  },
  {
    districtId: "610",
    wardId: "23350",
    name: "Xã Đắk Nhoong",
  },
  {
    districtId: "610",
    wardId: "23353",
    name: "Xã Đắk Pék",
  },
  {
    districtId: "610",
    wardId: "23356",
    name: "Xã Đắk Choong",
  },
  {
    districtId: "610",
    wardId: "23359",
    name: "Xã Xốp",
  },
  {
    districtId: "610",
    wardId: "23362",
    name: "Xã Mường Hoong",
  },
  {
    districtId: "610",
    wardId: "23365",
    name: "Xã Ngọc Linh",
  },
  {
    districtId: "610",
    wardId: "23368",
    name: "Xã Đắk Long",
  },
  {
    districtId: "610",
    wardId: "23371",
    name: "Xã Đắk KRoong",
  },
  {
    districtId: "610",
    wardId: "23374",
    name: "Xã Đắk Môn",
  },
  {
    districtId: "611",
    wardId: "23377",
    name: "Thị trấn Plei Kần",
  },
  {
    districtId: "611",
    wardId: "23380",
    name: "Xã Đắk Ang",
  },
  {
    districtId: "611",
    wardId: "23383",
    name: "Xã Đắk Dục",
  },
  {
    districtId: "611",
    wardId: "23386",
    name: "Xã Đắk Nông",
  },
  {
    districtId: "611",
    wardId: "23389",
    name: "Xã Đắk Xú",
  },
  {
    districtId: "611",
    wardId: "23392",
    name: "Xã Đắk Kan",
  },
  {
    districtId: "611",
    wardId: "23395",
    name: "Xã Bờ Y",
  },
  {
    districtId: "611",
    wardId: "23398",
    name: "Xã Sa Loong",
  },
  {
    districtId: "612",
    wardId: "23401",
    name: "Thị trấn Đắk Tô",
  },
  {
    districtId: "612",
    wardId: "23427",
    name: "Xã Đắk Rơ Nga",
  },
  {
    districtId: "612",
    wardId: "23428",
    name: "Xã Ngọk Tụ",
  },
  {
    districtId: "612",
    wardId: "23430",
    name: "Xã Đắk Trăm",
  },
  {
    districtId: "612",
    wardId: "23431",
    name: "Xã Văn Lem",
  },
  {
    districtId: "612",
    wardId: "23434",
    name: "Xã Kon Đào",
  },
  {
    districtId: "612",
    wardId: "23437",
    name: "Xã Tân Cảnh",
  },
  {
    districtId: "612",
    wardId: "23440",
    name: "Xã Diên Bình",
  },
  {
    districtId: "612",
    wardId: "23443",
    name: "Xã Pô Kô",
  },
  {
    districtId: "613",
    wardId: "23452",
    name: "Xã Đắk Nên",
  },
  {
    districtId: "613",
    wardId: "23455",
    name: "Xã Đắk Ring",
  },
  {
    districtId: "613",
    wardId: "23458",
    name: "Xã Măng Buk",
  },
  {
    districtId: "613",
    wardId: "23461",
    name: "Xã Đắk Tăng",
  },
  {
    districtId: "613",
    wardId: "23464",
    name: "Xã Ngok Tem",
  },
  {
    districtId: "613",
    wardId: "23467",
    name: "Xã Pờ Ê",
  },
  {
    districtId: "613",
    wardId: "23470",
    name: "Xã Măng Cành",
  },
  {
    districtId: "613",
    wardId: "23473",
    name: "Thị trấn Măng Đen",
  },
  {
    districtId: "613",
    wardId: "23476",
    name: "Xã Hiếu",
  },
  {
    districtId: "614",
    wardId: "23479",
    name: "Thị trấn Đắk Rve",
  },
  {
    districtId: "614",
    wardId: "23482",
    name: "Xã Đắk Kôi",
  },
  {
    districtId: "614",
    wardId: "23485",
    name: "Xã Đắk Tơ Lung",
  },
  {
    districtId: "614",
    wardId: "23488",
    name: "Xã Đắk Ruồng",
  },
  {
    districtId: "614",
    wardId: "23491",
    name: "Xã Đắk Pne",
  },
  {
    districtId: "614",
    wardId: "23494",
    name: "Xã Đắk Tờ Re",
  },
  {
    districtId: "614",
    wardId: "23497",
    name: "Xã Tân Lập",
  },
  {
    districtId: "615",
    wardId: "23500",
    name: "Thị trấn Đắk Hà",
  },
  {
    districtId: "615",
    wardId: "23503",
    name: "Xã Đắk PXi",
  },
  {
    districtId: "615",
    wardId: "23504",
    name: "Xã Đăk Long",
  },
  {
    districtId: "615",
    wardId: "23506",
    name: "Xã Đắk HRing",
  },
  {
    districtId: "615",
    wardId: "23509",
    name: "Xã Đắk Ui",
  },
  {
    districtId: "615",
    wardId: "23510",
    name: "Xã Đăk Ngọk",
  },
  {
    districtId: "615",
    wardId: "23512",
    name: "Xã Đắk Mar",
  },
  {
    districtId: "615",
    wardId: "23515",
    name: "Xã Ngok Wang",
  },
  {
    districtId: "615",
    wardId: "23518",
    name: "Xã Ngok Réo",
  },
  {
    districtId: "615",
    wardId: "23521",
    name: "Xã Hà Mòn",
  },
  {
    districtId: "615",
    wardId: "23524",
    name: "Xã Đắk La",
  },
  {
    districtId: "616",
    wardId: "23527",
    name: "Thị trấn Sa Thầy",
  },
  {
    districtId: "616",
    wardId: "23530",
    name: "Xã Rơ Kơi",
  },
  {
    districtId: "616",
    wardId: "23533",
    name: "Xã Sa Nhơn",
  },
  {
    districtId: "616",
    wardId: "23534",
    name: "Xã Hơ Moong",
  },
  {
    districtId: "616",
    wardId: "23536",
    name: "Xã Mô Rai",
  },
  {
    districtId: "616",
    wardId: "23539",
    name: "Xã Sa Sơn",
  },
  {
    districtId: "616",
    wardId: "23542",
    name: "Xã Sa Nghĩa",
  },
  {
    districtId: "616",
    wardId: "23545",
    name: "Xã Sa Bình",
  },
  {
    districtId: "616",
    wardId: "23548",
    name: "Xã Ya Xiêr",
  },
  {
    districtId: "616",
    wardId: "23551",
    name: "Xã Ya Tăng",
  },
  {
    districtId: "616",
    wardId: "23554",
    name: "Xã Ya ly",
  },
  {
    districtId: "617",
    wardId: "23404",
    name: "Xã Ngọc Lây",
  },
  {
    districtId: "617",
    wardId: "23407",
    name: "Xã Đắk Na",
  },
  {
    districtId: "617",
    wardId: "23410",
    name: "Xã Măng Ri",
  },
  {
    districtId: "617",
    wardId: "23413",
    name: "Xã Ngọc Yêu",
  },
  {
    districtId: "617",
    wardId: "23416",
    name: "Xã Đắk Sao",
  },
  {
    districtId: "617",
    wardId: "23417",
    name: "Xã Đắk Rơ Ông",
  },
  {
    districtId: "617",
    wardId: "23419",
    name: "Xã Đắk Tờ Kan",
  },
  {
    districtId: "617",
    wardId: "23422",
    name: "Xã Tu Mơ Rông",
  },
  {
    districtId: "617",
    wardId: "23425",
    name: "Xã Đắk Hà",
  },
  {
    districtId: "617",
    wardId: "23446",
    name: "Xã Tê Xăng",
  },
  {
    districtId: "617",
    wardId: "23449",
    name: "Xã Văn Xuôi",
  },
  {
    districtId: "618",
    wardId: "23535",
    name: "Xã Ia Đal",
  },
  {
    districtId: "618",
    wardId: "23537",
    name: "Xã Ia Dom",
  },
  {
    districtId: "618",
    wardId: "23538",
    name: "Xã Ia Tơi",
  },
  {
    districtId: "622",
    wardId: "23557",
    name: "Phường Yên Đỗ",
  },
  {
    districtId: "622",
    wardId: "23560",
    name: "Phường Diên Hồng",
  },
  {
    districtId: "622",
    wardId: "23563",
    name: "Phường Ia Kring",
  },
  {
    districtId: "622",
    wardId: "23566",
    name: "Phường Hội Thương",
  },
  {
    districtId: "622",
    wardId: "23569",
    name: "Phường Hội Phú",
  },
  {
    districtId: "622",
    wardId: "23570",
    name: "Phường Phù Đổng",
  },
  {
    districtId: "622",
    wardId: "23572",
    name: "Phường Hoa Lư",
  },
  {
    districtId: "622",
    wardId: "23575",
    name: "Phường Tây Sơn",
  },
  {
    districtId: "622",
    wardId: "23578",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "622",
    wardId: "23579",
    name: "Phường Đống Đa",
  },
  {
    districtId: "622",
    wardId: "23581",
    name: "Phường Trà Bá",
  },
  {
    districtId: "622",
    wardId: "23582",
    name: "Phường Thắng Lợi",
  },
  {
    districtId: "622",
    wardId: "23584",
    name: "Phường Yên Thế",
  },
  {
    districtId: "622",
    wardId: "23586",
    name: "Phường Chi Lăng",
  },
  {
    districtId: "622",
    wardId: "23590",
    name: "Xã Biển Hồ",
  },
  {
    districtId: "622",
    wardId: "23593",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "622",
    wardId: "23596",
    name: "Xã Trà Đa",
  },
  {
    districtId: "622",
    wardId: "23599",
    name: "Xã Chư Á",
  },
  {
    districtId: "622",
    wardId: "23602",
    name: "Xã An Phú",
  },
  {
    districtId: "622",
    wardId: "23605",
    name: "Xã Diên Phú",
  },
  {
    districtId: "622",
    wardId: "23608",
    name: "Xã Ia Kênh",
  },
  {
    districtId: "622",
    wardId: "23611",
    name: "Xã Gào",
  },
  {
    districtId: "623",
    wardId: "23614",
    name: "Phường An Bình",
  },
  {
    districtId: "623",
    wardId: "23617",
    name: "Phường Tây Sơn",
  },
  {
    districtId: "623",
    wardId: "23620",
    name: "Phường An Phú",
  },
  {
    districtId: "623",
    wardId: "23623",
    name: "Phường An Tân",
  },
  {
    districtId: "623",
    wardId: "23626",
    name: "Xã Tú An",
  },
  {
    districtId: "623",
    wardId: "23627",
    name: "Xã Xuân An",
  },
  {
    districtId: "623",
    wardId: "23629",
    name: "Xã Cửu An",
  },
  {
    districtId: "623",
    wardId: "23630",
    name: "Phường An Phước",
  },
  {
    districtId: "623",
    wardId: "23632",
    name: "Xã Song An",
  },
  {
    districtId: "623",
    wardId: "23633",
    name: "Phường Ngô Mây",
  },
  {
    districtId: "623",
    wardId: "23635",
    name: "Xã Thành An",
  },
  {
    districtId: "624",
    wardId: "24041",
    name: "Phường Cheo Reo",
  },
  {
    districtId: "624",
    wardId: "24042",
    name: "Phường Hòa Bình",
  },
  {
    districtId: "624",
    wardId: "24044",
    name: "Phường Đoàn Kết",
  },
  {
    districtId: "624",
    wardId: "24045",
    name: "Phường Sông Bờ",
  },
  {
    districtId: "624",
    wardId: "24064",
    name: "Xã Ia RBol",
  },
  {
    districtId: "624",
    wardId: "24065",
    name: "Xã Chư Băh",
  },
  {
    districtId: "624",
    wardId: "24070",
    name: "Xã Ia RTô",
  },
  {
    districtId: "624",
    wardId: "24073",
    name: "Xã Ia Sao",
  },
  {
    districtId: "625",
    wardId: "23638",
    name: "Thị trấn KBang",
  },
  {
    districtId: "625",
    wardId: "23641",
    name: "Xã Kon Pne",
  },
  {
    districtId: "625",
    wardId: "23644",
    name: "Xã Đăk Roong",
  },
  {
    districtId: "625",
    wardId: "23647",
    name: "Xã Sơn Lang",
  },
  {
    districtId: "625",
    wardId: "23650",
    name: "Xã KRong",
  },
  {
    districtId: "625",
    wardId: "23653",
    name: "Xã Sơ Pai",
  },
  {
    districtId: "625",
    wardId: "23656",
    name: "Xã Lơ Ku",
  },
  {
    districtId: "625",
    wardId: "23659",
    name: "Xã Đông",
  },
  {
    districtId: "625",
    wardId: "23660",
    name: "Xã Đak SMar",
  },
  {
    districtId: "625",
    wardId: "23662",
    name: "Xã Nghĩa An",
  },
  {
    districtId: "625",
    wardId: "23665",
    name: "Xã Tơ Tung",
  },
  {
    districtId: "625",
    wardId: "23668",
    name: "Xã Kông Lơng Khơng",
  },
  {
    districtId: "625",
    wardId: "23671",
    name: "Xã Kông Pla",
  },
  {
    districtId: "625",
    wardId: "23674",
    name: "Xã Đăk HLơ",
  },
  {
    districtId: "626",
    wardId: "23677",
    name: "Thị trấn Đăk Đoa",
  },
  {
    districtId: "626",
    wardId: "23680",
    name: "Xã Hà Đông",
  },
  {
    districtId: "626",
    wardId: "23683",
    name: "Xã Đăk Sơmei",
  },
  {
    districtId: "626",
    wardId: "23684",
    name: "Xã Đăk Krong",
  },
  {
    districtId: "626",
    wardId: "23686",
    name: "Xã Hải Yang",
  },
  {
    districtId: "626",
    wardId: "23689",
    name: "Xã Kon Gang",
  },
  {
    districtId: "626",
    wardId: "23692",
    name: "Xã Hà Bầu",
  },
  {
    districtId: "626",
    wardId: "23695",
    name: "Xã Nam Yang",
  },
  {
    districtId: "626",
    wardId: "23698",
    name: "Xã K' Dang",
  },
  {
    districtId: "626",
    wardId: "23701",
    name: "Xã H' Neng",
  },
  {
    districtId: "626",
    wardId: "23704",
    name: "Xã Tân Bình",
  },
  {
    districtId: "626",
    wardId: "23707",
    name: "Xã Glar",
  },
  {
    districtId: "626",
    wardId: "23710",
    name: "Xã A Dơk",
  },
  {
    districtId: "626",
    wardId: "23713",
    name: "Xã Trang",
  },
  {
    districtId: "626",
    wardId: "23714",
    name: "Xã HNol",
  },
  {
    districtId: "626",
    wardId: "23716",
    name: "Xã Ia Pết",
  },
  {
    districtId: "626",
    wardId: "23719",
    name: "Xã Ia Băng",
  },
  {
    districtId: "627",
    wardId: "23722",
    name: "Thị trấn Phú Hòa",
  },
  {
    districtId: "627",
    wardId: "23725",
    name: "Xã Hà Tây",
  },
  {
    districtId: "627",
    wardId: "23728",
    name: "Xã Ia Khươl",
  },
  {
    districtId: "627",
    wardId: "23731",
    name: "Xã Ia Phí",
  },
  {
    districtId: "627",
    wardId: "23734",
    name: "Thị trấn Ia Ly",
  },
  {
    districtId: "627",
    wardId: "23737",
    name: "Xã Ia Mơ Nông",
  },
  {
    districtId: "627",
    wardId: "23738",
    name: "Xã Ia Kreng",
  },
  {
    districtId: "627",
    wardId: "23740",
    name: "Xã Đăk Tơ Ver",
  },
  {
    districtId: "627",
    wardId: "23743",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "627",
    wardId: "23746",
    name: "Xã Chư Đăng Ya",
  },
  {
    districtId: "627",
    wardId: "23749",
    name: "Xã Ia Ka",
  },
  {
    districtId: "627",
    wardId: "23752",
    name: "Xã Ia Nhin",
  },
  {
    districtId: "627",
    wardId: "23755",
    name: "Xã Nghĩa Hòa",
  },
  {
    districtId: "627",
    wardId: "23761",
    name: "Xã Nghĩa Hưng",
  },
  {
    districtId: "628",
    wardId: "23764",
    name: "Thị trấn Ia Kha",
  },
  {
    districtId: "628",
    wardId: "23767",
    name: "Xã Ia Sao",
  },
  {
    districtId: "628",
    wardId: "23768",
    name: "Xã Ia Yok",
  },
  {
    districtId: "628",
    wardId: "23770",
    name: "Xã Ia Hrung",
  },
  {
    districtId: "628",
    wardId: "23771",
    name: "Xã Ia Bă",
  },
  {
    districtId: "628",
    wardId: "23773",
    name: "Xã Ia Khai",
  },
  {
    districtId: "628",
    wardId: "23776",
    name: "Xã Ia KRai",
  },
  {
    districtId: "628",
    wardId: "23778",
    name: "Xã Ia Grăng",
  },
  {
    districtId: "628",
    wardId: "23779",
    name: "Xã Ia Tô",
  },
  {
    districtId: "628",
    wardId: "23782",
    name: "Xã Ia O",
  },
  {
    districtId: "628",
    wardId: "23785",
    name: "Xã Ia Dêr",
  },
  {
    districtId: "628",
    wardId: "23788",
    name: "Xã Ia Chia",
  },
  {
    districtId: "628",
    wardId: "23791",
    name: "Xã Ia Pếch",
  },
  {
    districtId: "629",
    wardId: "23794",
    name: "Thị trấn Kon Dơng",
  },
  {
    districtId: "629",
    wardId: "23797",
    name: "Xã Ayun",
  },
  {
    districtId: "629",
    wardId: "23798",
    name: "Xã Đak Jơ Ta",
  },
  {
    districtId: "629",
    wardId: "23799",
    name: "Xã Đak Ta Ley",
  },
  {
    districtId: "629",
    wardId: "23800",
    name: "Xã Hra",
  },
  {
    districtId: "629",
    wardId: "23803",
    name: "Xã Đăk Yă",
  },
  {
    districtId: "629",
    wardId: "23806",
    name: "Xã Đăk Djrăng",
  },
  {
    districtId: "629",
    wardId: "23809",
    name: "Xã Lơ Pang",
  },
  {
    districtId: "629",
    wardId: "23812",
    name: "Xã Kon Thụp",
  },
  {
    districtId: "629",
    wardId: "23815",
    name: "Xã Đê Ar",
  },
  {
    districtId: "629",
    wardId: "23818",
    name: "Xã Kon Chiêng",
  },
  {
    districtId: "629",
    wardId: "23821",
    name: "Xã Đăk Trôi",
  },
  {
    districtId: "630",
    wardId: "23824",
    name: "Thị trấn Kông Chro",
  },
  {
    districtId: "630",
    wardId: "23827",
    name: "Xã Chư Krêy",
  },
  {
    districtId: "630",
    wardId: "23830",
    name: "Xã An Trung",
  },
  {
    districtId: "630",
    wardId: "23833",
    name: "Xã Kông Yang",
  },
  {
    districtId: "630",
    wardId: "23836",
    name: "Xã Đăk Tơ Pang",
  },
  {
    districtId: "630",
    wardId: "23839",
    name: "Xã SRó",
  },
  {
    districtId: "630",
    wardId: "23840",
    name: "Xã Đắk Kơ Ning",
  },
  {
    districtId: "630",
    wardId: "23842",
    name: "Xã Đăk Song",
  },
  {
    districtId: "630",
    wardId: "23843",
    name: "Xã Đăk Pling",
  },
  {
    districtId: "630",
    wardId: "23845",
    name: "Xã Yang Trung",
  },
  {
    districtId: "630",
    wardId: "23846",
    name: "Xã Đăk Pơ Pho",
  },
  {
    districtId: "630",
    wardId: "23848",
    name: "Xã Ya Ma",
  },
  {
    districtId: "630",
    wardId: "23851",
    name: "Xã Chơ Long",
  },
  {
    districtId: "630",
    wardId: "23854",
    name: "Xã Yang Nam",
  },
  {
    districtId: "631",
    wardId: "23857",
    name: "Thị trấn Chư Ty",
  },
  {
    districtId: "631",
    wardId: "23860",
    name: "Xã Ia Dơk",
  },
  {
    districtId: "631",
    wardId: "23863",
    name: "Xã Ia Krêl",
  },
  {
    districtId: "631",
    wardId: "23866",
    name: "Xã Ia Din",
  },
  {
    districtId: "631",
    wardId: "23869",
    name: "Xã Ia Kla",
  },
  {
    districtId: "631",
    wardId: "23872",
    name: "Xã Ia Dom",
  },
  {
    districtId: "631",
    wardId: "23875",
    name: "Xã Ia Lang",
  },
  {
    districtId: "631",
    wardId: "23878",
    name: "Xã Ia Kriêng",
  },
  {
    districtId: "631",
    wardId: "23881",
    name: "Xã Ia Pnôn",
  },
  {
    districtId: "631",
    wardId: "23884",
    name: "Xã Ia Nan",
  },
  {
    districtId: "632",
    wardId: "23887",
    name: "Thị trấn Chư Prông",
  },
  {
    districtId: "632",
    wardId: "23888",
    name: "Xã Ia Kly",
  },
  {
    districtId: "632",
    wardId: "23890",
    name: "Xã Bình Giáo",
  },
  {
    districtId: "632",
    wardId: "23893",
    name: "Xã Ia Drăng",
  },
  {
    districtId: "632",
    wardId: "23896",
    name: "Xã Thăng Hưng",
  },
  {
    districtId: "632",
    wardId: "23899",
    name: "Xã Bàu Cạn",
  },
  {
    districtId: "632",
    wardId: "23902",
    name: "Xã Ia Phìn",
  },
  {
    districtId: "632",
    wardId: "23905",
    name: "Xã Ia Băng",
  },
  {
    districtId: "632",
    wardId: "23908",
    name: "Xã Ia Tôr",
  },
  {
    districtId: "632",
    wardId: "23911",
    name: "Xã Ia Boòng",
  },
  {
    districtId: "632",
    wardId: "23914",
    name: "Xã Ia O",
  },
  {
    districtId: "632",
    wardId: "23917",
    name: "Xã Ia Púch",
  },
  {
    districtId: "632",
    wardId: "23920",
    name: "Xã Ia Me",
  },
  {
    districtId: "632",
    wardId: "23923",
    name: "Xã Ia Vê",
  },
  {
    districtId: "632",
    wardId: "23924",
    name: "Xã Ia Bang",
  },
  {
    districtId: "632",
    wardId: "23926",
    name: "Xã Ia Pia",
  },
  {
    districtId: "632",
    wardId: "23929",
    name: "Xã Ia Ga",
  },
  {
    districtId: "632",
    wardId: "23932",
    name: "Xã Ia Lâu",
  },
  {
    districtId: "632",
    wardId: "23935",
    name: "Xã Ia Piơr",
  },
  {
    districtId: "632",
    wardId: "23938",
    name: "Xã Ia Mơ",
  },
  {
    districtId: "633",
    wardId: "23941",
    name: "Thị trấn Chư Sê",
  },
  {
    districtId: "633",
    wardId: "23944",
    name: "Xã Ia Tiêm",
  },
  {
    districtId: "633",
    wardId: "23945",
    name: "Xã Chư Pơng",
  },
  {
    districtId: "633",
    wardId: "23946",
    name: "Xã Bar Măih",
  },
  {
    districtId: "633",
    wardId: "23947",
    name: "Xã Bờ Ngoong",
  },
  {
    districtId: "633",
    wardId: "23950",
    name: "Xã Ia Glai",
  },
  {
    districtId: "633",
    wardId: "23953",
    name: "Xã AL Bá",
  },
  {
    districtId: "633",
    wardId: "23954",
    name: "Xã Kông HTok",
  },
  {
    districtId: "633",
    wardId: "23956",
    name: "Xã AYun",
  },
  {
    districtId: "633",
    wardId: "23959",
    name: "Xã Ia HLốp",
  },
  {
    districtId: "633",
    wardId: "23962",
    name: "Xã Ia Blang",
  },
  {
    districtId: "633",
    wardId: "23965",
    name: "Xã Dun",
  },
  {
    districtId: "633",
    wardId: "23966",
    name: "Xã Ia Pal",
  },
  {
    districtId: "633",
    wardId: "23968",
    name: "Xã H Bông",
  },
  {
    districtId: "633",
    wardId: "23977",
    name: "Xã Ia Ko",
  },
  {
    districtId: "634",
    wardId: "23989",
    name: "Xã Hà Tam",
  },
  {
    districtId: "634",
    wardId: "23992",
    name: "Xã An Thành",
  },
  {
    districtId: "634",
    wardId: "23995",
    name: "Thị trấn Đak Pơ",
  },
  {
    districtId: "634",
    wardId: "23998",
    name: "Xã Yang Bắc",
  },
  {
    districtId: "634",
    wardId: "24001",
    name: "Xã Cư An",
  },
  {
    districtId: "634",
    wardId: "24004",
    name: "Xã Tân An",
  },
  {
    districtId: "634",
    wardId: "24007",
    name: "Xã Phú An",
  },
  {
    districtId: "634",
    wardId: "24010",
    name: "Xã Ya Hội",
  },
  {
    districtId: "635",
    wardId: "24013",
    name: "Xã Pờ Tó",
  },
  {
    districtId: "635",
    wardId: "24016",
    name: "Xã Chư Răng",
  },
  {
    districtId: "635",
    wardId: "24019",
    name: "Xã Ia KDăm",
  },
  {
    districtId: "635",
    wardId: "24022",
    name: "Xã Kim Tân",
  },
  {
    districtId: "635",
    wardId: "24025",
    name: "Xã Chư Mố",
  },
  {
    districtId: "635",
    wardId: "24028",
    name: "Xã Ia Tul",
  },
  {
    districtId: "635",
    wardId: "24031",
    name: "Xã Ia Ma Rơn",
  },
  {
    districtId: "635",
    wardId: "24034",
    name: "Xã Ia Broăi",
  },
  {
    districtId: "635",
    wardId: "24037",
    name: "Xã Ia Trok",
  },
  {
    districtId: "637",
    wardId: "24076",
    name: "Thị trấn Phú Túc",
  },
  {
    districtId: "637",
    wardId: "24079",
    name: "Xã Ia RSai",
  },
  {
    districtId: "637",
    wardId: "24082",
    name: "Xã Ia RSươm",
  },
  {
    districtId: "637",
    wardId: "24085",
    name: "Xã Chư Gu",
  },
  {
    districtId: "637",
    wardId: "24088",
    name: "Xã Đất Bằng",
  },
  {
    districtId: "637",
    wardId: "24091",
    name: "Xã Ia Mláh",
  },
  {
    districtId: "637",
    wardId: "24094",
    name: "Xã Chư Drăng",
  },
  {
    districtId: "637",
    wardId: "24097",
    name: "Xã Phú Cần",
  },
  {
    districtId: "637",
    wardId: "24100",
    name: "Xã Ia HDreh",
  },
  {
    districtId: "637",
    wardId: "24103",
    name: "Xã Ia RMok",
  },
  {
    districtId: "637",
    wardId: "24106",
    name: "Xã Chư Ngọc",
  },
  {
    districtId: "637",
    wardId: "24109",
    name: "Xã Uar",
  },
  {
    districtId: "637",
    wardId: "24112",
    name: "Xã Chư Rcăm",
  },
  {
    districtId: "637",
    wardId: "24115",
    name: "Xã Krông Năng",
  },
  {
    districtId: "638",
    wardId: "24043",
    name: "Thị trấn Phú Thiện",
  },
  {
    districtId: "638",
    wardId: "24046",
    name: "Xã Chư A Thai",
  },
  {
    districtId: "638",
    wardId: "24048",
    name: "Xã Ayun Hạ",
  },
  {
    districtId: "638",
    wardId: "24049",
    name: "Xã Ia Ake",
  },
  {
    districtId: "638",
    wardId: "24052",
    name: "Xã Ia Sol",
  },
  {
    districtId: "638",
    wardId: "24055",
    name: "Xã Ia Piar",
  },
  {
    districtId: "638",
    wardId: "24058",
    name: "Xã Ia Peng",
  },
  {
    districtId: "638",
    wardId: "24060",
    name: "Xã Chrôh Pơnan",
  },
  {
    districtId: "638",
    wardId: "24061",
    name: "Xã Ia Hiao",
  },
  {
    districtId: "638",
    wardId: "24067",
    name: "Xã Ia Yeng",
  },
  {
    districtId: "639",
    wardId: "23942",
    name: "Thị trấn Nhơn Hoà",
  },
  {
    districtId: "639",
    wardId: "23971",
    name: "Xã Ia Hrú",
  },
  {
    districtId: "639",
    wardId: "23972",
    name: "Xã Ia Rong",
  },
  {
    districtId: "639",
    wardId: "23974",
    name: "Xã Ia Dreng",
  },
  {
    districtId: "639",
    wardId: "23978",
    name: "Xã Ia Hla",
  },
  {
    districtId: "639",
    wardId: "23980",
    name: "Xã Chư Don",
  },
  {
    districtId: "639",
    wardId: "23983",
    name: "Xã Ia Phang",
  },
  {
    districtId: "639",
    wardId: "23986",
    name: "Xã Ia Le",
  },
  {
    districtId: "639",
    wardId: "23987",
    name: "Xã Ia BLứ",
  },
  {
    districtId: "643",
    wardId: "24118",
    name: "Phường Tân Lập",
  },
  {
    districtId: "643",
    wardId: "24121",
    name: "Phường Tân Hòa",
  },
  {
    districtId: "643",
    wardId: "24124",
    name: "Phường Tân An",
  },
  {
    districtId: "643",
    wardId: "24127",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "643",
    wardId: "24130",
    name: "Phường Thành Nhất",
  },
  {
    districtId: "643",
    wardId: "24133",
    name: "Phường Thắng Lợi",
  },
  {
    districtId: "643",
    wardId: "24136",
    name: "Phường Tân Lợi",
  },
  {
    districtId: "643",
    wardId: "24139",
    name: "Phường Thành Công",
  },
  {
    districtId: "643",
    wardId: "24142",
    name: "Phường Tân Thành",
  },
  {
    districtId: "643",
    wardId: "24145",
    name: "Phường Tân Tiến",
  },
  {
    districtId: "643",
    wardId: "24148",
    name: "Phường Tự An",
  },
  {
    districtId: "643",
    wardId: "24151",
    name: "Phường Ea Tam",
  },
  {
    districtId: "643",
    wardId: "24154",
    name: "Phường Khánh Xuân",
  },
  {
    districtId: "643",
    wardId: "24157",
    name: "Xã Hòa Thuận",
  },
  {
    districtId: "643",
    wardId: "24160",
    name: "Xã Cư ÊBur",
  },
  {
    districtId: "643",
    wardId: "24163",
    name: "Xã Ea Tu",
  },
  {
    districtId: "643",
    wardId: "24166",
    name: "Xã Hòa Thắng",
  },
  {
    districtId: "643",
    wardId: "24169",
    name: "Xã Ea Kao",
  },
  {
    districtId: "643",
    wardId: "24172",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "643",
    wardId: "24175",
    name: "Xã Hòa Khánh",
  },
  {
    districtId: "643",
    wardId: "24178",
    name: "Xã Hòa Xuân",
  },
  {
    districtId: "644",
    wardId: "24305",
    name: "Phường An Lạc",
  },
  {
    districtId: "644",
    wardId: "24308",
    name: "Phường An Bình",
  },
  {
    districtId: "644",
    wardId: "24311",
    name: "Phường Thiện An",
  },
  {
    districtId: "644",
    wardId: "24318",
    name: "Phường Đạt Hiếu",
  },
  {
    districtId: "644",
    wardId: "24322",
    name: "Phường Đoàn Kết",
  },
  {
    districtId: "644",
    wardId: "24325",
    name: "Xã Ea Blang",
  },
  {
    districtId: "644",
    wardId: "24328",
    name: "Xã Ea Drông",
  },
  {
    districtId: "644",
    wardId: "24331",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "644",
    wardId: "24332",
    name: "Phường Bình Tân",
  },
  {
    districtId: "644",
    wardId: "24334",
    name: "Xã Ea Siên",
  },
  {
    districtId: "644",
    wardId: "24337",
    name: "Xã Bình Thuận",
  },
  {
    districtId: "644",
    wardId: "24340",
    name: "Xã Cư Bao",
  },
  {
    districtId: "645",
    wardId: "24181",
    name: "Thị trấn Ea Drăng",
  },
  {
    districtId: "645",
    wardId: "24184",
    name: "Xã Ea H'leo",
  },
  {
    districtId: "645",
    wardId: "24187",
    name: "Xã Ea Sol",
  },
  {
    districtId: "645",
    wardId: "24190",
    name: "Xã Ea Ral",
  },
  {
    districtId: "645",
    wardId: "24193",
    name: "Xã Ea Wy",
  },
  {
    districtId: "645",
    wardId: "24194",
    name: "Xã Cư A Mung",
  },
  {
    districtId: "645",
    wardId: "24196",
    name: "Xã Cư Mốt",
  },
  {
    districtId: "645",
    wardId: "24199",
    name: "Xã Ea Hiao",
  },
  {
    districtId: "645",
    wardId: "24202",
    name: "Xã Ea Khal",
  },
  {
    districtId: "645",
    wardId: "24205",
    name: "Xã Dliê Yang",
  },
  {
    districtId: "645",
    wardId: "24207",
    name: "Xã Ea Tir",
  },
  {
    districtId: "645",
    wardId: "24208",
    name: "Xã Ea Nam",
  },
  {
    districtId: "646",
    wardId: "24211",
    name: "Thị trấn Ea Súp",
  },
  {
    districtId: "646",
    wardId: "24214",
    name: "Xã Ia Lốp",
  },
  {
    districtId: "646",
    wardId: "24215",
    name: "Xã Ia JLơi",
  },
  {
    districtId: "646",
    wardId: "24217",
    name: "Xã Ea Rốk",
  },
  {
    districtId: "646",
    wardId: "24220",
    name: "Xã Ya Tờ Mốt",
  },
  {
    districtId: "646",
    wardId: "24221",
    name: "Xã Ia RVê",
  },
  {
    districtId: "646",
    wardId: "24223",
    name: "Xã Ea Lê",
  },
  {
    districtId: "646",
    wardId: "24226",
    name: "Xã Cư KBang",
  },
  {
    districtId: "646",
    wardId: "24229",
    name: "Xã Ea Bung",
  },
  {
    districtId: "646",
    wardId: "24232",
    name: "Xã Cư M'Lan",
  },
  {
    districtId: "647",
    wardId: "24235",
    name: "Xã Krông Na",
  },
  {
    districtId: "647",
    wardId: "24238",
    name: "Xã Ea Huar",
  },
  {
    districtId: "647",
    wardId: "24241",
    name: "Xã Ea Wer",
  },
  {
    districtId: "647",
    wardId: "24244",
    name: "Xã Tân Hoà",
  },
  {
    districtId: "647",
    wardId: "24247",
    name: "Xã Cuôr KNia",
  },
  {
    districtId: "647",
    wardId: "24250",
    name: "Xã Ea Bar",
  },
  {
    districtId: "647",
    wardId: "24253",
    name: "Xã Ea Nuôl",
  },
  {
    districtId: "648",
    wardId: "24256",
    name: "Thị trấn Ea Pốk",
  },
  {
    districtId: "648",
    wardId: "24259",
    name: "Thị trấn Quảng Phú",
  },
  {
    districtId: "648",
    wardId: "24262",
    name: "Xã Quảng Tiến",
  },
  {
    districtId: "648",
    wardId: "24264",
    name: "Xã Ea Kuêh",
  },
  {
    districtId: "648",
    wardId: "24265",
    name: "Xã Ea Kiết",
  },
  {
    districtId: "648",
    wardId: "24268",
    name: "Xã Ea Tar",
  },
  {
    districtId: "648",
    wardId: "24271",
    name: "Xã Cư Dliê M'nông",
  },
  {
    districtId: "648",
    wardId: "24274",
    name: "Xã Ea H'đinh",
  },
  {
    districtId: "648",
    wardId: "24277",
    name: "Xã Ea Tul",
  },
  {
    districtId: "648",
    wardId: "24280",
    name: "Xã Ea KPam",
  },
  {
    districtId: "648",
    wardId: "24283",
    name: "Xã Ea M'DRóh",
  },
  {
    districtId: "648",
    wardId: "24286",
    name: "Xã Quảng Hiệp",
  },
  {
    districtId: "648",
    wardId: "24289",
    name: "Xã Cư M'gar",
  },
  {
    districtId: "648",
    wardId: "24292",
    name: "Xã Ea D'Rơng",
  },
  {
    districtId: "648",
    wardId: "24295",
    name: "Xã Ea M'nang",
  },
  {
    districtId: "648",
    wardId: "24298",
    name: "Xã Cư Suê",
  },
  {
    districtId: "648",
    wardId: "24301",
    name: "Xã Cuor Đăng",
  },
  {
    districtId: "649",
    wardId: "24307",
    name: "Xã Cư Né",
  },
  {
    districtId: "649",
    wardId: "24310",
    name: "Xã Chư KBô",
  },
  {
    districtId: "649",
    wardId: "24313",
    name: "Xã Cư Pơng",
  },
  {
    districtId: "649",
    wardId: "24314",
    name: "Xã Ea Sin",
  },
  {
    districtId: "649",
    wardId: "24316",
    name: "Xã Pơng Drang",
  },
  {
    districtId: "649",
    wardId: "24317",
    name: "Xã Tân Lập",
  },
  {
    districtId: "649",
    wardId: "24319",
    name: "Xã Ea Ngai",
  },
  {
    districtId: "650",
    wardId: "24343",
    name: "Thị trấn Krông Năng",
  },
  {
    districtId: "650",
    wardId: "24346",
    name: "Xã ĐLiê Ya",
  },
  {
    districtId: "650",
    wardId: "24349",
    name: "Xã Ea Tóh",
  },
  {
    districtId: "650",
    wardId: "24352",
    name: "Xã Ea Tam",
  },
  {
    districtId: "650",
    wardId: "24355",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "650",
    wardId: "24358",
    name: "Xã Tam Giang",
  },
  {
    districtId: "650",
    wardId: "24359",
    name: "Xã Ea Puk",
  },
  {
    districtId: "650",
    wardId: "24360",
    name: "Xã Ea Dăh",
  },
  {
    districtId: "650",
    wardId: "24361",
    name: "Xã Ea Hồ",
  },
  {
    districtId: "650",
    wardId: "24364",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "650",
    wardId: "24367",
    name: "Xã Cư Klông",
  },
  {
    districtId: "650",
    wardId: "24370",
    name: "Xã Ea Tân",
  },
  {
    districtId: "651",
    wardId: "24373",
    name: "Thị trấn Ea Kar",
  },
  {
    districtId: "651",
    wardId: "24376",
    name: "Thị trấn Ea Knốp",
  },
  {
    districtId: "651",
    wardId: "24379",
    name: "Xã Ea Sô",
  },
  {
    districtId: "651",
    wardId: "24380",
    name: "Xã Ea Sar",
  },
  {
    districtId: "651",
    wardId: "24382",
    name: "Xã Xuân Phú",
  },
  {
    districtId: "651",
    wardId: "24385",
    name: "Xã Cư Huê",
  },
  {
    districtId: "651",
    wardId: "24388",
    name: "Xã Ea Tih",
  },
  {
    districtId: "651",
    wardId: "24391",
    name: "Xã Ea Đar",
  },
  {
    districtId: "651",
    wardId: "24394",
    name: "Xã Ea Kmút",
  },
  {
    districtId: "651",
    wardId: "24397",
    name: "Xã Cư Ni",
  },
  {
    districtId: "651",
    wardId: "24400",
    name: "Xã Ea Păl",
  },
  {
    districtId: "651",
    wardId: "24401",
    name: "Xã Cư Prông",
  },
  {
    districtId: "651",
    wardId: "24403",
    name: "Xã Ea Ô",
  },
  {
    districtId: "651",
    wardId: "24404",
    name: "Xã Cư ELang",
  },
  {
    districtId: "651",
    wardId: "24406",
    name: "Xã Cư Bông",
  },
  {
    districtId: "651",
    wardId: "24409",
    name: "Xã Cư Jang",
  },
  {
    districtId: "652",
    wardId: "24412",
    name: "Thị trấn M'Đrắk",
  },
  {
    districtId: "652",
    wardId: "24415",
    name: "Xã Cư Prao",
  },
  {
    districtId: "652",
    wardId: "24418",
    name: "Xã Ea Pil",
  },
  {
    districtId: "652",
    wardId: "24421",
    name: "Xã Ea Lai",
  },
  {
    districtId: "652",
    wardId: "24424",
    name: "Xã Ea H'MLay",
  },
  {
    districtId: "652",
    wardId: "24427",
    name: "Xã Krông Jing",
  },
  {
    districtId: "652",
    wardId: "24430",
    name: "Xã Ea M' Doal",
  },
  {
    districtId: "652",
    wardId: "24433",
    name: "Xã Ea Riêng",
  },
  {
    districtId: "652",
    wardId: "24436",
    name: "Xã Cư M'ta",
  },
  {
    districtId: "652",
    wardId: "24439",
    name: "Xã Cư K Róa",
  },
  {
    districtId: "652",
    wardId: "24442",
    name: "Xã Krông Á",
  },
  {
    districtId: "652",
    wardId: "24444",
    name: "Xã Cư San",
  },
  {
    districtId: "652",
    wardId: "24445",
    name: "Xã Ea Trang",
  },
  {
    districtId: "653",
    wardId: "24448",
    name: "Thị trấn Krông Kmar",
  },
  {
    districtId: "653",
    wardId: "24451",
    name: "Xã Dang Kang",
  },
  {
    districtId: "653",
    wardId: "24454",
    name: "Xã Cư KTy",
  },
  {
    districtId: "653",
    wardId: "24457",
    name: "Xã Hòa Thành",
  },
  {
    districtId: "653",
    wardId: "24460",
    name: "Xã Hòa Tân",
  },
  {
    districtId: "653",
    wardId: "24463",
    name: "Xã Hòa Phong",
  },
  {
    districtId: "653",
    wardId: "24466",
    name: "Xã Hòa Lễ",
  },
  {
    districtId: "653",
    wardId: "24469",
    name: "Xã Yang Reh",
  },
  {
    districtId: "653",
    wardId: "24472",
    name: "Xã Ea Trul",
  },
  {
    districtId: "653",
    wardId: "24475",
    name: "Xã Khuê Ngọc Điền",
  },
  {
    districtId: "653",
    wardId: "24478",
    name: "Xã Cư Pui",
  },
  {
    districtId: "653",
    wardId: "24481",
    name: "Xã Hòa Sơn",
  },
  {
    districtId: "653",
    wardId: "24484",
    name: "Xã Cư Drăm",
  },
  {
    districtId: "653",
    wardId: "24487",
    name: "Xã Yang Mao",
  },
  {
    districtId: "654",
    wardId: "24490",
    name: "Thị trấn Phước An",
  },
  {
    districtId: "654",
    wardId: "24493",
    name: "Xã KRông Búk",
  },
  {
    districtId: "654",
    wardId: "24496",
    name: "Xã Ea Kly",
  },
  {
    districtId: "654",
    wardId: "24499",
    name: "Xã Ea Kênh",
  },
  {
    districtId: "654",
    wardId: "24502",
    name: "Xã Ea Phê",
  },
  {
    districtId: "654",
    wardId: "24505",
    name: "Xã Ea KNuec",
  },
  {
    districtId: "654",
    wardId: "24508",
    name: "Xã Ea Yông",
  },
  {
    districtId: "654",
    wardId: "24511",
    name: "Xã Hòa An",
  },
  {
    districtId: "654",
    wardId: "24514",
    name: "Xã Ea Kuăng",
  },
  {
    districtId: "654",
    wardId: "24517",
    name: "Xã Hòa Đông",
  },
  {
    districtId: "654",
    wardId: "24520",
    name: "Xã Ea Hiu",
  },
  {
    districtId: "654",
    wardId: "24523",
    name: "Xã Hòa Tiến",
  },
  {
    districtId: "654",
    wardId: "24526",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "654",
    wardId: "24529",
    name: "Xã Vụ Bổn",
  },
  {
    districtId: "654",
    wardId: "24532",
    name: "Xã Ea Uy",
  },
  {
    districtId: "654",
    wardId: "24535",
    name: "Xã Ea Yiêng",
  },
  {
    districtId: "655",
    wardId: "24538",
    name: "Thị trấn Buôn Trấp",
  },
  {
    districtId: "655",
    wardId: "24556",
    name: "Xã Dray Sáp",
  },
  {
    districtId: "655",
    wardId: "24559",
    name: "Xã Ea Na",
  },
  {
    districtId: "655",
    wardId: "24565",
    name: "Xã Ea Bông",
  },
  {
    districtId: "655",
    wardId: "24568",
    name: "Xã Băng A Drênh",
  },
  {
    districtId: "655",
    wardId: "24571",
    name: "Xã Dur KMăl",
  },
  {
    districtId: "655",
    wardId: "24574",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "655",
    wardId: "24577",
    name: "Xã Quảng Điền",
  },
  {
    districtId: "656",
    wardId: "24580",
    name: "Thị trấn Liên Sơn",
  },
  {
    districtId: "656",
    wardId: "24583",
    name: "Xã Yang Tao",
  },
  {
    districtId: "656",
    wardId: "24586",
    name: "Xã Bông Krang",
  },
  {
    districtId: "656",
    wardId: "24589",
    name: "Xã Đắk Liêng",
  },
  {
    districtId: "656",
    wardId: "24592",
    name: "Xã Buôn Triết",
  },
  {
    districtId: "656",
    wardId: "24595",
    name: "Xã Buôn Tría",
  },
  {
    districtId: "656",
    wardId: "24598",
    name: "Xã Đắk Phơi",
  },
  {
    districtId: "656",
    wardId: "24601",
    name: "Xã Đắk Nuê",
  },
  {
    districtId: "656",
    wardId: "24604",
    name: "Xã Krông Nô",
  },
  {
    districtId: "656",
    wardId: "24607",
    name: "Xã Nam Ka",
  },
  {
    districtId: "656",
    wardId: "24610",
    name: "Xã Ea R'Bin",
  },
  {
    districtId: "657",
    wardId: "24540",
    name: "Xã Ea Ning",
  },
  {
    districtId: "657",
    wardId: "24541",
    name: "Xã Cư Ê Wi",
  },
  {
    districtId: "657",
    wardId: "24544",
    name: "Xã Ea Ktur",
  },
  {
    districtId: "657",
    wardId: "24547",
    name: "Xã Ea Tiêu",
  },
  {
    districtId: "657",
    wardId: "24550",
    name: "Xã Ea BHốk",
  },
  {
    districtId: "657",
    wardId: "24553",
    name: "Xã Ea Hu",
  },
  {
    districtId: "657",
    wardId: "24561",
    name: "Xã Dray Bhăng",
  },
  {
    districtId: "657",
    wardId: "24562",
    name: "Xã Hòa Hiệp",
  },
  {
    districtId: "660",
    wardId: "24611",
    name: "Phường Nghĩa Đức",
  },
  {
    districtId: "660",
    wardId: "24612",
    name: "Phường Nghĩa Thành",
  },
  {
    districtId: "660",
    wardId: "24614",
    name: "Phường Nghĩa Phú",
  },
  {
    districtId: "660",
    wardId: "24615",
    name: "Phường Nghĩa Tân",
  },
  {
    districtId: "660",
    wardId: "24617",
    name: "Phường Nghĩa Trung",
  },
  {
    districtId: "660",
    wardId: "24618",
    name: "Xã Đăk R'Moan",
  },
  {
    districtId: "660",
    wardId: "24619",
    name: "Phường Quảng Thành",
  },
  {
    districtId: "660",
    wardId: "24628",
    name: "Xã Đắk Nia",
  },
  {
    districtId: "661",
    wardId: "24616",
    name: "Xã Quảng Sơn",
  },
  {
    districtId: "661",
    wardId: "24620",
    name: "Xã Quảng Hoà",
  },
  {
    districtId: "661",
    wardId: "24622",
    name: "Xã Đắk Ha",
  },
  {
    districtId: "661",
    wardId: "24625",
    name: "Xã Đắk R'Măng",
  },
  {
    districtId: "661",
    wardId: "24631",
    name: "Xã Quảng Khê",
  },
  {
    districtId: "661",
    wardId: "24634",
    name: "Xã Đắk Plao",
  },
  {
    districtId: "661",
    wardId: "24637",
    name: "Xã Đắk Som",
  },
  {
    districtId: "662",
    wardId: "24640",
    name: "Thị trấn Ea T'Ling",
  },
  {
    districtId: "662",
    wardId: "24643",
    name: "Xã Đắk Wil",
  },
  {
    districtId: "662",
    wardId: "24646",
    name: "Xã Ea Pô",
  },
  {
    districtId: "662",
    wardId: "24649",
    name: "Xã Nam Dong",
  },
  {
    districtId: "662",
    wardId: "24652",
    name: "Xã Đắk DRông",
  },
  {
    districtId: "662",
    wardId: "24655",
    name: "Xã Tâm Thắng",
  },
  {
    districtId: "662",
    wardId: "24658",
    name: "Xã Cư Knia",
  },
  {
    districtId: "662",
    wardId: "24661",
    name: "Xã Trúc Sơn",
  },
  {
    districtId: "663",
    wardId: "24664",
    name: "Thị trấn Đắk Mil",
  },
  {
    districtId: "663",
    wardId: "24667",
    name: "Xã  Đắk Lao",
  },
  {
    districtId: "663",
    wardId: "24670",
    name: "Xã Đắk R'La",
  },
  {
    districtId: "663",
    wardId: "24673",
    name: "Xã Đắk Gằn",
  },
  {
    districtId: "663",
    wardId: "24676",
    name: "Xã Đức Mạnh",
  },
  {
    districtId: "663",
    wardId: "24677",
    name: "Xã Đắk N'Drót",
  },
  {
    districtId: "663",
    wardId: "24678",
    name: "Xã Long Sơn",
  },
  {
    districtId: "663",
    wardId: "24679",
    name: "Xã Đắk Sắk",
  },
  {
    districtId: "663",
    wardId: "24682",
    name: "Xã Thuận An",
  },
  {
    districtId: "663",
    wardId: "24685",
    name: "Xã Đức Minh",
  },
  {
    districtId: "664",
    wardId: "24688",
    name: "Thị trấn Đắk Mâm",
  },
  {
    districtId: "664",
    wardId: "24691",
    name: "Xã Đắk Sôr",
  },
  {
    districtId: "664",
    wardId: "24692",
    name: "Xã Nam Xuân",
  },
  {
    districtId: "664",
    wardId: "24694",
    name: "Xã Buôn Choah",
  },
  {
    districtId: "664",
    wardId: "24697",
    name: "Xã Nam Đà",
  },
  {
    districtId: "664",
    wardId: "24699",
    name: "Xã Tân Thành",
  },
  {
    districtId: "664",
    wardId: "24700",
    name: "Xã Đắk Drô",
  },
  {
    districtId: "664",
    wardId: "24703",
    name: "Xã Nâm Nung",
  },
  {
    districtId: "664",
    wardId: "24706",
    name: "Xã Đức Xuyên",
  },
  {
    districtId: "664",
    wardId: "24709",
    name: "Xã Đắk Nang",
  },
  {
    districtId: "664",
    wardId: "24712",
    name: "Xã Quảng Phú",
  },
  {
    districtId: "664",
    wardId: "24715",
    name: "Xã Nâm N'Đir",
  },
  {
    districtId: "665",
    wardId: "24717",
    name: "Thị trấn Đức An",
  },
  {
    districtId: "665",
    wardId: "24718",
    name: "Xã Đắk Môl",
  },
  {
    districtId: "665",
    wardId: "24719",
    name: "Xã Đắk Hòa",
  },
  {
    districtId: "665",
    wardId: "24721",
    name: "Xã Nam Bình",
  },
  {
    districtId: "665",
    wardId: "24722",
    name: "Xã Thuận Hà",
  },
  {
    districtId: "665",
    wardId: "24724",
    name: "Xã Thuận Hạnh",
  },
  {
    districtId: "665",
    wardId: "24727",
    name: "Xã Đắk N'Dung",
  },
  {
    districtId: "665",
    wardId: "24728",
    name: "Xã Nâm N'Jang",
  },
  {
    districtId: "665",
    wardId: "24730",
    name: "Xã Trường Xuân",
  },
  {
    districtId: "666",
    wardId: "24733",
    name: "Thị trấn Kiến Đức",
  },
  {
    districtId: "666",
    wardId: "24745",
    name: "Xã Quảng Tín",
  },
  {
    districtId: "666",
    wardId: "24750",
    name: "Xã Đắk Wer",
  },
  {
    districtId: "666",
    wardId: "24751",
    name: "Xã Nhân Cơ",
  },
  {
    districtId: "666",
    wardId: "24754",
    name: "Xã Kiến Thành",
  },
  {
    districtId: "666",
    wardId: "24756",
    name: "Xã Nghĩa Thắng",
  },
  {
    districtId: "666",
    wardId: "24757",
    name: "Xã Đạo Nghĩa",
  },
  {
    districtId: "666",
    wardId: "24760",
    name: "Xã Đắk Sin",
  },
  {
    districtId: "666",
    wardId: "24761",
    name: "Xã Hưng Bình",
  },
  {
    districtId: "666",
    wardId: "24763",
    name: "Xã Đắk Ru",
  },
  {
    districtId: "666",
    wardId: "24766",
    name: "Xã Nhân Đạo",
  },
  {
    districtId: "667",
    wardId: "24736",
    name: "Xã Quảng Trực",
  },
  {
    districtId: "667",
    wardId: "24739",
    name: "Xã Đắk Búk So",
  },
  {
    districtId: "667",
    wardId: "24740",
    name: "Xã Quảng Tâm",
  },
  {
    districtId: "667",
    wardId: "24742",
    name: "Xã Đắk R'Tíh",
  },
  {
    districtId: "667",
    wardId: "24746",
    name: "Xã Đắk Ngo",
  },
  {
    districtId: "667",
    wardId: "24748",
    name: "Xã Quảng Tân",
  },
  {
    districtId: "672",
    wardId: "24769",
    name: "Phường 7",
  },
  {
    districtId: "672",
    wardId: "24772",
    name: "Phường 8",
  },
  {
    districtId: "672",
    wardId: "24775",
    name: "Phường 12",
  },
  {
    districtId: "672",
    wardId: "24778",
    name: "Phường 9",
  },
  {
    districtId: "672",
    wardId: "24781",
    name: "Phường 2",
  },
  {
    districtId: "672",
    wardId: "24784",
    name: "Phường 1",
  },
  {
    districtId: "672",
    wardId: "24787",
    name: "Phường 6",
  },
  {
    districtId: "672",
    wardId: "24790",
    name: "Phường 5",
  },
  {
    districtId: "672",
    wardId: "24793",
    name: "Phường 4",
  },
  {
    districtId: "672",
    wardId: "24796",
    name: "Phường 10",
  },
  {
    districtId: "672",
    wardId: "24799",
    name: "Phường 11",
  },
  {
    districtId: "672",
    wardId: "24802",
    name: "Phường 3",
  },
  {
    districtId: "672",
    wardId: "24805",
    name: "Xã Xuân Thọ",
  },
  {
    districtId: "672",
    wardId: "24808",
    name: "Xã Tà Nung",
  },
  {
    districtId: "672",
    wardId: "24810",
    name: "Xã Trạm Hành",
  },
  {
    districtId: "672",
    wardId: "24811",
    name: "Xã Xuân Trường",
  },
  {
    districtId: "673",
    wardId: "24814",
    name: "Phường Lộc Phát",
  },
  {
    districtId: "673",
    wardId: "24817",
    name: "Phường Lộc Tiến",
  },
  {
    districtId: "673",
    wardId: "24820",
    name: "Phường 2",
  },
  {
    districtId: "673",
    wardId: "24823",
    name: "Phường 1",
  },
  {
    districtId: "673",
    wardId: "24826",
    name: "Phường B'lao",
  },
  {
    districtId: "673",
    wardId: "24829",
    name: "Phường Lộc Sơn",
  },
  {
    districtId: "673",
    wardId: "24832",
    name: "Xã Đạm Bri",
  },
  {
    districtId: "673",
    wardId: "24835",
    name: "Xã Lộc Thanh",
  },
  {
    districtId: "673",
    wardId: "24838",
    name: "Xã Lộc Nga",
  },
  {
    districtId: "673",
    wardId: "24841",
    name: "Xã Lộc Châu",
  },
  {
    districtId: "673",
    wardId: "24844",
    name: "Xã Đại Lào",
  },
  {
    districtId: "674",
    wardId: "24853",
    name: "Xã Đạ Tông",
  },
  {
    districtId: "674",
    wardId: "24856",
    name: "Xã Đạ Long",
  },
  {
    districtId: "674",
    wardId: "24859",
    name: "Xã Đạ M' Rong",
  },
  {
    districtId: "674",
    wardId: "24874",
    name: "Xã Liêng Srônh",
  },
  {
    districtId: "674",
    wardId: "24875",
    name: "Xã Đạ Rsal",
  },
  {
    districtId: "674",
    wardId: "24877",
    name: "Xã Rô Men",
  },
  {
    districtId: "674",
    wardId: "24886",
    name: "Xã Phi Liêng",
  },
  {
    districtId: "674",
    wardId: "24889",
    name: "Xã Đạ K' Nàng",
  },
  {
    districtId: "675",
    wardId: "24846",
    name: "Thị trấn Lạc Dương",
  },
  {
    districtId: "675",
    wardId: "24847",
    name: "Xã Đạ Chais",
  },
  {
    districtId: "675",
    wardId: "24848",
    name: "Xã Đạ Nhim",
  },
  {
    districtId: "675",
    wardId: "24850",
    name: "Xã Đưng KNớ",
  },
  {
    districtId: "675",
    wardId: "24862",
    name: "Xã Lát",
  },
  {
    districtId: "675",
    wardId: "24865",
    name: "Xã Đạ Sar",
  },
  {
    districtId: "676",
    wardId: "24868",
    name: "Thị trấn Nam Ban",
  },
  {
    districtId: "676",
    wardId: "24871",
    name: "Thị trấn Đinh Văn",
  },
  {
    districtId: "676",
    wardId: "24880",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "676",
    wardId: "24883",
    name: "Xã Phi Tô",
  },
  {
    districtId: "676",
    wardId: "24892",
    name: "Xã Mê Linh",
  },
  {
    districtId: "676",
    wardId: "24895",
    name: "Xã Đạ Đờn",
  },
  {
    districtId: "676",
    wardId: "24898",
    name: "Xã Phúc Thọ",
  },
  {
    districtId: "676",
    wardId: "24901",
    name: "Xã Đông Thanh",
  },
  {
    districtId: "676",
    wardId: "24904",
    name: "Xã Gia Lâm",
  },
  {
    districtId: "676",
    wardId: "24907",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "676",
    wardId: "24910",
    name: "Xã Tân Văn",
  },
  {
    districtId: "676",
    wardId: "24913",
    name: "Xã Hoài Đức",
  },
  {
    districtId: "676",
    wardId: "24916",
    name: "Xã Tân Hà",
  },
  {
    districtId: "676",
    wardId: "24919",
    name: "Xã Liên Hà",
  },
  {
    districtId: "676",
    wardId: "24922",
    name: "Xã Đan Phượng",
  },
  {
    districtId: "676",
    wardId: "24925",
    name: "Xã Nam Hà",
  },
  {
    districtId: "677",
    wardId: "24928",
    name: "Thị trấn D'Ran",
  },
  {
    districtId: "677",
    wardId: "24931",
    name: "Thị trấn Thạnh Mỹ",
  },
  {
    districtId: "677",
    wardId: "24934",
    name: "Xã Lạc Xuân",
  },
  {
    districtId: "677",
    wardId: "24937",
    name: "Xã Đạ Ròn",
  },
  {
    districtId: "677",
    wardId: "24940",
    name: "Xã Lạc Lâm",
  },
  {
    districtId: "677",
    wardId: "24943",
    name: "Xã Ka Đô",
  },
  {
    districtId: "677",
    wardId: "24946",
    name: "Xã Quảng Lập",
  },
  {
    districtId: "677",
    wardId: "24949",
    name: "Xã Ka Đơn",
  },
  {
    districtId: "677",
    wardId: "24952",
    name: "Xã Tu Tra",
  },
  {
    districtId: "677",
    wardId: "24955",
    name: "Xã Pró",
  },
  {
    districtId: "678",
    wardId: "24958",
    name: "Thị trấn Liên Nghĩa",
  },
  {
    districtId: "678",
    wardId: "24961",
    name: "Xã Hiệp An",
  },
  {
    districtId: "678",
    wardId: "24964",
    name: "Xã Liên Hiệp",
  },
  {
    districtId: "678",
    wardId: "24967",
    name: "Xã Hiệp Thạnh",
  },
  {
    districtId: "678",
    wardId: "24970",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "678",
    wardId: "24973",
    name: "Xã N'Thol Hạ",
  },
  {
    districtId: "678",
    wardId: "24976",
    name: "Xã Tân Hội",
  },
  {
    districtId: "678",
    wardId: "24979",
    name: "Xã Tân Thành",
  },
  {
    districtId: "678",
    wardId: "24982",
    name: "Xã Phú Hội",
  },
  {
    districtId: "678",
    wardId: "24985",
    name: "Xã Ninh Gia",
  },
  {
    districtId: "678",
    wardId: "24988",
    name: "Xã Tà Năng",
  },
  {
    districtId: "678",
    wardId: "24989",
    name: "Xã Đa Quyn",
  },
  {
    districtId: "678",
    wardId: "24991",
    name: "Xã Tà Hine",
  },
  {
    districtId: "678",
    wardId: "24994",
    name: "Xã Đà Loan",
  },
  {
    districtId: "678",
    wardId: "24997",
    name: "Xã Ninh Loan",
  },
  {
    districtId: "679",
    wardId: "25000",
    name: "Thị trấn Di Linh",
  },
  {
    districtId: "679",
    wardId: "25003",
    name: "Xã Đinh Trang Thượng",
  },
  {
    districtId: "679",
    wardId: "25006",
    name: "Xã Tân Thượng",
  },
  {
    districtId: "679",
    wardId: "25007",
    name: "Xã Tân Lâm",
  },
  {
    districtId: "679",
    wardId: "25009",
    name: "Xã Tân Châu",
  },
  {
    districtId: "679",
    wardId: "25012",
    name: "Xã Tân Nghĩa",
  },
  {
    districtId: "679",
    wardId: "25015",
    name: "Xã Gia Hiệp",
  },
  {
    districtId: "679",
    wardId: "25018",
    name: "Xã Đinh Lạc",
  },
  {
    districtId: "679",
    wardId: "25021",
    name: "Xã Tam Bố",
  },
  {
    districtId: "679",
    wardId: "25024",
    name: "Xã Đinh Trang Hòa",
  },
  {
    districtId: "679",
    wardId: "25027",
    name: "Xã Liên Đầm",
  },
  {
    districtId: "679",
    wardId: "25030",
    name: "Xã Gung Ré",
  },
  {
    districtId: "679",
    wardId: "25033",
    name: "Xã Bảo Thuận",
  },
  {
    districtId: "679",
    wardId: "25036",
    name: "Xã Hòa Ninh",
  },
  {
    districtId: "679",
    wardId: "25039",
    name: "Xã Hòa Trung",
  },
  {
    districtId: "679",
    wardId: "25042",
    name: "Xã Hòa Nam",
  },
  {
    districtId: "679",
    wardId: "25045",
    name: "Xã Hòa Bắc",
  },
  {
    districtId: "679",
    wardId: "25048",
    name: "Xã Sơn Điền",
  },
  {
    districtId: "679",
    wardId: "25051",
    name: "Xã Gia Bắc",
  },
  {
    districtId: "680",
    wardId: "25054",
    name: "Thị trấn Lộc Thắng",
  },
  {
    districtId: "680",
    wardId: "25057",
    name: "Xã Lộc Bảo",
  },
  {
    districtId: "680",
    wardId: "25060",
    name: "Xã Lộc Lâm",
  },
  {
    districtId: "680",
    wardId: "25063",
    name: "Xã Lộc Phú",
  },
  {
    districtId: "680",
    wardId: "25066",
    name: "Xã Lộc Bắc",
  },
  {
    districtId: "680",
    wardId: "25069",
    name: "Xã B' Lá",
  },
  {
    districtId: "680",
    wardId: "25072",
    name: "Xã Lộc Ngãi",
  },
  {
    districtId: "680",
    wardId: "25075",
    name: "Xã Lộc Quảng",
  },
  {
    districtId: "680",
    wardId: "25078",
    name: "Xã Lộc Tân",
  },
  {
    districtId: "680",
    wardId: "25081",
    name: "Xã Lộc Đức",
  },
  {
    districtId: "680",
    wardId: "25084",
    name: "Xã Lộc An",
  },
  {
    districtId: "680",
    wardId: "25087",
    name: "Xã Tân Lạc",
  },
  {
    districtId: "680",
    wardId: "25090",
    name: "Xã Lộc Thành",
  },
  {
    districtId: "680",
    wardId: "25093",
    name: "Xã Lộc Nam",
  },
  {
    districtId: "681",
    wardId: "25096",
    name: "Thị trấn Đạ M'ri",
  },
  {
    districtId: "681",
    wardId: "25099",
    name: "Thị trấn Ma Đa Guôi",
  },
  {
    districtId: "681",
    wardId: "25105",
    name: "Xã Hà Lâm",
  },
  {
    districtId: "681",
    wardId: "25108",
    name: "Xã Đạ Tồn",
  },
  {
    districtId: "681",
    wardId: "25111",
    name: "Xã Đạ Oai",
  },
  {
    districtId: "681",
    wardId: "25114",
    name: "Xã Đạ Ploa",
  },
  {
    districtId: "681",
    wardId: "25117",
    name: "Xã Ma Đa Guôi",
  },
  {
    districtId: "681",
    wardId: "25120",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "681",
    wardId: "25123",
    name: "Xã Phước Lộc",
  },
  {
    districtId: "682",
    wardId: "25126",
    name: "Thị trấn Đạ Tẻh",
  },
  {
    districtId: "682",
    wardId: "25129",
    name: "Xã An Nhơn",
  },
  {
    districtId: "682",
    wardId: "25132",
    name: "Xã Quốc Oai",
  },
  {
    districtId: "682",
    wardId: "25135",
    name: "Xã Mỹ Đức",
  },
  {
    districtId: "682",
    wardId: "25138",
    name: "Xã Quảng Trị",
  },
  {
    districtId: "682",
    wardId: "25141",
    name: "Xã Đạ Lây",
  },
  {
    districtId: "682",
    wardId: "25147",
    name: "Xã Triệu Hải",
  },
  {
    districtId: "682",
    wardId: "25153",
    name: "Xã Đạ Kho",
  },
  {
    districtId: "682",
    wardId: "25156",
    name: "Xã Đạ Pal",
  },
  {
    districtId: "683",
    wardId: "25159",
    name: "Thị trấn Cát Tiên",
  },
  {
    districtId: "683",
    wardId: "25162",
    name: "Xã Tiên Hoàng",
  },
  {
    districtId: "683",
    wardId: "25165",
    name: "Xã Phước Cát 2",
  },
  {
    districtId: "683",
    wardId: "25168",
    name: "Xã Gia Viễn",
  },
  {
    districtId: "683",
    wardId: "25171",
    name: "Xã Nam Ninh",
  },
  {
    districtId: "683",
    wardId: "25180",
    name: "Thị trấn Phước Cát ",
  },
  {
    districtId: "683",
    wardId: "25183",
    name: "Xã Đức Phổ",
  },
  {
    districtId: "683",
    wardId: "25189",
    name: "Xã Quảng Ngãi",
  },
  {
    districtId: "683",
    wardId: "25192",
    name: "Xã Đồng Nai Thượng",
  },
  {
    districtId: "688",
    wardId: "25216",
    name: "Phường Thác Mơ",
  },
  {
    districtId: "688",
    wardId: "25217",
    name: "Phường Long Thủy",
  },
  {
    districtId: "688",
    wardId: "25219",
    name: "Phường Phước Bình",
  },
  {
    districtId: "688",
    wardId: "25220",
    name: "Phường Long Phước",
  },
  {
    districtId: "688",
    wardId: "25237",
    name: "Phường Sơn Giang",
  },
  {
    districtId: "688",
    wardId: "25245",
    name: "Xã Long Giang",
  },
  {
    districtId: "688",
    wardId: "25249",
    name: "Xã Phước Tín",
  },
  {
    districtId: "689",
    wardId: "25195",
    name: "Phường Tân Phú",
  },
  {
    districtId: "689",
    wardId: "25198",
    name: "Phường Tân Đồng",
  },
  {
    districtId: "689",
    wardId: "25201",
    name: "Phường Tân Bình",
  },
  {
    districtId: "689",
    wardId: "25204",
    name: "Phường Tân Xuân",
  },
  {
    districtId: "689",
    wardId: "25205",
    name: "Phường Tân Thiện",
  },
  {
    districtId: "689",
    wardId: "25207",
    name: "Xã Tân Thành",
  },
  {
    districtId: "689",
    wardId: "25210",
    name: "Phường Tiến Thành",
  },
  {
    districtId: "689",
    wardId: "25213",
    name: "Xã Tiến Hưng",
  },
  {
    districtId: "690",
    wardId: "25320",
    name: "Phường Hưng Chiến",
  },
  {
    districtId: "690",
    wardId: "25324",
    name: "Phường An Lộc",
  },
  {
    districtId: "690",
    wardId: "25325",
    name: "Phường Phú Thịnh",
  },
  {
    districtId: "690",
    wardId: "25326",
    name: "Phường Phú Đức",
  },
  {
    districtId: "690",
    wardId: "25333",
    name: "Xã Thanh Lương",
  },
  {
    districtId: "690",
    wardId: "25336",
    name: "Xã Thanh Phú",
  },
  {
    districtId: "691",
    wardId: "25222",
    name: "Xã Bù Gia Mập",
  },
  {
    districtId: "691",
    wardId: "25225",
    name: "Xã Đak Ơ",
  },
  {
    districtId: "691",
    wardId: "25228",
    name: "Xã Đức Hạnh",
  },
  {
    districtId: "691",
    wardId: "25229",
    name: "Xã Phú Văn",
  },
  {
    districtId: "691",
    wardId: "25231",
    name: "Xã Đa Kia",
  },
  {
    districtId: "691",
    wardId: "25232",
    name: "Xã Phước Minh",
  },
  {
    districtId: "691",
    wardId: "25234",
    name: "Xã Bình Thắng",
  },
  {
    districtId: "691",
    wardId: "25267",
    name: "Xã Phú Nghĩa",
  },
  {
    districtId: "692",
    wardId: "25270",
    name: "Thị trấn Lộc Ninh",
  },
  {
    districtId: "692",
    wardId: "25273",
    name: "Xã Lộc Hòa",
  },
  {
    districtId: "692",
    wardId: "25276",
    name: "Xã Lộc An",
  },
  {
    districtId: "692",
    wardId: "25279",
    name: "Xã Lộc Tấn",
  },
  {
    districtId: "692",
    wardId: "25280",
    name: "Xã Lộc Thạnh",
  },
  {
    districtId: "692",
    wardId: "25282",
    name: "Xã Lộc Hiệp",
  },
  {
    districtId: "692",
    wardId: "25285",
    name: "Xã Lộc Thiện",
  },
  {
    districtId: "692",
    wardId: "25288",
    name: "Xã Lộc Thuận",
  },
  {
    districtId: "692",
    wardId: "25291",
    name: "Xã Lộc Quang",
  },
  {
    districtId: "692",
    wardId: "25292",
    name: "Xã Lộc Phú",
  },
  {
    districtId: "692",
    wardId: "25294",
    name: "Xã Lộc Thành",
  },
  {
    districtId: "692",
    wardId: "25297",
    name: "Xã Lộc Thái",
  },
  {
    districtId: "692",
    wardId: "25300",
    name: "Xã Lộc Điền",
  },
  {
    districtId: "692",
    wardId: "25303",
    name: "Xã Lộc Hưng",
  },
  {
    districtId: "692",
    wardId: "25305",
    name: "Xã Lộc Thịnh",
  },
  {
    districtId: "692",
    wardId: "25306",
    name: "Xã Lộc Khánh",
  },
  {
    districtId: "693",
    wardId: "25308",
    name: "Thị trấn Thanh Bình",
  },
  {
    districtId: "693",
    wardId: "25309",
    name: "Xã Hưng Phước",
  },
  {
    districtId: "693",
    wardId: "25310",
    name: "Xã Phước Thiện",
  },
  {
    districtId: "693",
    wardId: "25312",
    name: "Xã Thiện Hưng",
  },
  {
    districtId: "693",
    wardId: "25315",
    name: "Xã Thanh Hòa",
  },
  {
    districtId: "693",
    wardId: "25318",
    name: "Xã Tân Thành",
  },
  {
    districtId: "693",
    wardId: "25321",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "694",
    wardId: "25327",
    name: "Xã Thanh An",
  },
  {
    districtId: "694",
    wardId: "25330",
    name: "Xã An Khương",
  },
  {
    districtId: "694",
    wardId: "25339",
    name: "Xã An Phú",
  },
  {
    districtId: "694",
    wardId: "25342",
    name: "Xã Tân Lợi",
  },
  {
    districtId: "694",
    wardId: "25345",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "694",
    wardId: "25348",
    name: "Xã Minh Đức",
  },
  {
    districtId: "694",
    wardId: "25349",
    name: "Xã Minh Tâm",
  },
  {
    districtId: "694",
    wardId: "25351",
    name: "Xã Phước An",
  },
  {
    districtId: "694",
    wardId: "25354",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "694",
    wardId: "25357",
    name: "Thị trấn Tân Khai",
  },
  {
    districtId: "694",
    wardId: "25360",
    name: "Xã Đồng Nơ",
  },
  {
    districtId: "694",
    wardId: "25361",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "694",
    wardId: "25438",
    name: "Xã Tân Quan",
  },
  {
    districtId: "695",
    wardId: "25363",
    name: "Thị trấn Tân Phú",
  },
  {
    districtId: "695",
    wardId: "25366",
    name: "Xã Thuận Lợi",
  },
  {
    districtId: "695",
    wardId: "25369",
    name: "Xã Đồng Tâm",
  },
  {
    districtId: "695",
    wardId: "25372",
    name: "Xã Tân Phước",
  },
  {
    districtId: "695",
    wardId: "25375",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "695",
    wardId: "25378",
    name: "Xã Tân Lợi",
  },
  {
    districtId: "695",
    wardId: "25381",
    name: "Xã Tân Lập",
  },
  {
    districtId: "695",
    wardId: "25384",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "695",
    wardId: "25387",
    name: "Xã Thuận Phú",
  },
  {
    districtId: "695",
    wardId: "25390",
    name: "Xã Đồng Tiến",
  },
  {
    districtId: "695",
    wardId: "25393",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "696",
    wardId: "25396",
    name: "Thị trấn Đức Phong",
  },
  {
    districtId: "696",
    wardId: "25398",
    name: "Xã Đường 10",
  },
  {
    districtId: "696",
    wardId: "25399",
    name: "Xã Đak Nhau",
  },
  {
    districtId: "696",
    wardId: "25400",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "696",
    wardId: "25402",
    name: "Xã Thọ Sơn",
  },
  {
    districtId: "696",
    wardId: "25404",
    name: "Xã Bình Minh",
  },
  {
    districtId: "696",
    wardId: "25405",
    name: "Xã Bom Bo",
  },
  {
    districtId: "696",
    wardId: "25408",
    name: "Xã Minh Hưng",
  },
  {
    districtId: "696",
    wardId: "25411",
    name: "Xã Đoàn Kết",
  },
  {
    districtId: "696",
    wardId: "25414",
    name: "Xã Đồng Nai",
  },
  {
    districtId: "696",
    wardId: "25417",
    name: "Xã Đức Liễu",
  },
  {
    districtId: "696",
    wardId: "25420",
    name: "Xã Thống Nhất",
  },
  {
    districtId: "696",
    wardId: "25423",
    name: "Xã Nghĩa Trung",
  },
  {
    districtId: "696",
    wardId: "25424",
    name: "Xã Nghĩa Bình",
  },
  {
    districtId: "696",
    wardId: "25426",
    name: "Xã Đăng Hà",
  },
  {
    districtId: "696",
    wardId: "25429",
    name: "Xã Phước Sơn",
  },
  {
    districtId: "697",
    wardId: "25432",
    name: "Thị trấn Chơn Thành",
  },
  {
    districtId: "697",
    wardId: "25433",
    name: "Xã Thành Tâm",
  },
  {
    districtId: "697",
    wardId: "25435",
    name: "Xã Minh Lập",
  },
  {
    districtId: "697",
    wardId: "25439",
    name: "Xã Quang Minh",
  },
  {
    districtId: "697",
    wardId: "25441",
    name: "Xã Minh Hưng",
  },
  {
    districtId: "697",
    wardId: "25444",
    name: "Xã Minh Long",
  },
  {
    districtId: "697",
    wardId: "25447",
    name: "Xã Minh Thành",
  },
  {
    districtId: "697",
    wardId: "25450",
    name: "Xã Nha Bích",
  },
  {
    districtId: "697",
    wardId: "25453",
    name: "Xã Minh Thắng",
  },
  {
    districtId: "698",
    wardId: "25240",
    name: "Xã Long Bình",
  },
  {
    districtId: "698",
    wardId: "25243",
    name: "Xã Bình Tân",
  },
  {
    districtId: "698",
    wardId: "25244",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "698",
    wardId: "25246",
    name: "Xã Long Hưng",
  },
  {
    districtId: "698",
    wardId: "25250",
    name: "Xã Phước Tân",
  },
  {
    districtId: "698",
    wardId: "25252",
    name: "Xã Bù Nho",
  },
  {
    districtId: "698",
    wardId: "25255",
    name: "Xã Long Hà",
  },
  {
    districtId: "698",
    wardId: "25258",
    name: "Xã Long Tân",
  },
  {
    districtId: "698",
    wardId: "25261",
    name: "Xã Phú Trung",
  },
  {
    districtId: "698",
    wardId: "25264",
    name: "Xã Phú Riềng",
  },
  {
    districtId: "703",
    wardId: "25456",
    name: "Phường 1",
  },
  {
    districtId: "703",
    wardId: "25459",
    name: "Phường 3",
  },
  {
    districtId: "703",
    wardId: "25462",
    name: "Phường 4",
  },
  {
    districtId: "703",
    wardId: "25465",
    name: "Phường Hiệp Ninh",
  },
  {
    districtId: "703",
    wardId: "25468",
    name: "Phường 2",
  },
  {
    districtId: "703",
    wardId: "25471",
    name: "Xã Thạnh Tân",
  },
  {
    districtId: "703",
    wardId: "25474",
    name: "Xã Tân Bình",
  },
  {
    districtId: "703",
    wardId: "25477",
    name: "Xã Bình Minh",
  },
  {
    districtId: "703",
    wardId: "25480",
    name: "Phường Ninh Sơn",
  },
  {
    districtId: "703",
    wardId: "25483",
    name: "Phường Ninh Thạnh",
  },
  {
    districtId: "705",
    wardId: "25486",
    name: "Thị trấn Tân Biên",
  },
  {
    districtId: "705",
    wardId: "25489",
    name: "Xã Tân Lập",
  },
  {
    districtId: "705",
    wardId: "25492",
    name: "Xã Thạnh Bắc",
  },
  {
    districtId: "705",
    wardId: "25495",
    name: "Xã Tân Bình",
  },
  {
    districtId: "705",
    wardId: "25498",
    name: "Xã Thạnh Bình",
  },
  {
    districtId: "705",
    wardId: "25501",
    name: "Xã Thạnh Tây",
  },
  {
    districtId: "705",
    wardId: "25504",
    name: "Xã Hòa Hiệp",
  },
  {
    districtId: "705",
    wardId: "25507",
    name: "Xã Tân Phong",
  },
  {
    districtId: "705",
    wardId: "25510",
    name: "Xã Mỏ Công",
  },
  {
    districtId: "705",
    wardId: "25513",
    name: "Xã Trà Vong",
  },
  {
    districtId: "706",
    wardId: "25516",
    name: "Thị trấn Tân Châu",
  },
  {
    districtId: "706",
    wardId: "25519",
    name: "Xã Tân Hà",
  },
  {
    districtId: "706",
    wardId: "25522",
    name: "Xã Tân Đông",
  },
  {
    districtId: "706",
    wardId: "25525",
    name: "Xã Tân Hội",
  },
  {
    districtId: "706",
    wardId: "25528",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "706",
    wardId: "25531",
    name: "Xã Suối Ngô",
  },
  {
    districtId: "706",
    wardId: "25534",
    name: "Xã Suối Dây",
  },
  {
    districtId: "706",
    wardId: "25537",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "706",
    wardId: "25540",
    name: "Xã Thạnh Đông",
  },
  {
    districtId: "706",
    wardId: "25543",
    name: "Xã Tân Thành",
  },
  {
    districtId: "706",
    wardId: "25546",
    name: "Xã Tân Phú",
  },
  {
    districtId: "706",
    wardId: "25549",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "707",
    wardId: "25552",
    name: "Thị trấn Dương Minh Châu",
  },
  {
    districtId: "707",
    wardId: "25555",
    name: "Xã Suối Đá",
  },
  {
    districtId: "707",
    wardId: "25558",
    name: "Xã Phan",
  },
  {
    districtId: "707",
    wardId: "25561",
    name: "Xã Phước Ninh",
  },
  {
    districtId: "707",
    wardId: "25564",
    name: "Xã Phước Minh",
  },
  {
    districtId: "707",
    wardId: "25567",
    name: "Xã Bàu Năng",
  },
  {
    districtId: "707",
    wardId: "25570",
    name: "Xã Chà Là",
  },
  {
    districtId: "707",
    wardId: "25573",
    name: "Xã Cầu Khởi",
  },
  {
    districtId: "707",
    wardId: "25576",
    name: "Xã Bến Củi",
  },
  {
    districtId: "707",
    wardId: "25579",
    name: "Xã Lộc Ninh",
  },
  {
    districtId: "707",
    wardId: "25582",
    name: "Xã Truông Mít",
  },
  {
    districtId: "708",
    wardId: "25585",
    name: "Thị trấn Châu Thành",
  },
  {
    districtId: "708",
    wardId: "25588",
    name: "Xã Hảo Đước",
  },
  {
    districtId: "708",
    wardId: "25591",
    name: "Xã Phước Vinh",
  },
  {
    districtId: "708",
    wardId: "25594",
    name: "Xã Đồng Khởi",
  },
  {
    districtId: "708",
    wardId: "25597",
    name: "Xã Thái Bình",
  },
  {
    districtId: "708",
    wardId: "25600",
    name: "Xã An Cơ",
  },
  {
    districtId: "708",
    wardId: "25603",
    name: "Xã Biên Giới",
  },
  {
    districtId: "708",
    wardId: "25606",
    name: "Xã Hòa Thạnh",
  },
  {
    districtId: "708",
    wardId: "25609",
    name: "Xã Trí Bình",
  },
  {
    districtId: "708",
    wardId: "25612",
    name: "Xã Hòa Hội",
  },
  {
    districtId: "708",
    wardId: "25615",
    name: "Xã An Bình",
  },
  {
    districtId: "708",
    wardId: "25618",
    name: "Xã Thanh Điền",
  },
  {
    districtId: "708",
    wardId: "25621",
    name: "Xã Thành Long",
  },
  {
    districtId: "708",
    wardId: "25624",
    name: "Xã Ninh Điền",
  },
  {
    districtId: "708",
    wardId: "25627",
    name: "Xã Long Vĩnh",
  },
  {
    districtId: "709",
    wardId: "25630",
    name: "Phường Long Hoa",
  },
  {
    districtId: "709",
    wardId: "25633",
    name: "Phường Hiệp Tân",
  },
  {
    districtId: "709",
    wardId: "25636",
    name: "Phường Long Thành Bắc",
  },
  {
    districtId: "709",
    wardId: "25639",
    name: "Xã Trường Hòa",
  },
  {
    districtId: "709",
    wardId: "25642",
    name: "Xã Trường Đông",
  },
  {
    districtId: "709",
    wardId: "25645",
    name: "Phường Long Thành Trung",
  },
  {
    districtId: "709",
    wardId: "25648",
    name: "Xã Trường Tây",
  },
  {
    districtId: "709",
    wardId: "25651",
    name: "Xã Long Thành Nam",
  },
  {
    districtId: "710",
    wardId: "25654",
    name: "Thị trấn Gò Dầu",
  },
  {
    districtId: "710",
    wardId: "25657",
    name: "Xã Thạnh Đức",
  },
  {
    districtId: "710",
    wardId: "25660",
    name: "Xã Cẩm Giang",
  },
  {
    districtId: "710",
    wardId: "25663",
    name: "Xã Hiệp Thạnh",
  },
  {
    districtId: "710",
    wardId: "25666",
    name: "Xã Bàu Đồn",
  },
  {
    districtId: "710",
    wardId: "25669",
    name: "Xã Phước Thạnh",
  },
  {
    districtId: "710",
    wardId: "25672",
    name: "Xã Phước Đông",
  },
  {
    districtId: "710",
    wardId: "25675",
    name: "Xã Phước Trạch",
  },
  {
    districtId: "710",
    wardId: "25678",
    name: "Xã Thanh Phước",
  },
  {
    districtId: "711",
    wardId: "25681",
    name: "Thị trấn Bến Cầu",
  },
  {
    districtId: "711",
    wardId: "25684",
    name: "Xã Long Chữ",
  },
  {
    districtId: "711",
    wardId: "25687",
    name: "Xã Long Phước",
  },
  {
    districtId: "711",
    wardId: "25690",
    name: "Xã Long Giang",
  },
  {
    districtId: "711",
    wardId: "25693",
    name: "Xã Tiên Thuận",
  },
  {
    districtId: "711",
    wardId: "25696",
    name: "Xã Long Khánh",
  },
  {
    districtId: "711",
    wardId: "25699",
    name: "Xã Lợi Thuận",
  },
  {
    districtId: "711",
    wardId: "25702",
    name: "Xã Long Thuận",
  },
  {
    districtId: "711",
    wardId: "25705",
    name: "Xã An Thạnh",
  },
  {
    districtId: "712",
    wardId: "25708",
    name: "Phường Trảng Bàng",
  },
  {
    districtId: "712",
    wardId: "25711",
    name: "Xã Đôn Thuận",
  },
  {
    districtId: "712",
    wardId: "25714",
    name: "Xã Hưng Thuận",
  },
  {
    districtId: "712",
    wardId: "25717",
    name: "Phường Lộc Hưng",
  },
  {
    districtId: "712",
    wardId: "25720",
    name: "Phường Gia Lộc",
  },
  {
    districtId: "712",
    wardId: "25723",
    name: "Phường Gia Bình",
  },
  {
    districtId: "712",
    wardId: "25729",
    name: "Xã Phước Bình",
  },
  {
    districtId: "712",
    wardId: "25732",
    name: "Phường An Tịnh",
  },
  {
    districtId: "712",
    wardId: "25735",
    name: "Phường An Hòa",
  },
  {
    districtId: "712",
    wardId: "25738",
    name: "Xã Phước Chỉ",
  },
  {
    districtId: "718",
    wardId: "25741",
    name: "Phường Hiệp Thành",
  },
  {
    districtId: "718",
    wardId: "25744",
    name: "Phường Phú Lợi",
  },
  {
    districtId: "718",
    wardId: "25747",
    name: "Phường Phú Cường",
  },
  {
    districtId: "718",
    wardId: "25750",
    name: "Phường Phú Hòa",
  },
  {
    districtId: "718",
    wardId: "25753",
    name: "Phường Phú Thọ",
  },
  {
    districtId: "718",
    wardId: "25756",
    name: "Phường Chánh Nghĩa",
  },
  {
    districtId: "718",
    wardId: "25759",
    name: "Phường Định Hoà",
  },
  {
    districtId: "718",
    wardId: "25760",
    name: "Phường Hoà Phú",
  },
  {
    districtId: "718",
    wardId: "25762",
    name: "Phường Phú Mỹ",
  },
  {
    districtId: "718",
    wardId: "25763",
    name: "Phường Phú Tân",
  },
  {
    districtId: "718",
    wardId: "25765",
    name: "Phường Tân An",
  },
  {
    districtId: "718",
    wardId: "25768",
    name: "Phường Hiệp An",
  },
  {
    districtId: "718",
    wardId: "25771",
    name: "Phường Tương Bình Hiệp",
  },
  {
    districtId: "718",
    wardId: "25774",
    name: "Phường Chánh Mỹ",
  },
  {
    districtId: "719",
    wardId: "25816",
    name: "Xã Trừ Văn Thố",
  },
  {
    districtId: "719",
    wardId: "25819",
    name: "Xã Cây Trường II",
  },
  {
    districtId: "719",
    wardId: "25822",
    name: "Thị trấn Lai Uyên",
  },
  {
    districtId: "719",
    wardId: "25825",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "719",
    wardId: "25828",
    name: "Xã Long Nguyên",
  },
  {
    districtId: "719",
    wardId: "25831",
    name: "Xã Hưng Hòa",
  },
  {
    districtId: "719",
    wardId: "25834",
    name: "Xã Lai Hưng",
  },
  {
    districtId: "720",
    wardId: "25777",
    name: "Thị trấn Dầu Tiếng",
  },
  {
    districtId: "720",
    wardId: "25780",
    name: "Xã Minh Hoà",
  },
  {
    districtId: "720",
    wardId: "25783",
    name: "Xã Minh Thạnh",
  },
  {
    districtId: "720",
    wardId: "25786",
    name: "Xã Minh Tân",
  },
  {
    districtId: "720",
    wardId: "25789",
    name: "Xã Định An",
  },
  {
    districtId: "720",
    wardId: "25792",
    name: "Xã Long Hoà",
  },
  {
    districtId: "720",
    wardId: "25795",
    name: "Xã Định Thành",
  },
  {
    districtId: "720",
    wardId: "25798",
    name: "Xã Định Hiệp",
  },
  {
    districtId: "720",
    wardId: "25801",
    name: "Xã An Lập",
  },
  {
    districtId: "720",
    wardId: "25804",
    name: "Xã Long Tân",
  },
  {
    districtId: "720",
    wardId: "25807",
    name: "Xã Thanh An",
  },
  {
    districtId: "720",
    wardId: "25810",
    name: "Xã Thanh Tuyền",
  },
  {
    districtId: "721",
    wardId: "25813",
    name: "Phường Mỹ Phước",
  },
  {
    districtId: "721",
    wardId: "25837",
    name: "Phường Chánh Phú Hòa",
  },
  {
    districtId: "721",
    wardId: "25840",
    name: "Xã An Điền",
  },
  {
    districtId: "721",
    wardId: "25843",
    name: "Xã An Tây",
  },
  {
    districtId: "721",
    wardId: "25846",
    name: "Phường Thới Hòa",
  },
  {
    districtId: "721",
    wardId: "25849",
    name: "Phường Hòa Lợi",
  },
  {
    districtId: "721",
    wardId: "25852",
    name: "Phường Tân Định",
  },
  {
    districtId: "721",
    wardId: "25855",
    name: "Xã Phú An",
  },
  {
    districtId: "722",
    wardId: "25858",
    name: "Thị trấn Phước Vĩnh",
  },
  {
    districtId: "722",
    wardId: "25861",
    name: "Xã An Linh",
  },
  {
    districtId: "722",
    wardId: "25864",
    name: "Xã Phước Sang",
  },
  {
    districtId: "722",
    wardId: "25865",
    name: "Xã An Thái",
  },
  {
    districtId: "722",
    wardId: "25867",
    name: "Xã An Long",
  },
  {
    districtId: "722",
    wardId: "25870",
    name: "Xã An Bình",
  },
  {
    districtId: "722",
    wardId: "25873",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "722",
    wardId: "25876",
    name: "Xã Tam Lập",
  },
  {
    districtId: "722",
    wardId: "25879",
    name: "Xã Tân Long",
  },
  {
    districtId: "722",
    wardId: "25882",
    name: "Xã Vĩnh Hoà",
  },
  {
    districtId: "722",
    wardId: "25885",
    name: "Xã Phước Hoà",
  },
  {
    districtId: "723",
    wardId: "25888",
    name: "Phường Uyên Hưng",
  },
  {
    districtId: "723",
    wardId: "25891",
    name: "Phường Tân Phước Khánh",
  },
  {
    districtId: "723",
    wardId: "25912",
    name: "Phường Vĩnh Tân",
  },
  {
    districtId: "723",
    wardId: "25915",
    name: "Phường Hội Nghĩa",
  },
  {
    districtId: "723",
    wardId: "25920",
    name: "Phường Tân Hiệp",
  },
  {
    districtId: "723",
    wardId: "25921",
    name: "Phường Khánh Bình",
  },
  {
    districtId: "723",
    wardId: "25924",
    name: "Phường Phú Chánh",
  },
  {
    districtId: "723",
    wardId: "25930",
    name: "Xã Bạch Đằng",
  },
  {
    districtId: "723",
    wardId: "25933",
    name: "Phường Tân Vĩnh Hiệp",
  },
  {
    districtId: "723",
    wardId: "25936",
    name: "Phường Thạnh Phước",
  },
  {
    districtId: "723",
    wardId: "25937",
    name: "Xã Thạnh Hội",
  },
  {
    districtId: "723",
    wardId: "25939",
    name: "Phường Thái Hòa",
  },
  {
    districtId: "724",
    wardId: "25942",
    name: "Phường Dĩ An",
  },
  {
    districtId: "724",
    wardId: "25945",
    name: "Phường Tân Bình",
  },
  {
    districtId: "724",
    wardId: "25948",
    name: "Phường Tân Đông Hiệp",
  },
  {
    districtId: "724",
    wardId: "25951",
    name: "Phường Bình An",
  },
  {
    districtId: "724",
    wardId: "25954",
    name: "Phường Bình Thắng",
  },
  {
    districtId: "724",
    wardId: "25957",
    name: "Phường Đông Hòa",
  },
  {
    districtId: "724",
    wardId: "25960",
    name: "Phường An Bình",
  },
  {
    districtId: "725",
    wardId: "25963",
    name: "Phường An Thạnh",
  },
  {
    districtId: "725",
    wardId: "25966",
    name: "Phường Lái Thiêu",
  },
  {
    districtId: "725",
    wardId: "25969",
    name: "Phường Bình Chuẩn",
  },
  {
    districtId: "725",
    wardId: "25972",
    name: "Phường Thuận Giao",
  },
  {
    districtId: "725",
    wardId: "25975",
    name: "Phường An Phú",
  },
  {
    districtId: "725",
    wardId: "25978",
    name: "Phường Hưng Định",
  },
  {
    districtId: "725",
    wardId: "25981",
    name: "Xã An Sơn",
  },
  {
    districtId: "725",
    wardId: "25984",
    name: "Phường Bình Nhâm",
  },
  {
    districtId: "725",
    wardId: "25987",
    name: "Phường Bình Hòa",
  },
  {
    districtId: "725",
    wardId: "25990",
    name: "Phường Vĩnh Phú",
  },
  {
    districtId: "726",
    wardId: "25894",
    name: "Xã Tân Định",
  },
  {
    districtId: "726",
    wardId: "25897",
    name: "Xã Bình Mỹ",
  },
  {
    districtId: "726",
    wardId: "25900",
    name: "Thị trấn Tân Bình",
  },
  {
    districtId: "726",
    wardId: "25903",
    name: "Xã Tân Lập",
  },
  {
    districtId: "726",
    wardId: "25906",
    name: "Thị trấn Tân Thành",
  },
  {
    districtId: "726",
    wardId: "25907",
    name: "Xã Đất Cuốc",
  },
  {
    districtId: "726",
    wardId: "25908",
    name: "Xã Hiếu Liêm",
  },
  {
    districtId: "726",
    wardId: "25909",
    name: "Xã Lạc An",
  },
  {
    districtId: "726",
    wardId: "25918",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "726",
    wardId: "25927",
    name: "Xã Thường Tân",
  },
  {
    districtId: "731",
    wardId: "25993",
    name: "Phường Trảng Dài",
  },
  {
    districtId: "731",
    wardId: "25996",
    name: "Phường Tân Phong",
  },
  {
    districtId: "731",
    wardId: "25999",
    name: "Phường Tân Biên",
  },
  {
    districtId: "731",
    wardId: "26002",
    name: "Phường Hố Nai",
  },
  {
    districtId: "731",
    wardId: "26005",
    name: "Phường Tân Hòa",
  },
  {
    districtId: "731",
    wardId: "26008",
    name: "Phường Tân Hiệp",
  },
  {
    districtId: "731",
    wardId: "26011",
    name: "Phường Bửu Long",
  },
  {
    districtId: "731",
    wardId: "26014",
    name: "Phường Tân Tiến",
  },
  {
    districtId: "731",
    wardId: "26017",
    name: "Phường Tam Hiệp",
  },
  {
    districtId: "731",
    wardId: "26020",
    name: "Phường Long Bình",
  },
  {
    districtId: "731",
    wardId: "26023",
    name: "Phường Quang Vinh",
  },
  {
    districtId: "731",
    wardId: "26026",
    name: "Phường Tân Mai",
  },
  {
    districtId: "731",
    wardId: "26029",
    name: "Phường Thống Nhất",
  },
  {
    districtId: "731",
    wardId: "26032",
    name: "Phường Trung Dũng",
  },
  {
    districtId: "731",
    wardId: "26035",
    name: "Phường Tam Hòa",
  },
  {
    districtId: "731",
    wardId: "26038",
    name: "Phường Hòa Bình",
  },
  {
    districtId: "731",
    wardId: "26041",
    name: "Phường Quyết Thắng",
  },
  {
    districtId: "731",
    wardId: "26044",
    name: "Phường Thanh Bình",
  },
  {
    districtId: "731",
    wardId: "26047",
    name: "Phường Bình Đa",
  },
  {
    districtId: "731",
    wardId: "26050",
    name: "Phường An Bình",
  },
  {
    districtId: "731",
    wardId: "26053",
    name: "Phường Bửu Hòa",
  },
  {
    districtId: "731",
    wardId: "26056",
    name: "Phường Long Bình Tân",
  },
  {
    districtId: "731",
    wardId: "26059",
    name: "Phường Tân Vạn",
  },
  {
    districtId: "731",
    wardId: "26062",
    name: "Phường Tân Hạnh",
  },
  {
    districtId: "731",
    wardId: "26065",
    name: "Phường Hiệp Hòa",
  },
  {
    districtId: "731",
    wardId: "26068",
    name: "Phường Hóa An",
  },
  {
    districtId: "731",
    wardId: "26371",
    name: "Phường An Hòa",
  },
  {
    districtId: "731",
    wardId: "26374",
    name: "Phường Tam Phước",
  },
  {
    districtId: "731",
    wardId: "26377",
    name: "Phường Phước Tân",
  },
  {
    districtId: "731",
    wardId: "26380",
    name: "Xã Long Hưng",
  },
  {
    districtId: "732",
    wardId: "26071",
    name: "Phường Xuân Trung",
  },
  {
    districtId: "732",
    wardId: "26074",
    name: "Phường Xuân Thanh",
  },
  {
    districtId: "732",
    wardId: "26077",
    name: "Phường Xuân Bình",
  },
  {
    districtId: "732",
    wardId: "26080",
    name: "Phường Xuân An",
  },
  {
    districtId: "732",
    wardId: "26083",
    name: "Phường Xuân Hoà",
  },
  {
    districtId: "732",
    wardId: "26086",
    name: "Phường Phú Bình",
  },
  {
    districtId: "732",
    wardId: "26089",
    name: "Xã Bình Lộc",
  },
  {
    districtId: "732",
    wardId: "26092",
    name: "Xã Bảo Quang",
  },
  {
    districtId: "732",
    wardId: "26095",
    name: "Phường Suối Tre",
  },
  {
    districtId: "732",
    wardId: "26098",
    name: "Phường Bảo Vinh",
  },
  {
    districtId: "732",
    wardId: "26101",
    name: "Phường Xuân Lập",
  },
  {
    districtId: "732",
    wardId: "26104",
    name: "Phường Bàu Sen",
  },
  {
    districtId: "732",
    wardId: "26107",
    name: "Xã Bàu Trâm",
  },
  {
    districtId: "732",
    wardId: "26110",
    name: "Phường Xuân Tân",
  },
  {
    districtId: "732",
    wardId: "26113",
    name: "Xã Hàng Gòn",
  },
  {
    districtId: "734",
    wardId: "26116",
    name: "Thị trấn Tân Phú",
  },
  {
    districtId: "734",
    wardId: "26119",
    name: "Xã Dak Lua",
  },
  {
    districtId: "734",
    wardId: "26122",
    name: "Xã Nam Cát Tiên",
  },
  {
    districtId: "734",
    wardId: "26125",
    name: "Xã Phú An",
  },
  {
    districtId: "734",
    wardId: "26128",
    name: "Xã Núi Tượng",
  },
  {
    districtId: "734",
    wardId: "26131",
    name: "Xã Tà Lài",
  },
  {
    districtId: "734",
    wardId: "26134",
    name: "Xã Phú Lập",
  },
  {
    districtId: "734",
    wardId: "26137",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "734",
    wardId: "26140",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "734",
    wardId: "26143",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "734",
    wardId: "26146",
    name: "Xã Phú Trung",
  },
  {
    districtId: "734",
    wardId: "26149",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "734",
    wardId: "26152",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "734",
    wardId: "26155",
    name: "Xã Phú Lâm",
  },
  {
    districtId: "734",
    wardId: "26158",
    name: "Xã Phú Bình",
  },
  {
    districtId: "734",
    wardId: "26161",
    name: "Xã Phú Thanh",
  },
  {
    districtId: "734",
    wardId: "26164",
    name: "Xã Trà Cổ",
  },
  {
    districtId: "734",
    wardId: "26167",
    name: "Xã Phú Điền",
  },
  {
    districtId: "735",
    wardId: "26170",
    name: "Thị trấn Vĩnh An",
  },
  {
    districtId: "735",
    wardId: "26173",
    name: "Xã Phú Lý",
  },
  {
    districtId: "735",
    wardId: "26176",
    name: "Xã Trị An",
  },
  {
    districtId: "735",
    wardId: "26179",
    name: "Xã Tân An",
  },
  {
    districtId: "735",
    wardId: "26182",
    name: "Xã Vĩnh Tân",
  },
  {
    districtId: "735",
    wardId: "26185",
    name: "Xã Bình Lợi",
  },
  {
    districtId: "735",
    wardId: "26188",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "735",
    wardId: "26191",
    name: "Xã Thiện Tân",
  },
  {
    districtId: "735",
    wardId: "26194",
    name: "Xã Tân Bình",
  },
  {
    districtId: "735",
    wardId: "26197",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "735",
    wardId: "26200",
    name: "Xã Mã Đà",
  },
  {
    districtId: "735",
    wardId: "26203",
    name: "Xã Hiếu Liêm",
  },
  {
    districtId: "736",
    wardId: "26206",
    name: "Thị trấn Định Quán",
  },
  {
    districtId: "736",
    wardId: "26209",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "736",
    wardId: "26212",
    name: "Xã Phú Tân",
  },
  {
    districtId: "736",
    wardId: "26215",
    name: "Xã Phú Vinh",
  },
  {
    districtId: "736",
    wardId: "26218",
    name: "Xã Phú Lợi",
  },
  {
    districtId: "736",
    wardId: "26221",
    name: "Xã Phú Hòa",
  },
  {
    districtId: "736",
    wardId: "26224",
    name: "Xã Ngọc Định",
  },
  {
    districtId: "736",
    wardId: "26227",
    name: "Xã La Ngà",
  },
  {
    districtId: "736",
    wardId: "26230",
    name: "Xã Gia Canh",
  },
  {
    districtId: "736",
    wardId: "26233",
    name: "Xã Phú Ngọc",
  },
  {
    districtId: "736",
    wardId: "26236",
    name: "Xã Phú Cường",
  },
  {
    districtId: "736",
    wardId: "26239",
    name: "Xã Túc Trưng",
  },
  {
    districtId: "736",
    wardId: "26242",
    name: "Xã Phú Túc",
  },
  {
    districtId: "736",
    wardId: "26245",
    name: "Xã Suối Nho",
  },
  {
    districtId: "737",
    wardId: "26248",
    name: "Thị trấn Trảng Bom",
  },
  {
    districtId: "737",
    wardId: "26251",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "737",
    wardId: "26254",
    name: "Xã Cây Gáo",
  },
  {
    districtId: "737",
    wardId: "26257",
    name: "Xã Bàu Hàm",
  },
  {
    districtId: "737",
    wardId: "26260",
    name: "Xã Sông Thao",
  },
  {
    districtId: "737",
    wardId: "26263",
    name: "Xã Sông Trầu",
  },
  {
    districtId: "737",
    wardId: "26266",
    name: "Xã Đông Hoà",
  },
  {
    districtId: "737",
    wardId: "26269",
    name: "Xã Bắc Sơn",
  },
  {
    districtId: "737",
    wardId: "26272",
    name: "Xã Hố Nai 3",
  },
  {
    districtId: "737",
    wardId: "26275",
    name: "Xã Tây Hoà",
  },
  {
    districtId: "737",
    wardId: "26278",
    name: "Xã Bình Minh",
  },
  {
    districtId: "737",
    wardId: "26281",
    name: "Xã Trung Hoà",
  },
  {
    districtId: "737",
    wardId: "26284",
    name: "Xã Đồi 61",
  },
  {
    districtId: "737",
    wardId: "26287",
    name: "Xã Hưng Thịnh",
  },
  {
    districtId: "737",
    wardId: "26290",
    name: "Xã Quảng Tiến",
  },
  {
    districtId: "737",
    wardId: "26293",
    name: "Xã Giang Điền",
  },
  {
    districtId: "737",
    wardId: "26296",
    name: "Xã An Viễn",
  },
  {
    districtId: "738",
    wardId: "26299",
    name: "Xã Gia Tân 1",
  },
  {
    districtId: "738",
    wardId: "26302",
    name: "Xã Gia Tân 2",
  },
  {
    districtId: "738",
    wardId: "26305",
    name: "Xã Gia Tân 3",
  },
  {
    districtId: "738",
    wardId: "26308",
    name: "Xã Gia Kiệm",
  },
  {
    districtId: "738",
    wardId: "26311",
    name: "Xã Quang Trung",
  },
  {
    districtId: "738",
    wardId: "26314",
    name: "Xã Bàu Hàm 2",
  },
  {
    districtId: "738",
    wardId: "26317",
    name: "Xã Hưng Lộc",
  },
  {
    districtId: "738",
    wardId: "26320",
    name: "Xã Lộ 25",
  },
  {
    districtId: "738",
    wardId: "26323",
    name: "Xã Xuân Thiện",
  },
  {
    districtId: "738",
    wardId: "26326",
    name: "Thị trấn Dầu Giây",
  },
  {
    districtId: "739",
    wardId: "26329",
    name: "Xã Sông Nhạn",
  },
  {
    districtId: "739",
    wardId: "26332",
    name: "Xã Xuân Quế",
  },
  {
    districtId: "739",
    wardId: "26335",
    name: "Xã Nhân Nghĩa",
  },
  {
    districtId: "739",
    wardId: "26338",
    name: "Xã Xuân Đường",
  },
  {
    districtId: "739",
    wardId: "26341",
    name: "Thị trấn Long Giao",
  },
  {
    districtId: "739",
    wardId: "26344",
    name: "Xã Xuân Mỹ",
  },
  {
    districtId: "739",
    wardId: "26347",
    name: "Xã Thừa Đức",
  },
  {
    districtId: "739",
    wardId: "26350",
    name: "Xã Bảo Bình",
  },
  {
    districtId: "739",
    wardId: "26353",
    name: "Xã Xuân Bảo",
  },
  {
    districtId: "739",
    wardId: "26356",
    name: "Xã Xuân Tây",
  },
  {
    districtId: "739",
    wardId: "26359",
    name: "Xã Xuân Đông",
  },
  {
    districtId: "739",
    wardId: "26362",
    name: "Xã Sông Ray",
  },
  {
    districtId: "739",
    wardId: "26365",
    name: "Xã Lâm San",
  },
  {
    districtId: "740",
    wardId: "26368",
    name: "Thị trấn Long Thành",
  },
  {
    districtId: "740",
    wardId: "26383",
    name: "Xã An Phước",
  },
  {
    districtId: "740",
    wardId: "26386",
    name: "Xã Bình An",
  },
  {
    districtId: "740",
    wardId: "26389",
    name: "Xã Long Đức",
  },
  {
    districtId: "740",
    wardId: "26392",
    name: "Xã Lộc An",
  },
  {
    districtId: "740",
    wardId: "26395",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "740",
    wardId: "26398",
    name: "Xã Tam An",
  },
  {
    districtId: "740",
    wardId: "26401",
    name: "Xã Cẩm Đường",
  },
  {
    districtId: "740",
    wardId: "26404",
    name: "Xã Long An",
  },
  {
    districtId: "740",
    wardId: "26410",
    name: "Xã Bàu Cạn",
  },
  {
    districtId: "740",
    wardId: "26413",
    name: "Xã Long Phước",
  },
  {
    districtId: "740",
    wardId: "26416",
    name: "Xã Phước Bình",
  },
  {
    districtId: "740",
    wardId: "26419",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "740",
    wardId: "26422",
    name: "Xã Phước Thái",
  },
  {
    districtId: "741",
    wardId: "26425",
    name: "Thị trấn Gia Ray",
  },
  {
    districtId: "741",
    wardId: "26428",
    name: "Xã Xuân Bắc",
  },
  {
    districtId: "741",
    wardId: "26431",
    name: "Xã Suối Cao",
  },
  {
    districtId: "741",
    wardId: "26434",
    name: "Xã Xuân Thành",
  },
  {
    districtId: "741",
    wardId: "26437",
    name: "Xã Xuân Thọ",
  },
  {
    districtId: "741",
    wardId: "26440",
    name: "Xã Xuân Trường",
  },
  {
    districtId: "741",
    wardId: "26443",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "741",
    wardId: "26446",
    name: "Xã Xuân Hưng",
  },
  {
    districtId: "741",
    wardId: "26449",
    name: "Xã Xuân Tâm",
  },
  {
    districtId: "741",
    wardId: "26452",
    name: "Xã Suối Cát",
  },
  {
    districtId: "741",
    wardId: "26455",
    name: "Xã Xuân Hiệp",
  },
  {
    districtId: "741",
    wardId: "26458",
    name: "Xã Xuân Phú",
  },
  {
    districtId: "741",
    wardId: "26461",
    name: "Xã Xuân Định",
  },
  {
    districtId: "741",
    wardId: "26464",
    name: "Xã Bảo Hoà",
  },
  {
    districtId: "741",
    wardId: "26467",
    name: "Xã Lang Minh",
  },
  {
    districtId: "742",
    wardId: "26470",
    name: "Xã Phước Thiền",
  },
  {
    districtId: "742",
    wardId: "26473",
    name: "Xã Long Tân",
  },
  {
    districtId: "742",
    wardId: "26476",
    name: "Xã Đại Phước",
  },
  {
    districtId: "742",
    wardId: "26479",
    name: "Thị trấn Hiệp Phước",
  },
  {
    districtId: "742",
    wardId: "26482",
    name: "Xã Phú Hữu",
  },
  {
    districtId: "742",
    wardId: "26485",
    name: "Xã Phú Hội",
  },
  {
    districtId: "742",
    wardId: "26488",
    name: "Xã Phú Thạnh",
  },
  {
    districtId: "742",
    wardId: "26491",
    name: "Xã Phú Đông",
  },
  {
    districtId: "742",
    wardId: "26494",
    name: "Xã Long Thọ",
  },
  {
    districtId: "742",
    wardId: "26497",
    name: "Xã Vĩnh Thanh",
  },
  {
    districtId: "742",
    wardId: "26500",
    name: "Xã Phước Khánh",
  },
  {
    districtId: "742",
    wardId: "26503",
    name: "Xã Phước An",
  },
  {
    districtId: "747",
    wardId: "26506",
    name: "Phường 1",
  },
  {
    districtId: "747",
    wardId: "26508",
    name: "Phường Thắng Tam",
  },
  {
    districtId: "747",
    wardId: "26509",
    name: "Phường 2",
  },
  {
    districtId: "747",
    wardId: "26512",
    name: "Phường 3",
  },
  {
    districtId: "747",
    wardId: "26515",
    name: "Phường 4",
  },
  {
    districtId: "747",
    wardId: "26518",
    name: "Phường 5",
  },
  {
    districtId: "747",
    wardId: "26521",
    name: "Phường Thắng Nhì",
  },
  {
    districtId: "747",
    wardId: "26524",
    name: "Phường 7",
  },
  {
    districtId: "747",
    wardId: "26526",
    name: "Phường Nguyễn An Ninh",
  },
  {
    districtId: "747",
    wardId: "26527",
    name: "Phường 8",
  },
  {
    districtId: "747",
    wardId: "26530",
    name: "Phường 9",
  },
  {
    districtId: "747",
    wardId: "26533",
    name: "Phường Thắng Nhất",
  },
  {
    districtId: "747",
    wardId: "26535",
    name: "Phường Rạch Dừa",
  },
  {
    districtId: "747",
    wardId: "26536",
    name: "Phường 10",
  },
  {
    districtId: "747",
    wardId: "26539",
    name: "Phường 11",
  },
  {
    districtId: "747",
    wardId: "26542",
    name: "Phường 12",
  },
  {
    districtId: "747",
    wardId: "26545",
    name: "Xã Long Sơn",
  },
  {
    districtId: "748",
    wardId: "26548",
    name: "Phường Phước Hưng",
  },
  {
    districtId: "748",
    wardId: "26551",
    name: "Phường Phước Hiệp",
  },
  {
    districtId: "748",
    wardId: "26554",
    name: "Phường Phước Nguyên",
  },
  {
    districtId: "748",
    wardId: "26557",
    name: "Phường Long Toàn",
  },
  {
    districtId: "748",
    wardId: "26558",
    name: "Phường Long Tâm",
  },
  {
    districtId: "748",
    wardId: "26560",
    name: "Phường Phước Trung",
  },
  {
    districtId: "748",
    wardId: "26563",
    name: "Phường Long Hương",
  },
  {
    districtId: "748",
    wardId: "26566",
    name: "Phường Kim Dinh",
  },
  {
    districtId: "748",
    wardId: "26567",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "748",
    wardId: "26569",
    name: "Xã Long Phước",
  },
  {
    districtId: "748",
    wardId: "26572",
    name: "Xã Hoà Long",
  },
  {
    districtId: "750",
    wardId: "26574",
    name: "Xã Bàu Chinh",
  },
  {
    districtId: "750",
    wardId: "26575",
    name: "Thị trấn Ngãi Giao",
  },
  {
    districtId: "750",
    wardId: "26578",
    name: "Xã Bình Ba",
  },
  {
    districtId: "750",
    wardId: "26581",
    name: "Xã Suối Nghệ",
  },
  {
    districtId: "750",
    wardId: "26584",
    name: "Xã Xuân Sơn",
  },
  {
    districtId: "750",
    wardId: "26587",
    name: "Xã Sơn Bình",
  },
  {
    districtId: "750",
    wardId: "26590",
    name: "Xã Bình Giã",
  },
  {
    districtId: "750",
    wardId: "26593",
    name: "Xã Bình Trung",
  },
  {
    districtId: "750",
    wardId: "26596",
    name: "Xã Xà Bang",
  },
  {
    districtId: "750",
    wardId: "26599",
    name: "Xã Cù Bị",
  },
  {
    districtId: "750",
    wardId: "26602",
    name: "Xã Láng Lớn",
  },
  {
    districtId: "750",
    wardId: "26605",
    name: "Xã Quảng Thành",
  },
  {
    districtId: "750",
    wardId: "26608",
    name: "Xã Kim Long",
  },
  {
    districtId: "750",
    wardId: "26611",
    name: "Xã Suối Rao",
  },
  {
    districtId: "750",
    wardId: "26614",
    name: "Xã Đá Bạc",
  },
  {
    districtId: "750",
    wardId: "26617",
    name: "Xã Nghĩa Thành",
  },
  {
    districtId: "751",
    wardId: "26620",
    name: "Thị trấn Phước Bửu",
  },
  {
    districtId: "751",
    wardId: "26623",
    name: "Xã Phước Thuận",
  },
  {
    districtId: "751",
    wardId: "26626",
    name: "Xã Phước Tân",
  },
  {
    districtId: "751",
    wardId: "26629",
    name: "Xã Xuyên Mộc",
  },
  {
    districtId: "751",
    wardId: "26632",
    name: "Xã Bông Trang",
  },
  {
    districtId: "751",
    wardId: "26635",
    name: "Xã Tân Lâm",
  },
  {
    districtId: "751",
    wardId: "26638",
    name: "Xã Bàu Lâm",
  },
  {
    districtId: "751",
    wardId: "26641",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "751",
    wardId: "26644",
    name: "Xã Hòa Hưng",
  },
  {
    districtId: "751",
    wardId: "26647",
    name: "Xã Hòa Hiệp",
  },
  {
    districtId: "751",
    wardId: "26650",
    name: "Xã Hòa Hội",
  },
  {
    districtId: "751",
    wardId: "26653",
    name: "Xã Bưng Riềng",
  },
  {
    districtId: "751",
    wardId: "26656",
    name: "Xã Bình Châu",
  },
  {
    districtId: "752",
    wardId: "26659",
    name: "Thị trấn Long Điền",
  },
  {
    districtId: "752",
    wardId: "26662",
    name: "Thị trấn Long Hải",
  },
  {
    districtId: "752",
    wardId: "26665",
    name: "Xã An Ngãi",
  },
  {
    districtId: "752",
    wardId: "26668",
    name: "Xã Tam Phước",
  },
  {
    districtId: "752",
    wardId: "26671",
    name: "Xã An Nhứt",
  },
  {
    districtId: "752",
    wardId: "26674",
    name: "Xã Phước Tỉnh",
  },
  {
    districtId: "752",
    wardId: "26677",
    name: "Xã Phước Hưng",
  },
  {
    districtId: "753",
    wardId: "26680",
    name: "Thị trấn Đất Đỏ",
  },
  {
    districtId: "753",
    wardId: "26683",
    name: "Xã Phước Long Thọ",
  },
  {
    districtId: "753",
    wardId: "26686",
    name: "Xã Phước Hội",
  },
  {
    districtId: "753",
    wardId: "26689",
    name: "Xã Long Mỹ",
  },
  {
    districtId: "753",
    wardId: "26692",
    name: "Thị trấn Phước Hải",
  },
  {
    districtId: "753",
    wardId: "26695",
    name: "Xã Long Tân",
  },
  {
    districtId: "753",
    wardId: "26698",
    name: "Xã Láng Dài",
  },
  {
    districtId: "753",
    wardId: "26701",
    name: "Xã Lộc An",
  },
  {
    districtId: "754",
    wardId: "26704",
    name: "Phường Phú Mỹ",
  },
  {
    districtId: "754",
    wardId: "26707",
    name: "Xã Tân Hoà",
  },
  {
    districtId: "754",
    wardId: "26710",
    name: "Xã Tân Hải",
  },
  {
    districtId: "754",
    wardId: "26713",
    name: "Phường Phước Hoà",
  },
  {
    districtId: "754",
    wardId: "26716",
    name: "Phường Tân Phước",
  },
  {
    districtId: "754",
    wardId: "26719",
    name: "Phường Mỹ Xuân",
  },
  {
    districtId: "754",
    wardId: "26722",
    name: "Xã Sông Xoài",
  },
  {
    districtId: "754",
    wardId: "26725",
    name: "Phường Hắc Dịch",
  },
  {
    districtId: "754",
    wardId: "26728",
    name: "Xã Châu Pha",
  },
  {
    districtId: "754",
    wardId: "26731",
    name: "Xã Tóc Tiên",
  },
  {
    districtId: "755",
    wardId: "",
    name: "",
  },
  {
    districtId: "760",
    wardId: "26734",
    name: "Phường Tân Định",
  },
  {
    districtId: "760",
    wardId: "26737",
    name: "Phường Đa Kao",
  },
  {
    districtId: "760",
    wardId: "26740",
    name: "Phường Bến Nghé",
  },
  {
    districtId: "760",
    wardId: "26743",
    name: "Phường Bến Thành",
  },
  {
    districtId: "760",
    wardId: "26746",
    name: "Phường Nguyễn Thái Bình",
  },
  {
    districtId: "760",
    wardId: "26749",
    name: "Phường Phạm Ngũ Lão",
  },
  {
    districtId: "760",
    wardId: "26752",
    name: "Phường Cầu Ông Lãnh",
  },
  {
    districtId: "760",
    wardId: "26755",
    name: "Phường Cô Giang",
  },
  {
    districtId: "760",
    wardId: "26758",
    name: "Phường Nguyễn Cư Trinh",
  },
  {
    districtId: "760",
    wardId: "26761",
    name: "Phường Cầu Kho",
  },
  {
    districtId: "761",
    wardId: "26764",
    name: "Phường Thạnh Xuân",
  },
  {
    districtId: "761",
    wardId: "26767",
    name: "Phường Thạnh Lộc",
  },
  {
    districtId: "761",
    wardId: "26770",
    name: "Phường Hiệp Thành",
  },
  {
    districtId: "761",
    wardId: "26773",
    name: "Phường Thới An",
  },
  {
    districtId: "761",
    wardId: "26776",
    name: "Phường Tân Chánh Hiệp",
  },
  {
    districtId: "761",
    wardId: "26779",
    name: "Phường An Phú Đông",
  },
  {
    districtId: "761",
    wardId: "26782",
    name: "Phường Tân Thới Hiệp",
  },
  {
    districtId: "761",
    wardId: "26785",
    name: "Phường Trung Mỹ Tây",
  },
  {
    districtId: "761",
    wardId: "26787",
    name: "Phường Tân Hưng Thuận",
  },
  {
    districtId: "761",
    wardId: "26788",
    name: "Phường Đông Hưng Thuận",
  },
  {
    districtId: "761",
    wardId: "26791",
    name: "Phường Tân Thới Nhất",
  },
  {
    districtId: "764",
    wardId: "26869",
    name: "Phường 15",
  },
  {
    districtId: "764",
    wardId: "26872",
    name: "Phường 13",
  },
  {
    districtId: "764",
    wardId: "26875",
    name: "Phường 17",
  },
  {
    districtId: "764",
    wardId: "26876",
    name: "Phường 6",
  },
  {
    districtId: "764",
    wardId: "26878",
    name: "Phường 16",
  },
  {
    districtId: "764",
    wardId: "26881",
    name: "Phường 12",
  },
  {
    districtId: "764",
    wardId: "26882",
    name: "Phường 14",
  },
  {
    districtId: "764",
    wardId: "26884",
    name: "Phường 10",
  },
  {
    districtId: "764",
    wardId: "26887",
    name: "Phường 05",
  },
  {
    districtId: "764",
    wardId: "26890",
    name: "Phường 07",
  },
  {
    districtId: "764",
    wardId: "26893",
    name: "Phường 04",
  },
  {
    districtId: "764",
    wardId: "26896",
    name: "Phường 01",
  },
  {
    districtId: "764",
    wardId: "26897",
    name: "Phường 9",
  },
  {
    districtId: "764",
    wardId: "26898",
    name: "Phường 8",
  },
  {
    districtId: "764",
    wardId: "26899",
    name: "Phường 11",
  },
  {
    districtId: "764",
    wardId: "26902",
    name: "Phường 03",
  },
  {
    districtId: "765",
    wardId: "26905",
    name: "Phường 13",
  },
  {
    districtId: "765",
    wardId: "26908",
    name: "Phường 11",
  },
  {
    districtId: "765",
    wardId: "26911",
    name: "Phường 27",
  },
  {
    districtId: "765",
    wardId: "26914",
    name: "Phường 26",
  },
  {
    districtId: "765",
    wardId: "26917",
    name: "Phường 12",
  },
  {
    districtId: "765",
    wardId: "26920",
    name: "Phường 25",
  },
  {
    districtId: "765",
    wardId: "26923",
    name: "Phường 05",
  },
  {
    districtId: "765",
    wardId: "26926",
    name: "Phường 07",
  },
  {
    districtId: "765",
    wardId: "26929",
    name: "Phường 24",
  },
  {
    districtId: "765",
    wardId: "26932",
    name: "Phường 06",
  },
  {
    districtId: "765",
    wardId: "26935",
    name: "Phường 14",
  },
  {
    districtId: "765",
    wardId: "26938",
    name: "Phường 15",
  },
  {
    districtId: "765",
    wardId: "26941",
    name: "Phường 02",
  },
  {
    districtId: "765",
    wardId: "26944",
    name: "Phường 01",
  },
  {
    districtId: "765",
    wardId: "26947",
    name: "Phường 03",
  },
  {
    districtId: "765",
    wardId: "26950",
    name: "Phường 17",
  },
  {
    districtId: "765",
    wardId: "26953",
    name: "Phường 21",
  },
  {
    districtId: "765",
    wardId: "26956",
    name: "Phường 22",
  },
  {
    districtId: "765",
    wardId: "26959",
    name: "Phường 19",
  },
  {
    districtId: "765",
    wardId: "26962",
    name: "Phường 28",
  },
  {
    districtId: "766",
    wardId: "26965",
    name: "Phường 02",
  },
  {
    districtId: "766",
    wardId: "26968",
    name: "Phường 04",
  },
  {
    districtId: "766",
    wardId: "26971",
    name: "Phường 12",
  },
  {
    districtId: "766",
    wardId: "26974",
    name: "Phường 13",
  },
  {
    districtId: "766",
    wardId: "26977",
    name: "Phường 01",
  },
  {
    districtId: "766",
    wardId: "26980",
    name: "Phường 03",
  },
  {
    districtId: "766",
    wardId: "26983",
    name: "Phường 11",
  },
  {
    districtId: "766",
    wardId: "26986",
    name: "Phường 07",
  },
  {
    districtId: "766",
    wardId: "26989",
    name: "Phường 05",
  },
  {
    districtId: "766",
    wardId: "26992",
    name: "Phường 10",
  },
  {
    districtId: "766",
    wardId: "26995",
    name: "Phường 06",
  },
  {
    districtId: "766",
    wardId: "26998",
    name: "Phường 08",
  },
  {
    districtId: "766",
    wardId: "27001",
    name: "Phường 09",
  },
  {
    districtId: "766",
    wardId: "27004",
    name: "Phường 14",
  },
  {
    districtId: "766",
    wardId: "27007",
    name: "Phường 15",
  },
  {
    districtId: "767",
    wardId: "27010",
    name: "Phường Tân Sơn Nhì",
  },
  {
    districtId: "767",
    wardId: "27013",
    name: "Phường Tây Thạnh",
  },
  {
    districtId: "767",
    wardId: "27016",
    name: "Phường Sơn Kỳ",
  },
  {
    districtId: "767",
    wardId: "27019",
    name: "Phường Tân Quý",
  },
  {
    districtId: "767",
    wardId: "27022",
    name: "Phường Tân Thành",
  },
  {
    districtId: "767",
    wardId: "27025",
    name: "Phường Phú Thọ Hòa",
  },
  {
    districtId: "767",
    wardId: "27028",
    name: "Phường Phú Thạnh",
  },
  {
    districtId: "767",
    wardId: "27031",
    name: "Phường Phú Trung",
  },
  {
    districtId: "767",
    wardId: "27034",
    name: "Phường Hòa Thạnh",
  },
  {
    districtId: "767",
    wardId: "27037",
    name: "Phường Hiệp Tân",
  },
  {
    districtId: "767",
    wardId: "27040",
    name: "Phường Tân Thới Hòa",
  },
  {
    districtId: "768",
    wardId: "27043",
    name: "Phường 04",
  },
  {
    districtId: "768",
    wardId: "27046",
    name: "Phường 05",
  },
  {
    districtId: "768",
    wardId: "27049",
    name: "Phường 09",
  },
  {
    districtId: "768",
    wardId: "27052",
    name: "Phường 07",
  },
  {
    districtId: "768",
    wardId: "27055",
    name: "Phường 03",
  },
  {
    districtId: "768",
    wardId: "27058",
    name: "Phường 01",
  },
  {
    districtId: "768",
    wardId: "27061",
    name: "Phường 02",
  },
  {
    districtId: "768",
    wardId: "27064",
    name: "Phường 08",
  },
  {
    districtId: "768",
    wardId: "27067",
    name: "Phường 15",
  },
  {
    districtId: "768",
    wardId: "27070",
    name: "Phường 10",
  },
  {
    districtId: "768",
    wardId: "27073",
    name: "Phường 11",
  },
  {
    districtId: "768",
    wardId: "27076",
    name: "Phường 17",
  },
  {
    districtId: "768",
    wardId: "27085",
    name: "Phường 13",
  },
  {
    districtId: "769",
    wardId: "26794",
    name: "Phường Linh Xuân",
  },
  {
    districtId: "769",
    wardId: "26797",
    name: "Phường Bình Chiểu",
  },
  {
    districtId: "769",
    wardId: "26800",
    name: "Phường Linh Trung",
  },
  {
    districtId: "769",
    wardId: "26803",
    name: "Phường Tam Bình",
  },
  {
    districtId: "769",
    wardId: "26806",
    name: "Phường Tam Phú",
  },
  {
    districtId: "769",
    wardId: "26809",
    name: "Phường Hiệp Bình Phước",
  },
  {
    districtId: "769",
    wardId: "26812",
    name: "Phường Hiệp Bình Chánh",
  },
  {
    districtId: "769",
    wardId: "26815",
    name: "Phường Linh Chiểu",
  },
  {
    districtId: "769",
    wardId: "26818",
    name: "Phường Linh Tây",
  },
  {
    districtId: "769",
    wardId: "26821",
    name: "Phường Linh Đông",
  },
  {
    districtId: "769",
    wardId: "26824",
    name: "Phường Bình Thọ",
  },
  {
    districtId: "769",
    wardId: "26827",
    name: "Phường Trường Thọ",
  },
  {
    districtId: "769",
    wardId: "26830",
    name: "Phường Long Bình",
  },
  {
    districtId: "769",
    wardId: "26833",
    name: "Phường Long Thạnh Mỹ",
  },
  {
    districtId: "769",
    wardId: "26836",
    name: "Phường Tân Phú",
  },
  {
    districtId: "769",
    wardId: "26839",
    name: "Phường Hiệp Phú",
  },
  {
    districtId: "769",
    wardId: "26842",
    name: "Phường Tăng Nhơn Phú A",
  },
  {
    districtId: "769",
    wardId: "26845",
    name: "Phường Tăng Nhơn Phú B",
  },
  {
    districtId: "769",
    wardId: "26848",
    name: "Phường Phước Long B",
  },
  {
    districtId: "769",
    wardId: "26851",
    name: "Phường Phước Long A",
  },
  {
    districtId: "769",
    wardId: "26854",
    name: "Phường Trường Thạnh",
  },
  {
    districtId: "769",
    wardId: "26857",
    name: "Phường Long Phước",
  },
  {
    districtId: "769",
    wardId: "26860",
    name: "Phường Long Trường",
  },
  {
    districtId: "769",
    wardId: "26863",
    name: "Phường Phước Bình",
  },
  {
    districtId: "769",
    wardId: "26866",
    name: "Phường Phú Hữu",
  },
  {
    districtId: "769",
    wardId: "27088",
    name: "Phường Thảo Điền",
  },
  {
    districtId: "769",
    wardId: "27091",
    name: "Phường An Phú",
  },
  {
    districtId: "769",
    wardId: "27094",
    name: "Phường An Khánh",
  },
  {
    districtId: "769",
    wardId: "27097",
    name: "Phường Bình Trưng Đông",
  },
  {
    districtId: "769",
    wardId: "27100",
    name: "Phường Bình Trưng Tây",
  },
  {
    districtId: "769",
    wardId: "27109",
    name: "Phường Cát Lái",
  },
  {
    districtId: "769",
    wardId: "27112",
    name: "Phường Thạnh Mỹ Lợi",
  },
  {
    districtId: "769",
    wardId: "27115",
    name: "Phường An Lợi Đông",
  },
  {
    districtId: "769",
    wardId: "27118",
    name: "Phường Thủ Thiêm",
  },
  {
    districtId: "770",
    wardId: "27127",
    name: "Phường 14",
  },
  {
    districtId: "770",
    wardId: "27130",
    name: "Phường 12",
  },
  {
    districtId: "770",
    wardId: "27133",
    name: "Phường 11",
  },
  {
    districtId: "770",
    wardId: "27136",
    name: "Phường 13",
  },
  {
    districtId: "770",
    wardId: "27139",
    name: "Phường Võ Thị Sáu",
  },
  {
    districtId: "770",
    wardId: "27142",
    name: "Phường 09",
  },
  {
    districtId: "770",
    wardId: "27145",
    name: "Phường 10",
  },
  {
    districtId: "770",
    wardId: "27148",
    name: "Phường 04",
  },
  {
    districtId: "770",
    wardId: "27151",
    name: "Phường 05",
  },
  {
    districtId: "770",
    wardId: "27154",
    name: "Phường 03",
  },
  {
    districtId: "770",
    wardId: "27157",
    name: "Phường 02",
  },
  {
    districtId: "770",
    wardId: "27160",
    name: "Phường 01",
  },
  {
    districtId: "771",
    wardId: "27163",
    name: "Phường 15",
  },
  {
    districtId: "771",
    wardId: "27166",
    name: "Phường 13",
  },
  {
    districtId: "771",
    wardId: "27169",
    name: "Phường 14",
  },
  {
    districtId: "771",
    wardId: "27172",
    name: "Phường 12",
  },
  {
    districtId: "771",
    wardId: "27175",
    name: "Phường 11",
  },
  {
    districtId: "771",
    wardId: "27178",
    name: "Phường 10",
  },
  {
    districtId: "771",
    wardId: "27181",
    name: "Phường 09",
  },
  {
    districtId: "771",
    wardId: "27184",
    name: "Phường 01",
  },
  {
    districtId: "771",
    wardId: "27187",
    name: "Phường 08",
  },
  {
    districtId: "771",
    wardId: "27190",
    name: "Phường 02",
  },
  {
    districtId: "771",
    wardId: "27193",
    name: "Phường 04",
  },
  {
    districtId: "771",
    wardId: "27196",
    name: "Phường 07",
  },
  {
    districtId: "771",
    wardId: "27199",
    name: "Phường 05",
  },
  {
    districtId: "771",
    wardId: "27202",
    name: "Phường 06",
  },
  {
    districtId: "772",
    wardId: "27208",
    name: "Phường 15",
  },
  {
    districtId: "772",
    wardId: "27211",
    name: "Phường 05",
  },
  {
    districtId: "772",
    wardId: "27214",
    name: "Phường 14",
  },
  {
    districtId: "772",
    wardId: "27217",
    name: "Phường 11",
  },
  {
    districtId: "772",
    wardId: "27220",
    name: "Phường 03",
  },
  {
    districtId: "772",
    wardId: "27223",
    name: "Phường 10",
  },
  {
    districtId: "772",
    wardId: "27226",
    name: "Phường 13",
  },
  {
    districtId: "772",
    wardId: "27229",
    name: "Phường 08",
  },
  {
    districtId: "772",
    wardId: "27232",
    name: "Phường 09",
  },
  {
    districtId: "772",
    wardId: "27235",
    name: "Phường 12",
  },
  {
    districtId: "772",
    wardId: "27238",
    name: "Phường 07",
  },
  {
    districtId: "772",
    wardId: "27241",
    name: "Phường 06",
  },
  {
    districtId: "772",
    wardId: "27244",
    name: "Phường 04",
  },
  {
    districtId: "772",
    wardId: "27247",
    name: "Phường 01",
  },
  {
    districtId: "772",
    wardId: "27250",
    name: "Phường 02",
  },
  {
    districtId: "772",
    wardId: "27253",
    name: "Phường 16",
  },
  {
    districtId: "773",
    wardId: "27259",
    name: "Phường 13",
  },
  {
    districtId: "773",
    wardId: "27262",
    name: "Phường 09",
  },
  {
    districtId: "773",
    wardId: "27265",
    name: "Phường 06",
  },
  {
    districtId: "773",
    wardId: "27268",
    name: "Phường 08",
  },
  {
    districtId: "773",
    wardId: "27271",
    name: "Phường 10",
  },
  {
    districtId: "773",
    wardId: "27277",
    name: "Phường 18",
  },
  {
    districtId: "773",
    wardId: "27280",
    name: "Phường 14",
  },
  {
    districtId: "773",
    wardId: "27283",
    name: "Phường 04",
  },
  {
    districtId: "773",
    wardId: "27286",
    name: "Phường 03",
  },
  {
    districtId: "773",
    wardId: "27289",
    name: "Phường 16",
  },
  {
    districtId: "773",
    wardId: "27292",
    name: "Phường 02",
  },
  {
    districtId: "773",
    wardId: "27295",
    name: "Phường 15",
  },
  {
    districtId: "773",
    wardId: "27298",
    name: "Phường 01",
  },
  {
    districtId: "774",
    wardId: "27301",
    name: "Phường 04",
  },
  {
    districtId: "774",
    wardId: "27304",
    name: "Phường 09",
  },
  {
    districtId: "774",
    wardId: "27307",
    name: "Phường 03",
  },
  {
    districtId: "774",
    wardId: "27310",
    name: "Phường 12",
  },
  {
    districtId: "774",
    wardId: "27313",
    name: "Phường 02",
  },
  {
    districtId: "774",
    wardId: "27316",
    name: "Phường 08",
  },
  {
    districtId: "774",
    wardId: "27322",
    name: "Phường 07",
  },
  {
    districtId: "774",
    wardId: "27325",
    name: "Phường 01",
  },
  {
    districtId: "774",
    wardId: "27328",
    name: "Phường 11",
  },
  {
    districtId: "774",
    wardId: "27331",
    name: "Phường 14",
  },
  {
    districtId: "774",
    wardId: "27334",
    name: "Phường 05",
  },
  {
    districtId: "774",
    wardId: "27337",
    name: "Phường 06",
  },
  {
    districtId: "774",
    wardId: "27340",
    name: "Phường 10",
  },
  {
    districtId: "774",
    wardId: "27343",
    name: "Phường 13",
  },
  {
    districtId: "775",
    wardId: "27346",
    name: "Phường 14",
  },
  {
    districtId: "775",
    wardId: "27349",
    name: "Phường 13",
  },
  {
    districtId: "775",
    wardId: "27352",
    name: "Phường 09",
  },
  {
    districtId: "775",
    wardId: "27355",
    name: "Phường 06",
  },
  {
    districtId: "775",
    wardId: "27358",
    name: "Phường 12",
  },
  {
    districtId: "775",
    wardId: "27361",
    name: "Phường 05",
  },
  {
    districtId: "775",
    wardId: "27364",
    name: "Phường 11",
  },
  {
    districtId: "775",
    wardId: "27367",
    name: "Phường 02",
  },
  {
    districtId: "775",
    wardId: "27370",
    name: "Phường 01",
  },
  {
    districtId: "775",
    wardId: "27373",
    name: "Phường 04",
  },
  {
    districtId: "775",
    wardId: "27376",
    name: "Phường 08",
  },
  {
    districtId: "775",
    wardId: "27379",
    name: "Phường 03",
  },
  {
    districtId: "775",
    wardId: "27382",
    name: "Phường 07",
  },
  {
    districtId: "775",
    wardId: "27385",
    name: "Phường 10",
  },
  {
    districtId: "776",
    wardId: "27388",
    name: "Phường 08",
  },
  {
    districtId: "776",
    wardId: "27391",
    name: "Phường 02",
  },
  {
    districtId: "776",
    wardId: "27394",
    name: "Phường 01",
  },
  {
    districtId: "776",
    wardId: "27397",
    name: "Phường 03",
  },
  {
    districtId: "776",
    wardId: "27400",
    name: "Phường 11",
  },
  {
    districtId: "776",
    wardId: "27403",
    name: "Phường 09",
  },
  {
    districtId: "776",
    wardId: "27406",
    name: "Phường 10",
  },
  {
    districtId: "776",
    wardId: "27409",
    name: "Phường 04",
  },
  {
    districtId: "776",
    wardId: "27412",
    name: "Phường 13",
  },
  {
    districtId: "776",
    wardId: "27415",
    name: "Phường 12",
  },
  {
    districtId: "776",
    wardId: "27418",
    name: "Phường 05",
  },
  {
    districtId: "776",
    wardId: "27421",
    name: "Phường 14",
  },
  {
    districtId: "776",
    wardId: "27424",
    name: "Phường 06",
  },
  {
    districtId: "776",
    wardId: "27427",
    name: "Phường 15",
  },
  {
    districtId: "776",
    wardId: "27430",
    name: "Phường 16",
  },
  {
    districtId: "776",
    wardId: "27433",
    name: "Phường 07",
  },
  {
    districtId: "777",
    wardId: "27436",
    name: "Phường Bình Hưng Hòa",
  },
  {
    districtId: "777",
    wardId: "27439",
    name: "Phường Bình Hưng Hoà A",
  },
  {
    districtId: "777",
    wardId: "27442",
    name: "Phường Bình Hưng Hoà B",
  },
  {
    districtId: "777",
    wardId: "27445",
    name: "Phường Bình Trị Đông",
  },
  {
    districtId: "777",
    wardId: "27448",
    name: "Phường Bình Trị Đông A",
  },
  {
    districtId: "777",
    wardId: "27451",
    name: "Phường Bình Trị Đông B",
  },
  {
    districtId: "777",
    wardId: "27454",
    name: "Phường Tân Tạo",
  },
  {
    districtId: "777",
    wardId: "27457",
    name: "Phường Tân Tạo A",
  },
  {
    districtId: "777",
    wardId: "27460",
    name: "Phường  An Lạc",
  },
  {
    districtId: "777",
    wardId: "27463",
    name: "Phường An Lạc A",
  },
  {
    districtId: "778",
    wardId: "27466",
    name: "Phường Tân Thuận Đông",
  },
  {
    districtId: "778",
    wardId: "27469",
    name: "Phường Tân Thuận Tây",
  },
  {
    districtId: "778",
    wardId: "27472",
    name: "Phường Tân Kiểng",
  },
  {
    districtId: "778",
    wardId: "27475",
    name: "Phường Tân Hưng",
  },
  {
    districtId: "778",
    wardId: "27478",
    name: "Phường Bình Thuận",
  },
  {
    districtId: "778",
    wardId: "27481",
    name: "Phường Tân Quy",
  },
  {
    districtId: "778",
    wardId: "27484",
    name: "Phường Phú Thuận",
  },
  {
    districtId: "778",
    wardId: "27487",
    name: "Phường Tân Phú",
  },
  {
    districtId: "778",
    wardId: "27490",
    name: "Phường Tân Phong",
  },
  {
    districtId: "778",
    wardId: "27493",
    name: "Phường Phú Mỹ",
  },
  {
    districtId: "783",
    wardId: "27496",
    name: "Thị trấn Củ Chi",
  },
  {
    districtId: "783",
    wardId: "27499",
    name: "Xã Phú Mỹ Hưng",
  },
  {
    districtId: "783",
    wardId: "27502",
    name: "Xã An Phú",
  },
  {
    districtId: "783",
    wardId: "27505",
    name: "Xã Trung Lập Thượng",
  },
  {
    districtId: "783",
    wardId: "27508",
    name: "Xã An Nhơn Tây",
  },
  {
    districtId: "783",
    wardId: "27511",
    name: "Xã Nhuận Đức",
  },
  {
    districtId: "783",
    wardId: "27514",
    name: "Xã Phạm Văn Cội",
  },
  {
    districtId: "783",
    wardId: "27517",
    name: "Xã Phú Hòa Đông",
  },
  {
    districtId: "783",
    wardId: "27520",
    name: "Xã Trung Lập Hạ",
  },
  {
    districtId: "783",
    wardId: "27523",
    name: "Xã Trung An",
  },
  {
    districtId: "783",
    wardId: "27526",
    name: "Xã Phước Thạnh",
  },
  {
    districtId: "783",
    wardId: "27529",
    name: "Xã Phước Hiệp",
  },
  {
    districtId: "783",
    wardId: "27532",
    name: "Xã Tân An Hội",
  },
  {
    districtId: "783",
    wardId: "27535",
    name: "Xã Phước Vĩnh An",
  },
  {
    districtId: "783",
    wardId: "27538",
    name: "Xã Thái Mỹ",
  },
  {
    districtId: "783",
    wardId: "27541",
    name: "Xã Tân Thạnh Tây",
  },
  {
    districtId: "783",
    wardId: "27544",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "783",
    wardId: "27547",
    name: "Xã Tân Thạnh Đông",
  },
  {
    districtId: "783",
    wardId: "27550",
    name: "Xã Bình Mỹ",
  },
  {
    districtId: "783",
    wardId: "27553",
    name: "Xã Tân Phú Trung",
  },
  {
    districtId: "783",
    wardId: "27556",
    name: "Xã Tân Thông Hội",
  },
  {
    districtId: "784",
    wardId: "27559",
    name: "Thị trấn Hóc Môn",
  },
  {
    districtId: "784",
    wardId: "27562",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "784",
    wardId: "27565",
    name: "Xã Nhị Bình",
  },
  {
    districtId: "784",
    wardId: "27568",
    name: "Xã Đông Thạnh",
  },
  {
    districtId: "784",
    wardId: "27571",
    name: "Xã Tân Thới Nhì",
  },
  {
    districtId: "784",
    wardId: "27574",
    name: "Xã Thới Tam Thôn",
  },
  {
    districtId: "784",
    wardId: "27577",
    name: "Xã Xuân Thới Sơn",
  },
  {
    districtId: "784",
    wardId: "27580",
    name: "Xã Tân Xuân",
  },
  {
    districtId: "784",
    wardId: "27583",
    name: "Xã Xuân Thới Đông",
  },
  {
    districtId: "784",
    wardId: "27586",
    name: "Xã Trung Chánh",
  },
  {
    districtId: "784",
    wardId: "27589",
    name: "Xã Xuân Thới Thượng",
  },
  {
    districtId: "784",
    wardId: "27592",
    name: "Xã Bà Điểm",
  },
  {
    districtId: "785",
    wardId: "27595",
    name: "Thị trấn Tân Túc",
  },
  {
    districtId: "785",
    wardId: "27598",
    name: "Xã Phạm Văn Hai",
  },
  {
    districtId: "785",
    wardId: "27601",
    name: "Xã Vĩnh Lộc A",
  },
  {
    districtId: "785",
    wardId: "27604",
    name: "Xã Vĩnh Lộc B",
  },
  {
    districtId: "785",
    wardId: "27607",
    name: "Xã Bình Lợi",
  },
  {
    districtId: "785",
    wardId: "27610",
    name: "Xã Lê Minh Xuân",
  },
  {
    districtId: "785",
    wardId: "27613",
    name: "Xã Tân Nhựt",
  },
  {
    districtId: "785",
    wardId: "27616",
    name: "Xã Tân Kiên",
  },
  {
    districtId: "785",
    wardId: "27619",
    name: "Xã Bình Hưng",
  },
  {
    districtId: "785",
    wardId: "27622",
    name: "Xã Phong Phú",
  },
  {
    districtId: "785",
    wardId: "27625",
    name: "Xã An Phú Tây",
  },
  {
    districtId: "785",
    wardId: "27628",
    name: "Xã Hưng Long",
  },
  {
    districtId: "785",
    wardId: "27631",
    name: "Xã Đa Phước",
  },
  {
    districtId: "785",
    wardId: "27634",
    name: "Xã Tân Quý Tây",
  },
  {
    districtId: "785",
    wardId: "27637",
    name: "Xã Bình Chánh",
  },
  {
    districtId: "785",
    wardId: "27640",
    name: "Xã Quy Đức",
  },
  {
    districtId: "786",
    wardId: "27643",
    name: "Thị trấn Nhà Bè",
  },
  {
    districtId: "786",
    wardId: "27646",
    name: "Xã Phước Kiển",
  },
  {
    districtId: "786",
    wardId: "27649",
    name: "Xã Phước Lộc",
  },
  {
    districtId: "786",
    wardId: "27652",
    name: "Xã Nhơn Đức",
  },
  {
    districtId: "786",
    wardId: "27655",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "786",
    wardId: "27658",
    name: "Xã Long Thới",
  },
  {
    districtId: "786",
    wardId: "27661",
    name: "Xã Hiệp Phước",
  },
  {
    districtId: "787",
    wardId: "27664",
    name: "Thị trấn Cần Thạnh",
  },
  {
    districtId: "787",
    wardId: "27667",
    name: "Xã Bình Khánh",
  },
  {
    districtId: "787",
    wardId: "27670",
    name: "Xã Tam Thôn Hiệp",
  },
  {
    districtId: "787",
    wardId: "27673",
    name: "Xã An Thới Đông",
  },
  {
    districtId: "787",
    wardId: "27676",
    name: "Xã Thạnh An",
  },
  {
    districtId: "787",
    wardId: "27679",
    name: "Xã Long Hòa",
  },
  {
    districtId: "787",
    wardId: "27682",
    name: "Xã Lý Nhơn",
  },
  {
    districtId: "794",
    wardId: "27685",
    name: "Phường 5",
  },
  {
    districtId: "794",
    wardId: "27688",
    name: "Phường 2",
  },
  {
    districtId: "794",
    wardId: "27691",
    name: "Phường 4",
  },
  {
    districtId: "794",
    wardId: "27692",
    name: "Phường Tân Khánh",
  },
  {
    districtId: "794",
    wardId: "27694",
    name: "Phường 1",
  },
  {
    districtId: "794",
    wardId: "27697",
    name: "Phường 3",
  },
  {
    districtId: "794",
    wardId: "27698",
    name: "Phường 7",
  },
  {
    districtId: "794",
    wardId: "27700",
    name: "Phường 6",
  },
  {
    districtId: "794",
    wardId: "27703",
    name: "Xã Hướng Thọ Phú",
  },
  {
    districtId: "794",
    wardId: "27706",
    name: "Xã Nhơn Thạnh Trung",
  },
  {
    districtId: "794",
    wardId: "27709",
    name: "Xã Lợi Bình Nhơn",
  },
  {
    districtId: "794",
    wardId: "27712",
    name: "Xã Bình Tâm",
  },
  {
    districtId: "794",
    wardId: "27715",
    name: "Phường Khánh Hậu",
  },
  {
    districtId: "794",
    wardId: "27718",
    name: "Xã An Vĩnh Ngãi",
  },
  {
    districtId: "795",
    wardId: "27787",
    name: "Phường 1",
  },
  {
    districtId: "795",
    wardId: "27788",
    name: "Phường 2",
  },
  {
    districtId: "795",
    wardId: "27790",
    name: "Xã Thạnh Trị",
  },
  {
    districtId: "795",
    wardId: "27793",
    name: "Xã Bình Hiệp",
  },
  {
    districtId: "795",
    wardId: "27799",
    name: "Xã Bình Tân",
  },
  {
    districtId: "795",
    wardId: "27805",
    name: "Xã Tuyên Thạnh",
  },
  {
    districtId: "795",
    wardId: "27806",
    name: "Phường 3",
  },
  {
    districtId: "795",
    wardId: "27817",
    name: "Xã Thạnh Hưng",
  },
  {
    districtId: "796",
    wardId: "27721",
    name: "Thị trấn Tân Hưng",
  },
  {
    districtId: "796",
    wardId: "27724",
    name: "Xã Hưng Hà",
  },
  {
    districtId: "796",
    wardId: "27727",
    name: "Xã Hưng Điền B",
  },
  {
    districtId: "796",
    wardId: "27730",
    name: "Xã Hưng Điền",
  },
  {
    districtId: "796",
    wardId: "27733",
    name: "Xã Thạnh Hưng",
  },
  {
    districtId: "796",
    wardId: "27736",
    name: "Xã Hưng Thạnh",
  },
  {
    districtId: "796",
    wardId: "27739",
    name: "Xã Vĩnh Thạnh",
  },
  {
    districtId: "796",
    wardId: "27742",
    name: "Xã Vĩnh Châu B",
  },
  {
    districtId: "796",
    wardId: "27745",
    name: "Xã Vĩnh Lợi",
  },
  {
    districtId: "796",
    wardId: "27748",
    name: "Xã Vĩnh Đại",
  },
  {
    districtId: "796",
    wardId: "27751",
    name: "Xã Vĩnh Châu A",
  },
  {
    districtId: "796",
    wardId: "27754",
    name: "Xã Vĩnh Bửu",
  },
  {
    districtId: "797",
    wardId: "27757",
    name: "Thị trấn Vĩnh Hưng",
  },
  {
    districtId: "797",
    wardId: "27760",
    name: "Xã Hưng Điền A",
  },
  {
    districtId: "797",
    wardId: "27763",
    name: "Xã Khánh Hưng",
  },
  {
    districtId: "797",
    wardId: "27766",
    name: "Xã Thái Trị",
  },
  {
    districtId: "797",
    wardId: "27769",
    name: "Xã Vĩnh Trị",
  },
  {
    districtId: "797",
    wardId: "27772",
    name: "Xã Thái Bình Trung",
  },
  {
    districtId: "797",
    wardId: "27775",
    name: "Xã Vĩnh Bình",
  },
  {
    districtId: "797",
    wardId: "27778",
    name: "Xã Vĩnh Thuận",
  },
  {
    districtId: "797",
    wardId: "27781",
    name: "Xã Tuyên Bình",
  },
  {
    districtId: "797",
    wardId: "27784",
    name: "Xã Tuyên Bình Tây",
  },
  {
    districtId: "798",
    wardId: "27796",
    name: "Xã Bình Hòa Tây",
  },
  {
    districtId: "798",
    wardId: "27802",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "798",
    wardId: "27808",
    name: "Xã Bình Hòa Trung",
  },
  {
    districtId: "798",
    wardId: "27811",
    name: "Xã Bình Hòa Đông",
  },
  {
    districtId: "798",
    wardId: "27814",
    name: "Thị trấn Bình Phong Thạnh",
  },
  {
    districtId: "798",
    wardId: "27820",
    name: "Xã Tân Lập",
  },
  {
    districtId: "798",
    wardId: "27823",
    name: "Xã Tân Thành",
  },
  {
    districtId: "799",
    wardId: "27826",
    name: "Thị trấn Tân Thạnh",
  },
  {
    districtId: "799",
    wardId: "27829",
    name: "Xã Bắc Hòa",
  },
  {
    districtId: "799",
    wardId: "27832",
    name: "Xã Hậu Thạnh Tây",
  },
  {
    districtId: "799",
    wardId: "27835",
    name: "Xã Nhơn Hòa Lập",
  },
  {
    districtId: "799",
    wardId: "27838",
    name: "Xã Tân Lập",
  },
  {
    districtId: "799",
    wardId: "27841",
    name: "Xã Hậu Thạnh Đông",
  },
  {
    districtId: "799",
    wardId: "27844",
    name: "Xã Nhơn Hoà",
  },
  {
    districtId: "799",
    wardId: "27847",
    name: "Xã Kiến Bình",
  },
  {
    districtId: "799",
    wardId: "27850",
    name: "Xã Tân Thành",
  },
  {
    districtId: "799",
    wardId: "27853",
    name: "Xã Tân Bình",
  },
  {
    districtId: "799",
    wardId: "27856",
    name: "Xã Tân Ninh",
  },
  {
    districtId: "799",
    wardId: "27859",
    name: "Xã Nhơn Ninh",
  },
  {
    districtId: "799",
    wardId: "27862",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "800",
    wardId: "27865",
    name: "Thị trấn Thạnh Hóa",
  },
  {
    districtId: "800",
    wardId: "27868",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "800",
    wardId: "27871",
    name: "Xã Thuận Bình",
  },
  {
    districtId: "800",
    wardId: "27874",
    name: "Xã Thạnh Phước",
  },
  {
    districtId: "800",
    wardId: "27877",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "800",
    wardId: "27880",
    name: "Xã Thuận Nghĩa Hòa",
  },
  {
    districtId: "800",
    wardId: "27883",
    name: "Xã Thủy Đông",
  },
  {
    districtId: "800",
    wardId: "27886",
    name: "Xã Thủy Tây",
  },
  {
    districtId: "800",
    wardId: "27889",
    name: "Xã Tân Tây",
  },
  {
    districtId: "800",
    wardId: "27892",
    name: "Xã Tân Đông",
  },
  {
    districtId: "800",
    wardId: "27895",
    name: "Xã Thạnh An",
  },
  {
    districtId: "801",
    wardId: "27898",
    name: "Thị trấn Đông Thành",
  },
  {
    districtId: "801",
    wardId: "27901",
    name: "Xã Mỹ Quý Đông",
  },
  {
    districtId: "801",
    wardId: "27904",
    name: "Xã Mỹ Thạnh Bắc",
  },
  {
    districtId: "801",
    wardId: "27907",
    name: "Xã Mỹ Quý Tây",
  },
  {
    districtId: "801",
    wardId: "27910",
    name: "Xã Mỹ Thạnh Tây",
  },
  {
    districtId: "801",
    wardId: "27913",
    name: "Xã Mỹ Thạnh Đông",
  },
  {
    districtId: "801",
    wardId: "27916",
    name: "Xã Bình Thành",
  },
  {
    districtId: "801",
    wardId: "27919",
    name: "Xã Bình Hòa Bắc",
  },
  {
    districtId: "801",
    wardId: "27922",
    name: "Xã Bình Hòa Hưng",
  },
  {
    districtId: "801",
    wardId: "27925",
    name: "Xã Bình Hòa Nam",
  },
  {
    districtId: "801",
    wardId: "27928",
    name: "Xã Mỹ Bình",
  },
  {
    districtId: "802",
    wardId: "27931",
    name: "Thị trấn Hậu Nghĩa",
  },
  {
    districtId: "802",
    wardId: "27934",
    name: "Thị trấn Hiệp Hòa",
  },
  {
    districtId: "802",
    wardId: "27937",
    name: "Thị trấn Đức Hòa",
  },
  {
    districtId: "802",
    wardId: "27940",
    name: "Xã Lộc Giang",
  },
  {
    districtId: "802",
    wardId: "27943",
    name: "Xã An Ninh Đông",
  },
  {
    districtId: "802",
    wardId: "27946",
    name: "Xã An Ninh Tây",
  },
  {
    districtId: "802",
    wardId: "27949",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "802",
    wardId: "27952",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "802",
    wardId: "27955",
    name: "Xã Đức Lập Thượng",
  },
  {
    districtId: "802",
    wardId: "27958",
    name: "Xã Đức Lập Hạ",
  },
  {
    districtId: "802",
    wardId: "27961",
    name: "Xã Tân Phú",
  },
  {
    districtId: "802",
    wardId: "27964",
    name: "Xã Mỹ Hạnh Bắc",
  },
  {
    districtId: "802",
    wardId: "27967",
    name: "Xã Đức Hòa Thượng",
  },
  {
    districtId: "802",
    wardId: "27970",
    name: "Xã Hòa Khánh Tây",
  },
  {
    districtId: "802",
    wardId: "27973",
    name: "Xã Hòa Khánh Đông",
  },
  {
    districtId: "802",
    wardId: "27976",
    name: "Xã Mỹ Hạnh Nam",
  },
  {
    districtId: "802",
    wardId: "27979",
    name: "Xã Hòa Khánh Nam",
  },
  {
    districtId: "802",
    wardId: "27982",
    name: "Xã Đức Hòa Đông",
  },
  {
    districtId: "802",
    wardId: "27985",
    name: "Xã Đức Hòa Hạ",
  },
  {
    districtId: "802",
    wardId: "27988",
    name: "Xã Hựu Thạnh",
  },
  {
    districtId: "803",
    wardId: "27991",
    name: "Thị trấn Bến Lức",
  },
  {
    districtId: "803",
    wardId: "27994",
    name: "Xã Thạnh Lợi",
  },
  {
    districtId: "803",
    wardId: "27997",
    name: "Xã Lương Bình",
  },
  {
    districtId: "803",
    wardId: "28000",
    name: "Xã Thạnh Hòa",
  },
  {
    districtId: "803",
    wardId: "28003",
    name: "Xã Lương Hòa",
  },
  {
    districtId: "803",
    wardId: "28006",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "803",
    wardId: "28009",
    name: "Xã Tân Bửu",
  },
  {
    districtId: "803",
    wardId: "28012",
    name: "Xã An Thạnh",
  },
  {
    districtId: "803",
    wardId: "28015",
    name: "Xã Bình Đức",
  },
  {
    districtId: "803",
    wardId: "28018",
    name: "Xã Mỹ Yên",
  },
  {
    districtId: "803",
    wardId: "28021",
    name: "Xã Thanh Phú",
  },
  {
    districtId: "803",
    wardId: "28024",
    name: "Xã Long Hiệp",
  },
  {
    districtId: "803",
    wardId: "28027",
    name: "Xã Thạnh Đức",
  },
  {
    districtId: "803",
    wardId: "28030",
    name: "Xã Phước Lợi",
  },
  {
    districtId: "803",
    wardId: "28033",
    name: "Xã Nhựt Chánh",
  },
  {
    districtId: "804",
    wardId: "28036",
    name: "Thị trấn Thủ Thừa",
  },
  {
    districtId: "804",
    wardId: "28039",
    name: "Xã Long Thạnh",
  },
  {
    districtId: "804",
    wardId: "28042",
    name: "Xã Tân Thành",
  },
  {
    districtId: "804",
    wardId: "28045",
    name: "Xã Long Thuận",
  },
  {
    districtId: "804",
    wardId: "28048",
    name: "Xã Mỹ Lạc",
  },
  {
    districtId: "804",
    wardId: "28051",
    name: "Xã Mỹ Thạnh",
  },
  {
    districtId: "804",
    wardId: "28054",
    name: "Xã Bình An",
  },
  {
    districtId: "804",
    wardId: "28057",
    name: "Xã Nhị Thành",
  },
  {
    districtId: "804",
    wardId: "28060",
    name: "Xã Mỹ An",
  },
  {
    districtId: "804",
    wardId: "28063",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "804",
    wardId: "28066",
    name: "Xã Mỹ Phú",
  },
  {
    districtId: "804",
    wardId: "28072",
    name: "Xã Tân Long",
  },
  {
    districtId: "805",
    wardId: "28075",
    name: "Thị trấn Tân Trụ",
  },
  {
    districtId: "805",
    wardId: "28078",
    name: "Xã Tân Bình",
  },
  {
    districtId: "805",
    wardId: "28084",
    name: "Xã Quê Mỹ Thạnh",
  },
  {
    districtId: "805",
    wardId: "28087",
    name: "Xã Lạc Tấn",
  },
  {
    districtId: "805",
    wardId: "28090",
    name: "Xã Bình Trinh Đông",
  },
  {
    districtId: "805",
    wardId: "28093",
    name: "Xã Tân Phước Tây",
  },
  {
    districtId: "805",
    wardId: "28096",
    name: "Xã Bình Lãng",
  },
  {
    districtId: "805",
    wardId: "28099",
    name: "Xã Bình Tịnh",
  },
  {
    districtId: "805",
    wardId: "28102",
    name: "Xã Đức Tân",
  },
  {
    districtId: "805",
    wardId: "28105",
    name: "Xã Nhựt Ninh",
  },
  {
    districtId: "806",
    wardId: "28108",
    name: "Thị trấn Cần Đước",
  },
  {
    districtId: "806",
    wardId: "28111",
    name: "Xã Long Trạch",
  },
  {
    districtId: "806",
    wardId: "28114",
    name: "Xã Long Khê",
  },
  {
    districtId: "806",
    wardId: "28117",
    name: "Xã Long Định",
  },
  {
    districtId: "806",
    wardId: "28120",
    name: "Xã Phước Vân",
  },
  {
    districtId: "806",
    wardId: "28123",
    name: "Xã Long Hòa",
  },
  {
    districtId: "806",
    wardId: "28126",
    name: "Xã Long Cang",
  },
  {
    districtId: "806",
    wardId: "28129",
    name: "Xã Long Sơn",
  },
  {
    districtId: "806",
    wardId: "28132",
    name: "Xã Tân Trạch",
  },
  {
    districtId: "806",
    wardId: "28135",
    name: "Xã Mỹ Lệ",
  },
  {
    districtId: "806",
    wardId: "28138",
    name: "Xã Tân Lân",
  },
  {
    districtId: "806",
    wardId: "28141",
    name: "Xã Phước Tuy",
  },
  {
    districtId: "806",
    wardId: "28144",
    name: "Xã Long Hựu Đông",
  },
  {
    districtId: "806",
    wardId: "28147",
    name: "Xã Tân Ân",
  },
  {
    districtId: "806",
    wardId: "28150",
    name: "Xã Phước Đông",
  },
  {
    districtId: "806",
    wardId: "28153",
    name: "Xã Long Hựu Tây",
  },
  {
    districtId: "806",
    wardId: "28156",
    name: "Xã Tân Chánh",
  },
  {
    districtId: "807",
    wardId: "28159",
    name: "Thị trấn Cần Giuộc",
  },
  {
    districtId: "807",
    wardId: "28162",
    name: "Xã Phước Lý",
  },
  {
    districtId: "807",
    wardId: "28165",
    name: "Xã Long Thượng",
  },
  {
    districtId: "807",
    wardId: "28168",
    name: "Xã Long Hậu",
  },
  {
    districtId: "807",
    wardId: "28174",
    name: "Xã Phước Hậu",
  },
  {
    districtId: "807",
    wardId: "28177",
    name: "Xã Mỹ Lộc",
  },
  {
    districtId: "807",
    wardId: "28180",
    name: "Xã Phước Lại",
  },
  {
    districtId: "807",
    wardId: "28183",
    name: "Xã Phước Lâm",
  },
  {
    districtId: "807",
    wardId: "28189",
    name: "Xã Thuận Thành",
  },
  {
    districtId: "807",
    wardId: "28192",
    name: "Xã Phước Vĩnh Tây",
  },
  {
    districtId: "807",
    wardId: "28195",
    name: "Xã Phước Vĩnh Đông",
  },
  {
    districtId: "807",
    wardId: "28198",
    name: "Xã Long An",
  },
  {
    districtId: "807",
    wardId: "28201",
    name: "Xã Long Phụng",
  },
  {
    districtId: "807",
    wardId: "28204",
    name: "Xã Đông Thạnh",
  },
  {
    districtId: "807",
    wardId: "28207",
    name: "Xã Tân Tập",
  },
  {
    districtId: "808",
    wardId: "28210",
    name: "Thị trấn Tầm Vu",
  },
  {
    districtId: "808",
    wardId: "28213",
    name: "Xã Bình Quới",
  },
  {
    districtId: "808",
    wardId: "28216",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "808",
    wardId: "28219",
    name: "Xã Phú Ngãi Trị",
  },
  {
    districtId: "808",
    wardId: "28222",
    name: "Xã Vĩnh Công",
  },
  {
    districtId: "808",
    wardId: "28225",
    name: "Xã Thuận Mỹ",
  },
  {
    districtId: "808",
    wardId: "28228",
    name: "Xã Hiệp Thạnh",
  },
  {
    districtId: "808",
    wardId: "28231",
    name: "Xã Phước Tân Hưng",
  },
  {
    districtId: "808",
    wardId: "28234",
    name: "Xã Thanh Phú Long",
  },
  {
    districtId: "808",
    wardId: "28237",
    name: "Xã Dương Xuân Hội",
  },
  {
    districtId: "808",
    wardId: "28240",
    name: "Xã An Lục Long",
  },
  {
    districtId: "808",
    wardId: "28243",
    name: "Xã Long Trì",
  },
  {
    districtId: "808",
    wardId: "28246",
    name: "Xã Thanh Vĩnh Đông",
  },
  {
    districtId: "815",
    wardId: "28249",
    name: "Phường 5",
  },
  {
    districtId: "815",
    wardId: "28252",
    name: "Phường 4",
  },
  {
    districtId: "815",
    wardId: "28255",
    name: "Phường 7",
  },
  {
    districtId: "815",
    wardId: "28258",
    name: "Phường 3",
  },
  {
    districtId: "815",
    wardId: "28261",
    name: "Phường 1",
  },
  {
    districtId: "815",
    wardId: "28264",
    name: "Phường 2",
  },
  {
    districtId: "815",
    wardId: "28267",
    name: "Phường 8",
  },
  {
    districtId: "815",
    wardId: "28270",
    name: "Phường 6",
  },
  {
    districtId: "815",
    wardId: "28273",
    name: "Phường 9",
  },
  {
    districtId: "815",
    wardId: "28276",
    name: "Phường 10",
  },
  {
    districtId: "815",
    wardId: "28279",
    name: "Phường Tân Long",
  },
  {
    districtId: "815",
    wardId: "28282",
    name: "Xã Đạo Thạnh",
  },
  {
    districtId: "815",
    wardId: "28285",
    name: "Xã Trung An",
  },
  {
    districtId: "815",
    wardId: "28288",
    name: "Xã Mỹ Phong",
  },
  {
    districtId: "815",
    wardId: "28291",
    name: "Xã Tân Mỹ Chánh",
  },
  {
    districtId: "815",
    wardId: "28567",
    name: "Xã Phước Thạnh",
  },
  {
    districtId: "815",
    wardId: "28591",
    name: "Xã Thới Sơn",
  },
  {
    districtId: "816",
    wardId: "28294",
    name: "Phường 3",
  },
  {
    districtId: "816",
    wardId: "28297",
    name: "Phường 2",
  },
  {
    districtId: "816",
    wardId: "28300",
    name: "Phường 4",
  },
  {
    districtId: "816",
    wardId: "28303",
    name: "Phường 1",
  },
  {
    districtId: "816",
    wardId: "28306",
    name: "Phường 5",
  },
  {
    districtId: "816",
    wardId: "28309",
    name: "Xã Long Hưng",
  },
  {
    districtId: "816",
    wardId: "28312",
    name: "Xã Long Thuận",
  },
  {
    districtId: "816",
    wardId: "28315",
    name: "Xã Long Chánh",
  },
  {
    districtId: "816",
    wardId: "28318",
    name: "Xã Long Hòa",
  },
  {
    districtId: "816",
    wardId: "28708",
    name: "Xã Bình Đông",
  },
  {
    districtId: "816",
    wardId: "28717",
    name: "Xã Bình Xuân",
  },
  {
    districtId: "816",
    wardId: "28729",
    name: "Xã Tân Trung",
  },
  {
    districtId: "817",
    wardId: "28435",
    name: "Phường 1",
  },
  {
    districtId: "817",
    wardId: "28436",
    name: "Phường 2",
  },
  {
    districtId: "817",
    wardId: "28437",
    name: "Phường 3",
  },
  {
    districtId: "817",
    wardId: "28439",
    name: "Phường 4",
  },
  {
    districtId: "817",
    wardId: "28440",
    name: "Phường 5",
  },
  {
    districtId: "817",
    wardId: "28447",
    name: "Xã Mỹ Phước Tây",
  },
  {
    districtId: "817",
    wardId: "28450",
    name: "Xã Mỹ Hạnh Đông",
  },
  {
    districtId: "817",
    wardId: "28453",
    name: "Xã Mỹ Hạnh Trung",
  },
  {
    districtId: "817",
    wardId: "28459",
    name: "Xã Tân Phú",
  },
  {
    districtId: "817",
    wardId: "28462",
    name: "Xã Tân Bình",
  },
  {
    districtId: "817",
    wardId: "28468",
    name: "Xã Tân Hội",
  },
  {
    districtId: "817",
    wardId: "28474",
    name: "Phường Nhị Mỹ",
  },
  {
    districtId: "817",
    wardId: "28477",
    name: "Xã Nhị Quý",
  },
  {
    districtId: "817",
    wardId: "28480",
    name: "Xã Thanh Hòa",
  },
  {
    districtId: "817",
    wardId: "28483",
    name: "Xã Phú Quý",
  },
  {
    districtId: "817",
    wardId: "28486",
    name: "Xã Long Khánh",
  },
  {
    districtId: "818",
    wardId: "28321",
    name: "Thị trấn Mỹ Phước",
  },
  {
    districtId: "818",
    wardId: "28324",
    name: "Xã Tân Hòa Đông",
  },
  {
    districtId: "818",
    wardId: "28327",
    name: "Xã Thạnh Tân",
  },
  {
    districtId: "818",
    wardId: "28330",
    name: "Xã Thạnh Mỹ",
  },
  {
    districtId: "818",
    wardId: "28333",
    name: "Xã Thạnh Hoà",
  },
  {
    districtId: "818",
    wardId: "28336",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "818",
    wardId: "28339",
    name: "Xã Tân Hòa Thành",
  },
  {
    districtId: "818",
    wardId: "28342",
    name: "Xã Hưng Thạnh",
  },
  {
    districtId: "818",
    wardId: "28345",
    name: "Xã Tân Lập 1",
  },
  {
    districtId: "818",
    wardId: "28348",
    name: "Xã Tân Hòa Tây",
  },
  {
    districtId: "818",
    wardId: "28354",
    name: "Xã Tân Lập 2",
  },
  {
    districtId: "818",
    wardId: "28357",
    name: "Xã Phước Lập",
  },
  {
    districtId: "819",
    wardId: "28360",
    name: "Thị trấn Cái Bè",
  },
  {
    districtId: "819",
    wardId: "28363",
    name: "Xã Hậu Mỹ Bắc B",
  },
  {
    districtId: "819",
    wardId: "28366",
    name: "Xã Hậu Mỹ Bắc A",
  },
  {
    districtId: "819",
    wardId: "28369",
    name: "Xã Mỹ Trung",
  },
  {
    districtId: "819",
    wardId: "28372",
    name: "Xã Hậu Mỹ Trinh",
  },
  {
    districtId: "819",
    wardId: "28375",
    name: "Xã Hậu Mỹ Phú",
  },
  {
    districtId: "819",
    wardId: "28378",
    name: "Xã Mỹ Tân",
  },
  {
    districtId: "819",
    wardId: "28381",
    name: "Xã Mỹ Lợi B",
  },
  {
    districtId: "819",
    wardId: "28384",
    name: "Xã Thiện Trung",
  },
  {
    districtId: "819",
    wardId: "28387",
    name: "Xã Mỹ Hội",
  },
  {
    districtId: "819",
    wardId: "28390",
    name: "Xã An Cư",
  },
  {
    districtId: "819",
    wardId: "28393",
    name: "Xã Hậu Thành",
  },
  {
    districtId: "819",
    wardId: "28396",
    name: "Xã Mỹ Lợi A",
  },
  {
    districtId: "819",
    wardId: "28399",
    name: "Xã Hòa Khánh",
  },
  {
    districtId: "819",
    wardId: "28402",
    name: "Xã Thiện Trí",
  },
  {
    districtId: "819",
    wardId: "28405",
    name: "Xã Mỹ Đức Đông",
  },
  {
    districtId: "819",
    wardId: "28408",
    name: "Xã Mỹ Đức Tây",
  },
  {
    districtId: "819",
    wardId: "28411",
    name: "Xã Đông Hòa Hiệp",
  },
  {
    districtId: "819",
    wardId: "28414",
    name: "Xã An Thái Đông",
  },
  {
    districtId: "819",
    wardId: "28417",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "819",
    wardId: "28420",
    name: "Xã Mỹ Lương",
  },
  {
    districtId: "819",
    wardId: "28423",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "819",
    wardId: "28426",
    name: "Xã An Thái Trung",
  },
  {
    districtId: "819",
    wardId: "28429",
    name: "Xã An Hữu",
  },
  {
    districtId: "819",
    wardId: "28432",
    name: "Xã Hòa Hưng",
  },
  {
    districtId: "820",
    wardId: "28438",
    name: "Xã Thạnh Lộc",
  },
  {
    districtId: "820",
    wardId: "28441",
    name: "Xã Mỹ Thành Bắc",
  },
  {
    districtId: "820",
    wardId: "28444",
    name: "Xã Phú Cường",
  },
  {
    districtId: "820",
    wardId: "28456",
    name: "Xã Mỹ Thành Nam",
  },
  {
    districtId: "820",
    wardId: "28465",
    name: "Xã Phú Nhuận",
  },
  {
    districtId: "820",
    wardId: "28471",
    name: "Xã Bình Phú",
  },
  {
    districtId: "820",
    wardId: "28489",
    name: "Xã Cẩm Sơn",
  },
  {
    districtId: "820",
    wardId: "28492",
    name: "Xã Phú An",
  },
  {
    districtId: "820",
    wardId: "28495",
    name: "Xã Mỹ Long",
  },
  {
    districtId: "820",
    wardId: "28498",
    name: "Xã Long Tiên",
  },
  {
    districtId: "820",
    wardId: "28501",
    name: "Xã Hiệp Đức",
  },
  {
    districtId: "820",
    wardId: "28504",
    name: "Xã Long Trung",
  },
  {
    districtId: "820",
    wardId: "28507",
    name: "Xã Hội Xuân",
  },
  {
    districtId: "820",
    wardId: "28510",
    name: "Xã Tân Phong",
  },
  {
    districtId: "820",
    wardId: "28513",
    name: "Xã Tam Bình",
  },
  {
    districtId: "820",
    wardId: "28516",
    name: "Xã Ngũ Hiệp",
  },
  {
    districtId: "821",
    wardId: "28519",
    name: "Thị trấn Tân Hiệp",
  },
  {
    districtId: "821",
    wardId: "28522",
    name: "Xã Tân Hội Đông",
  },
  {
    districtId: "821",
    wardId: "28525",
    name: "Xã Tân Hương",
  },
  {
    districtId: "821",
    wardId: "28528",
    name: "Xã Tân Lý Đông",
  },
  {
    districtId: "821",
    wardId: "28531",
    name: "Xã Tân Lý Tây",
  },
  {
    districtId: "821",
    wardId: "28534",
    name: "Xã Thân Cửu Nghĩa",
  },
  {
    districtId: "821",
    wardId: "28537",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "821",
    wardId: "28540",
    name: "Xã Điềm Hy",
  },
  {
    districtId: "821",
    wardId: "28543",
    name: "Xã Nhị Bình",
  },
  {
    districtId: "821",
    wardId: "28546",
    name: "Xã Dưỡng Điềm",
  },
  {
    districtId: "821",
    wardId: "28549",
    name: "Xã Đông Hòa",
  },
  {
    districtId: "821",
    wardId: "28552",
    name: "Xã Long Định",
  },
  {
    districtId: "821",
    wardId: "28555",
    name: "Xã Hữu Đạo",
  },
  {
    districtId: "821",
    wardId: "28558",
    name: "Xã Long An",
  },
  {
    districtId: "821",
    wardId: "28561",
    name: "Xã Long Hưng",
  },
  {
    districtId: "821",
    wardId: "28564",
    name: "Xã Bình Trưng",
  },
  {
    districtId: "821",
    wardId: "28570",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "821",
    wardId: "28573",
    name: "Xã Bàn Long",
  },
  {
    districtId: "821",
    wardId: "28576",
    name: "Xã Vĩnh Kim",
  },
  {
    districtId: "821",
    wardId: "28579",
    name: "Xã Bình Đức",
  },
  {
    districtId: "821",
    wardId: "28582",
    name: "Xã Song Thuận",
  },
  {
    districtId: "821",
    wardId: "28585",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "821",
    wardId: "28588",
    name: "Xã Phú Phong",
  },
  {
    districtId: "822",
    wardId: "28594",
    name: "Thị trấn Chợ Gạo",
  },
  {
    districtId: "822",
    wardId: "28597",
    name: "Xã Trung Hòa",
  },
  {
    districtId: "822",
    wardId: "28600",
    name: "Xã Hòa Tịnh",
  },
  {
    districtId: "822",
    wardId: "28603",
    name: "Xã Mỹ Tịnh An",
  },
  {
    districtId: "822",
    wardId: "28606",
    name: "Xã Tân Bình Thạnh",
  },
  {
    districtId: "822",
    wardId: "28609",
    name: "Xã Phú Kiết",
  },
  {
    districtId: "822",
    wardId: "28612",
    name: "Xã Lương Hòa Lạc",
  },
  {
    districtId: "822",
    wardId: "28615",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "822",
    wardId: "28618",
    name: "Xã Quơn Long",
  },
  {
    districtId: "822",
    wardId: "28621",
    name: "Xã Bình Phục Nhứt",
  },
  {
    districtId: "822",
    wardId: "28624",
    name: "Xã Đăng Hưng Phước",
  },
  {
    districtId: "822",
    wardId: "28627",
    name: "Xã Tân Thuận Bình",
  },
  {
    districtId: "822",
    wardId: "28630",
    name: "Xã Song Bình",
  },
  {
    districtId: "822",
    wardId: "28633",
    name: "Xã Bình Phan",
  },
  {
    districtId: "822",
    wardId: "28636",
    name: "Xã Long Bình Điền",
  },
  {
    districtId: "822",
    wardId: "28639",
    name: "Xã An Thạnh Thủy",
  },
  {
    districtId: "822",
    wardId: "28642",
    name: "Xã Xuân Đông",
  },
  {
    districtId: "822",
    wardId: "28645",
    name: "Xã Hòa Định",
  },
  {
    districtId: "822",
    wardId: "28648",
    name: "Xã Bình Ninh",
  },
  {
    districtId: "823",
    wardId: "28651",
    name: "Thị trấn Vĩnh Bình",
  },
  {
    districtId: "823",
    wardId: "28654",
    name: "Xã Đồng Sơn",
  },
  {
    districtId: "823",
    wardId: "28657",
    name: "Xã Bình Phú",
  },
  {
    districtId: "823",
    wardId: "28660",
    name: "Xã Đồng Thạnh",
  },
  {
    districtId: "823",
    wardId: "28663",
    name: "Xã Thành Công",
  },
  {
    districtId: "823",
    wardId: "28666",
    name: "Xã Bình Nhì",
  },
  {
    districtId: "823",
    wardId: "28669",
    name: "Xã Yên Luông",
  },
  {
    districtId: "823",
    wardId: "28672",
    name: "Xã Thạnh Trị",
  },
  {
    districtId: "823",
    wardId: "28675",
    name: "Xã Thạnh Nhựt",
  },
  {
    districtId: "823",
    wardId: "28678",
    name: "Xã Long Vĩnh",
  },
  {
    districtId: "823",
    wardId: "28681",
    name: "Xã Bình Tân",
  },
  {
    districtId: "823",
    wardId: "28684",
    name: "Xã Vĩnh Hựu",
  },
  {
    districtId: "823",
    wardId: "28687",
    name: "Xã Long Bình",
  },
  {
    districtId: "824",
    wardId: "28702",
    name: "Thị trấn Tân Hòa",
  },
  {
    districtId: "824",
    wardId: "28705",
    name: "Xã Tăng Hoà",
  },
  {
    districtId: "824",
    wardId: "28711",
    name: "Xã Tân Phước",
  },
  {
    districtId: "824",
    wardId: "28714",
    name: "Xã Gia Thuận",
  },
  {
    districtId: "824",
    wardId: "28720",
    name: "Thị trấn Vàm Láng",
  },
  {
    districtId: "824",
    wardId: "28723",
    name: "Xã Tân Tây",
  },
  {
    districtId: "824",
    wardId: "28726",
    name: "Xã Kiểng Phước",
  },
  {
    districtId: "824",
    wardId: "28732",
    name: "Xã Tân Đông",
  },
  {
    districtId: "824",
    wardId: "28735",
    name: "Xã Bình Ân",
  },
  {
    districtId: "824",
    wardId: "28738",
    name: "Xã Tân Điền",
  },
  {
    districtId: "824",
    wardId: "28741",
    name: "Xã Bình Nghị",
  },
  {
    districtId: "824",
    wardId: "28744",
    name: "Xã Phước Trung",
  },
  {
    districtId: "824",
    wardId: "28747",
    name: "Xã Tân Thành",
  },
  {
    districtId: "825",
    wardId: "28690",
    name: "Xã Tân Thới",
  },
  {
    districtId: "825",
    wardId: "28693",
    name: "Xã Tân Phú",
  },
  {
    districtId: "825",
    wardId: "28696",
    name: "Xã Phú Thạnh",
  },
  {
    districtId: "825",
    wardId: "28699",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "825",
    wardId: "28750",
    name: "Xã Phú Đông",
  },
  {
    districtId: "825",
    wardId: "28753",
    name: "Xã Phú Tân",
  },
  {
    districtId: "829",
    wardId: "28756",
    name: "Phường Phú Khương",
  },
  {
    districtId: "829",
    wardId: "28757",
    name: "Phường Phú Tân",
  },
  {
    districtId: "829",
    wardId: "28759",
    name: "Phường 8",
  },
  {
    districtId: "829",
    wardId: "28762",
    name: "Phường 6",
  },
  {
    districtId: "829",
    wardId: "28765",
    name: "Phường 4",
  },
  {
    districtId: "829",
    wardId: "28768",
    name: "Phường 5",
  },
  {
    districtId: "829",
    wardId: "28777",
    name: "Phường An Hội",
  },
  {
    districtId: "829",
    wardId: "28780",
    name: "Phường 7",
  },
  {
    districtId: "829",
    wardId: "28783",
    name: "Xã Sơn Đông",
  },
  {
    districtId: "829",
    wardId: "28786",
    name: "Xã Phú Hưng",
  },
  {
    districtId: "829",
    wardId: "28789",
    name: "Xã Bình Phú",
  },
  {
    districtId: "829",
    wardId: "28792",
    name: "Xã Mỹ Thạnh An",
  },
  {
    districtId: "829",
    wardId: "28795",
    name: "Xã Nhơn Thạnh",
  },
  {
    districtId: "829",
    wardId: "28798",
    name: "Xã Phú Nhuận",
  },
  {
    districtId: "831",
    wardId: "28801",
    name: "Thị trấn Châu Thành",
  },
  {
    districtId: "831",
    wardId: "28804",
    name: "Xã Tân Thạch",
  },
  {
    districtId: "831",
    wardId: "28807",
    name: "Xã Qưới Sơn",
  },
  {
    districtId: "831",
    wardId: "28810",
    name: "Xã An Khánh",
  },
  {
    districtId: "831",
    wardId: "28813",
    name: "Xã Giao Long",
  },
  {
    districtId: "831",
    wardId: "28819",
    name: "Xã Phú Túc",
  },
  {
    districtId: "831",
    wardId: "28822",
    name: "Xã Phú Đức",
  },
  {
    districtId: "831",
    wardId: "28825",
    name: "Xã Phú An Hòa",
  },
  {
    districtId: "831",
    wardId: "28828",
    name: "Xã An Phước",
  },
  {
    districtId: "831",
    wardId: "28831",
    name: "Xã Tam Phước",
  },
  {
    districtId: "831",
    wardId: "28834",
    name: "Xã Thành Triệu",
  },
  {
    districtId: "831",
    wardId: "28837",
    name: "Xã Tường Đa",
  },
  {
    districtId: "831",
    wardId: "28840",
    name: "Xã Tân Phú",
  },
  {
    districtId: "831",
    wardId: "28843",
    name: "Xã Quới Thành",
  },
  {
    districtId: "831",
    wardId: "28846",
    name: "Xã Phước Thạnh",
  },
  {
    districtId: "831",
    wardId: "28849",
    name: "Xã An Hóa",
  },
  {
    districtId: "831",
    wardId: "28852",
    name: "Xã Tiên Long",
  },
  {
    districtId: "831",
    wardId: "28855",
    name: "Xã An Hiệp",
  },
  {
    districtId: "831",
    wardId: "28858",
    name: "Xã Hữu Định",
  },
  {
    districtId: "831",
    wardId: "28861",
    name: "Xã Tiên Thủy",
  },
  {
    districtId: "831",
    wardId: "28864",
    name: "Xã Sơn Hòa",
  },
  {
    districtId: "832",
    wardId: "28870",
    name: "Thị trấn Chợ Lách",
  },
  {
    districtId: "832",
    wardId: "28873",
    name: "Xã Phú Phụng",
  },
  {
    districtId: "832",
    wardId: "28876",
    name: "Xã Sơn Định",
  },
  {
    districtId: "832",
    wardId: "28879",
    name: "Xã Vĩnh Bình",
  },
  {
    districtId: "832",
    wardId: "28882",
    name: "Xã Hòa Nghĩa",
  },
  {
    districtId: "832",
    wardId: "28885",
    name: "Xã Long Thới",
  },
  {
    districtId: "832",
    wardId: "28888",
    name: "Xã Phú Sơn",
  },
  {
    districtId: "832",
    wardId: "28891",
    name: "Xã Tân Thiềng",
  },
  {
    districtId: "832",
    wardId: "28894",
    name: "Xã Vĩnh Thành",
  },
  {
    districtId: "832",
    wardId: "28897",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "832",
    wardId: "28900",
    name: "Xã Hưng Khánh Trung B",
  },
  {
    districtId: "833",
    wardId: "28903",
    name: "Thị trấn Mỏ Cày",
  },
  {
    districtId: "833",
    wardId: "28930",
    name: "Xã Định Thủy",
  },
  {
    districtId: "833",
    wardId: "28939",
    name: "Xã Đa Phước Hội",
  },
  {
    districtId: "833",
    wardId: "28940",
    name: "Xã Tân Hội",
  },
  {
    districtId: "833",
    wardId: "28942",
    name: "Xã Phước Hiệp",
  },
  {
    districtId: "833",
    wardId: "28945",
    name: "Xã Bình Khánh ",
  },
  {
    districtId: "833",
    wardId: "28951",
    name: "Xã An Thạnh",
  },
  {
    districtId: "833",
    wardId: "28957",
    name: "Xã An Định",
  },
  {
    districtId: "833",
    wardId: "28960",
    name: "Xã Thành Thới B",
  },
  {
    districtId: "833",
    wardId: "28963",
    name: "Xã Tân Trung",
  },
  {
    districtId: "833",
    wardId: "28966",
    name: "Xã An Thới",
  },
  {
    districtId: "833",
    wardId: "28969",
    name: "Xã Thành Thới A",
  },
  {
    districtId: "833",
    wardId: "28972",
    name: "Xã Minh Đức",
  },
  {
    districtId: "833",
    wardId: "28975",
    name: "Xã Ngãi Đăng",
  },
  {
    districtId: "833",
    wardId: "28978",
    name: "Xã Cẩm Sơn",
  },
  {
    districtId: "833",
    wardId: "28981",
    name: "Xã Hương Mỹ",
  },
  {
    districtId: "834",
    wardId: "28984",
    name: "Thị trấn Giồng Trôm",
  },
  {
    districtId: "834",
    wardId: "28987",
    name: "Xã Phong Nẫm",
  },
  {
    districtId: "834",
    wardId: "28993",
    name: "Xã Mỹ Thạnh",
  },
  {
    districtId: "834",
    wardId: "28996",
    name: "Xã Châu Hòa",
  },
  {
    districtId: "834",
    wardId: "28999",
    name: "Xã Lương Hòa",
  },
  {
    districtId: "834",
    wardId: "29002",
    name: "Xã Lương Quới",
  },
  {
    districtId: "834",
    wardId: "29005",
    name: "Xã Lương Phú",
  },
  {
    districtId: "834",
    wardId: "29008",
    name: "Xã Châu Bình",
  },
  {
    districtId: "834",
    wardId: "29011",
    name: "Xã Thuận Điền",
  },
  {
    districtId: "834",
    wardId: "29014",
    name: "Xã Sơn Phú",
  },
  {
    districtId: "834",
    wardId: "29017",
    name: "Xã Bình Hoà",
  },
  {
    districtId: "834",
    wardId: "29020",
    name: "Xã Phước Long",
  },
  {
    districtId: "834",
    wardId: "29023",
    name: "Xã Hưng Phong",
  },
  {
    districtId: "834",
    wardId: "29026",
    name: "Xã Long Mỹ",
  },
  {
    districtId: "834",
    wardId: "29029",
    name: "Xã Tân Hào",
  },
  {
    districtId: "834",
    wardId: "29032",
    name: "Xã Bình Thành",
  },
  {
    districtId: "834",
    wardId: "29035",
    name: "Xã Tân Thanh",
  },
  {
    districtId: "834",
    wardId: "29038",
    name: "Xã Tân Lợi Thạnh",
  },
  {
    districtId: "834",
    wardId: "29041",
    name: "Xã Thạnh Phú Đông",
  },
  {
    districtId: "834",
    wardId: "29044",
    name: "Xã Hưng Nhượng",
  },
  {
    districtId: "834",
    wardId: "29047",
    name: "Xã Hưng Lễ",
  },
  {
    districtId: "835",
    wardId: "29050",
    name: "Thị trấn Bình Đại",
  },
  {
    districtId: "835",
    wardId: "29053",
    name: "Xã Tam Hiệp",
  },
  {
    districtId: "835",
    wardId: "29056",
    name: "Xã Long Định",
  },
  {
    districtId: "835",
    wardId: "29059",
    name: "Xã Long Hòa",
  },
  {
    districtId: "835",
    wardId: "29062",
    name: "Xã Phú Thuận",
  },
  {
    districtId: "835",
    wardId: "29065",
    name: "Xã Vang Quới Tây",
  },
  {
    districtId: "835",
    wardId: "29068",
    name: "Xã Vang Quới Đông",
  },
  {
    districtId: "835",
    wardId: "29071",
    name: "Xã Châu Hưng",
  },
  {
    districtId: "835",
    wardId: "29074",
    name: "Xã Phú Vang",
  },
  {
    districtId: "835",
    wardId: "29077",
    name: "Xã Lộc Thuận",
  },
  {
    districtId: "835",
    wardId: "29080",
    name: "Xã Định Trung",
  },
  {
    districtId: "835",
    wardId: "29083",
    name: "Xã Thới Lai",
  },
  {
    districtId: "835",
    wardId: "29086",
    name: "Xã Bình Thới",
  },
  {
    districtId: "835",
    wardId: "29089",
    name: "Xã Phú Long",
  },
  {
    districtId: "835",
    wardId: "29092",
    name: "Xã Bình Thắng",
  },
  {
    districtId: "835",
    wardId: "29095",
    name: "Xã Thạnh Trị",
  },
  {
    districtId: "835",
    wardId: "29098",
    name: "Xã Đại Hòa Lộc",
  },
  {
    districtId: "835",
    wardId: "29101",
    name: "Xã Thừa Đức",
  },
  {
    districtId: "835",
    wardId: "29104",
    name: "Xã Thạnh Phước",
  },
  {
    districtId: "835",
    wardId: "29107",
    name: "Xã Thới Thuận",
  },
  {
    districtId: "836",
    wardId: "29110",
    name: "Thị trấn Ba Tri",
  },
  {
    districtId: "836",
    wardId: "29113",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "836",
    wardId: "29116",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "836",
    wardId: "29119",
    name: "Xã Tân Xuân",
  },
  {
    districtId: "836",
    wardId: "29122",
    name: "Xã Mỹ Chánh",
  },
  {
    districtId: "836",
    wardId: "29125",
    name: "Xã Bảo Thạnh",
  },
  {
    districtId: "836",
    wardId: "29128",
    name: "Xã An Phú Trung",
  },
  {
    districtId: "836",
    wardId: "29131",
    name: "Xã Mỹ Thạnh",
  },
  {
    districtId: "836",
    wardId: "29134",
    name: "Xã Mỹ Nhơn",
  },
  {
    districtId: "836",
    wardId: "29137",
    name: "Xã Phước Ngãi",
  },
  {
    districtId: "836",
    wardId: "29143",
    name: "Xã An Ngãi Trung",
  },
  {
    districtId: "836",
    wardId: "29146",
    name: "Xã Phú Lễ",
  },
  {
    districtId: "836",
    wardId: "29149",
    name: "Xã An Bình Tây",
  },
  {
    districtId: "836",
    wardId: "29152",
    name: "Xã Bảo Thuận",
  },
  {
    districtId: "836",
    wardId: "29155",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "836",
    wardId: "29158",
    name: "Xã An Ngãi Tây",
  },
  {
    districtId: "836",
    wardId: "29161",
    name: "Xã An Hiệp",
  },
  {
    districtId: "836",
    wardId: "29164",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "836",
    wardId: "29167",
    name: "Xã Tân Thủy",
  },
  {
    districtId: "836",
    wardId: "29170",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "836",
    wardId: "29173",
    name: "Xã An Đức",
  },
  {
    districtId: "836",
    wardId: "29176",
    name: "Xã An Hòa Tây",
  },
  {
    districtId: "836",
    wardId: "29179",
    name: "Xã An Thủy",
  },
  {
    districtId: "837",
    wardId: "29182",
    name: "Thị trấn Thạnh Phú",
  },
  {
    districtId: "837",
    wardId: "29185",
    name: "Xã Phú Khánh",
  },
  {
    districtId: "837",
    wardId: "29188",
    name: "Xã Đại Điền",
  },
  {
    districtId: "837",
    wardId: "29191",
    name: "Xã Quới Điền",
  },
  {
    districtId: "837",
    wardId: "29194",
    name: "Xã Tân Phong",
  },
  {
    districtId: "837",
    wardId: "29197",
    name: "Xã Mỹ Hưng",
  },
  {
    districtId: "837",
    wardId: "29200",
    name: "Xã An Thạnh",
  },
  {
    districtId: "837",
    wardId: "29203",
    name: "Xã Thới Thạnh",
  },
  {
    districtId: "837",
    wardId: "29206",
    name: "Xã Hòa Lợi",
  },
  {
    districtId: "837",
    wardId: "29209",
    name: "Xã An Điền",
  },
  {
    districtId: "837",
    wardId: "29212",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "837",
    wardId: "29215",
    name: "Xã An Thuận",
  },
  {
    districtId: "837",
    wardId: "29218",
    name: "Xã An Quy",
  },
  {
    districtId: "837",
    wardId: "29221",
    name: "Xã Thạnh Hải",
  },
  {
    districtId: "837",
    wardId: "29224",
    name: "Xã An Nhơn",
  },
  {
    districtId: "837",
    wardId: "29227",
    name: "Xã Giao Thạnh",
  },
  {
    districtId: "837",
    wardId: "29230",
    name: "Xã Thạnh Phong",
  },
  {
    districtId: "837",
    wardId: "29233",
    name: "Xã Mỹ An",
  },
  {
    districtId: "838",
    wardId: "28889",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "838",
    wardId: "28901",
    name: "Xã Hưng Khánh Trung A",
  },
  {
    districtId: "838",
    wardId: "28906",
    name: "Xã Thanh Tân",
  },
  {
    districtId: "838",
    wardId: "28909",
    name: "Xã Thạnh Ngãi",
  },
  {
    districtId: "838",
    wardId: "28912",
    name: "Xã Tân Phú Tây",
  },
  {
    districtId: "838",
    wardId: "28915",
    name: "Xã Phước Mỹ Trung",
  },
  {
    districtId: "838",
    wardId: "28918",
    name: "Xã Tân Thành Bình",
  },
  {
    districtId: "838",
    wardId: "28921",
    name: "Xã Thành An",
  },
  {
    districtId: "838",
    wardId: "28924",
    name: "Xã Hòa Lộc",
  },
  {
    districtId: "838",
    wardId: "28927",
    name: "Xã Tân Thanh Tây",
  },
  {
    districtId: "838",
    wardId: "28933",
    name: "Xã Tân Bình",
  },
  {
    districtId: "838",
    wardId: "28936",
    name: "Xã Nhuận Phú Tân",
  },
  {
    districtId: "838",
    wardId: "28948",
    name: "Xã Khánh Thạnh Tân",
  },
  {
    districtId: "842",
    wardId: "29236",
    name: "Phường 4",
  },
  {
    districtId: "842",
    wardId: "29239",
    name: "Phường 1",
  },
  {
    districtId: "842",
    wardId: "29242",
    name: "Phường 3",
  },
  {
    districtId: "842",
    wardId: "29245",
    name: "Phường 2",
  },
  {
    districtId: "842",
    wardId: "29248",
    name: "Phường 5",
  },
  {
    districtId: "842",
    wardId: "29251",
    name: "Phường 6",
  },
  {
    districtId: "842",
    wardId: "29254",
    name: "Phường 7",
  },
  {
    districtId: "842",
    wardId: "29257",
    name: "Phường 8",
  },
  {
    districtId: "842",
    wardId: "29260",
    name: "Phường 9",
  },
  {
    districtId: "842",
    wardId: "29263",
    name: "Xã Long Đức",
  },
  {
    districtId: "844",
    wardId: "29266",
    name: "Thị trấn Càng Long",
  },
  {
    districtId: "844",
    wardId: "29269",
    name: "Xã Mỹ Cẩm",
  },
  {
    districtId: "844",
    wardId: "29272",
    name: "Xã An Trường A",
  },
  {
    districtId: "844",
    wardId: "29275",
    name: "Xã An Trường",
  },
  {
    districtId: "844",
    wardId: "29278",
    name: "Xã Huyền Hội",
  },
  {
    districtId: "844",
    wardId: "29281",
    name: "Xã Tân An",
  },
  {
    districtId: "844",
    wardId: "29284",
    name: "Xã Tân Bình",
  },
  {
    districtId: "844",
    wardId: "29287",
    name: "Xã Bình Phú",
  },
  {
    districtId: "844",
    wardId: "29290",
    name: "Xã Phương Thạnh",
  },
  {
    districtId: "844",
    wardId: "29293",
    name: "Xã Đại Phúc",
  },
  {
    districtId: "844",
    wardId: "29296",
    name: "Xã Đại Phước",
  },
  {
    districtId: "844",
    wardId: "29299",
    name: "Xã Nhị Long Phú",
  },
  {
    districtId: "844",
    wardId: "29302",
    name: "Xã Nhị Long",
  },
  {
    districtId: "844",
    wardId: "29305",
    name: "Xã Đức Mỹ",
  },
  {
    districtId: "845",
    wardId: "29308",
    name: "Thị trấn Cầu Kè",
  },
  {
    districtId: "845",
    wardId: "29311",
    name: "Xã Hòa Ân",
  },
  {
    districtId: "845",
    wardId: "29314",
    name: "Xã Châu Điền",
  },
  {
    districtId: "845",
    wardId: "29317",
    name: "Xã An Phú Tân",
  },
  {
    districtId: "845",
    wardId: "29320",
    name: "Xã Hoà Tân",
  },
  {
    districtId: "845",
    wardId: "29323",
    name: "Xã Ninh Thới",
  },
  {
    districtId: "845",
    wardId: "29326",
    name: "Xã Phong Phú",
  },
  {
    districtId: "845",
    wardId: "29329",
    name: "Xã Phong Thạnh",
  },
  {
    districtId: "845",
    wardId: "29332",
    name: "Xã Tam Ngãi",
  },
  {
    districtId: "845",
    wardId: "29335",
    name: "Xã Thông Hòa",
  },
  {
    districtId: "845",
    wardId: "29338",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "846",
    wardId: "29341",
    name: "Thị trấn Tiểu Cần",
  },
  {
    districtId: "846",
    wardId: "29344",
    name: "Thị trấn Cầu Quan",
  },
  {
    districtId: "846",
    wardId: "29347",
    name: "Xã Phú Cần",
  },
  {
    districtId: "846",
    wardId: "29350",
    name: "Xã Hiếu Tử",
  },
  {
    districtId: "846",
    wardId: "29353",
    name: "Xã Hiếu Trung",
  },
  {
    districtId: "846",
    wardId: "29356",
    name: "Xã Long Thới",
  },
  {
    districtId: "846",
    wardId: "29359",
    name: "Xã Hùng Hòa",
  },
  {
    districtId: "846",
    wardId: "29362",
    name: "Xã Tân Hùng",
  },
  {
    districtId: "846",
    wardId: "29365",
    name: "Xã Tập Ngãi",
  },
  {
    districtId: "846",
    wardId: "29368",
    name: "Xã Ngãi Hùng",
  },
  {
    districtId: "846",
    wardId: "29371",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "847",
    wardId: "29374",
    name: "Thị trấn Châu Thành",
  },
  {
    districtId: "847",
    wardId: "29377",
    name: "Xã Đa Lộc",
  },
  {
    districtId: "847",
    wardId: "29380",
    name: "Xã Mỹ Chánh",
  },
  {
    districtId: "847",
    wardId: "29383",
    name: "Xã Thanh Mỹ",
  },
  {
    districtId: "847",
    wardId: "29386",
    name: "Xã Lương Hoà A",
  },
  {
    districtId: "847",
    wardId: "29389",
    name: "Xã Lương Hòa",
  },
  {
    districtId: "847",
    wardId: "29392",
    name: "Xã Song Lộc",
  },
  {
    districtId: "847",
    wardId: "29395",
    name: "Xã Nguyệt Hóa",
  },
  {
    districtId: "847",
    wardId: "29398",
    name: "Xã Hòa Thuận",
  },
  {
    districtId: "847",
    wardId: "29401",
    name: "Xã Hòa Lợi",
  },
  {
    districtId: "847",
    wardId: "29404",
    name: "Xã Phước Hảo",
  },
  {
    districtId: "847",
    wardId: "29407",
    name: "Xã Hưng Mỹ",
  },
  {
    districtId: "847",
    wardId: "29410",
    name: "Xã Hòa Minh",
  },
  {
    districtId: "847",
    wardId: "29413",
    name: "Xã Long Hòa",
  },
  {
    districtId: "848",
    wardId: "29416",
    name: "Thị trấn Cầu Ngang",
  },
  {
    districtId: "848",
    wardId: "29419",
    name: "Thị trấn Mỹ Long",
  },
  {
    districtId: "848",
    wardId: "29422",
    name: "Xã Mỹ Long Bắc",
  },
  {
    districtId: "848",
    wardId: "29425",
    name: "Xã Mỹ Long Nam",
  },
  {
    districtId: "848",
    wardId: "29428",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "848",
    wardId: "29431",
    name: "Xã Vĩnh Kim",
  },
  {
    districtId: "848",
    wardId: "29434",
    name: "Xã Kim Hòa",
  },
  {
    districtId: "848",
    wardId: "29437",
    name: "Xã Hiệp Hòa",
  },
  {
    districtId: "848",
    wardId: "29440",
    name: "Xã Thuận Hòa",
  },
  {
    districtId: "848",
    wardId: "29443",
    name: "Xã Long Sơn",
  },
  {
    districtId: "848",
    wardId: "29446",
    name: "Xã Nhị Trường",
  },
  {
    districtId: "848",
    wardId: "29449",
    name: "Xã Trường Thọ",
  },
  {
    districtId: "848",
    wardId: "29452",
    name: "Xã Hiệp Mỹ Đông",
  },
  {
    districtId: "848",
    wardId: "29455",
    name: "Xã Hiệp Mỹ Tây",
  },
  {
    districtId: "848",
    wardId: "29458",
    name: "Xã Thạnh Hòa Sơn",
  },
  {
    districtId: "849",
    wardId: "29461",
    name: "Thị trấn Trà Cú",
  },
  {
    districtId: "849",
    wardId: "29462",
    name: "Thị trấn Định An",
  },
  {
    districtId: "849",
    wardId: "29464",
    name: "Xã Phước Hưng",
  },
  {
    districtId: "849",
    wardId: "29467",
    name: "Xã Tập Sơn",
  },
  {
    districtId: "849",
    wardId: "29470",
    name: "Xã Tân Sơn",
  },
  {
    districtId: "849",
    wardId: "29473",
    name: "Xã An Quảng Hữu",
  },
  {
    districtId: "849",
    wardId: "29476",
    name: "Xã Lưu Nghiệp Anh",
  },
  {
    districtId: "849",
    wardId: "29479",
    name: "Xã Ngãi Xuyên",
  },
  {
    districtId: "849",
    wardId: "29482",
    name: "Xã Kim Sơn",
  },
  {
    districtId: "849",
    wardId: "29485",
    name: "Xã Thanh Sơn",
  },
  {
    districtId: "849",
    wardId: "29488",
    name: "Xã Hàm Giang",
  },
  {
    districtId: "849",
    wardId: "29489",
    name: "Xã Hàm Tân",
  },
  {
    districtId: "849",
    wardId: "29491",
    name: "Xã Đại An",
  },
  {
    districtId: "849",
    wardId: "29494",
    name: "Xã Định An",
  },
  {
    districtId: "849",
    wardId: "29503",
    name: "Xã Ngọc Biên",
  },
  {
    districtId: "849",
    wardId: "29506",
    name: "Xã Long Hiệp",
  },
  {
    districtId: "849",
    wardId: "29509",
    name: "Xã Tân Hiệp",
  },
  {
    districtId: "850",
    wardId: "29497",
    name: "Xã Đôn Xuân",
  },
  {
    districtId: "850",
    wardId: "29500",
    name: "Xã Đôn Châu",
  },
  {
    districtId: "850",
    wardId: "29513",
    name: "Thị trấn Long Thành",
  },
  {
    districtId: "850",
    wardId: "29521",
    name: "Xã Long Khánh",
  },
  {
    districtId: "850",
    wardId: "29530",
    name: "Xã Ngũ Lạc",
  },
  {
    districtId: "850",
    wardId: "29533",
    name: "Xã Long Vĩnh",
  },
  {
    districtId: "850",
    wardId: "29536",
    name: "Xã Đông Hải",
  },
  {
    districtId: "851",
    wardId: "29512",
    name: "Phường 1",
  },
  {
    districtId: "851",
    wardId: "29515",
    name: "Xã Long Toàn",
  },
  {
    districtId: "851",
    wardId: "29516",
    name: "Phường 2",
  },
  {
    districtId: "851",
    wardId: "29518",
    name: "Xã Long Hữu",
  },
  {
    districtId: "851",
    wardId: "29524",
    name: "Xã Dân Thành",
  },
  {
    districtId: "851",
    wardId: "29527",
    name: "Xã Trường Long Hòa",
  },
  {
    districtId: "851",
    wardId: "29539",
    name: "Xã Hiệp Thạnh",
  },
  {
    districtId: "855",
    wardId: "29542",
    name: "Phường 9",
  },
  {
    districtId: "855",
    wardId: "29545",
    name: "Phường 5",
  },
  {
    districtId: "855",
    wardId: "29548",
    name: "Phường 1",
  },
  {
    districtId: "855",
    wardId: "29551",
    name: "Phường 2",
  },
  {
    districtId: "855",
    wardId: "29554",
    name: "Phường 4",
  },
  {
    districtId: "855",
    wardId: "29557",
    name: "Phường 3",
  },
  {
    districtId: "855",
    wardId: "29560",
    name: "Phường 8",
  },
  {
    districtId: "855",
    wardId: "29563",
    name: "Phường Tân Ngãi",
  },
  {
    districtId: "855",
    wardId: "29566",
    name: "Phường Tân Hòa",
  },
  {
    districtId: "855",
    wardId: "29569",
    name: "Phường Tân Hội",
  },
  {
    districtId: "855",
    wardId: "29572",
    name: "Phường Trường An",
  },
  {
    districtId: "857",
    wardId: "29575",
    name: "Thị trấn Long Hồ",
  },
  {
    districtId: "857",
    wardId: "29578",
    name: "Xã Đồng Phú",
  },
  {
    districtId: "857",
    wardId: "29581",
    name: "Xã Bình Hòa Phước",
  },
  {
    districtId: "857",
    wardId: "29584",
    name: "Xã Hòa Ninh",
  },
  {
    districtId: "857",
    wardId: "29587",
    name: "Xã An Bình",
  },
  {
    districtId: "857",
    wardId: "29590",
    name: "Xã Thanh Đức",
  },
  {
    districtId: "857",
    wardId: "29593",
    name: "Xã Tân Hạnh",
  },
  {
    districtId: "857",
    wardId: "29596",
    name: "Xã Phước Hậu",
  },
  {
    districtId: "857",
    wardId: "29599",
    name: "Xã Long Phước",
  },
  {
    districtId: "857",
    wardId: "29602",
    name: "Xã Phú Đức",
  },
  {
    districtId: "857",
    wardId: "29605",
    name: "Xã Lộc Hòa",
  },
  {
    districtId: "857",
    wardId: "29608",
    name: "Xã Long An",
  },
  {
    districtId: "857",
    wardId: "29611",
    name: "Xã Phú Quới",
  },
  {
    districtId: "857",
    wardId: "29614",
    name: "Xã Thạnh Quới",
  },
  {
    districtId: "857",
    wardId: "29617",
    name: "Xã Hòa Phú",
  },
  {
    districtId: "858",
    wardId: "29623",
    name: "Xã Mỹ An",
  },
  {
    districtId: "858",
    wardId: "29626",
    name: "Xã Mỹ Phước",
  },
  {
    districtId: "858",
    wardId: "29629",
    name: "Xã An Phước",
  },
  {
    districtId: "858",
    wardId: "29632",
    name: "Xã Nhơn Phú",
  },
  {
    districtId: "858",
    wardId: "29635",
    name: "Xã Long Mỹ",
  },
  {
    districtId: "858",
    wardId: "29638",
    name: "Xã Hòa Tịnh",
  },
  {
    districtId: "858",
    wardId: "29641",
    name: "Thị trấn Cái Nhum",
  },
  {
    districtId: "858",
    wardId: "29644",
    name: "Xã Bình Phước",
  },
  {
    districtId: "858",
    wardId: "29647",
    name: "Xã Chánh An",
  },
  {
    districtId: "858",
    wardId: "29650",
    name: "Xã Tân An Hội",
  },
  {
    districtId: "858",
    wardId: "29653",
    name: "Xã Tân Long",
  },
  {
    districtId: "858",
    wardId: "29656",
    name: "Xã Tân Long Hội",
  },
  {
    districtId: "859",
    wardId: "29659",
    name: "Thị trấn Vũng Liêm",
  },
  {
    districtId: "859",
    wardId: "29662",
    name: "Xã Tân Quới Trung",
  },
  {
    districtId: "859",
    wardId: "29665",
    name: "Xã Quới Thiện",
  },
  {
    districtId: "859",
    wardId: "29668",
    name: "Xã Quới An",
  },
  {
    districtId: "859",
    wardId: "29671",
    name: "Xã Trung Chánh",
  },
  {
    districtId: "859",
    wardId: "29674",
    name: "Xã Tân An Luông",
  },
  {
    districtId: "859",
    wardId: "29677",
    name: "Xã Thanh Bình",
  },
  {
    districtId: "859",
    wardId: "29680",
    name: "Xã Trung Thành Tây",
  },
  {
    districtId: "859",
    wardId: "29683",
    name: "Xã Trung Hiệp",
  },
  {
    districtId: "859",
    wardId: "29686",
    name: "Xã Hiếu Phụng",
  },
  {
    districtId: "859",
    wardId: "29689",
    name: "Xã Trung Thành Đông",
  },
  {
    districtId: "859",
    wardId: "29692",
    name: "Xã Trung Thành",
  },
  {
    districtId: "859",
    wardId: "29695",
    name: "Xã Trung Hiếu",
  },
  {
    districtId: "859",
    wardId: "29698",
    name: "Xã Trung Ngãi",
  },
  {
    districtId: "859",
    wardId: "29701",
    name: "Xã Hiếu Thuận",
  },
  {
    districtId: "859",
    wardId: "29704",
    name: "Xã Trung Nghĩa",
  },
  {
    districtId: "859",
    wardId: "29707",
    name: "Xã Trung An",
  },
  {
    districtId: "859",
    wardId: "29710",
    name: "Xã Hiếu Nhơn",
  },
  {
    districtId: "859",
    wardId: "29713",
    name: "Xã Hiếu Thành",
  },
  {
    districtId: "859",
    wardId: "29716",
    name: "Xã Hiếu Nghĩa",
  },
  {
    districtId: "860",
    wardId: "29719",
    name: "Thị trấn Tam Bình",
  },
  {
    districtId: "860",
    wardId: "29722",
    name: "Xã Tân Lộc",
  },
  {
    districtId: "860",
    wardId: "29725",
    name: "Xã Phú Thịnh",
  },
  {
    districtId: "860",
    wardId: "29728",
    name: "Xã Hậu Lộc",
  },
  {
    districtId: "860",
    wardId: "29731",
    name: "Xã Hòa Thạnh",
  },
  {
    districtId: "860",
    wardId: "29734",
    name: "Xã Hoà Lộc",
  },
  {
    districtId: "860",
    wardId: "29737",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "860",
    wardId: "29740",
    name: "Xã Song Phú",
  },
  {
    districtId: "860",
    wardId: "29743",
    name: "Xã Hòa Hiệp",
  },
  {
    districtId: "860",
    wardId: "29746",
    name: "Xã Mỹ Lộc",
  },
  {
    districtId: "860",
    wardId: "29749",
    name: "Xã Tân Phú",
  },
  {
    districtId: "860",
    wardId: "29752",
    name: "Xã Long Phú",
  },
  {
    districtId: "860",
    wardId: "29755",
    name: "Xã Mỹ Thạnh Trung",
  },
  {
    districtId: "860",
    wardId: "29758",
    name: "Xã Tường Lộc",
  },
  {
    districtId: "860",
    wardId: "29761",
    name: "Xã Loan Mỹ",
  },
  {
    districtId: "860",
    wardId: "29764",
    name: "Xã Ngãi Tứ",
  },
  {
    districtId: "860",
    wardId: "29767",
    name: "Xã Bình Ninh",
  },
  {
    districtId: "861",
    wardId: "29770",
    name: "Phường Cái Vồn",
  },
  {
    districtId: "861",
    wardId: "29771",
    name: "Phường Thành Phước",
  },
  {
    districtId: "861",
    wardId: "29806",
    name: "Xã Thuận An",
  },
  {
    districtId: "861",
    wardId: "29809",
    name: "Xã Đông Thạnh",
  },
  {
    districtId: "861",
    wardId: "29812",
    name: "Xã Đông Bình",
  },
  {
    districtId: "861",
    wardId: "29813",
    name: "Phường Đông Thuận",
  },
  {
    districtId: "861",
    wardId: "29815",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "861",
    wardId: "29818",
    name: "Xã Đông Thành",
  },
  {
    districtId: "862",
    wardId: "29821",
    name: "Thị trấn Trà Ôn",
  },
  {
    districtId: "862",
    wardId: "29824",
    name: "Xã Xuân Hiệp",
  },
  {
    districtId: "862",
    wardId: "29827",
    name: "Xã Nhơn Bình",
  },
  {
    districtId: "862",
    wardId: "29830",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "862",
    wardId: "29833",
    name: "Xã Thới Hòa",
  },
  {
    districtId: "862",
    wardId: "29836",
    name: "Xã Trà Côn",
  },
  {
    districtId: "862",
    wardId: "29839",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "862",
    wardId: "29842",
    name: "Xã Hựu Thành",
  },
  {
    districtId: "862",
    wardId: "29845",
    name: "Xã Vĩnh Xuân",
  },
  {
    districtId: "862",
    wardId: "29848",
    name: "Xã Thuận Thới",
  },
  {
    districtId: "862",
    wardId: "29851",
    name: "Xã Phú Thành",
  },
  {
    districtId: "862",
    wardId: "29854",
    name: "Xã Thiện Mỹ",
  },
  {
    districtId: "862",
    wardId: "29857",
    name: "Xã Lục Sỹ Thành",
  },
  {
    districtId: "862",
    wardId: "29860",
    name: "Xã Tích Thiện",
  },
  {
    districtId: "863",
    wardId: "29773",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "863",
    wardId: "29776",
    name: "Xã Tân Thành",
  },
  {
    districtId: "863",
    wardId: "29779",
    name: "Xã Thành Trung",
  },
  {
    districtId: "863",
    wardId: "29782",
    name: "Xã Tân An Thạnh",
  },
  {
    districtId: "863",
    wardId: "29785",
    name: "Xã Tân Lược",
  },
  {
    districtId: "863",
    wardId: "29788",
    name: "Xã Nguyễn Văn Thảnh",
  },
  {
    districtId: "863",
    wardId: "29791",
    name: "Xã Thành Lợi",
  },
  {
    districtId: "863",
    wardId: "29794",
    name: "Xã Mỹ Thuận",
  },
  {
    districtId: "863",
    wardId: "29797",
    name: "Xã Tân Bình",
  },
  {
    districtId: "863",
    wardId: "29800",
    name: "Thị trấn Tân Quới",
  },
  {
    districtId: "866",
    wardId: "29863",
    name: "Phường 11",
  },
  {
    districtId: "866",
    wardId: "29866",
    name: "Phường 1",
  },
  {
    districtId: "866",
    wardId: "29869",
    name: "Phường 2",
  },
  {
    districtId: "866",
    wardId: "29872",
    name: "Phường 4",
  },
  {
    districtId: "866",
    wardId: "29875",
    name: "Phường 3",
  },
  {
    districtId: "866",
    wardId: "29878",
    name: "Phường 6",
  },
  {
    districtId: "866",
    wardId: "29881",
    name: "Xã Mỹ Ngãi",
  },
  {
    districtId: "866",
    wardId: "29884",
    name: "Xã Mỹ Tân",
  },
  {
    districtId: "866",
    wardId: "29887",
    name: "Xã Mỹ Trà",
  },
  {
    districtId: "866",
    wardId: "29888",
    name: "Phường Mỹ Phú",
  },
  {
    districtId: "866",
    wardId: "29890",
    name: "Xã Tân Thuận Tây",
  },
  {
    districtId: "866",
    wardId: "29892",
    name: "Phường Hoà Thuận",
  },
  {
    districtId: "866",
    wardId: "29893",
    name: "Xã Hòa An",
  },
  {
    districtId: "866",
    wardId: "29896",
    name: "Xã Tân Thuận Đông",
  },
  {
    districtId: "866",
    wardId: "29899",
    name: "Xã Tịnh Thới",
  },
  {
    districtId: "867",
    wardId: "29902",
    name: "Phường 3",
  },
  {
    districtId: "867",
    wardId: "29905",
    name: "Phường 1",
  },
  {
    districtId: "867",
    wardId: "29908",
    name: "Phường 4",
  },
  {
    districtId: "867",
    wardId: "29911",
    name: "Phường 2",
  },
  {
    districtId: "867",
    wardId: "29914",
    name: "Xã Tân Khánh Đông",
  },
  {
    districtId: "867",
    wardId: "29917",
    name: "Phường Tân Quy Đông",
  },
  {
    districtId: "867",
    wardId: "29919",
    name: "Phường An Hoà",
  },
  {
    districtId: "867",
    wardId: "29920",
    name: "Xã Tân Quy Tây",
  },
  {
    districtId: "867",
    wardId: "29923",
    name: "Xã Tân Phú Đông",
  },
  {
    districtId: "868",
    wardId: "29954",
    name: "Phường An Lộc",
  },
  {
    districtId: "868",
    wardId: "29955",
    name: "Phường An Thạnh",
  },
  {
    districtId: "868",
    wardId: "29959",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "868",
    wardId: "29965",
    name: "Xã Tân Hội",
  },
  {
    districtId: "868",
    wardId: "29978",
    name: "Phường An Lạc",
  },
  {
    districtId: "868",
    wardId: "29986",
    name: "Phường An Bình B",
  },
  {
    districtId: "868",
    wardId: "29989",
    name: "Phường An Bình A",
  },
  {
    districtId: "869",
    wardId: "29926",
    name: "Thị trấn Sa Rài",
  },
  {
    districtId: "869",
    wardId: "29929",
    name: "Xã Tân Hộ Cơ",
  },
  {
    districtId: "869",
    wardId: "29932",
    name: "Xã Thông Bình",
  },
  {
    districtId: "869",
    wardId: "29935",
    name: "Xã Bình Phú",
  },
  {
    districtId: "869",
    wardId: "29938",
    name: "Xã Tân Thành A",
  },
  {
    districtId: "869",
    wardId: "29941",
    name: "Xã Tân Thành B",
  },
  {
    districtId: "869",
    wardId: "29944",
    name: "Xã Tân Phước",
  },
  {
    districtId: "869",
    wardId: "29947",
    name: "Xã Tân Công Chí",
  },
  {
    districtId: "869",
    wardId: "29950",
    name: "Xã An Phước",
  },
  {
    districtId: "870",
    wardId: "29956",
    name: "Xã Thường Phước 1",
  },
  {
    districtId: "870",
    wardId: "29962",
    name: "Xã Thường Thới Hậu A",
  },
  {
    districtId: "870",
    wardId: "29971",
    name: "Thị trấn Thường Thới Tiền",
  },
  {
    districtId: "870",
    wardId: "29974",
    name: "Xã Thường Phước 2",
  },
  {
    districtId: "870",
    wardId: "29977",
    name: "Xã Thường Lạc",
  },
  {
    districtId: "870",
    wardId: "29980",
    name: "Xã Long Khánh A",
  },
  {
    districtId: "870",
    wardId: "29983",
    name: "Xã Long Khánh B",
  },
  {
    districtId: "870",
    wardId: "29992",
    name: "Xã Long Thuận",
  },
  {
    districtId: "870",
    wardId: "29995",
    name: "Xã Phú Thuận B",
  },
  {
    districtId: "870",
    wardId: "29998",
    name: "Xã Phú Thuận A",
  },
  {
    districtId: "871",
    wardId: "30001",
    name: "Thị trấn Tràm Chim",
  },
  {
    districtId: "871",
    wardId: "30004",
    name: "Xã Hoà Bình",
  },
  {
    districtId: "871",
    wardId: "30007",
    name: "Xã Tân Công Sính",
  },
  {
    districtId: "871",
    wardId: "30010",
    name: "Xã Phú Hiệp",
  },
  {
    districtId: "871",
    wardId: "30013",
    name: "Xã Phú Đức",
  },
  {
    districtId: "871",
    wardId: "30016",
    name: "Xã Phú Thành B",
  },
  {
    districtId: "871",
    wardId: "30019",
    name: "Xã An Hòa",
  },
  {
    districtId: "871",
    wardId: "30022",
    name: "Xã An Long",
  },
  {
    districtId: "871",
    wardId: "30025",
    name: "Xã Phú Cường",
  },
  {
    districtId: "871",
    wardId: "30028",
    name: "Xã Phú Ninh",
  },
  {
    districtId: "871",
    wardId: "30031",
    name: "Xã Phú Thọ",
  },
  {
    districtId: "871",
    wardId: "30034",
    name: "Xã Phú Thành A",
  },
  {
    districtId: "872",
    wardId: "30037",
    name: "Thị trấn Mỹ An",
  },
  {
    districtId: "872",
    wardId: "30040",
    name: "Xã Thạnh Lợi",
  },
  {
    districtId: "872",
    wardId: "30043",
    name: "Xã Hưng Thạnh",
  },
  {
    districtId: "872",
    wardId: "30046",
    name: "Xã Trường Xuân",
  },
  {
    districtId: "872",
    wardId: "30049",
    name: "Xã Tân Kiều",
  },
  {
    districtId: "872",
    wardId: "30052",
    name: "Xã Mỹ Hòa",
  },
  {
    districtId: "872",
    wardId: "30055",
    name: "Xã Mỹ Quý",
  },
  {
    districtId: "872",
    wardId: "30058",
    name: "Xã Mỹ Đông",
  },
  {
    districtId: "872",
    wardId: "30061",
    name: "Xã Đốc Binh Kiều",
  },
  {
    districtId: "872",
    wardId: "30064",
    name: "Xã Mỹ An",
  },
  {
    districtId: "872",
    wardId: "30067",
    name: "Xã Phú Điền",
  },
  {
    districtId: "872",
    wardId: "30070",
    name: "Xã Láng Biển",
  },
  {
    districtId: "872",
    wardId: "30073",
    name: "Xã Thanh Mỹ",
  },
  {
    districtId: "873",
    wardId: "30076",
    name: "Thị trấn Mỹ Thọ",
  },
  {
    districtId: "873",
    wardId: "30079",
    name: "Xã Gáo Giồng",
  },
  {
    districtId: "873",
    wardId: "30082",
    name: "Xã Phương Thịnh",
  },
  {
    districtId: "873",
    wardId: "30085",
    name: "Xã Ba Sao",
  },
  {
    districtId: "873",
    wardId: "30088",
    name: "Xã Phong Mỹ",
  },
  {
    districtId: "873",
    wardId: "30091",
    name: "Xã Tân Nghĩa",
  },
  {
    districtId: "873",
    wardId: "30094",
    name: "Xã Phương Trà",
  },
  {
    districtId: "873",
    wardId: "30097",
    name: "Xã Nhị Mỹ",
  },
  {
    districtId: "873",
    wardId: "30100",
    name: "Xã Mỹ Thọ",
  },
  {
    districtId: "873",
    wardId: "30103",
    name: "Xã Tân Hội Trung",
  },
  {
    districtId: "873",
    wardId: "30106",
    name: "Xã An Bình",
  },
  {
    districtId: "873",
    wardId: "30109",
    name: "Xã Mỹ Hội",
  },
  {
    districtId: "873",
    wardId: "30112",
    name: "Xã Mỹ Hiệp",
  },
  {
    districtId: "873",
    wardId: "30115",
    name: "Xã Mỹ Long",
  },
  {
    districtId: "873",
    wardId: "30118",
    name: "Xã Bình Hàng Trung",
  },
  {
    districtId: "873",
    wardId: "30121",
    name: "Xã Mỹ Xương",
  },
  {
    districtId: "873",
    wardId: "30124",
    name: "Xã Bình Hàng Tây",
  },
  {
    districtId: "873",
    wardId: "30127",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "874",
    wardId: "30130",
    name: "Thị trấn Thanh Bình",
  },
  {
    districtId: "874",
    wardId: "30133",
    name: "Xã Tân Quới",
  },
  {
    districtId: "874",
    wardId: "30136",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "874",
    wardId: "30139",
    name: "Xã An Phong",
  },
  {
    districtId: "874",
    wardId: "30142",
    name: "Xã Phú Lợi",
  },
  {
    districtId: "874",
    wardId: "30145",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "874",
    wardId: "30148",
    name: "Xã Bình Tấn",
  },
  {
    districtId: "874",
    wardId: "30151",
    name: "Xã Tân Huề",
  },
  {
    districtId: "874",
    wardId: "30154",
    name: "Xã Tân Bình",
  },
  {
    districtId: "874",
    wardId: "30157",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "874",
    wardId: "30160",
    name: "Xã Tân Phú",
  },
  {
    districtId: "874",
    wardId: "30163",
    name: "Xã Bình Thành",
  },
  {
    districtId: "874",
    wardId: "30166",
    name: "Xã Tân Long",
  },
  {
    districtId: "875",
    wardId: "30169",
    name: "Thị trấn Lấp Vò",
  },
  {
    districtId: "875",
    wardId: "30172",
    name: "Xã Mỹ An Hưng A",
  },
  {
    districtId: "875",
    wardId: "30175",
    name: "Xã Tân Mỹ",
  },
  {
    districtId: "875",
    wardId: "30178",
    name: "Xã Mỹ An Hưng B",
  },
  {
    districtId: "875",
    wardId: "30181",
    name: "Xã Tân  Khánh Trung",
  },
  {
    districtId: "875",
    wardId: "30184",
    name: "Xã Long Hưng A",
  },
  {
    districtId: "875",
    wardId: "30187",
    name: "Xã Vĩnh Thạnh",
  },
  {
    districtId: "875",
    wardId: "30190",
    name: "Xã Long Hưng B",
  },
  {
    districtId: "875",
    wardId: "30193",
    name: "Xã Bình Thành",
  },
  {
    districtId: "875",
    wardId: "30196",
    name: "Xã Định An",
  },
  {
    districtId: "875",
    wardId: "30199",
    name: "Xã Định Yên",
  },
  {
    districtId: "875",
    wardId: "30202",
    name: "Xã Hội An Đông",
  },
  {
    districtId: "875",
    wardId: "30205",
    name: "Xã Bình Thạnh Trung",
  },
  {
    districtId: "876",
    wardId: "30208",
    name: "Thị trấn Lai Vung",
  },
  {
    districtId: "876",
    wardId: "30211",
    name: "Xã Tân Dương",
  },
  {
    districtId: "876",
    wardId: "30214",
    name: "Xã Hòa Thành",
  },
  {
    districtId: "876",
    wardId: "30217",
    name: "Xã Long Hậu",
  },
  {
    districtId: "876",
    wardId: "30220",
    name: "Xã Tân Phước",
  },
  {
    districtId: "876",
    wardId: "30223",
    name: "Xã Hòa Long",
  },
  {
    districtId: "876",
    wardId: "30226",
    name: "Xã Tân Thành",
  },
  {
    districtId: "876",
    wardId: "30229",
    name: "Xã Long Thắng",
  },
  {
    districtId: "876",
    wardId: "30232",
    name: "Xã Vĩnh Thới",
  },
  {
    districtId: "876",
    wardId: "30235",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "876",
    wardId: "30238",
    name: "Xã Định Hòa",
  },
  {
    districtId: "876",
    wardId: "30241",
    name: "Xã Phong Hòa",
  },
  {
    districtId: "877",
    wardId: "30244",
    name: "Thị trấn Cái Tàu Hạ",
  },
  {
    districtId: "877",
    wardId: "30247",
    name: "Xã An Hiệp",
  },
  {
    districtId: "877",
    wardId: "30250",
    name: "Xã An Nhơn",
  },
  {
    districtId: "877",
    wardId: "30253",
    name: "Xã Tân Nhuận Đông",
  },
  {
    districtId: "877",
    wardId: "30256",
    name: "Xã Tân Bình",
  },
  {
    districtId: "877",
    wardId: "30259",
    name: "Xã Tân Phú Trung",
  },
  {
    districtId: "877",
    wardId: "30262",
    name: "Xã Phú Long",
  },
  {
    districtId: "877",
    wardId: "30265",
    name: "Xã An Phú Thuận",
  },
  {
    districtId: "877",
    wardId: "30268",
    name: "Xã Phú Hựu",
  },
  {
    districtId: "877",
    wardId: "30271",
    name: "Xã An Khánh",
  },
  {
    districtId: "877",
    wardId: "30274",
    name: "Xã Tân Phú",
  },
  {
    districtId: "877",
    wardId: "30277",
    name: "Xã Hòa Tân",
  },
  {
    districtId: "883",
    wardId: "30280",
    name: "Phường Mỹ Bình",
  },
  {
    districtId: "883",
    wardId: "30283",
    name: "Phường Mỹ Long",
  },
  {
    districtId: "883",
    wardId: "30285",
    name: "Phường Đông Xuyên",
  },
  {
    districtId: "883",
    wardId: "30286",
    name: "Phường Mỹ Xuyên",
  },
  {
    districtId: "883",
    wardId: "30289",
    name: "Phường Bình Đức",
  },
  {
    districtId: "883",
    wardId: "30292",
    name: "Phường Bình Khánh",
  },
  {
    districtId: "883",
    wardId: "30295",
    name: "Phường Mỹ Phước",
  },
  {
    districtId: "883",
    wardId: "30298",
    name: "Phường Mỹ Quý",
  },
  {
    districtId: "883",
    wardId: "30301",
    name: "Phường Mỹ Thới",
  },
  {
    districtId: "883",
    wardId: "30304",
    name: "Phường Mỹ Thạnh",
  },
  {
    districtId: "883",
    wardId: "30307",
    name: "Phường Mỹ Hòa",
  },
  {
    districtId: "883",
    wardId: "30310",
    name: "Xã Mỹ Khánh",
  },
  {
    districtId: "883",
    wardId: "30313",
    name: "Xã Mỹ Hoà Hưng",
  },
  {
    districtId: "884",
    wardId: "30316",
    name: "Phường Châu Phú B",
  },
  {
    districtId: "884",
    wardId: "30319",
    name: "Phường Châu Phú A",
  },
  {
    districtId: "884",
    wardId: "30322",
    name: "Phường Vĩnh Mỹ",
  },
  {
    districtId: "884",
    wardId: "30325",
    name: "Phường Núi Sam",
  },
  {
    districtId: "884",
    wardId: "30328",
    name: "Phường Vĩnh Ngươn",
  },
  {
    districtId: "884",
    wardId: "30331",
    name: "Xã Vĩnh Tế",
  },
  {
    districtId: "884",
    wardId: "30334",
    name: "Xã Vĩnh Châu",
  },
  {
    districtId: "886",
    wardId: "30337",
    name: "Thị trấn An Phú",
  },
  {
    districtId: "886",
    wardId: "30340",
    name: "Xã Khánh An",
  },
  {
    districtId: "886",
    wardId: "30341",
    name: "Thị Trấn Long Bình",
  },
  {
    districtId: "886",
    wardId: "30343",
    name: "Xã Khánh Bình",
  },
  {
    districtId: "886",
    wardId: "30346",
    name: "Xã Quốc Thái",
  },
  {
    districtId: "886",
    wardId: "30349",
    name: "Xã Nhơn Hội",
  },
  {
    districtId: "886",
    wardId: "30352",
    name: "Xã Phú Hữu",
  },
  {
    districtId: "886",
    wardId: "30355",
    name: "Xã Phú Hội",
  },
  {
    districtId: "886",
    wardId: "30358",
    name: "Xã Phước Hưng",
  },
  {
    districtId: "886",
    wardId: "30361",
    name: "Xã Vĩnh Lộc",
  },
  {
    districtId: "886",
    wardId: "30364",
    name: "Xã Vĩnh Hậu",
  },
  {
    districtId: "886",
    wardId: "30367",
    name: "Xã Vĩnh Trường",
  },
  {
    districtId: "886",
    wardId: "30370",
    name: "Xã Vĩnh Hội Đông",
  },
  {
    districtId: "886",
    wardId: "30373",
    name: "Xã Đa Phước",
  },
  {
    districtId: "887",
    wardId: "30376",
    name: "Phường Long Thạnh",
  },
  {
    districtId: "887",
    wardId: "30377",
    name: "Phường Long Hưng",
  },
  {
    districtId: "887",
    wardId: "30378",
    name: "Phường Long Châu",
  },
  {
    districtId: "887",
    wardId: "30379",
    name: "Xã Phú Lộc",
  },
  {
    districtId: "887",
    wardId: "30382",
    name: "Xã Vĩnh Xương",
  },
  {
    districtId: "887",
    wardId: "30385",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "887",
    wardId: "30387",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "887",
    wardId: "30388",
    name: "Xã Tân An",
  },
  {
    districtId: "887",
    wardId: "30391",
    name: "Xã Long An",
  },
  {
    districtId: "887",
    wardId: "30394",
    name: "Phường Long Phú",
  },
  {
    districtId: "887",
    wardId: "30397",
    name: "Xã Châu Phong",
  },
  {
    districtId: "887",
    wardId: "30400",
    name: "Xã Phú Vĩnh",
  },
  {
    districtId: "887",
    wardId: "30403",
    name: "Xã Lê Chánh",
  },
  {
    districtId: "887",
    wardId: "30412",
    name: "Phường Long Sơn",
  },
  {
    districtId: "888",
    wardId: "30406",
    name: "Thị trấn Phú Mỹ",
  },
  {
    districtId: "888",
    wardId: "30409",
    name: "Thị trấn Chợ Vàm",
  },
  {
    districtId: "888",
    wardId: "30415",
    name: "Xã Long Hoà",
  },
  {
    districtId: "888",
    wardId: "30418",
    name: "Xã Phú Long",
  },
  {
    districtId: "888",
    wardId: "30421",
    name: "Xã Phú Lâm",
  },
  {
    districtId: "888",
    wardId: "30424",
    name: "Xã Phú Hiệp",
  },
  {
    districtId: "888",
    wardId: "30427",
    name: "Xã Phú Thạnh",
  },
  {
    districtId: "888",
    wardId: "30430",
    name: "Xã Hoà Lạc",
  },
  {
    districtId: "888",
    wardId: "30433",
    name: "Xã Phú Thành",
  },
  {
    districtId: "888",
    wardId: "30436",
    name: "Xã Phú An",
  },
  {
    districtId: "888",
    wardId: "30439",
    name: "Xã Phú Xuân",
  },
  {
    districtId: "888",
    wardId: "30442",
    name: "Xã Hiệp Xương",
  },
  {
    districtId: "888",
    wardId: "30445",
    name: "Xã Phú Bình",
  },
  {
    districtId: "888",
    wardId: "30448",
    name: "Xã Phú Thọ",
  },
  {
    districtId: "888",
    wardId: "30451",
    name: "Xã Phú Hưng",
  },
  {
    districtId: "888",
    wardId: "30454",
    name: "Xã Bình Thạnh Đông",
  },
  {
    districtId: "888",
    wardId: "30457",
    name: "Xã Tân Hòa",
  },
  {
    districtId: "888",
    wardId: "30460",
    name: "Xã Tân Trung",
  },
  {
    districtId: "889",
    wardId: "30463",
    name: "Thị trấn Cái Dầu",
  },
  {
    districtId: "889",
    wardId: "30466",
    name: "Xã Khánh Hòa",
  },
  {
    districtId: "889",
    wardId: "30469",
    name: "Xã Mỹ Đức",
  },
  {
    districtId: "889",
    wardId: "30472",
    name: "Xã Mỹ Phú",
  },
  {
    districtId: "889",
    wardId: "30475",
    name: "Xã Ô Long Vỹ",
  },
  {
    districtId: "889",
    wardId: "30478",
    name: "Thị trấn Vĩnh Thạnh Trung",
  },
  {
    districtId: "889",
    wardId: "30481",
    name: "Xã Thạnh Mỹ Tây",
  },
  {
    districtId: "889",
    wardId: "30484",
    name: "Xã Bình Long",
  },
  {
    districtId: "889",
    wardId: "30487",
    name: "Xã Bình Mỹ",
  },
  {
    districtId: "889",
    wardId: "30490",
    name: "Xã Bình Thủy",
  },
  {
    districtId: "889",
    wardId: "30493",
    name: "Xã Đào Hữu Cảnh",
  },
  {
    districtId: "889",
    wardId: "30496",
    name: "Xã Bình Phú",
  },
  {
    districtId: "889",
    wardId: "30499",
    name: "Xã Bình Chánh",
  },
  {
    districtId: "890",
    wardId: "30502",
    name: "Thị trấn Nhà Bàng",
  },
  {
    districtId: "890",
    wardId: "30505",
    name: "Thị trấn Chi Lăng",
  },
  {
    districtId: "890",
    wardId: "30508",
    name: "Xã Núi Voi",
  },
  {
    districtId: "890",
    wardId: "30511",
    name: "Xã Nhơn Hưng",
  },
  {
    districtId: "890",
    wardId: "30514",
    name: "Xã An Phú",
  },
  {
    districtId: "890",
    wardId: "30517",
    name: "Xã Thới Sơn",
  },
  {
    districtId: "890",
    wardId: "30520",
    name: "Thị trấn Tịnh Biên",
  },
  {
    districtId: "890",
    wardId: "30523",
    name: "Xã Văn Giáo",
  },
  {
    districtId: "890",
    wardId: "30526",
    name: "Xã An Cư",
  },
  {
    districtId: "890",
    wardId: "30529",
    name: "Xã An Nông",
  },
  {
    districtId: "890",
    wardId: "30532",
    name: "Xã Vĩnh Trung",
  },
  {
    districtId: "890",
    wardId: "30535",
    name: "Xã Tân Lợi",
  },
  {
    districtId: "890",
    wardId: "30538",
    name: "Xã An Hảo",
  },
  {
    districtId: "890",
    wardId: "30541",
    name: "Xã Tân Lập",
  },
  {
    districtId: "891",
    wardId: "30544",
    name: "Thị trấn Tri Tôn",
  },
  {
    districtId: "891",
    wardId: "30547",
    name: "Thị trấn Ba Chúc",
  },
  {
    districtId: "891",
    wardId: "30550",
    name: "Xã Lạc Quới",
  },
  {
    districtId: "891",
    wardId: "30553",
    name: "Xã Lê Trì",
  },
  {
    districtId: "891",
    wardId: "30556",
    name: "Xã Vĩnh Gia",
  },
  {
    districtId: "891",
    wardId: "30559",
    name: "Xã Vĩnh Phước",
  },
  {
    districtId: "891",
    wardId: "30562",
    name: "Xã Châu Lăng",
  },
  {
    districtId: "891",
    wardId: "30565",
    name: "Xã Lương Phi",
  },
  {
    districtId: "891",
    wardId: "30568",
    name: "Xã Lương An Trà",
  },
  {
    districtId: "891",
    wardId: "30571",
    name: "Xã Tà Đảnh",
  },
  {
    districtId: "891",
    wardId: "30574",
    name: "Xã Núi Tô",
  },
  {
    districtId: "891",
    wardId: "30577",
    name: "Xã An Tức",
  },
  {
    districtId: "891",
    wardId: "30580",
    name: "Thị trấn Cô Tô",
  },
  {
    districtId: "891",
    wardId: "30583",
    name: "Xã Tân Tuyến",
  },
  {
    districtId: "891",
    wardId: "30586",
    name: "Xã Ô Lâm",
  },
  {
    districtId: "892",
    wardId: "30589",
    name: "Thị trấn An Châu",
  },
  {
    districtId: "892",
    wardId: "30592",
    name: "Xã An Hòa",
  },
  {
    districtId: "892",
    wardId: "30595",
    name: "Xã Cần Đăng",
  },
  {
    districtId: "892",
    wardId: "30598",
    name: "Xã Vĩnh Hanh",
  },
  {
    districtId: "892",
    wardId: "30601",
    name: "Xã Bình Thạnh",
  },
  {
    districtId: "892",
    wardId: "30604",
    name: "Thị trấn Vĩnh Bình",
  },
  {
    districtId: "892",
    wardId: "30607",
    name: "Xã Bình Hòa",
  },
  {
    districtId: "892",
    wardId: "30610",
    name: "Xã Vĩnh An",
  },
  {
    districtId: "892",
    wardId: "30613",
    name: "Xã Hòa Bình Thạnh",
  },
  {
    districtId: "892",
    wardId: "30616",
    name: "Xã Vĩnh Lợi",
  },
  {
    districtId: "892",
    wardId: "30619",
    name: "Xã Vĩnh Nhuận",
  },
  {
    districtId: "892",
    wardId: "30622",
    name: "Xã Tân Phú",
  },
  {
    districtId: "892",
    wardId: "30625",
    name: "Xã Vĩnh Thành",
  },
  {
    districtId: "893",
    wardId: "30628",
    name: "Thị trấn Chợ Mới",
  },
  {
    districtId: "893",
    wardId: "30631",
    name: "Thị trấn Mỹ Luông",
  },
  {
    districtId: "893",
    wardId: "30634",
    name: "Xã Kiến An",
  },
  {
    districtId: "893",
    wardId: "30637",
    name: "Xã Mỹ Hội Đông",
  },
  {
    districtId: "893",
    wardId: "30640",
    name: "Xã Long Điền A",
  },
  {
    districtId: "893",
    wardId: "30643",
    name: "Xã Tấn Mỹ",
  },
  {
    districtId: "893",
    wardId: "30646",
    name: "Xã Long Điền B",
  },
  {
    districtId: "893",
    wardId: "30649",
    name: "Xã Kiến Thành",
  },
  {
    districtId: "893",
    wardId: "30652",
    name: "Xã Mỹ Hiệp",
  },
  {
    districtId: "893",
    wardId: "30655",
    name: "Xã Mỹ An",
  },
  {
    districtId: "893",
    wardId: "30658",
    name: "Xã Nhơn Mỹ",
  },
  {
    districtId: "893",
    wardId: "30661",
    name: "Xã Long Giang",
  },
  {
    districtId: "893",
    wardId: "30664",
    name: "Xã Long Kiến",
  },
  {
    districtId: "893",
    wardId: "30667",
    name: "Xã Bình Phước Xuân",
  },
  {
    districtId: "893",
    wardId: "30670",
    name: "Xã An Thạnh Trung",
  },
  {
    districtId: "893",
    wardId: "30673",
    name: "Xã Hội An",
  },
  {
    districtId: "893",
    wardId: "30676",
    name: "Xã Hòa Bình",
  },
  {
    districtId: "893",
    wardId: "30679",
    name: "Xã Hòa An",
  },
  {
    districtId: "894",
    wardId: "30682",
    name: "Thị trấn Núi Sập",
  },
  {
    districtId: "894",
    wardId: "30685",
    name: "Thị trấn Phú Hoà",
  },
  {
    districtId: "894",
    wardId: "30688",
    name: "Thị Trấn Óc Eo",
  },
  {
    districtId: "894",
    wardId: "30691",
    name: "Xã Tây Phú",
  },
  {
    districtId: "894",
    wardId: "30692",
    name: "Xã An Bình",
  },
  {
    districtId: "894",
    wardId: "30694",
    name: "Xã Vĩnh Phú",
  },
  {
    districtId: "894",
    wardId: "30697",
    name: "Xã Vĩnh Trạch",
  },
  {
    districtId: "894",
    wardId: "30700",
    name: "Xã Phú Thuận",
  },
  {
    districtId: "894",
    wardId: "30703",
    name: "Xã Vĩnh Chánh",
  },
  {
    districtId: "894",
    wardId: "30706",
    name: "Xã Định Mỹ",
  },
  {
    districtId: "894",
    wardId: "30709",
    name: "Xã Định Thành",
  },
  {
    districtId: "894",
    wardId: "30712",
    name: "Xã Mỹ Phú Đông",
  },
  {
    districtId: "894",
    wardId: "30715",
    name: "Xã Vọng Đông",
  },
  {
    districtId: "894",
    wardId: "30718",
    name: "Xã Vĩnh Khánh",
  },
  {
    districtId: "894",
    wardId: "30721",
    name: "Xã Thoại Giang",
  },
  {
    districtId: "894",
    wardId: "30724",
    name: "Xã Bình Thành",
  },
  {
    districtId: "894",
    wardId: "30727",
    name: "Xã Vọng Thê",
  },
  {
    districtId: "899",
    wardId: "30730",
    name: "Phường Vĩnh Thanh Vân",
  },
  {
    districtId: "899",
    wardId: "30733",
    name: "Phường Vĩnh Thanh",
  },
  {
    districtId: "899",
    wardId: "30736",
    name: "Phường Vĩnh Quang",
  },
  {
    districtId: "899",
    wardId: "30739",
    name: "Phường Vĩnh Hiệp",
  },
  {
    districtId: "899",
    wardId: "30742",
    name: "Phường Vĩnh Bảo",
  },
  {
    districtId: "899",
    wardId: "30745",
    name: "Phường Vĩnh Lạc",
  },
  {
    districtId: "899",
    wardId: "30748",
    name: "Phường An Hòa",
  },
  {
    districtId: "899",
    wardId: "30751",
    name: "Phường An Bình",
  },
  {
    districtId: "899",
    wardId: "30754",
    name: "Phường Rạch Sỏi",
  },
  {
    districtId: "899",
    wardId: "30757",
    name: "Phường Vĩnh Lợi",
  },
  {
    districtId: "899",
    wardId: "30760",
    name: "Phường Vĩnh Thông",
  },
  {
    districtId: "899",
    wardId: "30763",
    name: "Xã Phi Thông",
  },
  {
    districtId: "900",
    wardId: "30766",
    name: "Phường Tô Châu",
  },
  {
    districtId: "900",
    wardId: "30769",
    name: "Phường Đông Hồ",
  },
  {
    districtId: "900",
    wardId: "30772",
    name: "Phường Bình San",
  },
  {
    districtId: "900",
    wardId: "30775",
    name: "Phường Pháo Đài",
  },
  {
    districtId: "900",
    wardId: "30778",
    name: "Phường Mỹ Đức",
  },
  {
    districtId: "900",
    wardId: "30781",
    name: "Xã Tiên Hải",
  },
  {
    districtId: "900",
    wardId: "30784",
    name: "Xã Thuận Yên",
  },
  {
    districtId: "902",
    wardId: "30787",
    name: "Thị trấn Kiên Lương",
  },
  {
    districtId: "902",
    wardId: "30790",
    name: "Xã Kiên Bình",
  },
  {
    districtId: "902",
    wardId: "30802",
    name: "Xã Hòa Điền",
  },
  {
    districtId: "902",
    wardId: "30805",
    name: "Xã Dương Hòa",
  },
  {
    districtId: "902",
    wardId: "30808",
    name: "Xã Bình An",
  },
  {
    districtId: "902",
    wardId: "30809",
    name: "Xã Bình Trị",
  },
  {
    districtId: "902",
    wardId: "30811",
    name: "Xã Sơn Hải",
  },
  {
    districtId: "902",
    wardId: "30814",
    name: "Xã Hòn Nghệ",
  },
  {
    districtId: "903",
    wardId: "30817",
    name: "Thị trấn Hòn Đất",
  },
  {
    districtId: "903",
    wardId: "30820",
    name: "Thị trấn Sóc Sơn",
  },
  {
    districtId: "903",
    wardId: "30823",
    name: "Xã Bình Sơn",
  },
  {
    districtId: "903",
    wardId: "30826",
    name: "Xã Bình Giang",
  },
  {
    districtId: "903",
    wardId: "30828",
    name: "Xã Mỹ Thái",
  },
  {
    districtId: "903",
    wardId: "30829",
    name: "Xã Nam Thái Sơn",
  },
  {
    districtId: "903",
    wardId: "30832",
    name: "Xã Mỹ Hiệp Sơn",
  },
  {
    districtId: "903",
    wardId: "30835",
    name: "Xã Sơn Kiên",
  },
  {
    districtId: "903",
    wardId: "30836",
    name: "Xã Sơn Bình",
  },
  {
    districtId: "903",
    wardId: "30838",
    name: "Xã Mỹ Thuận",
  },
  {
    districtId: "903",
    wardId: "30840",
    name: "Xã Lình Huỳnh",
  },
  {
    districtId: "903",
    wardId: "30841",
    name: "Xã Thổ Sơn",
  },
  {
    districtId: "903",
    wardId: "30844",
    name: "Xã Mỹ Lâm",
  },
  {
    districtId: "903",
    wardId: "30847",
    name: "Xã Mỹ Phước",
  },
  {
    districtId: "904",
    wardId: "30850",
    name: "Thị trấn Tân Hiệp",
  },
  {
    districtId: "904",
    wardId: "30853",
    name: "Xã Tân Hội",
  },
  {
    districtId: "904",
    wardId: "30856",
    name: "Xã Tân Thành",
  },
  {
    districtId: "904",
    wardId: "30859",
    name: "Xã Tân Hiệp B",
  },
  {
    districtId: "904",
    wardId: "30860",
    name: "Xã Tân Hoà",
  },
  {
    districtId: "904",
    wardId: "30862",
    name: "Xã Thạnh Đông B",
  },
  {
    districtId: "904",
    wardId: "30865",
    name: "Xã Thạnh Đông",
  },
  {
    districtId: "904",
    wardId: "30868",
    name: "Xã Tân Hiệp A",
  },
  {
    districtId: "904",
    wardId: "30871",
    name: "Xã Tân An",
  },
  {
    districtId: "904",
    wardId: "30874",
    name: "Xã Thạnh Đông A",
  },
  {
    districtId: "904",
    wardId: "30877",
    name: "Xã Thạnh Trị",
  },
  {
    districtId: "905",
    wardId: "30880",
    name: "Thị trấn Minh Lương",
  },
  {
    districtId: "905",
    wardId: "30883",
    name: "Xã Mong Thọ A",
  },
  {
    districtId: "905",
    wardId: "30886",
    name: "Xã Mong Thọ B",
  },
  {
    districtId: "905",
    wardId: "30887",
    name: "Xã Mong Thọ",
  },
  {
    districtId: "905",
    wardId: "30889",
    name: "Xã Giục Tượng",
  },
  {
    districtId: "905",
    wardId: "30892",
    name: "Xã Vĩnh Hòa Hiệp",
  },
  {
    districtId: "905",
    wardId: "30893",
    name: "Xã Vĩnh Hoà Phú",
  },
  {
    districtId: "905",
    wardId: "30895",
    name: "Xã Minh Hòa",
  },
  {
    districtId: "905",
    wardId: "30898",
    name: "Xã Bình An",
  },
  {
    districtId: "905",
    wardId: "30901",
    name: "Xã Thạnh Lộc",
  },
  {
    districtId: "906",
    wardId: "30904",
    name: "Thị Trấn Giồng Riềng",
  },
  {
    districtId: "906",
    wardId: "30907",
    name: "Xã Thạnh Hưng",
  },
  {
    districtId: "906",
    wardId: "30910",
    name: "Xã Thạnh Phước",
  },
  {
    districtId: "906",
    wardId: "30913",
    name: "Xã Thạnh Lộc",
  },
  {
    districtId: "906",
    wardId: "30916",
    name: "Xã Thạnh Hòa",
  },
  {
    districtId: "906",
    wardId: "30917",
    name: "Xã Thạnh Bình",
  },
  {
    districtId: "906",
    wardId: "30919",
    name: "Xã Bàn Thạch",
  },
  {
    districtId: "906",
    wardId: "30922",
    name: "Xã Bàn Tân Định",
  },
  {
    districtId: "906",
    wardId: "30925",
    name: "Xã Ngọc Thành",
  },
  {
    districtId: "906",
    wardId: "30928",
    name: "Xã Ngọc Chúc",
  },
  {
    districtId: "906",
    wardId: "30931",
    name: "Xã Ngọc Thuận",
  },
  {
    districtId: "906",
    wardId: "30934",
    name: "Xã Hòa Hưng",
  },
  {
    districtId: "906",
    wardId: "30937",
    name: "Xã Hoà Lợi",
  },
  {
    districtId: "906",
    wardId: "30940",
    name: "Xã Hoà An",
  },
  {
    districtId: "906",
    wardId: "30943",
    name: "Xã Long Thạnh",
  },
  {
    districtId: "906",
    wardId: "30946",
    name: "Xã Vĩnh Thạnh",
  },
  {
    districtId: "906",
    wardId: "30947",
    name: "Xã Vĩnh Phú",
  },
  {
    districtId: "906",
    wardId: "30949",
    name: "Xã  Hòa Thuận",
  },
  {
    districtId: "906",
    wardId: "30950",
    name: "Xã Ngọc Hoà",
  },
  {
    districtId: "907",
    wardId: "30952",
    name: "Thị trấn Gò Quao",
  },
  {
    districtId: "907",
    wardId: "30955",
    name: "Xã Vĩnh Hòa Hưng Bắc",
  },
  {
    districtId: "907",
    wardId: "30958",
    name: "Xã Định Hòa",
  },
  {
    districtId: "907",
    wardId: "30961",
    name: "Xã Thới Quản",
  },
  {
    districtId: "907",
    wardId: "30964",
    name: "Xã Định An",
  },
  {
    districtId: "907",
    wardId: "30967",
    name: "Xã Thủy Liễu",
  },
  {
    districtId: "907",
    wardId: "30970",
    name: "Xã Vĩnh Hòa Hưng Nam",
  },
  {
    districtId: "907",
    wardId: "30973",
    name: "Xã Vĩnh Phước A",
  },
  {
    districtId: "907",
    wardId: "30976",
    name: "Xã Vĩnh Phước B",
  },
  {
    districtId: "907",
    wardId: "30979",
    name: "Xã Vĩnh Tuy",
  },
  {
    districtId: "907",
    wardId: "30982",
    name: "Xã Vĩnh Thắng",
  },
  {
    districtId: "908",
    wardId: "30985",
    name: "Thị trấn Thứ Ba",
  },
  {
    districtId: "908",
    wardId: "30988",
    name: "Xã Tây Yên",
  },
  {
    districtId: "908",
    wardId: "30991",
    name: "Xã Tây Yên A",
  },
  {
    districtId: "908",
    wardId: "30994",
    name: "Xã Nam Yên",
  },
  {
    districtId: "908",
    wardId: "30997",
    name: "Xã Hưng Yên",
  },
  {
    districtId: "908",
    wardId: "31000",
    name: "Xã Nam Thái",
  },
  {
    districtId: "908",
    wardId: "31003",
    name: "Xã Nam Thái A",
  },
  {
    districtId: "908",
    wardId: "31006",
    name: "Xã Đông Thái",
  },
  {
    districtId: "908",
    wardId: "31009",
    name: "Xã Đông Yên",
  },
  {
    districtId: "909",
    wardId: "31018",
    name: "Thị trấn Thứ Mười Một",
  },
  {
    districtId: "909",
    wardId: "31021",
    name: "Xã Thuận Hoà",
  },
  {
    districtId: "909",
    wardId: "31024",
    name: "Xã Đông Hòa",
  },
  {
    districtId: "909",
    wardId: "31030",
    name: "Xã Đông Thạnh",
  },
  {
    districtId: "909",
    wardId: "31031",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "909",
    wardId: "31033",
    name: "Xã Đông Hưng",
  },
  {
    districtId: "909",
    wardId: "31036",
    name: "Xã Đông Hưng A",
  },
  {
    districtId: "909",
    wardId: "31039",
    name: "Xã Đông Hưng B",
  },
  {
    districtId: "909",
    wardId: "31042",
    name: "Xã Vân Khánh",
  },
  {
    districtId: "909",
    wardId: "31045",
    name: "Xã Vân Khánh Đông",
  },
  {
    districtId: "909",
    wardId: "31048",
    name: "Xã Vân Khánh Tây",
  },
  {
    districtId: "910",
    wardId: "31051",
    name: "Thị trấn Vĩnh Thuận",
  },
  {
    districtId: "910",
    wardId: "31060",
    name: "Xã Vĩnh Bình Bắc",
  },
  {
    districtId: "910",
    wardId: "31063",
    name: "Xã Vĩnh Bình Nam",
  },
  {
    districtId: "910",
    wardId: "31064",
    name: "Xã Bình Minh",
  },
  {
    districtId: "910",
    wardId: "31069",
    name: "Xã Vĩnh Thuận",
  },
  {
    districtId: "910",
    wardId: "31072",
    name: "Xã Tân Thuận",
  },
  {
    districtId: "910",
    wardId: "31074",
    name: "Xã Phong Đông",
  },
  {
    districtId: "910",
    wardId: "31075",
    name: "Xã Vĩnh Phong",
  },
  {
    districtId: "911",
    wardId: "31078",
    name: "Phường Dương Đông",
  },
  {
    districtId: "911",
    wardId: "31081",
    name: "Phường An Thới",
  },
  {
    districtId: "911",
    wardId: "31084",
    name: "Xã Cửa Cạn",
  },
  {
    districtId: "911",
    wardId: "31087",
    name: "Xã Gành Dầu",
  },
  {
    districtId: "911",
    wardId: "31090",
    name: "Xã Cửa Dương",
  },
  {
    districtId: "911",
    wardId: "31093",
    name: "Xã Hàm Ninh",
  },
  {
    districtId: "911",
    wardId: "31096",
    name: "Xã Dương Tơ",
  },
  {
    districtId: "911",
    wardId: "31102",
    name: "Xã Bãi Thơm",
  },
  {
    districtId: "911",
    wardId: "31105",
    name: "Xã Thổ Châu",
  },
  {
    districtId: "912",
    wardId: "31108",
    name: "Xã Hòn Tre",
  },
  {
    districtId: "912",
    wardId: "31111",
    name: "Xã Lại Sơn",
  },
  {
    districtId: "912",
    wardId: "31114",
    name: "Xã An Sơn",
  },
  {
    districtId: "912",
    wardId: "31115",
    name: "Xã Nam Du",
  },
  {
    districtId: "913",
    wardId: "31012",
    name: "Xã Thạnh Yên",
  },
  {
    districtId: "913",
    wardId: "31015",
    name: "Xã Thạnh Yên A",
  },
  {
    districtId: "913",
    wardId: "31027",
    name: "Xã An Minh Bắc",
  },
  {
    districtId: "913",
    wardId: "31054",
    name: "Xã Vĩnh Hòa",
  },
  {
    districtId: "913",
    wardId: "31057",
    name: "Xã Hoà Chánh",
  },
  {
    districtId: "913",
    wardId: "31066",
    name: "Xã Minh Thuận",
  },
  {
    districtId: "914",
    wardId: "30791",
    name: "Xã Vĩnh Phú",
  },
  {
    districtId: "914",
    wardId: "30793",
    name: "Xã Vĩnh Điều",
  },
  {
    districtId: "914",
    wardId: "30796",
    name: "Xã Tân Khánh Hòa",
  },
  {
    districtId: "914",
    wardId: "30797",
    name: "Xã Phú Lợi",
  },
  {
    districtId: "914",
    wardId: "30799",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "916",
    wardId: "31117",
    name: "Phường Cái Khế",
  },
  {
    districtId: "916",
    wardId: "31120",
    name: "Phường An Hòa",
  },
  {
    districtId: "916",
    wardId: "31123",
    name: "Phường Thới Bình",
  },
  {
    districtId: "916",
    wardId: "31126",
    name: "Phường An Nghiệp",
  },
  {
    districtId: "916",
    wardId: "31129",
    name: "Phường An Cư",
  },
  {
    districtId: "916",
    wardId: "31135",
    name: "Phường Tân An",
  },
  {
    districtId: "916",
    wardId: "31141",
    name: "Phường An Phú",
  },
  {
    districtId: "916",
    wardId: "31144",
    name: "Phường Xuân Khánh",
  },
  {
    districtId: "916",
    wardId: "31147",
    name: "Phường Hưng Lợi",
  },
  {
    districtId: "916",
    wardId: "31149",
    name: "Phường An Khánh",
  },
  {
    districtId: "916",
    wardId: "31150",
    name: "Phường An Bình",
  },
  {
    districtId: "917",
    wardId: "31153",
    name: "Phường Châu Văn Liêm",
  },
  {
    districtId: "917",
    wardId: "31154",
    name: "Phường Thới Hòa",
  },
  {
    districtId: "917",
    wardId: "31156",
    name: "Phường Thới Long",
  },
  {
    districtId: "917",
    wardId: "31157",
    name: "Phường Long Hưng",
  },
  {
    districtId: "917",
    wardId: "31159",
    name: "Phường Thới An",
  },
  {
    districtId: "917",
    wardId: "31162",
    name: "Phường Phước Thới",
  },
  {
    districtId: "917",
    wardId: "31165",
    name: "Phường Trường Lạc",
  },
  {
    districtId: "918",
    wardId: "31168",
    name: "Phường Bình Thủy",
  },
  {
    districtId: "918",
    wardId: "31169",
    name: "Phường Trà An",
  },
  {
    districtId: "918",
    wardId: "31171",
    name: "Phường Trà Nóc",
  },
  {
    districtId: "918",
    wardId: "31174",
    name: "Phường Thới An Đông",
  },
  {
    districtId: "918",
    wardId: "31177",
    name: "Phường An Thới",
  },
  {
    districtId: "918",
    wardId: "31178",
    name: "Phường Bùi Hữu Nghĩa",
  },
  {
    districtId: "918",
    wardId: "31180",
    name: "Phường Long Hòa",
  },
  {
    districtId: "918",
    wardId: "31183",
    name: "Phường Long Tuyền",
  },
  {
    districtId: "919",
    wardId: "31186",
    name: "Phường Lê Bình",
  },
  {
    districtId: "919",
    wardId: "31189",
    name: "Phường Hưng Phú",
  },
  {
    districtId: "919",
    wardId: "31192",
    name: "Phường Hưng Thạnh",
  },
  {
    districtId: "919",
    wardId: "31195",
    name: "Phường Ba Láng",
  },
  {
    districtId: "919",
    wardId: "31198",
    name: "Phường Thường Thạnh",
  },
  {
    districtId: "919",
    wardId: "31201",
    name: "Phường Phú Thứ",
  },
  {
    districtId: "919",
    wardId: "31204",
    name: "Phường Tân Phú",
  },
  {
    districtId: "923",
    wardId: "31207",
    name: "Phường Thốt Nốt",
  },
  {
    districtId: "923",
    wardId: "31210",
    name: "Phường Thới Thuận",
  },
  {
    districtId: "923",
    wardId: "31212",
    name: "Phường Thuận An",
  },
  {
    districtId: "923",
    wardId: "31213",
    name: "Phường Tân Lộc",
  },
  {
    districtId: "923",
    wardId: "31216",
    name: "Phường Trung Nhứt",
  },
  {
    districtId: "923",
    wardId: "31217",
    name: "Phường Thạnh Hoà",
  },
  {
    districtId: "923",
    wardId: "31219",
    name: "Phường Trung Kiên",
  },
  {
    districtId: "923",
    wardId: "31227",
    name: "Phường Tân Hưng",
  },
  {
    districtId: "923",
    wardId: "31228",
    name: "Phường Thuận Hưng",
  },
  {
    districtId: "924",
    wardId: "31211",
    name: "Xã Vĩnh Bình",
  },
  {
    districtId: "924",
    wardId: "31231",
    name: "Thị trấn Thanh An",
  },
  {
    districtId: "924",
    wardId: "31232",
    name: "Thị trấn Vĩnh Thạnh",
  },
  {
    districtId: "924",
    wardId: "31234",
    name: "Xã Thạnh Mỹ",
  },
  {
    districtId: "924",
    wardId: "31237",
    name: "Xã Vĩnh Trinh",
  },
  {
    districtId: "924",
    wardId: "31240",
    name: "Xã Thạnh An",
  },
  {
    districtId: "924",
    wardId: "31241",
    name: "Xã Thạnh Tiến",
  },
  {
    districtId: "924",
    wardId: "31243",
    name: "Xã Thạnh Thắng",
  },
  {
    districtId: "924",
    wardId: "31244",
    name: "Xã Thạnh Lợi",
  },
  {
    districtId: "924",
    wardId: "31246",
    name: "Xã Thạnh Qưới",
  },
  {
    districtId: "924",
    wardId: "31252",
    name: "Xã Thạnh Lộc",
  },
  {
    districtId: "925",
    wardId: "31222",
    name: "Xã Trung An",
  },
  {
    districtId: "925",
    wardId: "31225",
    name: "Xã Trung Thạnh",
  },
  {
    districtId: "925",
    wardId: "31249",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "925",
    wardId: "31255",
    name: "Xã Trung Hưng",
  },
  {
    districtId: "925",
    wardId: "31261",
    name: "Thị trấn Cờ Đỏ",
  },
  {
    districtId: "925",
    wardId: "31264",
    name: "Xã Thới Hưng",
  },
  {
    districtId: "925",
    wardId: "31273",
    name: "Xã Đông Hiệp",
  },
  {
    districtId: "925",
    wardId: "31274",
    name: "Xã Đông Thắng",
  },
  {
    districtId: "925",
    wardId: "31276",
    name: "Xã Thới Đông",
  },
  {
    districtId: "925",
    wardId: "31277",
    name: "Xã Thới Xuân",
  },
  {
    districtId: "926",
    wardId: "31299",
    name: "Thị trấn Phong Điền",
  },
  {
    districtId: "926",
    wardId: "31300",
    name: "Xã Nhơn Ái",
  },
  {
    districtId: "926",
    wardId: "31303",
    name: "Xã Giai Xuân",
  },
  {
    districtId: "926",
    wardId: "31306",
    name: "Xã Tân Thới",
  },
  {
    districtId: "926",
    wardId: "31309",
    name: "Xã Trường Long",
  },
  {
    districtId: "926",
    wardId: "31312",
    name: "Xã Mỹ Khánh",
  },
  {
    districtId: "926",
    wardId: "31315",
    name: "Xã Nhơn Nghĩa",
  },
  {
    districtId: "927",
    wardId: "31258",
    name: "Thị trấn Thới Lai",
  },
  {
    districtId: "927",
    wardId: "31267",
    name: "Xã Thới Thạnh",
  },
  {
    districtId: "927",
    wardId: "31268",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "927",
    wardId: "31270",
    name: "Xã Xuân Thắng",
  },
  {
    districtId: "927",
    wardId: "31279",
    name: "Xã Đông Bình",
  },
  {
    districtId: "927",
    wardId: "31282",
    name: "Xã Đông Thuận",
  },
  {
    districtId: "927",
    wardId: "31285",
    name: "Xã Thới Tân",
  },
  {
    districtId: "927",
    wardId: "31286",
    name: "Xã Trường Thắng",
  },
  {
    districtId: "927",
    wardId: "31288",
    name: "Xã Định Môn",
  },
  {
    districtId: "927",
    wardId: "31291",
    name: "Xã Trường Thành",
  },
  {
    districtId: "927",
    wardId: "31294",
    name: "Xã Trường Xuân",
  },
  {
    districtId: "927",
    wardId: "31297",
    name: "Xã Trường Xuân A",
  },
  {
    districtId: "927",
    wardId: "31298",
    name: "Xã Trường Xuân B",
  },
  {
    districtId: "930",
    wardId: "31318",
    name: "Phường I",
  },
  {
    districtId: "930",
    wardId: "31321",
    name: "Phường III",
  },
  {
    districtId: "930",
    wardId: "31324",
    name: "Phường IV",
  },
  {
    districtId: "930",
    wardId: "31327",
    name: "Phường V",
  },
  {
    districtId: "930",
    wardId: "31330",
    name: "Phường VII",
  },
  {
    districtId: "930",
    wardId: "31333",
    name: "Xã Vị Tân",
  },
  {
    districtId: "930",
    wardId: "31336",
    name: "Xã Hoả Lựu",
  },
  {
    districtId: "930",
    wardId: "31338",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "930",
    wardId: "31339",
    name: "Xã Hoả Tiến",
  },
  {
    districtId: "931",
    wardId: "31340",
    name: "Phường Ngã Bảy",
  },
  {
    districtId: "931",
    wardId: "31341",
    name: "Phường Lái Hiếu",
  },
  {
    districtId: "931",
    wardId: "31343",
    name: "Phường Hiệp Thành",
  },
  {
    districtId: "931",
    wardId: "31344",
    name: "Phường Hiệp Lợi",
  },
  {
    districtId: "931",
    wardId: "31411",
    name: "Xã Đại Thành",
  },
  {
    districtId: "931",
    wardId: "31414",
    name: "Xã Tân Thành",
  },
  {
    districtId: "932",
    wardId: "31342",
    name: "Thị trấn Một Ngàn",
  },
  {
    districtId: "932",
    wardId: "31345",
    name: "Xã Tân Hoà",
  },
  {
    districtId: "932",
    wardId: "31346",
    name: "Thị trấn Bảy Ngàn",
  },
  {
    districtId: "932",
    wardId: "31348",
    name: "Xã Trường Long Tây",
  },
  {
    districtId: "932",
    wardId: "31351",
    name: "Xã Trường Long A",
  },
  {
    districtId: "932",
    wardId: "31357",
    name: "Xã Nhơn Nghĩa A",
  },
  {
    districtId: "932",
    wardId: "31359",
    name: "Thị trấn Rạch Gòi",
  },
  {
    districtId: "932",
    wardId: "31360",
    name: "Xã Thạnh Xuân",
  },
  {
    districtId: "932",
    wardId: "31362",
    name: "Thị trấn Cái Tắc",
  },
  {
    districtId: "932",
    wardId: "31363",
    name: "Xã Tân Phú Thạnh",
  },
  {
    districtId: "933",
    wardId: "31366",
    name: "Thị Trấn Ngã Sáu",
  },
  {
    districtId: "933",
    wardId: "31369",
    name: "Xã Đông Thạnh",
  },
  {
    districtId: "933",
    wardId: "31375",
    name: "Xã Đông Phú",
  },
  {
    districtId: "933",
    wardId: "31378",
    name: "Xã Phú Hữu",
  },
  {
    districtId: "933",
    wardId: "31379",
    name: "Xã Phú Tân",
  },
  {
    districtId: "933",
    wardId: "31381",
    name: "Thị trấn Mái Dầm",
  },
  {
    districtId: "933",
    wardId: "31384",
    name: "Xã Đông Phước",
  },
  {
    districtId: "933",
    wardId: "31387",
    name: "Xã Đông Phước A",
  },
  {
    districtId: "934",
    wardId: "31393",
    name: "Thị trấn Kinh Cùng",
  },
  {
    districtId: "934",
    wardId: "31396",
    name: "Thị trấn Cây Dương",
  },
  {
    districtId: "934",
    wardId: "31399",
    name: "Xã Tân Bình",
  },
  {
    districtId: "934",
    wardId: "31402",
    name: "Xã Bình Thành",
  },
  {
    districtId: "934",
    wardId: "31405",
    name: "Xã Thạnh Hòa",
  },
  {
    districtId: "934",
    wardId: "31408",
    name: "Xã Long Thạnh",
  },
  {
    districtId: "934",
    wardId: "31417",
    name: "Xã Phụng Hiệp",
  },
  {
    districtId: "934",
    wardId: "31420",
    name: "Xã Hòa Mỹ",
  },
  {
    districtId: "934",
    wardId: "31423",
    name: "Xã Hòa An",
  },
  {
    districtId: "934",
    wardId: "31426",
    name: "Xã Phương Bình",
  },
  {
    districtId: "934",
    wardId: "31429",
    name: "Xã Hiệp Hưng",
  },
  {
    districtId: "934",
    wardId: "31432",
    name: "Xã Tân Phước Hưng",
  },
  {
    districtId: "934",
    wardId: "31433",
    name: "Thị trấn Búng Tàu",
  },
  {
    districtId: "934",
    wardId: "31435",
    name: "Xã Phương Phú",
  },
  {
    districtId: "934",
    wardId: "31438",
    name: "Xã Tân Long",
  },
  {
    districtId: "935",
    wardId: "31441",
    name: "Thị trấn Nàng Mau",
  },
  {
    districtId: "935",
    wardId: "31444",
    name: "Xã Vị Trung",
  },
  {
    districtId: "935",
    wardId: "31447",
    name: "Xã Vị Thuỷ",
  },
  {
    districtId: "935",
    wardId: "31450",
    name: "Xã Vị Thắng",
  },
  {
    districtId: "935",
    wardId: "31453",
    name: "Xã Vĩnh Thuận Tây",
  },
  {
    districtId: "935",
    wardId: "31456",
    name: "Xã Vĩnh Trung",
  },
  {
    districtId: "935",
    wardId: "31459",
    name: "Xã Vĩnh Tường",
  },
  {
    districtId: "935",
    wardId: "31462",
    name: "Xã Vị Đông",
  },
  {
    districtId: "935",
    wardId: "31465",
    name: "Xã Vị Thanh",
  },
  {
    districtId: "935",
    wardId: "31468",
    name: "Xã Vị Bình",
  },
  {
    districtId: "936",
    wardId: "31483",
    name: "Xã Thuận Hưng",
  },
  {
    districtId: "936",
    wardId: "31484",
    name: "Xã Thuận Hòa",
  },
  {
    districtId: "936",
    wardId: "31486",
    name: "Xã Vĩnh Thuận Đông",
  },
  {
    districtId: "936",
    wardId: "31489",
    name: "Thị trấn Vĩnh Viễn",
  },
  {
    districtId: "936",
    wardId: "31490",
    name: "Xã Vĩnh Viễn A",
  },
  {
    districtId: "936",
    wardId: "31492",
    name: "Xã Lương Tâm",
  },
  {
    districtId: "936",
    wardId: "31493",
    name: "Xã Lương Nghĩa",
  },
  {
    districtId: "936",
    wardId: "31495",
    name: "Xã Xà Phiên",
  },
  {
    districtId: "937",
    wardId: "31471",
    name: "Phường Thuận An",
  },
  {
    districtId: "937",
    wardId: "31472",
    name: "Phường Trà Lồng",
  },
  {
    districtId: "937",
    wardId: "31473",
    name: "Phường Bình Thạnh",
  },
  {
    districtId: "937",
    wardId: "31474",
    name: "Xã Long Bình",
  },
  {
    districtId: "937",
    wardId: "31475",
    name: "Phường Vĩnh Tường",
  },
  {
    districtId: "937",
    wardId: "31477",
    name: "Xã Long Trị",
  },
  {
    districtId: "937",
    wardId: "31478",
    name: "Xã Long Trị A",
  },
  {
    districtId: "937",
    wardId: "31480",
    name: "Xã Long Phú",
  },
  {
    districtId: "937",
    wardId: "31481",
    name: "Xã Tân Phú",
  },
  {
    districtId: "941",
    wardId: "31498",
    name: "Phường 5",
  },
  {
    districtId: "941",
    wardId: "31501",
    name: "Phường 7",
  },
  {
    districtId: "941",
    wardId: "31504",
    name: "Phường 8",
  },
  {
    districtId: "941",
    wardId: "31507",
    name: "Phường 6",
  },
  {
    districtId: "941",
    wardId: "31510",
    name: "Phường 2",
  },
  {
    districtId: "941",
    wardId: "31513",
    name: "Phường 1",
  },
  {
    districtId: "941",
    wardId: "31516",
    name: "Phường 4",
  },
  {
    districtId: "941",
    wardId: "31519",
    name: "Phường 3",
  },
  {
    districtId: "941",
    wardId: "31522",
    name: "Phường 9",
  },
  {
    districtId: "941",
    wardId: "31525",
    name: "Phường 10",
  },
  {
    districtId: "942",
    wardId: "31569",
    name: "Thị trấn Châu Thành",
  },
  {
    districtId: "942",
    wardId: "31570",
    name: "Xã Hồ Đắc Kiện",
  },
  {
    districtId: "942",
    wardId: "31573",
    name: "Xã Phú Tâm",
  },
  {
    districtId: "942",
    wardId: "31576",
    name: "Xã Thuận Hòa",
  },
  {
    districtId: "942",
    wardId: "31582",
    name: "Xã Phú Tân",
  },
  {
    districtId: "942",
    wardId: "31585",
    name: "Xã Thiện Mỹ",
  },
  {
    districtId: "942",
    wardId: "31594",
    name: "Xã An Hiệp",
  },
  {
    districtId: "942",
    wardId: "31600",
    name: "Xã An Ninh",
  },
  {
    districtId: "943",
    wardId: "31528",
    name: "Thị trấn Kế Sách",
  },
  {
    districtId: "943",
    wardId: "31531",
    name: "Thị trấn An Lạc Thôn",
  },
  {
    districtId: "943",
    wardId: "31534",
    name: "Xã Xuân Hòa",
  },
  {
    districtId: "943",
    wardId: "31537",
    name: "Xã Phong Nẫm",
  },
  {
    districtId: "943",
    wardId: "31540",
    name: "Xã An Lạc Tây",
  },
  {
    districtId: "943",
    wardId: "31543",
    name: "Xã Trinh Phú",
  },
  {
    districtId: "943",
    wardId: "31546",
    name: "Xã Ba Trinh",
  },
  {
    districtId: "943",
    wardId: "31549",
    name: "Xã Thới An Hội",
  },
  {
    districtId: "943",
    wardId: "31552",
    name: "Xã Nhơn Mỹ",
  },
  {
    districtId: "943",
    wardId: "31555",
    name: "Xã Kế Thành",
  },
  {
    districtId: "943",
    wardId: "31558",
    name: "Xã Kế An",
  },
  {
    districtId: "943",
    wardId: "31561",
    name: "Xã Đại Hải",
  },
  {
    districtId: "943",
    wardId: "31564",
    name: "Xã An Mỹ",
  },
  {
    districtId: "944",
    wardId: "31567",
    name: "Thị trấn Huỳnh Hữu Nghĩa",
  },
  {
    districtId: "944",
    wardId: "31579",
    name: "Xã Long Hưng",
  },
  {
    districtId: "944",
    wardId: "31588",
    name: "Xã Hưng Phú",
  },
  {
    districtId: "944",
    wardId: "31591",
    name: "Xã Mỹ Hương",
  },
  {
    districtId: "944",
    wardId: "31597",
    name: "Xã Mỹ Tú",
  },
  {
    districtId: "944",
    wardId: "31603",
    name: "Xã Mỹ Phước",
  },
  {
    districtId: "944",
    wardId: "31606",
    name: "Xã Thuận Hưng",
  },
  {
    districtId: "944",
    wardId: "31609",
    name: "Xã Mỹ Thuận",
  },
  {
    districtId: "944",
    wardId: "31612",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "945",
    wardId: "31615",
    name: "Thị trấn Cù Lao Dung",
  },
  {
    districtId: "945",
    wardId: "31618",
    name: "Xã An Thạnh 1",
  },
  {
    districtId: "945",
    wardId: "31621",
    name: "Xã An Thạnh Tây",
  },
  {
    districtId: "945",
    wardId: "31624",
    name: "Xã An Thạnh Đông",
  },
  {
    districtId: "945",
    wardId: "31627",
    name: "Xã Đại Ân 1",
  },
  {
    districtId: "945",
    wardId: "31630",
    name: "Xã An Thạnh 2",
  },
  {
    districtId: "945",
    wardId: "31633",
    name: "Xã An Thạnh 3",
  },
  {
    districtId: "945",
    wardId: "31636",
    name: "Xã An Thạnh Nam",
  },
  {
    districtId: "946",
    wardId: "31639",
    name: "Thị trấn Long Phú",
  },
  {
    districtId: "946",
    wardId: "31642",
    name: "Xã Song Phụng",
  },
  {
    districtId: "946",
    wardId: "31645",
    name: "Thị trấn Đại Ngãi",
  },
  {
    districtId: "946",
    wardId: "31648",
    name: "Xã Hậu Thạnh",
  },
  {
    districtId: "946",
    wardId: "31651",
    name: "Xã Long Đức",
  },
  {
    districtId: "946",
    wardId: "31654",
    name: "Xã Trường Khánh",
  },
  {
    districtId: "946",
    wardId: "31657",
    name: "Xã Phú Hữu",
  },
  {
    districtId: "946",
    wardId: "31660",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "946",
    wardId: "31663",
    name: "Xã Châu Khánh",
  },
  {
    districtId: "946",
    wardId: "31666",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "946",
    wardId: "31669",
    name: "Xã Long Phú",
  },
  {
    districtId: "947",
    wardId: "31684",
    name: "Thị trấn Mỹ Xuyên",
  },
  {
    districtId: "947",
    wardId: "31690",
    name: "Xã Đại Tâm",
  },
  {
    districtId: "947",
    wardId: "31693",
    name: "Xã Tham Đôn",
  },
  {
    districtId: "947",
    wardId: "31708",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "947",
    wardId: "31711",
    name: "Xã Ngọc Đông",
  },
  {
    districtId: "947",
    wardId: "31714",
    name: "Xã Thạnh Quới",
  },
  {
    districtId: "947",
    wardId: "31717",
    name: "Xã Hòa Tú 1",
  },
  {
    districtId: "947",
    wardId: "31720",
    name: "Xã Gia Hòa 1",
  },
  {
    districtId: "947",
    wardId: "31723",
    name: "Xã Ngọc Tố",
  },
  {
    districtId: "947",
    wardId: "31726",
    name: "Xã Gia Hòa 2",
  },
  {
    districtId: "947",
    wardId: "31729",
    name: "Xã Hòa Tú II",
  },
  {
    districtId: "948",
    wardId: "31732",
    name: "Phường 1",
  },
  {
    districtId: "948",
    wardId: "31735",
    name: "Phường 2",
  },
  {
    districtId: "948",
    wardId: "31738",
    name: "Xã Vĩnh Quới",
  },
  {
    districtId: "948",
    wardId: "31741",
    name: "Xã Tân Long",
  },
  {
    districtId: "948",
    wardId: "31744",
    name: "Xã Long Bình",
  },
  {
    districtId: "948",
    wardId: "31747",
    name: "Phường 3",
  },
  {
    districtId: "948",
    wardId: "31750",
    name: "Xã Mỹ Bình",
  },
  {
    districtId: "948",
    wardId: "31753",
    name: "Xã Mỹ Quới",
  },
  {
    districtId: "949",
    wardId: "31756",
    name: "Thị trấn Phú Lộc",
  },
  {
    districtId: "949",
    wardId: "31757",
    name: "Thị trấn Hưng Lợi",
  },
  {
    districtId: "949",
    wardId: "31759",
    name: "Xã Lâm Tân",
  },
  {
    districtId: "949",
    wardId: "31762",
    name: "Xã Thạnh Tân",
  },
  {
    districtId: "949",
    wardId: "31765",
    name: "Xã Lâm Kiết",
  },
  {
    districtId: "949",
    wardId: "31768",
    name: "Xã Tuân Tức",
  },
  {
    districtId: "949",
    wardId: "31771",
    name: "Xã Vĩnh Thành",
  },
  {
    districtId: "949",
    wardId: "31774",
    name: "Xã Thạnh Trị",
  },
  {
    districtId: "949",
    wardId: "31777",
    name: "Xã Vĩnh Lợi",
  },
  {
    districtId: "949",
    wardId: "31780",
    name: "Xã Châu Hưng",
  },
  {
    districtId: "950",
    wardId: "31783",
    name: "Phường 1",
  },
  {
    districtId: "950",
    wardId: "31786",
    name: "Xã Hòa Đông",
  },
  {
    districtId: "950",
    wardId: "31789",
    name: "Phường Khánh Hòa",
  },
  {
    districtId: "950",
    wardId: "31792",
    name: "Xã Vĩnh Hiệp",
  },
  {
    districtId: "950",
    wardId: "31795",
    name: "Xã Vĩnh Hải",
  },
  {
    districtId: "950",
    wardId: "31798",
    name: "Xã Lạc Hòa",
  },
  {
    districtId: "950",
    wardId: "31801",
    name: "Phường 2",
  },
  {
    districtId: "950",
    wardId: "31804",
    name: "Phường Vĩnh Phước",
  },
  {
    districtId: "950",
    wardId: "31807",
    name: "Xã Vĩnh Tân",
  },
  {
    districtId: "950",
    wardId: "31810",
    name: "Xã Lai Hòa",
  },
  {
    districtId: "951",
    wardId: "31672",
    name: "Xã Đại Ân  2",
  },
  {
    districtId: "951",
    wardId: "31673",
    name: "Thị trấn Trần Đề",
  },
  {
    districtId: "951",
    wardId: "31675",
    name: "Xã Liêu Tú",
  },
  {
    districtId: "951",
    wardId: "31678",
    name: "Xã Lịch Hội Thượng",
  },
  {
    districtId: "951",
    wardId: "31679",
    name: "Thị trấn Lịch Hội Thượng",
  },
  {
    districtId: "951",
    wardId: "31681",
    name: "Xã Trung Bình",
  },
  {
    districtId: "951",
    wardId: "31687",
    name: "Xã Tài Văn",
  },
  {
    districtId: "951",
    wardId: "31696",
    name: "Xã Viên An",
  },
  {
    districtId: "951",
    wardId: "31699",
    name: "Xã Thạnh Thới An",
  },
  {
    districtId: "951",
    wardId: "31702",
    name: "Xã Thạnh Thới Thuận",
  },
  {
    districtId: "951",
    wardId: "31705",
    name: "Xã Viên Bình",
  },
  {
    districtId: "954",
    wardId: "31813",
    name: "Phường 2",
  },
  {
    districtId: "954",
    wardId: "31816",
    name: "Phường 3",
  },
  {
    districtId: "954",
    wardId: "31819",
    name: "Phường 5",
  },
  {
    districtId: "954",
    wardId: "31822",
    name: "Phường 7",
  },
  {
    districtId: "954",
    wardId: "31825",
    name: "Phường 1",
  },
  {
    districtId: "954",
    wardId: "31828",
    name: "Phường 8",
  },
  {
    districtId: "954",
    wardId: "31831",
    name: "Phường Nhà Mát",
  },
  {
    districtId: "954",
    wardId: "31834",
    name: "Xã Vĩnh Trạch",
  },
  {
    districtId: "954",
    wardId: "31837",
    name: "Xã Vĩnh Trạch Đông",
  },
  {
    districtId: "954",
    wardId: "31840",
    name: "Xã Hiệp Thành",
  },
  {
    districtId: "956",
    wardId: "31843",
    name: "Thị trấn Ngan Dừa",
  },
  {
    districtId: "956",
    wardId: "31846",
    name: "Xã Ninh Quới",
  },
  {
    districtId: "956",
    wardId: "31849",
    name: "Xã Ninh Quới A",
  },
  {
    districtId: "956",
    wardId: "31852",
    name: "Xã Ninh Hòa",
  },
  {
    districtId: "956",
    wardId: "31855",
    name: "Xã Lộc Ninh",
  },
  {
    districtId: "956",
    wardId: "31858",
    name: "Xã Vĩnh Lộc",
  },
  {
    districtId: "956",
    wardId: "31861",
    name: "Xã Vĩnh Lộc A",
  },
  {
    districtId: "956",
    wardId: "31863",
    name: "Xã Ninh Thạnh Lợi A",
  },
  {
    districtId: "956",
    wardId: "31864",
    name: "Xã Ninh Thạnh Lợi",
  },
  {
    districtId: "957",
    wardId: "31867",
    name: "Thị trấn Phước Long",
  },
  {
    districtId: "957",
    wardId: "31870",
    name: "Xã Vĩnh Phú Đông",
  },
  {
    districtId: "957",
    wardId: "31873",
    name: "Xã Vĩnh Phú Tây",
  },
  {
    districtId: "957",
    wardId: "31876",
    name: "Xã Phước Long",
  },
  {
    districtId: "957",
    wardId: "31879",
    name: "Xã Hưng Phú",
  },
  {
    districtId: "957",
    wardId: "31882",
    name: "Xã Vĩnh Thanh",
  },
  {
    districtId: "957",
    wardId: "31885",
    name: "Xã Phong Thạnh Tây A",
  },
  {
    districtId: "957",
    wardId: "31888",
    name: "Xã Phong Thạnh Tây B",
  },
  {
    districtId: "958",
    wardId: "31894",
    name: "Xã Vĩnh Hưng",
  },
  {
    districtId: "958",
    wardId: "31897",
    name: "Xã Vĩnh Hưng A",
  },
  {
    districtId: "958",
    wardId: "31900",
    name: "Thị trấn Châu Hưng",
  },
  {
    districtId: "958",
    wardId: "31903",
    name: "Xã Châu Hưng A",
  },
  {
    districtId: "958",
    wardId: "31906",
    name: "Xã Hưng Thành",
  },
  {
    districtId: "958",
    wardId: "31909",
    name: "Xã Hưng Hội",
  },
  {
    districtId: "958",
    wardId: "31912",
    name: "Xã Châu Thới",
  },
  {
    districtId: "958",
    wardId: "31921",
    name: "Xã Long Thạnh",
  },
  {
    districtId: "959",
    wardId: "31942",
    name: "Phường 1",
  },
  {
    districtId: "959",
    wardId: "31945",
    name: "Phường Hộ Phòng",
  },
  {
    districtId: "959",
    wardId: "31948",
    name: "Xã Phong Thạnh Đông",
  },
  {
    districtId: "959",
    wardId: "31951",
    name: "Phường Láng Tròn",
  },
  {
    districtId: "959",
    wardId: "31954",
    name: "Xã Phong Tân",
  },
  {
    districtId: "959",
    wardId: "31957",
    name: "Xã Tân Phong",
  },
  {
    districtId: "959",
    wardId: "31960",
    name: "Xã Phong Thạnh",
  },
  {
    districtId: "959",
    wardId: "31963",
    name: "Xã Phong Thạnh A",
  },
  {
    districtId: "959",
    wardId: "31966",
    name: "Xã Phong Thạnh Tây",
  },
  {
    districtId: "959",
    wardId: "31969",
    name: "Xã Tân Thạnh",
  },
  {
    districtId: "960",
    wardId: "31972",
    name: "Thị trấn Gành Hào",
  },
  {
    districtId: "960",
    wardId: "31975",
    name: "Xã Long Điền Đông",
  },
  {
    districtId: "960",
    wardId: "31978",
    name: "Xã Long Điền Đông A",
  },
  {
    districtId: "960",
    wardId: "31981",
    name: "Xã Long Điền",
  },
  {
    districtId: "960",
    wardId: "31984",
    name: "Xã Long Điền Tây",
  },
  {
    districtId: "960",
    wardId: "31985",
    name: "Xã Điền Hải",
  },
  {
    districtId: "960",
    wardId: "31987",
    name: "Xã An Trạch",
  },
  {
    districtId: "960",
    wardId: "31988",
    name: "Xã An Trạch A",
  },
  {
    districtId: "960",
    wardId: "31990",
    name: "Xã An Phúc",
  },
  {
    districtId: "960",
    wardId: "31993",
    name: "Xã Định Thành",
  },
  {
    districtId: "960",
    wardId: "31996",
    name: "Xã Định Thành A",
  },
  {
    districtId: "961",
    wardId: "31891",
    name: "Thị trấn Hòa Bình",
  },
  {
    districtId: "961",
    wardId: "31915",
    name: "Xã Minh Diệu",
  },
  {
    districtId: "961",
    wardId: "31918",
    name: "Xã Vĩnh Bình",
  },
  {
    districtId: "961",
    wardId: "31924",
    name: "Xã Vĩnh Mỹ B",
  },
  {
    districtId: "961",
    wardId: "31927",
    name: "Xã Vĩnh Hậu",
  },
  {
    districtId: "961",
    wardId: "31930",
    name: "Xã Vĩnh Hậu A",
  },
  {
    districtId: "961",
    wardId: "31933",
    name: "Xã Vĩnh Mỹ A",
  },
  {
    districtId: "961",
    wardId: "31936",
    name: "Xã Vĩnh Thịnh",
  },
  {
    districtId: "964",
    wardId: "31999",
    name: "Phường 9",
  },
  {
    districtId: "964",
    wardId: "32002",
    name: "Phường 4",
  },
  {
    districtId: "964",
    wardId: "32005",
    name: "Phường 1",
  },
  {
    districtId: "964",
    wardId: "32008",
    name: "Phường 5",
  },
  {
    districtId: "964",
    wardId: "32011",
    name: "Phường 2",
  },
  {
    districtId: "964",
    wardId: "32014",
    name: "Phường 8",
  },
  {
    districtId: "964",
    wardId: "32017",
    name: "Phường 6",
  },
  {
    districtId: "964",
    wardId: "32020",
    name: "Phường 7",
  },
  {
    districtId: "964",
    wardId: "32022",
    name: "Phường Tân Xuyên",
  },
  {
    districtId: "964",
    wardId: "32023",
    name: "Xã An Xuyên",
  },
  {
    districtId: "964",
    wardId: "32025",
    name: "Phường Tân Thành",
  },
  {
    districtId: "964",
    wardId: "32026",
    name: "Xã Tân Thành",
  },
  {
    districtId: "964",
    wardId: "32029",
    name: "Xã Tắc Vân",
  },
  {
    districtId: "964",
    wardId: "32032",
    name: "Xã Lý Văn Lâm",
  },
  {
    districtId: "964",
    wardId: "32035",
    name: "Xã Định Bình",
  },
  {
    districtId: "964",
    wardId: "32038",
    name: "Xã Hòa Thành",
  },
  {
    districtId: "964",
    wardId: "32041",
    name: "Xã Hòa Tân",
  },
  {
    districtId: "966",
    wardId: "32044",
    name: "Thị trấn U Minh",
  },
  {
    districtId: "966",
    wardId: "32047",
    name: "Xã Khánh Hòa",
  },
  {
    districtId: "966",
    wardId: "32048",
    name: "Xã Khánh Thuận",
  },
  {
    districtId: "966",
    wardId: "32050",
    name: "Xã Khánh Tiến",
  },
  {
    districtId: "966",
    wardId: "32053",
    name: "Xã Nguyễn Phích",
  },
  {
    districtId: "966",
    wardId: "32056",
    name: "Xã Khánh Lâm",
  },
  {
    districtId: "966",
    wardId: "32059",
    name: "Xã Khánh An",
  },
  {
    districtId: "966",
    wardId: "32062",
    name: "Xã Khánh Hội",
  },
  {
    districtId: "967",
    wardId: "32065",
    name: "Thị trấn Thới Bình",
  },
  {
    districtId: "967",
    wardId: "32068",
    name: "Xã Biển Bạch",
  },
  {
    districtId: "967",
    wardId: "32069",
    name: "Xã Tân Bằng",
  },
  {
    districtId: "967",
    wardId: "32071",
    name: "Xã Trí Phải",
  },
  {
    districtId: "967",
    wardId: "32072",
    name: "Xã Trí Lực",
  },
  {
    districtId: "967",
    wardId: "32074",
    name: "Xã Biển Bạch Đông",
  },
  {
    districtId: "967",
    wardId: "32077",
    name: "Xã Thới Bình",
  },
  {
    districtId: "967",
    wardId: "32080",
    name: "Xã Tân Phú",
  },
  {
    districtId: "967",
    wardId: "32083",
    name: "Xã Tân Lộc Bắc",
  },
  {
    districtId: "967",
    wardId: "32086",
    name: "Xã Tân Lộc",
  },
  {
    districtId: "967",
    wardId: "32089",
    name: "Xã Tân Lộc Đông",
  },
  {
    districtId: "967",
    wardId: "32092",
    name: "Xã Hồ Thị Kỷ",
  },
  {
    districtId: "968",
    wardId: "32095",
    name: "Thị trấn Trần Văn Thời",
  },
  {
    districtId: "968",
    wardId: "32098",
    name: "Thị trấn Sông Đốc",
  },
  {
    districtId: "968",
    wardId: "32101",
    name: "Xã Khánh Bình Tây Bắc",
  },
  {
    districtId: "968",
    wardId: "32104",
    name: "Xã Khánh Bình Tây",
  },
  {
    districtId: "968",
    wardId: "32107",
    name: "Xã Trần Hợi",
  },
  {
    districtId: "968",
    wardId: "32108",
    name: "Xã Khánh Lộc",
  },
  {
    districtId: "968",
    wardId: "32110",
    name: "Xã Khánh Bình",
  },
  {
    districtId: "968",
    wardId: "32113",
    name: "Xã Khánh Hưng",
  },
  {
    districtId: "968",
    wardId: "32116",
    name: "Xã Khánh Bình Đông",
  },
  {
    districtId: "968",
    wardId: "32119",
    name: "Xã Khánh Hải",
  },
  {
    districtId: "968",
    wardId: "32122",
    name: "Xã Lợi An",
  },
  {
    districtId: "968",
    wardId: "32124",
    name: "Xã Phong Điền",
  },
  {
    districtId: "968",
    wardId: "32125",
    name: "Xã Phong Lạc",
  },
  {
    districtId: "969",
    wardId: "32128",
    name: "Thị trấn Cái Nước",
  },
  {
    districtId: "969",
    wardId: "32130",
    name: "Xã Thạnh Phú",
  },
  {
    districtId: "969",
    wardId: "32131",
    name: "Xã Lương Thế Trân",
  },
  {
    districtId: "969",
    wardId: "32134",
    name: "Xã Phú Hưng",
  },
  {
    districtId: "969",
    wardId: "32137",
    name: "Xã Tân Hưng",
  },
  {
    districtId: "969",
    wardId: "32140",
    name: "Xã Hưng Mỹ",
  },
  {
    districtId: "969",
    wardId: "32141",
    name: "Xã Hoà Mỹ",
  },
  {
    districtId: "969",
    wardId: "32142",
    name: "Xã Đông Hưng",
  },
  {
    districtId: "969",
    wardId: "32143",
    name: "Xã Đông Thới",
  },
  {
    districtId: "969",
    wardId: "32146",
    name: "Xã Tân Hưng Đông",
  },
  {
    districtId: "969",
    wardId: "32149",
    name: "Xã Trần Thới",
  },
  {
    districtId: "970",
    wardId: "32152",
    name: "Thị trấn Đầm Dơi",
  },
  {
    districtId: "970",
    wardId: "32155",
    name: "Xã Tạ An Khương",
  },
  {
    districtId: "970",
    wardId: "32158",
    name: "Xã Tạ An Khương  Đông",
  },
  {
    districtId: "970",
    wardId: "32161",
    name: "Xã Trần Phán",
  },
  {
    districtId: "970",
    wardId: "32162",
    name: "Xã Tân Trung",
  },
  {
    districtId: "970",
    wardId: "32164",
    name: "Xã Tân Đức",
  },
  {
    districtId: "970",
    wardId: "32167",
    name: "Xã Tân Thuận",
  },
  {
    districtId: "970",
    wardId: "32170",
    name: "Xã Tạ An Khương  Nam",
  },
  {
    districtId: "970",
    wardId: "32173",
    name: "Xã Tân Duyệt",
  },
  {
    districtId: "970",
    wardId: "32174",
    name: "Xã Tân Dân",
  },
  {
    districtId: "970",
    wardId: "32176",
    name: "Xã Tân Tiến",
  },
  {
    districtId: "970",
    wardId: "32179",
    name: "Xã Quách Phẩm Bắc",
  },
  {
    districtId: "970",
    wardId: "32182",
    name: "Xã Quách Phẩm",
  },
  {
    districtId: "970",
    wardId: "32185",
    name: "Xã Thanh Tùng",
  },
  {
    districtId: "970",
    wardId: "32186",
    name: "Xã Ngọc Chánh",
  },
  {
    districtId: "970",
    wardId: "32188",
    name: "Xã Nguyễn Huân",
  },
  {
    districtId: "971",
    wardId: "32191",
    name: "Thị Trấn Năm Căn",
  },
  {
    districtId: "971",
    wardId: "32194",
    name: "Xã Hàm Rồng",
  },
  {
    districtId: "971",
    wardId: "32197",
    name: "Xã Hiệp Tùng",
  },
  {
    districtId: "971",
    wardId: "32200",
    name: "Xã Đất Mới",
  },
  {
    districtId: "971",
    wardId: "32201",
    name: "Xã Lâm Hải",
  },
  {
    districtId: "971",
    wardId: "32203",
    name: "Xã Hàng Vịnh",
  },
  {
    districtId: "971",
    wardId: "32206",
    name: "Xã Tam Giang",
  },
  {
    districtId: "971",
    wardId: "32209",
    name: "Xã Tam Giang Đông",
  },
  {
    districtId: "972",
    wardId: "32212",
    name: "Thị trấn Cái Đôi Vàm",
  },
  {
    districtId: "972",
    wardId: "32214",
    name: "Xã Phú Thuận",
  },
  {
    districtId: "972",
    wardId: "32215",
    name: "Xã Phú Mỹ",
  },
  {
    districtId: "972",
    wardId: "32218",
    name: "Xã Phú Tân",
  },
  {
    districtId: "972",
    wardId: "32221",
    name: "Xã Tân Hải",
  },
  {
    districtId: "972",
    wardId: "32224",
    name: "Xã Việt Thắng",
  },
  {
    districtId: "972",
    wardId: "32227",
    name: "Xã Tân Hưng Tây",
  },
  {
    districtId: "972",
    wardId: "32228",
    name: "Xã Rạch Chèo",
  },
  {
    districtId: "972",
    wardId: "32230",
    name: "Xã Nguyễn Việt Khái",
  },
  {
    districtId: "973",
    wardId: "32233",
    name: "Xã Tam Giang Tây",
  },
  {
    districtId: "973",
    wardId: "32236",
    name: "Xã Tân Ân Tây",
  },
  {
    districtId: "973",
    wardId: "32239",
    name: "Xã Viên An Đông",
  },
  {
    districtId: "973",
    wardId: "32242",
    name: "Xã Viên An",
  },
  {
    districtId: "973",
    wardId: "32244",
    name: "Thị trấn Rạch Gốc",
  },
  {
    districtId: "973",
    wardId: "32245",
    name: "Xã Tân Ân",
  },
  {
    districtId: "973",
    wardId: "32248",
    name: "Xã Đất Mũi",
  },
];

export default { city, district, wart };
