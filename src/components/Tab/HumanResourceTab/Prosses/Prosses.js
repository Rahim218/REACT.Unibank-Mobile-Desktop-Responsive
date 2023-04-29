import React from 'react'
import CardHead from '../Working/CardHead'
import Prosses1 from './Prosses1'
import ph1 from '../../../../assets/image/file.png'
import ph2 from '../../../../assets/image/arrow.png'
import ph3 from '../../../../assets/image/msg.png'
import ph4 from '../../../../assets/image/double-ms.png'
import Prosses2 from './Prosses2'

function Prosses() {
    return (
        <div className='prosses'>
            <div className="container">

                <CardHead photo="https://unibank.az/uploads/menus/o_1cnbvhchh3ro1ksc1ejtu9n14naa.png" title="İşə qəbul prosesi" description="Müsahibə zamanı özünə əmin olmaq üçün nələri etməlisən?" />
                <div className="des">
                    <p>Işə qəbul prosesi:</p>
                    <br />
                    <p>İlk olaraq,  vakansiyalar bölməsindən sizin bacarıq və təcrübənizə ən çox uyğun olan vəzifəni tapmağınız, müraciət et düyməsi ilə öz tərcümeyi-hal/CV-nizi bizim insan resursları departamentinə göndərməyiniz tələb olunur.
                    </p>
                    <br />
                    <p>Növbəti mərhələdə, müraciət etdiyiniz vakansiyanın tələbləri ilə təcrübə və bacarıqlarınızın uyğunluğu insan resursları əməkdaşlarımız tərəfindən yoxlanılır, axtardığımız keyfiyyətlərə sahib olan namizədlər müraciət edilmiş vakansiyadan asılı olaraq bir və yaxud iki mərhələli test mərhələsinə dəvət alır.  Müraciət edilmiş vakansiyanın növündən asılı olaraq test mərhələsində sizin riyazi, analitik düşünmə və yaxud situasiyaları dəyərləndirmə bacarıqlarınız yoxlanılır.
                    </p>
                    <br />
                    <p>Test mərhələsini uğurla tamamlamış namizədlər bankın baş ofisində aparılan iki mərhələli müsahibə prosesinə dəvət edilir. İlk olaraq insan resursları mütəxəssisləri ilə, növbəti mərhələdə isə namizədin müraciət etdiyi vakansiyaya uyğun olaraq aidiyyatı departamentin mütəxəssisləri ilə müsahibə keçirilir.
                    </p>
                </div>

                <div className="prosses-cards-first row align-items-baseline ">
                    <Prosses1 photo={ph2} title="Vakansiya seçimi və müraciət" link="1ci mərhələ" />
                    <Prosses1 photo={ph1} title="Test mərhələsi" link="2ci mərhələ" />
                    <Prosses1 photo={ph3} title="İnsan Kapitalı Departamenti ilə müsahibə" link="3ci mərhələ" />
                    <Prosses1 photo={ph4} title="Aidiyyatı struktur bölmənin nümayəndəsi ilə görüş" link="son mərhələ" />
                </div>

                <div className="des">
                    <p>Müsahibə zamanı necə davranmalı:
                    </p>
                    <br />
                    <p>Müsahibə namizədin özünü təqdim etməsi, nələrə nail olması, müraciət etdiyi vakansiyaya uyğunluğunu əsaslandırması baxımından olduqca əhəmiyyətlidir.
                    </p>
                    <br />
                    <p>Müsahibə zamanı sizə yönləndirilən sualları səmimi və rahat şəkildə cavablandırın. Tələsməyin, sualı tam olaraq başa düşməyə çalışın. Cavablarınız və davranışınız sizin vəzifəyə uyğunluğunuzu dəyərləndirməmiz üçün əhəmiyyətli rol oynayacaqdır.
                    </p>
                </div>

                <div className="prosses-long-cards row align-items-baseline g-4">
                    <Prosses2 photo="https://unibank.az/uploads/articles/o_1cnbvn52p97t6qbdatem5rua.png" title="Şəxsi təsir" description="Tərəfimizdən diqqət edilən ən əsas nüanslardan biridir. Namizədin özünü brend olaraq təqdim etmək bacarığı, etik davranışları, xarizması ilə ünsiyyətdə olduğu şəxslərdə müsbət şəxsi təsirlərin yaratması olduqca yüksək qiymətləndirilir. Ünsiyyət zamanı bədən dili və göz kontaktından düzgün istifadə, qamətin düzgün formada saxlanılması, gülümsəmə kimi faktorlar sizi iş intervyusu zamanı digər namizədlərdan fərqləndirəcəkdir. Əlavə olaraq, müsahibə zamanı rəsmi geyim üslubuna riayət olunması namizədin dəyərləndirilməsində müsbət təsir göstərən amillərdən biridir." />
                    <Prosses2 photo="https://unibank.az/uploads/articles/o_1cnc5lnofu514g06211aaal7ua.png" title="İnkişaf etmək istəyi" description="Unibank üçün əməkdaşların şəxsi inkişafı əsas prioritet məsələlərdən biri olduğundan bizimlə çalışacaq əməkdaşların inkişaf etmək istəklərinin yüksək olması arzu olunandır, odur ki, intervyu zamanı gələcək inkişafınızla bağlı planlarınızı bizimlə paylaşmaqdan tərəddüd etməyin. " />
                    <Prosses2 photo="https://unibank.az/uploads/articles/o_1cnbvoe291akt13bo1e31sp114c9a.png" title="Problemləri həll etmək bacarığı" description="Problemi düzgün şəkildə anlamaq, bu problemlərə aparan səbəbləri müəyyən etmək, səbəblərin aradan qaldırılmasına çalışmaq, mümkün olmadıqda isə alternativləri taparaq onların əvəz edilməsini təmin etmək başa düşülür. Keçmiş təcrübələrinizdən söz açmaqla bizim sizi daha yaxından kəşf etməyimizə şərait yaradın." />
                    <Prosses2 photo="https://unibank.az/uploads/articles/o_1cnbvot921i7iv1q1fi6cce1d10a.png" title="Komanda ruhunda çalışmaq" description="Komanda işi bir təşkilatın üzvlərinin ümumi məqsəd və ya məqsədlər hədəfində işləmək üçün bir araya gəldiyi bir fəaliyyətdir. Effektli komanda işinin təşkili hər bir biznes üçün vacibdir və bu işi uğurla yerinə yetirmənin sirri komandada işləməyi bacaran əməkdaşların olmasıdır." />
                    <Prosses2 photo="https://unibank.az/uploads/articles/o_1cnbvp7041o9cgs68lqvhk1b7qa.png" title="Liderlik" description="Namizəddə diqqət yetirdiyimiz başqa bir kriteriya isə liderlik qabiliyyətinin olmasıdır. Liderlik fərdlərin və ya bir qrup şəxslərin bir təşkilatın digər üzvlərinə təsir göstərmə və onlara rəhbərlik etmək bacarıqlarının olmasıdır. " />

                </div>


            </div>
        </div>
    )
}

export default Prosses
