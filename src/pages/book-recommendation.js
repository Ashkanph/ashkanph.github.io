import * as React from "react";
import styled from 'styled-components';

import BookDescriptions from "../components/bookDescriptions";
import Seo from '../components/seo/seo';
import BaseLayout from '../components/layouts/baseLayout';

const BookRecEl =
    styled.div`
        direction: rtl;
        color: var(--font-color);
        padding-bottom: 100px;

        #desc {
            padding-top: 30px;
        }
    `;

const BookRecomendation = () => {
    const pageMeta = {
        title: "پیشنهاد کتاب",
        description: "خلاصه و پیشنهاد چندین کتاب که بیشتر در ژانر علمی تخیلی هستند",
        tags: "یادداشت,کتاب,علمی تخیلی,پیشنهاد,خلاصه,رمان,برترین کتاب های علمی تخیلی",
        slug: "book-recommendation",
        lang: "fa",
    };

    return (
        <BaseLayout>
            <BookRecEl className="book-recommendation" title="Book recommendations">
                <Seo pageMeta={pageMeta}
                    isBlogPost={false} />
                <div id="desc">به مرور کتاب‌های بیشتری را در این صفحه معرفی می‌کنم (کتاب‌های جدید را به آخر لیست اضافه می‌کنم).</div>
                <BookDescriptions />
            </BookRecEl>
        </BaseLayout>
    )
}

export default BookRecomendation