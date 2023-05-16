import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider} from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const messages = {
    en: localeEnMessages,
    es: localeEsMessages,
};

const language = navigator.language || navigator.userLanguage;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
