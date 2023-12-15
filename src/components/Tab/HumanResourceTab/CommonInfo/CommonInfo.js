import React, { useState } from 'react'
import CommonInfoCards from './CommonInfoCards'
import ph1 from '../../../../assets/image/file.png'
import ph2 from '../../../../assets/image/istiqamet.png'
import ph3 from '../../../../assets/image/people.png'
import ph4 from '../../../../assets/image/proses.png'
import ph5 from '../../../../assets/image/tecrube.png'
import ph6 from '../../../../assets/image/telim.png'
import ph7 from '../../../../assets/image/Faiq.jpg'
import ph8 from '../../../../assets/image/Eldar.jpg'
import ph9 from '../../../../assets/image/chek.png'
import Personal from './Personal'

function CommonInfo() {

    const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/ricGtmUDcLU")
    const [height, setHeight] = useState("225px")
    const [video, setVideo] = useState("video")

    const [display, setDisplay] = useState("d-none")
    
    const autoVideo = () => {
        setVideoSrc("https://www.youtube.com/embed/ricGtmUDcLU?autoplay=1")
        setDisplay("")
        setHeight("335px")
        setVideo('video-click')
    }

    return (
        <div className='commoninfo'>
            <div className="container">
                <div className={video}>
                    <iframe
                        className={display}
                        width="100%"
                        height={height}
                        border-radius="10px"
                        src={videoSrc}
                        title="Rick Astley - Never Gonna Give You Up (Video)"
                        allowFullScreen
                    />
                    <i onClick={autoVideo} id="play" class="fa-regular fa-circle-play"></i>
                </div>

                <div className="commoninfo-cards row align-items-center g-4">
                    <CommonInfoCards photo={ph1} title="Vakansiya" description="Unibankda 50-dən çox karyera istiqaməti mövcuddur. Hazırda mövcud vakansiyalar barədə ətraflı məlumat əldə edin. " />
                    <CommonInfoCards photo={ph3} title="Unibankda çalışmaq" description="Ölkənin ən nüfuzlu şirkətlərindən birində çalışmaq, öz karyera arzularını reallaşdırmaq istəyirsənsə - Unibank məhz sənin bankındır! Gələcək inkişafını Unibankla başla! " />
                    <CommonInfoCards photo={ph4} title="İşə qəbul prosesi" description="Müraciət etdiyiniz vakansiyadan asılı olaraq işə qəbul prosesimiz fərqlənə bilər. Test mərhələsində sizi nələr gözlədiyini və müsahibələrdə hansı məqamlara diqqət yetirməli olduğunuzu öyrənin.  " />
                    <CommonInfoCards photo={ph6} title="Təlim və İnkişaf" description="Karyera və iş həyatınız boyu Təlim və İnkişaf Mərkəzi əsas dostunuz və yol yoldaşınız olacaq!  " />
                    <CommonInfoCards photo={ph5} title="Təcrübə proqramları" description="Təcrübə proqramları müxtəlif istiqamətlərdə və müxtəlif müddətlərdə olur. Təcrübə müddəti maksimal olaraq 3 ay ərzində keçirilir. " />
                    <CommonInfoCards photo={ph2} title="İstiqamətlər" description="Karyeranızı məhz bank sektorunda qurmaq istəyir, öz gücünüzə və potensialınıza inanırsınızsa, Unibank Sizi öz karyera seçiminizi etməyə dəvət edir. " />
                </div>

                <div className="personal row align-items-center g-3">
                    <Personal photo={ph8} name="Eldar Qəribov" due="Müşahidə Şurasınln sədri" description="Unibankda gənc mütəxəssislərin özlərini reallaşdırmaları, peşə vərdişlərini, ixtisaslarını artırmaları üçün hər cür şərait yaradılıb. İllər boyu Unibank minlərlə əməkdaşın təkcə iş yeri deyil, həm də onların Məktəbi və İnkişaf Mərkəzi olub. Məhz biz səhmdarlar üçün şirkətin əsas dəyəri onun İnsan Kapitalı, Komandasıdır. " />
                    <Personal photo={ph7} name="Eldar Qəribov" due="Müşahidə Şurasınln sədrinin müavini" description="Unibank həmişə gənc mütəxəssislər üçün uğurlu karyera ünvanı, inkişaf məkanı olub. Fəaliyyət göstərdiyi 30 ildən artıq dövrdə Unibank məktəbində yetişmiş minlərlə kadr, bu gün bank sektorunun uğurlu, bacarıqlı mütəxəssisləridir. Bankın işçi heyətinin davamlı inkişafı, komanda ruhunun gücləndirilməsi rəhbərlik üçün hər zaman prioritet vəzifələrdən biridir. " />
                </div>
                <div className="about">
                    <h1>Haqqımızda</h1>
                    <p>Unibank yarandığı ilk gündən etibarən insan resurslarının inkişafını əsas prioritetlərdən biri kimi qəbul etmişdir. Ümumilikdə bank öz əməkdaşlarına resurs deyil, kapital kimi baxmasına üstünlük verir. Məhz bizim komandamız bizim əsas kapitalımız və dəyərimizdir. İllər boyu formalaşan bu dəyər Unibank dəfələrlə ölkənin bank bazarıda müxtəlif istiqamətlərdə birincilər sırasına gətirmişdir. Əsas qazancımız isə bir daha insan kapitalımızın verdiyi dəyər olub.</p>
                    <br />
                    <p>Unibank insan kapitalına dair öz strategiyasını əməkdaşın ilk günündən, habelə təcrübə proqramından başlayaraq start verərək, onun sonraki karyera inkişafını planlayır. Müxtəlif vəzifələr üzrə karyera inkişafı planlaşdırılması, o cümlədən əməkdaşların şəxsi və profesional kompetensiyaların artırılması istiqamətində təlim və inkişafı, o cümlədən onların liderlik və idarə etmə kimi bacarıqlarının inkişafıda əsas prioritetlərimizdən biridir. Daxili talantların idarə edilməsi və tanınması, onların bankdaxili rotasiyalar vasitəsilə inkişaf etdirilməsidə Unibankın insan kapitalının inkişafı üzrə əsas məqamlarındandır. İnsan Kapitalı Bankın 2017-2019cu illəri əks etdirən Strateji Planımızda belə əsas strateji hədəflərindən biri kimi səhmdarlar tərəfindən qəbul edilmişdir.</p>
                </div>
                <div className="direction">
                    <div className=" direction-content row align-items-center g-3">
                        <div className="col-lg-3 col-12">
                            <div className="direction-box">
                                <img src={ph9} alt="" />
                                <p>Biliyinizi genişləndirmək üçün hədsiz imkanlar</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="direction-box">
                                <img src={ph9} alt="" />
                                <p>
                                    Güclü komandanın bir parçası olmaq</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="direction-box">
                                <img src={ph9} alt="" />
                                <p>Bank Məktəbində çalışmaq imkanı</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="direction-box">
                                <img src={ph9} alt="" />
                                <p >Ölkənin aparıcı şirkətlərindən birində uğur yolunuzun binövrəsini qurmaq</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ourvalues">
                    <h1>Dəyərlərimiz</h1>
                    <div className="values-content row align-items-baseline g-3">
                        <div className="col-lg-3 col-12">
                            <div className="values-box">
                                <h2>Etibarlılıq</h2>
                                <p>Ölkəmiz, müştərilərimiz, partnyorlarımız, işçilərimiz üçün daim etibarlı bank olmaq bizim dəyərlərimizdən biridir.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="values-box">
                                <h2>İnnovativlik</h2>
                                <p>Müştərilərimizin vaxtına qənaət edərək, onlara innovativ məhsul və xidmətləri təklif etməklə, dəyərlərinə dəyər qatmaq əsas prioritetlərimizdəndir. Biz inkişafın nəbzini tuturuq!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="values-box">
                                <h2>Bank Məktəbi</h2>
                                <p>30 ildən artıq fəaliyyətimiz dövründə bank sektoruna minlərlə peşəkar bank işçisi verməyimiz, insan kapitalını hər zaman ön planda tutmağımızla qürur duyuruq!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="values-box">
                                <h2>Komanda</h2>
                                <p>Hədəflərimizə doğru daim bir komanda ruhunda çalışmaq, səmimi, hər kəs üçün faydalı, ailə dəyərlərinə malik komanda olmaqda davam etmək, əsas vəzifələrimizdəndir.Biz komandamızın qələbəsinə inanırıq!</p>
                            </div>
                        </div>
                    </div>
                </div>








            </div>

        </div>
    )
}

export default CommonInfo
