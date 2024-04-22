import dayjs from 'dayjs';
import React, { useState, useEffect } from "react";
import { Selected, SelectedText, TitleWrapper } from "./MonthPicker.styled";
import Selector from "./Selector/Selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const MonthPicker = ({
  onChange,
  value,
  presets,
  style,
  closeDelay,
  highlightCol
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [title, setTitle] = useState(false);
  useEffect(() => {
    updateTitle(value);
  }, []);
  const updateTitle = v => {
    if (!v || v.length < 2) {
      return setTitle("No dates selected");
    }
    const presetTitle = presets && presets.length ? presets.find(p => (dayjs(p.start).isSame(dayjs(v[0]), "month") || p.start === v[0]) && (dayjs(p.end).isSame(dayjs(v[1]), "month") || p.end === v[1])) : null;
    return setTitle(presetTitle ? presetTitle.title : dayjs(v[0]).format("MMM YY") + " - " + dayjs(v[1]).format("MMM YY"));
  };
  const localChange = v => {
    updateTitle(v);
    if (typeof onChange === "function") {
      onChange([v[0] === null ? null : dayjs(v[0]).startOf("month").format("YYYY-MM-DDTHH:mm:ss"), v[1] === null ? null : dayjs(v[1]).endOf("month").format("YYYY-MM-DDTHH:mm:ss")]);
    }
    setTimeout(() => {
      setSelectOpen(false);
    }, closeDelay ? closeDelay : 200);
  };
  return /*#__PURE__*/React.createElement(Selected, {
    style: style
  }, /*#__PURE__*/React.createElement(TitleWrapper, {
    onClick: e => setSelectOpen(!selectOpen)
  }, /*#__PURE__*/React.createElement(SelectedText, null, title), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronDown,
    style: {
      width: 14,
      height: 14
    }
  })), selectOpen && /*#__PURE__*/React.createElement(Selector, {
    presets: presets,
    onChange: localChange,
    highlightCol: highlightCol
  }));
};
export default MonthPicker;