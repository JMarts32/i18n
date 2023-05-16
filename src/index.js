import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

ReactDOM.render(
    <IntlProvider locale="en" messages={(localeEnMessages,localeEsMessages)}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
