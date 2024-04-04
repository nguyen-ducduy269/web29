import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { abi } from "./abi";
const Exam2 = () => {
  const { address } = useAccount();
  //// sử dụng allowance để check, nếu = 0 thì Approval
  //// địa chỉ Contract: 0xE705cF5960c076b98aEF1f5BB5E922dE64b34Aa5
  // 115792089237316195423570985008687907853269984665640564039457584007913129639935

  const { data: balance } = useReadContract({
    address,
    abi,
    functionName: "allowance",
    args: [
      "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
      "0xE705cF5960c076b98aEF1f5BB5E922dE64b34Aa5",
    ],
  });

  const { data } = useReadContracts({
    contracts: [
      {
        address,
        abi,
        functionName: "allowance",
        args: [
          "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
          "0xE705cF5960c076b98aEF1f5BB5E922dE64b34Aa5",
        ],
      },
    ],
  });

  console.log("balance", balance);
  console.log("data", data);

  return <div>Allowance</div>;
};

export default Exam2;
