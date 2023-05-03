import React, { useEffect, useRef } from 'react'
import AllBranchCards from './AllBranchCards';
import info from '../../../../assets/image/info.png'

function AllBranch() {
    const mapContainerRef = useRef(null);
    const allBranchAPIKey = 'AIzaSyD1k6_eq-C7ltxMMUo6cIyBTY-klnTEH3s';

    const mapStyles = [
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#d3d3d3",
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#efefef",
                },
            ],
        },
    ];

    useEffect(() => {
        window.initMap = () => {
            const centerLat = (40.830135 + 40.366504 + 41.362657 + 38.755867 + 40.686402 + 40.370860 + 40.366561) / 7;
            const centerLng = (46.021361 + 49.821261 + 48.527879 + 48.850128 + 46.383239 + 47.137526 + 49.821346) / 7;


            const map = new window.google.maps.Map(mapContainerRef.current, {
                center: { lat: centerLat, lng: centerLng },
                zoom: 6,
                styles: mapStyles,
            });


            new window.google.maps.Marker({
                position: { lat: 40.830135, lng: 46.021361 },
                map: map,
                title: "My Marker 1",
            });

            new window.google.maps.Marker({
                position: { lat: 40.366504, lng: 49.821261 },
                map: map,
                title: "My Marker 2",

            });
            new window.google.maps.Marker({
                position: { lat: 41.362657, lng: 48.527879 },
                map: map,
                title: "My Marker 3",

            });
            new window.google.maps.Marker({
                position: { lat: 38.755867, lng: 48.850128 },
                map: map,
                title: "My Marker 4",

            });
            new window.google.maps.Marker({
                position: { lat: 40.686402, lng: 46.383239 },
                map: map,
                title: "My Marker 5",

            });
            new window.google.maps.Marker({
                position: { lat: 40.370860, lng: 47.137526 },
                map: map,
                title: "My Marker 6",

            });
            new window.google.maps.Marker({
                position: { lat: 40.366561, lng: 49.821346 },
                map: map,
                title: "My Marker 7",

            });
        };

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${allBranchAPIKey}&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className='allbranch'>

            <div className="container">
                <div className="map">
                    <div ref={mapContainerRef} style={{ borderRadius: "10px", width: '100%', height: '400px' }} />
                </div>

                <div className="branches row g-4">
                    <AllBranchCards title="Mərkəzi ofis" description="Bakı ş., R.Behbudov küç. 55, AZ1014" />
                    <AllBranchCards title="Rəqəmsal filial" description="S.S.Axundov küç., 42" />
                    <AllBranchCards title="Tovuz filialı" description="Tovuz ş., Sabir küç., 21" />
                    <AllBranchCards title="Bərdə filialı" description="Bərdə ş., H.Əliyev pr., 72" />
                    <AllBranchCards title="Xırdalan filalı" description="Xırdalan ş., M.Hüseynzadə küç., 6" />
                    <AllBranchCards title="Quba filalı" description=" Quba ş., H.Əliyev pr., 160OA,Az5500" />
                    <AllBranchCards title="Şəki filialı" description="Şəki ş., M.Ə.Rəsulzadə pr., 160A, AZ5500" />
                    <AllBranchCards title="Lənkəran filialı" description="Lənkəran ş., Z.Əliyeva küç., ev 12, AZ4200" />
                    <AllBranchCards title="Şəmkir filialı" description="Şəmkir ş., 20 Yanvar küç., 1, AZ5700" />
                    <AllBranchCards title="Mingəçevir filialı" description="Mingəçevir ş., Heydər Əliyev pr., 36, AZ4500" />
                    <AllBranchCards title="Yasamal filialı" description="Bakı ş., Bəsti Bağırova küç., 2, AZ1065" />
                    <AllBranchCards title="Gəncə filialı" description="Gəncə ş., Atatürk pr., 249, AZ2003" />
                    <AllBranchCards title="Kəpəz filialı" description="Gəncə şəhəri, Kəpəz r-nu, Ş.Hüseynov küç., 2, AZ2011" />
                    <AllBranchCards title="İsmayıllı filialı" description="İsmayıllı şəh., M.F. Axundov küç., 18A" />
                    <AllBranchCards title="Neftçilər filialı" description="Bakı, Nizami r-nu., Qara Qarayev pr., 66, AZ1096" />
                    <AllBranchCards title="İsmayıllı filialı" description="İsmayıllı şəh., M.F. Axundov küç., 18A" />
                    <AllBranchCards title="Gəncə filialı" description="Gəncə ş., Atatürk pr., 249, AZ2003" />
                    <AllBranchCards title="Şəki filialı" description="Şəki ş., M.Ə.Rəsulzadə pr., 160A, AZ5500" />
                    <AllBranchCards title="Xırdalan filalı" description="Xırdalan ş., M.Hüseynzadə küç., 6" />
                    <AllBranchCards title="Tovuz filialı" description="Tovuz ş., Sabir küç., 21" />
                    <AllBranchCards title="İsmayıllı filialı" description="İsmayıllı şəh., M.F. Axundov küç., 18A" />
                    <AllBranchCards title="Mərkəzi ofis" description="Bakı ş., R.Behbudov küç. 55, AZ1014" />
                    <AllBranchCards title="Mingəçevir filialı" description="Mingəçevir ş., Heydər Əliyev pr., 36, AZ4500" />
                    <AllBranchCards title="Gəncə filialı" description="Gəncə ş., Atatürk pr., 249, AZ2003" />
                    <AllBranchCards title="Bərdə filialı" description="Bərdə ş., H.Əliyev pr., 72" />
                    <AllBranchCards title="Lənkəran filialı" description="Lənkəran ş., Z.Əliyeva küç., ev 12, AZ4200" />
                    <AllBranchCards title="Yasamal filialı" description="Bakı ş., Bəsti Bağırova küç., 2, AZ1065" />
                    <AllBranchCards title="Bərdə filialı" description="Bərdə ş., H.Əliyev pr., 72" />
                    <AllBranchCards title="Quba filalı" description=" Quba ş., H.Əliyev pr., 160OA,Az5500" />
                    <AllBranchCards title="Xırdalan filalı" description="Xırdalan ş., M.Hüseynzadə küç., 6" />
                    <AllBranchCards title="Mingəçevir filialı" description="Mingəçevir ş., Heydər Əliyev pr., 36, AZ4500" />

                    <div className="warn">
                        <img src={info} alt="" />
                        <p>Qeyd: 17:00-dan sonra kart və kredit üzrə xidmətlər göstərilir.</p>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default AllBranch
