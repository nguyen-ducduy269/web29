/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
function getDaysToNextBirthday(month, day) {
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return -1;
  }
  let nowDate = new Date();
  let brithday = new Date();

  if (nowDate.getMonth() > month - 1) {
    brithday.setFullYear(nowDate.getFullYear() + 1, month - 1, day);
  } else {
    brithday.setMonth(month - 1, day);
  }
  return (brithday - nowDate) / (1000 * 86400);
}
console.log(getDaysToNextBirthday(09, 26));
/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
const users = [
  {
    fullname: "Nguyen Duy",
    dateOfBirth: "2002-09-26",
  },
  {
    fullname: "Ba Nguyen",
    dateOfBirth: "1992-10-06",
  },
];
function todayBirthday(users) {
  let usersToday = []; //mảng kết quả
  let today = new Date(); // lấy giá trị ngày hôm nay
  //duyệt qua mảng user
  for (const user of users) {
    //chuyển chuỗi ngày sinh thành đối tượng date
    let dob = new Date(user.dateOfBirth);
    //so sánh ngày sinh với hiện tại
    if (
      today.getMonth() === dob.getMonth() &&
      today.getDate() === dob.getDate()
    ) {
      //nếu trùng thì đưa vào mảng kết quả
      usersToday.push(user);
    }
  }
  return usersToday;
}
console.log(todayBirthday(users));
/**
 * Tạo chuỗi biểu thị thời gian đã trôi qua tính đến thời điểm hiện tại theo quy tắc sau:
 *
 * - Nếu thời gian đã trôi qua ít hơn 5 giây thì trả về "Vừa xong"
 * - Nếu thời gian đã trôi qua ít hơn 1 phút thì trả về "X giây trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 giờ thì trả về "X phút trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 ngày thì trả về "X giờ trước"
 * - Nếu thời gian đã trôi qua ít hơn 1 tháng thì trả về "X ngày trước" (chú ý so sánh xem có cùng tháng hay không)
 * - Nếu thời gian đã trôi qua ít hơn 1 năm thì trả về "X tháng trước"
 * - Nếu thời gian đã trôi qua nhiều hơn 1 năm thì trả về "Ngày xửa ngày xưa, ..."
 *
 * @param {Date} date Ngày bất kỳ
 *
 * @returns {string} Chuỗi biểu thị thời gian đã trôi qua
 */
function humanize(date) {
  const FIVE_SECOND = 1000 * 5;
  const ONE_MINUTE = 1000 * 60;
  const ONE_HOUR = 1000 * 60 * 60;
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
  const ONE_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;
  const SECOND = 1000;

  const pass = Date.now() - date.getTime();
  if (pass <= FIVE_SECOND) return "vừa xong";
  else if (pass <= ONE_MINUTE) return Math.floor(pass / SECOND) + " giây trước";
  else if (pass < ONE_HOUR)
    return Math.floor(pass / ONE_MINUTE) + " phút trước";
  else if (pass < ONE_DAY) return Math.floor(pass / ONE_HOUR) + " giờ trước";
  else if (pass < ONE_MONTH) return Math.floor(pass / ONE_DAY) + " ngày trước";
  else if (pass < ONE_YEAR)
    return Math.floor(pass / ONE_MONTH) + " tháng trước";
}
console.log(humanize(new Date()));
const demo = new Date(Date.now() - 8630000000);
console.log(humanize(demo));
