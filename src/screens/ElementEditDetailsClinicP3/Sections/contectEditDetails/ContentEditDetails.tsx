import React, { useState, useRef } from 'react';
import {


  BellIcon,

  PlusIcon,
} from "lucide-react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TranslateIcon from "@mui/icons-material/Translate";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import Toggle from "../../../../components/ui/SwitchToggel";
import { Textarea } from "../../../../components/ui/textarea";
import Switch from '@mui/material/Switch';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../../../components/ui/collapsible'
import Checkbox from '@mui/material/Checkbox';
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowForward';

import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import TimeRangePicker from '../../../CommonComponents/timeRangePicker';
import CustomCheckbox from '../../../CommonComponents/customCheckbox';

import ReusableCollapsible from "../../../../components/ui/Collapsibles";
import 'react-datepicker/dist/react-datepicker.css';
import {

  Container,
  Edit2Icon,

  StethoscopeIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DateInput from '../../../CommonComponents/DateInput';
import DatePicker from '../../../../components/ui/DatePicker';
const complexInformation = {
  name: "AlTadawi Medical Complex",
  description:
    "A modern multi-specialty healthcare complex offering outpatient and diagnostic services in Riyadh.",
  establishmentYear: "2011",
  pic: "Hessa AlMutairi",
  staffCapacity: "2150",
  doctorsCapacity: "1780",
  patientCapacity: "250",
  StaffCapacity: "2150",
  DoctorsCapacity: "1780",
  PatientCapacity: "250",
};
const addressFields = (t: (key: string) => string) => [
  { label: t("Building Number"), value: t("Building Number") },
  { label: t("Street Name"), value: t("Street Name") },
  { label: t("Region"), value: t("Region") },
  { label: t("Country"), value: t("Country") },
  { label: t("Nation"), value: t("Nation") },
];

const capacityData = [
  {
    title: "Staff Capacity",
    value: "250/300",
    icon: (
      <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9842 20.6097C23.9946 19.2713 25.5209 17.3215 26.3374 15.0485C27.1539 12.7756 27.2173 10.3002 26.5182 7.9885C25.8191 5.67676 24.3945 3.65138 22.4553 2.21186C20.516 0.772343 18.165 -0.00488281 15.7498 -0.00488281C13.3347 -0.00488281 10.9837 0.772343 9.04442 2.21186C7.10517 3.65138 5.68065 5.67676 4.98152 7.9885C4.28239 10.3002 4.34577 12.7756 5.16228 15.0485C5.9788 17.3215 7.50509 19.2713 9.51547 20.6097C5.8789 21.95 2.77317 24.4302 0.661724 27.6803C0.550753 27.8452 0.473673 28.0306 0.434964 28.2256C0.396254 28.4206 0.396688 28.6213 0.436239 28.8161C0.47579 29.0109 0.55367 29.1959 0.665351 29.3604C0.777033 29.5248 0.920289 29.6654 1.08679 29.774C1.25329 29.8826 1.43972 29.9571 1.63524 29.993C1.83076 30.0289 2.03146 30.0256 2.22569 29.9832C2.41992 29.9409 2.6038 29.8604 2.76663 29.7464C2.92947 29.6324 3.06802 29.4871 3.17422 29.3191C4.5362 27.2243 6.39989 25.5029 8.59604 24.3113C10.7922 23.1196 13.2512 22.4955 15.7498 22.4955C18.2485 22.4955 20.7075 23.1196 22.9037 24.3113C25.0998 25.5029 26.9635 27.2243 28.3255 29.3191C28.5455 29.646 28.8853 29.8733 29.2716 29.9517C29.6578 30.0301 30.0594 29.9534 30.3895 29.7381C30.7196 29.5228 30.9517 29.1862 31.0356 28.8011C31.1195 28.4161 31.0485 28.0135 30.838 27.6803C28.7265 24.4302 25.6208 21.95 21.9842 20.6097ZM7.49985 11.2497C7.49985 9.61799 7.9837 8.02293 8.89022 6.66623C9.79675 5.30952 11.0852 4.2521 12.5927 3.62768C14.1002 3.00325 15.759 2.83988 17.3593 3.1582C18.9597 3.47653 20.4297 4.26227 21.5835 5.41605C22.7373 6.56983 23.523 8.03984 23.8413 9.64019C24.1597 11.2405 23.9963 12.8993 23.3719 14.4068C22.7474 15.9143 21.69 17.2028 20.3333 18.1093C18.9766 19.0158 17.3815 19.4997 15.7498 19.4997C13.5626 19.4972 11.4656 18.6272 9.91896 17.0806C8.37232 15.5339 7.50233 13.437 7.49985 11.2497ZM46.9011 29.7559C46.5679 29.9732 46.1621 30.0492 45.7728 29.9673C45.3836 29.8854 45.0428 29.6522 44.8255 29.3191C43.4651 27.223 41.6017 25.5009 39.4051 24.3098C37.2085 23.1186 34.7486 22.4963 32.2499 22.4997C31.852 22.4997 31.4705 22.3416 31.1892 22.0603C30.9079 21.779 30.7499 21.3975 30.7499 20.9997C30.7499 20.6019 30.9079 20.2203 31.1892 19.939C31.4705 19.6577 31.852 19.4997 32.2499 19.4997C33.4648 19.4985 34.6645 19.2291 35.7632 18.7105C36.8619 18.192 37.8326 17.4372 38.6058 16.5C39.379 15.5629 39.9356 14.4665 40.236 13.2893C40.5363 12.112 40.573 10.883 40.3433 9.68996C40.1136 8.49693 39.6232 7.36935 38.9072 6.3878C38.1913 5.40625 37.2673 4.59495 36.2014 4.01187C35.1355 3.42879 33.954 3.08833 32.7413 3.01481C31.5286 2.94128 30.3146 3.13652 29.1861 3.58656C29.0021 3.6661 28.804 3.70795 28.6036 3.70965C28.4031 3.71134 28.2044 3.67284 28.019 3.59642C27.8337 3.52 27.6656 3.40721 27.5246 3.26471C27.3836 3.12222 27.2726 2.95291 27.1982 2.76679C27.1237 2.58067 27.0873 2.38151 27.0912 2.18109C27.095 1.98067 27.1389 1.78305 27.2204 1.5999C27.3019 1.41676 27.4193 1.25181 27.5656 1.11479C27.712 0.977776 27.8843 0.871479 28.0724 0.802182C30.6551 -0.227848 33.5278 -0.264914 36.1362 0.698132C38.7447 1.66118 40.9041 3.5561 42.1978 6.01734C43.4916 8.47858 43.8281 11.3317 43.1423 14.0264C42.4565 16.7211 40.7971 19.0663 38.4842 20.6097C42.1208 21.95 45.2265 24.4302 47.338 27.6803C47.5552 28.0135 47.6313 28.4193 47.5494 28.8086C47.4674 29.1978 47.2342 29.5386 46.9011 29.7559Z" fill="#414651" />
      </svg>


    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Doctors Capacity",
    value: "178/200",
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.75 24C33.75 24.445 33.618 24.88 33.3708 25.25C33.1236 25.62 32.7722 25.9084 32.361 26.0787C31.9499 26.249 31.4975 26.2936 31.061 26.2068C30.6246 26.12 30.2237 25.9057 29.909 25.591C29.5943 25.2763 29.38 24.8754 29.2932 24.439C29.2064 24.0025 29.251 23.5501 29.4213 23.139C29.5916 22.7278 29.88 22.3764 30.25 22.1292C30.62 21.882 31.055 21.75 31.5 21.75C32.0967 21.75 32.669 21.9871 33.091 22.409C33.5129 22.831 33.75 23.4033 33.75 24ZM32.8969 31.3669C32.5674 33.4909 31.4898 35.4273 29.8585 36.827C28.2272 38.2266 26.1494 38.9972 24 39H19.5C17.1138 38.9975 14.8261 38.0485 13.1388 36.3612C11.4515 34.6739 10.5025 32.3862 10.5 30V22.4044C7.60037 22.0391 4.93372 20.6281 3.0005 18.4363C1.06727 16.2445 0.000366759 13.4226 0 10.5V1.5C0 1.10218 0.158036 0.720645 0.43934 0.43934C0.720645 0.158036 1.10218 0 1.5 0H6C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3H3V10.5C2.99989 11.6921 3.2366 12.8723 3.69638 13.9721C4.15616 15.0719 4.82984 16.0695 5.67832 16.9068C6.5268 17.7441 7.53317 18.4045 8.63899 18.8497C9.74481 19.2948 10.928 19.5159 12.12 19.5C17.0156 19.4363 21 15.3281 21 10.3444V3H18C17.6022 3 17.2206 2.84196 16.9393 2.56066C16.658 2.27936 16.5 1.89782 16.5 1.5C16.5 1.10218 16.658 0.720645 16.9393 0.43934C17.2206 0.158036 17.6022 0 18 0H22.5C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V10.3444C24 16.5019 19.4006 21.6487 13.5 22.4025V30C13.5 31.5913 14.1321 33.1174 15.2574 34.2426C16.3826 35.3679 17.9087 36 19.5 36H24C25.3625 35.9977 26.6839 35.5327 27.7475 34.681C28.811 33.8293 29.5537 32.6416 29.8538 31.3125C28.0422 30.9056 26.446 29.8412 25.3739 28.3252C24.3019 26.8093 23.8303 24.9496 24.0503 23.106C24.2704 21.2624 25.1664 19.5659 26.5652 18.3449C27.9639 17.1238 29.7658 16.465 31.6222 16.4959C33.4787 16.5268 35.2577 17.2451 36.615 18.512C37.9723 19.7789 38.8115 21.5043 38.9701 23.3542C39.1287 25.2041 38.5954 27.0471 37.4736 28.5265C36.3517 30.006 34.721 31.0167 32.8969 31.3631V31.3669ZM36 24C36 23.11 35.7361 22.24 35.2416 21.4999C34.7471 20.7599 34.0443 20.1831 33.2221 19.8425C32.3998 19.5019 31.495 19.4128 30.6221 19.5865C29.7492 19.7601 28.9474 20.1887 28.318 20.818C27.6887 21.4474 27.2601 22.2492 27.0865 23.1221C26.9128 23.995 27.0019 24.8998 27.3425 25.7221C27.6831 26.5443 28.2599 27.2471 28.9999 27.7416C29.74 28.2361 30.61 28.5 31.5 28.5C32.6935 28.5 33.8381 28.0259 34.682 27.182C35.5259 26.3381 36 25.1935 36 24Z" fill="#414651" />
      </svg>



    ),
    bgColor: "bg-secondary-light",
  },
  {
    title: "Patients Capacity",
    value: "2500/3500",
    icon: (
      <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 13.4997C33 13.8975 32.842 14.279 32.5607 14.5603C32.2794 14.8416 31.8978 14.9997 31.5 14.9997H16.5C16.1022 14.9997 15.7206 14.8416 15.4393 14.5603C15.158 14.279 15 13.8975 15 13.4997C15 13.1018 15.158 12.7203 15.4393 12.439C15.7206 12.1577 16.1022 11.9997 16.5 11.9997H31.5C31.8978 11.9997 32.2794 12.1577 32.5607 12.439C32.842 12.7203 33 13.1018 33 13.4997ZM31.5 17.9997H16.5C16.1022 17.9997 15.7206 18.1577 15.4393 18.439C15.158 18.7203 15 19.1018 15 19.4997C15 19.8975 15.158 20.279 15.4393 20.5603C15.7206 20.8416 16.1022 20.9997 16.5 20.9997H31.5C31.8978 20.9997 32.2794 20.8416 32.5607 20.5603C32.842 20.279 33 19.8975 33 19.4997C33 19.1018 32.842 18.7203 32.5607 18.439C32.2794 18.1577 31.8978 17.9997 31.5 17.9997ZM48 13.4997V17.9997C48 19.591 47.3679 21.1171 46.2426 22.2423C45.1174 23.3675 43.5913 23.9997 42 23.9997H41.0269C39.6787 26.9622 36.9413 29.5178 32.9213 31.5297C30.1744 32.8768 27.2664 33.8667 24.2681 34.4753C24.0909 34.5078 23.9091 34.5078 23.7319 34.4753C20.7336 33.8667 17.8256 32.8768 15.0787 31.5297C11.0625 29.5178 8.32125 26.9622 6.97312 23.9997H6C4.4087 23.9997 2.88258 23.3675 1.75736 22.2423C0.632141 21.1171 0 19.591 0 17.9997V13.4997C0 11.9084 0.632141 10.3822 1.75736 9.25701C2.88258 8.1318 4.4087 7.49966 6 7.49966H6.15937C6.30117 7.07061 6.53804 6.67914 6.85232 6.35447C7.16661 6.0298 7.55017 5.78032 7.97437 5.62466L22.9744 0.17028C23.6371 -0.0697807 24.3629 -0.0697807 25.0256 0.17028L40.0256 5.62466C40.4498 5.78032 40.8334 6.0298 41.1477 6.35447C41.462 6.67914 41.6988 7.07061 41.8406 7.49966H42C43.5913 7.49966 45.1174 8.1318 46.2426 9.25701C47.3679 10.3822 48 11.9084 48 13.4997ZM6.10312 20.9997C6.03462 20.5026 6.00017 20.0014 6 19.4997V10.4997C5.20435 10.4997 4.44129 10.8157 3.87868 11.3783C3.31607 11.9409 3 12.704 3 13.4997V17.9997C3 18.7953 3.31607 19.5584 3.87868 20.121C4.44129 20.6836 5.20435 20.9997 6 20.9997H6.10312ZM39 19.4997V8.45403L24 2.99965L9 8.45403V19.4997C9 27.9372 21.9544 31.0347 24 31.4697C26.0419 31.0347 39 27.9372 39 19.4997ZM45 13.4997C45 12.704 44.6839 11.9409 44.1213 11.3783C43.5587 10.8157 42.7956 10.4997 42 10.4997V19.4997C41.9998 20.0014 41.9654 20.5026 41.8969 20.9997H42C42.7956 20.9997 43.5587 20.6836 44.1213 20.121C44.6839 19.5584 45 18.7953 45 17.9997V13.4997Z" fill="#414651" />
      </svg>

    ),
    bgColor: "bg-secondary-light",
  },
];


const socialMediaData = [
  {
    platform: "LinkedIn",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


  },
  {
    platform: "Twitter",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="text-text-primary" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="text-text-primary" clip-rule="evenodd" d="M0.0174851 24H2.04576L9.98402 14.6892L16.2962 24H23.2727L13.8657 10.1925L22.5034 0H20.4401L12.939 8.81705L6.92412 0H0L9.09228 13.3666L0.0174851 24ZM2.79762 1.56943H5.92746L20.4576 22.5187H17.2928L2.79762 1.56943Z" fill="currentColor" />
    </svg>,


  },
  {
    platform: "Facebook",
    url: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.0004C21 5.47754 16.5229 1.00039 11 1.00039C5.47715 1.00039 1 5.47754 1 11.0004C1 15.9917 4.65686 20.1287 9.4375 20.8789V13.891H6.89844V11.0004H9.4375V8.79726C9.4375 6.29101 10.9304 4.90664 13.2146 4.90664C14.3087 4.90664 15.4531 5.10195 15.4531 5.10195V7.56289H14.1921C12.9499 7.56289 12.5625 8.33373 12.5625 9.12455V11.0004H15.3359L14.8926 13.891H12.5625V20.8789C17.3431 20.1287 21 15.9917 21 11.0004Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    </svg>
    ,

  },
  {
    platform: "Instagram",
    url: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="text-text-primary" clip-rule="evenodd" d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629454C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33345 24 8.74145 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629454 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629454 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629454C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40103 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.906 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95857 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77656C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63854 7.63854C8.2113 7.06579 8.89126 6.61146 9.6396 6.30148C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30148C15.1087 6.61146 15.7887 7.06579 16.3615 7.63854C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79527 17.5182 7.63854 16.3615C6.48181 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48181 8.79527 7.63854 7.63854ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8701 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.54679 17.4742 4.68873C17.2138 4.96476 17.0712 5.3314 17.0768 5.71083C17.0823 6.09026 17.2355 6.45259 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055Z" fill="currentColor" />
    </svg>


  },
];




const contactData = {
  phoneNumber: "+966 50 000-0000",
  email: "info@medcaregroup.com",
  website: "www.medcaregroup.com",
  mapsLocation: "www.medcaregroup.com",
  physicalAddress: {
    buildingNumber: "Building Number",
    streetName: "Street Name",
    region: "Region",
    country: "Country",
    nation: "Nation",
  },
};



const linkedClinics = [
  {
    number: 1,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 2,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 3,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
  {
    number: 4,
    name: "Internal Medicine",
    pic: "Hessa AlMutairi",
    appointmentsCount: 10,
    doctors: 5,
    status: "Active",
  },
];

const departments = [
  {
    number: 1,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    number: 2,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
  {
    number: 3,
    name: "Internal Medicine",
    description:
      "Handles the diagnosis and nonsurgical treatment of diseases in adults, including chronic conditions such as hypertension and diabetes.",
  },
];

const doctorsAndStaff = [
  {
    number: 1,
    userId: "444",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    number: 2,
    userId: "6666",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    number: 3,
    userId: "1234",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
  {
    number: 4,
    userId: "5667",
    name: "Dr. Ahmed Hassan",
    clinic: "Cardiology Clinic",
    userType: "Doctor",
    status: "Active",
  },
];

const workingDays = [
  { day: "Sunday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Monday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Tuesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Wednesday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Thursday", startTime: "09:00", endTime: "18:00", isActive: true },
  { day: "Friday", startTime: "09:00", endTime: "18:00", isActive: false },
  { day: "Saturday", startTime: "09:00", endTime: "18:00", isActive: true },
];






interface NoDataSectionProps {
  dark: boolean;
  local: string;

  handelDarkClick: () => void;
  handleLanguageClick: () => void;
}


export const ContentEditDetails = ({ local, dark, handelDarkClick, handleLanguageClick }: NoDataSectionProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  const [activeDays, setActiveDays] = useState(workingDays.map(() => false));


  const [isOpen, setIsOpen] = useState({
    clinicInfo: true,
    contactInfo: true,
    workingDays: true,
    doctorsStaff: true,
    mapsLocation: true
  });
  const handleToggle = (key: keyof typeof isOpen, open: boolean) => {
    setIsOpen(prev => ({
      ...prev,
      [key]: open
    }))
  };








  const toggleDay = (index: number) => {
    setActiveDays((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };
  const handleDateChange = (date: Date) => {

    // يمكنك هنا إجراء أي عمل تريده مع التاريخ المحدد
  };


  return (
    <div

      className={`flex flex-col w-full overflow-hidden items-start gap-4  py-4  self-stretch relative bg-background-primary
      } `}
    >
      <header className="flex h-[50px] justify-between pl-[4px] pr-0 py-0 bg-background-primary self-stretch w-full items-center">
        <div className="flex items-center gap-4 rounded-2xl ">


          <div className="flex flex-col">
            <h1 className="font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              {t("Medical Complex Details")}
            </h1>
            <p className="font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-14px-semibold-font-size)] tracking-[var(--title-14px-semibold-letter-spacing)] leading-[var(--title-14px-semibold-line-height)] [font-style:var(--title-14px-semibold-font-style)]">
              {t("Medical Facilities")}
            </p>
          </div>
        </div>

        <div className="inline-flex gap-3 flex-[0_0_auto] rounded-[28px] items-center " style={{ borderRadius: '16px', padding: '16px' }}>
          <div className="relative  ">
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 bg-secondary-light rounded-[20px] h-auto"
            >
              <BellIcon className="w-5 h-5" />
            </Button>
            <div className="absolute top-1 left-4 w-2 h-2 bg-[#fa812d] rounded-full" />
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`p-2.5 bg-secondary-light ${local === "ar"
                ? "bg-[green]"
                : "bg-secondary-light"
                } rounded-[20px] h-auto transition-all duration-[1000ms]`}
              onClick={handleLanguageClick}
            >
              <TranslateIcon className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-10 h-[17.5px] relative">
     
          </div>

          <div className="items-center gap-3 inline-flex flex-[0_0_auto]">
            <div className="inline-flex items-center w-[40px] h-[40px] gap-2.5 flex-[0_0_auto] bg-app-primary rounded-3xl" />
            <div className="flex-col items-start gap-1 inline-flex flex-[0_0_auto]">
              <div
                className={`w-fit mt-[-1.00px] 
                 text-primary
                } font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]`}
              >
                Anahera Jones
              </div>
              <div className="w-fit font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-tertiary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] whitespace-nowrap [font-style:var(--title-11px-regular-font-style)] border-medium ">
                {t(" Admin")}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Card className="flex flex-col h-auto items-start gap-6 p-5 mt-[10px] bg-background-tertiary relative self-stretch w-full rounded-2xl overflow-hidden">

        <CardContent className="p-0 w-full overflow-y-auto gap-5 h-auto">


      
            <div className="flex gap-[16px] justify-end "  dir={local === 'ar' ? 'rtl' : 'ltr'}>
              <button className=" w-[200px] h-[40px] rounded-[20px] border border-border-light bg-surface-primary  font-lato font-medium text-sm leading-[100%] tracking-[0] text-text-primary">
                {t("Cancel")}
              </button>
              <button className=" w-[200px] h-[40px] rounded-[20px] bg-secondary-dark font-lato font-medium text-sm leading-[100%] tracking-[0] text-surface-primary">
                {t("Save")}
              </button>
        
          </div>






          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Clinic Information")}
            initiallyOpen={isOpen.clinicInfo}
            onOpenChange={(open) => handleToggle("clinicInfo", open)}
            content={<div className='flex'>  <div className="grid gap-x-10 flex-1 gap-y-4 pr-5 pl-5 pb-5">
              <div className="flex items-center gap-8">
                <label className="w-[162px]  text-text-primary  font-semibold   text-[length:var(--title-16px-semibold-font-size)] tracking-[var(--title-16px-semibold-letter-spacing)] leading-[var(--title-16px-semibold-line-height)] [font-style:var(--title-16px-semibold-font-style)]">
                  {t("clinic Name")}:
                </label>
                <Input
                  defaultValue={complexInformation.name}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>

              <div className="flex items-start gap-8">
                <div className="w-[162px]  text-text-primary  font-semibold ">
                  {t("Description")}      :
                </div>
                <div className="relative  w-[360px]">
                  <Textarea
                    className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                    defaultValue={complexInformation.description}
                  />

                </div>
              </div>
                       <div className="flex items-start ">
             <DatePicker/>
              </div>
            

              <div className="flex items-center gap-8">
                <label className="w-[162px]  text-text-primary font-semibold">
                  {t("PIC")}:
                </label>
                <Input
                  defaultValue={complexInformation.pic}
                  className="w-[360px] h-12 bg-background-secondary  border-border-light "
                />
              </div>

            </div>

              <div className="grid gap-x-10 flex-1 gap-y-4">


                <div className="text-text-accent font-semibold ">
                  <h2>   {t("Capacity")} </h2>
                </div>

                <div className="flex items-center gap-2">
                  <label className="w-[162px]   text-text-primary  font-semibold">
                    {t("Staff Capacity")}:
                  </label>
                  <Input
                    defaultValue={complexInformation.StaffCapacity}
                    className="w-[360px] h-12 bg-background-secondary  border-border-light "
                  />
                </div>


                <div className="flex items-center gap-2">
                  <label className="w-[162px]   text-text-primary  font-semibold">
                    {t("Doctors Capacity")}:
                  </label>
                  <Input
                    defaultValue={complexInformation.DoctorsCapacity}
                    className="w-[360px] h-12 bg-background-secondary  border-border-light "
                  />
                </div>



                <div className="flex items-center gap-2">
                  <label className="w-[162px]   text-text-primary  font-semibold">
                    {t("Patient Capacity")}:
                  </label>
                  <Input
                    defaultValue={complexInformation.PatientCapacity}
                    className="w-[360px] h-12 bg-background-secondary  border-border-light "
                  />
                </div>


              </div>
            </div>
            }

          />










          {/* Company Contact Information Collapsible */}
          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Company Contact Information")}
            initiallyOpen={isOpen.contactInfo}
            onOpenChange={(open) => handleToggle("contactInfo", open)}
            content={<div className="space-y-7 justi">
              <Grid container spacing={2}>
                <Grid size={6}>


                  <div className="flex items-center gap-[5px]"> {/* gap 5px بين الليبل والحقل */}


                    <div className="grid  items-center gap-[5px]">
                      <div className="flex " >
                        {/* Label */}
                        <div className="flex w-[162px] items-center gap-2">
                          <div className=" text-text-primary"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="" clip-rule="evenodd" d="M5.58366 1.98914C5.55738 1.98748 5.51211 1.98881 5.44156 2.00073C4.61526 2.14038 3.86019 2.55987 3.30452 3.19114C2.85239 3.70477 2.55607 4.33157 2.44319 4.99844C2.37711 5.38883 2.38394 5.81377 2.41176 6.29064C2.57841 9.14767 3.78709 11.8542 5.8219 13.889C7.93679 16.0039 10.7773 17.2264 13.7583 17.314C14.1076 17.3242 14.4228 17.3168 14.7125 17.2677C15.3794 17.1548 16.0061 16.8585 16.5198 16.4064C17.1861 15.8199 17.6164 15.0113 17.7308 14.1312L17.7297 14.1307L17.7297 14.1306L13.4481 12.2918L13.448 12.2918L13.448 12.2918L11.1637 13.8177C11.1631 13.8181 11.1624 13.8186 11.1618 13.819C10.9515 13.9605 10.7082 14.0449 10.4555 14.0641C10.202 14.0834 9.94788 14.0363 9.71814 13.9275L9.71407 13.9256C8.00776 13.1047 6.62971 11.7302 5.80447 10.026L5.803 10.023L5.80301 10.023C5.69491 9.79709 5.64657 9.54727 5.66258 9.29739C5.6786 9.04751 5.75845 8.80591 5.8945 8.59569L5.89737 8.59125L5.89739 8.59126L7.4204 6.27483L7.41901 6.27164L7.41902 6.27163L5.58366 1.98914ZM17.7317 14.1242L17.7317 14.1245L17.7317 14.1242ZM5.19763 0.557347C5.52156 0.502601 6.06468 0.471191 6.52344 0.858159C6.69851 1.00583 6.8372 1.19359 6.92679 1.40698L8.76311 5.69173C8.76337 5.69234 8.76364 5.69296 8.7639 5.69357C8.85897 5.91328 8.89871 6.15297 8.87962 6.39163C8.86047 6.63095 8.78275 6.86189 8.65332 7.0641L8.6485 7.07163L8.64845 7.0716L7.12346 9.39105C7.80407 10.7948 8.93925 11.9272 10.3446 12.6045L10.3476 12.6025L10.3476 12.6025L12.6331 11.0758C12.8359 10.9388 13.07 10.8552 13.3137 10.8328C13.5574 10.8103 13.8029 10.8498 14.0273 10.9474C14.0282 10.9478 14.0291 10.9482 14.03 10.9486L18.3043 12.7843C18.5968 12.9072 18.8412 13.1224 19.0001 13.3971C19.1598 13.6732 19.2243 13.9942 19.1837 14.3105C19.0254 15.5463 18.4222 16.682 17.487 17.5052C16.7679 18.1382 15.8904 18.553 14.9568 18.711C14.5275 18.7837 14.1013 18.7886 13.7153 18.7772C10.3616 18.6786 7.16606 17.3034 4.7868 14.9241C2.49762 12.6349 1.13787 9.59011 0.950386 6.37588C0.921536 5.88129 0.904547 5.31724 0.999862 4.75413C1.15788 3.82057 1.57271 2.94304 2.20572 2.22392C2.98367 1.34013 4.04075 0.752863 5.19763 0.557347Z" fill="currentColor" />
                          </svg></div>

                          <div className="text-text-primary font-semibold">
                            {t("Phone Number")}
                          </div>
                        </div>

                        {/* Phone Input مع العلم */}
                        <div className="relative w-[360px] h-12 border border-light rounded-sm overflow-visible font-sans">
                          <PhoneInput
                            country={"sa"}
                            value={contactData.phoneNumber}
                            onChange={(phone) => console.log(phone)}
                            containerClass="!w-full"
                            inputClass="!w-full !h-12 !border-0 !outline-none !text-text-primary !bg-background-secondary !px-3"
                            buttonClass="!h-12 !border-0 !bg-background-secondary !pr-2 flex items-center relative"
                            dropdownClass="!absolute !top-full !left-0   !max-h-60 !overflow-y-auto !bg-background-secondary border text-text-primary z-50"
                          />
                          {/* الخط العمودي */}
                          <div className="absolute left-[56px] top-3 w-px h-6 bg-light pointer-events-none"></div>
                        </div>
                      </div>

                      <div className="flex justify-end p-2 text-secondary-dark ">
                        <PlusIcon className="w-8 h-8  cursor-pointer" />
                      </div>
                    </div>




                  </div>
                </Grid>
                <Grid size={6}>
                  {/* Email */}

                  <div className="flex ">
                    <div className="flex w-[100px] items-center gap-1">
                      <div className="  text-text-primary ">         <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.07923 0.787497C10.0441 0.737503 11.9541 0.737499 13.9191 0.787497C17.157 0.869496 18.9413 0.915255 20.2843 2.25625C21.6291 3.61122 21.6655 5.3485 21.7325 8.50136C21.7535 9.50833 21.7535 10.4866 21.7325 11.4936C21.6656 14.6461 21.6288 16.3819 20.2872 17.7348C18.9422 19.0788 17.158 19.1244 13.92 19.2064C12.9381 19.2314 11.9691 19.2445 11.0001 19.2445C10.0312 19.2445 9.06212 19.2314 8.0802 19.2064C4.84234 19.1244 3.05795 19.0785 1.71497 17.7377C0.370009 16.3827 0.332745 14.6454 0.265749 11.4926C0.24475 10.4856 0.244751 9.50735 0.265749 8.50039C0.332749 5.34739 0.370038 3.6112 1.71204 2.2582C3.05703 0.914271 4.84128 0.869495 8.07923 0.787497ZM13.881 2.28554C11.9421 2.23555 10.0572 2.23555 8.11731 2.28554C5.07934 2.36254 3.69256 2.39684 2.77356 3.31582C1.85556 4.24182 1.82677 5.58664 1.76477 8.53164C1.74378 9.5165 1.74378 10.4745 1.76477 11.4603C1.82677 14.4053 1.85648 15.7502 2.77747 16.6771C3.69447 17.593 5.08048 17.6294 8.11829 17.7064C10.0572 17.7564 11.9421 17.7564 13.882 17.7064C16.9199 17.6294 18.3057 17.5941 19.2247 16.6752C20.1427 15.7492 20.1715 14.4053 20.2335 11.4603C20.2545 10.4755 20.2545 9.5175 20.2335 8.53164C20.1715 5.58664 20.1428 4.24086 19.2218 3.31386C18.3048 2.39817 16.9186 2.36253 13.881 2.28554ZM5.35462 6.11074C5.56562 5.75474 6.02596 5.63509 6.38196 5.84609L9.32337 7.58633C10.7954 8.45333 11.2039 8.45333 12.6779 7.58633L15.6183 5.84707C15.9753 5.63607 16.4356 5.75472 16.6456 6.11172C16.8564 6.46859 16.7387 6.92802 16.382 7.13808L13.4396 8.87832C12.4588 9.45619 11.73 9.74442 11.0001 9.74453C10.2711 9.74453 9.54165 9.45532 8.56165 8.87832L5.61829 7.13711C5.26276 6.92603 5.14393 6.46654 5.35462 6.11074Z" fill="currentColor" />
                      </svg></div>

                      <div className="text-text-primary font-semibold">
                        {t("Email")}:
                      </div>
                    </div>
                    <Input
                      className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.email}
                    />
                  </div>
                </Grid>

                <div className="flex items-center  gap-22  ">
                  <div className="flex w-[177px] items-center gap-4 ">
                    <div className="  text-text-primary ">     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 7.5C10.5 7.20333 10.588 6.91332 10.7528 6.66665C10.9176 6.41997 11.1519 6.22771 11.426 6.11418C11.7001 6.00065 12.0017 5.97094 12.2926 6.02882C12.5836 6.0867 12.8509 6.22956 13.0607 6.43934C13.2704 6.64912 13.4133 6.91639 13.4712 7.20736C13.5291 7.49834 13.4994 7.79994 13.3858 8.07403C13.2723 8.34811 13.08 8.58238 12.8334 8.7472C12.5867 8.91203 12.2967 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5ZM6 7.5C6 5.9087 6.63214 4.38258 7.75736 3.25736C8.88258 2.13214 10.4087 1.5 12 1.5C13.5913 1.5 15.1174 2.13214 16.2426 3.25736C17.3679 4.38258 18 5.9087 18 7.5C18 13.1203 12.6019 16.2694 12.375 16.4016C12.2617 16.4663 12.1334 16.5004 12.0028 16.5004C11.8723 16.5004 11.744 16.4663 11.6306 16.4016C11.3981 16.2694 6 13.125 6 7.5ZM7.5 7.5C7.5 11.4563 10.86 14.0822 12 14.8594C13.1391 14.0831 16.5 11.4563 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5ZM19.0097 13.8403C18.8251 13.7793 18.624 13.7924 18.4489 13.8768C18.2738 13.9612 18.1382 14.1102 18.0709 14.2926C18.0035 14.475 18.0096 14.6764 18.0879 14.8543C18.1661 15.0323 18.3104 15.1729 18.4903 15.2466C20.0381 15.8194 21 16.5863 21 17.25C21 18.5025 17.5763 20.25 12 20.25C6.42375 20.25 3 18.5025 3 17.25C3 16.5863 3.96187 15.8194 5.50969 15.2475C5.6896 15.1739 5.8339 15.0332 5.91215 14.8553C5.99039 14.6773 5.99648 14.4759 5.92913 14.2935C5.86178 14.1112 5.72624 13.9621 5.5511 13.8777C5.37596 13.7933 5.17491 13.7803 4.99031 13.8412C2.73937 14.6709 1.5 15.8822 1.5 17.25C1.5 20.1731 6.91031 21.75 12 21.75C17.0897 21.75 22.5 20.1731 22.5 17.25C22.5 15.8822 21.2606 14.6709 19.0097 13.8403Z" fill="currentColor" />
                    </svg>
                    </div>

                    <div className=" text-text-primary font-semibold ">
                      {t("Physical Address")}:
                    </div>
                  </div>
                  <div className="flex gap-8 flex-wrap  ">
                    {addressFields(t).map((field, index) => (
                      <Input
                        key={index}
                        className="w-[172px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                        placeholder={field.label}
                      />
                    ))}
                  </div>
                </div>

                <Grid size={6}>
                  <div className="flex items-center gap-1">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-6 h-6">
                        <div className="   text-text-primary ">   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41505 20.7188 6.93683 18.891 5.109C17.0632 3.28116 14.585 2.25298 12 2.25ZM20.25 12C20.2507 12.7608 20.1456 13.5181 19.9378 14.25H16.3275C16.5575 12.7588 16.5575 11.2412 16.3275 9.75H19.9378C20.1456 10.4819 20.2507 11.2392 20.25 12ZM9.5625 15.75H14.4375C13.9572 17.3237 13.1235 18.7667 12 19.9688C10.877 18.7664 10.0433 17.3235 9.5625 15.75ZM9.19688 14.25C8.93939 12.7611 8.93939 11.2389 9.19688 9.75H14.8106C15.0681 11.2389 15.0681 12.7611 14.8106 14.25H9.19688ZM3.75 12C3.74935 11.2392 3.85442 10.4819 4.06219 9.75H7.6725C7.4425 11.2412 7.4425 12.7588 7.6725 14.25H4.06219C3.85442 13.5181 3.74935 12.7608 3.75 12ZM14.4375 8.25H9.5625C10.0428 6.67632 10.8765 5.2333 12 4.03125C13.1231 5.23361 13.9567 6.67653 14.4375 8.25ZM19.3434 8.25H16.0041C15.5832 6.70585 14.8738 5.25532 13.9134 3.975C15.0738 4.25375 16.1602 4.7801 17.098 5.51799C18.0359 6.25588 18.8032 7.18784 19.3472 8.25H19.3434ZM10.0866 3.975C9.12619 5.25532 8.41683 6.70585 7.99594 8.25H4.65282C5.19682 7.18784 5.96407 6.25588 6.90196 5.51799C7.83985 4.7801 8.92621 4.25375 10.0866 3.975ZM4.65282 15.75H7.99594C8.41683 17.2941 9.12619 18.7447 10.0866 20.025C8.92621 19.7463 7.83985 19.2199 6.90196 18.482C5.96407 17.7441 5.19682 16.8122 4.65282 15.75ZM13.9134 20.025C14.8738 18.7447 15.5832 17.2941 16.0041 15.75H19.3472C18.8032 16.8122 18.0359 17.7441 17.098 18.482C16.1602 19.2199 15.0738 19.7463 13.9134 20.025Z" fill="currentColor" />
                        </svg>
                        </div>

                      </div>
                      <div className="text-text-primary font-semibold">
                        {t("Company Website")}:
                      </div>
                    </div>
                    <Input
                      className="w-[360px] h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.website}
                    />
                  </div>


                </Grid>
                <Grid size={6}>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                      <div className="relative w-6 h-6 ">
                        <div className="   text-text-primary "> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z" fill="currentColor" />
                        </svg></div>

                      </div>
                      <div className="text-text-primary font-semibold">
                        {t("Maps Location")}:
                      </div>
                    </div>
                    <Input
                      className="w-[360px]  h-12 border-light border bg-background-secondary  text-text-primary  font-sans"
                      defaultValue={contactData.mapsLocation}
                    />
                  </div>

                </Grid>

              </Grid>
            </div>

            }

          />





























          {/* Doctors & Staff Collapsible */}

          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={<div>
              <div className="flex items-center gap-4">
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Doctors")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("& ")}
                </h2>
                <h2 className="font-title-16px-bold   w-96 font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] [font-style:var(--title-16px-bold-font-style)]">
                  {t("Staff")}
                </h2>
                <div className="flex gap-2">
                  <Badge className="bg-secondary-light text-on-surface-primary rounded-[20px] px-2.5 py-1.5">
                    {t("All")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("Doctors")}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-bg text-on-surface-primary rounded-[20px] px-2.5 py-1.5"
                  >
                    {t("Staff")}
                  </Badge>
                </div>
              </div></div>}
            initiallyOpen={isOpen.doctorsStaff}
            onOpenChange={(open) => handleToggle("doctorsStaff", open)}
            content={<div> <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[98px] text-center  text-text-praimary  font-semibold">
                    {t("NO")}
                  </TableHead>
                  <TableHead className="text-center w-64 text-text-praimary  font-semibold">
                    {t("User-ID")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("Name")}
                  </TableHead>
       
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("User Type")}
                  </TableHead>
                  <TableHead className="text-center  text-text-praimary  font-semibold">
                    {t("Status")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctorsAndStaff.map((person) => (
                  <TableRow
                    key={person.number}
                    className="border-b border-[#e4e2dd]"
                  >
                    <TableCell className="text-center  text-text-praimary  font-semibold">
                      {person.number}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userId}
                    </TableCell>
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      <div className="flex items-center gap-2 justify-center">
                        <Avatar
                          src={person.avatar}
                          alt={person.name}
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: !person.avatar ? "var(--theme-text-accent)" : "transparent", // لون الدائرة من متغير الثيم
                          }}
                        >
                          {/* إذا ما في صورة، تظل الدائرة ملونة بدون أي نص */}
                        </Avatar>
                        <span>{person.name}</span>
                      </div>
                    </TableCell>
                  
                    <TableCell className="text-center text-text-primary font-title-14px-semibold">
                      {person.userType}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">

                        <Badge className="bg-secondary-light text-secondary-dark rounded-[20px] w-[92px] y-[24px] justify-center">
                           {t("Active")}
                        </Badge>






                      </div>
                    </TableCell>
                  </TableRow>
                )



                )}
              </TableBody>
            </Table>

              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-title-11px-regular font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("Showing")}
                  </span>
                  <Select defaultValue="1">
                    <SelectTrigger className="w-auto bg-secondary-light rounded-[20px] border-0 px-2 py-1.5">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="font-title-11px-regular w-96 font-[number:var(--title-11px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-11px-regular-font-size)] tracking-[var(--title-11px-regular-letter-spacing)] leading-[var(--title-11px-regular-line-height)] [font-style:var(--title-11px-regular-font-style)]">
                    {t("out of 14")}
                  </span>
                </div>



                <Pagination className="justify-end">
                  <PaginationContent className="gap-[5px]">
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >

                        {local === "en" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                          </svg>
                        )}


                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >



                        {local === "en" ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="CurrentColor" />
                          </svg>
                        )}
                      </Button>


                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        className="w-8 h-8 p-2.5 bg-secondary-dark text-white rounded-[32px] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]"
                        isActive
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <span className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-lg flex items-center justify-center [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        ...
                      </span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="w-8 h-8 p-2.5 bg-white text-[#333333] rounded-[32px] border border-[#f1f1f1] [font-family:'Open_Sans',Helvetica] font-semibold text-[13px]">
                        10
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >
                        <div>




                          {local === "en" ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="CurrentColor" />
                            </svg>
                          )}



                        </div>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-2.5 rounded-[32px] border-[#f1f1f1]"
                      >




                        {local === "en" ? (

                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27398 4L3.33398 4.94L6.38732 8L3.33398 11.06L4.27398 12L8.27398 8L4.27398 4Z" fill="CurrentColor" />
                            <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="CurrentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.726 12L12.666 11.06L9.61268 8L12.666 4.94L11.726 4L7.72602 8L11.726 12Z" fill="CurrentColor" />
                            <path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="CurrentColor" />
                          </svg>
                        )}




                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
            }

          />





          {/* Working Days Collapsible */}
          <ReusableCollapsible  dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Working Days")}
            initiallyOpen={isOpen.workingDays}
            onOpenChange={(open) => handleToggle("workingDays", open)}
            content={<div><div className="flex flex-col gap-4 ">
              {workingDays.map((workDay, index) => (
                <div key={index} className="flex items-center gap-8 w-full">
                  <div className="flex items-center gap-5 w-[120px] ">
                    {/* Checkbox */}
                    <CustomCheckbox
                      checked={activeDays[index]}
                      onChange={() => toggleDay(index)}
                    />
                    <label
                      className={`${dark ? "text-white" : "text-[#2a2b2a]"
                        } tracking-[0.07px] leading-6 [font-family:'Lato',Helvetica] font-normal text-sm whitespace-nowrap`}
                    >
                      {t(`${workDay.day}`)}
                    </label>
                  </div>

                  <div className="flex items-center gap-4 w-[810px]">
                    {/* أوقات العمل */}
                    <div
                      className={`flex items-center w-[404px] py-[7px] pl-[13px] border rounded transition
                              ${activeDays[index]
                          ? " bg-background-primary border-[#e4e2dd]"
                          : "  bg-background-tertiary "
                        }`}
                    >
                      <TimeRangePicker />
                    </div>


                  </div>
                </div>

              ))}
            </div></div>}
          />


          {/* Maps Location Collapsible */}
          <ReusableCollapsible dir={`${local === "ar" ? "rtl" : "ltr"}`}
            title={t("Maps Location")}
            initiallyOpen={isOpen.mapsLocation}
            onOpenChange={(open) => handleToggle("mapsLocation", open)}
            content={<div>      <div className="w-full h-[332px] bg-[url(/background.png)] bg-cover bg-center rounded" />
              <p className="font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-on-surface-primary text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
                {t("245, King Fahd Road, Al Olaya, Saudi Arabia, KSA")}
              </p></div>}

          />













        </CardContent>
      </Card>
    </div>
  );
}
