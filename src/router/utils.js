/**
 * Created by SamHong on 2017/9/28.
 */

import axios from 'axios'
import qs from 'qs'
import api from '../common/prot_url'

//  get
export const fetchGet = (target, data) => {
  if (data) {
    var params = [];
    for (var i in data) {
      params.push(i);
      params.push(data[i])
    }
    target = target + '/' + params.join('/')
  }
  return new Promise((resolve, reject) => {
    axios({
      url: api.get_http_ip.HTTP_IP + target,
      method: 'get',
      withCredentials: false
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
};

//  post
export const fetchPost = (target, data) => {
  return new Promise((resolve, reject) => {
    var postData = qs.stringify(data);
    axios({
      url: api.GET_HTTP_IP.HTTP_IP + 'public' + target,
      method: 'post',
      data: postData,
      withCredentials: false
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
};

//  put
export const fetchPut = (target, data) => {
  return new Promise((resolve, reject) => {
    var postData = qs.stringify(data);
    axios({
      url: api.GET_HTTP_IP.HTTP_IP + 'public' + target,
      method: 'put',
      data: postData,
      withCredentials: false
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
};

//  delete
export const fetchDelete = (target, data) => {
  if (data) {
    var params = [];
    for (var i in data) {
      params.push(i);
      params.push(data[i])
    }
    target = target + '/' + params.join('/')
  }
  return new Promise((resolve, reject) => {
    axios({
      url: api.GET_HTTP_IP.HTTP_IP + 'public' + target,
      method: 'delete',
      withCredentials: false
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
};


