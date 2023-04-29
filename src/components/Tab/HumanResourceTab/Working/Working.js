import React from 'react'
import WorkingCards from './WorkingCards'
import CardHead from './CardHead'


function Working() {
    return (
        <div className='working'>
            <div className="container">
                <CardHead photo='https://unibank.az/uploads/menus/o_1dc3tt2c01dqlbf7qd711ag1cnqa.png' title="Unibankda çalışmaq" description="Xəyal etdiyin karyerani məhz Unibankda qur!" />
                <p className='card-head-descrpi'>Uğurlarımızın mərkəzində dayanan vacib amillərdən biri əməkdaşlarımızın məmnuniyyətidir. Bu səbəbdən, Unibankda əməkdaşın öz bacarığını kəşf edib, özünü Unibank ailəsinin ayrılmaz bir hissəsi olaraq hiss edəcəyi, inkişafa açıq iş mühiti yaradılmışdır.</p>

                <div className="working-images">
                    <img src="https://unibank.az/files/puzlle4.jpg" alt="" />
                </div>
                <p className='card-head-descrpi' >Zəhmətin qiymətləndirildiyi, iş və şəxsi həyatda bir çox sosyal imkanlara sahib olacağınız Unibankda, bank daxili keçirilən müxtəlif layihələrin əsas məqsədi əməkdaşların sosiallaşmasının artırılması, yeni dostluqların yaradılması, onların gərgin iş saatlarından sonra istirahətlərinin məzmunlu keçirilməsidir.</p>
                <h1 className='working-title' >Tədbirlərimiz</h1>

                <div className="working-measure-cards row align-items-baseline g-3 mt-4">
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgmv8s1gnf14v21btc129t1ef9a.jpg" title="Müştəriyə Yönlənmiş Xidmətin Əsasları" date="20.07.2018" />
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgt9a724t1sq710211l751juaa.jpg" title="UniTalent Debate Tournament" date="13.07.2018" />
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjh38um18ej1mul10lctja1b6na.jpg" title="English Language Classes" date="22.08.2018" />

                </div>

                <div className="info-people">
                    <h1>İnsan kapitalımız</h1>

                    <div className="info-personal">
                        <img src="	https://unibank.az/uploads/articles/o_1cn9gbc6e17q71umb9mp60d4kna.jpg" alt="" />
                        <h2>Anar Allahverdiyev</h2>
                        <span>"Qeyri-filial müraciətləri" şöbəsinin <br /> müdiri</span>
                    </div>
                    <div className="info-description">
                        <p>2012-ci ildə Unibankın “Nərimanov” filialında istehlak kreditləri üzrə mütəxəssis kimi işə başlamışam, sonra aparıcı mütəxəssis, baş mütəxəssis, ekspert, bölmə rəhbəri və şöbə müdiri vəzifələrinə keçdim. Hazırda isə Pərakəndə satış və xidmət departamentinin "Qeyri-filial müraciətləri" şöbəsinin müdiri vəzifəsini icra edirəm. Əldə etdiyim uğurlar bu illər ərzində çəkilən əziyyətin, işimə sevgimin və təbii ki, rəhbərliyin etimadının nəticəsidir. Unibank mənim üçün bir məktəbdir, bizə işin incəliklərini, komanda olmağı, komanda ruhunda işləməyi öyrədib, yeni dostluqlar qazandırıb. Unibank professionallarla işləmə və onlardan təcrübə qazanmaq imkanı yaratmaqla, işçilərinin peşəkar kimi formalaşmasına və vəzifə artımına münasib şərait yaradır. Bundan sonra da daim öz üzərimdə işləyib, yeni biliklər, bacarıqlar qazanmaq, məhsuldarlığımı və professionallığımı artırmaq niyyətindəyəm.</p>

                    </div>
                </div>


            </div>


        </div>

    )
}

export default Working
