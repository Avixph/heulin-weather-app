import { useSelector } from "react-redux";
import { weatherIconURL } from "../services/constants";

const DailyWeather = () => {
  const dailyWeather = useSelector(
    (state) => state?.weatherSearches?.searchWeather?.list
  );
  console.log(dailyWeather);

  const getDailyWeather = dailyWeather
    ?.filter((value, index, Arr) => (index - 6) % 8 == 0)
    .map((dayWeather, index) => {
      const currentDate = new Date(dayWeather?.dt * 1000);
      console.log(currentDate);
      let dayString = currentDate.toLocaleString("en-US", { weekday: "long" });

      return (
        <div
          key={index}
          className="relative e px-4 py-3  flex items-center space-x-2 "
        >
          <div className="flex-shrink-0">
            <img
              className="h-22 w-22 "
              src={`${weatherIconURL}${dayWeather?.weather[0]?.icon}@2x.png`}
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-xl text-mainBlack font-medium">
              {dayString}
            </p>
            <p className="text-md text-gray-500 font-lg truncate">
              {Math.floor(dayWeather?.main?.temp_max)}° / <span />
              {Math.floor(dayWeather?.main?.temp_min)}°
            </p>
          </div>
        </div>
      );
    });
  // const getDailyWeather = dailyWeather
  //   ?.filter((index) => (index - 6) % 8 === 0)
  //   .map((dayWeather, index) => {
  //     const currentDate = new Date(dayWeather?.dt * 1000);
  //     let dayString = currentDate.toLocaleString("en-US", { weekday: "long" });

  //     return (
  //       <div
  //         key={index}
  //         className="relative e px-4 py-3  flex items-center space-x-2 "
  //       >
  //         <div className="flex-shrink-0">
  //           <img
  //             className="h-11 w-11 rounded-full"
  //             src={`${weatherIconURL}${dayWeather?.weather[0]?.icon}@2x.png`}
  //             alt=""
  //           />
  //         </div>
  //         <div className="flex-1 min-w-0">
  //           <span className="absolute inset-0" aria-hidden="true" />
  //           <p className="text-sm font-medium text-mainBlack">{dayString}</p>
  //           <p className="text-sm text-gray-500 truncate">
  //             {Math.floor(dayWeather?.main?.temp_max)}°
  //             {Math.floor(dayWeather?.main?.temp_min)}°
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {getDailyWeather}
    </div>
  );
};

export default DailyWeather;
