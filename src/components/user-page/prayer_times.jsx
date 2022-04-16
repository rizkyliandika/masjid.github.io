export const PrayerTimes = () => {
    return (
        <div style={{ margin: 'auto', border: '1px solid #c0c0c0' }} id="prayer-container">
            <div className="prayer_time">Waktu Sholat</div>
            <div id="prayer_city"></div>
            <div id="prayer_date"></div>
            <div id="prayer_clock"></div>
            <table>
                <tbody>
                    <tr>
                        <td>Imsyak</td>
                        <td id="Imsak"></td>
                    </tr>
                    <tr>
                        <td>Shubuh</td>
                        <td id="Fajr"></td>
                    </tr>
                    <tr>
                        <td>Dzuhur</td>
                        <td id="Dhuhr"></td>
                    </tr>
                    <tr>
                        <td>Ashr</td>
                        <td id="Asr"></td>
                    </tr>
                    <tr>
                        <td>Maghrib</td>
                        <td id="Maghrib"></td>
                    </tr>
                    <tr>
                        <td>Isya</td>
                        <td id="Isha"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}