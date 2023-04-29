import React from 'react'
import CardHead from '../Working/CardHead'
import WorkingCards from '../Working/WorkingCards'


function Training() {
    return (
        <div className='training'>
            <CardHead photo="https://unibank.az/uploads/menus/o_1d21rkqpl1l7nde61jne1qh31jcqi.png" title="Təlim və İnkişaf" description="Karyera və iş həyatınız boyu Təlim və İnkişaf Mərkəzi əsas dostunuz və yol yoldaşınız olacaq!" />
            <div className="des mt-5">
                <p>Hər bir şirkətin qazancı və əsas kapitalı onun insan kapitalıdır, komandasıdır. Uğurlu şirkət isə savadlı və güclü peşakarların yetişdirilməsində daim maraqlı olmalıdır, məhz bu şirkət öz strategiyasının inkişafına və məqsədlərinə nail olacaq. Qeyd olunanları nəzərə alaraq, Unibank daim öz əməkdaşlarının təlim və inkişafı istiqamətində addımlar atmışdır. Bu istiqamətdə qürur duyacağımız Unibank Training & Development Center (T&D) (Unibank Təlim və İnkişaf Mərkəzi) var. Uniplazada yerləşən T&D müxtəlif təlim və seminarların keçirilməsi üçün mükəmməl şəraitə malikdir. Burada 15 yaxın bankdaxili təlimlər, o cümlədən daxili attestasiyalar, seminarlar keçirlir.  T&D hazırda aşağıdaki istiqamətlər üzrə bankdaxili təlimləri mütəmadi olaraq keçirir:</p>
                <br />
                <br />
                <p>— Bank işi ilə tanışlıq</p>
                <br />
                <p>— Müştəri xidməti və davranış</p>
                <br />
                <p>— Kreditləşmə işi
                </p>
                <br />
                <p>— Korporativ kreditlər və analitika
                </p>
                <br />
                <p>— Vergi işi və əsasları
                </p>
                <br />
                <p>— Mühasibatlıq
                </p>
                <br />
                <p>— Xarici dil kursları və s.
                </p>
                <br />
                <br />
                <p>Hər il Unibankın Təlim və İnkişaf Mərkəzində yüzlərlə əməkdaşımız öz peşakar səviyyələrini, o cümlədən “soft” və “hard” kimi tanınan bacarıqlarını artırırlar. Məhz burada post trening analizlər zamanı, keçirilmiş treninglərin faydası və Banka təsiri üzrə analizlər aparılır.

                </p>
                <br />
                <p>Unibank Təlim və İnkişaf Mərkəzi Bankın insan kapitalının peşakarcasına formalaşdırlmasında böyük və önəmli rol oynayır.

                </p>
            </div>

            <h1 className='working-title bg-custom mt-4 ' >Tədbirlərimiz</h1>

            <div className="working-measure-cards row align-items-baseline g-3 mt-4">
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgmv8s1gnf14v21btc129t1ef9a.jpg" title="Müştəriyə Yönlənmiş Xidmətin Əsasları" date="20.07.2018" />
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjgt9a724t1sq710211l751juaa.jpg" title="UniTalent Debate Tournament" date="13.07.2018" />
                    <WorkingCards photo="https://unibank.az/site/uploads/articles/event-listing/o_1cnjh38um18ej1mul10lctja1b6na.jpg" title="English Language Classes" date="22.08.2018" />

                </div>

        </div>
    )
}

export default Training
