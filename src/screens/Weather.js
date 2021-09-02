import CurrentWeather from "../components/CurrentWeather";
import DailyWeather from "../components/DailyWeather";
import WeatherSearch from "../components/WeatherSearch";

const Weather = () => {
  return (
    <div>
      <div className="pt-8">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 lg:py-2">
            <WeatherSearch />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 md:px-4 lg:px-6">
            <div className="px-4 py-8 sm:px-0">
              <div className="rounded-sm bg-secondBlue overflow-hidden shadow-sm divide-solid divide-y divide-gray-50 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                <div className="relative group bg-secondBlue p-6 ">
                  <CurrentWeather />
                </div>
                <div className="relative group bg-secondBlue p-6 ">
                  <DailyWeather />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Weather;
