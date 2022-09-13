import { SearchCriteriaRes } from "@core/models/common/searchCriteria";
import React from "react";
import { useTranslation } from "react-i18next";

var HtmlToReactParser = require("html-to-react").Parser
var htmlToReactParser = new HtmlToReactParser();

interface Props {
  criteria: SearchCriteriaRes<object>;
  showLessLabel: string;
  showMoreLabel: string;
  objectName?: string;
  objectNamePlural?: string;
  className?: string;
}

export default function PageLengthInfo(props: Props) {
  const { t } = useTranslation();
  const { criteria, showLessLabel, showMoreLabel, objectName, objectNamePlural, className } = props;

  let pageLengthInfo = "";
  if (criteria.total === 0) {
    pageLengthInfo = t(showLessLabel).replace("{0}", "0 - 0").replace("{1}", "0");
    if (pageLengthInfo.indexOf("{2}") !== -1) pageLengthInfo = pageLengthInfo.replace("{2}", objectName ?? "");
  }
  else if (criteria.total === 1) {
    pageLengthInfo = t(showLessLabel).replace("{0}", "1 - 1").replace("{1}", "1");
    if (pageLengthInfo.indexOf("{2}") !== -1) pageLengthInfo = pageLengthInfo.replace("{2}", objectName ?? "");
  }
  else {
    pageLengthInfo = t(showMoreLabel)
      .replace(
        "{0}",
        `${criteria.page === 1 ? "1" : (criteria.page - 1) * criteria.pageSize + 1} - ${criteria.page * criteria.pageSize > criteria.total
          ? criteria.total
          : criteria.page * criteria.pageSize
        }`
      )
      .replace("{1}", `${criteria.total}`);
    if (pageLengthInfo.indexOf("{2}") !== -1) pageLengthInfo = pageLengthInfo.replace("{2}", objectNamePlural ?? "");
  }
  
  return (
    <div className={className}>{htmlToReactParser.parse(pageLengthInfo)}</div>
  )
}