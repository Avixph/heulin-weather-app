import { useSelector } from "react-redux";
import { weatherIconURL } from "../services/constants";

const CurrentWeather = () => {
  const currentWeather = useSelector(
    (state) => state?.weatherSearches?.searchWeather?.list[0]
  );
  const currentLocation = useSelector(
    (state) => state?.weatherSearches?.searchWeather?.city
  );

  console.log(currentWeather);
  console.log(currentWeather);

  // const showWeather = currentWeather.map((weather) => {
  //   return weather.main;
  //   // return <Task {...task} key={task._id} />;
  // });
  // console.log(showWeather);

  // const weatherDescription = currentWeather.map((weathers) => {
  //   <h3 className="mt-6 text-gray-900 text-2xl font-medium">
  //     {weathers?.weather?.description}
  //   </h3>;
  // });

  return (
    <ul role="list">
      <li className=" flex flex-col text-center   divide-y divide-gray-200">
        <div className="flex-1 flex flex-col p-8">
          <h3 className="mt-6 text-gray-900 text-3xl font-medium">
            {currentLocation?.name}
          </h3>
          <img
            className="w-26 h-26 flex-shrink-0 mx-auto "
            src={`${weatherIconURL}${currentWeather?.weather[0]?.icon}@2x.png`}
            alt=""
          />

          <h3 className="mt-6 text-gray-900 text-xl font-small">
            {/* {currentLocation?.weather[0]?.description} */}
            {currentWeather?.weather[0]?.description}
          </h3>
          {/* {weatherDescription} */}
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dd className="text-gray-500 text-xl font-medium">
              {Math.floor(currentWeather?.main?.temp)}°
            </dd>
            <dd className="mt-3">
              <p className="px-2 py-1 text-gray-500 text-md font-medium ">
                H:{Math.floor(currentWeather?.main?.temp_max)}° <span />
                L:{Math.floor(currentWeather?.main?.temp_min)}°
              </p>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  );
};

export default CurrentWeather;
